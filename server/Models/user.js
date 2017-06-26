module.exports=(sequelize,DataTypes)=>{
	var User=sequelize.define('user',{
		username:DataTypes.STRING,	
		passwordhash:DataTypes.STRING
	});
	return User;
}