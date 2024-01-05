module.exports = {
	RegisterUser: require('./RegisterUser'),
	AuthenticateUser: require('./AuthenticateUser'),
	GetNewArrivals: require('./GetProducts'),
	GetTopSellingProducts: require('./GetProducts'),
	RegisterBusiness: require('./RegisterBusiness'),
	AddProductAndImages: require('./AddProductAndImages'),
	FetchProductDetails: require('./FetchProductDetails'),
	FetchCategoriesAndSubcategories: require('./Fetch'),
	AddProductToCart: require('./AddProductToCart'),
	GetCart: require('./FetchByUserID'),
	GetWishlist: require('./FetchByUserID'),
	AddProductToWishlist: require('./AddProductToWishlist'),
}