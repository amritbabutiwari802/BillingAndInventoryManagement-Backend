export default async function exceptionHandler(
  func: (param: any) => any,
  param: any,
) {
  try {
    const result = await func(param);
    return { success: true, result };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}
