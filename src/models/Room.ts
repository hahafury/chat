module.exports = (sequelize: any, DataTypes: any): any => {
	const Room = sequelize.define('Room', {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				require: false
			},
			type: {
				type: DataTypes.STRING,
				require: true
			},
			photo: {
				type: DataTypes.STRING
			}
		},
		{
			timestamps: true,
			sequelize,
			underscored: true,
			tableName: 'rooms',
		});

	Room.associate = (models: any) => {
		Room.belongsToMany(models.User, {
			through: models.Participant,
			foreignKey: 'room_id',
			as: 'users'
		});
		Room.hasOne(models.Message, {
			foreignKey: 'room_id',
			target: 'id',
			as: 'preview'
		});
		Room.hasMany(models.Message, {
			foreignKey: 'room_id',
			target: 'id',
			as: 'messages'
		});
	};

	return Room;
};