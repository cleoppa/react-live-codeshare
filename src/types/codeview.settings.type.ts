export interface ISettingsType {
    props: {
        lang: string;
        langs: Array<object>;
        clickHandlers: {[name: string]: Function};
    };
}

export interface ISettingsTypeValue {
    id?: number;
    aliases: Array<string>;
}