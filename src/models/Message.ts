module.exports = (sequelize: any, DataTypes: any): any => {
	const Message = sequelize.define('Message', {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			userId: {
				type: DataTypes.INTEGER,
				require: true
			},
			roomId: {
				type: DataTypes.INTEGER,
				require: true
			},
			body: {
				type: DataTypes.STRING,
				require: true
			}
		},
		{
			timestamps: true,
			sequelize,
			underscored: true,
		});

	Message.associate = (models: any) => {
		Message.belongsTo(models.Room, {foreignKey: 'room_id', targetKey: 'id', as: 'preview'});
		Message.belongsTo(models.User, {foreignKey: 'user_id', targetKey: 'id', as: 'user'})
	};

	return Message;
};