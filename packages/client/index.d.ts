import { Client, Collection } from 'discord.js';
declare module 'discord.js' {
    interface Client {
        _commands: Collection<string, ApplicationCommand & {
            ephemeral: boolean;
            execute: (interaction: CommandInteraction) => any;
            complete: (interaction: AutocompleteInteraction) => any;
        }>;
    }
}
export declare class Megabot extends Client {
    constructor();
}
