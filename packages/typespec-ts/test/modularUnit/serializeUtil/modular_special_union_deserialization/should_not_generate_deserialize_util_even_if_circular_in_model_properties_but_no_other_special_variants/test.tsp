@discriminator("kind")
model Pet {
  kind: string;
  name: string;
  weight?: float32;
}
model Cat extends Pet {
  kind: "cat";
  meow: int32;
}
@discriminator("type")
model Dog extends Pet {
  kind: "dog";
  type: string;
  bark: string;
}
model Gold extends Dog {
  type: "gold";
  friends: Pet[];
}
op read(): {
  @body body: Pet;
};
