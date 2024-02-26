const getProductStatistics = require('./productStats');

(async () => {
  try {
    const stats = await getProductStatistics();
    console.log(stats); 
  } catch (error) {
    console.error(error);
  }
})();
