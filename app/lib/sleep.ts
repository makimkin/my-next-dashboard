// #endregion --------------------------------------------------------------------------------------
// #region SLEEP FUNCTION
// -----------------------------------------------------------------------------------------------*/
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const randomSleep = async (minMs: number, maxMs: number) => {
  await sleep(minMs + Math.random() * maxMs);
};

// #endregion --------------------------------------------------------------------------------------
export { sleep, randomSleep };
