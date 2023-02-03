export interface CharacterDetailInfo {
    CharacterClassName: string;
    CharacterImage: string;
    CharacterLevel: number;
    CharacterName: string;
    ExpeditionLevel: number;
    GuildMemberGrade: string;
    GuildName: string;
    ItemAvgLevel: string;
    ItemMaxLevel: string;
    PvpGradeName: string;
    ServerName: string;
    Stats: {
        Tooltip: string;
        Type: string;
        Value: number;
    };
    Tendencies: {
        MaxPoint: number;
        Point: number;
        Type: string;
    }
    Title: string;
    TotalSkillPoint: number;
    TownLevel: number;
    TownName: string;
    UsingSkillPoint: number;
}

