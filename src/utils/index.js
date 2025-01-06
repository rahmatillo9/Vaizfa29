export function Validate(obj) {
  if (obj.name.trim() === "") {
    return {
      message: "Ism-familiya kiriting",
      target: "name",
    };
  }
  if (obj.yoshi === "") {
    return {
      message: "yoshini kiriting",
      target: "yoshi",
    };
  }
  if (obj.kasbi.trim() === "") {
    return {
      message: "kasbini kiriting",
      target: "kasbi",
    };
  }
  if (obj.tajribasi.trim() === "") {
    return {
      message: "tajribasini kiriting",
      target: "tajribasi",
    };
  }
}
