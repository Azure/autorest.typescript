export interface WidgetOutput {
    id: string;
    weight: number;
    color: "red" | "blue";
}

export interface ErrorModelOutput {
    code: number;
    message: string;
}
