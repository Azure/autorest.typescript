const { join } = require('path');
const { readdirSync } = require('fs');

async function collectCoverage() {
    // search for reports
    const coverageFolder = join(__dirname, "..", "node_modules", "@microsoft.azure", "autorest.testserver", "coverage");
    const report = {};
    const getWorstCaseReport = (category) => {
        const reports = readdirSync(coverageFolder).filter(f => f.startsWith(`report-${category}`) && f.endsWith(".json")).map(f => require(join(coverageFolder, f)));
        const result = {};
        for (const feature of [].concat.apply([], reports.map(r => Object.keys(r)))) {
            result[feature] = Math.min(...reports.map(r => r[feature] || 0));
        }
        return result;
    };

    report.General = getWorstCaseReport("vanilla");
    report.Azure = getWorstCaseReport("azure");
    if (Object.keys(report).every(cat => Object.keys(report[cat]).length === 0)) throw "no report";

    let comment = "";
    let allTotal = 0;
    let allCovered = 0;

    for (const category of Object.keys(report)) {
        const categoryObject = report[category];
        const features = Object.keys(categoryObject).sort().map(x => [x, categoryObject[x] > 0]);
        const countTotal = features.length;
        allTotal += countTotal;
        const countCovered = features.filter(x => x[1]).length;
        allCovered += countCovered;
        const countMissing = countTotal - countCovered;
        const percentCoverage = countCovered / (countTotal || 1) * 100 | 0;
        comment += `## ${percentCoverage === 100 ? "✔️" : "❌️"} ${category}: ${percentCoverage}%\n\n`;
        if (countMissing > 0) {
            comment += `<details><summary>${countMissing} out of ${countTotal} features are not covered by tests</summary><p>\n\n`;
            let first = true;
            for (const feature of features.filter(x => !x[1])) {
                if (!first) comment += `, `;
                first = false;

                const f = feature[0];
                comment += `[\`${f}\`](https://github.com/Azure/autorest.testserver/search?q=${f})`;
            }
            comment += "</p></details>";
        } else if (countTotal === 0) {
            comment += `no tests were run for this category\n`;
        }
        comment += "\n\n";
    }

    const testServerVersion = require(join(coverageFolder, "..", "package.json")).version;
    comment = `*using autorest.testserver version ${testServerVersion}*\n\n${comment}`;

    const allPercent = allCovered / (allTotal || 1) * 100 | 0;
    const json = JSON.stringify({
        title: `${allPercent}% test coverage`,
        summary: comment
      });

    console.log(`---output
${json}
---`);
}

collectCoverage();
