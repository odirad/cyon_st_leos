import db from "@/(authed)/@utils/db";

export default async function (entity: any, length = 10) {
  const arr: number[] = [];
  const allPhotos = await entity.findMany();
  const idArray = allPhotos.map((element: { id: any }) => element.id);
  while (arr.length < length) {
    if (arr.length >= idArray.length) break;
    const randomIndex = Math.floor(Math.random() * idArray.length);
    const randomIdFromTable = idArray[randomIndex];
    if (arr.indexOf(randomIdFromTable) === -1) arr.push(randomIdFromTable);
  }
  let result = arr.map((id) =>
    allPhotos.find((obj: { id: number }) => {
      return obj.id === id;
    })
  );
  return result;
}
