module.exports = (sequelize: any, DataTypes: any): any => {
	const User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		email: {
			type: DataTypes.STRING,
			require: true
		},
		password: {
			type: DataTypes.STRING,
			require: true
		},
		username: {
			type: DataTypes.STRING,
			require: true
		},
		lastRoomId: {
			type: DataTypes.INTEGER,
			require: false
		}
	},
	{
		timestamps: true,
		sequelize,
		underscored: true,
		tableName: 'users'
	});

	User.associate = (models: any) => {
		User.belongsToMany(models.Room, {
			through: models.Participant,
			foreignKey: 'user_id',
			as: 'rooms'
		});
		User.hasMany(models.Message, {
			foreignKey: 'user_id',
			as: 'messages'
		});
		User.hasOne(models.Message, {
			foreignKey: 'user_id',
			target: 'id',
			as: 'user'
		});
		User.hasOne(models.Room, {
			foreignKey: 'id',
			target: 'id',
			as: 'lastRoom'
		});
	};

	return User;
};