const fs = require("fs");

class Contenedor {
  constructor(fileName) {
    this.fileName = "./" + fileName + ".json";
  }

  async getData() {
    try {
      return await fs.promises.readFile(this.fileName, "utf-8");
    } catch (error) {
      fs.writeFile(this.fileName, "[]", (error) => {
        if (error) {
          console.log("El archivo no se pudo crear.");
        }
      });
    }
  }

  async save(object) {
    try {
      let fileContent = await this.getData();
      let jsonContent = JSON.parse(fileContent);
      const id = jsonContent.map((x) => x.id).sort();
      object.id = id[id.length - 1] + 1;

      if (!object.id) {
        object.id = 1;
      }

      jsonContent.push(object);
      await fs.promises.writeFile(this.fileName, JSON.stringify(jsonContent));
    } catch (err) {
      console.log(err);
    }
  }

  async getById(Number) {
    const data = await this.getData();
    const array = JSON.parse(data);
    array.forEach((element) => {
      if (Number === element.id) {
        console.log({ ...element });
        return;
      }
    });
  }

  async getAll() {
    const data = await this.getData();
    return JSON.parse(data);
  }

  async deleteById(Number) {
    const data = await this.getData();
    const array = JSON.parse(data);
    const newArray = [];
    array.forEach((element) => {
      if (!(Number === element.id)) {
        newArray.push({ ...element });
      }
    });
    await fs.promises.writeFile(this.fileName, JSON.stringify(newArray));
  }

  async deleteAll() {
    const deleteAllArray = [];
    await fs.promises.writeFile(this.fileName, JSON.stringify(deleteAllArray));
  }
}

module.exports = Contenedor;
