export interface CharacterDetailInfo {
    CharacterImage: string;
    ExpeditionLevel: number;
    PvpGradeName: string;
    TownLevel: number;
    TownName: string;
    Title: string;
    GuildMemberGrade: string;
    GuildName: string;
    UsingSkillPoint: number;
    TotalSkillPoint: number;
    Stats: [
      {
        Type: string;
        Value: string;
        Tooltip: [
          string,
        ]
      }
    ],
    Tendencies: [
      {
        Type: string;
        Point: number;
        MaxPoint: number;
      }
    ],
    ServerName: string;
    CharacterName: string;
    CharacterLevel: string;
    CharacterClassName: string;
    ItemAvgLevel: string;
    ItemMaxLevel: string;
  }