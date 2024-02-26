const Product = require('./product'); // Import the Product model

/**
 * Executes an aggregation pipeline to calculate product statistics
 * @returns {Object} - Aggregated product statistics
 */
async function getProductStatistics() {
  try {
    const pipeline = [
      {
        $group: {
          _id: null, 
          totalProducts: { $sum: 1 }, 
          averagePrice: { $avg: '$price' }, 
          highestQuantity: { $max: '$quantity' }, 
        },
      },
    ];

    const result = await Product.aggregate(pipeline);
    return result[0]; // Return the first element (aggregated stats object)
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for handling
  }
}

module.exports = getProductStatistics;
