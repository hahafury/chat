module.exports = (sequelize: any, DataTypes: any): any => {
	const Participant = sequelize.define('Participant', {
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
		},
		{
			timestamps: true,
			sequelize,
			underscored: true,
			tableName: 'participants',
		});

	Participant.associate = (models: any) => {
		Participant.belongsTo(models.Room, {foreignKey: 'room_id', targetKey: 'id'});
		Participant.belongsTo(models.User, {foreignKey: 'user_id', targetKey: 'id'});
	};

	return Participant;
};