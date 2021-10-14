import { CommandInteraction } from 'discord.js';

export default {
	name: 'ping',
	description: 'Check the ping of the bot',
	execute(interaction: CommandInteraction) {
		await interaction.editReply('Pong!');
	},
};
