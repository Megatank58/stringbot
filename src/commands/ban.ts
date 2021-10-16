import { CommandInteraction, ApplicationCommandData, GuildMember } from 'discord.js';

export default {
	name: 'ban',
	description: 'ban a member',
	options: [
		{
			name: 'member',
			description: 'The member to ban',
			type: 6,
			required: true,
		},
		{
			name: 'reason',
			description: 'The reason for ban',
			type: 3,
		},
	],
	async execute(interaction: CommandInteraction) {
		const member = interaction.options.getMember('member')!;
		const reason = interaction.options.getString('reason')!;

		if (!member || !(member instanceof GuildMember)) return;

		member.user.send({
			embeds: [
				{
					description: `You were banned in **${interaction.guild?.name}** ${
						reason ? `**|| ${reason}**` : ''
					}`,
					color: 'RED',
				},
			],
		});

		member.ban({ reason: reason });

		interaction.editReply({
			embeds: [
				{
					description: `:white_check_mark: ***${member} was banned.*** ${
						reason ? `**|| ${reason}**` : ''
					}`,
					color: 'GREEN',
				},
			],
		});
	},
} as ApplicationCommandData;
