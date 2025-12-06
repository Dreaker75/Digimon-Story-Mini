// import { Enum } from "./enum";

export const MAX_LEVEL = 99;
export const MAX_SPECIES_EXP = 9999;
export const MAX_TOTAL_EXP = 99999;

export const Locations = {
    Town: "town",
    Maps: "maps",
    DigiFarm: "digifarm",
}

export const DataNames = {
    //#region Games
    ds: "ds",
    dssm: "dssm",
    dsle: "dsle",
    dssxw: "dssxw",
    //#endregion
    //#region Versions
    sunburst: "Sunburst",
    moonlight: "Moonlight",
    red: "Red",
    blue: "Blue",
    both: "Both",
    //#endregion
    //#region Maps
    //#region Digimon World DS
    dataForest: "dataForest",
    trainingPeak: "trainingPeak",
    steamyJungle: "steamyJungle",
    sheerValley: "sheerValley",
    drainTunnel: "drainTunnel",
    chromeMine: "chromeMine",
    packetSwamp: "packetSwamp",
    mangoveWoods: "mangoveWoods",
    ancientCanyon: "ancientCanyon",
    junkFactory: "junkFactory",
    skyPalace: "skyPalace",
    tropicalIsles: "tropicalIsles",
    hardMountains: "hardMountains",
    underseaDrive: "underseaDrive",
    lavaRiver: "lavaRiver",
    coreField: "coreField",
    destroyedBelt: "destroyedBelt",
    //#endregion
    none: "none",
    //#endregion
    //#region Digimon
    Koromon: "Koromon",
    Tsunomon: "Tsunomon",
    Tanemon: "Tanemon",
    Poyomon: "Poyomon",
    Tokomon: "Tokomon",
    Puttomon: "Puttomon",
    Chicomon: "Chicomon",
    Minomon: "Minomon",
    Gigimon: "Gigimon",
    Gummymon: "Gummymon",
    Kokomon: "Kokomon",
    Wanyamon: "Wanyamon",
    Budmon: "Budmon",
    Botamon: "Botamon",
    Pagumon: "Pagumon",
    Kuramon: "Kuramon",
    Tsumemon: "Tsumemon",
    Kapurimon: "Kapurimon",
    Dorimon: "Dorimon",
    Sunmon: "Sunmon",
    Moonmon: "Moonmon",
    Chicchimon: "Chicchimon",
    Culumon: "Culumon",
    Pickmon: "Pickmon",
    Bombmon: "Bombmon",
    Agumon: "Agumon",
    Gabumon: "Gabumon",
    Piyomon: "Piyomon",
    Palmon: "Palmon",
    Tentomon: "Tentomon",
    Gomamon: "Gomamon",
    Patamon: "Patamon",
    Plotmon: "Plotmon",
    Veemon: "Veemon",
    Wormmon: "Wormmon",
    Hawkmon: "Hawkmon",
    Armadimon: "Armadimon",
    Guilmon: "Guilmon",
    Renamon: "Renamon",
    Terriermon: "Terriermon",
    Lopmon: "Lopmon",
    Impmon: "Impmon",
    Lalamon: "Lalamon",
    Gaomon: "Gaomon",
    Falcomon: "Falcomon",
    PawnChessmonB: "PawnChessmonB",
    PawnChessmonW: "PawnChessmonW",
    Kudamon: "Kudamon",
    Kamemon: "Kamemon",
    Dorumon: "Dorumon",
    Monodramon: "Monodramon",
    BlackAgumon: "BlackAgumon",
    YukiAgumon: "YukiAgumon",
    Goburimon: "Goburimon",
    Shamamon: "Shamamon",
    SnowGoburimon: "SnowGoburimon",
    Kumamon: "Kumamon",
    Penmon: "Penmon",
    Muchomon: "Muchomon",
    Betamon: "Betamon",
    Otamamon: "Otamamon",
    Ganimon: "Ganimon",
    Gizamon: "Gizamon",
    Syakomon: "Syakomon",
    Kunemon: "Kunemon",
    DoKunemon: "DoKunemon",
    Floramon: "Floramon",
    Aruraumon: "Aruraumon",
    Mushroomon: "Mushroomon",
    ToyAgumon: "ToyAgumon",
    ToyAgumonB: "ToyAgumonB",
    Hagurumon: "Hagurumon",
    Solarmon: "Solarmon",
    Kotemon: "Kotemon",
    Kokuwamon: "Kokuwamon",
    Gotsumon: "Gotsumon",
    Bakumon: "Bakumon",
    Candlemon: "Candlemon",
    PicoDevimon: "PicoDevimon",
    Keramon: "Keramon",
    Tsukaimon: "Tsukaimon",
    Dracmon: "Dracmon",
    DotAgumon: "DotAgumon",
    DotFalcomon: "DotFalcomon",
    Coronamon: "Coronamon",
    Lunamon: "Lunamon",
    Hyokomon: "Hyokomon",
    Lucemon: "Lucemon",
    Shoutmon: "Shoutmon",
    Ballistamon: "Ballistamon",
    Starmon2010: "Starmon2010",
    Sparrowmon: "Sparrowmon",
    Cutemon: "Cutemon",
    Monitormon: "Monitormon",
    Spadamon: "Spadamon",
    Dondokomon: "Dondokomon",
    Gaosmon: "Gaosmon",
    ShoutmonB: "ShoutmonB",
    Chikurimon: "Chikurimon",
    Troopmon: "Troopmon",
    StarSword: "StarSword",
    Greymon: "Greymon",
    Garurumon: "Garurumon",
    Birdramon: "Birdramon",
    Togemon: "Togemon",
    Kabuterimon: "Kabuterimon",
    Ikkakumon: "Ikkakumon",
    Tailmon: "Tailmon",
    Angemon: "Angemon",
    ExVeemon: "ExVeemon",
    Stingmon: "Stingmon",
    Aquilamon: "Aquilamon",
    Ankylomon: "Ankylomon",
    Growlmon: "Growlmon",
    Kyubimon: "Kyubimon",
    Gargomon: "Gargomon",
    Guardromon: "Guardromon",
    Agunimon: "Agunimon",
    GeoGreymon: "GeoGreymon",
    Gaogamon: "Gaogamon",
    Sunflowmon: "Sunflowmon",
    Peckmon: "Peckmon",
    Gawappamon: "Gawappamon",
    KnightChessmonW: "KnightChessmonW",
    KnightChessmonB: "KnightChessmonB",
    Reppamon: "Reppamon",
    Veedramon: "Veedramon",
    Dorugamon: "Dorugamon",
    Raptordramon: "Raptordramon",
    Strikedramon: "Strikedramon",
    DarkTyrannomon: "DarkTyrannomon",
    Dinohumon: "Dinohumon",
    Monochromon: "Monochromon",
    Tyrannomon: "Tyrannomon",
    Airdramon: "Airdramon",
    Flarerizamon: "Flarerizamon",
    Centalmon: "Centalmon",
    Leomon: "Leomon",
    Ogremon: "Ogremon",
    Fugamon: "Fugamon",
    Hyogamon: "Hyogamon",
    Grizzmon: "Grizzmon",
    Seasarmon: "Seasarmon",
    Hanumon: "Hanumon",
    Minotarumon: "Minotarumon",
    Yukidarumon: "Yukidarumon",
    Tsuchidarumon: "Tsuchidarumon",
    Tortamon: "Tortamon",
    Nanimon: "Nanimon",
    BomberNanimon: "BomberNanimon",
    Mojyamon: "Mojyamon",
    JungleMojyamon: "JungleMojyamon",
    Drimogemon: "Drimogemon",
    NiseDrimogemon: "NiseDrimogemon",
    Diatrymon: "Diatrymon",
    Saberdramon: "Saberdramon",
    Kokatorimon: "Kokatorimon",
    Akatorimon: "Akatorimon",
    Kiwimon: "Kiwimon",
    Seadramon: "Seadramon",
    Icemon: "Icemon",
    Gekomon: "Gekomon",
    Numemon: "Numemon",
    Geremon: "Geremon",
    KaratsukiNumemon: "KaratsukiNumemon",
    Shellmon: "Shellmon",
    MoriShellmon: "MoriShellmon",
    Octomon: "Octomon",
    Gesomon: "Gesomon",
    Coelamon: "Coelamon",
    Rukamon: "Rukamon",
    Ebidramon: "Ebidramon",
    Kuwagamon: "Kuwagamon",
    Snimon: "Snimon",
    Dokugumon: "Dokugumon",
    Gokimon: "Gokimon",
    Flymon: "Flymon",
    Yanmamon: "Yanmamon",
    SandYanmamon: "SandYanmamon",
    Vegiemon: "Vegiemon",
    Weedmon: "Weedmon",
    RedVegiemon: "RedVegiemon",
    Woodmon: "Woodmon",
    Igamon: "Igamon",
    Kogamon: "Kogamon",
    Mechanorimon: "Mechanorimon",
    Tankmon: "Tankmon",
    Hookmon: "Hookmon",
    Revolmon: "Revolmon",
    Clockmon: "Clockmon",
    Thunderballmon: "Thunderballmon",
    Omekamon: "Omekamon",
    Golemon: "Golemon",
    Raremon: "Raremon",
    Sukamon: "Sukamon",
    PlatinumSukamon: "PlatinumSukamon",
    Starmon: "Starmon",
    Unimon: "Unimon",
    Sorcerymon: "Sorcerymon",
    Wizardmon: "Wizardmon",
    Devimon: "Devimon",
    IceDevimon: "IceDevimon",
    Devidramon: "Devidramon",
    Evilmon: "Evilmon",
    Bakemon: "Bakemon",
    Chrysalimon: "Chrysalimon",
    Wendimon: "Wendimon",
    DarkLizardmon: "DarkLizardmon",
    Musyamon: "Musyamon",
    Sangloupmon: "Sangloupmon",
    Firamon: "Firamon",
    Lekismon: "Lekismon",
    Buraimon: "Buraimon",
    Dorulumon: "Dorulumon",
    Greymon2010: "Greymon2010",
    GreymonO2010: "GreymonO2010",
    MailBirdramon: "MailBirdramon",
    SkullKnightmon: "SkullKnightmon",
    SkullKnightmonBR: "SkullKnightmonBR",
    DeadlyAxemon: "DeadlyAxemon",
    ShoutmonX2: "ShoutmonX2",
    JetSparrow: "JetSparrow",
    DoruluCannon: "DoruluCannon",
    Fladramon: "Fladramon",
    Shadramon: "Shadramon",
    Allomon: "Allomon",
    Lynxmon: "Lynxmon",
    Kenkimon: "Kenkimon",
    Owlmon: "Owlmon",
    Pipismon: "Pipismon",
    Shurimon: "Shurimon",
    Ponchomon: "Ponchomon",
    Kabukimon: "Kabukimon",
    Tylomon: "Tylomon",
    Seahomon: "Seahomon",
    Nefertimon: "Nefertimon",
    Toucanmon: "Toucanmon",
    Prairiemon: "Prairiemon",
    Magnamon: "Magnamon",
    Kongoumon: "Kongoumon",
    MetalGreymon: "MetalGreymon",
    WereGarurumonBlue: "WereGarurumonBlue",
    Garudamon: "Garudamon",
    Lilymon: "Lilymon",
    AtlurKabuterimonR: "AtlurKabuterimonR",
    Zudomon: "Zudomon",
    HolyAngemon: "HolyAngemon",
    Angewomon: "Angewomon",
    MegaloGrowlmon: "MegaloGrowlmon",
    Taomon: "Taomon",
    Rapidmon: "Rapidmon",
    Cyberdramon: "Cyberdramon",
    Antylamon: "Antylamon",
    Paildramon: "Paildramon",
    Silphymon: "Silphymon",
    Shakkoumon: "Shakkoumon",
    RizeGreymon: "RizeGreymon",
    MachGaogamon: "MachGaogamon",
    Lilamon: "Lilamon",
    Yatagaramon: "Yatagaramon",
    Shawujinmon: "Shawujinmon",
    BishopChessmon: "BishopChessmon",
    RookChessmon: "RookChessmon",
    Tyilinmon: "Tyilinmon",
    Dorugremon: "Dorugremon",
    Grademon: "Grademon",
    AeroVeedramon: "AeroVeedramon",
    BlackMegaloGrowlmon: "BlackMegaloGrowlmon",
    MasterTyrannomon: "MasterTyrannomon",
    Triceramon: "Triceramon",
    Vermillimon: "Vermillimon",
    Mametyramon: "Mametyramon",
    GrapLeomon: "GrapLeomon",
    Kyukimon: "Kyukimon",
    Etemon: "Etemon",
    Pandamon: "Pandamon",
    Mammon: "Mammon",
    Cerberumon: "Cerberumon",
    Bastemon: "Bastemon",
    Sinduramon: "Sinduramon",
    Karatenmon: "Karatenmon",
    Parrotmon: "Parrotmon",
    Deramon: "Deramon",
    Dagomon: "Dagomon",
    Mermaimon: "Mermaimon",
    Whamon: "Whamon",
    MegaSeadramon: "MegaSeadramon",
    WaruSeadramon: "WaruSeadramon",
    Brachimon: "Brachimon",
    Hangyomon: "Hangyomon",
    TonosamaGekomon: "TonosamaGekomon",
    Anomalocarimon: "Anomalocarimon",
    MarineDevimon: "MarineDevimon",
    AtlurKabuterimonB: "AtlurKabuterimonB",
    Dinobeemon: "Dinobeemon",
    Ookuwamon: "Ookuwamon",
    Arukenimon: "Arukenimon",
    Jureimon: "Jureimon",
    Blossomon: "Blossomon",
    ArgomonUltimate: "ArgomonUltimate",
    Andromon: "Andromon",
    MetalTyrannomon: "MetalTyrannomon",
    Megadramon: "Megadramon",
    Gigadramon: "Gigadramon",
    Mamemon: "Mamemon",
    MetalMamemon: "MetalMamemon",
    BigMamemon: "BigMamemon",
    Giromon: "Giromon",
    Tekkamon: "Tekkamon",
    Nanomon: "Nanomon",
    BlueMeramon: "BlueMeramon",
    Insekimon: "Insekimon",
    Garbemon: "Garbemon",
    Vademon: "Vademon",
    Volcamon: "Volcamon",
    Piccolomon: "Piccolomon",
    Knightmon: "Knightmon",
    SuperStarmon: "SuperStarmon",
    Monzaemon: "Monzaemon",
    Digitamamon: "Digitamamon",
    Wisemon: "Wisemon",
    WereGarurumonBlack: "WereGarurumonBlack",
    BlackRapidmon: "BlackRapidmon",
    SkullGreymon: "SkullGreymon",
    Kimeramon: "Kimeramon",
    Vamdemon: "Vamdemon",
    LadyDevimon: "LadyDevimon",
    Mummymon: "Mummymon",
    Infermon: "Infermon",
    Vajramon: "Vajramon",
    Phantomon: "Phantomon",
    Matadormon: "Matadormon",
    EXTyrannomon: "EXTyrannomon",
    SkullBaluchimon: "SkullBaluchimon",
    Scorpiomon: "Scorpiomon",
    Flaremon: "Flaremon",
    Crescemon: "Crescemon",
    Butenmon: "Butenmon",
    LucemonFM: "LucemonFM",
    MadLeomon: "MadLeomon",
    ShoutmonX3: "ShoutmonX3",
    ShoutmonX4: "ShoutmonX4",
    MetalGreymon2010: "MetalGreymon2010",
    DarkKnightmon: "DarkKnightmon",
    WarGreymon: "WarGreymon",
    MetalGarurumon: "MetalGarurumon",
    Hououmon: "Hououmon",
    Rosemon: "Rosemon",
    HeraclesKabuterimon: "HeraclesKabuterimon",
    Vikemon: "Vikemon",
    Seraphimon: "Seraphimon",
    Holydramon: "Holydramon",
    ImperialdramonDM: "ImperialdramonDM",
    ImperialdramonFM: "ImperialdramonFM",
    Dukemon: "Dukemon",
    Sakuyamon: "Sakuyamon",
    SaintGargomon: "SaintGargomon",
    Justimon: "Justimon",
    MarineAngemon: "MarineAngemon",
    ShineGreymon: "ShineGreymon",
    MirageGaogamon: "MirageGaogamon",
    Ravemon: "Ravemon",
    Sleipmon: "Sleipmon",
    BanchoLeomon: "BanchoLeomon",
    BlackWarGreymon: "BlackWarGreymon",
    ImperialdramonDMB: "ImperialdramonDMB",
    Megidramon: "Megidramon",
    ChaosDukemon: "ChaosDukemon",
    Kuzuhamon: "Kuzuhamon",
    BlackSaintGargomon: "BlackSaintGargomon",
    CherubimonAku: "CherubimonAku",
    CherubimonZen: "CherubimonZen",
    Goddramon: "Goddramon",
    Dorugoramon: "Dorugoramon",
    Darkdramon: "Darkdramon",
    Cannondramon: "Cannondramon",
    SaberLeomon: "SaberLeomon",
    MetalEtemon: "MetalEtemon",
    Gryphomon: "Gryphomon",
    SkullMammon: "SkullMammon",
    Valkyrimon: "Valkyrimon",
    Crossmon: "Crossmon",
    Plesiomon: "Plesiomon",
    JumboGamemon: "JumboGamemon",
    Pukumon: "Pukumon",
    GranKuwagamon: "GranKuwagamon",
    TigerVespamon: "TigerVespamon",
    Lotusmon: "Lotusmon",
    ArgomonMega: "ArgomonMega",
    QueenChessmon: "QueenChessmon",
    KingChessmon: "KingChessmon",
    HiAndromon: "HiAndromon",
    PrinceMamemon: "PrinceMamemon",
    Parasimon: "Parasimon",
    Boltmon: "Boltmon",
    Ebemon: "Ebemon",
    Ophanimon: "Ophanimon",
    SlashAngemon: "SlashAngemon",
    Jijimon: "Jijimon",
    Babamon: "Babamon",
    Pharaohmon: "Pharaohmon",
    Anubimon: "Anubimon",
    ChronomonHM: "ChronomonHM",
    VenomVamdemon: "VenomVamdemon",
    Diaboromon: "Diaboromon",
    Gulfmon: "Gulfmon",
    Devitamamon: "Devitamamon",
    Zanbamon: "Zanbamon",
    Deathmon: "Deathmon",
    DeathmonB: "DeathmonB",
    Lampmon: "Lampmon",
    MetalSeadramon: "MetalSeadramon",
    GigaSeadramon: "GigaSeadramon",
    Pinocchimon: "Pinocchimon",
    Mugendramon: "Mugendramon",
    Millenniumon: "Millenniumon",
    Piemon: "Piemon",
    Apollomon: "Apollomon",
    Dianamon: "Dianamon",
    Minervamon: "Minervamon",
    Neptunemon: "Neptunemon",
    Mercurymon: "Mercurimon",
    Spinomon: "Spinomon",
    Gaioumon: "Gaioumon",
    GranDracmon: "GranDracmon",
    Beelzebumon: "Beelzebumon",
    Demon: "Demon",
    Lilithmon: "Lilithmon",
    Barbamon: "Barbamon",
    Alphamon: "Alphamon",
    Dynasmon: "Dynasmon",
    LordKnightmon: "LordKnightmon",
    Duftmon: "Duftmon",
    UlforceVeedramon: "UlforceVeedramon",
    Craniummon: "Craniummon",
    Examon: "Examon",
    DaiPenmon: "DaiPenmon",
    AncientGreymon: "AncientGreymon",
    AncientGarurumon: "AncientGarurumon",
    AncientMegatheriumon: "AncientMegatheriumon",
    AncientIrismon: "AncientIrismon",
    AncientBeatmon: "AncientBeatmon",
    AncientSphinxmon: "AncientSphinxmon",
    AncientVolcamon: "AncientVolcamon",
    AncientTroiamon: "AncientTroiamon",
    AncientMermaimon: "AncientMermaimon",
    AncientWisemon: "AncientWisemon",
    DotShineGreymon: "DotShineGreymon",
    DotMirageGaogamon: "DotMirageGaogamon",
    Tactimon: "Tactimon",
    Blastmon: "Blastmon",
    Lilithmon2010: "Lilithmon2010",
    Beelzebumon2010: "Beelzebumon2010",
    ShoutmonX4B: "ShoutmonX4B",
    ShoutmonX4S: "ShoutmonX4S",
    ShoutmonX5: "ShoutmonX5",
    ShoutmonX3GM: "ShoutmonX3GM",
    ShoutmonX3SD: "ShoutmonX3SD",
    GreyKnightsmon: "GreyKnightsmon",
    Omegamon: "Omegamon",
    ImperialdramonPM: "ImperialdramonPM",
    DukemonCM: "DukemonCM",
    BeelzebumonBM: "BeelzebumonBM",
    Susanoomon: "Susanoomon",
    ShineGreymonRM: "ShineGreymonRM",
    ShineGreymonBM: "ShineGreymonBM",
    MirageGaogamonBM: "MirageGaogamonBM",
    RosemonBM: "RosemonBM",
    RavemonBM: "RavemonBM",
    Apocalymon: "Apocalymon",
    BelialVamdemon: "BelialVamdemon",
    Armagemon: "Armagemon",
    Valdurmon: "Valdurmon",
    Aegisdramon: "Aegisdramon",
    Chaosdramon: "Chaosdramon",
    Chaosmon: "Chaosmon",
    Qinglongmon: "Qinglongmon",
    Xuanwumon: "Xuanwumon",
    Baihumon: "Baihumon",
    Zhuqiaomon: "Zhuqiaomon",
    MoonMillenniumon: "MoonMillenniumon",
    ZeedMillenniumon: "ZeedMillenniumon",
    ShoutmonX5S: "ShoutmonX5S",
    //#endregion
    //#region DigiPlates
    PaildramonAlpha: "PaildramonAlpha",
    PaildramonBeta: "PaildramonBeta",
    DinobeemonAlpha: "DinobeemonAlpha",
    DinobeemonBeta: "DinobeemonBeta",
    KimeramonAlpha: "KimeramonAlpha",
    KimeramonBeta: "KimeramonBeta",
    SilphymonAlpha: "SilphymonAlpha",
    SilphymonBeta: "SilphymonBeta",
    LucemonFMAlpha: "LucemonFMAlpha",
    LucemonFMBeta: "LucemonFMBeta",
    ShakkoumonAlpha: "ShakkoumonAlpha",
    ShakkoumonBeta: "ShakkoumonBeta",
    MugendramonAlpha: "MugendramonAlpha",
    MugendramonBeta: "MugendramonBeta",
    MilleniumonAlpha: "MilleniumonAlpha",
    MilleniumonBeta: "MilleniumonBeta",
    ChronomonHMAlpha: "ChronomonHMAlpha",
    ChronomonHMBeta: "ChronomonHMBeta",
    AncientTroiamonAlpha: "AncientTroiamonAlpha",
    AncientTroiamonBeta: "AncientTroiamonBeta",
    AncientBeatmonAlpha: "AncientBeatmonAlpha",
    AncientBeatmonBeta: "AncientBeatmonBeta",
    UlforceVeedramonAlpha: "UlforceVeedramonAlpha",
    UlforceVeedramonBeta: "UlforceVeedramonBeta",
    OmegamonAlpha: "OmegamonAlpha",
    OmegamonBeta: "OmegamonBeta",
    ImperialdramonPMAlpha: "ImperialdramonPMAlpha",
    ImperialdramonPMBeta: "ImperialdramonPMBeta",
    DukemonCMAlpha: "DukemonCMAlpha",
    DukemonCMBeta: "DukemonCMBeta",
    ArmagemonAlpha: "ArmagemonAlpha",
    ArmagemonBeta: "ArmagemonBeta",
    BelialVamdemonAlpha: "BelialVamdemonAlpha",
    BelialVamdemonBeta: "BelialVamdemonBeta",
    ApocalymonAlpha: "ApocalymonAlpha",
    ApocalymonBeta: "ApocalymonBeta",
    SusanoomonAlpha: "SusanoomonAlpha",
    SusanoomonBeta: "SusanoomonBeta",
    ShineGreymonBMAlpha: "ShineGreymonBMAlpha",
    ShineGreymonBMBeta: "ShineGreymonBMBeta",
    MirageGaogamonBMAlpha: "MirageGaogamonBMAlpha",
    MirageGaogamonBMBeta: "MirageGaogamonBMBeta",
    BeelzebumonBMAlpha: "BeelzebumonBMAlpha",
    BeelzebumonBMBeta: "BeelzebumonBMBeta",
    ChaosmonAlpha: "ChaosmonAlpha",
    ChaosmonBeta: "ChaosmonBeta",
    QinglongmonAlpha: "QinglongmonAlpha",
    QinglongmonBeta: "QinglongmonBeta",
    XuanwumonAlpha: "XuanwumonAlpha",
    XuanwumonBeta: "XuanwumonBeta",
    AgumonW1: "AgumonW1",
    AgumonW2: "AgumonW2",
    BlackAgumonW1: "BlackAgumonW1",
    BlackAgumonW2: "BlackAgumonW2",
    GabumonW1: "GabumonW1",
    GabumonW2: "GabumonW2",
    GaomonW: "GaomonW",
    PatamonW1: "PatamonW1",
    PatamonW2: "PatamonW2",
    PicoDevimonW1: "PicoDevimonW1",
    PicoDevimonW2: "PicoDevimonW2",
    PicoDevimonW3: "PicoDevimonW3",
    PiyomonW: "PiyomonW",
    PlotmonW: "PlotmonW",
    TentomonW: "TentomonW",
    TerriermonW: "TerriermonW",
    VeemonW: "VeemonW",
    WormmonW: "WormmonW",
    KimeramonW1: "KimeramonW1",
    KimeramonW2: "KimeramonW2",
    LucemonFMW1: "LucemonFMW1",
    LucemonFMW2: "LucemonFMW2",
    PaildramonW1: "PaildramonW1",
    PaildramonW2: "PaildramonW2",
    ShakkoumonW1: "ShakkoumonW1",
    ShakkoumonW2: "ShakkoumonW2",
    SilphymonW1: "SilphymonW1",
    SilphymonW2: "SilphymonW2",
    ApocalymonW1: "ApocalymonW1",
    ApocalymonW2: "ApocalymonW2",
    ChaosmonW1: "ChaosmonW1",
    ChaosmonW2: "ChaosmonW2",
    OmegamonW1: "OmegamonW1",
    OmegamonW2: "OmegamonW2",
    SusanoomonW1: "SusanoomonW1",
    SusanoomonW2: "SusanoomonW2",
    CourageDM1: "CourageDM1",
    CourageDM2: "CourageDM2",
    SpiritOfDarkness: "SpiritOfDarkness",
    SpiritOfEarth: "SpiritOfEarth",
    SpiritOfFire: "SpiritOfFire",
    SpiritOfIce: "SpiritOfIce",
    SpiritOfLight: "SpiritOfLight",
    SpiritOfSteel: "SpiritOfSteel",
    SpiritOfThunder: "SpiritOfThunder",
    SpiritOfWater: "SpiritOfWater",
    SpiritOfWind: "SpiritOfWind",
    SpiritOfWood: "SpiritOfWood",
    //#endregion
    //#region DigiScores
    CulumonHeart: "CulumonHeart",
    CulumonSpade: "CulumonSpade",
    KabuterimonHeart: "KabuterimonHeart",
    KabuterimonSpade: "KabuterimonSpade",
    LeomonHeart: "LeomonHeart",
    LeomonSpade: "LeomonSpade",
    DukemonHeart: "DukemonHeart",
    DukemonSpade: "DukemonSpade",
    PiemonHeart: "PiemonHeart",
    PiemonSpade: "PiemonSpade",
    MugendramonHeart: "MugendramonHeart",
    MugendramonSpade: "MugendramonSpade",
    AncientVolcamonHeart: "AncientVolcamonHeart",
    AncientVolcamonSpade: "AncientVolcamonSpade",
    SusanoomonSpade: "SusanoomonSpade",
    SusanoomonHeart: "SusanoomonHeart",
    ShoutmonHeart: "ShoutmonHeart",
    ShoutmonSpade: "ShoutmonSpade",
    Beelzebumon2010Heart: "Beelzebumon2010Heart",
    Beelzebumon2010Spade: "Beelzebumon2010Spade",
    //#endregion
    //#region Items
    CorePiece: "CorePiece",
    CourageDM: "CourageDM",
    FriendshipDM: "FriendshipDM",
    KindnessDM: "KindnessDM",
    LightDM: "LightDM",
    LoveDM: "LoveDM",
    MiraclesDM: "MiraclesDM",
    PurityDM: "PurityDM",
    SincerityDE: "SincerityDE",
    //#endregion
}

export const EnemyTypes = {
    normal: "normal",
    aoe: "AoE",
    doubleHit: "double hit",
    tripleHit: "triple hit"
}

export const Names = {
    //#region Games
    sunburst: "Sunburst",
    moonlight: "Moonlight",
    red: "Red",
    blue: "Blue",
    both: "Both",
    //#endregion
    //#region Digimon
    Koromon: {    },
    Tsunomon: {    },
    Tanemon: {    },
    Poyomon: {    },
    Tokomon: {    },
    Puttomon: {
        english: "Puttimon"
    },
    Chicomon: {
        english: "Chibomon"
    },
    Minomon: {    },
    Gigimon: {    },
    Gummymon: {    },
    Kokomon: {    },
    Wanyamon: {    },
    Budmon: {    },
    Botamon: {    },
    Pagumon: {    },
    Kuramon: {    },
    Tsumemon: {    },
    Kapurimon: {    },
    Dorimon: {    },
    Sunmon: {    },
    Moonmon: {    },
    Chicchimon: {    },
    Culumon: {
        english: "Calumon",
    },
    Pickmon: {    },
    Bombmon: {    },
    Agumon: {    },
    Gabumon: {    },
    Piyomon: {
        english: "Biyomon",
    },
    Palmon: {    },
    Tentomon: {    },
    Gomamon: {    },
    Patamon: {    },
    Plotmon: {
        english: "Salamon",
    },
    Veemon: {    },
    Wormmon: {    },
    Hawkmon: {    },
    Armadimon: {
        english: "Armadillomon",
    },
    Guilmon: {    },
    Renamon: {    },
    Terriermon: {    },
    Lopmon: {    },
    Impmon: {    },
    Lalamon: {    },
    Gaomon: {    },
    Falcomon: {    },
    PawnChessmonB: {
        japanese: "PawnChessmon (Black)",
        english: "PawnChessmon (Black)",
    },
    PawnChessmonW: {
        japanese: "PawnChessmon (White)",
        english: "PawnChessmon (White)",
    },
    Kudamon: {    },
    Kamemon: {    },
    Dorumon: {    },
    Monodramon: {    },
    BlackAgumon: {    },
    YukiAgumon: {
        english: "SnowAgumon",
    },
    Goburimon: {    },
    Shamamon: {    },
    SnowGoburimon: {    },
    Kumamon: {    },
    Penmon: {
        english: "Penguinmon",
    },
    Muchomon: {    },
    Betamon: {    },
    Otamamon: {    },
    Ganimon: {
        english: "Crabmon",
    },
    Gizamon: {    },
    Syakomon: {    },
    Kunemon: {    },
    DoKunemon: {    },
    Floramon: {    },
    Aruraumon: {    },
    Mushroomon: {    },
    ToyAgumon: {    },
    ToyAgumonB: {
        japanese: "ToyAgumon (Black)",
        english: "ToyAgumon (Black)",
    },
    Hagurumon: {    },
    Solarmon: {    },
    Kotemon: {    },
    Kokuwamon: {    },
    Gotsumon: {    },
    Bakumon: {
        english: "Tapirmon",
    },
    Candlemon: {    },
    PicoDevimon: {
        english: "DemiDevimon",
    },
    Keramon: {    },
    Tsukaimon: {    },
    Dracmon: {    },
    DotAgumon: {    },
    DotFalcomon: {    },
    Coronamon: {    },
    Lunamon: {    },
    Hyokomon: {    },
    Lucemon: {    },
    Shoutmon: {    },
    Ballistamon: {    },
    Starmon2010: {
        japanese: "Starmon (2010)",
        english: "Starmon (2010)",
    },
    Sparrowmon: {    },
    Cutemon: {    },
    Monitormon: {    },
    Spadamon: {    },
    Dondokomon: {    },
    Gaosmon: {    },
    ShoutmonB: {
        japanese: "Shoutmon (Black)",
        english: "Shoutmon (Black)",
    },
    Chikurimon: {    },
    Troopmon: {    },
    StarSword: {
        japanese: "Star Sword",
        english: "Star Sword",
    },
    Greymon: {    },
    Garurumon: {    },
    Birdramon: {    },
    Togemon: {    },
    Kabuterimon: {    },
    Ikkakumon: {    },
    Tailmon: {
        english: "Gatomon",
    },
    Angemon: {    },
    ExVeemon: {    },
    Stingmon: {    },
    Aquilamon: {    },
    Ankylomon: {    },
    Growlmon: {    },
    Kyubimon: {    },
    Gargomon: {    },
    Guardromon: {    },
    Agunimon: {    },
    GeoGreymon: {    },
    Gaogamon: {    },
    Sunflowmon: {    },
    Peckmon: {    },
    Gawappamon: {    },
    KnightChessmonW: {
        japanese: "KnightChessmon (White)",
        english: "KnightChessmon (White)",
    },
    KnightChessmonB: {
        japanese: "KnightChessmon (Black)",
        english: "KnightChessmon (Black)",
    },
    Reppamon: {    },
    Veedramon: {    },
    Dorugamon: {    },
    Raptordramon: {    },
    Strikedramon: {    },
    DarkTyrannomon: {    },
    Dinohumon: {    },
    Monochromon: {    },
    Tyrannomon: {    },
    Airdramon: {    },
    Flarerizamon: {    },
    Centalmon: {    },
    Leomon: {    },
    Ogremon: {    },
    Fugamon: {    },
    Hyogamon: {    },
    Grizzmon: {    },
    Seasarmon: {    },
    Hanumon: {
        english: "Apemon",
    },
    Minotarumon: {    },
    Yukidarumon: {
        english: "Frigimon",
    },
    Tsuchidarumon: {
        english: "MudFrigimon",
    },
    Tortamon: {    },
    Nanimon: {    },
    BomberNanimon: {    },
    Mojyamon: {    },
    JungleMojyamon: {    },
    Drimogemon: {    },
    NiseDrimogemon: {    },
    Diatrymon: {    },
    Saberdramon: {    },
    Kokatorimon: {    },
    Akatorimon: {    },
    Kiwimon: {    },
    Seadramon: {    },
    Icemon: {    },
    Gekomon: {    },
    Numemon: {    },
    Geremon: {    },
    KaratsukiNumemon: {
        english: "ShellNumemon",
    },
    Shellmon: {    },
    MoriShellmon: {    },
    Octomon: {    },
    Gesomon: {    },
    Coelamon: {    },
    Rukamon: {
        english: "Dolphmon",
    },
    Ebidramon: {    },
    Kuwagamon: {    },
    Snimon: {    },
    Dokugumon: {    },
    Gokimon: {
        english: "Roachmon",
    },
    Flymon: {    },
    Yanmamon: {    },
    SandYanmamon: {    },
    Vegiemon: {    },
    Weedmon: {
        english: "Weedmon",
    },
    RedVegiemon: {    },
    Woodmon: {    },
    Igamon: {
        english: "Ninjamon",
    },
    Kogamon: {    },
    Mechanorimon: {    },
    Tankmon: {    },
    Hookmon: {    },
    Revolmon: {
        english: "Deputymon",
    },
    Clockmon: {    },
    Thunderballmon: {    },
    Omekamon: {    },
    Golemon: {
        english: "Rockmon",
    },
    Raremon: {    },
    Sukamon: {    },
    PlatinumSukamon: {    },
    Starmon: {    },
    Unimon: {    },
    Sorcerymon: {    },
    Wizardmon: {    },
    Devimon: {    },
    IceDevimon: {    },
    Devidramon: {    },
    Evilmon: {
        english: "Vilemon",
    },
    Bakemon: {    },
    Chrysalimon: {    },
    Wendimon: {
        english: "Wendigomon",
    },
    DarkLizardmon: {    },
    Musyamon: {    },
    Sangloupmon: {    },
    Firamon: {    },
    Lekismon: {    },
    Buraimon: {    },
    Dorulumon: {    },
    Greymon2010: {
        japanese: "Greymon (2010)",
        english: "Greymon (2010)",
    },
    GreymonO2010: {
        japanese: "Greymon (Orange) (2010)",
        english: "Greymon (Orange) (2010)",
    },
    MailBirdramon: {    },
    SkullKnightmon: {    },
    SkullKnightmonBR: {
        japanese: "SkullKnightmon (Black Red)",
        english: "SkullKnightmon (Black Red)",
    },
    DeadlyAxemon: {    },
    ShoutmonX2: {
        japanese: "Shoutmon X2",
        english: "Shoutmon X2",
    },
    JetSparrow: {
        japanese: "Jet Sparrow",
        english: "Jet Sparrow",
    },
    DoruluCannon: {
        japanese: "Dorulu Cannon",
        english: "Dorulu Cannon",
    },
    Fladramon: {
        english: "Flamedramon",
    },
    Shadramon: {    },
    Allomon: {    },
    Lynxmon: {    },
    Kenkimon: {    },
    Owlmon: {    },
    Pipismon: {    },
    Shurimon: {    },
    Ponchomon: {    },
    Kabukimon: {    },
    Tylomon: {    },
    Seahomon: {    },
    Nefertimon: {    },
    Toucanmon: {    },
    Prairiemon: {    },
    Magnamon: {    },
    Kongoumon: {    },
    MetalGreymon: {    },
    WereGarurumonBlue: {
        japanese: "WereGarurumon (Blue)",
        english: "WereGarurumon (Blue)",
    },
    Garudamon: {    },
    Lilymon: {    },
    AtlurKabuterimonR: {
        japanese: "AtlurKabuterimon (Red)",
        english: "MegaKabuterimon (Red)",
    },
    Zudomon: {    },
    HolyAngemon: {
        english: "MagnaAngemon",
    },
    Angewomon: {    },
    MegaloGrowlmon: {
        english: "WarGrowlmon",
    },
    Taomon: {    },
    Rapidmon: {    },
    Cyberdramon: {    },
    Antylamon: {    },
    Paildramon: {    },
    Silphymon: {    },
    Shakkoumon: {    },
    RizeGreymon: {
        english: "RiseGreymon",
    },
    MachGaogamon: {    },
    Lilamon: {    },
    Yatagaramon: {    },
    Shawujinmon: {    },
    BishopChessmon: {    },
    RookChessmon: {    },
    Tyilinmon: {    },
    Dorugremon: {
        english: "DoruGreymon",
    },
    Grademon: {    },
    AeroVeedramon: {    },
    BlackMegaloGrowlmon: {
        english: "BlackWarGrowlmon",
    },
    MasterTyrannomon: {    },
    Triceramon: {    },
    Vermillimon: {    },
    Mametyramon: {    },
    GrapLeomon: {    },
    Kyukimon: {    },
    Etemon: {    },
    Pandamon: {    },
    Mammon: {
        english: "Mammothmon",
    },
    Cerberumon: {
        english: "Cerberusmon",
    },
    Bastemon: {
        english: "Persiamon",
    },
    Sinduramon: {    },
    Karatenmon: {    },
    Parrotmon: {    },
    Deramon: {    },
    Dagomon: {
        english: "Dragomon",
    },
    Mermaimon: {    },
    Whamon: {    },
    MegaSeadramon: {    },
    WaruSeadramon: {    },
    Brachimon: {
        english: "Brachiomon",
    },
    Hangyomon: {
        english: "Divermon",
    },
    TonosamaGekomon: {
        english: "ShogunGekomon",
    },
    Anomalocarimon: {
        english: "Scorpiomon",
    },
    MarineDevimon: {    },
    AtlurKabuterimonB: {
        japanese: "AtlurKabuterimon (Blue)",
        english: "MegaKabuterimon (Blue)",
    },
    Dinobeemon: {    },
    Ookuwamon: {    },
    Arukenimon: {    },
    Jureimon: {
        english: "Cherrymon",
    },
    Blossomon: {    },
    ArgomonUltimate: {
        japanese: "Argomon (Ultimate)",
        english: "Argomon (Ultimate)"
    },
    Andromon: {    },
    MetalTyrannomon: {    },
    Megadramon: {    },
    Gigadramon: {    },
    Mamemon: {    },
    MetalMamemon: {    },
    BigMamemon: {    },
    Giromon: {    },
    Tekkamon: {    },
    Nanomon: {
        english: "Datamon",
    },
    BlueMeramon: {    },
    Insekimon: {
        english: "Meteormon",
    },
    Garbemon: {
        english: "Garbagemon",
    },
    Vademon: {    },
    Volcamon: {
        english: "Volcanomon",
    },
    Piccolomon: {
        english: "Piximon",
    },
    Knightmon: {    },
    SuperStarmon: {    },
    Monzaemon: {    },
    Digitamamon: {    },
    Wisemon: {    },
    WereGarurumonBlack: {
        japanese: "WereGarurumon (Black)",
        english: "WereGarurumon (Black)"
    },
    BlackRapidmon: {    },
    SkullGreymon: {    },
    Kimeramon: {    },
    Vamdemon: {
        english: "Myotismon",
    },
    LadyDevimon: {    },
    Mummymon: {    },
    Infermon: {    },
    Vajramon: {    },
    Phantomon: {    },
    Matadormon: {    },
    EXTyrannomon: {    },
    SkullBaluchimon: {    },
    Scorpiomon: {
        english: "SkullScorpiomon",
    },
    Flaremon: {    },
    Crescemon: {    },
    Butenmon: {    },
    LucemonFM: {
        japanese: "Lucemon (Falldown Mode)",
        english: "Lucemon (Chaos Mode)",
    },
    MadLeomon: {    },
    ShoutmonX3: {
        japanese: "Shoutmon X3",
        english: "Shoutmon X3",
    },
    ShoutmonX4: {
        japanese: "Shoutmon X4",
        english: "Shoutmon X4",
    },
    MetalGreymon2010: {
        japanese: "MetalGreymon (2010)",
        english: "MetalGreymon (2010)",
    },
    DarkKnightmon: {    },
    WarGreymon: {    },
    MetalGarurumon: {    },
    Hououmon: {
        english: "Phoenixmon",
    },
    Rosemon: {    },
    HeraclesKabuterimon: {
        english: "HerculesKabuterimon",
    },
    Vikemon: {    },
    Seraphimon: {    },
    Holydramon: {
        english: "Magnadramon",
    },
    ImperialdramonDM: {
        japanese: "Imperialdramon (Dragon Mode)",
        english: "Imperialdramon (Dragon Mode)",
    },
    ImperialdramonFM: {
        japanese: "Imperialdramon (Fighter Mode)",
        english: "Imperialdramon (Fighter Mode)",
    },
    Dukemon: {
        english: "Gallantmon",
    },
    Sakuyamon: {    },
    SaintGargomon: {
        english: "MegaGargomon",
    },
    Justimon: {    },
    MarineAngemon: {    },
    ShineGreymon: {    },
    MirageGaogamon: {    },
    Ravemon: {    },
    Sleipmon: {    },
    BanchoLeomon: {    },
    BlackWarGreymon: {    },
    ImperialdramonDMB: {
        japanese: "Imperialdramon (Dragon Mode) (Black)",
        english: "Imperialdramon (Dragon Mode) (Black)"
    },
    Megidramon: {    },
    ChaosDukemon: {
        english: "ChaosGallantmon",
    },
    Kuzuhamon: {    },
    BlackSaintGargomon: {
        english: "BlackMegaGargomon",
    },
    CherubimonAku: {
        japanese: "Cherubimon (Aku)",
        english: "Cherubimon (Evil)",
    },
    CherubimonZen: {
        japanese: "Cherubimon (Zen)",
        english: "Cherubimon (Good)",
    },
    Goddramon: {
        english: "Goldramon",
    },
    Dorugoramon: {    },
    Darkdramon: {    },
    Cannondramon: {    },
    SaberLeomon: {    },
    MetalEtemon: {    },
    Gryphomon: {    },
    SkullMammon: {
        english: "SkullMammothmon",
    },
    Valkyrimon: {    },
    Crossmon: {
        english: "Eaglemon",
    },
    Plesiomon: {    },
    JumboGamemon: {    },
    Pukumon: {    },
    GranKuwagamon: {    },
    TigerVespamon: {    },
    Lotusmon: {    },
    ArgomonMega: {
        japanese: "Argomon (Mega)",
        english: "Argomon (Mega)",
    },
    QueenChessmon: {    },
    KingChessmon: {    },
    HiAndromon: {    },
    PrinceMamemon: {    },
    Parasimon: {    },
    Boltmon: {    },
    Ebemon: {    },
    Ophanimon: {    },
    SlashAngemon: {    },
    Jijimon: {    },
    Babamon: {    },
    Pharaohmon: {    },
    Anubimon: {
        english: "Anubismon",
    },
    ChronomonHM: {
        japanese: "Chronomon (Holy Mode)",
        english: "Chronomon (Holy Mode)",
    },
    VenomVamdemon: {
        english: "VenomMyotismon",
    },
    Diaboromon: {    },
    Gulfmon: {    },
    Devitamamon: {    },
    Zanbamon: {    },
    Deathmon: {
        japanese: "Deathmon (Gray)",
        english: "Ghoulmon (Gray)",
    },
    DeathmonB: {
        japanese: "Deathmon (Black)",
        english: "Ghoulmon (Black)",
    },
    Lampmon: {    },
    MetalSeadramon: {    },
    GigaSeadramon: {    },
    Pinocchimon: {
        english: "Puppetmon",
    },
    Mugendramon: {
        english: "Machinedramon",
    },
    Millenniumon: {    },
    Piemon: {
        english: "Piedmon",
    },
    Apollomon: {    },
    Dianamon: {    },
    Minervamon: {    },
    Neptunemon: {    },
    Mercurymon: {    },
    Spinomon: {    },
    Gaioumon: {    },
    GranDracmon: {    },
    Beelzebumon: {
        english: "Beelzemon",
    },
    Demon: {
        english: "Creepymon",
    },
    Lilithmon: {    },
    Barbamon: {    },
    Alphamon: {    },
    Dynasmon: {    },
    LordKnightmon: {    },
    Duftmon: {
        english: "Leopardmon",
    },
    UlforceVeedramon: {    },
    Craniummon: {    },
    Examon: {    },
    DaiPenmon: {    },
    AncientGreymon: {    },
    AncientGarurumon: {    },
    AncientMegatheriumon: {    },
    AncientIrismon: {    },
    AncientBeatmon: {
        english: "AncientBeetlemon",
    },
    AncientSphinxmon: {    },
    AncientVolcamon: {
        english: "AncientVolcanomon",
    },
    AncientTroiamon: {    },
    AncientMermaimon: {    },
    AncientWisemon: {    },
    DotShineGreymon: {    },
    DotMirageGaogamon: {    },
    Tactimon: {    },
    Blastmon: {    },
    Lilithmon2010: {
        japanese: "Lilithmon (2010)",
        english: "Lilithmon (2010)",
    },
    Beelzebumon2010: {
        japanese: "Beelzebumon (2010)",
        english: "Beelzemon (2010)",
    },
    ShoutmonX4B: {
        japanese: "Shoutmon X4B",
        english: "Shoutmon X4B",
    },
    ShoutmonX4S: {
        japanese: "Shoutmon X4S",
        english: "Shoutmon X4S",
    },
    ShoutmonX5: {
        japanese: "Shoutmon X5",
        english: "Shoutmon X5",
    },
    ShoutmonX3GM: {
        japanese: "Shoutmon X3GM",
        english: "Shoutmon X3GM",
    },
    ShoutmonX3SD: {
        japanese: "Shoutmon X3SD",
        english: "Shoutmon X3SD",
    },
    GreyKnightsmon: {    },
    Omegamon: {
        english: "Omnimon",
    },
    ImperialdramonPM: {
        japanese: "Imperialdramon (Paladin Mode)",
        english: "Imperialdramon (Paladin Mode)",
    },
    DukemonCM: {
        japanese: "Dukemon (Crimson Mode)",
        english: "Gallantmon (Crimson Mode)",
    },
    BeelzebumonBM: {
        japanese: "Beelzebumon (Blast Mode)",
        english: "Beelzemon (Blast Mode)",
    },
    Susanoomon: {    },
    ShineGreymonRM: {
        japanese: "ShineGreymon (Ruin Mode)",
        english: "ShineGreymon (Ruin Mode)",
    },
    ShineGreymonBM: {
        japanese: "ShineGreymon (Burst Mode)",
        english: "ShineGreymon (Burst Mode)",
    },
    MirageGaogamonBM: {
        japanese: "MirageGaogamon (Burst Mode)",
        english: "MirageGaogamon (Burst Mode)",
    },
    RosemonBM: {
        japanese: "Rosemon (Burst Mode)",
        english: "Rosemon (Burst Mode)",
    },
    RavemonBM: {
        japanese: "Ravemon (Burst Mode)",
        english: "Ravemon (Burst Mode)",
    },
    Apocalymon: {    },
    BelialVamdemon: {
        english: "MaloMyotismon",
    },
    Armagemon: {
        english: "Armageddemon",
    },
    Valdurmon: {    },
    Aegisdramon: {    },
    Chaosdramon: {    },
    Chaosmon: {    },
    Qinglongmon: {
        english: "Azulongmon",
    },
    Xuanwumon: {
        english: "Ebonwumon",
    },
    Baihumon: {    },
    Zhuqiaomon: {    },
    MoonMillenniumon: {    },
    ZeedMillenniumon: {    },
    ShoutmonX5S: {
        japanese: "Shoutmon X5S",
        english: "Shoutmon X5S"
    },
    //#endregion
    //#region DigiPlates
    PaildramonAlpha: {
        name: {
            japanese: "Paildramon (Alpha)",
            english: "Paildramon (Alpha)"
        }
    },
    PaildramonBeta: {
        name: {
            japanese: "Paildramon (Beta)",
            english: "Paildramon (Beta)"
        }
    },
    DinobeemonAlpha: {
        name: {
            japanese: "Dinobeemon (Alpha)",
            english: "Dinobeemon (Alpha)"
        }
    },
    DinobeemonBeta: {
        name: {
            japanese: "Dinobeemon (Beta)",
            english: "Dinobeemon (Beta)"
        }
    },
    KimeramonAlpha: {
        name: {
            japanese: "Kimeramon (Alpha)",
            english: "Kimeramon (Alpha)"
        }
    },
    KimeramonBeta: {
        name: {
            japanese: "Kimeramon (Beta)",
            english: "Kimeramon (Beta)"
        }
    },
    SilphymonAlpha: {
        name: {
            japanese: "Silphymon (Alpha)",
            english: "Silphymon (Alpha)"
        }
    },
    SilphymonBeta: {
        name: {
            japanese: "Silphymon (Beta)",
            english: "Silphymon (Beta)"
        }
    },
    LucemonFMAlpha: {
        name: {
            japanese: "Lucemon (Falldown Mode) (Alpha)",
            english: "Lucemon (Chaos Mode) (Alpha)"
        }
    },
    LucemonFMBeta: {
        name: {
            japanese: "Lucemon (Falldown Mode) (Beta)",
            english: "Lucemon (Chaos Mode) (Beta)"
        }
    },
    ShakkoumonAlpha: {
        name: {
            japanese: "Shakkoumon (Alpha)",
            english: "Shakkoumon (Alpha)"
        }
    },
    ShakkoumonBeta: {
        name: {
            japanese: "Shakkoumon (Beta)",
            english: "Shakkoumon (Beta)"
        }
    },
    MugendramonAlpha: {
        name: {
            japanese: "Mugendramon (Alpha)",
            english: "Machinedramon (Alpha)"
        }
    },
    MugendramonBeta: {
        name: {
            japanese: "Mugendramon (Beta)",
            english: "Machinedramon (Beta)"
        }
    },
    MilleniumonAlpha: {
        name: {
            japanese: "Milleniumon (Alpha)",
            english: "Milleniumon (Alpha)"
        }
    },
    MilleniumonBeta: {
        name: {
            japanese: "Milleniumon (Beta)",
            english: "Milleniumon (Beta)"
        }
    },
    ChronomonHMAlpha: {
        name: {
            japanese: "Chronomon (Holy Mode) (Alpha)",
            english: "Chronomon (Holy Mode) (Alpha)"
        }
    },
    ChronomonHMBeta: {
        name: {
            japanese: "Chronomon (Holy Mode) (Beta)",
            english: "Chronomon (Holy Mode) (Beta)"
        }
    },
    AncientTroiamonAlpha: {
        name: {
            japanese: "AncientTroiamon (Alpha)",
            english: "AncientTroiamon (Alpha)"
        }
    },
    AncientTroiamonBeta: {
        name: {
            japanese: "AncientTroiamon (Beta)",
            english: "AncientTroiamon (Beta)"
        }
    },
    AncientBeatmonAlpha: {
        name: {
            japanese: "AncientBeatmon (Alpha)",
            english: "AncientBeetlemon (Alpha)"
        }
    },
    AncientBeatmonBeta: {
        name: {
            japanese: "AncientBeatmon (Beta)",
            english: "AncientBeetlemon (Beta)"
        }
    },
    UlforceVeedramonAlpha: {
        name: {
            japanese: "UlforceVeedramon (Alpha)",
            english: "UlforceVeedramon (Alpha)"
        }
    },
    UlforceVeedramonBeta: {
        name: {
            japanese: "UlforceVeedramon (Beta)",
            english: "UlforceVeedramon (Beta)"
        }
    },
    OmegamonAlpha: {
        name: {
            japanese: "Omegamon (Alpha)",
            english: "Omnimon (Alpha)"
        }
    },
    OmegamonBeta: {
        name: {
            japanese: "Omegamon (Beta)",
            english: "Omnimon (Beta)"
        }
    },
    ImperialdramonPMAlpha: {
        name: {
            japanese: "Imperialdramon (Paladin Mode) (Alpha)",
            english: "Imperialdramon (Paladin Mode) (Alpha)"
        }
    },
    ImperialdramonPMBeta: {
        name: {
            japanese: "Imperialdramon (Paladin Mode) (Beta)",
            english: "Imperialdramon (Paladin Mode) (Beta)"
        }
    },
    DukemonCMAlpha: {
        name: {
            japanese: "Dukemon (Crimson Mode) (Alpha)",
            english: "Gallantmon (Crimson Mode) (Alpha)"
        }
    },
    DukemonCMBeta: {
        name: {
            japanese: "Dukemon (Crimson Mode) (Beta)",
            english: "Dukemon (Crimson Mode) (Beta)"
        }
    },
    ArmagemonAlpha: {
        name: {
            japanese: "Armagemon (Alpha)",
            english: "Armageddemon (Alpha)"
        }
    },
    ArmagemonBeta: {
        name: {
            japanese: "Armagemon (Beta)",
            english: "Armageddemon (Beta)"
        }
    },
    BelialVamdemonAlpha: {
        name: {
            japanese: "BelialVamdemon (Alpha)",
            english: "MaloMyotismon (Alpha)"
        }
    },
    BelialVamdemonBeta: {
        name: {
            japanese: "BelialVamdemon (Beta)",
            english: "MaloMyotismon (Beta)"
        }
    },
    ApocalymonAlpha: {
        name: {
            japanese: "Apocalymon (Alpha)",
            english: "Apocalymon (Alpha)"
        }
    },
    ApocalymonBeta: {
        name: {
            japanese: "Apocalymon (Beta)",
            english: "Apocalymon (Beta)"
        }
    },
    SusanoomonAlpha: {
        name: {
            japanese: "Susanoomon (Alpha)",
            english: "Susanoomon (Alpha)"
        }
    },
    SusanoomonBeta: {
        name: {
            japanese: "Susanoomon (Beta)",
            english: "Susanoomon (Beta)"
        }
    },
    ShineGreymonBMAlpha: {
        name: {
            japanese: "ShineGreymon (Burst Mode) (Alpha)",
            english: "ShineGreymon (Burst Mode) (Alpha)"
        }
    },
    ShineGreymonBMBeta: {
        name: {
            japanese: "ShineGreymon (Burst Mode) (Beta)",
            english: "ShineGreymon (Burst Mode) (Beta)"
        }
    },
    MirageGaogamonBMAlpha: {
        name: {
            japanese: "MirageGaogamon (Burst Mode) (Alpha)",
            english: "MirageGaogamon (Burst Mode) (Alpha)"
        }
    },
    MirageGaogamonBMBeta: {
        name: {
            japanese: "MirageGaogamon (Burst Mode) (Beta)",
            english: "MirageGaogamon (Burst Mode) (Beta)"
        }
    },
    BeelzebumonBMAlpha: {
        name: {
            japanese: "Beelzebumon (Blast Mode) (Alpha)",
            english: "Beelzemon (Blast Mode) (Alpha)"
        }
    },
    BeelzebumonBMBeta: {
        name: {
            japanese: "Beelzebumon (Blast Mode) (Beta)",
            english: "Beelzemon (Blast Mode) (Beta)"
        }
    },
    ChaosmonAlpha: {
        name: {
            japanese: "Chaosmon (Alpha)",
            english: "Chaosmon (Alpha)"
        }
    },
    ChaosmonBeta: {
        name: {
            japanese: "Chaosmon (Beta)",
            english: "Chaosmon (Beta)"
        }
    },
    QinglongmonAlpha: {
        name: {
            japanese: "Qinglongmon (Alpha)",
            english: "Azulongmon (Alpha)"
        }
    },
    QinglongmonBeta: {
        name: {
            japanese: "Qinglongmon (Beta)",
            english: "Azulongmon (Beta)"
        }
    },
    XuanwumonAlpha: {
        name: {
            japanese: "Xuanwumon (Alpha)",
            english: "Ebonwumon (Alpha)"
        }
    },
    XuanwumonBeta: {
        name: {
            japanese: "Xuanwumon (Beta)",
            english: "Ebonwumon (Beta)"
        }
    },
    AgumonW1: {
        name: {
            japanese: "Agumon Warp 1",
            english: "Agumon Warp 1"
        }
    },
    AgumonW2: {
        name: {
            japanese: "Agumon Warp 2",
            english: "Agumon Warp 2"
        }
    },
    BlackAgumonW1: {
        name: {
            japanese: "BlackAgumon Warp 1",
            english: "BlackAgumon Warp 1"
        }
    },
    BlackAgumonW2: {
        name: {
            japanese: "BlackAgumon Warp 2",
            english: "BlackAgumon Warp 2"
        }
    },
    GabumonW1: {
        name: {
            japanese: "Gabumon Warp 1",
            english: "Gabumon Warp 1"
        }
    },
    GabumonW2: {
        name: {
            japanese: "Gabumon Warp 2",
            english: "Gabumon Warp 2"
        }
    },
    GaomonW: {
        name: {
            japanese: "Gaomon Warp",
            english: "Gaomon Warp"
        }
    },
    PatamonW1: {
        name: {
            japanese: "Patamon Warp 1",
            english: "Patamon Warp 1"
        }
    },
    PatamonW2: {
        name: {
            japanese: "Patamon Warp 2",
            english: "Patamon Warp 2"
        }
    },
    PicoDevimonW1: {
        name: {
            japanese: "PicoDevimon Warp 1",
            english: "DemiDevimon Warp 1"
        }
    },
    PicoDevimonW2: {
        name: {
            japanese: "PicoDevimon Warp 2",
            english: "DemiDevimon Warp 2"
        }
    },
    PicoDevimonW3: {
        name: {
            japanese: "PicoDevimon Warp 3",
            english: "DemiDevimon Warp 3"
        }
    },
    PiyomonW: {
        name: {
            japanese: "Piyomon Warp",
            english: "Biyomon Warp"
        }
    },
    PlotmonW: {
        name: {
            japanese: "Plotmon Warp",
            english: "Salamon Warp"
        }
    },
    TentomonW: {
        name: {
            japanese: "Tentomon Warp",
            english: "Tentomon Warp"
        }
    },
    TerriermonW: {
        name: {
            japanese: "Terriermon Warp",
            english: "Terriermon Warp"
        }
    },
    VeemonW: {
        name: {
            japanese: "Veemon Warp",
            english: "Veemon Warp"
        }
    },
    WormmonW: {
        name: {
            japanese: "Wormmon Warp",
            english: "Wormmon Warp"
        }
    },
    KimeramonW1: {
        name: {
            japanese: "Kimeramon Warp 1",
            english: "Kimeramon Warp 1"
        }
    },
    KimeramonW2: {
        name: {
            japanese: "Kimeramon Warp 2",
            english: "Kimeramon Warp 2"
        }
    },
    LucemonFMW1: {
        name: {
            japanese: "Lucemon (Falldown Mode) Warp 1",
            english: "Lucemon (Chaos Mode) Warp 1"
        }
    },
    LucemonFMW2: {
        name: {
            japanese: "Lucemon (Falldown Mode) Warp 2",
            english: "Lucemon (Chaos Mode) Warp 2"
        }
    },
    PaildramonW1: {
        name: {
            japanese: "Paildramon Warp 1",
            english: "Paildramon Warp 1"
        }
    },
    PaildramonW2: {
        name: {
            japanese: "Paildramon Warp 2",
            english: "Paildramon Warp 2"
        }
    },
    ShakkoumonW1: {
        name: {
            japanese: "Shakkoumon Warp 1",
            english: "Shakkoumon Warp 1"
        }
    },
    ShakkoumonW2: {
        name: {
            japanese: "Shakkoumon Warp 2",
            english: "Shakkoumon Warp 2"
        }
    },
    SilphymonW1: {
        name: {
            japanese: "Silphymon Warp 1",
            english: "Silphymon Warp 1"
        }
    },
    SilphymonW2: {
        name: {
            japanese: "Silphymon Warp 2",
            english: "Silphymon Warp 2"
        }
    },
    ApocalymonW1: {
        name: {
            japanese: "Apocalymon Warp 1",
            english: "Apocalymon Warp 1"
        }
    },
    ApocalymonW2: {
        name: {
            japanese: "Apocalymon Warp 2",
            english: "Apocalymon Warp 2"
        }
    },
    ChaosmonW1: {
        name: {
            japanese: "Chaosmon Warp 1",
            english: "Chaosmon Warp 1"
        }
    },
    ChaosmonW2: {
        name: {
            japanese: "Chaosmon Warp 2",
            english: "Chaosmon Warp 2"
        }
    },
    OmegamonW1: {
        name: {
            japanese: "Omegamon Warp 1",
            english: "Omnimon Warp 1"
        }
    },
    OmegamonW2: {
        name: {
            japanese: "Omegamon Warp 2",
            english: "Omnimon Warp 2"
        }
    },
    SusanoomonW1: {
        name: {
            japanese: "Susanoomon Warp 1",
            english: "Susanoomon Warp 1"
        }
    },
    SusanoomonW2: {
        name: {
            japanese: "Susanoomon Warp 2",
            english: "Susanoomon Warp 2"
        }
    },
    CourageDM1: {
        name: {
            japanese: "DigiMental of Courage 1",
            english: "DigiEgg of Courage 1"
        }
    },
    CourageDM2: {
        name: {
            japanese: "DigiEgg of Courage 2",
            english: "DigiEgg of Courage 2"
        }
    },
    SpiritOfDarkness: {
        name: {
            japanese: "Spirit of Darkness",
            english: "Spirit of Darkness"
        }
    },
    SpiritOfEarth: {
        name: {
            japanese: "Spirit of Earth",
            english: "Spirit of Earth"
        }
    },
    SpiritOfFire: {
        name: {
            japanese: "Spirit of Fire",
            english: "Spirit of Fire"
        }
    },
    SpiritOfIce: {
        name: {
            japanese: "Spirit of Ice",
            english: "Spirit of Ice"
        }
    },
    SpiritOfLight: {
        name: {
            japanese: "Spirit of Light",
            english: "Spirit of Light"
        }
    },
    SpiritOfSteel: {
        name: {
            japanese: "Spirit of Steel",
            english: "Spirit of Steel"
        }
    },
    SpiritOfThunder: {
        name: {
            japanese: "Spirit of Thunder",
            english: "Spirit of Thunder"
        }
    },
    SpiritOfWater: {
        name: {
            japanese: "Spirit of Water",
            english: "Spirit of Water"
        }
    },
    SpiritOfWind: {
        name: {
            japanese: "Spirit of Wind",
            english: "Spirit of Wind"
        }
    },
    SpiritOfWood: {
        name: {
            japanese: "Spirit of Wood",
            english: "Spirit of Wood"
        }
    },
    //#endregion
    //#region DigiScores
    CulumonHeart: {
        japanese: "Culumon (Heart)",
        english: "Calumon (Heart)"
    },
    CulumonSpade: {
        japanese: "Culumon (Spade)",
        english: "Calumon (Spade)"
    },
    KabuterimonHeart: {
        japanese: "Kabuterimon (Heart)",
        english: "Kabuterimon (Heart)"
    },
    KabuterimonSpade: {
        japanese: "Kabuterimon (Spade)",
        english: "Kabuterimon (Spade)"
    },
    LeomonHeart: {
        japanese: "Leomon (Heart)",
        english: "Leomon (Heart)"
    },
    LeomonSpade: {
        japanese: "Leomon (Spade)",
        english: "Leomon (Spade)"
    },
    DukemonHeart: {
        japanese: "Dukemon (Heart)",
        english: "Gallantmon (Heart)"
    },
    DukemonSpade: {
        japanese: "Dukemon (Spade)",
        english: "Gallantmon (Spade)"
    },
    PiemonHeart: {
        japanese: "Piemon (Heart)",
        english: "Piedmon (Heart)"
    },
    PiemonSpade: {
        japanese: "Piemon (Spade)",
        english: "Piedmon (Spade)"
    },
    MugendramonHeart: {
        japanese: "Mugendramon (Heart)",
        english: "Machinedramon (Heart)"
    },
    MugendramonSpade: {
        japanese: "Mugendramon (Spade)",
        english: "Machinedramon (Spade)"
    },
    AncientVolcamonHeart: {
        japanese: "AncientVolcamon (Heart)",
        english: "AncientVolcanomon (Heart)",
    },
    AncientVolcamonSpade: {
        japanese: "AncientVolcamon (Spade)",
        english: "AncientVolcanomon (Spade)",
    },
    SusanoomonHeart: {
        japanese: "Susanoomon (Heart)",
        english: "Susanoomon (Heart)"
    },
    SusanoomonSpade: {
        japanese: "Susanoomon (Spade)",
        english: "Susanoomon (Spade)"
    },
    ShoutmonHeart: {
        japanese: "Shoutmon (Heart)",
        english: "Shoutmon (Heart)"
    },
    ShoutmonSpade: {
        japanese: "Shoutmon (Spade)",
        english: "Shoutmon (Spade)"
    },
    Beelzebumon2010Heart: {
        japanese: "Beelzebumon (2010) (Heart)",
        english: "Beelzemon (2010) (Heart)"
    },
    Beelzebumon2010Spade: {
        japanese: "Beelzebumon (2010) (Spade)",
        english: "Beelzemon (2010) (Spade)"
    },
    //#endregion
    //#region Items
    CorePiece: {
        name: {
            japanese: "Core Piece", // TODO: Check Japanese Name
            english: "Core Piece"
        }
    },
    CourageDM: {
        name: {
            japanese: "DigiMental of Courage",
            english: "DigiEgg of Courage"
        }
    },
    FriendshipDM: {
        name: {
            japanese: "DigiMental of Friendship",
            english: "DigiEgg of Friendship"
        }
    },
    KindnessDM: {
        name: {
            japanese: "DigiMental of Kindness",
            english: "DigiEgg of Kindness"
        }
    },
    LoveDM: {
        name: {
            japanese: "DigiMental of Love",
            english: "DigiEgg of Love"
        }
    },
    LightDM: {
        name: {
            japanese: "DigiMental of Light",
            english: "DigiEgg of Light"
        }
    },
    MiraclesDM: {
        name: {
            japanese: "DigiMental of Miracles",
            english: "DigiEgg of Miracles"
        }
    },
    PurityDM: {
        name: {
            japanese: "DigiMental of Purity",
            english: "DigiEgg of Sincerity"
        }
    },
    SincerityDE: {
        name: {
            japanese: "DigiMental of Sincerity",
            english: "DigiEgg of Reliability"
        }
    }
    //#endregion
}

export const SpecialValues = {
    starter: "Starter",
    // Story Values
    // Generic
    normal: "Normal",
    bronze: "Bronze",
    silver: "Silver",
    gold: "Gold",
    platinum: "Platinum",
    king: "King",
    legend: "Legend",
    // Game Progress Types
    defeat: "defeat",
    bosses: "bosses",
    // DS
    GrandLocomon: "GrandLocomon",
    ChronomonDM: "ChronomonDM",
}

const Stage = {
    stage1: {
        value: 1,
        japanese: "Baby",
        english: "In-Training"
    },
    stage2: {
        value: 2,
        japanese: "Child",
        english: "Rookie"
    },
    stage3: {
        value: 3,
        japanese: "Adult",
        english: "Champion"
    },
    stage4: {
        value: 4,
        japanese: "Perfect",
        english: "Ultimate"
    },
    stage5: {
        value: 5,
        japanese: "Ultimate",
        english: "Mega"
    },
    stage6: {
        value: 6,
        japanese: "Ultimate 2",
        english: "Burst Mode"
    },
}

export const Species = {
    ANY: "Any",
    AQU: "Aquan",
    BST: "Beast",
    BRD: "Bird",
    DAR: "Dark",
    DRG: "Dragon",
    HOL: "Holy",
    INS: "Insect",
    MAC: "Machine/Mutant",
    PLN: "Plant",
}

const DNAEvolutions = {
    Anubimon: {
        components: [
            [DataNames.Garudamon, DataNames.Blossomon],
            [DataNames.Yatagaramon, DataNames.Karatenmon]
        ],
        level: 52,
        exp: [{
            type: Species.HOL,
            amount: 1500,
        }],
    },
    Apocalymon: {
        components: [
            [DataNames.Piemon, DataNames.Mugendramon],
            [DataNames.MetalSeadramon, DataNames.Pinocchimon]
        ],
        level: 70,
        exp: [{
            type: Species.DAR,
            amount: 4444,
        }],
        obtained: [DataNames.Piemon],
    },
    Armagemon: {
        components: [
            [DataNames.Diaboromon, DataNames.Infermon],
        ],
        level: 81,
        allied: [DataNames.Kuramon],
    },
    BanchoLeomon: {
        components: [
            [DataNames.GrapLeomon, DataNames.Pandamon],
        ],
        level: 64,
        exp: [{
            type: Species.BST,
            amount: 5000,
        }],
    },
    Beelzebumon: {
        components: [
            [DataNames.Mummymon, DataNames.Matadormon],
        ],
        level: 62,
        obtained: [DataNames.Impmon],
    },
    BeelzebumonBM: {
        components: [
            [DataNames.Beelzebumon, DataNames.BanchoLeomon],
        ],
        level: 68,
    },
    Boltmon: {
        components: [
            [DataNames.Volcamon, DataNames.Tekkamon],
        ],
        level: 41,
        exp: [{
            type: Species.MAC,
            amount: 910,
        }],
    },
    ChaosDukemon: {
        components: [
            [DataNames.BlackMegaloGrowlmon, DataNames.Diaboromon],
        ],
        level: 61,
        exp: [{
            type: Species.DAR,
            amount: 2500,
        }],
    },
    Chaosmon: {
        components: [
            [DataNames.BanchoLeomon, DataNames.Darkdramon],
            [DataNames.BanchoLeomon, DataNames.Valdurmon],
            [DataNames.Darkdramon, DataNames.Valdurmon],
        ],
        level: 67,
        exp: [{
            type: Species.ANY,
            amount: 7000,
        }],
    },
    ChronomonHM: {
        components: [
            [DataNames.Valdurmon, DataNames.Susanoomon],
        ],
        level: 83,
        obtained: [DataNames.Chicchimon],
    },
    Dinobeemon: {
        components: [
            [DataNames.Stingmon, DataNames.ExVeemon],
        ],
        level: 35,
    },
    Dagomon: {
        components: [
            [DataNames.Gesomon, DataNames.Octomon],
        ],
        level: 33,
        exp: [{
            type: Species.DAR,
            amount: 380,
        }],
    },
    Duftmon: {
        components: [
            [DataNames.SlashAngemon, DataNames.GrapLeomon],
        ],
        level: 72,
        exp: [{
            type: Species.HOL,
            amount: 6000,
        }],
    },
    DukemonCM: {
        components: [
            [DataNames.Dukemon, DataNames.Seraphimon],
        ],
        level: 68,
    },
    GigaSeadramon: {
        components: [
            [DataNames.Whamon, DataNames.Gigadramon],
            [DataNames.Tylomon, DataNames.Kenkimon]
        ],
        level: 53,
        exp: [
            {
                type: Species.AQU,
                amount: 1700,
            },
            {
                type: Species.MAC,
                amount: 1700,
            },
        ],
    },
    HeraclesKabuterimon: {
        components: [
            [DataNames.AtlurKabuterimonR, DataNames.Ookuwamon],
        ],
        level: 61,
        exp: [{
            type: Species.INS,
            amount: 3200,
        }],
    },
    ImperialdramonPM: {
        components: [
            [DataNames.Omegamon, DataNames.ImperialdramonFM],
        ],
        level: 68,
        exp: [{
            type: Species.HOL,
            amount: 5000,
        }],
    },
    Kimeramon: {
        components: [
            [DataNames.Kabuterimon, DataNames.Devimon],
        ],
        level: 40,
        exp: [{
            type: Species.ANY,
            amount: 1900,
        }],
        obtained: [DataNames.SkullGreymon],
    },
    Kuzuhamon: {
        components: [
            [DataNames.Taomon, DataNames.Karatenmon],
        ],
        level: 43,
        exp: [{
            type: Species.HOL,
            amount: 770,
        }],
    },
    LucemonFM: {
        components: [
            [DataNames.Angemon, DataNames.Devimon],
        ],
        level: 40,
        exp: [{
            type: Species.ANY,
            amount: 1200,
        }],
    },
    Mugendramon: {  // TODO: Decide if I wanna keep it or just make it a Moonlight-exclusive
        components: [
            [DataNames.MetalTyrannomon, DataNames.Megadramon],
            [DataNames.MetalTyrannomon, DataNames.Gigadramon],
            [DataNames.Megadramon, DataNames.Gigadramon],
        ],
        level: 50,
        obtained: [DataNames.MetalSeadramon],
    },
    BelialVamdemon: {
        components: [
            [DataNames.Vamdemon, DataNames.Shadramon],
        ],
        level: 68,
        obtained: [DataNames.Arukenimon],
    },
    Millenniumon: {
        components: [
            [DataNames.Kimeramon, DataNames.Mugendramon],
        ],
        level: 55,
        exp: [{
            type: Species.DAR,
            amount: 2700,
        }],
    },
    MirageGaogamonBM: {
        components: [
            [DataNames.MirageGaogamon, DataNames.Vikemon],
            [DataNames.MirageGaogamon, DataNames.PrinceMamemon],
        ],
        level: 67,
        exp: [{
            type: Species.BST,
            amount: 4000,
        }],
    },
    Omegamon: {
        components: [
            [DataNames.WarGreymon, DataNames.MetalGarurumon],
        ],
        level: 65,
    },
    Paildramon: {
        components: [
            [DataNames.ExVeemon, DataNames.Stingmon],
        ],
        level: 36,
    },
    Pandamon: {
        components: [
            [DataNames.Yukidarumon, DataNames.Tsuchidarumon],
        ],
        level: 31,
        exp: [{
            type: Species.BST,
            amount: 600,
        }],
    },
    RavemonBM: {
        components: [
            [DataNames.Ravemon, DataNames.Valkyrimon],
            [DataNames.Ravemon, DataNames.Valdurmon],
        ],
        level: 66,
        exp: [{
            type: Species.BRD,
            amount: 4000,
        }],
    },
    RosemonBM: {
        components: [
            [DataNames.Rosemon, DataNames.Ophanimon],
            [DataNames.Rosemon, DataNames.Babamon],
        ],
        level: 64,
        exp: [{
            type: Species.INS,
            amount: 4100,
        }],
    },
    Shakkoumon: {
        components: [
            [DataNames.Angemon, DataNames.Ankylomon],
        ],
        level: 36,
        exp: [{
            type: Species.HOL,
            amount: 450,
        }],
    },
    ShineGreymonBM: {
        components: [
            [DataNames.ShineGreymon, DataNames.Dukemon],
            [DataNames.ShineGreymon, DataNames.ImperialdramonFM],
        ],
        level: 68,
        obtained: [DataNames.ShineGreymonRM],
    },
    ShineGreymonRM: {
        components: [
            [DataNames.ShineGreymon, DataNames.Darkdramon],
        ],
        level: 59,
        exp: [{
            type: Species.DAR,
            amount: 2400,
        }],
    },
    Silphymon: {
        components: [
            [DataNames.Tailmon, DataNames.Aquilamon],
        ],
        level: 35,
        exp: [{
            type: Species.BRD,
            amount: 700,
        }],
    },
    Susanoomon: {
        components: [
            [DataNames.SuperStarmon, DataNames.Magnamon],
            [DataNames.Yatagaramon, DataNames.Kongoumon]
        ],
        level: 73,
        exp: [{
            type: Species.ANY,
            amount: 8888,
        }],
    },
    Tsumemon: {
        components: [
            [DataNames.Kuramon, DataNames.Kuramon],
        ],
        level: 9,
        exp: [{
            type: Species.DAR,
            amount: 1,
        }],
    },
    Vademon: {
        components: [
            [DataNames.RedVegiemon, DataNames.Nanimon],
        ],
        level: 36,
        exp: [
            {
                type: Species.INS,
                amount: 400,
            },
            {
                type: Species.MAC,
                amount: 300,
            },
        ],
    },
    Valdurmon: {
        components: [
            [DataNames.Sinduramon, DataNames.Silphymon],
        ],
        level: 63,
        exp: [
            {
                type: Species.BRD,
                amount: 2400,
            },
            {
                type: Species.HOL,
                amount: 1800,
            },
        ],
    },
    ZeedMillenniumon: {
        components: [
            [DataNames.MoonMillenniumon, DataNames.Gigadramon],
        ],
        level: 77,
        exp: [{
            type: Species.DAR,
            amount: 7000,
        }],
    },
}

const ArmorEvolutions = {
    Allomon: {
        base: DataNames.Hawkmon,
        digiegg: DataNames.CourageDM,
        level: 21,
    },
    Fladramon: {
        base: DataNames.Veemon,
        digiegg: DataNames.CourageDM,
        level: 22,
        exp: [{
            type: Species.DRG,
            amount: 250,
        }],
    },
    Kabukimon: {
        base: DataNames.Tailmon,
        digiegg: DataNames.PurityDM,
        level: 31,
        exp: [{
            type: Species.INS,
            amount: 200,
        }],
    },
    Kenkimon: {
        base: DataNames.Armadimon,
        digiegg: DataNames.FriendshipDM,
        level: 24,
        exp: [{
            type: Species.MAC,
            amount: 230,
        }],
    },
    Kongoumon: {
        base: DataNames.Wormmon,
        digiegg: DataNames.MiraclesDM,
        level: 32,
    },
    Lynxmon: {
        base: DataNames.Tailmon,
        digiegg: DataNames.CourageDM,
        level: 29,
    },
    Magnamon: {
        base: DataNames.Veemon,
        digiegg: DataNames.MiraclesDM,
        level: 40,
        exp: [{
            type: Species.HOL,
            amount: 1000,
        }],
    },
    Owlmon: {
        base: DataNames.Wormmon,
        digiegg: DataNames.LoveDM,
        level: 21,
    },
    Pipismon: {
        base: DataNames.Patamon,
        digiegg: DataNames.LoveDM,
        level: 21,
    },
    Ponchomon: {
        base: DataNames.Patamon,
        digiegg: DataNames.PurityDM,
        level: 23,
        exp: [{
            type: Species.DAR,
            amount: 200,
        }],
    },
    Prairiemon: {
        base: DataNames.Patamon,
        digiegg: DataNames.KindnessDM,
        level: 27,
    },
    Seahomon: {
        base: DataNames.Armadimon,
        digiegg: DataNames.LightDM,
        level: 27,
        exp: [{
            type: Species.DRG,
            amount: 270,
        }],
    },
    Shadramon: {
        base: DataNames.Wormmon,
        digiegg: DataNames.CourageDM,
        level: 30,
        exp: [{
            type: Species.DAR,
            amount: 600,
        }],
    },
    Shurimon: {
        base: DataNames.Hawkmon,
        digiegg: DataNames.PurityDM,
        level: 22,
        exp: [{
            type: Species.INS,
            amount: 80,
        }],
    },
    Toucanmon: {
        base: DataNames.Hawkmon,
        digiegg: DataNames.KindnessDM,
        level: 20,
    },
    Tylomon: {
        base: DataNames.Tailmon,
        digiegg: DataNames.SincerityDE,
        level: 27,
        exp: [{
            type: Species.AQU,
            amount: 220,
        }],
    },
}

// const DigiPlates = {
//     Armadimon: {
//         name: {
//             japanese: "Armadimon",
//             english: "Armadillomon"
//         }
//     },
//     Kamemon: {
//         name: {
//             japanese: "Kamemon",
//             english: "Kamemon"
//         }
//     },
//     Kokuwamon: {
//         name: {
//             japanese: "Kokuwamon",
//             english: "Kokuwamon"
//         }
//     },
//     Greymon: {
//         name: {
//             japanese: "Greymon",
//             english: "Greymon"
//         }
//     },
//     Devimon: {
//         name: {
//             japanese: "Devimon",
//             english: "Devimon"
//         }
//     },
//     Airdramon: {
//         name: {
//             japanese: "Airdramon",
//             english: "Airdramon"
//         }
//     },
//     Kabuterimon: {
//         name: {
//             japanese: "Kabuterimon",
//             english: "Kabuterimon"
//         }
//     },
//     Garurumon: {
//         name: {
//             japanese: "Garurumon",
//             english: "Garurumon"
//         }
//     },
//     Angemon: {
//         name: {
//             japanese: "Angemon",
//             english: "Angemon"
//         }
//     },
//     Ogremon: {
//         name: {
//             japanese: "Ogremon",
//             english: "Ogremon"
//         }
//     },
//     Leomon: {
//         name: {
//             japanese: "Leomon",
//             english: "Leomon"
//         }
//     },
//     Tailmon: {
//         name: {
//             japanese: "Tailmon",
//             english: "Gatomon"
//         }
//     },
//     Wizardmon: {
//         name: {
//             japanese: "Wizardmon",
//             english: "Wizardmon"
//         }
//     },
//     Togemon: {
//         name: {
//             japanese: "Togemon",
//             english: "Togemon"
//         }
//     },
//     Guardromon: {
//         name: {
//             japanese: "Guardromon",
//             english: "Guardromon"
//         }
//     },
//     ExVeemon: {
//         name: {
//             japanese: "ExVeemon",
//             english: "ExVeemon"
//         }
//     },
//     Stingmon: {
//         name: {
//             japanese: "Stingmon",
//             english: "Stingmon"
//         }
//     },
//     Birdramon: {
//         name: {
//             japanese: "Birdramon",
//             english: "Birdramon"
//         }
//     },
//     Ankylomon: {
//         name: {
//             japanese: "Ankylomon",
//             english: "Ankylomon"
//         }
//     },
//     Gargomon: {
//         name: {
//             japanese: "Gargomon",
//             english: "Gargomon"
//         }
//     },
//     Kyubimon: {
//         name: {
//             japanese: "Kyubimon",
//             english: "Kyubimon"
//         }
//     },
//     Aquilamon: {
//         name: {
//             japanese: "Aquilamon",
//             english: "Aquilamon"
//         }
//     },
//     Reppamon: {
//         name: {
//             japanese: "Reppamon",
//             english: "Reppamon"
//         }
//     },
//     Sunflowmon: {
//         name: {
//             japanese: "Sunflowmon",
//             english: "Sunflowmon"
//         }
//     },
//     Sangloupmon: {
//         name: {
//             japanese: "Sangloupmon",
//             english: "Sangloupmon"
//         }
//     },
//     Coelamon: {
//         name: {
//             japanese: "Coelamon",
//             english: "Coelamon"
//         }
//     },
//     Yukidarumon: {
//         name: {
//             japanese: "Yukidarumon",
//             english: "Frigimon"
//         }
//     },
//     Woodmon: {
//         name: {
//             japanese: "Woodmon",
//             english: "Woodmon"
//         }
//     },
//     Igamon: {
//         name: {
//             japanese: "Igamon",
//             english: "Ninjamon"
//         }
//     },
//     Clockmon: {
//         name: {
//             japanese: "Clockmon",
//             english: "Clockmon"
//         }
//     },
//     Tankmon: {
//         name: {
//             japanese: "Tankmon",
//             english: "Tankmon"
//         }
//     },
//     Revolmon: {
//         name: {
//             japanese: "Revolmon",
//             english: "Deputymon"
//         }
//     },
//     Veedramon: {
//         name: {
//             japanese: "Veedramon",
//             english: "Veedramon"
//         }
//     },
//     Firamon: {
//         name: {
//             japanese: "Firamon",
//             english: "Firamon"
//         }
//     },
//     Lekismon: {
//         name: {
//             japanese: "Lekismon",
//             english: "Lekismon"
//         }
//     },
//     Strikedramon: {
//         name: {
//             japanese: "Strikedramon",
//             english: "Strikedramon"
//         }
//     },
//     Buraimon: {
//         name: {
//             japanese: "Buraimon",
//             english: "Buraimon"
//         }
//     },
//     MetalGreymon: {
//         name: {
//             japanese: "MetalGreymon",
//             english: "MetalGreymon"
//         }
//     },
//     Monzaemon: {
//         name: {
//             japanese: "Monzaemon",
//             english: "Monzaemon"
//         }
//     },
//     SkullGreymon: {
//         name: {
//             japanese: "SkullGreymon",
//             english: "SkullGreymon"
//         }
//     },
//     MetalMamemon: {
//         name: {
//             japanese: "MetalMamemon",
//             english: "MetalMamemon"
//         }
//     },
//     Andromon: {
//         name: {
//             japanese: "Andromon",
//             english: "Andromon"
//         }
//     },
//     Piccolomon: {
//         name: {
//             japanese: "Piccolomon",
//             english: "Piximon"
//         }
//     },
//     Digitamamon: {
//         name: {
//             japanese: "Digitamamon",
//             english: "Digitamamon"
//         }
//     },
//     Ookuwamon: {
//         name: {
//             japanese: "Ookuwamon",
//             english: "Okuwamon"
//         }
//     },
//     Angewomon: {
//         name: {
//             japanese: "Angewomon",
//             english: "Angewomon"
//         }
//     },
//     MegaSeadramon: {
//         name: {
//             japanese: "MegaSeadramon",
//             english: "MegaSeadramon"
//         }
//     },
//     Dagomon: {
//         name: {
//             japanese: "Dagomon",
//             english: "Dragomon"
//         }
//     },
//     WereGarurumonBlack: {
//         name: {
//             japanese: "WereGarurumon (Black)",
//             english: "WereGarurumon (Black)"
//         }
//     },
//     Vamdemon: {
//         name: {
//             japanese: "Vamdemon",
//             english: "Myotismon"
//         }
//     },
//     LadyDevimon: {
//         name: {
//             japanese: "LadyDevimon",
//             english: "LadyDevimon"
//         }
//     },
//     Garudamon: {
//         name: {
//             japanese: "Garudamon",
//             english: "Garudamon"
//         }
//     },
//     Lilymon: {
//         name: {
//             japanese: "Lilymon",
//             english: "Lilymon"
//         }
//     },
//     AtlurKabuterimon: {
//         name: {
//             japanese: "AtlurKabuterimon (Red)",
//             english: "MegaKabuterimon (Red)"
//         }
//     },
//     HolyAngemon: {
//         name: {
//             japanese: "HolyAngemon",
//             english: "MagnaAngemon"
//         }
//     },
//     PaildramonAlpha: {
//         name: {
//             japanese: "Paildramon (Alpha)",
//             english: "Paildramon (Alpha)"
//         }
//     },
//     PaildramonBeta: {
//         name: {
//             japanese: "Paildramon (Beta)",
//             english: "Paildramon (Beta)"
//         }
//     },
//     DinobeemonAlpha: {
//         name: {
//             japanese: "Dinobeemon (Alpha)",
//             english: "Dinobeemon (Alpha)"
//         }
//     },
//     DinobeemonBeta: {
//         name: {
//             japanese: "Dinobeemon (Beta)",
//             english: "Dinobeemon (Beta)"
//         }
//     },
//     Antylamon: {
//         name: {
//             japanese: "Antylamon",
//             english: "Antylamon"
//         }
//     },
//     Arukenimon: {
//         name: {
//             japanese: "Arukenimon",
//             english: "Arukenimon"
//         }
//     },
//     MegaloGrowlmon: {
//         name: {
//             japanese: "MegaloGrowlmon",
//             english: "WarGrowlmon"
//         }
//     },
//     Rapidmon: {
//         name: {
//             japanese: "Rapidmon",
//             english: "Rapidmon"
//         }
//     },
//     Infermon: {
//         name: {
//             japanese: "Infermon",
//             english: "Infermon"
//         }
//     },
//     Dorugremon: {
//         name: {
//             japanese: "Dorugremon",
//             english: "DoruGreymon"
//         }
//     },
//     KimeramonAlpha: {
//         name: {
//             japanese: "Kimeramon (Alpha)",
//             english: "Kimeramon (Alpha)"
//         }
//     },
//     KimeramonBeta: {
//         name: {
//             japanese: "Kimeramon (Beta)",
//             english: "Kimeramon (Beta)"
//         }
//     },
//     SilphymonAlpha: {
//         name: {
//             japanese: "Silphymon (Alpha)",
//             english: "Silphymon (Alpha)"
//         }
//     },
//     SilphymonBeta: {
//         name: {
//             japanese: "Silphymon (Beta)",
//             english: "Silphymon (Beta)"
//         }
//     },
//     SuperStarmon: {
//         name: {
//             japanese: "SuperStarmon",
//             english: "SuperStarmon"
//         }
//     },
//     Zudomon: {
//         name: {
//             japanese: "Zudomon",
//             english: "Zudomon"
//         }
//     },
//     Mamemon: {
//         name: {
//             japanese: "Mamemon",
//             english: "Mamemon"
//         }
//     },
//     RizeGreymon: {
//         name: {
//             japanese: "RizeGreymon",
//             english: "RiseGreymon"
//         }
//     },
//     MachGaogamon: {
//         name: {
//             japanese: "MachGaogamon",
//             english: "MachGaogamon"
//         }
//     },
//     Lilamon: {
//         name: {
//             japanese: "Lilamon",
//             english: "Lilamon"
//         }
//     },
//     LucemonFMAlpha: {
//         name: {
//             japanese: "Lucemon (Falldown Mode) (Alpha)",
//             english: "Lucemon (Chaos Mode) (Alpha)"
//         }
//     },
//     LucemonFMBeta: {
//         name: {
//             japanese: "Lucemon (Falldown Mode) (Beta)",
//             english: "Lucemon (Chaos Mode) (Beta)"
//         }
//     },
//     MetalTyrannomon: {
//         name: {
//             japanese: "MetalTyrannomon",
//             english: "MetalTyrannomon"
//         }
//     },
//     EXTyrannomon: {
//         name: {
//             japanese: "EXTyrannomon",
//             english: "EXTyrannomon"
//         }
//     },
//     AeroVeedramon: {
//         name: {
//             japanese: "AeroVeedramon",
//             english: "AeroVeedramon"
//         }
//     },
//     Shawujinmon: {
//         name: {
//             japanese: "Shawujinmon",
//             english: "Shawujinmon"
//         }
//     },
//     Yatagaramon: {
//         name: {
//             japanese: "Yatagaramon",
//             english: "Yatagaramon"
//         }
//     },
//     Flaremon: {
//         name: {
//             japanese: "Flaremon",
//             english: "Flaremon"
//         }
//     },
//     Crescemon: {
//         name: {
//             japanese: "Crescemon",
//             english: "Crescemon"
//         }
//     },
//     ArgomonUltimate: {
//         name: {
//             japanese: "Argomon (Ultimate)",
//             english: "Argomon (Ultimate)"
//         }
//     },
//     ShakkoumonAlpha: {
//         name: {
//             japanese: "Shakkoumon (Alpha)",
//             english: "Shakkoumon (Alpha)"
//         }
//     },
//     ShakkoumonBeta: {
//         name: {
//             japanese: "Shakkoumon (Beta)",
//             english: "Shakkoumon (Beta)"
//         }
//     },
//     WaruSeadramon: {
//         name: {
//             japanese: "WaruSeadramon",
//             english: "WaruSeadramon"
//         }
//     },
//     SkullBaluchimon: {
//         name: {
//             japanese: "SkullBaluchimon",
//             english: "SkullBaluchimon"
//         }
//     },
//     Grademon: {
//         name: {
//             japanese: "Grademon",
//             english: "Grademon"
//         }
//     },
//     MasterTyrannomon: {
//         name: {
//             japanese: "MasterTyrannomon",
//             english: "MasterTyrannomon"
//         }
//     },
//     Wisemon: {
//         name: {
//             japanese: "Wisemon",
//             english: "Wisemon"
//         }
//     },
//     Mermaimon: {
//         name: {
//             japanese: "Mermaimon",
//             english: "Mermaimon"
//         }
//     },
//     Butenmon: {
//         name: {
//             japanese: "Butenmon",
//             english: "Butenmon"
//         }
//     },
//     HeraclesKabuterimon: {
//         name: {
//             japanese: "HeraclesKabuterimon",
//             english: "HerculesKabuterimon"
//         }
//     },
//     SaberLeomon: {
//         name: {
//             japanese: "SaberLeomon",
//             english: "SaberLeomon"
//         }
//     },
//     GigaSeadramon: {
//         name: {
//             japanese: "GigaSeadramon",
//             english: "GigaSeadramon"
//         }
//     },
//     Piemon: {
//         name: {
//             japanese: "Piemon",
//             english: "Piedmon"
//         }
//     },
//     Hououmon: {
//         name: {
//             japanese: "Hououmon",
//             english: "Phoenixmon"
//         }
//     },
//     Pinocchimon: {
//         name: {
//             japanese: "Pinocchimon",
//             english: "Puppetmon"
//         }
//     },
//     WarGreymon: {
//         name: {
//             japanese: "WarGreymon",
//             english: "WarGreymon"
//         }
//     },
//     MetalGarurumon: {
//         name: {
//             japanese: "MetalGarurumon",
//             english: "MetalGarurumon"
//         }
//     },
//     MugendramonAlpha: {
//         name: {
//             japanese: "Mugendramon (Alpha)",
//             english: "Machinedramon (Alpha)"
//         }
//     },
//     MugendramonBeta: {
//         name: {
//             japanese: "Mugendramon (Beta)",
//             english: "Machinedramon (Beta)"
//         }
//     },
//     Deathmon: {
//         name: {
//             japanese: "Deathmon",
//             english: "Ghoulmon"
//         }
//     },
//     Seraphimon: {
//         name: {
//             japanese: "Seraphimon",
//             english: "Seraphimon"
//         }
//     },
//     HiAndromon: {
//         name: {
//             japanese: "HiAndromon",
//             english: "HiAndromon"
//         }
//     },
//     CherubimonZen: {
//         name: {
//             japanese: "Cherubimon (Zen)",
//             english: "Cherubimon (Good)"
//         }
//     },
//     Dukemon: {
//         name: {
//             japanese: "Dukemon",
//             english: "Gallantmon"
//         }
//     },
//     SaintGargomon: {
//         name: {
//             japanese: "SaintGargomon",
//             english: "MegaGargomon"
//         }
//     },
//     Sakuyamon: {
//         name: {
//             japanese: "Sakuyamon",
//             english: "Sakuyamon"
//         }
//     },
//     Diaboromon: {
//         name: {
//             japanese: "Diaboromon",
//             english: "Diaboromon"
//         }
//     },
//     Neptunemon: {
//         name: {
//             japanese: "Neptunemon",
//             english: "Neptunemon"
//         }
//     },
//     PrinceMamemon: {
//         name: {
//             japanese: "PrinceMamemon",
//             english: "PrinceMamemon"
//         }
//     },
//     Ophanimon: {
//         name: {
//             japanese: "Ophanimon",
//             english: "Ophanimon"
//         }
//     },
//     Zanbamon: {
//         name: {
//             japanese: "Zanbamon",
//             english: "Zanbamon"
//         }
//     },
//     Anubimon: {
//         name: {
//             japanese: "Anubimon",
//             english: "Anubismon"
//         }
//     },
//     SlashAngemon: {
//         name: {
//             japanese: "SlashAngemon",
//             english: "SlashAngemon"
//         }
//     },
//     Crossmon: {
//         name: {
//             japanese: "Crossmon",
//             english: "Eaglemon"
//         }
//     },
//     Dorugoramon: {
//         name: {
//             japanese: "Dorugoramon",
//             english: "Dorugoramon"
//         }
//     },
//     Beelzebumon: {
//         name: {
//             japanese: "Beelzebumon",
//             english: "Beelzemon"
//         }
//     },
//     BanchoLeomon: {
//         name: {
//             japanese: "BanchoLeomon",
//             english: "BanchoLeomon"
//         }
//     },
//     Darkdramon: {
//         name: {
//             japanese: "Darkdramon",
//             english: "Darkdramon"
//         }
//     },
//     Goddramon: {
//         name: {
//             japanese: "Goddramon",
//             english: "Goldramon"
//         }
//     },
//     MetalSeadramon: {
//         name: {
//             japanese: "MetalSeadramon",
//             english: "MetalSeadramon"
//         }
//     },
//     Justimon: {
//         name: {
//             japanese: "Justimon",
//             english: "Justimon"
//         }
//     },
//     Vikemon: {
//         name: {
//             japanese: "Vikemon",
//             english: "Vikemon"
//         }
//     },
//     GranKuwagamon: {
//         name: {
//             japanese: "GranKuwagamon",
//             english: "GranKuwagamon"
//         }
//     },
//     Alphamon: {
//         name: {
//             japanese: "Alphamon",
//             english: "Alphamon"
//         }
//     },
//     Holydramon: {
//         name: {
//             japanese: "Holydramon",
//             english: "Magnadramon"
//         }
//     },
//     MilleniumonAlpha: {
//         name: {
//             japanese: "Milleniumon (Alpha)",
//             english: "Milleniumon (Alpha)"
//         }
//     },
//     MilleniumonBeta: {
//         name: {
//             japanese: "Milleniumon (Beta)",
//             english: "Milleniumon (Beta)"
//         }
//     },
//     Sleipmon: {
//         name: {
//             japanese: "Sleipmon",
//             english: "Sleipmon"
//         }
//     },
//     ShineGreymon: {
//         name: {
//             japanese: "ShineGreymon",
//             english: "ShineGreymon"
//         }
//     },
//     MirageGaogamon: {
//         name: {
//             japanese: "MirageGaogamon",
//             english: "MirageGaogamon"
//         }
//     },
//     JumboGamemon: {
//         name: {
//             japanese: "JumboGamemon",
//             english: "JumboGamemon"
//         }
//     },
//     ChronomonHMAlpha: {
//         name: {
//             japanese: "Chronomon (Holy Mode) (Alpha)",
//             english: "Chronomon (Holy Mode) (Alpha)"
//         }
//     },
//     ChronomonHMBeta: {
//         name: {
//             japanese: "Chronomon (Holy Mode) (Beta)",
//             english: "Chronomon (Holy Mode) (Beta)"
//         }
//     },
//     Lillithmon: {
//         name: {
//             japanese: "Lillithmon",
//             english: "Lillithmon"
//         }
//     },
//     Apollomon: {
//         name: {
//             japanese: "Apollomon",
//             english: "Apollomon"
//         }
//     },
//     Dianamon: {
//         name: {
//             japanese: "Dianamon",
//             english: "Dianamon"
//         }
//     },
//     Lotusmon: {
//         name: {
//             japanese: "Lotusmon",
//             english: "Lotusmon"
//         }
//     },
//     Minervamon: {
//         name: {
//             japanese: "Minervamon",
//             english: "Minervamon"
//         }
//     },
//     Duftmon: {
//         name: {
//             japanese: "Duftmon",
//             english: "Duftmon"
//         }
//     },
//     Spinomon: {
//         name: {
//             japanese: "Spinomon",
//             english: "Spinomon"
//         }
//     },
//     Mercurymon: {
//         name: {
//             japanese: "Mercurymon",
//             english: "Mercurymon"
//         }
//     },
//     Gaioumon: {
//         name: {
//             japanese: "Gaioumon",
//             english: "Gaioumon"
//         }
//     },
//     GranDracmon: {
//         name: {
//             japanese: "GranDracmon",
//             english: "GranDracmon"
//         }
//     },
//     AncientIrismon: {
//         name: {
//             japanese: "AncientIrismon",
//             english: "AncientIrismon"
//         }
//     },
//     AncientGarurumon: {
//         name: {
//             japanese: "AncientGarurumon",
//             english: "AncientGarurumon"
//         }
//     },
//     AncientMegatheriumon: {
//         name: {
//             japanese: "AncientMegatheriumon",
//             english: "AncientMegatheriumon"
//         }
//     },
//     AncientGreymon: {
//         name: {
//             japanese: "AncientGreymon",
//             english: "AncientGreymon"
//         }
//     },
//     AncientMermaimon: {
//         name: {
//             japanese: "AncientMermaimon",
//             english: "AncientMermaimon"
//         }
//     },
//     AncientWisemon: {
//         name: {
//             japanese: "AncientWisemon",
//             english: "AncientWisemon"
//         }
//     },
//     AncientSphinxmon: {
//         name: {
//             japanese: "AncientSphinxmon",
//             english: "AncientSphinxmon"
//         }
//     },
//     AncientTroiamonAlpha: {
//         name: {
//             japanese: "AncientTroiamon (Alpha)",
//             english: "AncientTroiamon (Alpha)"
//         }
//     },
//     AncientTroiamonBeta: {
//         name: {
//             japanese: "AncientTroiamon (Beta)",
//             english: "AncientTroiamon (Beta)"
//         }
//     },
//     AncientBeatmonAlpha: {
//         name: {
//             japanese: "AncientBeatmon (Alpha)",
//             english: "AncientBeetlemon (Alpha)"
//         }
//     },
//     AncientBeatmonBeta: {
//         name: {
//             japanese: "AncientBeatmon (Beta)",
//             english: "AncientBeetlemon (Beta)"
//         }
//     },
//     AncientVolcamon: {
//         name: {
//             japanese: "AncientVolcamon",
//             english: "AncientVolcamon"
//         }
//     },
//     UlforceVeedramonAlpha: {
//         name: {
//             japanese: "UlforceVeedramon (Alpha)",
//             english: "UlforceVeedramon (Alpha)"
//         }
//     },
//     UlforceVeedramonBeta: {
//         name: {
//             japanese: "UlforceVeedramon (Beta)",
//             english: "UlforceVeedramon (Beta)"
//         }
//     },
//     Craniumon: {
//         name: {
//             japanese: "Craniumon",
//             english: "Craniumon"
//         }
//     },
//     Barbamon: {
//         name: {
//             japanese: "Barbamon",
//             english: "Barbamon"
//         }
//     },
//     TigerVespamon: {
//         name: {
//             japanese: "TigerVespamon",
//             english: "TigerVespamon"
//         }
//     },
//     Dynasmon: {
//         name: {
//             japanese: "Dynasmon",
//             english: "Dynasmon"
//         }
//     },
//     LordKnightmon: {
//         name: {
//             japanese: "LordKnightmon",
//             english: "LordKnightmon"
//         }
//     },
//     Examon: {
//         name: {
//             japanese: "Examon",
//             english: "Examon"
//         }
//     },
//     Valdurmon: {
//         name: {
//             japanese: "Valdurmon",
//             english: "Valdurmon"
//         }
//     },
//     OmegamonAlpha: {
//         name: {
//             japanese: "Omegamon (Alpha)",
//             english: "Omnimon (Alpha)"
//         }
//     },
//     OmegamonBeta: {
//         name: {
//             japanese: "Omegamon (Beta)",
//             english: "Omnimon (Beta)"
//         }
//     },
//     ImperialdramonPMAlpha: {
//         name: {
//             japanese: "Imperialdramon (Paladin Mode) (Alpha)",
//             english: "Imperialdramon (Paladin Mode) (Alpha)"
//         }
//     },
//     ImperialdramonPMBeta: {
//         name: {
//             japanese: "Imperialdramon (Paladin Mode) (Beta)",
//             english: "Imperialdramon (Paladin Mode) (Beta)"
//         }
//     },
//     DukemonCMAlpha: {
//         name: {
//             japanese: "Dukemon (Crimson Mode) (Alpha)",
//             english: "Gallantmon (Crimson Mode) (Alpha)"
//         }
//     },
//     DukemonCMBeta: {
//         name: {
//             japanese: "Dukemon (Crimson Mode) (Beta)",
//             english: "Dukemon (Crimson Mode) (Beta)"
//         }
//     },
//     ArmagemonAlpha: {
//         name: {
//             japanese: "Armagemon (Alpha)",
//             english: "Armageddemon (Alpha)"
//         }
//     },
//     ArmagemonBeta: {
//         name: {
//             japanese: "Armagemon (Beta)",
//             english: "Armageddemon (Beta)"
//         }
//     },
//     BelialVamdemonAlpha: {
//         name: {
//             japanese: "BelialVamdemon (Alpha)",
//             english: "MaloMyotismon (Alpha)"
//         }
//     },
//     BelialVamdemonBeta: {
//         name: {
//             japanese: "BelialVamdemon (Beta)",
//             english: "MaloMyotismon (Beta)"
//         }
//     },
//     ApocalymonAlpha: {
//         name: {
//             japanese: "Apocalymon (Alpha)",
//             english: "Apocalymon (Alpha)"
//         }
//     },
//     ApocalymonBeta: {
//         name: {
//             japanese: "Apocalymon (Beta)",
//             english: "Apocalymon (Beta)"
//         }
//     },
//     ZeedMillenniumon: {
//         name: {
//             japanese: "ZeedMillenniumon",
//             english: "ZeedMillenniumon"
//         }
//     },
//     SusanoomonAlpha: {
//         name: {
//             japanese: "Susanoomon (Alpha)",
//             english: "Susanoomon (Alpha)"
//         }
//     },
//     SusanoomonBeta: {
//         name: {
//             japanese: "Susanoomon (Beta)",
//             english: "Susanoomon (Beta)"
//         }
//     },
//     ShineGreymonBMAlpha: {
//         name: {
//             japanese: "ShineGreymon (Burst Mode) (Alpha)",
//             english: "ShineGreymon (Burst Mode) (Alpha)"
//         }
//     },
//     ShineGreymonBMBeta: {
//         name: {
//             japanese: "ShineGreymon (Burst Mode) (Beta)",
//             english: "ShineGreymon (Burst Mode) (Beta)"
//         }
//     },
//     MirageGaogamonBMAlpha: {
//         name: {
//             japanese: "MirageGaogamon (Burst Mode) (Alpha)",
//             english: "MirageGaogamon (Burst Mode) (Alpha)"
//         }
//     },
//     MirageGaogamonBMBeta: {
//         name: {
//             japanese: "MirageGaogamon (Burst Mode) (Beta)",
//             english: "MirageGaogamon (Burst Mode) (Beta)"
//         }
//     },
//     BeelzebumonBMAlpha: {
//         name: {
//             japanese: "Beelzebumon (Blast Mode) (Alpha)",
//             english: "Beelzemon (Blast Mode) (Alpha)"
//         }
//     },
//     BeelzebumonBMBeta: {
//         name: {
//             japanese: "Beelzebumon (Blast Mode) (Beta)",
//             english: "Beelzemon (Blast Mode) (Beta)"
//         }
//     },
//     RavemonBM: {
//         name: {
//             japanese: "Ravemon (Burst Mode)",
//             english: "Ravemon (Burst Mode)"
//         }
//     },
//     RosemonBM: {
//         name: {
//             japanese: "Rosemon (Burst Mode)",
//             english: "Rosemon (Burst Mode)"
//         }
//     },
//     ChaosmonAlpha: {
//         name: {
//             japanese: "Chaosmon (Alpha)",
//             english: "Chaosmon (Alpha)"
//         }
//     },
//     ChaosmonBeta: {
//         name: {
//             japanese: "Chaosmon (Beta)",
//             english: "Chaosmon (Beta)"
//         }
//     },
//     QinglongmonAlpha: {
//         name: {
//             japanese: "Qinglongmon (Alpha)",
//             english: "Azulongmon (Alpha)"
//         }
//     },
//     QinglongmonBeta: {
//         name: {
//             japanese: "Qinglongmon (Beta)",
//             english: "Azulongmon (Beta)"
//         }
//     },
//     Baihumon: {
//         name: {
//             japanese: "Baihumon",
//             english: "Baihumon"
//         }
//     },
//     Zhuqiaomon: {
//         name: {
//             japanese: "Zhuqiaomon",
//             english: "Zhuqiaomon"
//         }
//     },
//     XuanwumonAlpha: {
//         name: {
//             japanese: "Xuanwumon (Alpha)",
//             english: "Ebonwumon (Alpha)"
//         }
//     },
//     XuanwumonBeta: {
//         name: {
//             japanese: "Xuanwumon (Beta)",
//             english: "Ebonwumon (Beta)"
//         }
//     },
//     Aegisdramon: {
//         name: {
//             japanese: "Aegisdramon",
//             english: "Aegisdramon"
//         }
//     },
//     AgumonW1: {
//         name: {
//             japanese: "Agumon Warp 1",
//             english: "Agumon Warp 1"
//         }
//     },
//     AgumonW2: {
//         name: {
//             japanese: "Agumon Warp 2",
//             english: "Agumon Warp 2"
//         }
//     },
//     BlackAgumonW1: {
//         name: {
//             japanese: "BlackAgumon Warp 1",
//             english: "BlackAgumon Warp 1"
//         }
//     },
//     BlackAgumonW2: {
//         name: {
//             japanese: "BlackAgumon Warp 2",
//             english: "BlackAgumon Warp 2"
//         }
//     },
//     GabumonW1: {
//         name: {
//             japanese: "Gabumon Warp 1",
//             english: "Gabumon Warp 1"
//         }
//     },
//     GabumonW2: {
//         name: {
//             japanese: "Gabumon Warp 2",
//             english: "Gabumon Warp 2"
//         }
//     },
//     GaomonW: {
//         name: {
//             japanese: "Gaomon Warp",
//             english: "Gaomon Warp"
//         }
//     },
//     PatamonW1: {
//         name: {
//             japanese: "Patamon Warp 1",
//             english: "Patamon Warp 1"
//         }
//     },
//     PatamonW2: {
//         name: {
//             japanese: "Patamon Warp 2",
//             english: "Patamon Warp 2"
//         }
//     },
//     PicoDevimonW1: {
//         name: {
//             japanese: "PicoDevimon Warp 1",
//             english: "DemiDevimon Warp 1"
//         }
//     },
//     PicoDevimonW2: {
//         name: {
//             japanese: "PicoDevimon Warp 2",
//             english: "DemiDevimon Warp 2"
//         }
//     },
//     PicoDevimonW3: {
//         name: {
//             japanese: "PicoDevimon Warp 3",
//             english: "DemiDevimon Warp 3"
//         }
//     },
//     PiyomonW: {
//         name: {
//             japanese: "Piyomon Warp",
//             english: "Biyomon Warp"
//         }
//     },
//     PlotmonW: {
//         name: {
//             japanese: "Plotmon Warp",
//             english: "Salamon Warp"
//         }
//     },
//     TentomonW: {
//         name: {
//             japanese: "Tentomon Warp",
//             english: "Tentomon Warp"
//         }
//     },
//     TerriermonW: {
//         name: {
//             japanese: "Terriermon Warp",
//             english: "Terriermon Warp"
//         }
//     },
//     VeemonW: {
//         name: {
//             japanese: "Veemon Warp",
//             english: "Veemon Warp"
//         }
//     },
//     WormmonW: {
//         name: {
//             japanese: "Wormmon Warp",
//             english: "Wormmon Warp"
//         }
//     },
//     KimeramonW1: {
//         name: {
//             japanese: "Kimeramon Warp 1",
//             english: "Kimeramon Warp 1"
//         }
//     },
//     KimeramonW2: {
//         name: {
//             japanese: "Kimeramon Warp 2",
//             english: "Kimeramon Warp 2"
//         }
//     },
//     LucemonFMW1: {
//         name: {
//             japanese: "Lucemon (Falldown Mode) Warp 1",
//             english: "Lucemon (Chaos Mode) Warp 1"
//         }
//     },
//     LucemonFMW2: {
//         name: {
//             japanese: "Lucemon (Falldown Mode) Warp 2",
//             english: "Lucemon (Chaos Mode) Warp 2"
//         }
//     },
//     PaildramonW1: {
//         name: {
//             japanese: "Paildramon Warp 1",
//             english: "Paildramon Warp 1"
//         }
//     },
//     PaildramonW2: {
//         name: {
//             japanese: "Paildramon Warp 2",
//             english: "Paildramon Warp 2"
//         }
//     },
//     ShakkoumonW1: {
//         name: {
//             japanese: "Shakkoumon Warp 1",
//             english: "Shakkoumon Warp 1"
//         }
//     },
//     ShakkoumonW2: {
//         name: {
//             japanese: "Shakkoumon Warp 2",
//             english: "Shakkoumon Warp 2"
//         }
//     },
//     SilphymonW1: {
//         name: {
//             japanese: "Silphymon Warp 1",
//             english: "Silphymon Warp 1"
//         }
//     },
//     SilphymonW2: {
//         name: {
//             japanese: "Silphymon Warp 2",
//             english: "Silphymon Warp 2"
//         }
//     },
//     ApocalymonW1: {
//         name: {
//             japanese: "Apocalymon Warp 1",
//             english: "Apocalymon Warp 1"
//         }
//     },
//     ApocalymonW2: {
//         name: {
//             japanese: "Apocalymon Warp 2",
//             english: "Apocalymon Warp 2"
//         }
//     },
//     ChaosmonW1: {
//         name: {
//             japanese: "Chaosmon Warp 1",
//             english: "Chaosmon Warp 1"
//         }
//     },
//     ChaosmonW2: {
//         name: {
//             japanese: "Chaosmon Warp 2",
//             english: "Chaosmon Warp 2"
//         }
//     },
//     OmegamonW1: {
//         name: {
//             japanese: "Omegamon Warp 1",
//             english: "Omnimon Warp 1"
//         }
//     },
//     OmegamonW2: {
//         name: {
//             japanese: "Omegamon Warp 2",
//             english: "Omnimon Warp 2"
//         }
//     },
//     SusanoomonW1: {
//         name: {
//             japanese: "Susanoomon Warp 1",
//             english: "Susanoomon Warp 1"
//         }
//     },
//     SusanoomonW2: {
//         name: {
//             japanese: "Susanoomon Warp 2",
//             english: "Susanoomon Warp 2"
//         }
//     },
//     CourageDM1: {
//         name: {
//             japanese: "DigiMental of Courage 1",
//             english: "DigiEgg of Courage 1"
//         }
//     },
//     CourageDM2: {
//         name: {
//             japanese: "DigiEgg of Courage 2",
//             english: "DigiEgg of Courage 2"
//         }
//     },
//     FriendshipDM: {
//         name: {
//             japanese: "DigiMental of Friendship",
//             english: "DigiEgg of Friendship"
//         }
//     },
//     KindnessDM: {
//         name: {
//             japanese: "DigiMental of Kindness",
//             english: "DigiEgg of Kindness"
//         }
//     },
//     PurityDM: {
//         name: {
//             japanese: "DigiMental of Purity",
//             english: "DigiEgg of Purity"
//         }
//     },
//     MiraclesDM: {
//         name: {
//             japanese: "DigiMental of Miracles",
//             english: "DigiEgg of Miracles"
//         }
//     },
//     SpiritOfDarkness: {
//         name: {
//             japanese: "Spirit of Darkness",
//             english: "Spirit of Darkness"
//         }
//     },
//     SpiritOfEarth: {
//         name: {
//             japanese: "Spirit of Earth",
//             english: "Spirit of Earth"
//         }
//     },
//     SpiritOfFire: {
//         name: {
//             japanese: "Spirit of Fire",
//             english: "Spirit of Fire"
//         }
//     },
//     SpiritOfIce: {
//         name: {
//             japanese: "Spirit of Ice",
//             english: "Spirit of Ice"
//         }
//     },
//     SpiritOfLight: {
//         name: {
//             japanese: "Spirit of Light",
//             english: "Spirit of Light"
//         }
//     },
//     SpiritOfSteel: {
//         name: {
//             japanese: "Spirit of Steel",
//             english: "Spirit of Steel"
//         }
//     },
//     SpiritOfThunder: {
//         name: {
//             japanese: "Spirit of Thunder",
//             english: "Spirit of Thunder"
//         }
//     },
//     SpiritOfWater: {
//         name: {
//             japanese: "Spirit of Water",
//             english: "Spirit of Water"
//         }
//     },
//     SpiritOfWind: {
//         name: {
//             japanese: "Spirit of Wind",
//             english: "Spirit of Wind"
//         }
//     },
//     SpiritOfWood: {
//         name: {
//             japanese: "Spirit of Wood",
//             english: "Spirit of Wood"
//         }
//     },
// }

const DigiScores = {
    CulumonSpade: {
        requirements: {
            components: [DataNames.Patamon, DataNames.Otamamon, DataNames.Wormmon, DataNames.Piccolomon],
            level: 33,
            allied: [DataNames.Xuanwumon],
        },
        fusion: DataNames.Culumon,
    },
    CulumonHeart: {
        requirements: {
            components: [DataNames.Terriermon, DataNames.Lopmon, DataNames.Lunamon, DataNames.Piccolomon],
            level: 33,
            allied: [DataNames.Qinglongmon],
        },
        fusion: DataNames.Culumon,
    },
    IceDevimon: {
        requirements: {
            components: [DataNames.Kuramon, DataNames.Patamon],
            level: 14,
        },
        fusion: DataNames.IceDevimon,
    },
    Aquilamon: {
        requirements: {
            components: [DataNames.Hawkmon, DataNames.Dorumon, DataNames.Piyomon],
            level: 11,
        },
        fusion: DataNames.Aquilamon,
    },
    Agunimon: {
        requirements: {
            components: [DataNames.Agumon, DataNames.Coronamon],
            level: 14,
        },
        fusion: DataNames.Agunimon,
    },
    Ankylomon: {
        requirements: {
            components: [DataNames.Armadimon, DataNames.PawnChessmonW, DataNames.Palmon],
            level: 10,
        },
        fusion: DataNames.Ankylomon,
    },
    Airdramon: {
        requirements: {
            components: [DataNames.Veemon, DataNames.Patamon],
            level: 13,
        },
        fusion: DataNames.Airdramon,
    },
    ExVeemon: {
        requirements: {
            components: [DataNames.Veemon, DataNames.Monodramon],
            level: 10,
        },
        fusion: DataNames.ExVeemon,
    },
    Angemon: {
        requirements: {
            components: [DataNames.Patamon, DataNames.Piyomon],
            level: 13,
        },
        fusion: DataNames.Angemon,
    },
    KabuterimonSpade: {
        requirements: {
            components: [DataNames.Tentomon, DataNames.Gabumon],
            level: 11,
        },
        fusion: DataNames.Kabuterimon,
    },
    KabuterimonHeart: {
        requirements: {
            components: [DataNames.Tentomon, DataNames.Hyokomon],
            level: 11,
        },
        fusion: DataNames.Kabuterimon,
    },
    Gaogamon: {
        requirements: {
            components: [DataNames.Gaomon, DataNames.Gabumon],
            level: 10,
        },
        fusion: DataNames.Gaogamon,
    },
    Gargomon: {
        requirements: {
            components: [DataNames.Terriermon, DataNames.Lopmon],
            level: 11,
        },
        fusion: DataNames.Gargomon,
    },
    Garurumon: {
        requirements: {
            components: [DataNames.Gabumon, DataNames.Gomamon],
            level: 10,
        },
        fusion: DataNames.Garurumon,
    },
    Kyubimon: {
        requirements: {
            components: [DataNames.Renamon, DataNames.Guilmon],
            level: 12,
        },
        fusion: DataNames.Kyubimon,
    },
    Chrysalimon: {
        requirements: {
            components: [DataNames.Keramon, DataNames.Hagurumon, DataNames.Mushroomon],
            level: 13,
        },
        fusion: DataNames.Chrysalimon,
    },
    Growlmon: {
        requirements: {
            components: [DataNames.Guilmon, DataNames.Terriermon],
            level: 12,
        },
        fusion: DataNames.Growlmon,
    },
    Greymon: {
        requirements: {
            components: [DataNames.Agumon, DataNames.Gabumon],
            level: 10,
        },
        fusion: DataNames.Greymon,
    },
    Gekomon: {
        requirements: {
            components: [DataNames.Otamamon, DataNames.Betamon],
            level: 12,
        },
        fusion: DataNames.Gekomon,
    },
    Seasarmon: {
        requirements: {
            components: [DataNames.Plotmon, DataNames.Lopmon],
            level: 13,
        },
        fusion: DataNames.Seasarmon,
    },
    Coelamon: {
        requirements: {
            components: [DataNames.Ganimon, DataNames.Syakomon],
            level: 12,
        },
        fusion: DataNames.Coelamon,
    },
    Shellmon: {
        requirements: {
            components: [DataNames.Kamemon, DataNames.Otamamon],
            level: 12,
        },
        fusion: DataNames.Shellmon
    },
    Stingmon: {
        requirements: {
            components: [DataNames.Wormmon, DataNames.Tentomon],
            level: 13,
        },
        fusion: DataNames.Stingmon,
    },
    Tankmon: {
        requirements: {
            components: [DataNames.ToyAgumon, DataNames.Kokuwamon],
            level: 14,
        },
        fusion: DataNames.Tankmon,
    },
    Tyrannomon: {
        requirements: {
            components: [DataNames.Guilmon, DataNames.Hawkmon],
            level: 11,
        },
        fusion: DataNames.Tyrannomon,
    },
    Tailmon: {
        requirements: {
            components: [DataNames.Plotmon, DataNames.Kudamon],
            level: 13,
        },
        fusion: DataNames.Tailmon,
    },
    Devimon: {
        requirements: {
            components: [DataNames.PicoDevimon, DataNames.Impmon],
            level: 13,
        },
        fusion: DataNames.Devimon,
    },
    Dorugamon: {
        requirements: {
            components: [DataNames.Dorumon, DataNames.Syakomon],
            level: 13,
        },
        fusion: DataNames.Dorugamon,
    },
    Hanumon: {
        requirements: {
            components: [DataNames.Kudamon, DataNames.Renamon],
            level: 14,
        },
        fusion: DataNames.Hanumon,
    },
    Bakemon: {
        requirements: {
            components: [DataNames.Dracmon, DataNames.Kuramon, DataNames.PicoDevimon],
            level: 10,
        },
        fusion: DataNames.Bakemon,
    },
    Firamon: {
        requirements: {
            components: [DataNames.Coronamon, DataNames.Falcomon],
            level: 13,
        },
        fusion: DataNames.Firamon,
    },
    Buraimon: {
        requirements: {
            components: [DataNames.Hyokomon, DataNames.Hawkmon],
            level: 12,
        },
        fusion: DataNames.Buraimon,
    },
    Minotarumon: {
        requirements: {
            components: [DataNames.Goburimon, DataNames.Armadimon],
            level: 14,
        },
        fusion: DataNames.Minotarumon,
    },
    Musyamon: {
        requirements: {
            components: [DataNames.Dracmon, DataNames.Goburimon],
            level: 13,
        },
        fusion: DataNames.Musyamon,
    },
    Raptordramon: {
        requirements: {
            components: [DataNames.Dorumon, DataNames.Guilmon],
            level: 14,
        },
        fusion: DataNames.Raptordramon,
    },
    Rukamon: {
        requirements: {
            components: [DataNames.Penmon, DataNames.Gomamon],
            level: 11,
        },
        fusion: DataNames.Rukamon,
    },
    LeomonSpade: {
        requirements: {
            components: [DataNames.Gaomon, DataNames.Coronamon, DataNames.Goburimon],
            level: 14,
        },
        fusion: DataNames.Leomon,
    },
    LeomonHeart: {
        requirements: {
            components: [DataNames.Terriermon, DataNames.Plotmon, DataNames.Goburimon],
            level: 13,
        },
        fusion: DataNames.Leomon,
    },
    Lekismon: {
        requirements: {
            components: [DataNames.Lunamon, DataNames.Lopmon, DataNames.YukiAgumon],
            level: 13,
        },
        fusion: DataNames.Lekismon,
    },
    ArgomonUltimate: {
        requirements: {
            components: [DataNames.Wizardmon, DataNames.Wendimon, DataNames.Palmon],
            level: 18,
        },
        fusion: DataNames.ArgomonUltimate,
    },
    Insekimon: {
        requirements: {
            components: [DataNames.Gotsumon, DataNames.Starmon, DataNames.Tsuchidarumon],
            level: 20,
        },
        fusion: DataNames.Insekimon,
    },
    Infermon: {
        requirements: {
            components: [DataNames.Chrysalimon, DataNames.Bakemon],
            level: 21,
            obtained: [DataNames.Kuramon],
        },
        fusion: DataNames.Infermon,
    },
    Vajramon: {
        requirements: {
            components: [DataNames.Minotarumon, DataNames.Centalmon],
            level: 22,
        },
        fusion: DataNames.Vajramon,
    },
    Vamdemon: {
        requirements: {
            components: [DataNames.Devimon, DataNames.Devidramon, DataNames.Bakemon],
            level: 24,
            obtained: [DataNames.PicoDevimon],
        },
        fusion: DataNames.Vamdemon,
    },
    Angewomon: {
        requirements: {
            components: [DataNames.Tailmon, DataNames.Wizardmon, DataNames.Starmon],
            level: 26,
        },
        fusion: DataNames.Angewomon,
    },
    Kabukimon: {
        requirements: {
            components: [DataNames.Tailmon, DataNames.Floramon, DataNames.Igamon],
            level: 17,
        },
        fusion: DataNames.Kabukimon,
    },
    Karatenmon: {
        requirements: {
            components: [DataNames.Peckmon, DataNames.Musyamon, DataNames.Gawappamon],
            level: 23,
        },
        fusion: DataNames.Karatenmon,
    },
    Kimeramon: {
        requirements: {
            components: [DataNames.Devimon, DataNames.Kabuterimon, DataNames.Kuwagamon, DataNames.Greymon, DataNames.Garurumon],
            level: 26,
        },
        fusion: DataNames.Kimeramon,
    },
    Kyukimon: {
        requirements: {
            components: [DataNames.Reppamon, DataNames.Snimon, DataNames.Kyubimon],
            level: 20,
        },
        fusion: DataNames.Kyukimon,
    },
    Gigadramon: {
        requirements: {
            components: [DataNames.Airdramon, DataNames.Tankmon, DataNames.Mechanorimon],
            level: 24,
        },
        fusion: DataNames.Gigadramon,
    },
    Crescemon: {
        requirements: {
            components: [DataNames.Lekismon, DataNames.Reppamon, DataNames.Yukidarumon],
            level: 20,
            obtained: [DataNames.Lunamon],
        },
        fusion: DataNames.Crescemon,
    },
    GrapLeomon: {
        requirements: {
            components: [DataNames.Leomon, DataNames.Gargomon, DataNames.Guardromon],
            level: 16,
        },
        fusion: DataNames.GrapLeomon,
    },
    Grademon: {
        requirements: {
            components: [DataNames.Raptordramon, DataNames.Dorugamon, DataNames.Buraimon],
            level: 24,
            obtained: [DataNames.Dorumon],
        },
        fusion: DataNames.Grademon,
    },
    Cerberumon: {
        requirements: {
            components: [DataNames.Seasarmon, DataNames.Tyrannomon, DataNames.DarkTyrannomon],
            level: 19,
        },
        fusion: DataNames.Cerberumon,
    },
    Shakkoumon: {
        requirements: {
            components: [DataNames.Ankylomon, DataNames.Angemon],
            level: 22,
            obtained: [DataNames.Armadimon],
        },
        fusion: DataNames.Shakkoumon,
    },
    Silphymon: {
        requirements: {
            components: [DataNames.Aquilamon, DataNames.Tailmon],
            level: 20,
            obtained: [DataNames.Hawkmon],
        },
        fusion: DataNames.Silphymon,
    },
    Sinduramon: {
        requirements: {
            components: [DataNames.Thunderballmon, DataNames.Kokatorimon],
            level: 23,
        },
        fusion: DataNames.Sinduramon,
    },
    Jureimon: {
        requirements: {
            components: [DataNames.Woodmon, DataNames.Vegiemon, DataNames.Togemon],
            level: 25,
        },
        fusion: DataNames.Jureimon,
    },
    SkullBaluchimon: {
        requirements: {
            components: [DataNames.IceDevimon, DataNames.DarkTyrannomon, DataNames.Drimogemon],
            level: 25,
        },
        fusion: DataNames.SkullBaluchimon,
    },
    Taomon: {
        requirements: {
            components: [DataNames.Kyubimon, DataNames.Hanumon],
            level: 23,
            obtained: [DataNames.Renamon],
        },
        fusion: DataNames.Taomon,
    },
    Tyilinmon: {
        requirements: {
            components: [DataNames.Reppamon, DataNames.Unimon, DataNames.Stingmon],
            level: 24,
            obtained: [DataNames.Kudamon],
        },
        fusion: DataNames.Tyilinmon,
    },
    Dinobeemon: {
        requirements: {
            components: [DataNames.Stingmon, DataNames.ExVeemon, DataNames.Wormmon],
            level: 18,
        },
        fusion: DataNames.Dinobeemon,
    },
    Dorugremon: {
        requirements: {
            components: [DataNames.Dorugamon, DataNames.Tyrannomon],
            level: 23,
            obtained: [DataNames.Dorumon],
        },
        fusion: DataNames.Dorugremon,
    },
    Bastemon: {
        requirements: {
            components: [DataNames.Tailmon, DataNames.Lekismon, DataNames.Wendimon],
            level: 16,
        },
        fusion: DataNames.Bastemon,
    },
    Paildramon: {
        requirements: {
            components: [DataNames.ExVeemon, DataNames.Stingmon, DataNames.Veemon],
            level: 18,
        },
        fusion: DataNames.Paildramon,
    },
    Pandamon: {
        requirements: {
            components: [DataNames.Yukidarumon, DataNames.Tsuchidarumon],
            level: 16,
        },
        fusion: DataNames.Pandamon,
    },
    Phantomon: {
        requirements: {
            components: [DataNames.Bakemon, DataNames.Kuwagamon],
            level: 22,
        },
        fusion: DataNames.Phantomon,
    },
    Flaremon: {
        requirements: {
            components: [DataNames.Firamon, DataNames.Leomon, DataNames.Strikedramon],
            level: 21,
            obtained: [DataNames.Coronamon],
        },
        fusion: DataNames.Flaremon,
    },
    Butenmon: {
        requirements: {
            components: [DataNames.Buraimon, DataNames.Birdramon, DataNames.Kokatorimon],
            level: 23,
            obtained: [DataNames.Hyokomon],
        },
        fusion: DataNames.Butenmon,
    },
    Blossomon: {
        requirements: {
            components: [DataNames.Sunflowmon, DataNames.Octomon, DataNames.Togemon, DataNames.Dokugumon],
            level: 17,
        },
        fusion: DataNames.Blossomon,
    },
    Whamon: {
        requirements: {
            components: [DataNames.Rukamon, DataNames.Ikkakumon],
            level: 25,
        },
        fusion: DataNames.Whamon,
    },
    Mermaimon: {
        requirements: {
            components: [DataNames.Hookmon, DataNames.Coelamon, DataNames.Ebidramon],
            level: 19,
        },
        fusion: DataNames.Mermaimon,
    },
    Magnamon: {
        requirements: {
            components: [DataNames.Veemon, DataNames.Angemon, DataNames.Ankylomon],
            level: 24,
            obtained: [DataNames.Wormmon],
        },
        fusion: DataNames.Magnamon,
    },
    MachGaogamon: {
        requirements: {
            components: [DataNames.Gaogamon, DataNames.Guardromon, DataNames.Gekomon],
            level: 21,
            obtained: [DataNames.Gaomon],
        },
        fusion: DataNames.MachGaogamon,
    },
    MarineDevimon: {
        requirements: {
            components: [DataNames.IceDevimon, DataNames.Gesomon, DataNames.Numemon],
            level: 25,
        },
        fusion: DataNames.MarineDevimon,
    },
    MegaSeadramon: {
        requirements: {
            components: [DataNames.Seadramon, DataNames.Shellmon, DataNames.Gesomon],
            level: 23,
        },
        fusion: DataNames.MegaSeadramon,
    },
    Megadramon: {
        requirements: {
            components: [DataNames.Airdramon, DataNames.Guardromon],
            level: 19,
        },
        fusion: DataNames.Megadramon,
    },
    MegaloGrowlmon: {
        requirements: {
            components: [DataNames.Growlmon, DataNames.Raptordramon],
            level: 22,
            obtained: [DataNames.Guilmon],
        },
        fusion: DataNames.MegaloGrowlmon,
    },
    Monzaemon: {
        requirements: {
            components: [DataNames.Numemon, DataNames.Hanumon, DataNames.Sukamon],
            level: 26,
        },
        fusion: DataNames.Monzaemon,
    },
    Yatagaramon: {
        requirements: {
            components: [DataNames.Peckmon, DataNames.Diatrymon],
            level: 21,
            obtained: [DataNames.Falcomon],
        },
        fusion: DataNames.Yatagaramon,
    },
    RizeGreymon: {
        requirements: {
            components: [DataNames.GeoGreymon, DataNames.Revolmon, DataNames.Seasarmon],
            level: 21,
        },
        fusion: DataNames.RizeGreymon,
    },
    Rapidmon: {
        requirements: {
            components: [DataNames.Gargomon, DataNames.Seasarmon],
            level: 19,
            obtained: [DataNames.Terriermon],
        },
        fusion: DataNames.Rapidmon,
    },
    Lilymon: {
        requirements: {
            components: [DataNames.Togemon, DataNames.Yanmamon, DataNames.Kabuterimon],
            level: 18,
            obtained: [DataNames.Palmon],
        },
        fusion: DataNames.Lilymon,
    },
    RookChessmon: {
        requirements: {
            components: [DataNames.KnightChessmonW, DataNames.Golemon, DataNames.Mechanorimon],
            level: 16,
        },
        fusion: DataNames.RookChessmon,
    },
    LucemonFM: {
        requirements: {
            components: [DataNames.Lucemon, DataNames.Evilmon, DataNames.Minotarumon, DataNames.Angemon],
            level: 26,
        },
        fusion: DataNames.LucemonFM,
    },
    LadyDevimon: {
        requirements: {
            components: [DataNames.Devimon, DataNames.Devidramon, DataNames.Kokatorimon],
            level: 22,
        },
        fusion: DataNames.LadyDevimon,
    },
    WereGarurumon: {
        requirements: {
            components: [DataNames.Garurumon, DataNames.Leomon],
            level: 17,
            obtained: [DataNames.Gabumon],
        },
        fusion: DataNames.WereGarurumonBlue,
    },
    Wisemon: {
        requirements: {
            components: [DataNames.Clockmon, DataNames.Wizardmon],
            level: 24,
        },
        fusion: DataNames.Wisemon,
    },
    AeroVeedramon: {
        requirements: {
            components: [DataNames.Veedramon, DataNames.Aquilamon, DataNames.ExVeemon],
            level: 22,
        },
        fusion: DataNames.AeroVeedramon,
    },
    HolyAngemon: {
        requirements: {
            components: [DataNames.Angemon, DataNames.ExVeemon],
            level: 25,
            obtained: [DataNames.Patamon],
        },
        fusion: DataNames.HolyAngemon,
    },
    MetalGreymon: {
        requirements: {
            components: [DataNames.Greymon, DataNames.Tyrannomon, DataNames.Tankmon],
            level: 17,
            obtained: [DataNames.Agumon],
        },
        fusion: DataNames.MetalGreymon,
    },
    Anubimon: {
        requirements: {
            components: [DataNames.Cerberumon, DataNames.Garudamon, DataNames.Seasarmon],
            level: 38,
        },
        fusion: DataNames.Anubimon,
    },
    Apollomon: {
        requirements: {
            components: [DataNames.Flaremon, DataNames.Fladramon, DataNames.Agunimon],
            level: 37,
            obtained: [DataNames.Coronamon],
        },
        fusion: DataNames.Apollomon,
    },
    Alphamon: {
        requirements: {
            components: [DataNames.Grademon, DataNames.Dorumon, DataNames.Clockmon],
            level: 40,
            obtained: [DataNames.Dorugoramon],
        },
        fusion: DataNames.Alphamon,
    },
    WarGreymon: {
        requirements: {
            components: [DataNames.MetalGreymon, DataNames.Greymon, DataNames.Agumon, DataNames.Koromon],
            level: 31,
        },
        fusion: DataNames.WarGreymon,
    },
    Vikemon: {
        requirements: {
            components: [DataNames.Zudomon, DataNames.Hangyomon, DataNames.Shakkoumon],
            level: 36,
        },
        fusion: DataNames.Vikemon,
    },
    Valkyrimon: {
        requirements: {
            components: [DataNames.Silphymon, DataNames.Garudamon, DataNames.Crescemon],
            level: 33,
        },
        fusion: DataNames.Valkyrimon,
    },
    Examon: {
        requirements: {
            components: [DataNames.MasterTyrannomon, DataNames.RizeGreymon, DataNames.Vermillimon, DataNames.Dorugremon, DataNames.AeroVeedramon],
            level: 40,
        },
        fusion: DataNames.Examon,
    },
    Ophanimon: {
        requirements: {
            components: [DataNames.Angewomon, DataNames.Piccolomon, DataNames.Unimon],
            level: 39,
            obtained: [DataNames.Plotmon],
        },
        fusion: DataNames.Ophanimon,
    },
    Gaioumon: {
        requirements: {
            components: [DataNames.WaruSeadramon, DataNames.Greymon, DataNames.Cerberumon, DataNames.Musyamon],
            level: 37,
        },
        fusion: DataNames.Gaioumon,
    },
    Cannondramon: {
        requirements: {
            components: [DataNames.Brachimon, DataNames.Fladramon, DataNames.MetalMamemon, DataNames.Vermillimon],
            level: 31,
        },
        fusion: DataNames.Cannondramon,
    },
    GigaSeadramon: {
        requirements: {
            components: [DataNames.MegaSeadramon, DataNames.WaruSeadramon, DataNames.TonosamaGekomon, DataNames.Gigadramon],
            level: 38,
        },
        fusion: DataNames.GigaSeadramon,
    },
    Craniummon: {
        requirements: {
            components: [DataNames.Knightmon, DataNames.Insekimon, DataNames.Kyukimon],
            level: 34,
        },
        fusion: DataNames.Craniummon,
    },
    Crossmon: {
        requirements: {
            components: [DataNames.Parrotmon, DataNames.Magnamon, DataNames.Yatagaramon, DataNames.Sinduramon],
            level: 36,
        },
        fusion: DataNames.Crossmon,
    },
    ChronomonHM: {
        requirements: {
            components: [DataNames.Butenmon, DataNames.Sinduramon, DataNames.Taomon],
            level: 40,
            obtained: [DataNames.Hyokomon],
        },
        fusion: DataNames.ChronomonHM,
    },
    GranDracmon: {
        requirements: {
            components: [DataNames.Matadormon, DataNames.Sangloupmon, DataNames.Dracmon, DataNames.LucemonFM, DataNames.Bastemon],
            level: 40,
        },
        fusion: DataNames.GranDracmon,
    },
    CherubimonZen: {
        requirements: {
            components: [DataNames.Antylamon, DataNames.Piccolomon, DataNames.Rapidmon, DataNames.Monzaemon],
            level: 35,
            obtained: [DataNames.CherubimonAku],
        },
        fusion: DataNames.CherubimonZen,
    },
    Goddramon: {
        requirements: {
            components: [DataNames.Megadramon, DataNames.HolyAngemon, DataNames.MasterTyrannomon, DataNames.Triceramon],
            level: 35,
            allied: [DataNames.Airdramon],
        },
        fusion: DataNames.Goddramon,
    },
    SaberLeomon: {
        requirements: {
            components: [DataNames.GrapLeomon, DataNames.Zudomon, DataNames.Leomon],
            level: 31,
        },
        fusion: DataNames.SaberLeomon,
    },
    Sakuyamon: {
        requirements: {
            components: [DataNames.Taomon, DataNames.Renamon, DataNames.Kabukimon],
            level: 37,
        },
        fusion: DataNames.Sakuyamon,
    },
    Zanbamon: {
        requirements: {
            components: [DataNames.Musyamon, DataNames.Vajramon, DataNames.SkullBaluchimon],
            level: 36,
        },
        fusion: DataNames.Zanbamon,
    },
    Justimon: {
        requirements: {
            components: [DataNames.Cyberdramon, DataNames.Shawujinmon, DataNames.Pandamon],
            level: 34,
            obtained: [DataNames.Monodramon],
        },
        fusion: DataNames.Justimon,
    },
    JumboGamemon: {
        requirements: {
            components: [DataNames.Shawujinmon, DataNames.RookChessmon, DataNames.BishopChessmon, DataNames.Whamon],
            level: 34,
            obtained: [DataNames.Kamemon],
        },
        fusion: DataNames.JumboGamemon,
    },
    SkullMammon: {
        requirements: {
            components: [DataNames.Mammon, DataNames.SkullBaluchimon, DataNames.SkullGreymon],
            level: 31,
        },
        fusion: DataNames.SkullMammon,
    },
    Sleipmon: {
        requirements: {
            components: [DataNames.Tyilinmon, DataNames.Butenmon, DataNames.Crescemon],
            level: 34,
            obtained: [DataNames.Kudamon],
        },
        fusion: DataNames.Sleipmon,
    },
    Seraphimon: {
        requirements: {
            components: [DataNames.HolyAngemon, DataNames.Shakkoumon, DataNames.Parrotmon, DataNames.Angewomon],
            level: 39,
            obtained: [DataNames.Patamon],
        },
        fusion: DataNames.Seraphimon,
    },
    SaintGargomon: {
        requirements: {
            components: [DataNames.Rapidmon, DataNames.Terriermon, DataNames.Brachimon],
            level: 33,
        },
        fusion: DataNames.SaintGargomon,
    },
    Darkdramon: {
        requirements: {
            components: [DataNames.Gigadramon, DataNames.Megadramon, DataNames.Triceramon, DataNames.Tankmon],
            level: 34,
        },
        fusion: DataNames.Darkdramon,
    },
    DaiPenmon: {
        requirements: {
            components: [DataNames.Penmon, DataNames.Yukidarumon, DataNames.Shakkoumon],
            level: 36,
        },
        fusion: DataNames.DaiPenmon,
    },
    Dianamon: {
        requirements: {
            components: [DataNames.Crescemon, DataNames.Taomon, DataNames.Bastemon],
            level: 37,
            obtained: [DataNames.Lunamon],
        },
        fusion: DataNames.Dianamon,
    },
    Diaboromon: {
        requirements: {
            components: [DataNames.Infermon, DataNames.MarineDevimon, DataNames.Gigadramon],
            level: 31,
            allied: [DataNames.Kuramon],
        },
        fusion: DataNames.Diaboromon,
    },
    Demon: {
        requirements: {
            components: [DataNames.Vamdemon, DataNames.LadyDevimon, DataNames.BlueMeramon, DataNames.Dagomon],
            level: 40,
        },
        fusion: DataNames.Demon,
    },
    Devitamamon: {
        requirements: {
            components: [DataNames.Digitamamon, DataNames.LadyDevimon, DataNames.Phantomon, DataNames.Evilmon],
            level: 31,
        },
        fusion: DataNames.Devitamamon,
    },
    DukemonSpade: {
        requirements: {
            components: [DataNames.Triceramon, DataNames.Flaremon, DataNames.Garudamon, DataNames.Knightmon],
            level: 33,
        },
        fusion: DataNames.Dukemon,
    },
    DukemonHeart: {
        requirements: {
            components: [DataNames.MegaloGrowlmon, DataNames.Guilmon, DataNames.Knightmon],
            level: 33,
        },
        fusion: DataNames.Dukemon,
    },
    Duftmon: {
        requirements: {
            components: [DataNames.GrapLeomon, DataNames.Grademon, DataNames.ArgomonUltimate],
            level: 34,
        },
        fusion: DataNames.Duftmon,
    },
    Dorugoramon: {
        requirements: {
            components: [DataNames.Dorugremon, DataNames.MetalGreymon],
            level: 32,
            obtained: [DataNames.Dorumon],
        },
        fusion: DataNames.Dorugoramon,
    },
    Neptunemon: {
        requirements: {
            components: [DataNames.Hangyomon, DataNames.Whamon, DataNames.Tylomon, DataNames.Dagomon],
            level: 38,
            obtained: [DataNames.Coelamon],
        },
        fusion: DataNames.Neptunemon,
    },
    HiAndromon: {
        requirements: {
            components: [DataNames.Andromon, DataNames.Giromon, DataNames.BishopChessmon],
            level: 33,
            obtained: [DataNames.Guardromon],
        },
        fusion: DataNames.HiAndromon,
    },
    PiemonSpade: {
        requirements: {
            components: [DataNames.Phantomon, DataNames.BlueMeramon, DataNames.MarineDevimon, DataNames.Matadormon],
            level: 34,
        },
        fusion: DataNames.Piemon,
    },
    PiemonHeart: {
        requirements: {
            components: [DataNames.Vamdemon, DataNames.Wisemon, DataNames.Anomalocarimon, DataNames.ArgomonUltimate],
            level: 34,
        },
        fusion: DataNames.Piemon,
    },
    Pinocchimon: {
        requirements: {
            components: [DataNames.Jureimon, DataNames.Vademon, DataNames.Vegiemon, DataNames.Drimogemon],
            level: 37,
        },
        fusion: DataNames.Pinocchimon,
    },
    Pharaohmon: {
        requirements: {
            components: [DataNames.Mummymon, DataNames.Nefertimon],
            level: 33,
        },
        fusion: DataNames.Pharaohmon,
    },
    PrinceMamemon: {
        requirements: {
            components: [DataNames.Mamemon, DataNames.MetalMamemon, DataNames.Mametyramon, DataNames.SuperStarmon],
            level: 32,
        },
        fusion: DataNames.PrinceMamemon,
    },
    Beelzebumon: {
        requirements: {
            components: [DataNames.Impmon, DataNames.Vamdemon, DataNames.Mummymon],
            level: 32,
        },
        fusion: DataNames.Beelzebumon,
    },
    Hououmon: {
        requirements: {
            components: [DataNames.Garudamon, DataNames.Parrotmon, DataNames.Sinduramon, DataNames.Butenmon],
            level: 34,
        },
        fusion: DataNames.Hououmon,
    },
    Holydramon: {
        requirements: {
            components: [DataNames.Angewomon, DataNames.AtlurKabuterimonR, DataNames.Kyukimon, DataNames.Airdramon],
            level: 35,
        },
        fusion: DataNames.Holydramon,
    },
    Boltmon: {
        requirements: {
            components: [DataNames.Ogremon, DataNames.Andromon, DataNames.Sinduramon],
            level: 31,
        },
        fusion: DataNames.Boltmon,
    },
    Minervamon: {
        requirements: {
            components: [DataNames.Lilymon, DataNames.Antylamon, DataNames.Monzaemon, DataNames.Pandamon],
            level: 32,
        },
        fusion: DataNames.Minervamon,
    },
    Millenniumon: {
        requirements: {
            components: [DataNames.Kimeramon, DataNames.Mugendramon],
            level: 39,
            obtained: [DataNames.Monodramon],
        },
        fusion: DataNames.Millenniumon,
    },
    MugendramonSpade: {
        requirements: {
            components: [DataNames.MetalTyrannomon, DataNames.Andromon, DataNames.Megadramon, DataNames.EXTyrannomon],
            level: 34,
        },
        fusion: DataNames.Mugendramon,
    },
    MugendramonHeart: {
        requirements: {
            components: [DataNames.MetalMamemon, DataNames.MetalGreymon, DataNames.SkullGreymon, DataNames.EXTyrannomon],
            level: 34,
        },
        fusion: DataNames.Mugendramon,
    },
    Megidramon: {
        requirements: {
            components: [DataNames.MegaloGrowlmon, DataNames.Mametyramon, DataNames.SkullGreymon, DataNames.Volcamon],
            level: 31,
        },
        fusion: DataNames.Megidramon,
    },
    MetalEtemon: {
        requirements: {
            components: [DataNames.Etemon, DataNames.Nanomon, DataNames.TonosamaGekomon],
            level: 32,
        },
        fusion: DataNames.MetalEtemon,
    },
    MetalGarurumon: {
        requirements: {
            components: [DataNames.WereGarurumonBlue, DataNames.Garurumon, DataNames.Gabumon],
            level: 36,
        },
        fusion: DataNames.MetalGarurumon,
    },
    Mercurymon: {
        requirements: {
            components: [DataNames.WereGarurumonBlue, DataNames.Prairiemon, DataNames.Ogremon],
            level: 37,
        },
        fusion: DataNames.Mercurymon,
    },
    Lilithmon: {
        requirements: {
            components: [DataNames.LadyDevimon, DataNames.Arukenimon, DataNames.Scorpiomon],
            level: 33,
        },
        fusion: DataNames.Lilithmon,
    },
    Ravemon: {
        requirements: {
            components: [DataNames.Yatagaramon, DataNames.Karatenmon, DataNames.Cyberdramon, DataNames.Taomon],
            level: 33,
            obtained: [DataNames.Falcomon],
        },
        fusion: DataNames.Ravemon,
    },
    Rosemon: {
        requirements: {
            components: [DataNames.Lilymon, DataNames.Lilamon, DataNames.Blossomon],
            level: 32,
        },
        fusion: DataNames.Rosemon,
    },
    Lotusmon: {
        requirements: {
            components: [DataNames.Blossomon, DataNames.Kabukimon, DataNames.Shurimon],
            level: 36,
        },
        fusion: DataNames.Lotusmon,
    },
    AncientIrismon: {
        requirements: {
            components: [DataNames.Silphymon, DataNames.Garudamon, DataNames.Lilamon, DataNames.Lilymon],
            level: 35,
        },
        fusion: DataNames.AncientIrismon,
    },
    AncientGarurumon: {
        requirements: {
            components: [DataNames.WereGarurumonBlue, DataNames.Mammon, DataNames.Vajramon, DataNames.Tyilinmon],
            level: 35,
        },
        fusion: DataNames.AncientGarurumon,
    },
    AncientGreymon: {
        requirements: {
            components: [DataNames.MetalGreymon, DataNames.MasterTyrannomon, DataNames.Paildramon, DataNames.Agunimon],
            level: 35,
        },
        fusion: DataNames.AncientGreymon,
    },
    AncientSphinxmon: {
        requirements: {
            components: [DataNames.Nefertimon, DataNames.SkullBaluchimon, DataNames.Scorpiomon, DataNames.Digitamamon],
            level: 35,
        },
        fusion: DataNames.AncientSphinxmon,
    },
    AncientTroiamon: {
        requirements: {
            components: [DataNames.Jureimon, DataNames.MetalTyrannomon, DataNames.RookChessmon, DataNames.KnightChessmonW],
            level: 35,
        },
        fusion: DataNames.AncientTroiamon,
    },
    AncientBeatmon: {
        requirements: {
            components: [DataNames.AtlurKabuterimonR, DataNames.Ookuwamon, DataNames.Scorpiomon, DataNames.Flymon],
            level: 35,
        },
        fusion: DataNames.AncientBeatmon,
    },
    AncientVolcamonSpade: {
        requirements: {
            components: [DataNames.Etemon, DataNames.Kenkimon, DataNames.BlueMeramon, DataNames.Golemon],
            level: 35,
        },
        fusion: DataNames.AncientVolcamon,
    },
    AncientVolcamonHeart: {
        requirements: {
            components: [DataNames.Volcamon, DataNames.Insekimon, DataNames.Vermillimon, DataNames.BomberNanimon],
            level: 35,
        },
        fusion: DataNames.AncientVolcamon,
    },
    AncientMermaimon: {
        requirements: {
            components: [DataNames.Mermaimon, DataNames.Anomalocarimon, DataNames.Whamon, DataNames.Coelamon],
            level: 35,
        },
        fusion: DataNames.AncientMermaimon,
    },
    AncientMegatheriumon: {
        requirements: {
            components: [DataNames.Zudomon, DataNames.Crescemon, DataNames.Dagomon, DataNames.Brachimon],
            level: 35,
        },
        fusion: DataNames.AncientMegatheriumon,
    },
    AncientWisemon: {
        requirements: {
            components: [DataNames.Wisemon, DataNames.Shurimon, DataNames.SuperStarmon, DataNames.Garbemon],
            level: 35,
        },
        fusion: DataNames.AncientWisemon,
    },
    BanchoLeomon: {
        requirements: {
            components: [DataNames.GrapLeomon, DataNames.Pandamon],
            level: 34,
            obtained: [DataNames.Leomon],
        },
        fusion: DataNames.BanchoLeomon,
    },
    GranKuwagamon: {
        requirements: {
            components: [DataNames.Ookuwamon, DataNames.Dinobeemon],
            level: 36,
        },
        fusion: DataNames.GranKuwagamon,
    },
    HeraclesKabuterimon: {
        requirements: {
            components: [DataNames.AtlurKabuterimonR, DataNames.Ookuwamon, DataNames.Kongoumon],
            level: 37,
        },
        fusion: DataNames.HeraclesKabuterimon,
    },
    ImperialdramonDM: {
        requirements: {
            components: [DataNames.Paildramon, DataNames.Dinobeemon, DataNames.Fladramon],
            level: 36,
        },
        fusion: DataNames.ImperialdramonDM,
    },
    MarineAngemon: {
        requirements: {
            components: [DataNames.Piccolomon, DataNames.Whamon, DataNames.Mermaimon],
            level: 32,
        },
        fusion: DataNames.MarineAngemon,
    },
    MetalSeadramon: {
        requirements: {
            components: [DataNames.MegaSeadramon, DataNames.Tylomon, DataNames.Megadramon, DataNames.MetalTyrannomon],
            level: 33,
            obtained: [DataNames.Betamon],
        },
        fusion: DataNames.MetalSeadramon,
    },
    MirageGaogamon: {
        requirements: {
            components: [DataNames.MachGaogamon, DataNames.Knightmon, DataNames.Centalmon],
            level: 32,
            obtained: [DataNames.Gaomon],
        },
        fusion: DataNames.MirageGaogamon,
    },
    ShineGreymon: {
        requirements: {
            components: [DataNames.RizeGreymon, DataNames.MasterTyrannomon, DataNames.Agunimon],
            level: 32,
        },
        fusion: DataNames.ShineGreymon,
    },
    TigerVespamon: {
        requirements: {
            components: [DataNames.Dinobeemon, DataNames.Karatenmon, DataNames.Flymon],
            level: 32,
        },
        fusion: DataNames.TigerVespamon,
    },
    UlforceVeedramon: {
        requirements: {
            components: [DataNames.AeroVeedramon, DataNames.Grademon, DataNames.Garudamon],
            level: 39,
        },
        fusion: DataNames.UlforceVeedramon,
    },
    VenomVamdemon: {
        requirements: {
            components: [DataNames.Vamdemon, DataNames.Dagomon, DataNames.EXTyrannomon, DataNames.AtlurKabuterimonR],
            level: 32,
            allied: [DataNames.PicoDevimon],
        },
        fusion: DataNames.VenomVamdemon,
    },
    Armagemon: {
        requirements: {
            components: [DataNames.Kuramon, DataNames.Keramon, DataNames.Chrysalimon, DataNames.Infermon, DataNames.Diaboromon],
            level: 51,
        },
        fusion: DataNames.Armagemon,
    },
    Apocalymon: {
        requirements: {
            components: [DataNames.Piemon, DataNames.Mugendramon, DataNames.Pinocchimon, DataNames.MetalSeadramon],
            level: 54,
        },
        fusion: DataNames.Apocalymon,
    },
    Aegisdramon: {
        requirements: {
            components: [DataNames.Plesiomon, DataNames.MegaSeadramon, DataNames.Crossmon],
            level: 51,
            obtained: [DataNames.MetalSeadramon],
        },
        fusion: DataNames.Aegisdramon,
    },
    Valdurmon: {
        requirements: {
            components: [DataNames.Valkyrimon, DataNames.AncientIrismon, DataNames.Tyilinmon, DataNames.Lucemon],
            level: 51,
        },
        fusion: DataNames.Valdurmon,
    },
    Omegamon: {
        requirements: {
            components: [DataNames.WarGreymon, DataNames.MetalGarurumon],
            level: 50,
        },
        fusion: DataNames.Omegamon,
    },
    Chaosdramon: {
        requirements: {
            components: [DataNames.Mugendramon, DataNames.Dukemon, DataNames.AncientVolcamon],
            level: 51,
        },
        fusion: DataNames.Chaosdramon,
    },
    Chaosmon: {
        requirements: {
            components: [DataNames.BanchoLeomon, DataNames.Darkdramon],
            level: 50,
        },
        fusion: DataNames.Chaosmon,
    },
    Xuanwumon: {
        requirements: {
            components: [DataNames.JumboGamemon, DataNames.Jureimon, DataNames.DaiPenmon, DataNames.Jijimon],
            level: 55,
        },
        fusion: DataNames.Xuanwumon,
    },
    Zhuqiaomon: {
        requirements: {
            components: [DataNames.Hououmon, DataNames.ChronomonHM, DataNames.ShineGreymon, DataNames.Birdramon],
            level: 55,
        },
        fusion: DataNames.Zhuqiaomon,
    },
    SusanoomonSpade: {
        requirements: {
            components: [DataNames.AncientGreymon, DataNames.AncientGarurumon, DataNames.AncientSphinxmon, DataNames.AncientTroiamon, DataNames.AncientBeatmon],
            level: 54,
            allied: [DataNames.Agunimon],
        },
        fusion: DataNames.Susanoomon,
    },
    SusanoomonHeart: {
        requirements: {
            components: [DataNames.AncientIrismon, DataNames.AncientMegatheriumon, DataNames.AncientMermaimon, DataNames.AncientWisemon, DataNames.AncientVolcamon],
            level: 54,
            allied: [DataNames.Agunimon],
        },
        fusion: DataNames.Susanoomon,
    },
    Qinglongmon: {
        requirements: {
            components: [DataNames.Holydramon, DataNames.Goddramon, DataNames.CherubimonZen, DataNames.Airdramon],
            level: 55,
        },
        fusion: DataNames.Qinglongmon,
    },
    DukemonCM: {
        requirements: {
            components: [DataNames.Dukemon, DataNames.ShineGreymon, DataNames.Ophanimon, DataNames.Vermillimon],
            level: 53,
        },
        fusion: DataNames.DukemonCM,
    },
    Baihumon: {
        requirements: {
            components: [DataNames.SaberLeomon, DataNames.Vikemon, DataNames.AncientWisemon, DataNames.Tailmon],
            level: 55,
        },
        fusion: DataNames.Baihumon,
    },
    RavemonBM: {
        requirements: {
            components: [DataNames.Ravemon, DataNames.Yatagaramon, DataNames.Peckmon, DataNames.Falcomon, DataNames.SlashAngemon],
            level: 52,
        },
        fusion: DataNames.RavemonBM,
    },
    RosemonBM: {
        requirements: {
            components: [DataNames.Rosemon, DataNames.Lilamon, DataNames.Sunflowmon, DataNames.Lalamon, DataNames.Babamon],
            level: 52,
        },
        fusion: DataNames.RosemonBM,
    },
    BelialVamdemon: {
        requirements: {
            components: [DataNames.VenomVamdemon, DataNames.Deathmon, DataNames.Cerberumon, DataNames.Arukenimon, DataNames.Mummymon],
            level: 51,
            obtained: [DataNames.Vamdemon],
        },
        fusion: DataNames.BelialVamdemon,
    },
    ChaosDukemon: {
        requirements: {
            components: [DataNames.Megidramon, DataNames.VenomVamdemon, DataNames.Knightmon],
            level: 50,
        },
        fusion: DataNames.ChaosDukemon,
    },
    ImperialdramonFM: {
        requirements: {
            components: [DataNames.ImperialdramonDM, DataNames.Magnamon],
            level: 50,
        },
        fusion: DataNames.ImperialdramonFM,
    },
    ImperialdramonPM: {
        requirements: {
            components: [DataNames.ImperialdramonFM, DataNames.Omegamon],
            level: 53,
        },
        fusion: DataNames.ImperialdramonPM,
    },
    MirageGaogamonBM: {
        requirements: {
            components: [DataNames.MirageGaogamon, DataNames.MachGaogamon, DataNames.Gaogamon, DataNames.Gaomon, DataNames.Goddramon],
            level: 52,
        },
        fusion: DataNames.MirageGaogamonBM,
    },
    MoonMillenniumon: {
        requirements: {
            components: [DataNames.Millenniumon, DataNames.Devitamamon, DataNames.GranDracmon],
            level: 51,
        },
        fusion: DataNames.MoonMillenniumon,
    },
    ShineGreymonBM: {
        requirements: {
            components: [DataNames.ShineGreymon, DataNames.RizeGreymon, DataNames.Greymon, DataNames.Koromon, DataNames.ChronomonHM],
            level: 52,
            obtained: [DataNames.ShineGreymonRM],
        },
        fusion: DataNames.ShineGreymonBM,
    },
    ShineGreymonRM: {
        requirements: {
            components: [DataNames.ShineGreymon, DataNames.Megidramon, DataNames.CherubimonAku],
            level: 50,
        },
        fusion: DataNames.ShineGreymonRM,
    },
    ZeedMillenniumon: {
        requirements: {
            components: [DataNames.Millenniumon, DataNames.MoonMillenniumon, DataNames.Gulfmon],
            level: 54,
            allied: [DataNames.Monodramon],
        },
        fusion: DataNames.ZeedMillenniumon,
    },
    Greymon2010: {
        requirements: {
            components: [DataNames.Greymon, DataNames.Mechanorimon, DataNames.MasterTyrannomon],
            level: 19,
        },
        fusion: DataNames.Greymon2010,
    },
    ShoutmonSpade: {
        requirements: {
            components: [DataNames.Veemon, DataNames.Agumon, DataNames.Coronamon],
            level: 10,
        },
        fusion: DataNames.Shoutmon,
    },
    ShoutmonHeart: {
        requirements: {
            components: [DataNames.Guilmon, DataNames.Plotmon, DataNames.Impmon],
            level: 10,
        },
        fusion: DataNames.Shoutmon,
    },
    ShoutmonX2: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Ballistamon],
            level: 12,
        },
        fusion: DataNames.ShoutmonX2,
    },
    ShoutmonX3: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Ballistamon, DataNames.Dorulumon],
            level: 18,
        },
        fusion: DataNames.ShoutmonX3,
    },
    ShoutmonX4: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Ballistamon, DataNames.Dorulumon, DataNames.Starmon2010],
            level: 21,
            obtained: [DataNames.ShoutmonX3],
        },
        fusion: DataNames.ShoutmonX4,
    },
    ShoutmonX5: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Ballistamon, DataNames.Dorulumon, DataNames.Starmon2010, DataNames.Sparrowmon],
            level: 39,
            obtained: [DataNames.ShoutmonX4],
        },
        fusion: DataNames.ShoutmonX5,
    },
    ShoutmonX4B: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Ballistamon, DataNames.Dorulumon, DataNames.Starmon2010, DataNames.Beelzebumon2010],
            level: 38,
            obtained: [DataNames.ShoutmonX4],
        },
        fusion: DataNames.ShoutmonX4B,
    },
    JetSparrow: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Sparrowmon],
            level: 17,
        },
        fusion: DataNames.JetSparrow,
    },
    SkullKnightmon: {
        requirements: {
            components: [DataNames.Knightmon, DataNames.Vamdemon, DataNames.Chrysalimon],
            level: 20,
        },
        fusion: DataNames.SkullKnightmon,
    },
    StarSword: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Starmon2010],
            level: 11,
        },
        fusion: DataNames.StarSword,
    },
    DarkKnightmon: {
        requirements: {
            components: [DataNames.SkullKnightmon, DataNames.DeadlyAxemon],
            level: 37,
        },
        fusion: DataNames.DarkKnightmon,
    },
    DoruluCannon: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Dorulumon],
            level: 13,
        },
        fusion: DataNames.DoruluCannon,
    },
    Beelzebumon2010Spade: {
        requirements: {
            components: [DataNames.Piemon, DataNames.Karatenmon, DataNames.Angemon],
            level: 33,
        },
        fusion: DataNames.Beelzebumon2010,
    },
    Beelzebumon2010Heart: {
        requirements: {
            components: [DataNames.Beelzebumon, DataNames.Wisemon, DataNames.Wizardmon],
            level: 33,
        },
        fusion: DataNames.Beelzebumon2010,
    },
    MetalGreymon2010: {
        requirements: {
            components: [DataNames.Greymon2010, DataNames.MailBirdramon],
            level: 37,
        },
        fusion: DataNames.MetalGreymon2010,
    },
    GreyKnightsmon: {
        requirements: {
            components: [DataNames.Greymon2010, DataNames.MailBirdramon, DataNames.SkullKnightmon, DataNames.DeadlyAxemon],
            level: 53,
        },
        fusion: DataNames.GreyKnightsmon,
    },
    ShoutmonX3GM: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Ballistamon, DataNames.Dorulumon, DataNames.Greymon2010, DataNames.MailBirdramon],
            level: 52,
            obtained: [DataNames.MetalGreymon2010],
        },
        fusion: DataNames.ShoutmonX3GM,
    },
    ShoutmonX3SD: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Ballistamon, DataNames.Dorulumon, DataNames.SkullKnightmon, DataNames.DeadlyAxemon],
            level: 52,
            obtained: [DataNames.DarkKnightmon],
        },
        fusion: DataNames.ShoutmonX3SD,
    },
    ShoutmonX4S: {
        requirements: {
            components: [DataNames.Shoutmon, DataNames.Ballistamon, DataNames.Dorulumon, DataNames.Starmon2010, DataNames.Spadamon],
            level: 50,
            obtained: [DataNames.ShoutmonX4],
        },
        fusion: DataNames.ShoutmonX4S,
    },
    ShoutmonX5S: {
        requirements: {
            components: [DataNames.ShoutmonX5, DataNames.Spadamon],
            level: 53,
            obtained: [DataNames.ShoutmonX4S],
        },
        fusion: DataNames.ShoutmonX5S,
    },
    Spadamon: {
        requirements: {
            components: [DataNames.Leomon, DataNames.Pandamon, DataNames.Tyilinmon],
            level: 13,
        },
        fusion: DataNames.Spadamon,
    },
}

// const Items = {
//     CourageDM: {
//         name: {
//             japanese: "DigiMental of Courage",
//             english: "DigiEgg of Courage"
//         }
//     },
//     FriendshipDM: {
//         name: {
//             japanese: "DigiMental of Friendship",
//             english: "DigiEgg of Friendship"
//         }
//     },
//     KindnessDM: {
//         name: {
//             japanese: "DigiMental of Kindness",
//             english: "DigiEgg of Kindness"
//         }
//     },
//     LightDM: {
//         name: {
//             japanese: "DigiMental of Light",
//             english: "DigiEgg of Light"
//         }
//     },
//     MiraclesDM: {
//         name: {
//             japanese: "DigiMental of Miracles",
//             english: "DigiEgg of Miracles"
//         }
//     },
//     PurityDM: {
//         name: {
//             japanese: "DigiMental of Purity",
//             english: "DigiEgg of Purity"
//         }
//     },
//     CorePiece: {
//         name: {
//             japanese: "Core Piece", // TODO: Check Japanese Name
//             english: "Core Piece"
//         }
//     }
// }

export const DigimonIDs = {
    Koromon: {
        base: 1,
        ds: 1,
        dssm: 2,
        dsle: 2,
        dssxw: 3,
    },
    Tsunomon: {
        base: 2,
        ds: 2,
        dssm: 3,
        dsle: 3,
        dssxw: 394,
    },
    Tanemon: {
        base: 3,
        ds: 5,
        dssm: 6,
        dsle: 6,
        dssxw: 395,
    },
    Poyomon: {
        base: 4,
        ds: 3,
        dssm: 4,
        dsle: 4,
        dssxw: 396,
    },
    Tokomon: {
        base: 5,
        ds: 4,
        dssm: 5,
        dsle: 5,
        dssxw: 397,
    },
    Puttomon: {
        base: 6,
        ds: 9,
        dssm: 10,
        dsle: 10,
        dssxw: 398,
    },
    Chicomon: {
        base: 7,
        ds: 10,
        dssm: 11,
        dsle: 11,
        dssxw: 399,
    },
    Minomon: {
        base: 8,
        ds: 240,
        dssm: 18,
        dsle: 17,
        dssxw: 400,
    },
    Gigimon: {
        base: 9,
        ds: 241,
        dssm: 14,
        dsle: 14,
        dssxw: 401,
    },
    Gummymon: {
        base: 10,
        ds: 242,
        dssm: 15,
        dsle: 15,
        dssxw: 402,
    },
    Kokomon: {
        base: 11,
        ds: 243,
        dssm: 16,
        dsle: 315,
        dssxw: 403,
    },
    Wanyamon: {
        base: 12,
        ds: 244,
        dssm: 19,
        dsle: 18,
        dssxw: 404,
    },
    Budmon: {
        base: 13,
        ds: 245,
        dssm: 20,
        dsle: 19,
        dssxw: 405,
    },
    Botamon: {
        base: 14,
        ds: 246,
        dssm: 21,
        dsle: 20,
        dssxw: 406,
    },
    Pagumon: {
        base: 15,
        ds: 6,
        dssm: 7,
        dsle: 7,
        dssxw: 407,
    },
    Kuramon: {
        base: 16,
        ds: 8,
        dssm: 9,
        dsle: 9,
        dssxw: 1,
    },
    Tsumemon: {
        base: 17,
        ds: 247,
        dssm: 17,
        dsle: 16,
        dssxw: 408,
    },
    Kapurimon: {
        base: 18,
        ds: 7,
        dssm: 8,
        dsle: 8,
        dssxw: 409,
    },
    Dorimon: {
        base: 19,
        ds: 11,
        dssm: 12,
        dsle: 12,
        dssxw: 410,
    },
    Sunmon: {
        base: 20,
        ds: 248,
        dssm: 22,
        dsle: 21,
        dssxw: 411,
    },
    Moonmon: {
        base: 21,
        ds: 249,
        dssm: 23,
        dsle: 22,
        dssxw: 412,
    },
    Chicchimon: {
        base: 22,
        ds: 250,
        dssm: 1,
        dsle: 1,
        dssxw: 413,
    },
    Culumon: {
        base: 23,
        ds: 12,
        dssm: 13,
        dsle: 13,
        dssxw: 2,
    },
    Pickmon: {
        base: 24,
        ds: 251,
        dssm: 398,
        dsle: 316,
        dssxw: 377,
    },
    Bombmon: {
        base: 25,
        ds: 252,
        dssm: 399,
        dsle: 317,
        dssxw: 380,
    },
    Agumon: {
        base: 26,
        ds: 13,
        dssm: 25,
        dsle: 24,
        dssxw: 4,
    },
    Gabumon: {
        base: 27,
        ds: 18,
        dssm: 30,
        dsle: 29,
        dssxw: 11,
    },
    Piyomon: {
        base: 28,
        ds: 20,
        dssm: 32,
        dsle: 31,
        dssxw: 31,
    },
    Palmon: {
        base: 29,
        ds: 21,
        dssm: 33,
        dsle: 32,
        dssxw: 28,
    },
    Tentomon: {
        base: 30,
        ds: 22,
        dssm: 34,
        dsle: 33,
        dssxw: 22,
    },
    Gomamon: {
        base: 31,
        ds: 25,
        dssm: 37,
        dsle: 35,
        dssxw: 19,
    },
    Patamon: {
        base: 32,
        ds: 19,
        dssm: 31,
        dsle: 30,
        dssxw: 27,
    },
    Plotmon: {
        base: 33,
        ds: 30,
        dssm: 42,
        dsle: 39,
        dssxw: 35,
    },
    Veemon: {
        base: 34,
        ds: 14,
        dssm: 26,
        dsle: 25,
        dssxw: 34,
    },
    Wormmon: {
        base: 35,
        ds: 31,
        dssm: 43,
        dsle: 40,
        dssxw: 47,
    },
    Hawkmon: {
        base: 36,
        ds: 32,
        dssm: 44,
        dsle: 41,
        dssxw: 38,
    },
    Armadimon: {
        base: 37,
        ds: 33,
        dssm: 45,
        dsle: 42,
        dssxw: 5,
    },
    Guilmon: {
        base: 38,
        ds: 15,
        dssm: 27,
        dsle: 26,
        dssxw: 12,
    },
    Renamon: {
        base: 39,
        ds: 36,
        dssm: 48,
        dsle: 45,
        dssxw: 45,
    },
    Terriermon: {
        base: 40,
        ds: 34,
        dssm: 46,
        dsle: 43,
        dssxw: 21,
    },
    Lopmon: {
        base: 41,
        ds: 35,
        dssm: 47,
        dsle: 44,
        dssxw: 46,
    },
    Impmon: {
        base: 42,
        ds: 37,
        dssm: 49,
        dsle: 46,
        dssxw: 6,
    },
    Lalamon: {
        base: 43,
        ds: 50,
        dssm: 65,
        dsle: 53,
        dssxw: 42,
    },
    Gaomon: {
        base: 44,
        ds: 55,
        dssm: 70,
        dsle: 54,
        dssxw: 9,
    },
    Falcomon: {
        base: 45,
        ds: 39,
        dssm: 51,
        dsle: 48,
        dssxw: 32,
    },
    PawnChessmonB: {
        base: 46,
        ds: 54,
        dssm: 69,
        dsle: 318,
        dssxw: 414,
    },
    PawnChessmonW: {
        base: 47,
        ds: 60,
        dssm: 75,
        dsle: 319,
        dssxw: 48,
    },
    Kudamon: {
        base: 48,
        ds: 57,
        dssm: 72,
        dsle: 56,
        dssxw: 13,
    },
    Kamemon: {
        base: 49,
        ds: 58,
        dssm: 73,
        dsle: 57,
        dssxw: 8,
    },
    Dorumon: {
        base: 50,
        ds: 16,
        dssm: 28,
        dsle: 27,
        dssxw: 25,
    },
    Monodramon: {
        base: 51,
        ds: 253,
        dssm: 24,
        dsle: 23,
        dssxw: 40,
    },
    BlackAgumon: {
        base: 52,
        ds: 45,
        dssm: 60,
        dsle: 51,
        dssxw: 415,
    },
    YukiAgumon: {
        base: 53,
        ds: 44,
        dssm: 59,
        dsle: 320,
        dssxw: 41,
    },
    Goburimon: {
        base: 54,
        ds: 41,
        dssm: 53,
        dsle: 49,
        dssxw: 18,
    },
    Shamamon: {
        base: 55,
        ds: 254,
        dssm: 56,
        dsle: 321,
        dssxw: 416,
    },
    SnowGoburimon: {
        base: 56,
        ds: 255,
        dssm: 57,
        dsle: 322,
        dssxw: 417,
    },
    Kumamon: {
        base: 57,
        ds: 42,
        dssm: 54,
        dsle: 323,
        dssxw: 418,
    },
    Penmon: {
        base: 58,
        ds: 40,
        dssm: 52,
        dsle: 324,
        dssxw: 37,
    },
    Muchomon: {
        base: 59,
        ds: 46,
        dssm: 61,
        dsle: 325,
        dssxw: 419,
    },
    Betamon: {
        base: 60,
        ds: 17,
        dssm: 29,
        dsle: 28,
        dssxw: 36,
    },
    Otamamon: {
        base: 61,
        ds: 24,
        dssm: 36,
        dsle: 326,
        dssxw: 7,
    },
    Ganimon: {
        base: 62,
        ds: 47,
        dssm: 62,
        dsle: 327,
        dssxw: 10,
    },
    Gizamon: {
        base: 63,
        ds: 49,
        dssm: 64,
        dsle: 328,
        dssxw: 420,
    },
    Syakomon: {
        base: 64,
        ds: 256,
        dssm: 58,
        dsle: 50,
        dssxw: 20,
    },
    Kunemon: {
        base: 65,
        ds: 257,
        dssm: 77,
        dsle: 329,
        dssxw: 421,
    },
    DoKunemon: {
        base: 66,
        ds: 258,
        dssm: 82,
        dsle: 330,
        dssxw: 422,
    },
    Floramon: {
        base: 67,
        ds: 48,
        dssm: 63,
        dsle: 52,
        dssxw: 33,
    },
    Aruraumon: {
        base: 68,
        ds: 51,
        dssm: 66,
        dsle: 331,
        dssxw: 423,
    },
    Mushroomon: {
        base: 69,
        ds: 259,
        dssm: 78,
        dsle: 332,
        dssxw: 39,
    },
    ToyAgumon: {
        base: 70,
        ds: 28,
        dssm: 40,
        dsle: 37,
        dssxw: 23,
    },
    ToyAgumonB: {
        base: 71,
        ds: 52,
        dssm: 67,
        dsle: 333,
        dssxw: 424,
    },
    Hagurumon: {
        base: 72,
        ds: 29,
        dssm: 41,
        dsle: 38,
        dssxw: 26,
    },
    Solarmon: {
        base: 73,
        ds: 260,
        dssm: 79,
        dsle: 334,
        dssxw: 425,
    },
    Kotemon: {
        base: 74,
        ds: 43,
        dssm: 55,
        dsle: 335,
        dssxw: 426,
    },
    Kokuwamon: {
        base: 75,
        ds: 261,
        dssm: 81,
        dsle: 60,
        dssxw: 15,
    },
    Gotsumon: {
        base: 76,
        ds: 23,
        dssm: 35,
        dsle: 34,
        dssxw: 17,
    },
    Bakumon: {
        base: 77,
        ds: 26,
        dssm: 38,
        dsle: 336,
        dssxw: 427,
    },
    Candlemon: {
        base: 78,
        ds: 262,
        dssm: 80,
        dsle: 337,
        dssxw: 428,
    },
    PicoDevimon: {
        base: 79,
        ds: 27,
        dssm: 39,
        dsle: 36,
        dssxw: 30,
    },
    Keramon: {
        base: 80,
        ds: 38,
        dssm: 50,
        dsle: 47,
        dssxw: 14,
    },
    Tsukaimon: {
        base: 81,
        ds: 53,
        dssm: 68,
        dsle: 338,
        dssxw: 429,
    },
    Dracmon: {
        base: 82,
        ds: 59,
        dssm: 74,
        dsle: 58,
        dssxw: 24,
    },
    DotAgumon: {
        base: 83,
        ds: 61,
        dssm: 76,
        dsle: 59,
        dssxw: 430,
    },
    DotFalcomon: {
        base: 84,
        ds: 56,
        dssm: 71,
        dsle: 55,
        dssxw: 431,
    },
    Coronamon: {
        base: 85,
        ds: 263,
        dssm: 83,
        dsle: 61,
        dssxw: 16,
    },
    Lunamon: {
        base: 86,
        ds: 264,
        dssm: 84,
        dsle: 62,
        dssxw: 44,
    },
    Hyokomon: {
        base: 87,
        ds: 265,
        dssm: 400,
        dsle: 63,
        dssxw: 29,
    },
    Lucemon: {
        base: 88,
        ds: 266,
        dssm: 401,
        dsle: 339,
        dssxw: 43,
    },
    Shoutmon: {
        base: 89,
        ds: 267,
        dssm: 402,
        dsle: 340,
        dssxw: 357,
    },
    Ballistamon: {
        base: 90,
        ds: 268,
        dssm: 403,
        dsle: 341,
        dssxw: 376,
    },
    Starmon2010: {
        base: 91,
        ds: 269,
        dssm: 404,
        dsle: 342,
        dssxw: 367,
    },
    Sparrowmon: {
        base: 92,
        ds: 270,
        dssm: 405,
        dsle: 343,
        dssxw: 368,
    },
    Cutemon: {
        base: 93,
        ds: 271,
        dssm: 406,
        dsle: 344,
        dssxw: 354,
    },
    Monitormon: {
        base: 94,
        ds: 272,
        dssm: 407,
        dsle: 345,
        dssxw: 383,
    },
    Spadamon: {
        base: 95,
        ds: 273,
        dssm: 408,
        dsle: 346,
        dssxw: 393,
    },
    Dondokomon: {
        base: 96,
        ds: 274,
        dssm: 409,
        dsle: 347,
        dssxw: 375,
    },
    Gaosmon: {
        base: 97,
        ds: 275,
        dssm: 410,
        dsle: 348,
        dssxw: 353,
    },
    ShoutmonB: {
        base: 98,
        ds: 276,
        dssm: 411,
        dsle: 349,
        dssxw: 358,
    },
    Chikurimon: {
        base: 99,
        ds: 277,
        dssm: 412,
        dsle: 350,
        dssxw: 371,
    },
    Troopmon: {
        base: 100,
        ds: 278,
        dssm: 413,
        dsle: 351,
        dssxw: 372,
    },
    StarSword: {
        base: 101,
        ds: 279,
        dssm: 414,
        dsle: 352,
        dssxw: 366,
    },
    Greymon: {
        base: 102,
        ds: 62,
        dssm: 86,
        dsle: 64,
        dssxw: 76,
    },
    Garurumon: {
        base: 103,
        ds: 69,
        dssm: 93,
        dsle: 71,
        dssxw: 69,
    },
    Birdramon: {
        base: 104,
        ds: 86,
        dssm: 110,
        dsle: 84,
        dssxw: 106,
    },
    Togemon: {
        base: 105,
        ds: 82,
        dssm: 106,
        dsle: 80,
        dssxw: 100,
    },
    Kabuterimon: {
        base: 106,
        ds: 68,
        dssm: 92,
        dsle: 70,
        dssxw: 65,
    },
    Ikkakumon: {
        base: 107,
        ds: 109,
        dssm: 134,
        dsle: 97,
        dssxw: 54,
    },
    Angemon: {
        base: 108,
        ds: 70,
        dssm: 94,
        dsle: 72,
        dssxw: 62,
    },
    Tailmon: {
        base: 109,
        ds: 80,
        dssm: 104,
        dsle: 78,
        dssxw: 96,
    },
    ExVeemon: {
        base: 110,
        ds: 84,
        dssm: 108,
        dsle: 82,
        dssxw: 60,
    },
    Stingmon: {
        base: 111,
        ds: 85,
        dssm: 109,
        dsle: 83,
        dssxw: 91,
    },
    Aquilamon: {
        base: 112,
        ds: 94,
        dssm: 118,
        dsle: 90,
        dssxw: 50,
    },
    Ankylomon: {
        base: 113,
        ds: 87,
        dssm: 111,
        dsle: 85,
        dssxw: 52,
    },
    Growlmon: {
        base: 114,
        ds: 89,
        dssm: 113,
        dsle: 87,
        dssxw: 75,
    },
    Kyubimon: {
        base: 115,
        ds: 90,
        dssm: 114,
        dsle: 88,
        dssxw: 71,
    },
    Gargomon: {
        base: 116,
        ds: 88,
        dssm: 112,
        dsle: 86,
        dssxw: 68,
    },
    Guardromon: {
        base: 117,
        ds: 83,
        dssm: 107,
        dsle: 81,
        dssxw: 66,
    },
    Agunimon: {
        base: 118,
        ds: 280,
        dssm: 415,
        dsle: 353,
        dssxw: 51,
    },
    GeoGreymon: {
        base: 119,
        ds: 114,
        dssm: 139,
        dsle: 98,
        dssxw: 88,
    },
    Gaogamon: {
        base: 120,
        ds: 115,
        dssm: 140,
        dsle: 99,
        dssxw: 67,
    },
    Sunflowmon: {
        base: 121,
        ds: 118,
        dssm: 143,
        dsle: 101,
        dssxw: 83,
    },
    Peckmon: {
        base: 122,
        ds: 121,
        dssm: 146,
        dsle: 104,
        dssxw: 114,
    },
    Gawappamon: {
        base: 123,
        ds: 119,
        dssm: 144,
        dsle: 102,
        dssxw: 70,
    },
    KnightChessmonW: {
        base: 124,
        ds: 281,
        dssm: 190,
        dsle: 354,
        dssxw: 129,
    },
    KnightChessmonB: {
        base: 125,
        ds: 282,
        dssm: 191,
        dsle: 355,
        dssxw: 432,
    },
    Reppamon: {
        base: 126,
        ds: 117,
        dssm: 142,
        dsle: 100,
        dssxw: 127,
    },
    Veedramon: {
        base: 127,
        ds: 283,
        dssm: 188,
        dsle: 117,
        dssxw: 111,
    },
    Dorugamon: {
        base: 128,
        ds: 99,
        dssm: 123,
        dsle: 92,
        dssxw: 103,
    },
    Raptordramon: {
        base: 129,
        ds: 100,
        dssm: 124,
        dsle: 93,
        dssxw: 122,
    },
    Strikedramon: {
        base: 130,
        ds: 284,
        dssm: 416,
        dsle: 121,
        dssxw: 130,
    },
    DarkTyrannomon: {
        base: 131,
        ds: 106,
        dssm: 131,
        dsle: 96,
        dssxw: 128,
    },
    Dinohumon: {
        base: 132,
        ds: 96,
        dssm: 120,
        dsle: 356,
        dssxw: 433,
    },
    Monochromon: {
        base: 133,
        ds: 285,
        dssm: 181,
        dsle: 357,
        dssxw: 434,
    },
    Tyrannomon: {
        base: 134,
        ds: 63,
        dssm: 87,
        dsle: 65,
        dssxw: 95,
    },
    Airdramon: {
        base: 135,
        ds: 65,
        dssm: 89,
        dsle: 67,
        dssxw: 59,
    },
    Flarerizamon: {
        base: 136,
        ds: 113,
        dssm: 138,
        dsle: 358,
        dssxw: 435,
    },
    Centalmon: {
        base: 137,
        ds: 286,
        dssm: 185,
        dsle: 359,
        dssxw: 77,
    },
    Leomon: {
        base: 138,
        ds: 76,
        dssm: 100,
        dsle: 76,
        dssxw: 125,
    },
    Ogremon: {
        base: 139,
        ds: 72,
        dssm: 96,
        dsle: 73,
        dssxw: 63,
    },
    Fugamon: {
        base: 140,
        ds: 287,
        dssm: 151,
        dsle: 360,
        dssxw: 436,
    },
    Hyogamon: {
        base: 141,
        ds: 288,
        dssm: 161,
        dsle: 361,
        dssxw: 437,
    },
    Grizzmon: {
        base: 142,
        ds: 98,
        dssm: 122,
        dsle: 362,
        dssxw: 438,
    },
    Seasarmon: {
        base: 143,
        ds: 92,
        dssm: 116,
        dsle: 363,
        dssxw: 84,
    },
    Hanumon: {
        base: 144,
        ds: 101,
        dssm: 125,
        dsle: 364,
        dssxw: 105,
    },
    Minotarumon: {
        base: 145,
        ds: 110,
        dssm: 135,
        dsle: 365,
        dssxw: 116,
    },
    Yukidarumon: {
        base: 146,
        ds: 289,
        dssm: 159,
        dsle: 109,
        dssxw: 120,
    },
    Tsuchidarumon: {
        base: 147,
        ds: 290,
        dssm: 152,
        dsle: 366,
        dssxw: 94,
    },
    Tortamon: {
        base: 148,
        ds: 291,
        dssm: 153,
        dsle: 367,
        dssxw: 439,
    },
    Nanimon: {
        base: 149,
        ds: 292,
        dssm: 179,
        dsle: 368,
        dssxw: 440,
    },
    BomberNanimon: {
        base: 150,
        ds: 293,
        dssm: 127,
        dsle: 95,
        dssxw: 115,
    },
    Mojyamon: {
        base: 151,
        ds: 294,
        dssm: 182,
        dsle: 369,
        dssxw: 441,
    },
    JungleMojyamon: {
        base: 152,
        ds: 295,
        dssm: 183,
        dsle: 370,
        dssxw: 442,
    },
    Drimogemon: {
        base: 153,
        ds: 296,
        dssm: 147,
        dsle: 371,
        dssxw: 102,
    },
    NiseDrimogemon: {
        base: 154,
        ds: 297,
        dssm: 148,
        dsle: 372,
        dssxw: 443,
    },
    Diatrymon: {
        base: 155,
        ds: 116,
        dssm: 141,
        dsle: 373,
        dssxw: 97,
    },
    Saberdramon: {
        base: 156,
        ds: 298,
        dssm: 165,
        dsle: 374,
        dssxw: 444,
    },
    Kokatorimon: {
        base: 157,
        ds: 75,
        dssm: 99,
        dsle: 75,
        dssxw: 80,
    },
    Akatorimon: {
        base: 158,
        ds: 107,
        dssm: 132,
        dsle: 375,
        dssxw: 445,
    },
    Kiwimon: {
        base: 159,
        ds: 103,
        dssm: 128,
        dsle: 376,
        dssxw: 446,
    },
    Seadramon: {
        base: 160,
        ds: 66,
        dssm: 90,
        dsle: 68,
        dssxw: 85,
    },
    Icemon: {
        base: 161,
        ds: 111,
        dssm: 136,
        dsle: 377,
        dssxw: 447,
    },
    Gekomon: {
        base: 162,
        ds: 79,
        dssm: 103,
        dsle: 378,
        dssxw: 78,
    },
    Numemon: {
        base: 163,
        ds: 67,
        dssm: 91,
        dsle: 69,
        dssxw: 104,
    },
    Geremon: {
        base: 164,
        ds: 299,
        dssm: 160,
        dsle: 379,
        dssxw: 448,
    },
    KaratsukiNumemon: {
        base: 165,
        ds: 300,
        dssm: 162,
        dsle: 380,
        dssxw: 449,
    },
    Shellmon: {
        base: 166,
        ds: 301,
        dssm: 158,
        dsle: 381,
        dssxw: 87,
    },
    MoriShellmon: {
        base: 167,
        ds: 302,
        dssm: 149,
        dsle: 382,
        dssxw: 450,
    },
    Octomon: {
        base: 168,
        ds: 303,
        dssm: 155,
        dsle: 107,
        dssxw: 64,
    },
    Gesomon: {
        base: 169,
        ds: 304,
        dssm: 156,
        dsle: 383,
        dssxw: 79,
    },
    Coelamon: {
        base: 170,
        ds: 305,
        dssm: 157,
        dsle: 108,
        dssxw: 86,
    },
    Rukamon: {
        base: 171,
        ds: 306,
        dssm: 164,
        dsle: 384,
        dssxw: 124,
    },
    Ebidramon: {
        base: 172,
        ds: 307,
        dssm: 154,
        dsle: 106,
        dssxw: 61,
    },
    Kuwagamon: {
        base: 173,
        ds: 77,
        dssm: 101,
        dsle: 77,
        dssxw: 74,
    },
    Snimon: {
        base: 174,
        ds: 308,
        dssm: 167,
        dsle: 385,
        dssxw: 92,
    },
    Dokugumon: {
        base: 175,
        ds: 309,
        dssm: 187,
        dsle: 116,
        dssxw: 101,
    },
    Gokimon: {
        base: 176,
        ds: 95,
        dssm: 119,
        dsle: 386,
        dssxw: 451,
    },
    Flymon: {
        base: 177,
        ds: 310,
        dssm: 168,
        dsle: 387,
        dssxw: 110,
    },
    Yanmamon: {
        base: 178,
        ds: 311,
        dssm: 169,
        dsle: 388,
        dssxw: 119,
    },
    SandYanmamon: {
        base: 179,
        ds: 312,
        dssm: 170,
        dsle: 389,
        dssxw: 452,
    },
    Vegiemon: {
        base: 180,
        ds: 71,
        dssm: 95,
        dsle: 390,
        dssxw: 113,
    },
    Weedmon: {
        base: 181,
        ds: 313,
        dssm: 172,
        dsle: 391,
        dssxw: 453,
    },
    RedVegiemon: {
        base: 182,
        ds: 314,
        dssm: 171,
        dsle: 392,
        dssxw: 454,
    },
    Woodmon: {
        base: 183,
        ds: 315,
        dssm: 166,
        dsle: 110,
        dssxw: 58,
    },
    Igamon: {
        base: 184,
        ds: 316,
        dssm: 173,
        dsle: 111,
        dssxw: 53,
    },
    Kogamon: {
        base: 185,
        ds: 317,
        dssm: 174,
        dsle: 393,
        dssxw: 455,
    },
    Mechanorimon: {
        base: 186,
        ds: 318,
        dssm: 85,
        dsle: 394,
        dssxw: 118,
    },
    Tankmon: {
        base: 187,
        ds: 319,
        dssm: 178,
        dsle: 113,
        dssxw: 93,
    },
    Hookmon: {
        base: 188,
        ds: 97,
        dssm: 121,
        dsle: 91,
        dssxw: 109,
    },
    Revolmon: {
        base: 189,
        ds: 320,
        dssm: 184,
        dsle: 114,
        dssxw: 123,
    },
    Clockmon: {
        base: 190,
        ds: 321,
        dssm: 176,
        dsle: 112,
        dssxw: 73,
    },
    Thunderballmon: {
        base: 191,
        ds: 322,
        dssm: 177,
        dsle: 395,
        dssxw: 131,
    },
    Omekamon: {
        base: 192,
        ds: 323,
        dssm: 175,
        dsle: 396,
        dssxw: 456,
    },
    Golemon: {
        base: 193,
        ds: 324,
        dssm: 180,
        dsle: 397,
        dssxw: 81,
    },
    Raremon: {
        base: 194,
        ds: 78,
        dssm: 102,
        dsle: 398,
        dssxw: 457,
    },
    Sukamon: {
        base: 195,
        ds: 74,
        dssm: 98,
        dsle: 399,
        dssxw: 89,
    },
    PlatinumSukamon: {
        base: 196,
        ds: 108,
        dssm: 133,
        dsle: 400,
        dssxw: 458,
    },
    Starmon: {
        base: 197,
        ds: 102,
        dssm: 126,
        dsle: 94,
        dssxw: 90,
    },
    Unimon: {
        base: 198,
        ds: 104,
        dssm: 129,
        dsle: 401,
        dssxw: 121,
    },
    Sorcerymon: {
        base: 199,
        ds: 105,
        dssm: 130,
        dsle: 402,
        dssxw: 459,
    },
    Wizardmon: {
        base: 200,
        ds: 81,
        dssm: 105,
        dsle: 79,
        dssxw: 56,
    },
    Devimon: {
        base: 201,
        ds: 64,
        dssm: 88,
        dsle: 66,
        dssxw: 99,
    },
    IceDevimon: {
        base: 202,
        ds: 325,
        dssm: 163,
        dsle: 403,
        dssxw: 49,
    },
    Devidramon: {
        base: 203,
        ds: 326,
        dssm: 186,
        dsle: 115,
        dssxw: 98,
    },
    Evilmon: {
        base: 204,
        ds: 93,
        dssm: 117,
        dsle: 404,
        dssxw: 55,
    },
    Bakemon: {
        base: 205,
        ds: 73,
        dssm: 97,
        dsle: 74,
        dssxw: 107,
    },
    Chrysalimon: {
        base: 206,
        ds: 91,
        dssm: 115,
        dsle: 89,
        dssxw: 72,
    },
    Wendimon: {
        base: 207,
        ds: 327,
        dssm: 150,
        dsle: 105,
        dssxw: 57,
    },
    DarkLizardmon: {
        base: 208,
        ds: 112,
        dssm: 137,
        dsle: 405,
        dssxw: 460,
    },
    Musyamon: {
        base: 209,
        ds: 328,
        dssm: 189,
        dsle: 118,
        dssxw: 117,
    },
    Sangloupmon: {
        base: 210,
        ds: 120,
        dssm: 145,
        dsle: 103,
        dssxw: 82,
    },
    Firamon: {
        base: 211,
        ds: 329,
        dssm: 192,
        dsle: 119,
        dssxw: 108,
    },
    Lekismon: {
        base: 212,
        ds: 330,
        dssm: 193,
        dsle: 120,
        dssxw: 126,
    },
    Buraimon: {
        base: 213,
        ds: 331,
        dssm: 417,
        dsle: 122,
        dssxw: 112,
    },
    Dorulumon: {
        base: 214,
        ds: 332,
        dssm: 418,
        dsle: 406,
        dssxw: 374,
    },
    Greymon2010: {
        base: 215,
        ds: 333,
        dssm: 419,
        dsle: 407,
        dssxw: 355,
    },
    GreymonO2010: {
        base: 216,
        ds: 334,
        dssm: 420,
        dsle: 408,
        dssxw: 356,
    },
    MailBirdramon: {
        base: 217,
        ds: 335,
        dssm: 421,
        dsle: 409,
        dssxw: 386,
    },
    SkullKnightmon: {
        base: 218,
        ds: 336,
        dssm: 422,
        dsle: 410,
        dssxw: 365,
    },
    SkullKnightmonBR: {
        base: 219,
        ds: 337,
        dssm: 423,
        dsle: 411,
        dssxw: 387,
    },
    DeadlyAxemon: {
        base: 220,
        ds: 338,
        dssm: 424,
        dsle: 412,
        dssxw: 385,
    },
    ShoutmonX2: {
        base: 221,
        ds: 339,
        dssm: 425,
        dsle: 413,
        dssxw: 359,
    },
    JetSparrow: {
        base: 222,
        ds: 340,
        dssm: 426,
        dsle: 414,
        dssxw: 364,
    },
    DoruluCannon: {
        base: 223,
        ds: 341,
        dssm: 427,
        dsle: 415,
        dssxw: 373,
    },
    Fladramon: {
        base: 224,
        ds: 122,
        dssm: 288,
        dsle: 416,
        dssxw: 189,
    },
    Shadramon: {
        base: 225,
        ds: 342,
        dssm: 260,
        dsle: 170,
        dssxw: 461,
    },
    Allomon: {
        base: 226,
        ds: 343,
        dssm: 280,
        dsle: 417,
        dssxw: 462,
    },
    Lynxmon: {
        base: 227,
        ds: 344,
        dssm: 281,
        dsle: 183,
        dssxw: 463,
    },
    Kenkimon: {
        base: 228,
        ds: 128,
        dssm: 294,
        dsle: 191,
        dssxw: 157,
    },
    Owlmon: {
        base: 229,
        ds: 345,
        dssm: 253,
        dsle: 418,
        dssxw: 464,
    },
    Pipismon: {
        base: 230,
        ds: 346,
        dssm: 240,
        dsle: 419,
        dssxw: 465,
    },
    Shurimon: {
        base: 231,
        ds: 127,
        dssm: 293,
        dsle: 190,
        dssxw: 161,
    },
    Ponchomon: {
        base: 232,
        ds: 129,
        dssm: 295,
        dsle: 420,
        dssxw: 466,
    },
    Kabukimon: {
        base: 233,
        ds: 347,
        dssm: 262,
        dsle: 421,
        dssxw: 145,
    },
    Tylomon: {
        base: 234,
        ds: 348,
        dssm: 209,
        dsle: 422,
        dssxw: 172,
    },
    Seahomon: {
        base: 235,
        ds: 126,
        dssm: 292,
        dsle: 423,
        dssxw: 467,
    },
    Nefertimon: {
        base: 236,
        ds: 349,
        dssm: 428,
        dsle: 424,
        dssxw: 180,
    },
    Toucanmon: {
        base: 237,
        ds: 350,
        dssm: 252,
        dsle: 425,
        dssxw: 468,
    },
    Prairiemon: {
        base: 238,
        ds: 124,
        dssm: 290,
        dsle: 189,
        dssxw: 194,
    },
    Magnamon: {
        base: 239,
        ds: 123,
        dssm: 289,
        dsle: 188,
        dssxw: 199,
    },
    Kongoumon: {
        base: 240,
        ds: 125,
        dssm: 291,
        dsle: 426,
        dssxw: 158,
    },
    MetalGreymon: {
        base: 241,
        ds: 130,
        dssm: 195,
        dsle: 124,
        dssxw: 229,
    },
    WereGarurumonBlue: {
        base: 242,
        ds: 144,
        dssm: 214,
        dsle: 138,
        dssxw: 220,
    },
    Garudamon: {
        base: 243,
        ds: 147,
        dssm: 217,
        dsle: 141,
        dssxw: 148,
    },
    Lilymon: {
        base: 244,
        ds: 149,
        dssm: 219,
        dsle: 143,
        dssxw: 216,
    },
    AtlurKabuterimonR: {
        base: 245,
        ds: 150,
        dssm: 220,
        dsle: 144,
        dssxw: 223,
    },
    Zudomon: {
        base: 246,
        ds: 172,
        dssm: 249,
        dsle: 163,
        dssxw: 168,
    },
    HolyAngemon: {
        base: 247,
        ds: 152,
        dssm: 223,
        dsle: 146,
        dssxw: 228,
    },
    Angewomon: {
        base: 248,
        ds: 140,
        dssm: 208,
        dsle: 133,
        dssxw: 143,
    },
    MegaloGrowlmon: {
        base: 249,
        ds: 158,
        dssm: 229,
        dsle: 152,
        dssxw: 209,
    },
    Taomon: {
        base: 250,
        ds: 160,
        dssm: 231,
        dsle: 154,
        dssxw: 169,
    },
    Rapidmon: {
        base: 251,
        ds: 159,
        dssm: 230,
        dsle: 153,
        dssxw: 215,
    },
    Cyberdramon: {
        base: 252,
        ds: 151,
        dssm: 222,
        dsle: 145,
        dssxw: 226,
    },
    Antylamon: {
        base: 253,
        ds: 155,
        dssm: 226,
        dsle: 149,
        dssxw: 135,
    },
    Paildramon: {
        base: 254,
        ds: 153,
        dssm: 224,
        dsle: 147,
        dssxw: 183,
    },
    Silphymon: {
        base: 255,
        ds: 169,
        dssm: 246,
        dsle: 161,
        dssxw: 162,
    },
    Shakkoumon: {
        base: 256,
        ds: 351,
        dssm: 297,
        dsle: 193,
        dssxw: 160,
    },
    RizeGreymon: {
        base: 257,
        ds: 177,
        dssm: 256,
        dsle: 166,
        dssxw: 213,
    },
    MachGaogamon: {
        base: 258,
        ds: 178,
        dssm: 257,
        dsle: 167,
        dssxw: 201,
    },
    Lilamon: {
        base: 259,
        ds: 181,
        dssm: 259,
        dsle: 169,
        dssxw: 214,
    },
    Yatagaramon: {
        base: 260,
        ds: 179,
        dssm: 283,
        dsle: 185,
        dssxw: 212,
    },
    Shawujinmon: {
        base: 261,
        ds: 352,
        dssm: 282,
        dsle: 184,
        dssxw: 159,
    },
    BishopChessmon: {
        base: 262,
        ds: 353,
        dssm: 284,
        dsle: 427,
        dssxw: 225,
    },
    RookChessmon: {
        base: 263,
        ds: 354,
        dssm: 285,
        dsle: 428,
        dssxw: 217,
    },
    Tyilinmon: {
        base: 264,
        ds: 180,
        dssm: 258,
        dsle: 168,
        dssxw: 171,
    },
    Dorugremon: {
        base: 265,
        ds: 165,
        dssm: 241,
        dsle: 159,
        dssxw: 177,
    },
    Grademon: {
        base: 266,
        ds: 355,
        dssm: 429,
        dsle: 196,
        dssxw: 155,
    },
    AeroVeedramon: {
        base: 267,
        ds: 356,
        dssm: 276,
        dsle: 179,
        dssxw: 224,
    },
    BlackMegaloGrowlmon: {
        base: 268,
        ds: 171,
        dssm: 248,
        dsle: 429,
        dssxw: 469,
    },
    MasterTyrannomon: {
        base: 269,
        ds: 357,
        dssm: 430,
        dsle: 197,
        dssxw: 231,
    },
    Triceramon: {
        base: 270,
        ds: 167,
        dssm: 244,
        dsle: 430,
        dssxw: 176,
    },
    Vermillimon: {
        base: 271,
        ds: 358,
        dssm: 273,
        dsle: 431,
        dssxw: 139,
    },
    Mametyramon: {
        base: 272,
        ds: 359,
        dssm: 266,
        dsle: 174,
        dssxw: 203,
    },
    GrapLeomon: {
        base: 273,
        ds: 360,
        dssm: 277,
        dsle: 180,
        dssxw: 154,
    },
    Kyukimon: {
        base: 274,
        ds: 164,
        dssm: 238,
        dsle: 432,
        dssxw: 150,
    },
    Etemon: {
        base: 275,
        ds: 134,
        dssm: 200,
        dsle: 433,
        dssxw: 142,
    },
    Pandamon: {
        base: 276,
        ds: 361,
        dssm: 235,
        dsle: 157,
        dssxw: 185,
    },
    Mammon: {
        base: 277,
        ds: 362,
        dssm: 204,
        dsle: 434,
        dssxw: 206,
    },
    Cerberumon: {
        base: 278,
        ds: 363,
        dssm: 431,
        dsle: 435,
        dssxw: 156,
    },
    Bastemon: {
        base: 279,
        ds: 364,
        dssm: 432,
        dsle: 436,
        dssxw: 182,
    },
    Sinduramon: {
        base: 280,
        ds: 365,
        dssm: 239,
        dsle: 437,
        dssxw: 163,
    },
    Karatenmon: {
        base: 281,
        ds: 366,
        dssm: 237,
        dsle: 158,
        dssxw: 146,
    },
    Parrotmon: {
        base: 282,
        ds: 161,
        dssm: 232,
        dsle: 155,
        dssxw: 184,
    },
    Deramon: {
        base: 283,
        ds: 168,
        dssm: 245,
        dsle: 438,
        dssxw: 470,
    },
    Dagomon: {
        base: 284,
        ds: 142,
        dssm: 212,
        dsle: 136,
        dssxw: 170,
    },
    Mermaimon: {
        base: 285,
        ds: 367,
        dssm: 433,
        dsle: 199,
        dssxw: 198,
    },
    Whamon: {
        base: 286,
        ds: 173,
        dssm: 250,
        dsle: 439,
        dssxw: 196,
    },
    MegaSeadramon: {
        base: 287,
        ds: 141,
        dssm: 211,
        dsle: 135,
        dssxw: 207,
    },
    WaruSeadramon: {
        base: 288,
        ds: 368,
        dssm: 434,
        dsle: 194,
        dssxw: 222,
    },
    Brachimon: {
        base: 289,
        ds: 369,
        dssm: 279,
        dsle: 182,
        dssxw: 191,
    },
    Hangyomon: {
        base: 290,
        ds: 166,
        dssm: 242,
        dsle: 440,
        dssxw: 181,
    },
    TonosamaGekomon: {
        base: 291,
        ds: 370,
        dssm: 207,
        dsle: 441,
        dssxw: 175,
    },
    Anomalocarimon: {
        base: 292,
        ds: 371,
        dssm: 210,
        dsle: 134,
        dssxw: 132,
    },
    MarineDevimon: {
        base: 293,
        ds: 372,
        dssm: 236,
        dsle: 442,
        dssxw: 205,
    },
    AtlurKabuterimonB: {
        base: 294,
        ds: 138,
        dssm: 205,
        dsle: 443,
        dssxw: 471,
    },
    Dinobeemon: {
        base: 295,
        ds: 154,
        dssm: 225,
        dsle: 148,
        dssxw: 173,
    },
    Ookuwamon: {
        base: 296,
        ds: 139,
        dssm: 206,
        dsle: 132,
        dssxw: 144,
    },
    Arukenimon: {
        base: 297,
        ds: 156,
        dssm: 227,
        dsle: 150,
        dssxw: 133,
    },
    Jureimon: {
        base: 298,
        ds: 373,
        dssm: 263,
        dsle: 172,
        dssxw: 164,
    },
    Blossomon: {
        base: 299,
        ds: 148,
        dssm: 218,
        dsle: 142,
        dssxw: 193,
    },
    ArgomonUltimate: {
        base: 300,
        ds: 374,
        dssm: 296,
        dsle: 192,
        dssxw: 134,
    },
    Andromon: {
        base: 301,
        ds: 133,
        dssm: 199,
        dsle: 128,
        dssxw: 136,
    },
    MetalTyrannomon: {
        base: 302,
        ds: 375,
        dssm: 269,
        dsle: 176,
        dssxw: 230,
    },
    Megadramon: {
        base: 303,
        ds: 135,
        dssm: 201,
        dsle: 129,
        dssxw: 208,
    },
    Gigadramon: {
        base: 304,
        ds: 176,
        dssm: 255,
        dsle: 165,
        dssxw: 151,
    },
    Mamemon: {
        base: 305,
        ds: 174,
        dssm: 251,
        dsle: 164,
        dssxw: 204,
    },
    MetalMamemon: {
        base: 306,
        ds: 132,
        dssm: 198,
        dsle: 127,
        dssxw: 210,
    },
    BigMamemon: {
        base: 307,
        ds: 376,
        dssm: 271,
        dsle: 444,
        dssxw: 472,
    },
    Giromon: {
        base: 308,
        ds: 377,
        dssm: 267,
        dsle: 445,
        dssxw: 152,
    },
    Tekkamon: {
        base: 309,
        ds: 378,
        dssm: 270,
        dsle: 446,
        dssxw: 473,
    },
    Nanomon: {
        base: 310,
        ds: 379,
        dssm: 221,
        dsle: 447,
        dssxw: 179,
    },
    BlueMeramon: {
        base: 311,
        ds: 380,
        dssm: 435,
        dsle: 448,
        dssxw: 192,
    },
    Insekimon: {
        base: 312,
        ds: 175,
        dssm: 254,
        dsle: 449,
        dssxw: 137,
    },
    Garbemon: {
        base: 313,
        ds: 183,
        dssm: 264,
        dsle: 450,
        dssxw: 147,
    },
    Vademon: {
        base: 314,
        ds: 381,
        dssm: 268,
        dsle: 175,
        dssxw: 195,
    },
    Volcamon: {
        base: 315,
        ds: 382,
        dssm: 194,
        dsle: 123,
        dssxw: 197,
    },
    Piccolomon: {
        base: 316,
        ds: 136,
        dssm: 202,
        dsle: 130,
        dssxw: 186,
    },
    Knightmon: {
        base: 317,
        ds: 383,
        dssm: 278,
        dsle: 181,
        dssxw: 178,
    },
    SuperStarmon: {
        base: 318,
        ds: 170,
        dssm: 247,
        dsle: 162,
        dssxw: 232,
    },
    Monzaemon: {
        base: 319,
        ds: 131,
        dssm: 196,
        dsle: 125,
        dssxw: 211,
    },
    Digitamamon: {
        base: 320,
        ds: 137,
        dssm: 203,
        dsle: 131,
        dssxw: 174,
    },
    Wisemon: {
        base: 321,
        ds: 384,
        dssm: 436,
        dsle: 198,
        dssxw: 221,
    },
    WereGarurumonBlack: {
        base: 322,
        ds: 143,
        dssm: 213,
        dsle: 137,
        dssxw: 474,
    },
    BlackRapidmon: {
        base: 323,
        ds: 163,
        dssm: 234,
        dsle: 451,
        dssxw: 475,
    },
    SkullGreymon: {
        base: 324,
        ds: 385,
        dssm: 197,
        dsle: 126,
        dssxw: 165,
    },
    Kimeramon: {
        base: 325,
        ds: 386,
        dssm: 243,
        dsle: 160,
        dssxw: 149,
    },
    Vamdemon: {
        base: 326,
        ds: 145,
        dssm: 215,
        dsle: 139,
        dssxw: 141,
    },
    LadyDevimon: {
        base: 327,
        ds: 146,
        dssm: 216,
        dsle: 140,
        dssxw: 219,
    },
    Mummymon: {
        base: 328,
        ds: 157,
        dssm: 228,
        dsle: 151,
        dssxw: 202,
    },
    Infermon: {
        base: 329,
        ds: 162,
        dssm: 233,
        dsle: 156,
        dssxw: 138,
    },
    Vajramon: {
        base: 330,
        ds: 387,
        dssm: 275,
        dsle: 452,
        dssxw: 140,
    },
    Phantomon: {
        base: 331,
        ds: 388,
        dssm: 274,
        dsle: 178,
        dssxw: 187,
    },
    Matadormon: {
        base: 332,
        ds: 182,
        dssm: 261,
        dsle: 171,
        dssxw: 200,
    },
    EXTyrannomon: {
        base: 333,
        ds: 389,
        dssm: 272,
        dsle: 177,
        dssxw: 227,
    },
    SkullBaluchimon: {
        base: 334,
        ds: 390,
        dssm: 437,
        dsle: 195,
        dssxw: 166,
    },
    Scorpiomon: {
        base: 335,
        ds: 391,
        dssm: 438,
        dsle: 453,
        dssxw: 167,
    },
    Flaremon: {
        base: 336,
        ds: 392,
        dssm: 286,
        dsle: 186,
        dssxw: 188,
    },
    Crescemon: {
        base: 337,
        ds: 393,
        dssm: 287,
        dsle: 187,
        dssxw: 153,
    },
    Butenmon: {
        base: 338,
        ds: 394,
        dssm: 439,
        dsle: 200,
        dssxw: 190,
    },
    LucemonFM: {
        base: 339,
        ds: 395,
        dssm: 265,
        dsle: 173,
        dssxw: 218,
    },
    MadLeomon: {
        base: 340,
        ds: 396,
        dssm: 440,
        dsle: 454,
        dssxw: 381,
    },
    ShoutmonX3: {
        base: 341,
        ds: 397,
        dssm: 441,
        dsle: 455,
        dssxw: 360,
    },
    ShoutmonX4: {
        base: 342,
        ds: 398,
        dssm: 442,
        dsle: 456,
        dssxw: 361,
    },
    MetalGreymon2010: {
        base: 343,
        ds: 399,
        dssm: 443,
        dsle: 457,
        dssxw: 382,
    },
    DarkKnightmon: {
        base: 344,
        ds: 400,
        dssm: 444,
        dsle: 458,
        dssxw: 370,
    },
    WarGreymon: {
        base: 345,
        ds: 194,
        dssm: 309,
        dsle: 210,
        dssxw: 238,
    },
    MetalGarurumon: {
        base: 346,
        ds: 195,
        dssm: 310,
        dsle: 211,
        dssxw: 298,
    },
    Hououmon: {
        base: 347,
        ds: 191,
        dssm: 306,
        dsle: 207,
        dssxw: 290,
    },
    Rosemon: {
        base: 348,
        ds: 193,
        dssm: 308,
        dsle: 209,
        dssxw: 303,
    },
    HeraclesKabuterimon: {
        base: 349,
        ds: 184,
        dssm: 299,
        dsle: 201,
        dssxw: 318,
    },
    Vikemon: {
        base: 350,
        ds: 232,
        dssm: 362,
        dsle: 247,
        dssxw: 239,
    },
    Seraphimon: {
        base: 351,
        ds: 203,
        dssm: 318,
        dsle: 216,
        dssxw: 265,
    },
    Holydramon: {
        base: 352,
        ds: 401,
        dssm: 369,
        dsle: 252,
        dssxw: 291,
    },
    ImperialdramonDM: {
        base: 353,
        ds: 199,
        dssm: 314,
        dsle: 214,
        dssxw: 319,
    },
    Dukemon: {
        base: 354,
        ds: 207,
        dssm: 323,
        dsle: 221,
        dssxw: 274,
    },
    Sakuyamon: {
        base: 355,
        ds: 210,
        dssm: 326,
        dsle: 223,
        dssxw: 257,
    },
    SaintGargomon: {
        base: 356,
        ds: 209,
        dssm: 325,
        dsle: 222,
        dssxw: 266,
    },
    Justimon: {
        base: 357,
        ds: 231,
        dssm: 361,
        dsle: 246,
        dssxw: 260,
    },
    MarineAngemon: {
        base: 358,
        ds: 187,
        dssm: 302,
        dsle: 203,
        dssxw: 320,
    },
    ShineGreymon: {
        base: 359,
        ds: 402,
        dssm: 374,
        dsle: 256,
        dssxw: 325,
    },
    MirageGaogamon: {
        base: 360,
        ds: 403,
        dssm: 375,
        dsle: 257,
        dssxw: 322,
    },
    Ravemon: {
        base: 361,
        ds: 404,
        dssm: 377,
        dsle: 259,
        dssxw: 301,
    },
    Sleipmon: {
        base: 362,
        ds: 235,
        dssm: 373,
        dsle: 255,
        dssxw: 264,
    },
    BanchoLeomon: {
        base: 363,
        ds: 224,
        dssm: 349,
        dsle: 240,
        dssxw: 315,
    },
    BlackWarGreymon: {
        base: 364,
        ds: 233,
        dssm: 363,
        dsle: 248,
        dssxw: 316,
    },
    ImperialdramonDMB: {
        base: 365,
        ds: 214,
        dssm: 334,
        dsle: 459,
        dssxw: 476,
    },
    Megidramon: {
        base: 366,
        ds: 405,
        dssm: 372,
        dsle: 254,
        dssxw: 296,
    },
    ChaosDukemon: {
        base: 367,
        ds: 228,
        dssm: 358,
        dsle: 299,
        dssxw: 345,
    },
    Kuzuhamon: {
        base: 368,
        ds: 227,
        dssm: 357,
        dsle: 460,
        dssxw: 477,
    },
    BlackSaintGargomon: {
        base: 369,
        ds: 216,
        dssm: 339,
        dsle: 461,
        dssxw: 478,
    },
    CherubimonAku: {
        base: 370,
        ds: 206,
        dssm: 322,
        dsle: 220,
        dssxw: 253,
    },
    CherubimonZen: {
        base: 371,
        ds: 205,
        dssm: 321,
        dsle: 219,
        dssxw: 254,
    },
    Goddramon: {
        base: 372,
        ds: 406,
        dssm: 354,
        dsle: 243,
        dssxw: 255,
    },
    Dorugoramon: {
        base: 373,
        ds: 223,
        dssm: 347,
        dsle: 238,
        dssxw: 277,
    },
    Darkdramon: {
        base: 374,
        ds: 225,
        dssm: 350,
        dsle: 241,
        dssxw: 267,
    },
    Cannondramon: {
        base: 375,
        ds: 220,
        dssm: 344,
        dsle: 462,
        dssxw: 245,
    },
    SaberLeomon: {
        base: 376,
        ds: 185,
        dssm: 300,
        dsle: 202,
        dssxw: 256,
    },
    MetalEtemon: {
        base: 377,
        ds: 186,
        dssm: 301,
        dsle: 463,
        dssxw: 297,
    },
    Gryphomon: {
        base: 378,
        ds: 407,
        dssm: 330,
        dsle: 464,
        dssxw: 252,
    },
    SkullMammon: {
        base: 379,
        ds: 408,
        dssm: 364,
        dsle: 465,
        dssxw: 262,
    },
    Valkyrimon: {
        base: 380,
        ds: 230,
        dssm: 360,
        dsle: 245,
        dssxw: 240,
    },
    Crossmon: {
        base: 381,
        ds: 222,
        dssm: 346,
        dsle: 237,
        dssxw: 249,
    },
    Plesiomon: {
        base: 382,
        ds: 212,
        dssm: 331,
        dsle: 227,
        dssxw: 288,
    },
    JumboGamemon: {
        base: 383,
        ds: 409,
        dssm: 376,
        dsle: 258,
        dssxw: 261,
    },
    Pukumon: {
        base: 384,
        ds: 410,
        dssm: 329,
        dsle: 226,
        dssxw: 286,
    },
    GranKuwagamon: {
        base: 385,
        ds: 234,
        dssm: 365,
        dsle: 249,
        dssxw: 317,
    },
    TigerVespamon: {
        base: 386,
        ds: 411,
        dssm: 445,
        dsle: 287,
        dssxw: 326,
    },
    Lotusmon: {
        base: 387,
        ds: 412,
        dssm: 389,
        dsle: 264,
        dssxw: 304,
    },
    ArgomonMega: {
        base: 388,
        ds: 413,
        dssm: 394,
        dsle: 267,
        dssxw: 235,
    },
    QueenChessmon: {
        base: 389,
        ds: 414,
        dssm: 378,
        dsle: 466,
        dssxw: 323,
    },
    KingChessmon: {
        base: 390,
        ds: 415,
        dssm: 379,
        dsle: 467,
        dssxw: 246,
    },
    HiAndromon: {
        base: 391,
        ds: 204,
        dssm: 319,
        dsle: 217,
        dssxw: 279,
    },
    PrinceMamemon: {
        base: 392,
        ds: 215,
        dssm: 336,
        dsle: 229,
        dssxw: 287,
    },
    Parasimon: {
        base: 393,
        ds: 219,
        dssm: 343,
        dsle: 235,
        dssxw: 282,
    },
    Boltmon: {
        base: 394,
        ds: 416,
        dssm: 335,
        dsle: 228,
        dssxw: 292,
    },
    Ebemon: {
        base: 395,
        ds: 417,
        dssm: 352,
        dsle: 242,
        dssxw: 237,
    },
    Ophanimon: {
        base: 396,
        ds: 418,
        dssm: 337,
        dsle: 230,
        dssxw: 242,
    },
    SlashAngemon: {
        base: 397,
        ds: 221,
        dssm: 345,
        dsle: 236,
        dssxw: 324,
    },
    Jijimon: {
        base: 398,
        ds: 217,
        dssm: 340,
        dsle: 232,
        dssxw: 259,
    },
    Babamon: {
        base: 399,
        ds: 218,
        dssm: 341,
        dsle: 233,
        dssxw: 280,
    },
    Pharaohmon: {
        base: 400,
        ds: 419,
        dssm: 366,
        dsle: 250,
        dssxw: 285,
    },
    Anubimon: {
        base: 401,
        ds: 420,
        dssm: 342,
        dsle: 234,
        dssxw: 233,
    },
    ChronomonHM: {
        base: 402,
        ds: 239,
        dssm: 380,
        dsle: 260,
        dssxw: 250,
    },
    VenomVamdemon: {
        base: 403,
        ds: 197,
        dssm: 312,
        dsle: 213,
        dssxw: 328,
    },
    Diaboromon: {
        base: 404,
        ds: 211,
        dssm: 327,
        dsle: 224,
        dssxw: 270,
    },
    Gulfmon: {
        base: 405,
        ds: 421,
        dssm: 353,
        dsle: 468,
        dssxw: 244,
    },
    Devitamamon: {
        base: 406,
        ds: 422,
        dssm: 320,
        dsle: 218,
        dssxw: 273,
    },
    Zanbamon: {
        base: 407,
        ds: 423,
        dssm: 338,
        dsle: 231,
        dssxw: 258,
    },
    Deathmon: {
        base: 408,
        ds: 202,
        dssm: 317,
        dsle: 215,
        dssxw: 272,
    },
    DeathmonB: {
        base: 409,
        ds: 226,
        dssm: 356,
        dsle: 469,
        dssxw: 479,
    },
    Lampmon: {
        base: 410,
        ds: 424,
        dssm: 298,
        dsle: 470,
        dssxw: 480,
    },
    MetalSeadramon: {
        base: 411,
        ds: 229,
        dssm: 359,
        dsle: 244,
        dssxw: 321,
    },
    GigaSeadramon: {
        base: 412,
        ds: 188,
        dssm: 303,
        dsle: 204,
        dssxw: 247,
    },
    Pinocchimon: {
        base: 413,
        ds: 192,
        dssm: 307,
        dsle: 208,
        dssxw: 284,
    },
    Mugendramon: {
        base: 414,
        ds: 196,
        dssm: 311,
        dsle: 212,
        dssxw: 295,
    },
    Millenniumon: {
        base: 415,
        ds: 425,
        dssm: 370,
        dsle: 253,
        dssxw: 294,
    },
    Piemon: {
        base: 416,
        ds: 189,
        dssm: 304,
        dsle: 205,
        dssxw: 283,
    },
    Apollomon: {
        base: 417,
        ds: 426,
        dssm: 383,
        dsle: 262,
        dssxw: 234,
    },
    Dianamon: {
        base: 418,
        ds: 427,
        dssm: 384,
        dsle: 263,
        dssxw: 269,
    },
    Minervamon: {
        base: 419,
        ds: 428,
        dssm: 395,
        dsle: 268,
        dssxw: 293,
    },
    Neptunemon: {
        base: 420,
        ds: 238,
        dssm: 328,
        dsle: 225,
        dssxw: 278,
    },
    Mercurimon: {
        base: 421,
        ds: 429,
        dssm: 446,
        dsle: 271,
        dssxw: 299,
    },
    Spinomon: {
        base: 422,
        ds: 430,
        dssm: 447,
        dsle: 270,
        dssxw: 263,
    },
    Gaioumon: {
        base: 423,
        ds: 431,
        dssm: 448,
        dsle: 272,
        dssxw: 243,
    },
    GranDracmon: {
        base: 424,
        ds: 432,
        dssm: 449,
        dsle: 273,
        dssxw: 251,
    },
    Beelzebumon: {
        base: 425,
        ds: 236,
        dssm: 348,
        dsle: 239,
        dssxw: 289,
    },
    Demon: {
        base: 426,
        ds: 190,
        dssm: 205,
        dsle: 206,
        dssxw: 271,
    },
    Lilithmon: {
        base: 427,
        ds: 433,
        dssm: 381,
        dsle: 261,
        dssxw: 300,
    },
    Barbamon: {
        base: 428,
        ds: 434,
        dssm: 450,
        dsle: 286,
        dssxw: 281,
    },
    Alphamon: {
        base: 429,
        ds: 435,
        dssm: 368,
        dsle: 251,
        dssxw: 236,
    },
    Dynasmon: {
        base: 430,
        ds: 436,
        dssm: 451,
        dsle: 288,
        dssxw: 275,
    },
    LordKnightmon: {
        base: 431,
        ds: 437,
        dssm: 452,
        dsle: 289,
        dssxw: 302,
    },
    Duftmon: {
        base: 432,
        ds: 438,
        dssm: 396,
        dsle: 269,
        dssxw: 276,
    },
    UlforceVeedramon: {
        base: 433,
        ds: 439,
        dssm: 453,
        dsle: 284,
        dssxw: 327,
    },
    Craniummon: {
        base: 434,
        ds: 440,
        dssm: 454,
        dsle: 285,
        dssxw: 248,
    },
    Examon: {
        base: 435,
        ds: 441,
        dssm: 455,
        dsle: 290,
        dssxw: 241,
    },
    DaiPenmon: {
        base: 436,
        ds: 442,
        dssm: 456,
        dsle: 471,
        dssxw: 268,
    },
    AncientGreymon: {
        base: 437,
        ds: 443,
        dssm: 457,
        dsle: 277,
        dssxw: 307,
    },
    AncientGarurumon: {
        base: 438,
        ds: 444,
        dssm: 458,
        dsle: 275,
        dssxw: 306,
    },
    AncientMegatheriumon: {
        base: 439,
        ds: 445,
        dssm: 459,
        dsle: 276,
        dssxw: 313,
    },
    AncientIrismon: {
        base: 440,
        ds: 446,
        dssm: 460,
        dsle: 274,
        dssxw: 305,
    },
    AncientBeatmon: {
        base: 441,
        ds: 447,
        dssm: 461,
        dsle: 282,
        dssxw: 310,
    },
    AncientSphinxmon: {
        base: 442,
        ds: 448,
        dssm: 462,
        dsle: 280,
        dssxw: 308,
    },
    AncientVolcamon: {
        base: 443,
        ds: 449,
        dssm: 463,
        dsle: 283,
        dssxw: 311,
    },
    AncientTroiamon: {
        base: 444,
        ds: 450,
        dssm: 464,
        dsle: 281,
        dssxw: 309,
    },
    AncientMermaimon: {
        base: 445,
        ds: 451,
        dssm: 465,
        dsle: 278,
        dssxw: 312,
    },
    AncientWisemon: {
        base: 446,
        ds: 452,
        dssm: 466,
        dsle: 279,
        dssxw: 314,
    },
    DotShineGreymon: {
        base: 447,
        ds: 453,
        dssm: 390,
        dsle: 265,
        dssxw: 481,
    },
    DotMirageGaogamon: {
        base: 448,
        ds: 454,
        dssm: 391,
        dsle: 266,
        dssxw: 482,
    },
    Tactimon: {
        base: 449,
        ds: 455,
        dssm: 467,
        dsle: 472,
        dssxw: 369,
    },
    Blastmon: {
        base: 450,
        ds: 456,
        dssm: 468,
        dsle: 473,
        dssxw: 378,
    },
    Lilithmon2010: {
        base: 451,
        ds: 457,
        dssm: 469,
        dsle: 474,
        dssxw: 384,
    },
    Beelzebumon2010: {
        base: 452,
        ds: 458,
        dssm: 470,
        dsle: 475,
        dssxw: 379,
    },
    ShoutmonX4B: {
        base: 453,
        ds: 459,
        dssm: 471,
        dsle: 476,
        dssxw: 363,
    },
    ShoutmonX4S: {
        base: 454,
        ds: 460,
        dssm: 472,
        dsle: 477,
        dssxw: 391,
    },
    ShoutmonX5: {
        base: 455,
        ds: 461,
        dssm: 473,
        dsle: 478,
        dssxw: 362,
    },
    ShoutmonX3GM: {
        base: 456,
        ds: 462,
        dssm: 474,
        dsle: 479,
        dssxw: 389,
    },
    ShoutmonX3SD: {
        base: 457,
        ds: 463,
        dssm: 475,
        dsle: 480,
        dssxw: 390,
    },
    GreyKnightsmon: {
        base: 458,
        ds: 464,
        dssm: 476,
        dsle: 481,
        dssxw: 388,
    },
    Omegamon: {
        base: 459,
        ds: 198,
        dssm: 313,
        dsle: 291,
        dssxw: 333,
    },
    ImperialdramonFM: {
        base: 460,
        ds: 200,
        dssm: 315,
        dsle: 292,
        dssxw: 346,
    },
    ImperialdramonPM: {
        base: 461,
        ds: 201,
        dssm: 316,
        dsle: 293,
        dssxw: 347,
    },
    DukemonCM: {
        base: 462,
        ds: 208,
        dssm: 324,
        dsle: 294,
        dssxw: 340,
    },
    BeelzebumonBM: {
        base: 463,
        ds: 465,
        dssm: 392,
        dsle: 307,
        dssxw: 483,
    },
    Susanoomon: {
        base: 464,
        ds: 466,
        dssm: 367,
        dsle: 300,
        dssxw: 338,
    },
    ShineGreymonRM: {
        base: 465,
        ds: 467,
        dssm: 386,
        dsle: 304,
        dssxw: 351,
    },
    ShineGreymonBM: {
        base: 466,
        ds: 468,
        dssm: 385,
        dsle: 303,
        dssxw: 350,
    },
    MirageGaogamonBM: {
        base: 467,
        ds: 469,
        dssm: 387,
        dsle: 305,
        dssxw: 348,
    },
    RosemonBM: {
        base: 468,
        ds: 470,
        dssm: 393,
        dsle: 308,
        dssxw: 343,
    },
    RavemonBM: {
        base: 469,
        ds: 471,
        dssm: 388,
        dsle: 306,
        dssxw: 342,
    },
    Apocalymon: {
        base: 470,
        ds: 472,
        dssm: 351,
        dsle: 297,
        dssxw: 330,
    },
    BelialVamdemon: {
        base: 471,
        ds: 213,
        dssm: 333,
        dsle: 296,
        dssxw: 344,
    },
    Armagemon: {
        base: 472,
        ds: 473,
        dssm: 332,
        dsle: 295,
        dssxw: 329,
    },
    Valdurmon: {
        base: 473,
        ds: 237,
        dssm: 382,
        dsle: 302,
        dssxw: 332,
    },
    Aegisdramon: {
        base: 474,
        ds: 474,
        dssm: 477,
        dsle: 314,
        dssxw: 331,
    },
    Chaosdramon: {
        base: 475,
        ds: 475,
        dssm: 478,
        dsle: 482,
        dssxw: 334,
    },
    Chaosmon: {
        base: 476,
        ds: 476,
        dssm: 397,
        dsle: 309,
        dssxw: 335,
    },
    Qinglongmon: {
        base: 477,
        ds: 477,
        dssm: 479,
        dsle: 310,
        dssxw: 339,
    },
    Xuanwumon: {
        base: 478,
        ds: 478,
        dssm: 480,
        dsle: 313,
        dssxw: 336,
    },
    Baihumon: {
        base: 479,
        ds: 479,
        dssm: 481,
        dsle: 311,
        dssxw: 341,
    },
    Zhuqiaomon: {
        base: 480,
        ds: 480,
        dssm: 482,
        dsle: 312,
        dssxw: 337,
    },
    MoonMillenniumon: {
        base: 481,
        ds: 481,
        dssm: 371,
        dsle: 301,
        dssxw: 349,
    },
    ZeedMillenniumon: {
        base: 482,
        ds: 482,
        dssm: 355,
        dsle: 298,
        dssxw: 352,
    },
    ShoutmonX5S: {
        base: 483,
        ds: 483,
        dssm: 483,
        dsle: 483,
        dssxw: 392,
    },
}

const Bosses = {
    Ogremon: DataNames.Ogremon,
    BlackAgumon: DataNames.BlackAgumon,
    Arukenimon: DataNames.Arukenimon,
    DarkTyrannomon: DataNames.DarkTyrannomon,
    Pandamon: DataNames.Pandamon,
    PlatinumSukamon: DataNames.PlatinumSukamon,
    SkullGreymon: DataNames.SkullGreymon,
    TonosamaGekomon: DataNames.TonosamaGekomon,
    Devimon: DataNames.Devimon,
    Deramon: DataNames.Deramon,
    Jijimon: DataNames.Jijimon,
    Kimeramon: DataNames.Kimeramon,
    Qinglongmon: DataNames.Qinglongmon,
    Xuanwumon: DataNames.Xuanwumon,
    Baihumon: DataNames.Baihumon,
    MarineAngemon: DataNames.MarineAngemon,
    GrandLocomon: "GrandLocomon",
    Zhuqiaomon: DataNames.Zhuqiaomon,
    Armagemon: DataNames.Armagemon,
    ChronomonDM: "ChronomonDM",
    Leviamon: "Leviamon",
    Lilithmon: DataNames.Lilithmon,
    Demon: DataNames.Demon,
    Beelzebumon: DataNames.Beelzebumon,
    Barbamon: DataNames.Barbamon,
    LucemonFM: DataNames.LucemonFM,
    Belphemon: "Belphemon",
}

// TODO: Figure out if it's better to have a frozen array and access the story "Enums" as an array using keys and values reversed, or use the new proxy version
const Story = {
    ds: [
        Bosses.Ogremon,
        Bosses.BlackAgumon,
        SpecialValues.bronze,
        Bosses.Arukenimon,
        Bosses.SkullGreymon,
        SpecialValues.silver,
        Bosses.Deramon,
        Bosses.Jijimon,
        Bosses.Kimeramon,
        SpecialValues.gold,
        Bosses.GrandLocomon,
        SpecialValues.platinum,
        Bosses.Armagemon,
        Bosses.ChronomonDM,
        SpecialValues.king,
        Bosses.LucemonFM,
    ],
    dssm: {},
    dsle: {},
    dssxw: {},
}

// const StoryDS = Enum({
//     Ogremon: 0,
//     BlackAgumon: 1,
//     Bronze: 2,
//     Arukenimon: 3,
//     SkullGreymon: 4,
//     Silver: 5,
//     Deramon: 6,
//     Jijimon: 7,
//     Kimeramon: 8,
//     Gold: 9,
//     GrandLocomon: 10,
//     Platinum: 11,
//     Armagemon: 12,
//     ChronomonDM: 13,
//     King: 14,
//     LucemonFM: 15,
// })

// const StoryDSSM = Enum({

// })

// const StoryDSLE = Enum({

// })

// const StoryDSSXW = Enum({

// })

/*  MAP ENCOUNTERS
unlockRequirement: It's a story part that needs to be completed
connectsTo: Lists the area it connects to, and how many Digimon need to be defeated in the current area to open it
digimon requirements: Story completion, Quest completion or starter chosen
            dataName: "dataForest",
            name: "Data Forest",
            image: "",
            unlockRequirement: {
                story: -1,
            },
            areas: [
                {
                    name: "Area 1",
                    connectsTo: [
                        {
                            area: 1,
                            requirement: 5,
                        },
                    ],
                },
                {
                    name: "Area 2",
                    connectsTo: [
                        {
                            area: 0,
                        },
                        {
                            area: 2,
                            requirement: 5,
                        },
                    ],
                },
                {
                    name: "Boss Area",
                    connectsTo: [
                        {
                            area: 1,
                        },
                    ],
                },
            ],
            digimonPool: [
                {
                    digimon: DataNames.Poyomon,
                    level: 3,
                    foundIn: [0, 1],
                },
                {
                    digimon: DataNames.Koromon,
                    level: 3,
                    foundIn: [0, 1],
                    requirement: {
                        starter: DataNames.Koromon,
                    },
                },
                {
                    digimon: DataNames.Tsunomon,
                    level: 3,
                    foundIn: [0, 1],
                    requirement: {
                        starter: DataNames.Tsunomon,
                    },
                },
                {
                    digimon: DataNames.Tanemon,
                    level: 3,
                    foundIn: [0, 1],
                    requirement: {
                        starter: DataNames.Tanemon,
                    },
                },
                {
                    digimon: DataNames.Agumon,
                    level: 9,
                    foundIn: [1, 2],
                    requirement: {
                        story: Story.ds.Ogremon,
                        starter: DataNames.Koromon,
                    },
                },
                {
                    digimon: DataNames.Gabumon,
                    level: 9,
                    foundIn: [1, 2],
                    requirement: {
                        story: Story.ds.Ogremon,
                        starter: DataNames.Tsunomon,
                    },
                },
                {
                    digimon: DataNames.Palmon,
                    level: 9,
                    foundIn: [1, 2],
                    requirement: {
                        story: Story.ds.Ogremon,
                        starter: DataNames.Tanemon,
                    },
                },
                {
                    digimon: DataNames.Betamon,
                    level: 5,
                    foundIn: [1, 2],
                },
                {
                    digimon: DataNames.Goburimon,
                    level: 6,
                    foundIn: [1, 2],
                },
                {
                    digimon: DataNames.Ogremon,
                    level: 7,
                    foundIn: [1, 2],
                    requirement: {
                        story: Story.ds.Ogremon,
                    },
                },
            ],
*/

export const MapsList = {
    ds: {
        dataForest: {
            dataName: "dataForest",
            name: "Data Forest",
            image: "",
            areas: [
                {
                    name: "Area 1",
                    connectsTo: [
                        {
                            area: 1,
                        },
                    ],
                },
                {
                    name: "Area 2",
                    connectsTo: [
                        {
                            area: 0,
                        },
                        {
                            area: 2,
                        },
                    ],
                },
                {
                    name: "Area 3",
                    connectsTo: [
                        {
                            area: 1,
                        },
                    ],
                },
            ],
            digimonPool: [
                {
                    digimon: DataNames.Poyomon,
                    level: 3,
                    foundIn: [0, 1],
                },
                {
                    digimon: DataNames.Koromon,
                    level: 3,
                    foundIn: [0, 1],
                    requirement: {
                        starter: DataNames.Koromon,
                    },
                },
                {
                    digimon: DataNames.Tsunomon,
                    level: 3,
                    foundIn: [0, 1],
                    requirement: {
                        starter: DataNames.Tsunomon,
                    },
                },
                {
                    digimon: DataNames.Tanemon,
                    level: 3,
                    foundIn: [0, 1],
                    requirement: {
                        starter: DataNames.Tanemon,
                    },
                },
                {
                    digimon: DataNames.Agumon,
                    level: 9,
                    foundIn: [1, 2],
                    requirement: {
                        story: Bosses.Ogremon,
                        starter: DataNames.Koromon,
                    },
                },
                {
                    digimon: DataNames.Gabumon,
                    level: 9,
                    foundIn: [1, 2],
                    requirement: {
                        story: Bosses.Ogremon,
                        starter: DataNames.Tsunomon,
                    },
                },
                {
                    digimon: DataNames.Palmon,
                    level: 9,
                    foundIn: [1, 2],
                    requirement: {
                        story: Bosses.Ogremon,
                        starter: DataNames.Tanemon,
                    },
                },
                {
                    digimon: DataNames.Betamon,
                    level: 5,
                    foundIn: [1, 2],
                },
                {
                    digimon: DataNames.Goburimon,
                    level: 6,
                    foundIn: [1, 2],
                },
                {
                    digimon: DataNames.Ogremon,
                    level: 7,
                    foundIn: [2],
                    requirement: {
                        story: Bosses.Ogremon,
                    },
                },
            ],
        },
        trainingPeak: {
            dataName: DataNames.trainingPeak,
            name: "Training Peak",
            image: "",
            areas: [
                {
                    name: "Area 1",
                    connectsTo: [
                        {
                            area: 1,
                        },
                    ],
                },
            ],
            digimonPool: [],
        },
        steamyJungle: {
            dataName: DataNames.steamyJungle,
            name: "Steamy Jungle",
            image: "",
            areas: [],
            digimonPool: [],
        },
        sheerValley: {
            dataName: DataNames.sheerValley,
            name: "Sheer Valley",
            image: "",
            areas: [],
            digimonPool: [],
        },
        drainTunnel: {
            dataName: DataNames.drainTunnel,
            name: "Drain Tunnel",
            image: "",
            areas: [],
            digimonPool: [],
        },
        chromeMine: {
            dataName: DataNames.chromeMine,
            name: "Chrome Mine",
            image: "",
            areas: [],
            digimonPool: [],
        },
        packetSwamp: {
            dataName: DataNames.packetSwamp,
            name: "Packet Swamp",
            image: "",
            areas: [],
            digimonPool: [],
        },
        mangoveWoods: {
            dataName: DataNames.mangoveWoods,
            name: "Mangove Woods",
            image: "",
            areas: [],
            digimonPool: [],
        },
        ancientCanyon: {
            dataName: DataNames.ancientCanyon,
            name: "Ancient Canyon",
            image: "",
            areas: [],
            digimonPool: [],
        },
        junkFactory: {
            dataName: DataNames.junkFactory,
            name: "Junk Factory",
            image: "",
            areas: [],
            digimonPool: [],
        },
        skyPalace: {
            dataName: DataNames.skyPalace,
            name: "Sky Palace",
            image: "",
            areas: [],
            digimonPool: [],
        },
        tropicalIsles: {
            dataName: DataNames.tropicalIsles,
            name: "Tropical Isles",
            image: "",
            areas: [],
            digimonPool: [],
        },
        hardMountains: {
            dataName: DataNames.hardMountains,
            name: "Hard Mountains",
            image: "",
            areas: [],
            digimonPool: [],
        },
        underseaDrive: {
            dataName: DataNames.underseaDrive,
            name: "Undersea Drive",
            image: "",
            areas: [],
            digimonPool: [],
        },
        lavaRiver: {
            dataName: DataNames.lavaRiver,
            name: "Lava River",
            image: "",
            areas: [],
            digimonPool: [],
        },
        coreField: {
            dataName: DataNames.coreField,
            name: "Core Field",
            image: "",
            areas: [],
            digimonPool: [],
        },
        destroyedBelt: {
            dataName: DataNames.destroyedBelt,
            name: "Destroyed Belt",
            image: "",
            areas: [],
            digimonPool: [],
        },
        none: {
            dataName: DataNames.none,
            name: "Unknown",
            image: "",
            areas: [],
            digimonPool: [],
        },
    },
    dssm: {
        loginMountain: {
            name: "Login Mountain",
            image: "",
        },
        sunkenTunnel: {
            name: "Sunken Tunnel",
            image: "",
        },
        chipForest: {
            name: "Chip Forest",
            image: "",
        },
        thrillerRuins: {
            name: "Thriller Ruins",
            image: "",
        },
        limitValley: {
            name: "Limit Valley",
            image: "",
        },
        loopSwamp: {
            name: "Loop Swamp",
            image: "",
        },
        magnetMine: {
            name: "Magnet Mine",
            image: "",
        },
        taskCanyon: {
            name: "Task Canyon",
            image: "",
        },
        resistorJungle: {
            name: "Resistor Jungle",
            image: "",
        },
        highlightHaven: {
            name: "Highlight Haven",
            image: "",
        },
        shadowAbyss: {
            name: "Shadow Abyss",
            image: "",
        },
        processFactory: {
            name: "Process Factory",
            image: "",
        },
        macroSea: {
            name: "Macro Sea",
            image: "",
        },
        paletteAmazon: {
            name: "Palette Amazon",
            image: "",
        },
        proxyIsland: {
            name: "Proxy Island",
            image: "",
        },
        accessGlacier: {
            name: "Access Glacier",
            image: "",
        },
        chaosBrain: {
            name: "Chaos Brain",
            image: "",
        },
        transfield: {
            name: "Transfield",
            image: "",
        },
        none: {
            name: "Unknown",
            image: "",
        },
    },
    dsle: {
        accessGlacier: {
            name: "Access Glacier",
            image: "",
        },
        anglerTunnel: {
            name: "Angler Tunnel",
            image: "",
        },
        chipForest: {
            name: "Chip Forest",
            image: "",
        },
        chromeMine: {
            name: "Chrome Mine",
            image: "",
        },
        classDesert: {
            name: "Class Desert",
            image: "",
        },
        graboCave: {
            name: "Grabo Cave",
            image: "",
        },
        graboCentral: {
            name: "Grabo Central",
            image: "",
        },
        graboMarine: {
            name: "Grabo Marine",
            image: "",
        },
        heritageCape: {
            name: "Heritage Cape",
            image: "",
        },
        labelForest: {
            name: "Label Forest",
            image: "",
        },
        limitValley: {
            name: "Limit Valley",
            image: "",
        },
        loginMountain: {
            name: "Login Mountain",
            image: "",
        },
        loopSwamp: {
            name: "Loop Swamp",
            image: "",
        },
        magnetMine: {
            name: "Magnet Mine",
            image: "",
        },
        northCave: {
            name: "North Cave",
            image: "",
        },
        northCity: {
            name: "North City",
            image: "",
        },
        northMarine: {
            name: "North Marine",
            image: "",
        },
        packetCoast: {
            name: "Packet Coast",
            image: "",
        },
        palaceLaboratory: {
            name: "Palace Laboratory",
            image: "",
        },
        paletteAmazon: {
            name: "Palette Amazon",
            image: "",
        },
        patchPrairie: {
            name: "Patch Prairie",
            image: "",
        },
        pixelDesert: {
            name: "Pixel Desert",
            image: "",
        },
        proxyIsland: {
            name: "Proxy Island",
            image: "",
        },
        registerJungle: {
            name: "Register Jungle",
            image: "",
        },
        riskCave: {
            name: "Risk Cave",
            image: "",
        },
        riskFactory: {
            name: "Risk Factory",
            image: "",
        },
        shadowHell: {
            name: "Shadow Hell",
            image: "",
        },
        southCave: {
            name: "South Cave",
            image: "",
        },
        southCity: {
            name: "South City",
            image: "",
        },
        taskCanyon: {
            name: "Task Canyon",
            image: "",
        },
        thrillerRuins: {
            name: "Thriller Ruins",
            image: "",
        },
        wizardTemple: {
            name: "Wizard Temple",
            image: "",
        },
        none: {
            name: "Unknown",
            image: "",
        },
    },
    dssxw: {
        crystalCave: {
            name: "Crystal Cave",
            image: "",
        },
        crystalMine: {
            name: "Crystal Mine",
            image: "",
        },
        crystalVolcano: {
            name: "Crystal Volcano",
            image: "",
        },
        darknessTunnel: {
            name: "Darkness Tunnel",
            image: "",
        },
        digitalSpaceEast: {
            name: "Digital Space (East)",
            image: "",
        },
        digitalSpaceNorth: {
            name: "Digital Space (North)",
            image: "",
        },
        digitalSpaceSouth: {
            name: "Digital Space (South)",
            image: "",
        },
        endlessCoast: {
            name: "Endless Coast",
            image: "",
        },
        endlessSea: {
            name: "Endless Sea",
            image: "",
        },
        flowerMeadow: {
            name: "Flower Meadow",
            image: "",
        },
        fortYard: {
            name: "Fort Yard",
            image: "",
        },
        knuckleCoast: {
            name: "Knuckle Coast",
            image: "",
        },
        lostSpace: {
            name: "Lost Space",
            image: "",
        },
        papyrusDesert: {
            name: "Papyrus Desert",
            image: "",
        },
        skullIceberg: {
            name: "Skull Iceberg",
            image: "",
        },
        spiderwebRuins: {
            name: "Spiderweb Ruins",
            image: "",
        },
        spinningAmazon: {
            name: "Spinning Amazon",
            image: "",
        },
        stealthValley: {
            name: "Stealth Valley",
            image: "",
        },
        none: {
            name: "Unknown",
            image: "",
        },
    },
}

// Holds the information for the next story progress
// When the type is "boss", the "map" and "area" indicate where said boss spawns. While this story is active, no wild Digimon will spawn in that area
// - unlocks: if beating this part of the story unlocks a new area. Some story parts don't unlock new areas, but add new Digimon to old areas
export const GameProgress = {
    ds: [
        { type: SpecialValues.defeat, map: MapsList.ds.dataForest.dataName, area: 0, amount: 5, unlocks: { map: MapsList.ds.dataForest.dataName, area: 1 } },
        { type: SpecialValues.defeat, map: MapsList.ds.dataForest.dataName, area: 1, amount: 5, unlocks: { map: MapsList.ds.dataForest.dataName, area: 2 } },
        { type: SpecialValues.bosses, bosses: [{ dataName: Bosses.Ogremon, level: 7 }], map: MapsList.ds.dataForest.dataName, area: 2, unlocks: { map: MapsList.ds.trainingPeak.dataName, area: 0 } },
        { type: SpecialValues.defeat, map: MapsList.ds.trainingPeak.dataName, area: 0, amount: 10, unlocks: { map: MapsList.ds.trainingPeak.dataName, area: 1 } },
    ],
    dssm: [

    ],
    dsle: [

    ],
    dssxw: [

    ]
};

// TODO: Add Fusion and Armor evolution to sunburst/moonlight Digimon

// TODO: Check sunburst/moonlight locations

export const DigimonList = {
    //#region Baby
    Koromon: {
        species: [Species.DRG],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
                special: SpecialValues.starter,
            },
            evolutions: [
                {
                    level: 6,
                    evolvesTo: DataNames.Agumon
                },
                {
                    level: 7,
                    exp: [{
                        type: Species.MAC,
                        amount: 3,
                    }],
                    evolvesTo: DataNames.ToyAgumon
                },
                {
                    level: 20,
                    obtained: [{
                        digimon: DataNames.DotAgumon
                    }],
                    evolvesTo: DataNames.DotAgumon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 7,
                    evolvesTo: DataNames.Agumon
                },
                {
                    level: 30,
                    obtained: [{
                        digimon: DataNames.DotAgumon
                    }],
                    evolvesTo: DataNames.DotAgumon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.heritageCape,
            },
            drops: [
                {
                    item: DataNames.Greymon,
                    chance: 10,
                }
            ],
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Agumon
                },
                {
                    level: 21,
                    obtained: [{
                        digimon: DataNames.Agumon
                    }],
                    evolvesTo: DataNames.DotAgumon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.both,
            },
            fusions: [DataNames.WarGreymon, DataNames.ShineGreymonBM],
        },
    },
    Tsunomon: {
        species: [Species.BST],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
                special: SpecialValues.starter,
            },
            evolutions: [
                {
                    level: 7,
                    evolvesTo: DataNames.Gabumon
                },
                {
                    level: 8,
                    evolvesTo: DataNames.Gaomon
                },
                {
                    level: 12,
                    exp: [{
                        type: Species.DAR,
                        amount: 70,
                    }],
                    evolvesTo: DataNames.Dracmon
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 8,
                    evolvesTo: DataNames.Gabumon
                },
                {
                    level: 12,
                    evolvesTo: DataNames.Goburimon
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.heritageCape,
            },
            drops: [
                {
                    item: DataNames.Garurumon,
                    chance: 10,
                }
            ],
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Gabumon
                },
                {
                    level: 9,
                    evolvesTo: DataNames.Goburimon
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
    },
    Tanemon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
                special: SpecialValues.starter,
            },
            evolutions: [
                {
                    level: 7,
                    evolvesTo: DataNames.Palmon
                },
                {
                    level: 8,
                    evolvesTo: DataNames.Lalamon
                },
                {
                    level: 10,
                    obtained: [{
                        type: Species.HOL,
                        amount: 15,
                    }],
                    evolvesTo: DataNames.Renamon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 8,
                    evolvesTo: DataNames.Palmon
                },
                {
                    level: 14,
                    exp: [{
                        type: Species.ANY,
                        amount: 110,
                    }],
                    evolvesTo: DataNames.Aruraumon
                },
                {
                    level: 12,
                    obtained: [{
                        type: Species.INS,
                        amount: 10,
                    }],
                    evolvesTo: DataNames.Floramon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.heritageCape,
            },
            drops: [
                {
                    item: DataNames.Togemon,
                    chance: 10,
                }
            ],
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Palmon
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Floramon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
    },
    Poyomon: {
        species: [Species.AQU],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Gomamon
                },
                {
                    level: 15,
                    evolvesTo: DataNames.Ganimon
                },
                {
                    level: 22,
                    exp: [{
                        type: Species.AQU,
                        amount: 100,
                    }],
                    evolvesTo: DataNames.Kamemon
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Kamemon
                },
                {
                    level: 11,
                    exp: [{
                        type: Species.AQU,
                        amount: 10,
                    }],
                    evolvesTo: DataNames.Gomamon
                },
                {
                    level: 16,
                    evolvesTo: DataNames.Ganimon
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loopSwamp,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Gomamon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Syakomon
                },
                {
                    level: 9,
                    evolvesTo: DataNames.Kamemon
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
    },
    Tokomon: {
        species: [Species.BRD, Species.HOL],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
            evolutions: [
                {
                    level: 5,
                    evolvesTo: DataNames.Patamon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Falcomon
                },
                {
                    level: 20,
                    obtained: [{
                        digimon: DataNames.DotFalcomon
                    }],
                    evolvesTo: DataNames.DotFalcomon
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 8,
                    evolvesTo: DataNames.Patamon
                },
                {
                    level: 12,
                    evolvesTo: DataNames.Falcomon
                },
                {
                    level: 30,
                    obtained: [{
                        digimon: DataNames.DotFalcomon
                    }],
                    evolvesTo: DataNames.DotFalcomon
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.riskFactory,
            },
            drops: [
                {
                    item: DataNames.PurityDM,
                    chance: 50,
                },
                {
                    item: DataNames.KindnessDM,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Patamon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Piyomon
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Hawkmon
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
    },
    Puttomon: {
        species: [Species.HOL],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Plotmon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Kudamon
                },
                {
                    level: 26,
                    evolvesTo: DataNames.PawnChessmonW
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 7,
                    evolvesTo: DataNames.Plotmon
                },
                {
                    level: 15,
                    obtained: [{
                        digimon: DataNames.Kudamon
                    }],
                    evolvesTo: DataNames.Kudamon
                },
                {
                    level: 11,
                    exp: [{
                        type: Species.MAC,
                        amount: 20,
                    }],
                    evolvesTo: DataNames.PawnChessmonW
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Plotmon
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Renamon
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
    },
    Chicomon: {
        species: [Species.DRG],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 10,
                    exp: [{
                        type: Species.DRG,
                        amount: 30,
                    }],
                    evolvesTo: DataNames.Veemon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.YukiAgumon
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Veemon
                },
                {
                    level: 15,
                    exp: [{
                        type: Species.DRG,
                        amount: 30,
                    }],
                    evolvesTo: DataNames.Monodramon
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Veemon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Betamon
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
    },
    Minomon: {
        species: [Species.INS],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 13,
                    evolvesTo: DataNames.Tentomon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Wormmon
                },
                {
                    level: 7,
                    evolvesTo: DataNames.Kunemon
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dsle: {
            location: {
                // Added specifically for DSM, not found anywhere in the original games
                area: MapsList.dsle.labelForest,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Tentomon
                },
                {
                    level: 9,
                    evolvesTo: DataNames.Wormmon
                },
                {
                    level: 11,
                    digiPlates: [DataNames.Kokuwamon],
                    evolvesTo: DataNames.Kokuwamon
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
    },
    Gigimon: {
        species: [Species.DRG],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 11,
                    obtained: [{
                        digimon: DataNames.Guilmon,
                    }],
                    evolvesTo: DataNames.Guilmon
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.packetCoast,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Guilmon
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
    },
    Gummymon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Terriermon
                },
                {
                    level: 16,
                    exp: [{
                        type: Species.HOL,
                        amount: 47,
                    }],
                    evolvesTo: DataNames.Bakumon
                },
                {
                    level: 12,
                    evolvesTo: DataNames.Renamon
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chipForest,
            },
            drops: [
                {
                    item: DataNames.Gargomon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 11,
                    digiPlates: [DataNames.Armadimon],
                    evolvesTo: DataNames.Armadimon
                },
                {
                    level: 9,
                    evolvesTo: DataNames.Terriermon
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
    },
    Kokomon: {
        species: [Species.DAR],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Lopmon
                },
            ],
            evolutionTree: DataNames.Kokomon,
        },
    },
    Wanyamon: {
        species: [Species.BST],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 7,
                    evolvesTo: DataNames.Gaomon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Kumamon
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.patchPrairie,
            },
            evolutions: [
                {
                    level: 11,
                    evolvesTo: DataNames.Gaomon
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
    },
    Budmon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage1,
        dssm: {
            location: {
                // Added specifically for DSM, not found anywhere in the original games
                area: MapsList.dssm.chipForest,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 7,
                    evolvesTo: DataNames.Lalamon
                },
                {
                    level: 10,
                    exp: [{
                        type: Species.INS,
                        amount: 13,
                    }],
                    evolvesTo: DataNames.DoKunemon
                },
                {
                    level: 13,
                    evolvesTo: DataNames.Mushroomon
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Lalamon
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
    },
    Botamon: {
        species: [Species.DAR, Species.DRG],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins, // TODO: Found in the temple area
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 7,
                    evolvesTo: DataNames.BlackAgumon
                },
                {
                    level: 13,
                    exp: [{
                        type: Species.DAR,
                        amount: 12,
                    }],
                    evolvesTo: DataNames.Candlemon
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.BlackAgumon
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
    },
    Pagumon: {
        species: [Species.DAR],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.PicoDevimon
                },
                {
                    level: 15,
                    exp: [{
                        type: Species.DAR,
                        amount: 49,
                    }],
                    evolvesTo: DataNames.Impmon
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loginMountain,
            },
            drops: [
                {
                    item: DataNames.Devimon,
                    chance: 1,
                },
                {
                    item: DataNames.PicoDevimonW2,
                    chance: 20,
                }
            ],
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.PicoDevimon
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
    },
    Kuramon: {
        species: [Species.DAR],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 8,
                    exp: [{
                        type: Species.DAR,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Keramon
                },
                {
                    level: 8,
                    evolvesTo: DataNames.Guilmon
                },
                {
                    level: 7,
                    evolvesTo: DataNames.Muchomon
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 8,
                    evolvesTo: DataNames.Tsukaimon
                },
            ],
            dna: [DataNames.Tsumemon],
            evolutionTree: DataNames.Kuramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.magnetMine,
            },
            drops: [
                {
                    item: DataNames.Wizardmon,
                    chance: 10,
                }
            ],
            evolutions: [
                {
                    level: 11,
                    evolvesTo: DataNames.Impmon
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.IceDevimon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.IceDevimon, DataNames.Bakemon, DataNames.Armagemon],
        },
    },
    Tsumemon: {
        species: [Species.DAR],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Dracmon
                },
                {
                    level: 18,
                    obtained: [{
                        digimon: DataNames.Keramon
                    }],
                    exp: [{
                        type: Species.DAR,
                        amount: 45,
                    }],
                    evolvesTo: DataNames.Keramon
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.northCave,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Keramon
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Dracmon
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
    },
    Kapurimon: {
        species: [Species.MAC],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 10,
                    exp: [{
                        type: Species.MAC,
                        amount: 25,
                    }],
                    evolvesTo: DataNames.Hagurumon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.PawnChessmonB
                },
                {
                    level: 8,
                    exp: [{
                        type: Species.HOL,
                        amount: 20,
                    }],
                    evolvesTo: DataNames.Kotemon
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Hagurumon
                },
                {
                    level: 12,
                    evolvesTo: DataNames.Kotemon
                },
                {
                    level: 11,
                    exp: [{
                        type: Species.MAC,
                        amount: 20,
                    }],
                    evolvesTo: DataNames.PawnChessmonB
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.magnetMine,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Gotsumon
                },
                {
                    level: 9,
                    evolvesTo: DataNames.ToyAgumon
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Hagurumon
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
    },
    Dorimon: {
        species: [Species.BST, Species.DRG],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 10,
                    exp: [{
                        type: Species.BST,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Dorumon
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Armadimon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Aruraumon
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 8,
                    exp: [{
                        type: Species.BST,
                        amount: 10,
                    }],
                    evolvesTo: DataNames.Dorumon
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Armadimon
                },
                {
                    level: 14,
                    evolvesTo: DataNames.Shamamon
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Monodramon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Dorumon
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
    },
    Sunmon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 11,
                    evolvesTo: DataNames.Coronamon
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.Apollomon,
                    chance: 75,
                }
            ],
            evolutions: [
                {
                    level: 11,
                    evolvesTo: DataNames.Kudamon,
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Coronamon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
    },
    Moonmon: {
        species: [Species.DAR, Species.BST],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Lunamon
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chromeMine,
            },
            drops: [
                {
                    item: DataNames.Dianamon,
                    chance: 75,
                }
            ],
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Lopmon
                },
                {
                    level: 10,
                    evolvesTo: DataNames.Lunamon
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
    },
    Chicchimon: {
        species: [Species.HOL, Species.BRD],
        stage: Stage.stage1,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 10,
                    exp: [{
                        type: Species.AQU,
                        amount: 10,
                    }],
                    evolvesTo: DataNames.Penmon,
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Muchomon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 10,
                    evolvesTo: DataNames.Falcomon
                },
                {
                    level: 21,
                    obtained: [{
                        digimon: DataNames.Falcomon
                    }],
                    evolvesTo: DataNames.DotFalcomon
                },
                {
                    level: 11,
                    evolvesTo: DataNames.Hyokomon
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
    },
    Culumon: {
        species: [Species.HOL],
        stage: Stage.stage1,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Culumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Culumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 9,
                    evolvesTo: DataNames.Plotmon
                },
            ],
            evolutionTree: DataNames.Culumon,
        },
        dssxw: {
            digiScores: [DataNames.CulumonHeart, DataNames.CulumonSpade],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Pickmon: {
        species: [Species.MAC],
        stage: Stage.stage1,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
        },
    },
    Bombmon: {
        species: [Species.MAC],
        stage: Stage.stage1,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.blue,
            },
        },
    },
    Chikurimon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
        },
    },
    //#endregion

    //#region Child
    Agumon: {
        species: [Species.DRG],
        stage: Stage.stage2,
        ds: {
            sprite: "",
            location: {
                area: MapsList.ds.dataForest,
                special: SpecialValues.starter,
            },
            evolutions: [
                {
                    level: 15,
                    evolvesTo: DataNames.Greymon
                },
                {
                    level: 17,
                    evolvesTo: DataNames.GeoGreymon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            sprite: "",
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 18,
                    exp: [{
                        type: Species.DRG,
                        amount: 28,
                    }],
                    evolvesTo: DataNames.Greymon
                },
                {
                    level: 20,
                    evolvesTo: DataNames.GeoGreymon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            sprite: "_2",
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 17,
                    digiPlates: [DataNames.Greymon],
                    evolvesTo: DataNames.Greymon
                },
                {
                    level: 19,
                    digiPlates: [DataNames.Greymon],
                    evolvesTo: DataNames.GeoGreymon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            sprite: "_2",
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.blue,
            },
            fusions: [DataNames.Agunimon, DataNames.Greymon, DataNames.WarGreymon, DataNames.ShoutmonSpade],
        },
    },
    Gabumon: {
        species: [Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
                special: SpecialValues.starter,
            },
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.Garurumon
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Garurumon
                },
                {
                    level: 17,
                    exp: [{
                        type: Species.BST,
                        amount: 35,
                    }],
                    evolvesTo: DataNames.JungleMojyamon
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 17,
                    digiPlates: [DataNames.Garurumon],
                    evolvesTo: DataNames.Garurumon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.blue,
            },
            fusions: [DataNames.KabuterimonSpade, DataNames.Gaogamon, DataNames.Garurumon, DataNames.Greymon, DataNames.MetalGarurumon],
        },
    },
    Piyomon: {
        species: [Species.BRD],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 24,
                    evolvesTo: DataNames.Birdramon
                },
            ],
            evolutionTree: DataNames.Piyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Birdramon
                },
                {
                    level: 18,
                    exp: [{
                        type: Species.BRD,
                        amount: 21,
                    }],
                    evolvesTo: DataNames.Saberdramon
                },
            ],
            evolutionTree: DataNames.Piyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.patchPrairie,
            },
            drops: [
                {
                    item: DataNames.Birdramon,
                    chance: 25,
                }
            ],
            evolutions: [
                {
                    level: 21,
                    evolvesTo: DataNames.Kokatorimon,
                },
                {
                    level: 17,
                    digiPlates: [DataNames.Birdramon],
                    evolvesTo: DataNames.Birdramon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.both,
            },
            fusions: [DataNames.Aquilamon, DataNames.Angemon],
        },
    },
    Palmon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
                special: SpecialValues.starter,
            },
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.Togemon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Togemon,
                },
                {
                    level: 22,
                    exp: [{
                        type: Species.BST,
                        amount: 90,
                    }],
                    evolvesTo: DataNames.MoriShellmon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 17,
                    digiPlates: [DataNames.Togemon],
                    evolvesTo: DataNames.Togemon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.both,
            },
            fusions: [DataNames.Ankylomon, DataNames.ArgomonUltimate],
        },
    },
    Tentomon: {
        species: [Species.INS],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.Kabuterimon
                },
                {
                    level: 13,
                    evolvesTo: DataNames.Kuwagamon
                },
            ],
            evolutionTree: DataNames.Tentomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 21,
                    exp: [{
                        type: Species.INS,
                        amount: 41,
                    }],
                    evolvesTo: DataNames.Kabuterimon
                },
                {
                    level: 18,
                    exp: [{
                        type: Species.INS,
                        amount: 25,
                    }],
                    evolvesTo: DataNames.SandYanmamon
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.labelForest,
            },
            drops: [
                {
                    item: DataNames.TentomonW,
                    chance: 20,
                }
            ],
            evolutions: [
                {
                    level: 17,
                    digiPlates: [DataNames.Kabuterimon],
                    evolvesTo: DataNames.Kabuterimon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.both,
            },
            fusions: [DataNames.KabuterimonSpade, DataNames.KabuterimonHeart, DataNames.Stingmon],
        },
    },
    Gomamon: {
        species: [Species.AQU, Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 22,
                    evolvesTo: DataNames.Ikkakumon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 21,
                    evolvesTo: DataNames.Ikkakumon
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loopSwamp,
            },
            evolutions: [
                {
                    level: 17,
                    evolvesTo: DataNames.Ikkakumon,
                },
                {
                    level: 22,
                    digiPlates: [DataNames.Yukidarumon],
                    evolvesTo: DataNames.Yukidarumon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.Rukamon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Garurumon, DataNames.Rukamon],
        },
    },
    Patamon: {
        species: [Species.BRD, Species.HOL],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
            evolutions: [
                {
                    level: 13,
                    exp: [{
                        type: Species.HOL,
                        amount: 3,
                    }],
                    evolvesTo: DataNames.Angemon
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.HOL,
                        amount: 30,
                    }],
                    evolvesTo: DataNames.Angemon
                },
            ],
            armor: [DataNames.Pipismon, DataNames.Ponchomon, DataNames.Prairiemon],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.patchPrairie,
            },
            drops: [
                {
                    item: DataNames.Angemon,
                    chance: 25,
                },
                {
                    item: DataNames.PatamonW2,
                    chance: 20,
                }
            ],
            evolutions: [
                {
                    level: 22,
                    digiPlates: [DataNames.Angemon],
                    evolvesTo: DataNames.Angemon,
                },
                {
                    level: 24,
                    digiPlates: [DataNames.KindnessDM],
                    evolvesTo: DataNames.Prairiemon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Airdramon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.Angemon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.CulumonSpade, DataNames.IceDevimon, DataNames.Airdramon, DataNames.Angemon],
        },
    },
    Plotmon: {
        species: [Species.HOL],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 23,
                    evolvesTo: DataNames.Tailmon
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.Tailmon
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.packetCoast,
            },
            drops: [
                {
                    item: DataNames.Tailmon,
                    chance: 25,
                }
            ],
            evolutions: [
                {
                    level: 17,
                    digiPlates: [DataNames.Tailmon],
                    evolvesTo: DataNames.Tailmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Seasarmon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.Tailmon,
                    chance: 50,
                },
                {
                    digiScore: DataNames.Kabukimon,
                    chance: 20,
                },
            ],
            fusions: [DataNames.Seasarmon, DataNames.Tailmon, DataNames.LeomonHeart, DataNames.ShoutmonHeart],
        },
    },
    Veemon: {
        species: [Species.DRG],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.ExVeemon
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    evolvesTo: DataNames.ExVeemon
                },
                {
                    level: 18,
                    exp: [{
                        type: Species.DRG,
                        amount: 34,
                    }],
                    evolvesTo: DataNames.Veedramon
                },
            ],
            armor: [DataNames.Fladramon, DataNames.Magnamon],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loginMountain,
            },
            drops: [
                {
                    item: DataNames.Veedramon,
                    chance: 25,
                }
            ],
            evolutions: [
                {
                    level: 23,
                    digiPlates: [DataNames.ExVeemon],
                    evolvesTo: DataNames.ExVeemon,
                },
                {
                    level: 18,
                    digiPlates: [DataNames.Veedramon],
                    evolvesTo: DataNames.Veedramon,
                },
                {
                    level: 24,
                    digiPlates: [DataNames.MiraclesDM],
                    evolvesTo: DataNames.Magnamon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.ExVeemon,
                    chance: 50,
                },
                {
                    digiScore: DataNames.Magnamon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Airdramon, DataNames.ExVeemon, DataNames.Paildramon, DataNames.Magnamon, DataNames.ShoutmonSpade],
        },
    },
    Wormmon: {
        species: [Species.INS],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutions: [
                {
                    level: 15,
                    evolvesTo: DataNames.Stingmon,
                },
            ],
            evolutionTree: DataNames.Wormmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    evolvesTo: DataNames.Stingmon
                },
                {
                    level: 19,
                    evolvesTo: DataNames.Snimon
                },
            ],
            armor: [DataNames.Kongoumon, DataNames.Owlmon, DataNames.Shadramon],
            evolutionTree: DataNames.Minomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chipForest,
            },
            drops: [
                {
                    item: DataNames.Stingmon,
                    chance: 50,
                },
                {
                    item: DataNames.WormmonW,
                    chance: 20,
                }
            ],
            evolutions: [
                {
                    level: 19,
                    digiPlates: [DataNames.Stingmon],
                    evolvesTo: DataNames.Stingmon,
                },
                {
                    level: 16,
                    evolvesTo: DataNames.Dokugumon,
                },
                {
                    level: 24,
                    digiPlates: [DataNames.CourageDM1],
                    evolvesTo: DataNames.Shadramon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Stingmon,
                    chance: 50,
                },
                {
                    digiScore: DataNames.Dinobeemon,
                    chance: 20,
                },
            ],
            fusions: [DataNames.CulumonSpade, DataNames.Stingmon, DataNames.Dinobeemon],
        },
    },
    Hawkmon: {
        species: [Species.BRD],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 14,
                    evolvesTo: DataNames.Aquilamon
                },
            ],
            evolutionTree: DataNames.Hawkmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 20,
                    evolvesTo: DataNames.Aquilamon
                },
            ],
            armor: [DataNames.Allomon, DataNames.Shurimon, DataNames.Toucanmon],
            evolutionTree: DataNames.Hawkmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loginMountain,
            },
            drops: [
                {
                    item: DataNames.Aquilamon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 19,
                    digiPlates: [DataNames.Aquilamon],
                    evolvesTo: DataNames.Aquilamon,
                },
                {
                    level: 24,
                    digiPlates: [DataNames.PurityDM],
                    evolvesTo: DataNames.Shurimon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Aquilamon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Aquilamon, DataNames.Tyrannomon, DataNames.Buraimon],
        },
    },
    Armadimon: {
        species: [Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.Ankylomon
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    exp: [{
                        type: Species.BST,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Ankylomon
                },
                {
                    level: 19,
                    evolvesTo: DataNames.NiseDrimogemon
                },
            ],
            armor: [DataNames.Kenkimon, DataNames.Seahomon],
            evolutionTree: DataNames.Dorimon,
        },
        dsle: {
            platesRequired: [DataNames.Armadimon],
            location: {
                area: MapsList.dsle.loginMountain,
            },
            drops: [
                {
                    item: DataNames.Armadimon,
                    chance: 100,
                },
                {
                    item: DataNames.FriendshipDM,
                    chance: 20,
                },
            ],
            evolutions: [
                {
                    level: 20,
                    digiPlates: [DataNames.Ankylomon],
                    evolvesTo: DataNames.Ankylomon,
                },
                {
                    level: 24,
                    digiPlates: [DataNames.FriendshipDM],
                    evolvesTo: DataNames.Kenkimon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.blue,
            },
            fusions: [DataNames.Ankylomon, DataNames.Minotarumon],
        },
    },
    Guilmon: {
        species: [Species.DRG],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.sheerValley,
            },
            evolutions: [
                {
                    level: 25,
                    exp: [{
                        type: Species.DRG,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Growlmon
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 21,
                    obtained: [{
                        digimon: DataNames.Guilmon,
                    }],
                    evolvesTo: DataNames.Growlmon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.DRG,
                        amount: 34,
                    }],
                    evolvesTo: DataNames.Tyrannomon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.MegaloGrowlmon,
                    chance: 20,
                }
            ],
            evolutions: [
                {
                    level: 16,
                    evolvesTo: DataNames.Tyrannomon,
                },
                {
                    level: 19,
                    evolvesTo: DataNames.Growlmon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Growlmon,
                    chance: 50,
                },
                {
                    digiScore: DataNames.Tyrannomon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Kyubimon, DataNames.Growlmon, DataNames.Tyrannomon, DataNames.Raptordramon, DataNames.DukemonHeart, DataNames.ShoutmonHeart],
        },
    },
    Renamon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.sheerValley,
            },
            evolutions: [
                {
                    level: 20,
                    exp: [{
                        type: Species.HOL,
                        amount: 100,
                    }],
                    evolvesTo: DataNames.Kyubimon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    evolvesTo: DataNames.Kyubimon
                },
                {
                    level: 25,
                    exp: [{
                        type: Species.HOL,
                        amount: 70,
                    }],
                    evolvesTo: DataNames.Sorcerymon
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.Kyubimon,
                    chance: 50,
                },
                {
                    item: DataNames.CourageDM2,
                    chance: 20,
                },
            ],
            evolutions: [
                {
                    level: 20,
                    digiPlates: [DataNames.Kyubimon],
                    evolvesTo: DataNames.Kyubimon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Kyubimon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Kyubimon, DataNames.Hanumon, DataNames.Sakuyamon],
        },
    },
    Terriermon: {
        species: [Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutions: [
                {
                    level: 14,
                    evolvesTo: DataNames.Gargomon
                },
            ],
            evolutionTree: DataNames.Terriermon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 20,
                    exp: [{
                        type: Species.BST,
                        amount: 48,
                    }],
                    evolvesTo: DataNames.Gargomon
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 18,
                    digiPlates: [DataNames.Gargomon],
                    evolvesTo: DataNames.Gargomon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Gargomon,
                    chance: 50,
                },
                {
                    digiScore: DataNames.LeomonHeart,
                    chance: 25,
                },
            ],
            fusions: [DataNames.CulumonHeart, DataNames.Gargomon, DataNames.Growlmon, DataNames.LeomonHeart, DataNames.SaintGargomon],
        },
    },
    Lopmon: {
        species: [Species.DAR, Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutions: [
                {
                    level: 16,
                    evolvesTo: DataNames.Wizardmon
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 29,
                    exp: [{
                        type: Species.DAR,
                        amount: 180,
                    }],
                    evolvesTo: DataNames.Wendimon,
                },
                {
                    level: 20,
                    exp: [{
                        type: Species.MAC,
                        amount: 48,
                    }],
                    evolvesTo: DataNames.Centalmon,
                },
            ],
            evolutionTree: DataNames.Kokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 16,
                    evolvesTo: DataNames.Wendimon,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.red,
            },
            fusions: [DataNames.CulumonHeart, DataNames.Gargomon, DataNames.Seasarmon, DataNames.Lekismon],
        },
    },
    Impmon: {
        species: [Species.DAR],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutions: [
                {
                    level: 16,
                    exp: [{
                        type: Species.DAR,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Evilmon
                },
                {
                    level: 17,
                    evolvesTo: DataNames.Gokimon
                },
                {
                    level: 31,
                    exp: [{
                        type: Species.HOL,
                        amount: 1,
                    }],
                    evolvesTo: DataNames.Sorcerymon
                },
            ],
            evolutionTree: DataNames.Impmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    exp: [{
                        type: Species.DAR,
                        amount: 95,
                    }],
                    evolvesTo: DataNames.Evilmon,
                },
                {
                    level: 25,
                    exp: [{
                        type: Species.DAR,
                        amount: 70,
                    }],
                    evolvesTo: DataNames.Wizardmon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            drops: [
                {
                    item: DataNames.Beelzebumon,
                    chance: 100,
                }
            ],
            evolutions: [
                {
                    level: 17,
                    digiPlates: [DataNames.Wizardmon],
                    evolvesTo: DataNames.Wizardmon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            sprite: "_2",
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Beelzebumon,
                    chance: 5,
                },
            ],
            fusions: [DataNames.Devimon, DataNames.Beelzebumon, DataNames.ShoutmonHeart],
        },
    },
    Lalamon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Sunflowmon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 18,
                    exp: [{
                        type: Species.INS,
                        amount: 38,
                    }],
                    evolvesTo: DataNames.Sunflowmon
                },
                {
                    level: 22,
                    evolvesTo: DataNames.RedVegiemon
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chipForest,
            },
            drops: [
                {
                    item: DataNames.Sunflowmon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 17,
                    digiPlates: [DataNames.Sunflowmon],
                    evolvesTo: DataNames.Sunflowmon,
                },
                {
                    level: 21,
                    digiPlates: [DataNames.Igamon],
                    evolvesTo: DataNames.Igamon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.RosemonBM,
                    chance: 2,
                },
            ],
            fusions: [DataNames.RosemonBM],
        },
    },
    Gaomon: {
        species: [Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Gaogamon
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 17,
                    exp: [{
                        type: Species.BST,
                        amount: 25,
                    }],
                    evolvesTo: DataNames.Gaogamon
                },
                {
                    level: 28,
                    evolvesTo: DataNames.Leomon
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.labelForest,
            },
            evolutions: [
                {
                    level: 24,
                    digiPlates: [DataNames.Leomon],
                    evolvesTo: DataNames.Leomon,
                },
                {
                    level: 18,
                    digiPlates: [DataNames.Gargomon],
                    evolvesTo: DataNames.Gargomon,
                },
                {
                    level: 18,
                    evolvesTo: DataNames.Gaogamon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Gaogamon,
                    chance: 50,
                },
                {
                    digiScore: DataNames.LeomonSpade,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Gaogamon, DataNames.LeomonSpade, DataNames.MirageGaogamonBM],
        },
    },
    Falcomon: {
        species: [Species.BRD],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 20,
                    evolvesTo: DataNames.Peckmon
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 20,
                    evolvesTo: DataNames.Peckmon
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 17,
                    evolvesTo: DataNames.Peckmon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.blue,
            },
            fusions: [DataNames.Firamon, DataNames.RavemonBM],
        },
    },
    PawnChessmonB: {
        species: [Species.MAC],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutions: [
                {
                    level: 20,
                    evolvesTo: DataNames.Hookmon
                },
                {
                    level: 19,
                    evolvesTo: DataNames.PlatinumSukamon
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 21,
                    evolvesTo: DataNames.KnightChessmonB
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
    },
    PawnChessmonW: {
        species: [Species.MAC],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 21,
                    evolvesTo: DataNames.KnightChessmonW
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.blue,
            },
            fusions: [DataNames.Ankylomon],
        },
    },
    Kudamon: {
        species: [Species.HOL],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 24,
                    evolvesTo: DataNames.Reppamon
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 27,
                    exp: [{
                        type: Species.HOL,
                        amount: 80,
                    }],
                    evolvesTo: DataNames.Reppamon
                },
                {
                    level: 24,
                    evolvesTo: DataNames.Starmon
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chipForest,
            },
            drops: [
                {
                    item: DataNames.Reppamon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 23,
                    digiPlates: [DataNames.Airdramon],
                    evolvesTo: DataNames.Airdramon,
                },
                {
                    level: 20,
                    digiPlates: [DataNames.Reppamon],
                    evolvesTo: DataNames.Reppamon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Hanumon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Tailmon, DataNames.Hanumon],
        },
    },
    Kamemon: {
        species: [Species.AQU],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.mangoveWoods,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.AQU,
                        amount: 300,
                    }],
                    evolvesTo: DataNames.Gawappamon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.MAC,
                        amount: 37,
                    }],
                    evolvesTo: DataNames.Gawappamon
                },
                {
                    level: 23,
                    evolvesTo: DataNames.Tortamon
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            platesRequired: [DataNames.Kamemon],
            location: {
                area: MapsList.dsle.loopSwamp,
            },
            drops: [
                {
                    item: DataNames.Kamemon,
                    chance: 100,
                }
            ],
            evolutions: [
                {
                    level: 16,
                    obtained: [{
                        digimon: DataNames.Numemon,
                    }],
                    evolvesTo: DataNames.Numemon,
                },
                {
                    level: 20,
                    evolvesTo: DataNames.Gawappamon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Shellmon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Shellmon],
        },
    },
    Dorumon: {
        species: [Species.BST, Species.DRG],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 18,
                    exp: [{
                        type: Species.BST,
                        amount: 150,
                    }],
                    evolvesTo: DataNames.Dorugamon
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 24,
                    exp: [{
                        type: Species.BST,
                        amount: 80,
                    }],
                    evolvesTo: DataNames.Dorugamon
                },
                {
                    level: 19,
                    evolvesTo: DataNames.Drimogemon
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loginMountain,
            },
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.Dorugamon,
                },
                {
                    level: 23,
                    evolvesTo: DataNames.Raptordramon,
                },
                {
                    level: 20,
                    digiPlates: [DataNames.Coelamon],
                    evolvesTo: DataNames.Coelamon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Dorugamon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Aquilamon, DataNames.Dorugamon, DataNames.Raptordramon, DataNames.Alphamon],
        },
    },
    Monodramon: {
        species: [Species.DRG],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 24,
                    exp: [{
                        type: Species.DRG,
                        amount: 90,
                    }],
                    evolvesTo: DataNames.Dinohumon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.ANY,
                        amount: 400,
                    }],
                    obtained: [{
                        digimon: DataNames.Airdramon,
                    }],
                    evolvesTo: DataNames.Airdramon
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            drops: [
                {
                    item: DataNames.Strikedramon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 21,
                    digiPlates: [DataNames.Strikedramon],
                    evolvesTo: DataNames.Strikedramon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.blue,
            },
            fusions: [DataNames.ExVeemon],
        },
    },
    BlackAgumon: {
        species: [Species.DRG],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
            evolutions: [
                {
                    level: 16,
                    evolvesTo: DataNames.DarkTyrannomon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.DRG,
                        amount: 22,
                    }],
                    evolvesTo: DataNames.Monochromon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.DAR,
                        amount: 100,
                    }],
                    evolvesTo: DataNames.DarkTyrannomon
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.packetCoast,
            },
            drops: [
                {
                    item: DataNames.Tankmon,
                    chance: 25,
                }
            ],
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.DarkTyrannomon,
                },
                {
                    level: 20,
                    digiPlates: [DataNames.Tankmon],
                    evolvesTo: DataNames.Tankmon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
    },
    YukiAgumon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 24,
                    exp: [{
                        type: Species.AQU,
                        amount: 45,
                    }],
                    evolvesTo: DataNames.Seadramon
                },
            ],
            evolutionTree: DataNames.YukiAgumon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.red,
            },
            fusions: [DataNames.Lekismon],
        },
    },
    Goburimon: {
        species: [Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
            },
            evolutions: [
                {
                    level: 7,
                    evolvesTo: DataNames.Ogremon
                },
                {
                    level: 10,
                    exp: [{
                        type: Species.DRG,
                        amount: 20,
                    }],
                    evolvesTo: DataNames.Tyrannomon
                },
                {
                    level: 14,
                    evolvesTo: DataNames.Bakemon
                },
            ],
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 26,
                    exp: [{
                        type: Species.BST,
                        amount: 75,
                    }],
                    evolvesTo: DataNames.Ogremon
                },
                {
                    level: 23,
                    exp: [{
                        type: Species.BST,
                        amount: 36,
                    }],
                    evolvesTo: DataNames.Minotarumon
                },
                {
                    level: 20,
                    evolvesTo: DataNames.Nanimon
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.labelForest,
            },
            drops: [
                {
                    item: DataNames.Ogremon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 19,
                    digiPlates: [DataNames.Ogremon],
                    evolvesTo: DataNames.Ogremon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.both,
            },
            fusions: [DataNames.Minotarumon, DataNames.Musyamon, DataNames.LeomonHeart, DataNames.LeomonSpade],
        },
    },
    Shamamon: {
        species: [Species.BST],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 24,
                    exp: [{
                        type: Species.BST,
                        amount: 45,
                    }],
                    evolvesTo: DataNames.Fugamon
                },
                {
                    level: 26,
                    exp: [{
                        type: Species.HOL,
                        amount: 75,
                    }],
                    obtained:[{
                        digimon: DataNames.Hanumon
                    }],
                    evolvesTo: DataNames.Hanumon
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
    },
    SnowGoburimon: {
        species: [Species.AQU],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    evolvesTo: DataNames.Hyogamon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.AQU,
                        amount: 70,
                    }],
                    evolvesTo: DataNames.Yukidarumon
                },
            ],
            evolutionTree: DataNames.SnowGoburimon,
        },
    },
    Kumamon: {
        species: [Species.BST],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 15,
                    evolvesTo: DataNames.Grizzmon
                },
                {
                    level: 32,
                    evolvesTo: DataNames.Leomon
                },
            ],
            evolutionTree: DataNames.Kumamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.BST,
                        amount: 39,
                    }],
                    evolvesTo: DataNames.Grizzmon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.BST,
                        amount: 22,
                    },
                    {
                        type: Species.AQU,
                        amount: 18,
                    }],
                    evolvesTo: DataNames.Mojyamon
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
    },
    Penmon: {
        species: [Species.BRD],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.mangoveWoods,
            },
            evolutions: [
                {
                    level: 27,
                    evolvesTo: DataNames.Kokatorimon,
                },
                {
                    level: 26,
                    evolvesTo: DataNames.Kiwimon
                },
                {
                    level: 32,
                    evolvesTo: DataNames.Diatrymon
                },
            ],
            evolutionTree: DataNames.Penmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 18,
                    exp: [{
                        type: Species.INS,
                        amount: 40,
                    }],
                    evolvesTo: DataNames.Kiwimon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.DAR,
                        amount: 37,
                    }],
                    evolvesTo: DataNames.Kokatorimon
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.DaiPenmon,
                    chance: 5,
                },
            ],
            fusions: [DataNames.Rukamon, DataNames.DaiPenmon],
        },
    },
    Muchomon: {
        species: [Species.BRD],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 16,
                    evolvesTo: DataNames.Akatorimon
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 29,
                    exp: [{
                        type: Species.BRD,
                        amount: 240,
                    }],
                    evolvesTo: DataNames.Diatrymon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.BRD,
                        amount: 30,
                    }],
                    evolvesTo: DataNames.Akatorimon
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
    },
    Betamon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
            },
            evolutions: [
                {
                    level: 13,
                    evolvesTo: DataNames.Seadramon
                },
                {
                    level: 12,
                    evolvesTo: DataNames.Sukamon
                },
            ],
            evolutionTree: DataNames.Betamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 21,
                    exp: [{
                        type: Species.AQU,
                        amount: 55,
                    }],
                    evolvesTo: DataNames.Octomon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.AQU,
                        amount: 55,
                    }],
                    evolvesTo: DataNames.Gesomon
                },
                {
                    level: 17,
                    exp: [{
                        type: Species.AQU,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Rukamon
                },
            ],
            evolutionTree: DataNames.Betamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.packetCoast,
            },
            drops: [
                {
                    item: DataNames.Plate,
                    chance: 10,
                }
            ],
            evolutions: [
                {
                    level: 17,
                    evolvesTo: DataNames.Seadramon,
                },
                {
                    level: 22,
                    evolvesTo: DataNames.Ebidramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.blue,
            },
            fusions: [DataNames.Gekomon],
        },
    },
    Otamamon: {
        species: [Species.AQU],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.Gekomon
                },
                {
                    level: 18,
                    exp: [{
                        type: Species.MAC,
                        amount: 20,
                    }],
                    evolvesTo: DataNames.Raremon
                },
            ],
            evolutionTree: DataNames.Otamamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 18,
                    exp: [{
                        type: Species.AQU,
                        amount: 38,
                    }],
                    evolvesTo: DataNames.Gekomon,
                },
                {
                    level: 19,
                    obtained: [{
                        digimon: DataNames.Numemon,
                    }],
                    evolvesTo: DataNames.Geremon,
                },
                {
                    level: 19,
                    exp: [{
                        type: Species.ANY,
                        amount: 140,
                    }],
                    evolvesTo: DataNames.Numemon,
                },
            ],
            evolutionTree: DataNames.Otamamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Gekomon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.CulumonSpade, DataNames.Gekomon, DataNames.Shellmon],
        },
    },
    Ganimon: {
        species: [Species.AQU],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.packetSwamp,
            },
            evolutions: [
                {
                    level: 25,
                    evolvesTo: DataNames.Seasarmon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 27,
                    exp: [{
                        type: Species.DRG,
                        amount: 110,
                    }],
                    evolvesTo: DataNames.Ebidramon
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Coelamon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Coelamon],
        },
    },
    Gizamon: {
        species: [Species.AQU],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 22,
                    evolvesTo: DataNames.Hanumon
                },
            ],
            evolutionTree: DataNames.Gizamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 25,
                    exp: [{
                        type: Species.DAR,
                        amount: 35,
                    }],
                    evolvesTo: DataNames.IceDevimon,
                },
                {
                    level: 22,
                    exp: [{
                        type: Species.MAC,
                        amount: 44,
                    }],
                    evolvesTo: DataNames.Raremon,
                },
            ],
            evolutionTree: DataNames.Gizamon,
        },
    },
    Syakomon: {
        species: [Species.AQU],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 18,
                    exp: [{
                        type: Species.AQU,
                        amount: 41,
                    }],
                    evolvesTo: DataNames.Coelamon
                },
                {
                    level: 23,
                    exp: [{
                        type: Species.BST,
                        amount: 43,
                    }],
                    evolvesTo: DataNames.Shellmon
                },
                {
                    level: 26,
                    evolvesTo: DataNames.KaratsukiNumemon
                },
            ],
            evolutionTree: DataNames.Syakomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loopSwamp,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Hookmon,
                },
                {
                    level: 17,
                    evolvesTo: DataNames.Octomon,
                },
                {
                    level: 20,
                    digiPlates: [DataNames.Coelamon],
                    evolvesTo: DataNames.Coelamon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Coelamon, DataNames.Dorugamon],
        },
    },
    Kunemon: {
        species: [Species.INS],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 18,
                    exp: [{
                        type: Species.INS,
                        amount: 25,
                    }],
                    evolvesTo: DataNames.Yanmamon
                },
                {
                    level: 19,
                    exp: [{
                        type: Species.INS,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Flymon
                },
                {
                    level: 18,
                    exp: [{
                        type: Species.ANY,
                        amount: 15,
                    }],
                    evolvesTo: DataNames.Sukamon
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
    },
    DoKunemon: {
        species: [Species.INS],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 20,
                    exp: [{
                        type: Species.INS,
                        amount: 38,
                    }],
                    evolvesTo: DataNames.Kuwagamon
                },
                {
                    level: 24,
                    exp: [{
                        type: Species.DAR,
                        amount: 45,
                    }],
                    evolvesTo: DataNames.Dokugumon
                },
                {
                    level: 17,
                    evolvesTo: DataNames.Gokimon
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
    },
    Floramon: {
        species: [Species.INS],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutions: [
                {
                    level: 16,
                    evolvesTo: DataNames.Vegiemon
                },
            ],
            evolutionTree: DataNames.Floramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    exp: [{
                        type: Species.INS,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Vegiemon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chipForest,
            },
            evolutions: [
                {
                    level: 19,
                    digiPlates: [DataNames.Woodmon],
                    evolvesTo: DataNames.Woodmon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.red,
            },
            fusions: [DataNames.Kabukimon],
        },
    },
    Aruraumon: {
        species: [Species.INS],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    evolvesTo: DataNames.Weedmon
                },
                {
                    level: 27,
                    exp: [{
                        type: Species.INS,
                        amount: 180
                    }],
                    evolvesTo: DataNames.Woodmon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
    },
    Mushroomon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 22,
                    evolvesTo: DataNames.Igamon
                },
                {
                    level: 22,
                    evolvesTo: DataNames.Kogamon
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            fusions: [DataNames.Chrysalimon],
        },
    },
    ToyAgumon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 14,
                    exp: [{
                        type: Species.HOL,
                        amount: 100,
                    }],
                    evolvesTo: DataNames.Starmon
                },
                {
                    level: 17,
                    evolvesTo: DataNames.Flarerizamon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Tankmon
                },
                {
                    level: 22,
                    exp: [{
                        type: Species.MAC,
                        amount: 60,
                    }],
                    evolvesTo: DataNames.Revolmon
                },
            ],
            evolutionTree: DataNames.ToyAgumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 21,
                    evolvesTo: DataNames.Starmon,
                },
                {
                    level: 16,
                    digiPlates: [DataNames.Revolmon],
                    evolvesTo: DataNames.Revolmon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Tankmon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Tankmon],
        },
    },
    ToyAgumonB: {
        species: [Species.MAC],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.junkFactory,
            },
            evolutions: [
                {
                    level: 34,
                    evolvesTo: DataNames.Raptordramon
                },
            ],
            evolutionTree: DataNames.ToyAgumonB,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 20,
                    exp: [{
                        type: Species.MAC,
                        amount: 41,
                    }],
                    evolvesTo: DataNames.Mechanorimon
                },
            ],
            evolutionTree: DataNames.ToyAgumonB,
        },
    },
    Hagurumon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 18,
                    evolvesTo: DataNames.Guardromon
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 20,
                    evolvesTo: DataNames.Guardromon
                },
                {
                    level: 22,
                    exp: [{
                        type: Species.MAC,
                        amount: 45,
                    },
                    {
                        type: Species.AQU,
                        amount: 30,
                    }],
                    evolvesTo: DataNames.Hookmon
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.magnetMine,
            },
            drops: [
                {
                    item: DataNames.Guardromon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 16,
                    digiPlates: [DataNames.Guardromon],
                    evolvesTo: DataNames.Guardromon,
                },
                {
                    level: 24,
                    digiPlates: [DataNames.Clockmon],
                    evolvesTo: DataNames.Clockmon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.blue,
            },
            fusions: [DataNames.Chrysalimon],
        },
    },
    Solarmon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    exp: [{
                        type: Species.MAC,
                        amount: 600,
                    }],
                    evolvesTo: DataNames.Clockmon
                },
                {
                    level: 24,
                    exp: [{
                        type: Species.MAC,
                        amount: 96,
                    }],
                    evolvesTo: DataNames.BomberNanimon
                },
            ],
            evolutionTree: DataNames.Solarmon,
        },
    },
    Kotemon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
            evolutions: [
                {
                    level: 13,
                    evolvesTo: DataNames.Dinohumon
                },
                {
                    level: 24,
                    evolvesTo: DataNames.DarkLizardmon
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 22,
                    exp: [{
                        type: Species.MAC,
                        amount: 58,
                    }],
                    evolvesTo: DataNames.Omekamon
                },
                {
                    level: 25,
                    evolvesTo: DataNames.PlatinumSukamon
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
    },
    Kokuwamon: {
        species: [Species.MAC, Species.INS],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 23,
                    exp: [{
                        type: Species.MAC,
                        amount: 46,
                    }],
                    evolvesTo: DataNames.Thunderballmon
                },
            ],
            evolutionTree: DataNames.Kokuwamon,
        },
        dsle: {
            platesRequired: [DataNames.Kokuwamon],
            location: {
                area: MapsList.dsle.patchPrairie,
            },
            drops: [
                {
                    item: DataNames.Kokuwamon,
                    chance: 100,
                }
            ],
            evolutions: [
                {
                    level: 16,
                    evolvesTo: DataNames.Kuwagamon,
                },
                {
                    level: 20,
                    digiPlates: [DataNames.Tankmon],
                    evolvesTo: DataNames.Tankmon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.blue,
            },
            fusions: [DataNames.Tankmon],
        },
    },
    Gotsumon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
            evolutions: [
                {
                    level: 11,
                    exp: [{
                        type: Species.DRG,
                        amount: 10,
                    }],
                    evolvesTo: DataNames.Airdramon
                },
                {
                    level: 28,
                    evolvesTo: DataNames.Minotarumon
                },
                {
                    level: 35,
                    evolvesTo: DataNames.Icemon
                },
            ],
            evolutionTree: DataNames.Gotsumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.AQU,
                        amount: 40,
                    }],
                    evolvesTo: DataNames.Icemon
                },
                {
                    level: 21,
                    exp: [{
                        type: Species.MAC,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Golemon
                },
                {
                    level: 20,
                    obtained: [{
                        digimon: DataNames.Tsuchidarumon
                    }],
                    evolvesTo: DataNames.Tsuchidarumon
                },
            ],
            evolutionTree: DataNames.Gotsumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.magnetMine,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.BomberNanimon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Insekimon,
                    chance: 20,
                },
            ],
            fusions: [DataNames.Insekimon],
        },
    },
    Bakumon: {
        species: [Species.HOL],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
            evolutions: [
                {
                    level: 30,
                    evolvesTo: DataNames.Unimon
                },
            ],
            evolutionTree: DataNames.Bakumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 22,
                    evolvesTo: DataNames.Unimon
                },
                {
                    level: 24,
                    exp: [{
                        type: Species.HOL,
                        amount: 80,
                    }],
                    evolvesTo: DataNames.Seasarmon
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
    },
    Candlemon: {
        species: [Species.DAR],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 20,
                    exp: [{
                        type: Species.DAR,
                        amount: 65,
                    }],
                    evolvesTo: DataNames.DarkLizardmon
                },
                {
                    level: 20,
                    exp: [{
                        type: Species.DRG,
                        amount: 65,
                    }],
                    evolvesTo: DataNames.Flarerizamon
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
    },
    PicoDevimon: {
        species: [Species.DAR],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutions: [
                {
                    level: 28,
                    evolvesTo: DataNames.Devimon
                },
            ],
            evolutionTree: DataNames.PicoDevimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 21,
                    exp: [{
                        type: Species.DAR,
                        amount: 45,
                    }],
                    evolvesTo: DataNames.Devimon
                },
                {
                    level: 26,
                    exp: [{
                        type: Species.DAR,
                        amount: 120,
                    }],
                    evolvesTo: DataNames.Musyamon
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            drops: [
                {
                    item: DataNames.Plate,
                    chance: 10,
                }
            ],
            evolutions: [
                {
                    level: 21,
                    digiPlates: [DataNames.Devimon],
                    evolvesTo: DataNames.Devimon,
                },
                {
                    level: 19,
                    evolvesTo: DataNames.Bakemon,
                },
                {
                    level: 20,
                    evolvesTo: DataNames.Devidramon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.both,
            },
            fusions: [DataNames.Devimon, DataNames.Bakemon],
        },
    },
    Keramon: {
        species: [Species.DAR],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.DAR,
                        amount: 100,
                    }],
                    evolvesTo: DataNames.Chrysalimon
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 27,
                    obtained: [{
                        digimon: DataNames.Keramon
                    }],
                    evolvesTo: DataNames.Chrysalimon
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 21,
                    obtained: [{
                        digimon: DataNames.Kuramon,
                    }],
                    evolvesTo: DataNames.Chrysalimon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Chrysalimon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Chrysalimon, DataNames.Armagemon],
        },
    },
    Tsukaimon: {
        species: [Species.DAR],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.DAR,
                        amount: 42,
                    }],
                    evolvesTo: DataNames.Bakemon
                },
                {
                    level: 22,
                    exp: [
                        {
                            type: Species.DAR,
                            amount: 30,
                        },
                        {
                            type: Species.DRG,
                            amount: 35,
                        },
                    ],
                    evolvesTo: DataNames.Devidramon
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
    },
    Dracmon: {
        species: [Species.DAR],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 22,
                    evolvesTo: DataNames.Sangloupmon
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.BST,
                        amount: 50,
                    }],
                    evolvesTo: DataNames.Sangloupmon
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 18,
                    digiPlates: [DataNames.Sangloupmon],
                    evolvesTo: DataNames.Sangloupmon,
                },
                {
                    level: 20,
                    evolvesTo: DataNames.Musyamon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Musyamon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Bakemon, DataNames.Musyamon, DataNames.GranDracmon],
        },
    },
    DotAgumon: {
        species: [Species.DRG],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Koromon,
        },
    },
    DotFalcomon: {
        species: [Species.BRD],
        stage: Stage.stage2,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Chicchimon,
        },
    },
    Coronamon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 25,
                    exp: [{
                        type: Species.BST,
                        amount: 70,
                    }],
                    evolvesTo: DataNames.Firamon
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.Firamon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 18,
                    digiPlates: [DataNames.Firamon],
                    evolvesTo: DataNames.Firamon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Firamon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Agunimon, DataNames.Firamon, DataNames.LeomonSpade, DataNames.ShoutmonSpade],
        },
    },
    Lunamon: {
        species: [Species.DAR, Species.BST],
        stage: Stage.stage2,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 19,
                    exp: [{
                        type: Species.DAR,
                        amount: 33,
                    }],
                    evolvesTo: DataNames.Lekismon
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loopSwamp,
            },
            drops: [
                {
                    item: DataNames.Lekismon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 22,
                    digiPlates: [DataNames.Yukidarumon],
                    evolvesTo: DataNames.Yukidarumon,
                },
                {
                    level: 18,
                    digiPlates: [DataNames.Lekismon],
                    evolvesTo: DataNames.Lekismon,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Lekismon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.CulumonHeart, DataNames.Lekismon],
        },
    },
    Hyokomon: {
        species: [Species.BRD],
        stage: Stage.stage2,
        dsle: {
            location: {
                area: MapsList.dsle.packetCoast,
            },
            drops: [
                {
                    item: DataNames.Buraimon,
                    chance: 50,
                }
            ],
            evolutions: [
                {
                    level: 24,
                    digiPlates: [DataNames.Buraimon],
                    evolvesTo: DataNames.Buraimon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.red,
            },
            fusions: [DataNames.KabuterimonHeart, DataNames.Buraimon],
        },
    },
    Lucemon: {
        species: [Species.HOL],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.both,
            },
            fusions: [DataNames.LucemonFM, DataNames.Valdurmon],
        },
    },
    Shoutmon: {
        species: [Species.DRG],
        stage: Stage.stage2,
        dssxw: {
            digiScores: [DataNames.ShoutmonHeart, DataNames.ShoutmonSpade],
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.ShoutmonHeart,
                    chance: 100,
                },
                {
                    digiScore: DataNames.ShoutmonSpade,
                    chance: 100,
                },
                {
                    digiScore: DataNames.ShoutmonX4,
                    chance: 25,
                },
            ],
            fusions: [DataNames.ShoutmonX2, DataNames.ShoutmonX3, DataNames.ShoutmonX4, DataNames.ShoutmonX5, DataNames.ShoutmonX4B, DataNames.JetSparrow, DataNames.StarSword, DataNames.DoruluCannon, DataNames.ShoutmonX3GM, DataNames.ShoutmonX3SD, DataNames.ShoutmonX4S],
        },
    },
    Ballistamon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.ShoutmonX2,
                    chance: 50,
                },
            ],
            fusions: [DataNames.ShoutmonX2, DataNames.ShoutmonX3, DataNames.ShoutmonX4, DataNames.ShoutmonX5, DataNames.ShoutmonX4B, DataNames.ShoutmonX3GM, DataNames.ShoutmonX3SD, DataNames.ShoutmonX4S],
        },
    },
    Starmon2010: {
        species: [Species.MAC],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.StarSword,
                    chance: 75,
                },
            ],
            fusions: [DataNames.ShoutmonX4, DataNames.ShoutmonX5, DataNames.ShoutmonX4B, DataNames.ShoutmonX5, DataNames.StarSword, DataNames.ShoutmonX4S],
        },
    },
    Sparrowmon: {
        species: [Species.BRD],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.JetSparrow,
                    chance: 75,
                },
                {
                    digiScore: DataNames.ShoutmonX5,
                    chance: 10,
                },
            ],
            fusions: [DataNames.ShoutmonX5, DataNames.JetSparrow],
        },
    },
    Cutemon: {
        species: [Species.BST],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.Spadamon,
                    chance: 20,
                },
            ],
        },
    },
    Monitormon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
        },
    },
    Spadamon: {
        species: [Species.BST],
        stage: Stage.stage2,
        dssxw: {
            digiScores: [DataNames.Spadamon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.ShoutmonX4S, DataNames.ShoutmonX5S],
        },
    },
    Dondokomon: {
        species: [Species.PLN],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
        },
    },
    Gaosmon: {
        species: [Species.DRG],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
        },
    },
    ShoutmonB: {
        species: [Species.DRG],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
        },
    },
    Troopmon: {
        species: [Species.MAC],
        stage: Stage.stage2,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
        },
    },
    StarSword: {
        species: [Species.DRG],
        stage: Stage.stage2,
        dssxw: {
            digiScores: [DataNames.StarSword],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    //#endregion

    //#region Adult
    Greymon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 25,
                    evolvesTo: DataNames.MetalGreymon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.DRG,
                        amount: 300,
                    }],
                    evolvesTo: DataNames.MetalGreymon
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            platesRequired: [DataNames.Greymon],
            location: {
                area: MapsList.dsle.none,
            },
            drops: [
                {
                    item: DataNames.Greymon,
                    chance: 100,
                },
                {
                    item: DataNames.MetalGreymon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 27,
                    digiPlates: [DataNames.MetalGreymon],
                    evolvesTo: DataNames.MetalGreymon,
                },
                {
                    level: 26,
                    digiPlates: [DataNames.SkullGreymon],
                    obtained: [{
                        digimon: DataNames.Greymon,
                    }],
                    evolvesTo: DataNames.SkullGreymon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            digiScores: [DataNames.Greymon],
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MetalGreymon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Kimeramon, DataNames.MetalGreymon, DataNames.WarGreymon, DataNames.Gaioumon, DataNames.Greymon2010],
        },
    },
    Garurumon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 28,
                    evolvesTo: DataNames.WereGarurumonBlue
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    exp: [{
                        type: Species.BST,
                        amount: 450,
                    }],
                    evolvesTo: DataNames.WereGarurumonBlue
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dsle: {
            platesRequired: [DataNames.Garurumon],
            location: {
                area: MapsList.dsle.labelForest,
            },
            drops: [
                {
                    item: DataNames.Garurumon,
                    chance: 100,
                }
            ],
            evolutions: [
                {
                    level: 27,
                    evolvesTo: DataNames.WereGarurumonBlue,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.Garurumon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.WereGarurumon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Kimeramon, DataNames.WereGarurumonBlue, DataNames.MetalGarurumon],
        },
    },
    Birdramon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.mangoveWoods,
            },
            evolutions: [
                {
                    level: 24,
                    evolvesTo: DataNames.Garudamon
                },
            ],
            evolutionTree: DataNames.Piyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.BRD,
                        amount: 270,
                    }],
                    evolvesTo: DataNames.Garudamon
                },
            ],
            evolutionTree: DataNames.Piyomon,
        },
        dsle: {
            platesRequired: [DataNames.Birdramon],
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.Garudamon,
                    chance: 50,
                },
                {
                    item: DataNames.PiyomonW,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 28,
                    digiPlates: [DataNames.Garudamon],
                    evolvesTo: DataNames.Garudamon,
                },
                {
                    level: 30,
                    evolvesTo: DataNames.Parrotmon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            fusions: [DataNames.Butenmon, DataNames.Zhuqiaomon],
        },
    },
    Togemon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.packetSwamp,
            },
            evolutions: [
                {
                    level: 33,
                    evolvesTo: DataNames.Lilymon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    exp: [{
                        type: Species.INS,
                        amount: 360,
                    }],
                    evolvesTo: DataNames.Lilymon
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dsle: {
            platesRequired: [DataNames.Togemon],
            location: {
                area: MapsList.dsle.labelForest,
            },
            drops: [
                {
                    item: DataNames.Togemon,
                    chance: 100,
                }
            ],
            evolutions: [
                {
                    level: 29,
                    evolvesTo: DataNames.Blossomon,
                },
                {
                    level: 27,
                    digiPlates: [DataNames.Lilymon],
                    evolvesTo: DataNames.Lilymon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.both,
            },
            fusions: [DataNames.Jureimon, DataNames.Blossomon, DataNames.Lilymon],
        },
    },
    Kabuterimon: {
        species: [Species.INS],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 29,
                    evolvesTo: DataNames.AtlurKabuterimonR
                },
            ],
            evolutionTree: DataNames.Tentomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 36,
                    evolvesTo: DataNames.AtlurKabuterimonR
                },
                {
                    level: 33,
                    evolvesTo: DataNames.AtlurKabuterimonB
                },
            ],
            dna: [DataNames.Kimeramon],
            evolutionTree: DataNames.Minomon,
        },
        dsle: {
            platesRequired: [DataNames.Kabuterimon],
            location: {
                area: MapsList.dsle.loginMountain,
            },
            drops: [
                {
                    item: DataNames.Kabuterimon,
                    chance: 100,
                }
            ],
            evolutions: [
                {
                    level: 31,
                    digiPlates: [DataNames.AtlurKabuterimonR],
                    evolvesTo: DataNames.AtlurKabuterimonR,
                },
                {
                    level: 35,
                    digiPlates: [DataNames.Devimon, DataNames.Kabuterimon, DataNames.KimeramonAlpha, DataNames.KimeramonBeta],
                    warps: [DataNames.TentomonW, DataNames.KimeramonW2],
                    evolvesTo: DataNames.Kimeramon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.KabuterimonHeart, DataNames.KabuterimonSpade],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Kimeramon, DataNames.Lilymon],
        },
    },
    Ikkakumon: {
        species: [Species.AQU, Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 34,
                    evolvesTo: DataNames.Zudomon
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.AQU,
                        amount: 410,
                    }],
                    evolvesTo: DataNames.Zudomon
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.Zudomon,
                    chance: 50,
                },
                {
                    item: DataNames.SpiritOfIce,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 27,
                    digiPlates: [DataNames.Zudomon],
                    evolvesTo: DataNames.Zudomon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.Whamon,
                    chance: 30,
                },
            ],
            fusions: [DataNames.Whamon],
        },
    },
    Angemon: {
        species: [Species.HOL],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 25,
                    exp: [{
                        type: Species.HOL,
                        amount: 80,
                    }],
                    evolvesTo: DataNames.HolyAngemon
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.HOL,
                        amount: 310,
                    }],
                    evolvesTo: DataNames.HolyAngemon
                },
            ],
            dna: [DataNames.LucemonFM, DataNames.Shakkoumon],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            platesRequired: [DataNames.Angemon],
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.ShakkoumonBeta,
                    chance: 35,
                },
                {
                    item: DataNames.PatamonW1,
                    chance: 20,
                },
            ],
            evolutions: [
                {
                    level: 31,
                    digiPlates: [DataNames.HolyAngemon],
                    evolvesTo: DataNames.HolyAngemon,
                },
                {
                    level: 36,
                    digiPlates: [DataNames.Angemon, DataNames.Devimon, DataNames.LucemonFMAlpha, DataNames.LucemonFMBeta],
                    warps: [DataNames.PatamonW1, DataNames.LucemonFMW2],
                    evolvesTo: DataNames.LucemonFM,
                },
                {
                    level: 35,
                    digiPlates: [DataNames.Angemon, DataNames.Ankylomon, DataNames.ShakkoumonAlpha, DataNames.ShakkoumonBeta],
                    warps: [DataNames.PatamonW2, DataNames.ShakkoumonW2],
                    evolvesTo: DataNames.Shakkoumon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.Angemon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Shakkoumon, DataNames.Magnamon, DataNames.LucemonFM, DataNames.HolyAngemon, DataNames.Beelzebumon2010Spade],
        },
    },
    Tailmon: {
        species: [Species.HOL],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 35,
                    evolvesTo: DataNames.Angewomon
                },
                {
                    level: 46,
                    exp: [{
                        type: Species.DAR,
                        amount: 500,
                    }],
                    evolvesTo: DataNames.LadyDevimon
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 35,
                    exp: [{
                        type: Species.HOL,
                        amount: 270,
                    }],
                    evolvesTo: DataNames.Angewomon
                },
            ],
            dna: [DataNames.Silphymon],
            armor: [DataNames.Kabukimon, DataNames.Lynxmon, DataNames.Tylomon],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            platesRequired: [DataNames.Tailmon],
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.Angewomon,
                    chance: 50,
                },
                {
                    item: DataNames.SilphymonBeta,
                    chance: 35,
                },
            ],
            evolutions: [
                {
                    level: 31,
                    digiPlates: [DataNames.Angewomon],
                    evolvesTo: DataNames.Angewomon,
                },
                {
                    level: 35,
                    digiPlates: [DataNames.Tailmon, DataNames.Aquilamon, DataNames.SilphymonAlpha, DataNames.SilphymonBeta],
                    warps: [DataNames.PlotmonW, DataNames.SilphymonW2],
                    evolvesTo: DataNames.Silphymon,
                },
                {
                    level: 24,
                    digiPlates: [DataNames.CourageDM2],
                    evolvesTo: DataNames.Lynxmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            digiScores: [DataNames.Tailmon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Angewomon,
                    chance: 50,
                },
                {
                    digiScore: DataNames.Bastemon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Angewomon, DataNames.Kabukimon, DataNames.Silphymon, DataNames.Bastemon, DataNames.Baihumon],
        },
    },
    ExVeemon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 30,
                    exp: [{
                        type: Species.DRG,
                        amount: 500,
                    }],
                    evolvesTo: DataNames.Paildramon
                },
                {
                    level: 30,
                    obtained: [{
                        item: DataNames.CourageDM,
                    }],
                    evolvesTo: DataNames.Fladramon
                },
                {
                    level: 30,
                    obtained: [{
                        item: DataNames.MiraclesDM,
                    }],
                    evolvesTo: DataNames.Magnamon
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Dinobeemon, DataNames.Paildramon],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            platesRequired: [DataNames.ExVeemon],
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.ExVeemon,
                    chance: 100,
                },
                {
                    item: DataNames.PaildramonAlpha,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 28,
                    evolvesTo: DataNames.Megadramon,
                },
                {
                    level: 35,
                    digiPlates: [DataNames.ExVeemon, DataNames.Stingmon, DataNames.PaildramonAlpha, DataNames.PaildramonBeta],
                    warps: [DataNames.VeemonW, DataNames.PaildramonW1],
                    evolvesTo: DataNames.Paildramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.ExVeemon],
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.both,
            },
            fusions: [DataNames.Dinobeemon, DataNames.Paildramon, DataNames.AeroVeedramon, DataNames.HolyAngemon],
        },
    },
    Stingmon: {
        species: [Species.INS],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.packetSwamp,
            },
            evolutions: [
                {
                    level: 26,
                    evolvesTo: DataNames.Dinobeemon
                },
                {
                    level: 33,
                    exp: [{
                        type: Species.MAC,
                        amount: 300,
                    }],
                    evolvesTo: DataNames.Megadramon
                },
                {
                    level: 30,
                    obtained: [{
                        item: DataNames.MiraclesDM,
                    }],
                    evolvesTo: DataNames.Kongoumon
                },
            ],
            evolutionTree: DataNames.Wormmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Dinobeemon, DataNames.Paildramon],
            evolutionTree: DataNames.Minomon,
        },
        dsle: {
            platesRequired: [DataNames.Stingmon],
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.PaildramonBeta,
                    chance: 50,
                },
                {
                    item: DataNames.PaildramonW2,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 35,
                    digiPlates: [DataNames.ExVeemon, DataNames.Stingmon, DataNames.PaildramonAlpha, DataNames.PaildramonBeta],
                    warps: [DataNames.WormmonW, DataNames.PaildramonW2],
                    evolvesTo: DataNames.Paildramon,
                },
                {
                    level: 29,
                    digiPlates: [DataNames.ExVeemon, DataNames.DinobeemonAlpha, DataNames.DinobeemonBeta],
                    obtained: [{
                        digimon: DataNames.Stingmon,
                    }],
                    evolvesTo: DataNames.Dinobeemon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.Stingmon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.both,
            },
            fusions: [DataNames.Tyilinmon, DataNames.Dinobeemon, DataNames.Paildramon],
        },
    },
    Aquilamon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
            evolutions: [
                {
                    level: 36,
                    evolvesTo: DataNames.Silphymon
                },
                {
                    level: 24,
                    evolvesTo: DataNames.Gigadramon
                },
                {
                    level: 27,
                    obtained: [{
                        item: DataNames.PurityDM,
                    }],
                    evolvesTo: DataNames.Shurimon
                },
            ],
            evolutionTree: DataNames.Hawkmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,    // TODO: Check if it's Sunburst exclusive
            },
            dna: [DataNames.Silphymon],
            evolutionTree: DataNames.Hawkmon,
        },
        dsle: {
            platesRequired: [DataNames.Aquilamon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.SilphymonAlpha,
                    chance: 50,
                },
                {
                    item: DataNames.SilphymonW1,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 35,
                    digiPlates: [DataNames.Tailmon, DataNames.Aquilamon, DataNames.SilphymonAlpha, DataNames.SilphymonBeta],
                    warps: [DataNames.PiyomonW, DataNames.SilphymonW1],
                    evolvesTo: DataNames.Silphymon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.Aquilamon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            fusions: [DataNames.Silphymon, DataNames.AeroVeedramon],
        },
    },
    Ankylomon: {
        species: [Species.BST, Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 30,
                    obtained: [{
                        item: DataNames.LightDM,
                    }],
                    evolvesTo: DataNames.Seahomon
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Shakkoumon],
            evolutionTree: DataNames.Dorimon,
        },
        dsle: {
            platesRequired: [DataNames.Ankylomon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.Ankylomon,
                    chance: 100,
                },
                {
                    item: DataNames.ShakkoumonAlpha,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 35,
                    digiPlates: [DataNames.Angemon, DataNames.Ankylomon, DataNames.ShakkoumonAlpha, DataNames.ShakkoumonBeta],
                    warps: [DataNames.TerriermonW, DataNames.ShakkoumonW1],
                    evolvesTo: DataNames.Shakkoumon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            digiScores: [DataNames.Ankylomon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Shakkoumon, DataNames.Magnamon],
        },
    },
    Growlmon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutions: [
                {
                    level: 35,
                    evolvesTo: DataNames.MegaloGrowlmon
                },
                {
                    level: 45,
                    evolvesTo: DataNames.BlackMegaloGrowlmon
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 36,
                    exp: [{
                        type: Species.MAC,
                        amount: 210,
                    }],
                    evolvesTo: DataNames.MegaloGrowlmon
                },
                {
                    level: 40,
                    exp: [
                        {
                            type: Species.DAR,
                            amount: 360,
                        },
                        {
                            type: Species.MAC,
                            amount: 330,
                        },
                    ],
                    evolvesTo: DataNames.BlackMegaloGrowlmon
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 28,
                    digiPlates: [DataNames.MegaloGrowlmon],
                    evolvesTo: DataNames.MegaloGrowlmon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.Growlmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.MegaloGrowlmon],
        },
    },
    Kyubimon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.HOL,
                        amount: 500,
                    }],
                    evolvesTo: DataNames.Taomon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 36,
                    evolvesTo: DataNames.Taomon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            platesRequired: [DataNames.Kyubimon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.PlotmonW,
                    chance: 35,
                },
                {
                    item: DataNames.SilphymonW2,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 29,
                    evolvesTo: DataNames.Taomon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            digiScores: [DataNames.Kyubimon],
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Taomon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Kyukimon, DataNames.Taomon],
        },
    },
    Gargomon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 37,
                    evolvesTo: DataNames.Rapidmon,
                },
                {
                    level: 41,
                    exp: [{
                        type: Species.DAR,
                        amount: 400,
                    }],
                    evolvesTo: DataNames.BlackRapidmon
                },
                {
                    level: 27,
                    obtained: [{
                        item: DataNames.KindnessDM,
                    }],
                    evolvesTo: DataNames.Prairiemon,
                },
            ],
            evolutionTree: DataNames.Terriermon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    exp:[{
                        type: Species.MAC,
                        amount: 350,
                    }],
                    evolvesTo: DataNames.Rapidmon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            platesRequired: [DataNames.Gargomon],
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.Gargomon,
                    chance: 100,
                },
                {
                    item: DataNames.Rapidmon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 27,
                    digiPlates: [DataNames.Rapidmon],
                    evolvesTo: DataNames.Rapidmon,
                },
                {
                    level: 34,
                    evolvesTo: DataNames.Pandamon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            digiScores: [DataNames.Gargomon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Rapidmon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.GrapLeomon, DataNames.Rapidmon],
        },
    },
    Guardromon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
            evolutions: [
                {
                    level: 40,
                    evolvesTo: DataNames.Andromon,
                },
                {
                    level: 24,
                    obtained: [{
                        item: DataNames.FriendshipDM,
                    }],
                    evolvesTo: DataNames.Kenkimon
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    evolvesTo: DataNames.Andromon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dsle: {
            platesRequired: [DataNames.Guardromon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.Guardromon,
                    chance: 100,
                },
                {
                    item: DataNames.Andromon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 27,
                    digiPlates: [DataNames.Andromon],
                    evolvesTo: DataNames.Andromon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.both,
            },
            fusions: [DataNames.GrapLeomon, DataNames.MachGaogamon, DataNames.Megadramon],
        },
    },
    Agunimon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        dssxw: {
            digiScores: [DataNames.Agunimon],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            fusions: [DataNames.Apollomon, DataNames.AncientGreymon, DataNames.ShineGreymon],
        },
    },
    GeoGreymon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 29,
                    exp: [{
                        type: Species.DRG,
                        amount: 200,
                    }],
                    evolvesTo: DataNames.RizeGreymon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    exp: [
                        {
                            type: Species.DRG,
                            amount: 250,
                        },
                        {
                            type: Species.MAC,
                            amount: 250,
                        },
                    ],
                    evolvesTo: DataNames.RizeGreymon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.AgumonW1,
                    chance: 25,
                },
                {
                    item: DataNames.SpiritOfFire,
                    chance: 15,
                },
            ],
            evolutions: [
                {
                    level: 31,
                    digiPlates: [DataNames.RizeGreymon],
                    evolvesTo: DataNames.RizeGreymon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.RizeGreymon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.RizeGreymon, DataNames.ShineGreymonBM],
        },
    },
    Gaogamon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.BST,
                        amount: 250,
                    }],
                    evolvesTo: DataNames.MachGaogamon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    exp: [{
                        type: Species.MAC,
                        amount: 280,
                    }],
                    evolvesTo: DataNames.MachGaogamon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 29,
                    digiPlates: [DataNames.MachGaogamon],
                    evolvesTo: DataNames.MachGaogamon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.Gaogamon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MachGaogamon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.MachGaogamon, DataNames.MirageGaogamonBM],
        },
    },
    Sunflowmon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 31,
                    exp: [{
                        type: Species.INS,
                        amount: 210,
                    }],
                    evolvesTo: DataNames.Lilamon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    evolvesTo: DataNames.Lilamon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            platesRequired: [DataNames.Sunflowmon],
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.Lilamon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 28,
                    digiPlates: [DataNames.Lilamon],
                    evolvesTo: DataNames.Lilamon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Blossomon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Blossomon, DataNames.RosemonBM],
        },
    },
    Peckmon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 36,
                    evolvesTo: DataNames.Yatagaramon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 37,
                    exp: [{
                        type: Species.BRD,
                        amount: 350,
                    }],
                    evolvesTo: DataNames.Yatagaramon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.Yatagaramon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 27,
                    evolvesTo: DataNames.Karatenmon,
                },
                {
                    level: 29,
                    digiPlates: [DataNames.Yatagaramon],
                    evolvesTo: DataNames.Yatagaramon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            digiScores: [DataNames.Peckmon],
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Karatenmon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.Yatagaramon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Karatenmon, DataNames.Yatagaramon, DataNames.RavemonBM],
        },
    },
    Gawappamon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.AQU,
                        amount: 360,
                    }],
                    evolvesTo: DataNames.Shawujinmon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loopSwamp,
            },
            drops: [
                {
                    item: DataNames.Shawujinmon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 30,
                    digiPlates: [DataNames.Shawujinmon],
                    evolvesTo: DataNames.Shawujinmon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.blue,
            },
            fusions: [DataNames.Karatenmon],
        },
    },
    KnightChessmonW: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 34,
                    evolvesTo: DataNames.BishopChessmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.RookChessmon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.RookChessmon, DataNames.AncientTroiamon],
        },
    },
    KnightChessmonB: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 34,
                    evolvesTo: DataNames.RookChessmon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
    },
    Reppamon: {
        species: [Species.HOL],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.HOL,
                        amount: 250,
                    }],
                    evolvesTo: DataNames.Tyilinmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 43,
                    exp: [{
                        type: Species.HOL,
                        amount: 700,
                    }],
                    evolvesTo: DataNames.Tyilinmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            platesRequired: [DataNames.Reppamon],
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.Reppamon,
                    chance: 100,
                },
            ],
            evolutions: [
                {
                    level: 33,
                    evolvesTo: DataNames.Tyilinmon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Kyukimon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.Tyilinmon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Kyukimon, DataNames.Crescemon, DataNames.Tyilinmon],
        },
    },
    Veedramon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 36,
                    exp: [{
                        type: Species.DRG,
                        amount: 410,
                    }],
                    evolvesTo: DataNames.AeroVeedramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            platesRequired: [DataNames.Veedramon],
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.AeroVeedramon,
                    chance: 50,
                },
                {
                    item: DataNames.PaildramonW1,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 31,
                    digiPlates: [DataNames.AeroVeedramon],
                    evolvesTo: DataNames.AeroVeedramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Veedramon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Veedramon],
        },
    },
    Dorugamon: {
        species: [Species.BST, Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 30,
                    exp: [{
                        type: Species.DRG,
                        amount: 200,
                    }],
                    evolvesTo: DataNames.Dorugremon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 38,
                    exp: [
                        {
                            type: Species.DRG,
                            amount: 480,
                        },
                        {
                            type: Species.MAC,
                            amount: 300,
                        }
                    ],
                    evolvesTo: DataNames.Dorugremon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 28,
                    digiPlates: [DataNames.Dorugremon],
                    evolvesTo: DataNames.Dorugremon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Dorugamon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Dorugremon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Grademon, DataNames.Dorugremon],
        },
    },
    Raptordramon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.Mamemon,
                },
            ],
            evolutionTree: DataNames.ToyAgumonB,
        },
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Raptordramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.Dorugremon,
                    chance: 25,
                },
                {
                    item: DataNames.Grademon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 28,
                    evolvesTo: DataNames.Megadramon,
                },
                {
                    level: 33,
                    digiPlates: [DataNames.Grademon],
                    evolvesTo: DataNames.Grademon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Raptordramon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Grademon, DataNames.MegaloGrowlmon],
        },
    },
    Strikedramon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        dsle: {
            platesRequired: [DataNames.Strikedramon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.Strikedramon,
                    chance: 100,
                },
                {
                    item: DataNames.Dorugremon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 29,
                    evolvesTo: DataNames.Cyberdramon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.blue,
            },
            fusions: [DataNames.Flaremon],
        },
    },
    DarkTyrannomon: {
        species: [Species.DAR, Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.trainingPeak,
            },
        },
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 42,
                    exp: [{
                        type: Species.DAR,
                        amount: 700,
                    }],
                    obtained: [{
                        digimon: DataNames.SkullGreymon,
                    }],
                    evolvesTo: DataNames.SkullGreymon,
                },
                {
                    level: 34,
                    exp: [{
                        type: Species.MAC,
                        amount: 550,
                    }],
                    evolvesTo: DataNames.MetalTyrannomon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.MetalTyrannomon,
                    chance: 50,
                },
                {
                    item: DataNames.EXTyrannomon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 26,
                    digiPlates: [DataNames.SkullGreymon],
                    obtained: [{
                        digimon: DataNames.Greymon,
                    }],
                    evolvesTo: DataNames.SkullGreymon,
                },
                {
                    level: 29,
                    digiPlates: [DataNames.MetalTyrannomon],
                    evolvesTo: DataNames.MetalTyrannomon,
                },
                {
                    level: 32,
                    digiPlates: [DataNames.EXTyrannomon],
                    evolvesTo: DataNames.EXTyrannomon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.both,
            },
            fusions: [DataNames.Cerberumon, DataNames.SkullBaluchimon],
        },
    },
    Dinohumon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.sheerValley,
            },
            evolutions: [
                {
                    level: 22,
                    evolvesTo: DataNames.Kyukimon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
            },
            evolutions: [
                {
                    level: 38,
                    exp: [{
                        type: Species.MAC,
                        amount: 380,
                    }],
                    evolvesTo: DataNames.Cyberdramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
    },
    Monochromon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 37,
                    exp: [{
                        type: Species.DRG,
                        amount: 350,
                    }],
                    evolvesTo: DataNames.Vermillimon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
    },
    Tyrannomon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.sheerValley,
            },
            evolutions: [
                {
                    level: 24,
                    evolvesTo: DataNames.Triceramon,
                },
            ],
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 33,
                    exp: [{
                        type: Species.DRG,
                        amount: 200,
                    }],
                    evolvesTo: DataNames.Triceramon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.MasterTyrannomon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 33,
                    evolvesTo: DataNames.Mametyramon,
                },
                {
                    level: 36,
                    digiPlates: [DataNames.MasterTyrannomon],
                    evolvesTo: DataNames.MasterTyrannomon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.Tyrannomon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.both,
            },
            fusions: [DataNames.Cerberumon, DataNames.Dorugremon, DataNames.MetalGreymon],
        },
    },
    Airdramon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.sheerValley,
            },
            evolutionTree: DataNames.Gotsumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.MAC,
                        amount: 360,
                    }],
                    evolvesTo: DataNames.Megadramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            platesRequired: [DataNames.Airdramon],
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.Airdramon,
                    chance: 100,
                },
            ],
            evolutions: [
                {
                    level: 27,
                    evolvesTo: DataNames.Karatenmon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            digiScores: [DataNames.Airdramon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.both,
            },
            fusions: [DataNames.Gigadramon, DataNames.Megadramon, DataNames.Holydramon, DataNames.Qinglongmon],
        },
    },
    Flarerizamon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Botamon,
        },
    },
    Centalmon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    exp: [{
                        type: Species.MAC,
                        amount: 350,
                    }],
                    evolvesTo: DataNames.BlackRapidmon,
                },
            ],
            evolutionTree: DataNames.Kokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Vajramon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Vajramon, DataNames.MirageGaogamon],
        },
    },
    Leomon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutions: [
                {
                    level: 15,
                    evolvesTo: DataNames.Monzaemon,
                },
            ],
            evolutionTree: DataNames.Kumamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 39,
                    exp: [{
                        type: Species.MAC,
                        amount: 550,
                    }],
                    evolvesTo: DataNames.GrapLeomon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            platesRequired: [DataNames.Leomon],
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.Leomon,
                    chance: 100,
                },
                {
                    item: DataNames.GaomonW,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 30,
                    evolvesTo: DataNames.GrapLeomon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.LeomonHeart, DataNames.LeomonSpade],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.both,
            },
            fusions: [DataNames.GrapLeomon, DataNames.Flaremon, DataNames.WereGarurumonBlue, DataNames.SaberLeomon, DataNames.Spadamon],
        },
    },
    Ogremon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.dataForest,
            },
            evolutions: [
                {
                    level: 16,
                    evolvesTo: DataNames.Arukenimon,
                },
                {
                    level: 33,
                    exp: [{
                        type: Species.BST,
                        amount: 350,
                    }],
                    evolvesTo: DataNames.Etemon
                },
            ],
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 41,
                    exp: [{
                        type: Species.DAR,
                        amount: 650,
                    }],
                    evolvesTo: DataNames.WereGarurumonBlack,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dsle: {
            platesRequired: [DataNames.Ogremon],
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.Ogremon,
                    chance: 100,
                },
                {
                    item: DataNames.WereGarurumonBlack,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 26,
                    digiPlates: [DataNames.WereGarurumonBlack],
                    evolvesTo: DataNames.WereGarurumonBlack,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Boltmon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Boltmon, DataNames.Mercurymon],
        },
    },
    Fugamon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Dorimon,
        },
    },
    Hyogamon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutionTree: DataNames.SnowGoburimon,
        },
    },
    Grizzmon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutions: [
                {
                    level: 20,
                    evolvesTo: DataNames.WereGarurumonBlack,
                },
            ],
            evolutionTree: DataNames.Kumamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    exp: [{
                        type: Species.HOL,
                        amount: 400,
                    }],
                    evolvesTo: DataNames.Monzaemon,
                },
                {
                    level: 36,
                    obtained: [{
                        digimon: DataNames.Pandamon,
                    }],
                    exp: [{
                        type: Species.BST,
                        amount: 800,
                    }],
                    evolvesTo: DataNames.Pandamon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
    },
    Seasarmon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            digiScores: [DataNames.Seasarmon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.red,
            },
            fusions: [DataNames.Cerberumon, DataNames.RizeGreymon, DataNames.Rapidmon, DataNames.Anubimon],
        },
    },
    Hanumon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutions: [
                {
                    level: 37,
                    exp: [{
                        type: Species.AQU,
                        amount: 350,
                    }],
                    evolvesTo: DataNames.Hangyomon,
                },
            ],
            evolutionTree: DataNames.Gizamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.BST,
                        amount: 400,
                    }],
                    evolvesTo: DataNames.Kyukimon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Hanumon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.red,
            },
            fusions: [DataNames.Taomon, DataNames.Monzaemon],
        },
    },
    Minotarumon: {
        species: [Species.BST],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutions: [
                {
                    level: 40,
                    exp: [{
                        type: Species.DRG,
                        amount: 250,
                    }],
                    evolvesTo: DataNames.Cyberdramon,
                },
            ],
            evolutionTree: DataNames.Gotsumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.BST,
                        amount: 380,
                    }],
                    evolvesTo: DataNames.Etemon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.Minotarumon],
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.blue,
            },
            fusions: [DataNames.Vajramon, DataNames.LucemonFM],
        },
    },
    Yukidarumon: {
        species: [Species.AQU, Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            dna: [DataNames.Pandamon],
            evolutionTree: DataNames.SnowGoburimon,
        },
        dsle: {
            platesRequired: [DataNames.Yukidarumon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.Yukidarumon,
                    chance: 100,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.both,
            },
            fusions: [DataNames.Crescemon, DataNames.Pandamon, DataNames.DaiPenmon],
        },
    },
    Tsuchidarumon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            dna: [DataNames.Pandamon],
            evolutionTree: DataNames.Gotsumon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Pandamon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Insekimon, DataNames.Pandamon],
        },
    },
    Tortamon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 38,
                    exp: [{
                        type: Species.AQU,
                        amount: 750,
                    }],
                    obtained: [{
                        digimon: DataNames.Brachimon,
                    }],
                    evolvesTo: DataNames.Brachimon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
    },
    Nanimon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            dna: [DataNames.Vademon],
            evolutionTree: DataNames.Tsunomon,
        },
    },
    BomberNanimon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 38,
                    exp: [{
                        type: Species.MAC,
                        amount: 400,
                    }],
                    evolvesTo: DataNames.Giromon,
                },
            ],
            evolutionTree: DataNames.Solarmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.magnetMine,
            },
            evolutions: [
                {
                    level: 31,
                    evolvesTo: DataNames.Volcamon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.red,
            },
            fusions: [DataNames.AncientVolcamonHeart],
        },
    },
    Mojyamon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    evolvesTo: DataNames.Mammon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
    },
    JungleMojyamon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tsunomon,
        },
    },
    Drimogemon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.loginMountain,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.SkullBaluchimon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.SkullBaluchimon, DataNames.Pinocchimon],
        },
    },
    NiseDrimogemon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Dorimon,
        },
    },
    Diatrymon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.skyPalace,
            },
            evolutionTree: DataNames.Penmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 40,
                    exp: [{
                        type: Species.BRD,
                        amount: 800,
                    }],
                    obtained: [{
                        digimon: DataNames.Sinduramon,
                    }],
                    evolvesTo: DataNames.Sinduramon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            fusions: [DataNames.Yatagaramon],
        },
    },
    Saberdramon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    evolvesTo: DataNames.Karatenmon,
                },
            ],
            evolutionTree: DataNames.Piyomon,
        },
    },
    Kokatorimon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.mangoveWoods,
            },
            evolutionTree: DataNames.Penmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Chicchimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 33,
                    digiPlates: [DataNames.Digitamamon],
                    evolvesTo: DataNames.Digitamamon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Sinduramon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Sinduramon, DataNames.Butenmon, DataNames.LadyDevimon],
        },
    },
    Akatorimon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    exp: [
                        {
                            type: Species.HOL,
                            amount: 220,
                        },
                        {
                            type: Species.BRD,
                            amount: 330,
                        },
                    ],
                    evolvesTo: DataNames.Parrotmon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
    },
    Kiwimon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.mangoveWoods,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.BRD,
                        amount: 420,
                    }],
                    evolvesTo: DataNames.Deramon,
                },
            ],
            evolutionTree: DataNames.Penmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 36,
                    exp: [{
                        type: Species.INS,
                        amount: 400,
                    }],
                    evolvesTo: DataNames.Deramon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
    },
    Seadramon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 27,
                    evolvesTo: DataNames.MegaSeadramon,
                },
            ],
            evolutionTree: DataNames.Betamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 37,
                    exp: [{
                        type: Species.AQU,
                        amount: 400,
                    }],
                    evolvesTo: DataNames.MegaSeadramon,
                },
            ],
            evolutionTree: DataNames.YukiAgumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.MegaSeadramon,
                    chance: 50,
                },
                {
                    item: DataNames.WaruSeadramon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 27,
                    digiPlates: [DataNames.MegaSeadramon],
                    evolvesTo: DataNames.MegaSeadramon,
                },
                {
                    level: 33,
                    digiPlates: [DataNames.WaruSeadramon],
                    evolvesTo: DataNames.WaruSeadramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MegaSeadramon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.MegaSeadramon],
        },
    },
    Icemon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.hardMountains,
            },
            evolutionTree: DataNames.Gotsumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 37,
                    evolvesTo: DataNames.Insekimon,
                },
            ],
            evolutionTree: DataNames.Gotsumon,
        },
    },
    Gekomon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.packetSwamp,
            },
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.Whamon,
                },
            ],
            evolutionTree: DataNames.Otamamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.MAC,
                        amount: 290,
                    }],
                    evolvesTo: DataNames.TonosamaGekomon,
                },
            ],
            evolutionTree: DataNames.Otamamon,
        },
        dssxw: {
            digiScores: [DataNames.Gekomon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            fusions: [DataNames.MachGaogamon],
        },
    },
    Numemon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Numemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Otamamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.southCity,
            },
            drops: [
                {
                    item: DataNames.Monzaemon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 32,
                    digiPlates: [DataNames.Monzaemon],
                    evolvesTo: DataNames.Monzaemon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.both,
            },
            fusions: [DataNames.MarineDevimon, DataNames.Monzaemon],
        },
    },
    Geremon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Otamamon,
        },
    },
    KaratsukiNumemon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 38,
                    exp: [{
                        type: Species.HOL,
                        amount: 310,
                    }],
                    obtained: [{
                        digimon: DataNames.Bakumon,
                    }],
                    evolvesTo: DataNames.Digitamamon,
                },
            ],
            evolutionTree: DataNames.Syakomon,
        },
    },
    Shellmon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Syakomon,
        },
        dssxw: {
            digiScores: [DataNames.Shellmon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            fusions: [DataNames.MegaSeadramon],
        },
    },
    MoriShellmon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tanemon,
        },
    },
    Octomon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            dna: [DataNames.Dagomon],
            evolutionTree: DataNames.Betamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.Dagomon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 29,
                    digiPlates: [DataNames.Dagomon],
                    evolvesTo: DataNames.Dagomon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.red,
            },
            fusions: [DataNames.Blossomon],
        },
    },
    Gesomon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            dna: [DataNames.Dagomon],
            evolutionTree: DataNames.Betamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MarineDevimon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.MarineDevimon, DataNames.MegaSeadramon],
        },
    },
    Coelamon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 31,
                    exp: [{
                        type: Species.AQU,
                        amount: 320,
                    }],
                    evolvesTo: DataNames.Anomalocarimon,
                },
            ],
            evolutionTree: DataNames.Syakomon,
        },
        dsle: {
            platesRequired: [DataNames.Coelamon],
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.Coelamon,
                    chance: 100,
                },
                {
                    item: DataNames.Mermaimon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 30,
                    evolvesTo: DataNames.Anomalocarimon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.Coelamon],
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.red,
            },
            fusions: [DataNames.Mermaimon, DataNames.AncientMermaimon],
        },
    },
    Rukamon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.AQU,
                        amount: 600,
                    }],
                    evolvesTo: DataNames.Whamon,
                },
                {
                    level: 36,
                    exp: [{
                        type: Species.MAC,
                        amount: 290,
                    }],
                    obtained: [{
                        digimon: DataNames.Hangyomon,
                    }],
                    evolvesTo: DataNames.Hangyomon,
                },
            ],
            evolutionTree: DataNames.Betamon,
        },
        dssxw: {
            digiScores: [DataNames.Rukamon],
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.both,
            },
            fusions: [DataNames.Whamon],
        },
    },
    Ebidramon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loopSwamp,
            },
            evolutions: [
                {
                    level: 30,
                    evolvesTo: DataNames.Brachimon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.red,
            },
            fusions: [DataNames.Mermaimon],
        },
    },
    Kuwagamon: {
        species: [Species.INS],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Ookuwamon,
                },
            ],
            evolutionTree: DataNames.Tentomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    exp: [{
                        type: Species.INS,
                        amount: 400,
                    }],
                    evolvesTo: DataNames.Ookuwamon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.Ookuwamon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 26,
                    digiPlates: [DataNames.Ookuwamon],
                    evolvesTo: DataNames.Ookuwamon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.blue,
            },
            fusions: [DataNames.Kimeramon, DataNames.Phantomon],
        },
    },
    Snimon: {
        species: [Species.INS],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            fusions: [DataNames.Kyukimon],
        },
    },
    Dokugumon: {
        species: [Species.INS],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 40,
                    exp: [{
                        type: Species.DAR,
                        amount: 750,
                    }],
                    evolvesTo: DataNames.Arukenimon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.Arukenimon,
                    chance: 50,
                },
                {
                    item: DataNames.WormmonW,
                    chance: 40,
                },
            ],
            evolutions: [
                {
                    level: 28,
                    digiPlates: [DataNames.Arukenimon],
                    evolvesTo: DataNames.Arukenimon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            fusions: [DataNames.Blossomon],
        },
    },
    Gokimon: {
        species: [Species.INS],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutions: [
                {
                    level: 26,
                    exp: [{
                        type: Species.INS,
                        amount: 120,
                    }],
                    evolvesTo: DataNames.AtlurKabuterimonB,
                },
            ],
            evolutionTree: DataNames.Impmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Budmon,
        },
    },
    Flymon: {
        species: [Species.INS],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.chipForest,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 41,
                    obtained: [{
                        digimon: DataNames.Dinobeemon,
                    }],
                    exp: [{
                        type: Species.DRG,
                        amount: 880,
                    }],
                    evolvesTo: DataNames.Dinobeemon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.TigerVespamon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.AncientBeatmon, DataNames.TigerVespamon],
        },
    },
    Yanmamon: {
        species: [Species.INS],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            fusions: [DataNames.Lilymon],
        },
    },
    SandYanmamon: {
        species: [Species.INS],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.limitValley,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Minomon,
        },
    },
    Vegiemon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.packetSwamp,
            },
            evolutions: [
                {
                    level: 24,
                    evolvesTo: DataNames.Blossomon,
                },
            ],
            evolutionTree: DataNames.Floramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            fusions: [DataNames.Jureimon, DataNames.Pinocchimon],
        },
    },
    Weedmon: {
        species: [Species.INS],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.AQU,
                        amount: 320,
                    }],
                    evolvesTo: DataNames.Blossomon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
    },
    RedVegiemon: {
        species: [Species.INS],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            dna: [DataNames.Vademon],
            evolutionTree: DataNames.Budmon,
        },
    },
    Woodmon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 41,
                    evolvesTo: DataNames.Jureimon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dsle: {
            platesRequired: [DataNames.Woodmon],
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.Woodmon,
                    chance: 100,
                },
                {
                    item: DataNames.SpiritOfWood,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 34,
                    obtained: [{
                        digimon: DataNames.Woodmon,
                    }],
                    evolvesTo: DataNames.Jureimon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Jureimon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Jureimon],
        },
    },
    Igamon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            platesRequired: [DataNames.Igamon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.Igamon,
                    chance: 100,
                },
            ],
            evolutions: [
                {
                    level: 32,
                    digiPlates: [DataNames.Piccolomon],
                    evolvesTo: DataNames.Piccolomon,
                },
                {
                    level: 34,
                    evolvesTo: DataNames.Vademon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            fusions: [DataNames.Kabukimon],
        },
    },
    Kogamon: {
        species: [Species.INS],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Budmon,
        },
    },
    Mechanorimon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.DAR,
                        amount: 450,
                    }],
                    evolvesTo: DataNames.EXTyrannomon,
                },
            ],
            evolutionTree: DataNames.ToyAgumonB,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.blue,
            },
            fusions: [DataNames.Gigadramon, DataNames.RookChessmon, DataNames.Greymon2010],
        },
    },
    Tankmon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 34,
                    exp: [{
                        type: Species.MAC,
                        amount: 330,
                    }],
                    evolvesTo: DataNames.MetalMamemon,
                },
            ],
            evolutionTree: DataNames.ToyAgumon,
        },
        dsle: {
            platesRequired: [DataNames.Tankmon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.Tankmon,
                    chance: 100,
                },
                {
                    item: DataNames.BlackAgumonW2,
                    chance: 20,
                },
            ],
            evolutions: [
                {
                    level: 30,
                    evolvesTo: DataNames.Gigadramon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            digiScores: [DataNames.Tankmon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            fusions: [DataNames.Gigadramon, DataNames.MetalGreymon, DataNames.Darkdramon],
        },
    },
    Hookmon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 28,
                    evolvesTo: DataNames.Insekimon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 34,
                    digiPlates: [DataNames.MetalMamemon],
                    evolvesTo: DataNames.MetalMamemon,
                },
                {
                    level: 28,
                    digiPlates: [DataNames.Mermaimon],
                    evolvesTo: DataNames.Mermaimon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Mermaimon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Mermaimon],
        },
    },
    Revolmon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 37,
                    exp: [{
                        type: Species.DRG,
                        amount: 390,
                    }],
                    evolvesTo: DataNames.Mametyramon,
                },
            ],
            evolutionTree: DataNames.ToyAgumon,
        },
        dsle: {
            platesRequired: [DataNames.Revolmon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.Revolmon,
                    chance: 100,
                },
                {
                    item: DataNames.Mamemon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 34,
                    digiPlates: [DataNames.MetalMamemon],
                    evolvesTo: DataNames.MetalMamemon,
                },
                {
                    level: 29,
                    digiPlates: [DataNames.Mamemon],
                    evolvesTo: DataNames.Mamemon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
            fusions: [DataNames.RizeGreymon],
        },
    },
    Clockmon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 40,
                    evolvesTo: DataNames.Knightmon,
                },
            ],
            evolutionTree: DataNames.Solarmon,
        },
        dsle: {
            platesRequired: [DataNames.Clockmon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.Clockmon,
                    chance: 100,
                },
            ],
            evolutions: [
                {
                    level: 28,
                    evolvesTo: DataNames.Knightmon,
                },
                {
                    level: 36,
                    digiPlates: [DataNames.Wisemon],
                    evolvesTo: DataNames.Wisemon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
            fusions: [DataNames.Wisemon, DataNames.Alphamon],
        },
    },
    Thunderballmon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    evolvesTo: DataNames.Mamemon,
                },
            ],
            evolutionTree: DataNames.Kokuwamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
            fusions: [DataNames.Sinduramon],
        },
    },
    Omekamon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 37,
                    evolvesTo: DataNames.Tekkamon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
    },
    Golemon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            evolutionTree: DataNames.Gotsumon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.blue,
            },
            fusions: [DataNames.RookChessmon, DataNames.AncientVolcamonSpade],
        },
    },
    Raremon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutionTree: DataNames.Otamamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    exp: [{
                        type: Species.MAC,
                        amount: 440,
                    }],
                    evolvesTo: DataNames.Nanomon,
                },
            ],
            evolutionTree: DataNames.Gizamon,
        },
    },
    Sukamon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 19,
                    evolvesTo: DataNames.Dagomon,
                },
                {
                    level: 29,
                    evolvesTo: DataNames.Garbemon,
                },
            ],
            evolutionTree: DataNames.Betamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    exp: [{
                        type: Species.MAC,
                        amount: 500,
                    }],
                    evolvesTo: DataNames.Garbemon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
            fusions: [DataNames.Monzaemon],
        },
    },
    PlatinumSukamon: {
        species: [Species.MAC],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 34,
                    evolvesTo: DataNames.MetalMamemon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.sunkenTunnel,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kapurimon,
        },
    },
    Starmon: {
        species: [Species.HOL, Species.MAC],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.sheerValley,
            },
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.SuperStarmon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 41,
                    exp: [{
                        type: Species.HOL,
                        amount: 880,
                    }],
                    evolvesTo: DataNames.SuperStarmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.MetalMamemon,
                    chance: 25,
                },
                {
                    item: DataNames.SuperStarmon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 32,
                    digiPlates: [DataNames.SuperStarmon],
                    evolvesTo: DataNames.SuperStarmon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            fusions: [DataNames.Insekimon, DataNames.Angewomon],
        },
    },
    Unimon: {
        species: [Species.HOL],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.skyPalace,
            },
            evolutions: [
                {
                    level: 36,
                    evolvesTo: DataNames.Piccolomon,
                },
            ],
            evolutionTree: DataNames.Bakumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    exp: [{
                        type: Species.HOL,
                        amount: 430,
                    }],
                    evolvesTo: DataNames.Piccolomon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.red,
            },
            fusions: [DataNames.Tyilinmon, DataNames.Ophanimon],
        },
    },
    Sorcerymon: {
        species: [Species.HOL],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.junkFactory,
            },
            evolutionTree: DataNames.Impmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gummymon,
        },
    },
    Wizardmon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutions: [
                {
                    level: 27,
                    obtained: [{
                        item: DataNames.CorePiece,
                    }],
                    evolvesTo: DataNames.Antylamon,
                },
                {
                    level: 27,
                    obtained: [{
                        item: DataNames.PurityDM,
                    }],
                    evolvesTo: DataNames.Ponchomon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 36,
                    exp: [{
                        type: Species.DAR,
                        amount: 510,
                    }],
                    evolvesTo: DataNames.Mummymon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            platesRequired: [DataNames.Wizardmon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.ArgomonUltimate,
                    chance: 25,
                },
                {
                    item: DataNames.Wisemon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 28,
                    evolvesTo: DataNames.Mummymon,
                },
                {
                    level: 32,
                    digiPlates: [DataNames.ArgomonUltimate],
                    evolvesTo: DataNames.ArgomonUltimate,
                },
                {
                    level: 36,
                    digiPlates: [DataNames.Wisemon],
                    evolvesTo: DataNames.Wisemon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            digiScores: [DataNames.Score],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.ArgomonUltimate,
                    chance: 25,
                },
                {
                    digiScore: DataNames.Wisemon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.ArgomonUltimate, DataNames.Angewomon, DataNames.Wisemon, DataNames.Beelzebumon2010Heart],
        },
    },
    Devimon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.DAR,
                        amount: 250,
                    }],
                    evolvesTo: DataNames.Vamdemon,
                },
            ],
            evolutionTree: DataNames.PicoDevimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 42,
                    exp: [{
                        type: Species.DAR,
                        amount: 1000,
                    }],
                    evolvesTo: DataNames.Vamdemon,
                },
            ],
            dna: [DataNames.Kimeramon, DataNames.LucemonFM],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            platesRequired: [DataNames.Devimon],
            location: {
                area: MapsList.dsle.magnetMine,
            },
            drops: [
                {
                    item: DataNames.Devimon,
                    chance: 100,
                },
                {
                    item: DataNames.PicoDevimonW1,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 31,
                    digiPlates: [DataNames.Vamdemon],
                    evolvesTo: DataNames.Vamdemon,
                },
                {
                    level: 35,
                    digiPlates: [DataNames.Devimon, DataNames.Kabuterimon, DataNames.KimeramonAlpha, DataNames.KimeramonBeta],
                    warps: [DataNames.PicoDevimonW2, DataNames.KimeramonW1],
                    evolvesTo: DataNames.Kimeramon,
                },
                {
                    level: 36,
                    digiPlates: [DataNames.Devimon, DataNames.Angemon, DataNames.LucemonFMAlpha, DataNames.LucemonFMBeta],
                    warps: [DataNames.PicoDevimonW1, DataNames.LucemonFMW1],
                    evolvesTo: DataNames.LucemonFM,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.Devimon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.both,
            },
            fusions: [DataNames.Vamdemon, DataNames.Kimeramon, DataNames.LadyDevimon],
        },
    },
    IceDevimon: {
        species: [Species.AQU],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 36,
                    exp: [
                        {
                            type: Species.DAR,
                            amount: 210,
                        },
                        {
                            type: Species.AQU,
                            amount: 270,
                        },
                    ],
                    evolvesTo: DataNames.MarineDevimon,
                },
            ],
            evolutionTree: DataNames.Gizamon,
        },
        dssxw: {
            digiScores: [DataNames.IceDevimon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.blue,
            },
            fusions: [DataNames.SkullBaluchimon, DataNames.MarineDevimon],
        },
    },
    Devidramon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 44,
                    exp: [{
                        type: Species.DAR,
                        amount: 1100,
                    }],
                    obtained: [{
                        digimon: DataNames.Kimeramon,
                    }],
                    evolvesTo: DataNames.Kimeramon,
                },
                {
                    level: 40,
                    exp: [{
                        type: Species.MAC,
                        amount: 440,
                    }],
                    evolvesTo: DataNames.Gigadramon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.labelForest,
            },
            drops: [
                {
                    item: DataNames.Plate,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 33,
                    digiPlates: [DataNames.LadyDevimon],
                    evolvesTo: DataNames.LadyDevimon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.LadyDevimon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Vamdemon, DataNames.LadyDevimon],
        },
    },
    Evilmon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutions: [
                {
                    level: 36,
                    evolvesTo: DataNames.Mummymon,
                },
            ],
            evolutionTree: DataNames.Impmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 39,
                    exp:[{
                        type: Species.DAR,
                        amount: 620,
                    }],
                    evolvesTo: DataNames.LadyDevimon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
            fusions: [DataNames.LucemonFM, DataNames.Devitamamon],
        },
    },
    Bakemon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 32,
                    exp: [{
                        type: Species.DAR,
                        amount: 420,
                    }],
                    evolvesTo: DataNames.Phantomon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.southCave,
            },
            drops: [
                {
                    item: DataNames.KimeramonAlpha,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 30,
                    evolvesTo: DataNames.Phantomon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.Bakemon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.both,
            },
            fusions: [DataNames.Infermon, DataNames.Vamdemon, DataNames.Phantomon],
        },
    },
    Chrysalimon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 30,
                    evolvesTo: DataNames.Infermon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 36,
                    evolvesTo: DataNames.Infermon,
                },
                {
                    level: 48,
                    exp: [{
                        type: Species.INS,
                        amount: 2000,
                    }],
                    evolvesTo: DataNames.ArgomonUltimate,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.magnetMine,
            },
            drops: [
                {
                    item: DataNames.Infermon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 26,
                    digiPlates: [DataNames.Infermon],
                    obtained: [{
                        digimon: DataNames.Kuramon,
                    }],
                    evolvesTo: DataNames.Infermon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            digiScores: [DataNames.Chrysalimon],
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.both,
            },
            fusions: [DataNames.Infermon, DataNames.Armagemon, DataNames.SkullKnightmon],
        },
    },
    Wendimon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 41,
                    evolvesTo: DataNames.Antylamon,
                },
            ],
            evolutionTree: DataNames.Kokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.southCave,
            },
            drops: [
                {
                    item: DataNames.Antylamon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 31,
                    digiPlates: [DataNames.Antylamon],
                    evolvesTo: DataNames.Antylamon,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.red,
            },
            fusions: [DataNames.ArgomonUltimate, DataNames.Bastemon],
        },
    },
    DarkLizardmon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 36,
                    exp: [{
                        type: Species.DAR,
                        amount: 340,
                    }],
                    evolvesTo: DataNames.Volcamon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
    },
    Musyamon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 37,
                    exp: [{
                        type: Species.BST,
                        amount: 370,
                    }],
                    evolvesTo: DataNames.Vajramon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.loopSwamp,
            },
            evolutions: [
                {
                    level: 32,
                    digiPlates: [DataNames.SkullBaluchimon],
                    evolvesTo: DataNames.SkullBaluchimon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            digiScores: [DataNames.Musyamon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Zanbamon,
                    chance: 20,
                },
            ],
            fusions: [DataNames.Karatenmon, DataNames.Gaioumon, DataNames.Zanbamon],
        },
    },
    Sangloupmon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 32,
                    evolvesTo: DataNames.Matadormon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 35,
                    exp: [{
                        type: Species.DAR,
                        amount: 390,
                    }],
                    evolvesTo: DataNames.Matadormon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            platesRequired: [DataNames.Sangloupmon],
            location: {
                area: MapsList.dsle.southCave,
            },
            drops: [
                {
                    item: DataNames.Sangloupmon,
                    chance: 100,
                },
                {
                    item: DataNames.SkullBaluchimon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 30,
                    evolvesTo: DataNames.Matadormon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
            fusions: [DataNames.GranDracmon],
        },
    },
    Firamon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 40,
                    evolvesTo: DataNames.Flaremon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dsle: {
            platesRequired: [DataNames.Firamon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.Firamon,
                    chance: 100,
                },
            ],
            evolutions: [
                {
                    level: 30,
                    digiPlates: [DataNames.Flaremon],
                    evolvesTo: DataNames.Flaremon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            digiScores: [DataNames.Firamon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Flaremon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Flaremon],
        },
    },
    Lekismon: {
        species: [Species.DAR, Species.BST],
        stage: Stage.stage3,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 33,
                    exp: [{
                        type: Species.DAR,
                        amount: 280,
                    }],
                    evolvesTo: DataNames.Crescemon,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dsle: {
            platesRequired: [DataNames.Lekismon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.Yukidarumon,
                    chance: 50,
                },
                {
                    item: DataNames.Crescemon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 29,
                    evolvesTo: DataNames.Taomon,
                },
                {
                    level: 30,
                    digiPlates: [DataNames.Crescemon],
                    evolvesTo: DataNames.Crescemon,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            digiScores: [DataNames.Lekismon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            fusions: [DataNames.Crescemon, DataNames.Bastemon],
        },
    },
    Buraimon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        dsle: {
            platesRequired: [DataNames.Buraimon],
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.Buraimon,
                    chance: 100,
                },
                {
                    item: DataNames.Butenmon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 33,
                    digiPlates: [DataNames.Digitamamon],
                    evolvesTo: DataNames.Digitamamon,
                },
                {
                    level: 36,
                    digiPlates: [DataNames.Butenmon],
                    evolvesTo: DataNames.Butenmon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            digiScores: [DataNames.Buraimon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.red,
            },
            fusions: [DataNames.Grademon, DataNames.Butenmon],
        },
    },
    Dorulumon: {
        species: [Species.BST],
        stage: Stage.stage3,
        dssxw: {
            digiScores: [DataNames.Score],
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.ShoutmonX3,
                    chance: 25,
                },
                {
                    digiScore: DataNames.DoruluCannon,
                    chance: 75,
                },
            ],
            fusions: [DataNames.ShoutmonX3, DataNames.ShoutmonX4, DataNames.ShoutmonX5, DataNames.ShoutmonX4B, DataNames.DoruluCannon, DataNames.ShoutmonX3GM, DataNames.ShoutmonX3SD, DataNames.ShoutmonX4S],
        },
    },
    Greymon2010: {
        species: [Species.DRG],
        stage: Stage.stage3,
        dssxw: {
            digiScores: [DataNames.Greymon2010],
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Greymon2010,
                    chance: 100,
                },
            ],
            fusions: [DataNames.MetalGreymon2010, DataNames.GreyKnightsmon, DataNames.ShoutmonX3GM],
        },
    },
    GreymonO2010: {
        species: [Species.DRG],
        stage: Stage.stage3,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
        },
    },
    MailBirdramon: {
        species: [Species.BRD],
        stage: Stage.stage3,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MetalGreymon2010,
                    chance: 50,
                },
            ],
            fusions: [DataNames.MetalGreymon2010, DataNames.GreyKnightsmon, DataNames.ShoutmonX3GM],
        },
    },
    SkullKnightmon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        dssxw: {
            digiScores: [DataNames.SkullKnightmon],
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.SkullKnightmon,
                    chance: 100,
                },
            ],
            fusions: [DataNames.DarkKnightmon, DataNames.GreyKnightsmon, DataNames.ShoutmonX3SD],
        },
    },
    SkullKnightmonBR: {
        species: [Species.DAR],
        stage: Stage.stage3,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
        },
    },
    DeadlyAxemon: {
        species: [Species.DAR],
        stage: Stage.stage3,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.DarkKnightmon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.DarkKnightmon, DataNames.GreyKnightsmon, DataNames.ShoutmonX3SD],
        },
    },
    ShoutmonX2: {
        species: [Species.MAC],
        stage: Stage.stage3,
        dssxw: {
            digiScores: [DataNames.ShoutmonX2],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    JetSparrow: {
        species: [Species.BRD],
        stage: Stage.stage3,
        dssxw: {
            digiScores: [DataNames.JetSparrow],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    DoruluCannon: {
        species: [Species.DRG],
        stage: Stage.stage3,
        dssxw: {
            digiScores: [DataNames.DoruluCannon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    //#endregion

    //#region Perfect
    Fladramon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Fladramon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            fusions: [DataNames.Apollomon, DataNames.Cannondramon, DataNames.ImperialdramonDM],
        },
    },
    Shadramon: {
        species: [Species.INS],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.BelialVamdemon],
            evolutionTree: DataNames.Shadramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 38,
                    obtained: [{
                        digimon: DataNames.MegaloGrowlmon,
                    }],
                    evolvesTo: DataNames.Megidramon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
    },
    Allomon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Allomon,
        },
    },
    Lynxmon: {
        species: [Species.BST],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Lynxmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.Apollomon],
                    evolvesTo: DataNames.Apollomon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
    },
    Kenkimon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.GigaSeadramon],
            evolutionTree: DataNames.Kenkimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 47,
                    digiPlates: [DataNames.MugendramonAlpha, DataNames.MugendramonBeta],
                    evolvesTo: DataNames.Mugendramon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.AncientVolcamonSpade,
                    chance: 10,
                },
            ],
            fusions: [DataNames.AncientVolcamonSpade],
        },
    },
    Owlmon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Owlmon,
        },
    },
    Pipismon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Pipismon,
        },
    },
    Shurimon: {
        species: [Species.BRD, Species.PLN],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Hawkmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Shurimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 46,
                    digiPlates: [DataNames.Pinocchimon],
                    obtained: [{
                        digimon: DataNames.Jureimon,
                    }],
                    evolvesTo: DataNames.Pinocchimon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.red,
            },
            fusions: [DataNames.Lotusmon, DataNames.AncientWisemon],
        },
    },
    Ponchomon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Ponchomon,
        },
    },
    Kabukimon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kabukimon,
        },
        dssxw: {
            digiScores: [DataNames.Kabukimon],
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Sakuyamon,
                    chance: 20,
                },
            ],
            fusions: [DataNames.Sakuyamon, DataNames.Lotusmon],
        },
    },
    Tylomon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.GigaSeadramon],
            evolutionTree: DataNames.Tylomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.both,
            },
            fusions: [DataNames.Neptunemon, DataNames.MetalSeadramon],
        },
    },
    Seahomon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Seahomon,
        },
    },
    Nefertimon: {
        species: [Species.HOL],
        stage: Stage.stage4,
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.both,
            },
            fusions: [DataNames.Pharaohmon, DataNames.AncientSphinxmon],
        },
    },
    Toucanmon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Toucanmon,
        },
    },
    Prairiemon: {
        species: [Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Terriermon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Prairiemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 45,
                    digiPlates: [DataNames.Mercurymon],
                    evolvesTo: DataNames.Mercurymon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Mercurymon,
                    chance: 50,
                },
            ],
            fusions: [DataNames.Mercurymon],
        },
    },
    Magnamon: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Susanoomon],
            evolutionTree: DataNames.Magnamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 44,
                    digiPlates: [DataNames.GigaSeadramon],
                    evolvesTo: DataNames.GigaSeadramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.Magnamon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Crossmon, DataNames.ImperialdramonFM],
        },
    },
    Kongoumon: {
        species: [Species.INS],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Wormmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            dna: [DataNames.Susanoomon],
            evolutionTree: DataNames.Kongoumon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.HeraclesKabuterimon,
                    chance: 20,
                },
            ],
            fusions: [DataNames.HeraclesKabuterimon],
        },
    },
    MetalGreymon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 47,
                    evolvesTo: DataNames.WarGreymon,
                },
                {
                    level: 42,
                    exp: [{
                        type: Species.DAR,
                        amount: 800,
                    }],
                    evolvesTo: DataNames.BlackWarGreymon,
                },
                {
                    level: 62,
                    obtained: [{
                        digimon: DataNames.Omegamon,
                    }],
                    evolvesTo: DataNames.Omegamon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 52,
                    obtained: [{
                        digimon: DataNames.Agumon,
                    }],
                    evolvesTo: DataNames.WarGreymon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            platesRequired: [DataNames.MetalGreymon],
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.MetalGreymon,
                    chance: 75,
                },
                {
                    item: DataNames.AgumonW2,
                    chance: 90,
                },
            ],
            evolutions: [
                {
                    level: 40,
                    digiPlates: [DataNames.WarGreymon],
                    obtained: [{
                        digimon: DataNames.Agumon,
                    }],
                    evolvesTo: DataNames.WarGreymon,
                },
                {
                    level: 48,
                    digiPlates: [DataNames.AncientGreymon, DataNames.SpiritOfFire],
                    evolvesTo: DataNames.AncientGreymon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            digiScores: [DataNames.MetalGreymon],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.WarGreymon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.AncientGreymon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.WarGreymon, DataNames.Dorugoramon, DataNames.MugendramonHeart, DataNames.AncientGreymon],
        },
    },
    WereGarurumonBlue: {
        species: [Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 45,
                    evolvesTo: DataNames.MetalGarurumon,
                },
                {
                    level: 52,
                    exp: [{
                        type: Species.DRG,
                        amount: 700,
                    }],
                    evolvesTo: DataNames.Darkdramon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 52,
                    obtained: [{
                        digimon: DataNames.Gabumon,
                    }],
                    evolvesTo: DataNames.MetalGarurumon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.GabumonW2,
                    chance: 90,
                },
                {
                    item: DataNames.SpiritOfLight,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 40,
                    digiPlates: [DataNames.MetalGarurumon],
                    obtained: [{
                        digimon: DataNames.Gabumon,
                    }],
                    evolvesTo: DataNames.MetalGarurumon,
                },
                {
                    level: 48,
                    digiPlates: [DataNames.AncientGarurumon, DataNames.SpiritOfLight],
                    evolvesTo: DataNames.AncientGarurumon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.WereGarurumon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MetalGarurumon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.AncientGarurumon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.MetalGarurumon, DataNames.Mercurymon, DataNames.AncientGarurumon],
        },
    },
    Garudamon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 36,
                    exp: [{
                        type: Species.BRD,
                        amount: 300,
                    }],
                    evolvesTo: DataNames.Hououmon,
                },
            ],
            evolutionTree: DataNames.Piyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 47,
                    exp: [{
                        type: Species.BST,
                        amount: 800,
                    }],
                    evolvesTo: DataNames.Gryphomon,
                },
            ],
            dna: [DataNames.Anubimon],
            evolutionTree: DataNames.Piyomon,
        },
        dsle: {
            platesRequired: [DataNames.Garudamon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.Garudamon,
                    chance: 75,
                },
                {
                    item: DataNames.Hououmon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.Hououmon],
                    evolvesTo: DataNames.Hououmon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.both,
            },
            fusions: [DataNames.Anubimon, DataNames.Valkyrimon, DataNames.DukemonSpade, DataNames.Hououmon, DataNames.AncientIrismon, DataNames.UlforceVeedramon],
        },
    },
    Lilymon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 44,
                    evolvesTo: DataNames.Rosemon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tanemon,
        },
        dsle: {
            platesRequired: [DataNames.Lilymon],
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.Lilymon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 42,
                    evolvesTo: DataNames.Rosemon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            digiScores: [DataNames.Lilymon],
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Minervamon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Minervamon, DataNames.Rosemon, DataNames.AncientIrismon],
        },
    },
    AtlurKabuterimonR: {
        species: [Species.INS],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 42,
                    exp: [{
                        type: Species.INS,
                        amount: 600,
                    }],
                    evolvesTo: DataNames.HeraclesKabuterimon,
                },
            ],
            evolutionTree: DataNames.Tentomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.HeraclesKabuterimon],
            evolutionTree: DataNames.Minomon,
        },
        dsle: {
            platesRequired: [DataNames.AtlurKabuterimon],
            location: {
                area: MapsList.dsle.registerJungle,
            },
            drops: [
                {
                    item: DataNames.AtlurKabuterimon,
                    chance: 75,
                },
                {
                    item: DataNames.SpiritOfThunder,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 40,
                    digiPlates: [DataNames.HeraclesKabuterimon],
                    evolvesTo: DataNames.HeraclesKabuterimon,
                },
                {
                    level: 47,
                    digiPlates: [DataNames.AncientBeatmonAlpha, DataNames.AncientBeatmonBeta, DataNames.SpiritOfThunder],
                    obtained: [
                        {
                            digimon: DataNames.AtlurKabuterimonR,
                        },
                        {
                            digimon: DataNames.Ookuwamon,
                        },
                    ],
                    evolvesTo: DataNames.AncientBeatmon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.both,
            },
            fusions: [DataNames.Holydramon, DataNames.AncientBeatmon, DataNames.HeraclesKabuterimon, DataNames.VenomVamdemon],
        },
    },
    Zudomon: {
        species: [Species.AQU, Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.hardMountains,
            },
            evolutions: [
                {
                    level: 53,
                    exp: [{
                        type: Species.AQU,
                        amount: 900,
                    }],
                    evolvesTo: DataNames.Vikemon,
                },
                {
                    level: 67,
                    exp: [{
                        type: Species.AQU,
                        amount: 6000,
                    }],
                    evolvesTo: DataNames.Neptunemon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 50,
                    evolvesTo: DataNames.Vikemon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            platesRequired: [DataNames.Zudomon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.Zudomon,
                    chance: 75,
                },
                {
                    item: DataNames.Vikemon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.Vikemon],
                    evolvesTo: DataNames.Vikemon,
                },
                {
                    level: 49,
                    digiPlates: [DataNames.AncientMegatheriumon, DataNames.SpiritOfIce],
                    evolvesTo: DataNames.AncientMegatheriumon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Vikemon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.AncientMegatheriumon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Vikemon, DataNames.SaberLeomon, DataNames.AncientMegatheriumon],
        },
    },
    HolyAngemon: {
        species: [Species.HOL],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 45,
                    evolvesTo: DataNames.Seraphimon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 48,
                    exp: [{
                        type: Species.MAC,
                        amount: 850,
                    }],
                    evolvesTo: DataNames.SlashAngemon,
                },
                {
                    level: 66,
                    exp: [{
                        type: Species.HOL,
                        amount: 7777,
                    }],
                    evolvesTo: DataNames.Seraphimon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            platesRequired: [DataNames.HolyAngemon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.HolyAngemon,
                    chance: 75,
                },
                {
                    item: DataNames.ShakkoumonW2,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 41,
                    digiPlates: [DataNames.Seraphimon],
                    evolvesTo: DataNames.Seraphimon,
                },
                {
                    level: 38,
                    evolvesTo: DataNames.Jijimon,
                },
                {
                    level: 44,
                    digiPlates: [DataNames.Goddramon],
                    evolvesTo: DataNames.Goddramon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.HolyAngemon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.Seraphimon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Goddramon, DataNames.Seraphimon],
        },
    },
    Angewomon: {
        species: [Species.HOL],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.skyPalace,
            },
            evolutions: [
                {
                    level: 48,
                    evolvesTo: DataNames.MarineAngemon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 64,
                    exp: [{
                        type: Species.HOL,
                        amount: 2700,
                    }],
                    evolvesTo: DataNames.Ophanimon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            platesRequired: [DataNames.Angewomon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.Ophanimon,
                    chance: 25,
                },
                {
                    item: DataNames.Holydramon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 41,
                    digiPlates: [DataNames.Ophanimon],
                    evolvesTo: DataNames.Ophanimon,
                },
                {
                    level: 44,
                    digiPlates: [DataNames.Holydramon],
                    evolvesTo: DataNames.Holydramon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            digiScores: [DataNames.Angewomon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.both,
            },
            fusions: [DataNames.Ophanimon, DataNames.Seraphimon, DataNames.Holydramon],
        },
    },
    Paildramon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 53,
                    exp: [{
                        type: Species.HOL,
                        amount: 4000,
                    }],
                    evolvesTo: DataNames.ImperialdramonFM,
                },
                {
                    level: 53,
                    exp: [{
                        type: Species.DRG,
                        amount: 4000,
                    }],
                    evolvesTo: DataNames.ImperialdramonDM,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 56,
                    exp: [{
                        type: Species.DRG,
                        amount: 2200,
                    }],
                    obtained: [{
                        digimon: DataNames.Chicomon,
                    }],
                    evolvesTo: DataNames.ImperialdramonDM,
                },
                {
                    level: 60,
                    obtained: [{
                        digimon: DataNames.ImperialdramonDM,
                    }],
                    evolvesTo: DataNames.ImperialdramonFM,
                },
            ],
            evolutionTree: DataNames.Paildramon,
        },
        dsle: {
            platesRequired: [DataNames.PaildramonAlpha, DataNames.PaildramonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 41,
                    evolvesTo: DataNames.ImperialdramonDM,
                },
            ],
            evolutionTree: DataNames.Paildramon,
        },
        dssxw: {
            digiScores: [DataNames.Paildramon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.ImperialdramonDM,
                    chance: 25,
                },
            ],
            fusions: [DataNames.AncientGreymon, DataNames.ImperialdramonDM],
        },
    },
    Silphymon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.tropicalIsles,
            },
            evolutions: [
                {
                    level: 52,
                    exp: [{
                        type: Species.BRD,
                        amount: 1200,
                    }],
                    evolvesTo: DataNames.Valkyrimon,
                },
            ],
            evolutionTree: DataNames.Hawkmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 52,
                    exp: [{
                        type: Species.HOL,
                        amount: 1200,
                    }],
                    evolvesTo: DataNames.Valkyrimon,
                },
            ],
            dna: [DataNames.Valdurmon],
            evolutionTree: DataNames.Silphymon,
        },
        dsle: {
            platesRequired: [DataNames.SilphymonAlpha, DataNames.SilphymonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 39,
                    evolvesTo: DataNames.Valkyrimon,
                },
                {
                    level: 46,
                    digiPlates: [DataNames.AncientIrismon, DataNames.SpiritOfWind],
                    evolvesTo: DataNames.AncientIrismon,
                },
            ],
            evolutionTree: DataNames.Silphymon,
        },
        dssxw: {
            digiScores: [DataNames.Silphymon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Valkyrimon, DataNames.AncientIrismon],
        },
    },
    Shakkoumon: {
        species: [Species.HOL],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutionTree: DataNames.Shakkoumon,
        },
        dsle: {
            platesRequired: [DataNames.ShakkoumonAlpha, DataNames.ShakkoumonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 41,
                    digiPlates: [DataNames.SlashAngemon],
                    evolvesTo: DataNames.SlashAngemon,
                },
            ],
            evolutionTree: DataNames.Shakkoumon,
        },
        dssxw: {
            digiScores: [DataNames.Shakkoumon],
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.both,
            },
            fusions: [DataNames.Vikemon, DataNames.Seraphimon, DataNames.DaiPenmon],
        },
    },
    MegaloGrowlmon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 57,
                    evolvesTo: DataNames.Dukemon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 60,
                    obtained: [{
                        digimon: DataNames.Megidramon,
                    }],
                    evolvesTo: DataNames.Dukemon,
                },
                {
                    level: 48,
                    exp: [{
                        type: Species.DAR,
                        amount: 900,
                    }],
                    obtained: [{
                        digimon: DataNames.Guilmon,
                    }],
                    evolvesTo: DataNames.Megidramon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dsle: {
            platesRequired: [DataNames.MegaloGrowlmon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.Dukemon],
                    obtained: [
                        {
                            digimon: DataNames.Guilmon,
                        },
                        {
                            digimon: DataNames.Megidramon,
                        },
                    ],
                    evolvesTo: DataNames.Dukemon,
                },
                {
                    level: 38,
                    obtained: [{
                        digimon: DataNames.MegaloGrowlmon,
                    }],
                    evolvesTo: DataNames.Megidramon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.MegaloGrowlmon],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.DukemonHeart,
                    chance: 25,
                },
                {
                    digiScore: DataNames.Megidramon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.DukemonHeart, DataNames.Megidramon],
        },
    },
    Taomon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.skyPalace,
            },
            evolutions: [
                {
                    level: 50,
                    evolvesTo: DataNames.Kuzuhamon,
                },
                {
                    level: 48,
                    exp: [{
                        type: Species.HOL,
                        amount: 1500,
                    }],
                    evolvesTo: DataNames.Sakuyamon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 52,
                    exp: [{
                        type: Species.HOL,
                        amount: 1600,
                    }],
                    obtained: [{
                        digimon: DataNames.Kuzuhamon,
                    }],
                    evolvesTo: DataNames.Sakuyamon,
                },
            ],
            dna: [DataNames.Kuzuhamon],
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Sakuyamon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 42,
                    digiPlates: [DataNames.Sakuyamon],
                    obtained: [{
                        digimon: DataNames.Renamon,
                    }],
                    evolvesTo: DataNames.Sakuyamon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            digiScores: [DataNames.Taomon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.both,
            },
            fusions: [DataNames.ChronomonHM, DataNames.Sakuyamon, DataNames.Dianamon, DataNames.Ravemon],
        },
    },
    Rapidmon: {
        species: [Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.tropicalIsles,
            },
            evolutions: [
                {
                    level: 51,
                    evolvesTo: DataNames.SaintGargomon,
                },
                {
                    level: 44,
                    evolvesTo: DataNames.SaberLeomon,
                },
            ],
            evolutionTree: DataNames.Terriermon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [
                        {
                            type: Species.HOL,
                            amount: 800,
                        },
                        {
                            type: Species.MAC,
                            amount: 800,
                        },
                    ],
                    evolvesTo: DataNames.SaintGargomon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            platesRequired: [DataNames.Rapidmon],
            location: {
                area: MapsList.dsle.northCity,
            },
            drops: [
                {
                    item: DataNames.Rapidmon,
                    chance: 75,
                },
                {
                    item: DataNames.SaintGargomon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 42,
                    digiPlates: [DataNames.SaintGargomon],
                    obtained: [{
                        digimon: DataNames.Terriermon,
                    }],
                    evolvesTo: DataNames.SaintGargomon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            digiScores: [DataNames.Rapidmon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.SaintGargomon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.CherubimonZen, DataNames.SaintGargomon],
        },
    },
    Cyberdramon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.lavaRiver,
            },
            evolutions: [
                {
                    level: 53,
                    exp: [{
                        type: Species.HOL,
                        amount: 800,
                    }],
                    evolvesTo: DataNames.DeathmonB,
                },
            ],
            evolutionTree: DataNames.Gotsumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 51,
                    exp: [{
                        type: Species.MAC,
                        amount: 1800,
                    }],
                    evolvesTo: DataNames.Justimon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.graboCentral,
            },
            drops: [
                {
                    item: DataNames.Justimon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.Justimon],
                    obtained: [{
                        digimon: DataNames.Monodramon,
                    }],
                    evolvesTo: DataNames.Justimon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Score],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Justimon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Justimon, DataNames.Ravemon],
        },
    },
    Antylamon: {
        species: [Species.DAR, Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 40,
                    exp: [{
                        type: Species.DAR,
                        amount: 850,
                    }],
                    evolvesTo: DataNames.CherubimonAku,
                },
                {
                    level: 40,
                    exp: [{
                        type: Species.HOL,
                        amount: 850,
                    }],
                    evolvesTo: DataNames.CherubimonZen,
                },
                {
                    level: 62,
                    obtained: [{
                        digimon: DataNames.ChaosDukemon,
                    }],
                    evolvesTo: DataNames.ChaosDukemon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 62,
                    exp: [{
                        type: Species.HOL,
                        amount: 3000,
                    }],
                    evolvesTo: DataNames.CherubimonZen,
                },
                {
                    level: 62,
                    exp: [{
                        type: Species.DAR,
                        amount: 2300,
                    }],
                    evolvesTo: DataNames.CherubimonAku,
                },
            ],
            evolutionTree: DataNames.Kokomon,
        },
        dsle: {
            platesRequired: [DataNames.Antylamon],
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.Antylamon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 41,
                    digiPlates: [DataNames.CherubimonZen],
                    obtained: [{
                        digimon: DataNames.CherubimonAku,
                    }],
                    evolvesTo: DataNames.CherubimonZen,
                },
                {
                    level: 38,
                    evolvesTo: DataNames.CherubimonAku,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.CherubimonZen,
                    chance: 25,
                },
            ],
            fusions: [DataNames.CherubimonZen, DataNames.Minervamon],
        },
    },
    RizeGreymon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 54,
                    exp: [{
                        type: Species.HOL,
                        amount: 1300,
                    }],
                    evolvesTo: DataNames.ShineGreymon,
                },
                {
                    level: 60,
                    exp: [{
                        type: Species.MAC,
                        amount: 3000,
                    }],
                    obtained: [{
                        digimon: DataNames.DotShineGreymon,
                    }],
                    evolvesTo: DataNames.DotShineGreymon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            platesRequired: [DataNames.RizeGreymon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.RizeGreymon,
                    chance: 75,
                },
                {
                    item: DataNames.AgumonW1,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.ShineGreymon],
                    evolvesTo: DataNames.ShineGreymon,
                },
                {
                    level: 49,
                    obtained: [{
                        digimon: DataNames.ShineGreymon,
                    }],
                    evolvesTo: DataNames.DotShineGreymon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            digiScores: [DataNames.RizeGreymon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Examon, DataNames.ShineGreymon, DataNames.ShineGreymonBM],
        },
    },
    MachGaogamon: {
        species: [Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 53,
                    evolvesTo: DataNames.MirageGaogamon,
                },
                {
                    level: 60,
                    exp: [{
                        type: Species.MAC,
                        amount: 3000,
                    }],
                    obtained: [{
                        digimon: DataNames.DotMirageGaogamon,
                    }],
                    evolvesTo: DataNames.DotMirageGaogamon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            platesRequired: [DataNames.MachGaogamon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.MachGaogamon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 42,
                    digiPlates: [DataNames.MirageGaogamon],
                    evolvesTo: DataNames.MirageGaogamon,
                },
                {
                    level: 49,
                    obtained: [{
                        digimon: DataNames.MirageGaogamon,
                    }],
                    evolvesTo: DataNames.DotMirageGaogamon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.MachGaogamon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MirageGaogamon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.MirageGaogamon, DataNames.MirageGaogamonBM],
        },
    },
    Lilamon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [{
                        type: Species.INS,
                        amount: 1700,
                    }],
                    evolvesTo: DataNames.Rosemon,
                },
                {
                    level: 57,
                    exp: [{
                        type: Species.INS,
                        amount: 2900,
                    }],
                    obtained: [{
                        digimon: DataNames.Rosemon,
                    }],
                    evolvesTo: DataNames.Lotusmon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            platesRequired: [DataNames.Lilamon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 42,
                    evolvesTo: DataNames.Rosemon,
                },
                {
                    level: 38,
                    evolvesTo: DataNames.Babamon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Rosemon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.Rosemon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Rosemon, DataNames.AncientIrismon, DataNames.RosemonBM],
        },
    },
    Yatagaramon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.coreField,
            },
            evolutions: [
                {
                    level: 54,
                    evolvesTo: DataNames.Valdurmon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            sprite: "_2",
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [{
                        type: Species.MAC,
                        amount: 1000,
                    }],
                    evolvesTo: DataNames.Ravemon,
                },
            ],
            dna: [DataNames.Anubimon, DataNames.Susanoomon],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            sprite: "_2",
            platesRequired: [DataNames.Yatagaramon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 40,
                    obtained: [{
                        digimon: DataNames.Falcomon,
                    }],
                    evolvesTo: DataNames.Ravemon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            sprite: "_2",
            digiScores: [DataNames.Yatagaramon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Ravemon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Crossmon, DataNames.Ravemon, DataNames.RavemonBM],
        },
    },
    Shawujinmon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 51,
                    exp: [{
                        type: Species.MAC,
                        amount: 960,
                    }],
                    evolvesTo: DataNames.JumboGamemon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            platesRequired: [DataNames.Shawujinmon],
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            drops: [
                {
                    item: DataNames.Shawujinmon,
                    chance: 75,
                },
                {
                    item: DataNames.JumboGamemon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 42,
                    digiPlates: [DataNames.JumboGamemon],
                    evolvesTo: DataNames.JumboGamemon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.JumboGamemon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Justimon, DataNames.JumboGamemon],
        },
    },
    BishopChessmon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [{
                        type: Species.MAC,
                        amount: 1300,
                    }],
                    evolvesTo: DataNames.KingChessmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.blue,
            },
            fusions: [DataNames.JumboGamemon, DataNames.HiAndromon],
        },
    },
    RookChessmon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [{
                        type: Species.MAC,
                        amount: 1300,
                    }],
                    evolvesTo: DataNames.QueenChessmon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            digiScores: [DataNames.RookChessmon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
            fusions: [DataNames.JumboGamemon, DataNames.AncientTroiamon],
        },
    },
    Tyilinmon: {
        species: [Species.HOL],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 51,
                    exp: [{
                        type: Species.HOL,
                        amount: 2000,
                    }],
                    evolvesTo: DataNames.Sleipmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 65,
                    exp: [{
                        type: Species.HOL,
                        amount: 4800,
                    }],
                    evolvesTo: DataNames.Sleipmon,
                },
            ],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 42,
                    digiPlates: [DataNames.Sleipmon],
                    evolvesTo: DataNames.Sleipmon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            digiScores: [DataNames.Tyilinmon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.both,
            },
            fusions: [DataNames.Sleipmon, DataNames.AncientGarurumon, DataNames.Valdurmon, DataNames.Spadamon],
        },
    },
    Dorugremon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 49,
                    evolvesTo: DataNames.Dorugoramon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 54,
                    exp: [{
                        type: Species.ANY,
                        amount: 5700,
                    }],
                    evolvesTo: DataNames.Dorugoramon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dsle: {
            platesRequired: [DataNames.Dorugremon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.Dorugremon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 44,
                    digiPlates: [DataNames.Dorugoramon],
                    evolvesTo: DataNames.Dorugoramon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Dorugremon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Dorugoramon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Examon, DataNames.Dorugoramon],
        },
    },
    Grademon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dsle: {
            platesRequired: [DataNames.Grademon],
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.Grademon,
                    chance: 75,
                },
                {
                    item: DataNames.Alphamon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 48,
                    digiPlates: [DataNames.Alphamon],
                    obtained: [{
                        digimon: DataNames.Dorugoramon,
                    }],
                    evolvesTo: DataNames.Alphamon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Grademon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Alphamon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Alphamon, DataNames.Duftmon, DataNames.UlforceVeedramon],
        },
    },
    AeroVeedramon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutions: [
                {
                    level: 63,
                    exp: [{
                        type: Species.HOL,
                        amount: 4500,
                    }],
                    obtained: [{
                        digimon: DataNames.Airdramon,
                    }],
                    evolvesTo: DataNames.Goddramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            platesRequired: [DataNames.AeroVeedramon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.AeroVeedramon,
                    chance: 75,
                },
                {
                    item: DataNames.Dynasmon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 48,
                    digiPlates: [DataNames.UlforceVeedramonAlpha, DataNames.UlforceVeedramonBeta],
                    obtained: [{
                        digimon: DataNames.UlforceVeedramon,
                    }],
                    evolvesTo: DataNames.UlforceVeedramon,
                },
                {
                    level: 46,
                    digiPlates: [DataNames.Dynasmon],
                    evolvesTo: DataNames.Dynasmon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.AeroVeedramon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.UlforceVeedramon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Examon, DataNames.UlforceVeedramon],
        },
    },
    BlackMegaloGrowlmon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.lavaRiver,
            },
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,
            },
            dna: [DataNames.ChaosDukemon],
            evolutionTree: DataNames.Gigimon,
        },
    },
    MasterTyrannomon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dsle: {
            platesRequired: [DataNames.MasterTyrannomon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.MasterTyrannomon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 42,
                    digiPlates: [DataNames.Gaioumon],
                    evolvesTo: DataNames.Gaioumon,
                },
                {
                    level: 49,
                    digiPlates: [DataNames.Examon],
                    obtained: [{
                        digimon: DataNames.Examon,
                    }],
                    evolvesTo: DataNames.Examon
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.both,
            },
            fusions: [DataNames.Examon, DataNames.Goddramon, DataNames.AncientGreymon, DataNames.ShineGreymon, DataNames.Greymon2010],
        },
    },
    Triceramon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutions: [
                {
                    level: 40,
                    evolvesTo: DataNames.Cannondramon,
                },
            ],
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 47,
                    exp: [{
                        type: Species.MAC,
                        amount: 1250,
                    }],
                    evolvesTo: DataNames.Cannondramon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.DukemonSpade,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Goddramon, DataNames.Darkdramon, DataNames.DukemonSpade],
        },
    },
    Vermillimon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 58,
                    exp: [{
                        type: Species.DAR,
                        amount: 2100,
                    }],
                    evolvesTo: DataNames.BlackWarGreymon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            fusions: [DataNames.Examon, DataNames.Cannondramon, DataNames.AncientVolcamonHeart, DataNames.DukemonCM],
        },
    },
    Mametyramon: {
        species: [Species.MAC, Species.DRG],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutionTree: DataNames.ToyAgumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.graboCave,
            },
            drops: [
                {
                    item: DataNames.Spinomon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.Spinomon],
                    evolvesTo: DataNames.Spinomon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.red,
            },
            fusions: [DataNames.PrinceMamemon, DataNames.Megidramon],
        },
    },
    GrapLeomon: {
        species: [Species.BST],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 57,
                    exp: [{
                        type: Species.BST,
                        amount: 2000,
                    }],
                    evolvesTo: DataNames.SaberLeomon,
                },
            ],
            dna: [DataNames.BanchoLeomon, DataNames.Duftmon],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.SaberLeomon,
                    chance: 25,
                },
                {
                    item: DataNames.Duftmon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.SaberLeomon],
                    obtained: [{
                        digimon: DataNames.Leomon,
                    }],
                    evolvesTo: DataNames.SaberLeomon,
                },
                {
                    level: 45,
                    digiPlates: [DataNames.BanchoLeomon],
                    evolvesTo: DataNames.BanchoLeomon,
                },
                {
                    level: 41,
                    digiPlates: [DataNames.Duftmon],
                    evolvesTo: DataNames.Duftmon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.GrapLeomon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.SaberLeomon,
                    chance: 25,
                },
                {
                    digiScore: DataNames.Duftmon,
                    chance: 10,
                },
                {
                    digiScore: DataNames.BanchoLeomon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.SaberLeomon, DataNames.Duftmon, DataNames.BanchoLeomon],
        },
    },
    Kyukimon: {
        species: [Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 42,
                    evolvesTo: DataNames.SlashAngemon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 48,
                    exp: [{
                        type: Species.HOL,
                        amount: 900,
                    }],
                    obtained: [{
                        digimon: DataNames.Kuzuhamon,
                    }],
                    evolvesTo: DataNames.Kuzuhamon,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Kyukimon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            fusions: [DataNames.Craniummon, DataNames.Holydramon],
        },
    },
    Etemon: {
        species: [Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.tropicalIsles,
            },
            evolutions: [
                {
                    level: 54,
                    evolvesTo: DataNames.MetalEtemon,
                },
                {
                    level: 45,
                    evolvesTo: DataNames.Piemon,
                },
            ],
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 46,
                    exp: [{
                        type: Species.BST,
                        amount: 1000,
                    }],
                    evolvesTo: DataNames.MetalEtemon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MetalEtemon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.MetalEtemon, DataNames.AncientVolcamonSpade],
        },
    },
    Pandamon: {
        species: [Species.BST],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.BanchoLeomon],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.TerriermonW,
                    chance: 90,
                },
                {
                    item: DataNames.ShakkoumonW1,
                    chance: 70,
                },
            ],
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.Jijimon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            digiScores: [DataNames.Pandamon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.both,
            },
            fusions: [DataNames.Justimon, DataNames.Minervamon, DataNames.BanchoLeomon, DataNames.Spadamon],
        },
    },
    Mammon: {
        species: [Species.BST],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 49,
                    exp: [
                        {
                            type: Species.DAR,
                            amount: 600
                        },
                        {
                            type: Species.BST,
                            amount: 800
                        },
                    ],
                    evolvesTo: DataNames.SkullMammon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.SkullMammon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.SkullMammon, DataNames.AncientGarurumon],
        },
    },
    Cerberumon: {
        species: [Species.BST],
        stage: Stage.stage4,
        dssxw: {
            digiScores: [DataNames.Cerberumon],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            fusions: [DataNames.Anubimon, DataNames.Gaioumon, DataNames.BelialVamdemon],
        },
    },
    Bastemon: {
        species: [Species.BST],
        stage: Stage.stage4,
        dssxw: {
            digiScores: [DataNames.Bastemon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.both,
            },
            fusions: [DataNames.GranDracmon, DataNames.Dianamon],
        },
    },
    Sinduramon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            dna: [DataNames.Valdurmon],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            digiScores: [DataNames.Sinduramon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.both,
            },
            fusions: [DataNames.Crossmon, DataNames.ChronomonHM, DataNames.Hououmon, DataNames.Boltmon],
        },
    },
    Karatenmon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            dna: [DataNames.Anubimon, DataNames.Kuzuhamon],
            evolutionTree: DataNames.Piyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.riskFactory,
            },
            drops: [
                {
                    item: DataNames.Airdramon,
                    chance: 100,
                },
                {
                    item: DataNames.Anubimon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 41,
                    digiPlates: [DataNames.Anubimon],
                    evolvesTo: DataNames.Anubimon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            digiScores: [DataNames.Karatenmon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.blue,
            },
            fusions: [DataNames.Ravemon, DataNames.TigerVespamon, DataNames.Beelzebumon2010Spade],
        },
    },
    Parrotmon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.mangoveWoods,
            },
            evolutions: [
                {
                    level: 40,
                    exp: [{
                        type: Species.BRD,
                        amount: 1300,
                    }],
                    evolvesTo: DataNames.Crossmon,
                },
            ],
            evolutionTree: DataNames.Parrotmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 51,
                    exp: [{
                        type: Species.HOL,
                        amount: 750,
                    }],
                    evolvesTo: DataNames.Crossmon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.Crossmon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.Crossmon],
                    evolvesTo: DataNames.Crossmon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.both,
            },
            fusions: [DataNames.Crossmon, DataNames.Seraphimon, DataNames.Hououmon],
        },
    },
    Deramon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.mangoveWoods,
            },
            evolutionTree: DataNames.Penmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 52,
                    exp: [
                        {
                            type: Species.HOL,
                            amount: 1100,
                        },
                        {
                            type: Species.BRD,
                            amount: 1100,
                        },
                    ],
                    evolvesTo: DataNames.Hououmon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
    },
    Dagomon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.drainTunnel,
            },
            evolutionTree: DataNames.Betamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 62,
                    exp: [{
                        type: Species.AQU,
                        amount: 4400,
                    }],
                    evolvesTo: DataNames.Neptunemon,
                },
            ],
            evolutionTree: DataNames.Dagomon,
        },
        dsle: {
            platesRequired: [DataNames.Dagomon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.Dagomon,
                    chance: 75,
                },
                {
                    item: DataNames.Neptunemon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 45,
                    digiPlates: [DataNames.Neptunemon],
                    evolvesTo: DataNames.Neptunemon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.red,
            },
            fusions: [DataNames.Demon, DataNames.Neptunemon, DataNames.AncientMegatheriumon, DataNames.VenomVamdemon],
        },
    },
    Mermaimon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        dsle: {
            platesRequired: [DataNames.Mermaimon],
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            drops: [
                {
                    item: DataNames.Mermaimon,
                    chance: 75,
                },
                {
                    item: DataNames.SpiritOfWater,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.MarineAngemon,
                },
                {
                    level: 46,
                    digiPlates: [DataNames.AncientMermaimon, DataNames.SpiritOfWater],
                    evolvesTo: DataNames.AncientMermaimon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.Mermaimon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.AncientMermaimon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.AncientMermaimon, DataNames.MarineAngemon],
        },
    },
    Whamon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.underseaDrive,
            },
            evolutions: [
                {
                    level: 45,
                    exp: [{
                        type: Species.AQU,
                        amount: 1500,
                    }],
                    evolvesTo: DataNames.Plesiomon,
                },
            ],
            evolutionTree: DataNames.Otamamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 47,
                    exp: [
                        {
                            type: Species.HOL,
                            amount: 800,
                        },
                        {
                            type: Species.AQU,
                            amount: 1300,
                        },
                    ],
                    evolvesTo: DataNames.MarineAngemon,
                },
            ],
            dna: [DataNames.GigaSeadramon],
            evolutionTree: DataNames.Betamon,
        },
        dssxw: {
            digiScores: [DataNames.Whamon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.both,
            },
            fusions: [DataNames.JumboGamemon, DataNames.Neptunemon, DataNames.AncientMermaimon, DataNames.MarineAngemon],
        },
    },
    MegaSeadramon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.mangoveWoods,
            },
            evolutions: [
                {
                    level: 41,
                    exp: [{
                        type: Species.AQU,
                        amount: 600,
                    }],
                    evolvesTo: DataNames.MetalSeadramon,
                },
                {
                    level: 44,
                    exp: [{
                        type: Species.AQU,
                        amount: 1000,
                    }],
                    evolvesTo: DataNames.GigaSeadramon,
                },
            ],
            evolutionTree: DataNames.Betamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 55,
                    exp: [
                        {
                            type: Species.MAC,
                            amount: 1000,
                        },
                        {
                            type: Species.AQU,
                            amount: 1100,
                        },
                    ],
                    evolvesTo: DataNames.MetalSeadramon,
                },
                {
                    level: 59,
                    exp: [{
                        type: Species.AQU,
                        amount: 2500,
                    }],
                    obtained: [{
                        digimon: DataNames.GigaSeadramon,
                    }],
                    evolvesTo: DataNames.GigaSeadramon,
                },
            ],
            evolutionTree: DataNames.YukiAgumon,
        },
        dsle: {
            platesRequired: [DataNames.MegaSeadramon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 44,
                    digiPlates: [DataNames.GigaSeadramon],
                    evolvesTo: DataNames.GigaSeadramon,
                },
                {
                    level: 46,
                    digiPlates: [DataNames.MetalSeadramon],
                    evolvesTo: DataNames.MetalSeadramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.MegaSeadramon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.GigaSeadramon,
                    chance: 10,
                },
                {
                    digiScore: DataNames.MetalSeadramon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.GigaSeadramon, DataNames.MetalSeadramon, DataNames.Aegisdramon],
        },
    },
    WaruSeadramon: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dsle: {
            platesRequired: [DataNames.WaruSeadramon],
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            drops: [
                {
                    item: DataNames.WaruSeadramon,
                    chance: 75,
                },
                {
                    item: DataNames.GigaSeadramon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 42,
                    digiPlates: [DataNames.Gaioumon],
                    evolvesTo: DataNames.Gaioumon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Gaioumon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Gaioumon, DataNames.GigaSeadramon],
        },
    },
    Brachimon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 47,
                    exp: [{
                        type: Species.AQU,
                        amount: 1750,
                    }],
                    evolvesTo: DataNames.Plesiomon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.Plesiomon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Cannondramon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Cannondramon, DataNames.SaintGargomon, DataNames.AncientMegatheriumon],
        },
    },
    Hangyomon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.underseaDrive,
            },
            evolutionTree: DataNames.Gizamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Betamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Neptunemon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Vikemon, DataNames.Neptunemon],
        },
    },
    TonosamaGekomon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Otamamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            fusions: [DataNames.GigaSeadramon, DataNames.MetalEtemon],
        },
    },
    Anomalocarimon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 45,
                    exp: [{
                        type: Species.AQU,
                        amount: 990,
                    }],
                    evolvesTo: DataNames.Pukumon,
                },
            ],
            evolutionTree: DataNames.Syakomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.paletteAmazon,
            },
            drops: [
                {
                    item: DataNames.SpiritOfWater,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    evolvesTo: DataNames.Pukumon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.red,
            },
            fusions: [DataNames.PiemonHeart, DataNames.AncientMermaimon],
        },
    },
    MarineDevimon: {
        species: [Species.AQU],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gizamon,
        },
        dssxw: {
            digiScores: [DataNames.MarineDevimon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.blue,
            },
            fusions: [DataNames.Diaboromon, DataNames.PiemonSpade],
        },
    },
    AtlurKabuterimonB: {
        species: [Species.INS],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Impmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Minomon,
        },
    },
    Dinobeemon: {
        species: [Species.INS],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 53,
                    evolvesTo: DataNames.GranKuwagamon,
                },
            ],
            evolutionTree: DataNames.Wormmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 60,
                    exp: [{
                        type: Species.DRG,
                        amount: 2000,
                    }],
                    evolvesTo: DataNames.ImperialdramonDMB,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dsle: {
            platesRequired: [DataNames.DinobeemonAlpha, DataNames.DinobeemonBeta],
            location: {
                area: MapsList.dsle.limitValley,
            },
            drops: [
                {
                    item: DataNames.DinobeemonAlpha,
                    chance: 75,
                },
                {
                    item: DataNames.DinobeemonBeta,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.TigerVespamon],
                    evolvesTo: DataNames.TigerVespamon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.Dinobeemon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            fusions: [DataNames.GranKuwagamon, DataNames.ImperialdramonDM, DataNames.TigerVespamon],
        },
    },
    Ookuwamon: {
        species: [Species.INS],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.packetSwamp,
            },
            evolutions: [
                {
                    level: 55,
                    evolvesTo: DataNames.GranKuwagamon,
                },
            ],
            evolutionTree: DataNames.Tentomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 49,
                    exp: [{
                        type: Species.INS,
                        amount: 1700,
                    }],
                    evolvesTo: DataNames.GranKuwagamon,
                },
            ],
            dna: [DataNames.HeraclesKabuterimon],
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            platesRequired: [DataNames.Ookuwamon],
            location: {
                area: MapsList.dsle.northCity,
            },
            drops: [
                {
                    item: DataNames.Ookuwamon,
                    chance: 75,
                },
                {
                    item: DataNames.GranKuwagamon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 38,
                    digiPlates: [DataNames.GranKuwagamon],
                    evolvesTo: DataNames.GranKuwagamon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.GranKuwagamon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.AncientBeatmon, DataNames.GranKuwagamon, DataNames.HeraclesKabuterimon],
        },
    },
    Arukenimon: {
        species: [Species.INS],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutions: [
                {
                    level: 37,
                    evolvesTo: DataNames.Parasimon,
                },
            ],
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            platesRequired: [DataNames.Arukenimon],
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Arukenimon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 38,
                    obtained: [{
                        digimon: DataNames.Dokugumon,
                    }],
                    evolvesTo: DataNames.Parasimon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Lilithmon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Lilithmon, DataNames.BelialVamdemon],
        },
    },
    Jureimon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.resistorJungle,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tanemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.SpiritOfWood,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 46,
                    digiPlates: [DataNames.Pinocchimon],
                    obtained: [{
                        digimon: DataNames.Jureimon,
                    }],
                    evolvesTo: DataNames.Pinocchimon,
                },
                {
                    level: 50,
                    digiPlates: [DataNames.AncientTroiamonAlpha, DataNames.AncientTroiamonBeta, DataNames.SpiritOfWood],
                    evolvesTo: DataNames.AncientTroiamon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            digiScores: [DataNames.Jureimon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.both,
            },
            fusions: [DataNames.Pinocchimon, DataNames.AncientTroiamon, DataNames.Xuanwumon],
        },
    },
    Blossomon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.packetSwamp,
            },
            evolutionTree: DataNames.Floramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.loopSwamp,
                version: DataNames.both,
            },
            dna: [DataNames.Anubimon],
            evolutionTree: DataNames.Tanemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.Lotusmon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 41,
                    digiPlates: [DataNames.Lotusmon],
                    evolvesTo: DataNames.Lotusmon,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            digiScores: [DataNames.Blossomon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Lotusmon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Rosemon, DataNames.Lotusmon],
        },
    },
    ArgomonUltimate: {
        species: [Species.DAR],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 62,
                    exp: [{
                        type: Species.DAR,
                        amount: 4000,
                    }],
                    evolvesTo: DataNames.ArgomonMega,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            platesRequired: [DataNames.ArgomonUltimate],
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.ArgomonUltimate,
                    chance: 75,
                },
                {
                    item: DataNames.Beelzebumon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 41,
                    evolvesTo: DataNames.ArgomonMega,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            digiScores: [DataNames.ArgomonUltimate],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            fusions: [DataNames.Duftmon, DataNames.PiemonHeart],
        },
    },
    Andromon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.hardMountains,
            },
            evolutions: [
                {
                    level: 47,
                    exp: [{
                        type: Species.MAC,
                        amount: 800,
                    }],
                    evolvesTo: DataNames.HiAndromon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [{
                        type: Species.MAC,
                        amount: 1500,
                    }],
                    evolvesTo: DataNames.HiAndromon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dsle: {
            platesRequired: [DataNames.Andromon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.Andromon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 44,
                    digiPlates: [DataNames.HiAndromon],
                    obtained: [{
                        digimon: DataNames.Boltmon,
                    }],
                    evolvesTo: DataNames.HiAndromon,
                },
                {
                    level: 39,
                    obtained: [{
                        digimon: DataNames.Andromon,
                    }],
                    evolvesTo: DataNames.Boltmon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.HiAndromon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Andromon, DataNames.Boltmon, DataNames.MugendramonSpade],
        },
    },
    MetalTyrannomon: {
        species: [Species.MAC, Species.DRG],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            dna: [DataNames.Mugendramon],
            evolutionTree: DataNames.Botamon,
        },
        dsle: {
            platesRequired: [DataNames.MetalTyrannomon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.MetalTyrannomon,
                    chance: 75,
                },
                {
                    item: DataNames.BlackAgumonW1,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 47,
                    digiPlates: [DataNames.MugendramonAlpha, DataNames.MugendramonBeta],
                    evolvesTo: DataNames.Mugendramon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MugendramonSpade,
                    chance: 25,
                },
            ],
            fusions: [DataNames.MugendramonSpade, DataNames.AncientTroiamon, DataNames.MetalSeadramon],
        },
    },
    Megadramon: {
        species: [Species.MAC, Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.junkFactory,
            },
            evolutions: [
                {
                    level: 43,
                    evolvesTo: DataNames.Mugendramon,
                },
            ],
            evolutionTree: DataNames.Wormmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 52,
                    exp: [
                        {
                            type: Species.DAR,
                            amount: 1200,
                        },
                        {
                            type: Species.MAC,
                            amount: 900,
                        },
                    ],
                    evolvesTo: DataNames.Darkdramon,
                },
            ],
            dna: [DataNames.Mugendramon],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.VeemonW,
                    chance: 90,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.Megadramon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Goddramon, DataNames.Darkdramon, DataNames.MugendramonSpade, DataNames.MetalSeadramon],
        },
    },
    Gigadramon: {
        species: [Species.DAR, Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Hawkmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            dna: [DataNames.GigaSeadramon, DataNames.Mugendramon, DataNames.ZeedMillenniumon],
            evolutionTree: DataNames.Kuramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.BlackAgumonW2,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.Darkdramon],
                    evolvesTo: DataNames.Darkdramon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.Gigadramon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.blue,
            },
            fusions: [DataNames.GigaSeadramon, DataNames.Darkdramon, DataNames.Diaboromon],
        },
    },
    Mamemon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.junkFactory,
            },
            evolutions: [
                {
                    level: 42,
                    exp: [{
                        type: Species.MAC,
                        amount: 1200,
                    }],
                    evolvesTo: DataNames.Pinocchimon,
                },
            ],
            evolutionTree: DataNames.ToyAgumonB,
        },
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kokuwamon,
        },
        dsle: {
            platesRequired: [DataNames.Mamemon],
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            drops: [
                {
                    item: DataNames.Mamemon,
                    chance: 75,
                },
                {
                    item: DataNames.PrinceMamemon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 40,
                    digiPlates: [DataNames.PrinceMamemon],
                    evolvesTo: DataNames.PrinceMamemon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.red,
            },
            fusions: [DataNames.PrinceMamemon],
        },
    },
    MetalMamemon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.hardMountains,
            },
            evolutions: [
                {
                    level: 44,
                    evolvesTo: DataNames.PrinceMamemon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 46,
                    exp: [{
                        type: Species.MAC,
                        amount: 930,
                    }],
                    evolvesTo: DataNames.PrinceMamemon,
                },
            ],
            evolutionTree: DataNames.ToyAgumon,
        },
        dsle: {
            platesRequired: [DataNames.MetalMamemon],
            location: {
                area: MapsList.dsle.graboCentral,
            },
            drops: [
                {
                    item: DataNames.MetalMamemon,
                    chance: 75,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.MugendramonHeart,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Cannondramon, DataNames.PrinceMamemon, DataNames.MugendramonHeart],
        },
    },
    BigMamemon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.BigMamemon,
        },
    },
    Giromon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Solarmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.blue,
            },
            fusions: [DataNames.HiAndromon],
        },
    },
    Tekkamon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.blue,
            },
            evolutions: [
                {
                    level: 55,
                    exp: [{
                        type: Species.MAC,
                        amount: 2000,
                    }],
                    obtained: [{
                        digimon: DataNames.Mugendramon,
                    }],
                    evolvesTo: DataNames.Pinocchimon,
                },
            ],
            dna: [DataNames.Boltmon],
            evolutionTree: DataNames.Kapurimon,
        },
    },
    Nanomon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 48,
                    exp: [{
                        type: Species.DAR,
                        amount: 880,
                    }],
                    evolvesTo: DataNames.Parasimon,
                },
            ],
            evolutionTree: DataNames.Gizamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            fusions: [DataNames.MetalEtemon],
        },
    },
    BlueMeramon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            fusions: [DataNames.Demon, DataNames.PiemonSpade, DataNames.AncientVolcamonSpade],
        },
    },
    Insekimon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            evolutionTree: DataNames.Gotsumon,
        },
        dssxw: {
            digiScores: [DataNames.Insekimon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Craniummon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Craniummon, DataNames.AncientVolcamonHeart],
        },
    },
    Garbemon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.junkFactory,
            },
            evolutionTree: DataNames.Betamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            fusions: [DataNames.AncientWisemon],
        },
    },
    Vademon: {
        species: [Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 47,
                    exp: [{
                        type: Species.MAC,
                        amount: 1100,
                    }],
                    evolvesTo: DataNames.Ebemon,
                },
            ],
            evolutionTree: DataNames.Vademon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.riskCave,
            },
            evolutions: [
                {
                    level: 39,
                    evolvesTo: DataNames.Ebemon,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.blue,
            },
            fusions: [DataNames.Pinocchimon],
        },
    },
    Volcamon: {
        species: [Species.DAR, Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,
            },
            dna: [DataNames.Boltmon],
            evolutionTree: DataNames.Botamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.SpiritOfEarth,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    obtained: [{
                        digimon: DataNames.Andromon,
                    }],
                    evolvesTo: DataNames.Boltmon,
                },
                {
                    level: 41,
                    digiPlates: [DataNames.AncientVolcamon, DataNames.SpiritOfEarth],
                    evolvesTo: DataNames.AncientVolcamon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.AncientVolcamonHeart,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Megidramon, DataNames.AncientVolcamonHeart],
        },
    },
    Piccolomon: {
        species: [Species.HOL],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.skyPalace,
            },
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.Jijimon,
                },
                {
                    level: 38,
                    evolvesTo: DataNames.Babamon,
                },
            ],
            evolutionTree: DataNames.Bakumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 48,
                    exp: [{
                        type: Species.HOL,
                        amount: 800,
                    }],
                    evolvesTo: DataNames.Jijimon,
                },
            ],
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            platesRequired: [DataNames.Piccolomon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.Piccolomon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 41,
                    digiPlates: [DataNames.CherubimonZen],
                    obtained: [{
                        digimon: DataNames.CherubimonAku,
                    }],
                    evolvesTo: DataNames.CherubimonZen,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            digiScores: [DataNames.Score],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.both,
            },
            fusions: [DataNames.CulumonHeart, DataNames.CulumonSpade, DataNames.Ophanimon, DataNames.CherubimonZen, DataNames.MarineAngemon],
        },
    },
    Knightmon: {
        species: [Species.HOL, Species.MAC],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 65,
                    exp: [{
                        type: Species.HOL,
                        amount: 5000,
                    }],
                    obtained: [{
                        digimon: DataNames.Clockmon,
                    }],
                    evolvesTo: DataNames.Alphamon,
                },
            ],
            evolutionTree: DataNames.Solarmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.northCity,
            },
            drops: [
                {
                    item: DataNames.LordKnightmon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 45,
                    digiPlates: [DataNames.Craniummon],
                    obtained: [{
                        digimon: DataNames.Craniummon,
                    }],
                    evolvesTo: DataNames.Craniummon,
                },
                {
                    level: 44,
                    digiPlates: [DataNames.LordKnightmon],
                    evolvesTo: DataNames.LordKnightmon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.both,
            },
            fusions: [DataNames.Craniummon, DataNames.DukemonHeart, DataNames.DukemonSpade, DataNames.MirageGaogamon, DataNames.ChaosDukemon, DataNames.SkullKnightmon],
        },
    },
    SuperStarmon: {
        species: [Species.HOL, Species.MAC],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.junkFactory,
            },
            evolutions: [
                {
                    level: 54,
                    exp: [{
                        type: Species.MAC,
                        amount: 1200,
                    }],
                    evolvesTo: DataNames.Justimon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            dna: [DataNames.Susanoomon],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            platesRequired: [DataNames.SuperStarmon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.Justimon],
                    obtained: [{
                        digimon: DataNames.Monodramon,
                    }],
                    evolvesTo: DataNames.Justimon,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            fusions: [DataNames.PrinceMamemon, DataNames.AncientWisemon],
        },
    },
    Monzaemon: {
        species: [Species.HOL],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.sheerValley,
            },
            evolutions: [
                {
                    level: 67,
                    exp: [{
                        type: Species.BST,
                        amount: 6000,
                    }],
                    evolvesTo: DataNames.BanchoLeomon,
                },
            ],
            evolutionTree: DataNames.Kumamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 48,
                    exp: [{
                        type: Species.HOL,
                        amount: 800,
                    }],
                    evolvesTo: DataNames.Babamon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            platesRequired: [DataNames.Monzaemon],
            location: {
                area: MapsList.dsle.palaceLaboratory,
            },
            drops: [
                {
                    item: DataNames.Monzaemon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.Babamon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.Monzaemon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.CherubimonZen, DataNames.Minervamon],
        },
    },
    Digitamamon: {
        species: [Species.HOL, Species.DAR],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 42,
                    exp: [{
                        type: Species.DAR,
                        amount: 1000,
                    }],
                    evolvesTo: DataNames.ImperialdramonDMB,
                },
            ],
            evolutionTree: DataNames.Digitamamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 49,
                    exp: [{
                        type: Species.HOL,
                        amount: 1150,
                    }],
                    evolvesTo: DataNames.Lampmon,
                },
                {
                    level: 50,
                    exp: [{
                        type: Species.DAR,
                        amount: 1800,
                    }],
                    evolvesTo: DataNames.Devitamamon,
                },
            ],
            evolutionTree: DataNames.Syakomon,
        },
        dsle: {
            platesRequired: [DataNames.Digitamamon],
            location: {
                area: MapsList.dsle.southCave,
            },
            drops: [
                {
                    item: DataNames.Digitamamon,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.Devitamamon,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Devitamamon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Devitamamon, DataNames.AncientSphinxmon],
        },
    },
    Wisemon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        dsle: {
            platesRequired: [DataNames.Wisemon],
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Wisemon,
                    chance: 75,
                },
                {
                    item: DataNames.BeelzebumonBMBeta,
                    chance: 2,
                },
            ],
            evolutions: [
                {
                    level: 50,
                    digiPlates: [DataNames.AncientWisemon, DataNames.SpiritOfSteel],
                    evolvesTo: DataNames.AncientWisemon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            digiScores: [DataNames.Wisemon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.AncientWisemon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.PiemonHeart, DataNames.AncientWisemon, DataNames.Beelzebumon2010Heart],
        },
    },
    WereGarurumonBlack: {
        species: [Species.BST],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.steamyJungle,
            },
            evolutionTree: DataNames.Kumamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 56,
                    exp: [
                        {
                            type: Species.DAR,
                            amount: 1500,
                        },
                        {
                            type: Species.BST,
                            amount: 1000,
                        },
                    ],
                    evolvesTo: DataNames.Gulfmon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dsle: {
            platesRequired: [DataNames.WereGarurumonBlack],
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.WereGarurumonBlack,
                    chance: 75,
                },
                {
                    item: DataNames.GabumonW1,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.Minervamon],
                    evolvesTo: DataNames.Minervamon,
                },
                {
                    level: 45,
                    digiPlates: [DataNames.Mercurymon],
                    evolvesTo: DataNames.Mercurymon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
    },
    BlackRapidmon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.lavaRiver,
            },
            evolutions: [
                {
                    level: 55,
                    exp: [{
                        type: Species.DAR,
                        amount: 2000,
                    }],
                    evolvesTo: DataNames.BlackSaintGargomon,
                },
            ],
            evolutionTree: DataNames.Terriermon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [
                        {
                            type: Species.DAR,
                            amount: 800,
                        },
                        {
                            type: Species.MAC,
                            amount: 800,
                        },
                    ],
                    evolvesTo: DataNames.BlackSaintGargomon,
                },
            ],
            evolutionTree: DataNames.Kokomon,
        },
    },
    SkullGreymon: {
        species: [Species.DAR, Species.DRG],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.moonlight,
            },
            evolutions: [
                {
                    level: 55,
                    obtained: [{
                        digimon: DataNames.MetalSeadramon,
                    }],
                    evolvesTo: DataNames.Mugendramon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dsle: {
            platesRequired: [DataNames.SkullGreymon],
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.SkullGreymon,
                    chance: 75,
                },
                {
                    item: DataNames.BlackAgumonW2,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 40,
                    digiPlates: [DataNames.WarGreymon],
                    evolvesTo: DataNames.BlackWarGreymon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            fusions: [DataNames.SkullMammon, DataNames.MugendramonHeart, DataNames.Megidramon],
        },
    },
    Kimeramon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 66,
                    obtained: [{
                        digimon: DataNames.Millenniumon,
                    }],
                    evolvesTo: DataNames.MoonMillenniumon,
                },
            ],
            dna: [DataNames.Millenniumon],
            evolutionTree: DataNames.Kuramon,
        },
        dsle: {
            platesRequired: [DataNames.KimeramonAlpha, DataNames.KimeramonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 40,
                    digiPlates: [DataNames.MilleniumonAlpha, DataNames.MilleniumonBeta, DataNames.MugendramonAlpha, DataNames.MugendramonBeta],
                    obtained: [{
                        digimon: DataNames.Monodramon,
                    }],
                    evolvesTo: DataNames.Millenniumon,
                },
            ],
            evolutionTree: DataNames.Kimeramon,
        },
        dssxw: {
            digiScores: [DataNames.Kimeramon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Millenniumon],
        },
    },
    Vamdemon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.chromeMine,
            },
            evolutions: [
                {
                    level: 56,
                    exp: [{
                        type: Species.ANY,
                        amount: 9999,
                    }],
                    evolvesTo: DataNames.VenomVamdemon,
                },
                {
                    level: 45,
                    allied: [{
                        digimon: DataNames.PicoDevimon,
                    }],
                    evolvesTo: DataNames.BelialVamdemon,
                },
            ],
            evolutionTree: DataNames.PicoDevimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 66,
                    exp: [{
                        type: Species.BST,
                        amount: 666,
                    }],
                    allied: [{
                        digimon: DataNames.PicoDevimon,
                    }],
                    evolvesTo: DataNames.VenomVamdemon,
                },
            ],
            dna: [DataNames.BelialVamdemon],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            platesRequired: [DataNames.Vamdemon],
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Vamdemon,
                    chance: 75,
                },
                {
                    item: DataNames.BelialVamdemonAlpha,
                    chance: 2,
                },
            ],
            evolutions: [
                {
                    level: 38,
                    evolvesTo: DataNames.VenomVamdemon,
                    allied: [{
                        digimon: DataNames.PicoDevimon,
                    }],
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.Vamdemon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.PiemonHeart,
                    chance: 10,
                },
                {
                    digiScore: DataNames.VenomVamdemon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Demon, DataNames.PiemonHeart, DataNames.Beelzebumon, DataNames.VenomVamdemon, DataNames.SkullKnightmon],
        },
    },
    LadyDevimon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.lavaRiver,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 64,
                    exp: [{
                        type: Species.DAR,
                        amount: 3200,
                    }],
                    evolvesTo: DataNames.Lilithmon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            platesRequired: [DataNames.LadyDevimon],
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.LadyDevimon,
                    chance: 75,
                },
                {
                    item: DataNames.LucemonFMAlpha,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 40,
                    digiPlates: [DataNames.Lilithmon],
                    evolvesTo: DataNames.Lilithmon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.LadyDevimon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.both,
            },
            fusions: [DataNames.Demon, DataNames.Devitamamon, DataNames.Lilithmon],
        },
    },
    Mummymon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.lavaRiver,
            },
            evolutions: [
                {
                    level: 47,
                    evolvesTo: DataNames.Demon,
                },
                {
                    level: 49,
                    evolvesTo: DataNames.Deathmon,
                },
            ],
            evolutionTree: DataNames.Impmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [
                        {
                            type: Species.HOL,
                            amount: 900,
                        },
                        {
                            type: Species.DAR,
                            amount: 900,
                        },
                    ],
                    evolvesTo: DataNames.Pharaohmon,
                },
            ],
            dna: [DataNames.Beelzebumon],
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Wisemon,
                    chance: 50,
                },
                {
                    item: DataNames.Beelzebumon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.Zanbamon],
                    obtained: [{
                        digimon: DataNames.Musyamon,
                    }],
                    evolvesTo: DataNames.Zanbamon,
                },
                {
                    level: 43,
                    digiPlates: [DataNames.Beelzebumon],
                    obtained: [{
                        digimon: DataNames.Impmon,
                    }],
                    evolvesTo: DataNames.Beelzebumon,
                },
                {
                    level: 40,
                    obtained: [{
                        digimon: DataNames.Mummymon,
                    }],
                    evolvesTo: DataNames.Pharaohmon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Pharaohmon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Pharaohmon, DataNames.Beelzebumon, DataNames.BelialVamdemon],
        },
    },
    Infermon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutions: [
                {
                    level: 50,
                    evolvesTo: DataNames.Diaboromon,
                },
                {
                    level: 84,
                    obtained: [{
                        digimon: DataNames.Beelzebumon,
                    }],
                    evolvesTo: DataNames.Beelzebumon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 45,
                    exp: [{
                        type: Species.DAR,
                        amount: 2500,
                    }],
                    obtained: [{
                        digimon: DataNames.Keramon,
                    }],
                    evolvesTo: DataNames.Diaboromon,
                },
            ],
            dna: [DataNames.Armagemon],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            platesRequired: [DataNames.Infermon],
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.Infermon,
                    chance: 75,
                },
                {
                    item: DataNames.SkullBaluchimon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 38,
                    digiPlates: [DataNames.Diaboromon],
                    obtained: [{
                        digimon: DataNames.Kuramon,
                    }],
                    evolvesTo: DataNames.Diaboromon,
                },
                {
                    level: 38,
                    obtained: [{
                        digimon: DataNames.Dokugumon,
                    }],
                    evolvesTo: DataNames.Parasimon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            digiScores: [DataNames.Infermon],
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Diaboromon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Diaboromon, DataNames.Armagemon],
        },
    },
    Vajramon: {
        species: [Species.DAR, Species.BST],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 47,
                    exp: [{
                        type: Species.DAR,
                        amount: 1300,
                    }],
                    evolvesTo: DataNames.Zanbamon,
                },
                {
                    level: 46,
                    exp: [{
                        type: Species.MAC,
                        amount: 1250,
                    }],
                    obtained: [{
                        digimon: DataNames.Boltmon,
                    }],
                    evolvesTo: DataNames.Boltmon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.Vajramon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            fusions: [DataNames.Zanbamon, DataNames.AncientGarurumon],
        },
    },
    Phantomon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 49,
                    exp: [{
                        type: Species.DAR,
                        amount: 1050,
                    }],
                    evolvesTo: DataNames.DeathmonB,
                },
                {
                    level: 71,
                    exp: [{
                        type: Species.ANY,
                        amount: 4444,
                    }],
                    obtained: [{
                        digimon: DataNames.Apocalymon,
                    }],
                    evolvesTo: DataNames.Apocalymon,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.KimeramonW1,
                    chance: 75,
                },
                {
                    item: DataNames.LucemonFMW1,
                    chance: 75,
                },
            ],
            evolutions: [
                {
                    level: 47,
                    digiPlates: [DataNames.Piemon],
                    evolvesTo: DataNames.Piemon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.Phantomon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.PiemonSpade,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Devitamamon, DataNames.PiemonSpade],
        },
    },
    Matadormon: {
        species: [Species.DRG, Species.DRG],
        stage: Stage.stage4,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 55,
                    obtained: [
                        {
                            digimon: DataNames.Piemon,
                        },
                        {
                            digimon: DataNames.Pinocchimon,
                        },
                    ],
                    evolvesTo: DataNames.Piemon,
                },
            ],
            dna: [DataNames.Beelzebumon],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Sangloupmon,
                    chance: 100,
                },
            ],
            evolutions: [
                {
                    level: 45,
                    digiPlates: [DataNames.GranDracmon],
                    evolvesTo: DataNames.GranDracmon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.GranDracmon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.GranDracmon, DataNames.PiemonSpade],
        },
    },
    EXTyrannomon: {
        species: [Species.MAC, Species.DAR],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 49,
                    evolvesTo: DataNames.Deathmon,
                },
            ],
            evolutionTree: DataNames.ToyAgumonB,
        },
        dsle: {
            platesRequired: [DataNames.EXTyrannomon],
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.EXTyrannomon,
                    chance: 75,
                },
                {
                    item: DataNames.Deathmon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.Deathmon],
                    evolvesTo: DataNames.Deathmon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.both,
            },
            fusions: [DataNames.MugendramonSpade, DataNames.MugendramonHeart, DataNames.VenomVamdemon],
        },
    },
    SkullBaluchimon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        dsle: {
            platesRequired: [DataNames.SkullBaluchimon],
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.SkullBaluchimon,
                    chance: 75,
                },
                {
                    item: DataNames.SpiritOfDarkness,
                    chance: 40,
                },
            ],
            evolutions: [
                {
                    level: 39,
                    digiPlates: [DataNames.Zanbamon],
                    obtained: [{
                        digimon: DataNames.Musyamon,
                    }],
                    evolvesTo: DataNames.Zanbamon,
                },
                {
                    level: 49,
                    digiPlates: [DataNames.AncientSphinxmon, DataNames.SpiritOfDarkness],
                    obtained: [
                        {
                            digimon: DataNames.Pharaohmon,
                        },
                        {
                            digimon: DataNames.Anubimon,
                        },
                    ],
                    evolvesTo: DataNames.AncientSphinxmon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            digiScores: [DataNames.SkullBaluchimon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.AncientSphinxmon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Zanbamon, DataNames.SkullMammon, DataNames.AncientSphinxmon],
        },
    },
    Scorpiomon: {
        species: [Species.INS],
        stage: Stage.stage4,
        dssxw: {
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.both,
            },
            fusions: [DataNames.Lilithmon, DataNames.AncientSphinxmon, DataNames.AncientBeatmon],
        },
    },
    Flaremon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 55,
                    exp: [{
                        type: Species.HOL,
                        amount: 1750,
                    }],
                    evolvesTo: DataNames.Apollomon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dsle: {
            platesRequired: [DataNames.Flaremon],
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.Flaremon,
                    chance: 75,
                },
                {
                    item: DataNames.Apollomon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.Apollomon],
                    evolvesTo: DataNames.Apollomon,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            digiScores: [DataNames.Flaremon],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Apollomon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Apollomon, DataNames.DukemonSpade],
        },
    },
    Crescemon: {
        species: [Species.DAR, Species.BST],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 50,
                    exp: [{
                        type: Species.DAR,
                        amount: 14500,
                    }],
                    evolvesTo: DataNames.Dianamon,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dsle: {
            platesRequired: [DataNames.Crescemon],
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.Crescemon,
                    chance: 75,
                },
                {
                    item: DataNames.Dianamon,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 43,
                    digiPlates: [DataNames.Dianamon],
                    evolvesTo: DataNames.Dianamon,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            digiScores: [DataNames.Crescemon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Dianamon,
                    chance: 25,
                },
            ],
            fusions: [DataNames.Valkyrimon, DataNames.Sleipmon, DataNames.Dianamon, DataNames.AncientMegatheriumon],
        },
    },
    Butenmon: {
        species: [Species.BRD],
        stage: Stage.stage4,
        dsle: {
            platesRequired: [DataNames.Butenmon],
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.Butenmon,
                    chance: 75,
                },
                {
                    item: DataNames.ChronomonHMAlpha,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 50,
                    digiPlates: [DataNames.ChronomonHM],
                    obtained: [{
                        digimon: DataNames.Hyokomon,
                    }],
                    evolvesTo: DataNames.ChronomonHM,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            digiScores: [DataNames.Butenmon],
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.ChronomonHM,
                    chance: 25,
                },
            ],
            fusions: [DataNames.ChronomonHM, DataNames.Sleipmon, DataNames.Hououmon],
        },
    },
    LucemonFM: {
        species: [Species.DAR],
        stage: Stage.stage4,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutions: [
                {
                    level: 67,
                    exp: [{
                        type: Species.DAR,
                        amount: 5000,
                    }],
                    evolvesTo: DataNames.Demon,
                },
            ],
            evolutionTree: DataNames.LucemonFM,
        },
        dsle: {
            platesRequired: [DataNames.LucemonFMAlpha, DataNames.LucemonFMBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 50,
                    evolvesTo: DataNames.Demon,
                },
                {
                    level: 42,
                    digiPlates: [DataNames.Barbamon],
                    evolvesTo: DataNames.Barbamon,
                },
            ],
            evolutionTree: DataNames.LucemonFM,
        },
        dssxw: {
            digiScores: [DataNames.LucemonFM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.GranDracmon],
        },
    },
    MadLeomon: {
        species: [Species.BST],
        stage: Stage.stage4,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
        },
    },
    ShoutmonX3: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dssxw: {
            digiScores: [DataNames.ShoutmonX3],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ShoutmonX4: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dssxw: {
            digiScores: [DataNames.ShoutmonX4],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    MetalGreymon2010: {
        species: [Species.DRG],
        stage: Stage.stage4,
        dssxw: {
            digiScores: [DataNames.MetalGreymon2010],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    DarkKnightmon: {
        species: [Species.DAR],
        stage: Stage.stage4,
        dssxw: {
            digiScores: [DataNames.DarkKnightmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },

    //#endregion

    //#region Ultimate
    WarGreymon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Omegamon],
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            platesRequired: [DataNames.WarGreymon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.WarGreymon,
                    chance: 50,
                },
                {
                    item: DataNames.OmegamonAlpha,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 60,
                    digiPlates: [DataNames.WarGreymon, DataNames.MetalGarurumon, DataNames.OmegamonAlpha, DataNames.OmegamonBeta],
                    warps: [DataNames.AgumonW2, DataNames.OmegamonW1],
                    evolvesTo: DataNames.Omegamon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            digiScores: [DataNames.WarGreymon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.blue,
            },
            fusions: [DataNames.Omegamon],
        },
    },
    MetalGarurumon: {
        species: [Species.BST],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Omegamon],
            evolutionTree: DataNames.Tsunomon,
        },
        dsle: {
            platesRequired: [DataNames.MetalGarurumon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.MetalGarurumon,
                    chance: 50,
                },
                {
                    item: DataNames.OmegamonBeta,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 60,
                    digiPlates: [DataNames.MetalGarurumon, DataNames.WarGreymon, DataNames.OmegamonAlpha, DataNames.OmegamonBeta],
                    warps: [DataNames.GabumonW2, DataNames.OmegamonW2],
                    evolvesTo: DataNames.Omegamon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.MetalGarurumon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Omegamon],
        },
    },
    Hououmon: {
        species: [Species.BRD],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.skyPalace,
            },
            evolutionTree: DataNames.Piyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Chicchimon,
        },
        dsle: {
            platesRequired: [DataNames.Hououmon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.Hououmon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 61,
                    digiPlates: [DataNames.Zhuqiaomon],
                    evolvesTo: DataNames.Zhuqiaomon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.Hououmon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Zhuqiaomon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Zhuqiaomon],
        },
    },
    Rosemon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            dna: [DataNames.RosemonBM],
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.Lilamon,
                    chance: 100,
                },
                {
                    item: DataNames.RosemonBM,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 54,
                    digiPlates: [DataNames.RosemonBM],
                    evolvesTo: DataNames.RosemonBM,
                },
            ],
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            digiScores: [DataNames.Rosemon],
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.red,
            },
            fusions: [DataNames.RosemonBM],
        },
    },
    HeraclesKabuterimon: {
        species: [Species.INS],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tentomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.HeraclesKabuterimon,
        },
        dsle: {
            platesRequired: [DataNames.HeraclesKabuterimon],
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.AtlurKabuterimonR,
                    chance: 100,
                },
                {
                    item: DataNames.HeraclesKabuterimon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.HeraclesKabuterimon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Vikemon: {
        species: [Species.AQU, Species.BST],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.both,
            },
            dna: [DataNames.MirageGaogamonBM],
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            platesRequired: [DataNames.Vikemon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.Vikemon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.Vikemon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Baihumon],
        },
    },
    Seraphimon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.DukemonCM],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            platesRequired: [DataNames.Seraphimon],
            location: {
                area: MapsList.dsle.northCity,
            },
            drops: [
                {
                    item: DataNames.HolyAngemon,
                    chance: 100,
                },
                {
                    item: DataNames.Seraphimon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.Seraphimon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Holydramon: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Holydramon,
        },
        dsle: {
            platesRequired: [DataNames.Holydramon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            digiScores: [DataNames.Holydramon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Qinglongmon,
                    chance: 5,
                },
            ],
            fusions: [DataNames.Qinglongmon],
        },
    },
    ImperialdramonDM: {
        species: [Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Paildramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.ImperialdramonPM,
                    chance: 5,
                },
            ],
            evolutions: [
                {
                    level: 52,
                    evolvesTo: DataNames.ImperialdramonFM,
                },
                {
                    level: 62,
                    digiPlates: [DataNames.ImperialdramonPMAlpha, DataNames.ImperialdramonPMBeta],
                    obtained: [{
                        digimon: DataNames.ImperialdramonFM,
                    }],
                    allied: [{
                        digimon: DataNames.Omegamon,
                    }],
                    evolvesTo: DataNames.ImperialdramonPM,
                },
            ],
            evolutionTree: DataNames.Paildramon,
        },
        dssxw: {
            digiScores: [DataNames.ImperialdramonDM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.ImperialdramonFM],
        },
    },
    Dukemon: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.DukemonCM, DataNames.ShineGreymonBM],
            evolutionTree: DataNames.Gigimon,
        },
        dsle: {
            platesRequired: [DataNames.Dukemon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutions: [
                {
                    level: 57,
                    digiPlates: [DataNames.DukemonCMAlpha, DataNames.DukemonCMBeta],
                    evolvesTo: DataNames.DukemonCM,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.DukemonHeart, DataNames.DukemonSpade],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            fusions: [DataNames.Chaosdramon, DataNames.DukemonCM],
        },
    },
    Sakuyamon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            platesRequired: [DataNames.Sakuyamon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            digiScores: [DataNames.Sakuyamon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    SaintGargomon: {
        species: [Species.BST],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Terriermon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            platesRequired: [DataNames.SaintGargomon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Gummymon,
        },
        dssxw: {
            digiScores: [DataNames.SaintGargomon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.red,
            },
        },
    },
    Justimon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            platesRequired: [DataNames.Justimon],
            location: {
                area: MapsList.dsle.riskCave,
            },
            drops: [
                {
                    item: DataNames.Justimon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Chicomon,  //?
        },
        dssxw: {
            digiScores: [DataNames.Justimon],
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.blue,
            },
        },
    },
    MarineAngemon: {
        species: [Species.AQU],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.underseaDrive,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Betamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.MarineAngemon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.red,
            },
        },
    },
    ShineGreymon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.ShineGreymonBM, DataNames.ShineGreymonRM],
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            platesRequired: [DataNames.ShineGreymon],
            location: {
                area: MapsList.dsle.riskFactory,
            },
            drops: [
                {
                    item: DataNames.ShineGreymon,
                    chance: 50,
                },
                {
                    item: DataNames.OmegamonW1,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 55,
                    digiPlates: [DataNames.ShineGreymonBMAlpha, DataNames.ShineGreymonBMBeta],
                    obtained: [{
                        digimon: DataNames.ShineGreymonRM,
                    }],
                    evolvesTo: DataNames.ShineGreymonBM,
                },
                {
                    level: 50,
                    evolvesTo: DataNames.ShineGreymonRM,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            digiScores: [DataNames.ShineGreymon],
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.ShineGreymonBM,
                    chance: 10,
                },
                {
                    digiScore: DataNames.ShineGreymonRM,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Zhuqiaomon, DataNames.DukemonCM, DataNames.ShineGreymonBM, DataNames.ShineGreymonRM],
        },
    },
    MirageGaogamon: {
        species: [Species.BST],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.MirageGaogamonBM],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            platesRequired: [DataNames.MirageGaogamon],
            location: {
                area: MapsList.dsle.riskFactory,
            },
            drops: [
                {
                    item: DataNames.MirageGaogamon,
                    chance: 50,
                },
                {
                    item: DataNames.MirageGaogamonBMAlpha,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 55,
                    digiPlates: [DataNames.MirageGaogamonBMAlpha, DataNames.MirageGaogamonBMBeta],
                    evolvesTo: DataNames.MirageGaogamonBM,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.MirageGaogamon],
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MirageGaogamonBM,
                    chance: 10,
                },
            ],
            fusions: [DataNames.MirageGaogamonBM],
        },
    },
    Ravemon: {
        species: [Species.BRD],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.RavemonBM],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.riskCave,
            },
            drops: [
                {
                    item: DataNames.ChronomonHMBeta,
                    chance: 25,
                },
                {
                    item: DataNames.RavemonBM,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 54,
                    digiPlates: [DataNames.RavemonBM],
                    evolvesTo: DataNames.RavemonBM,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            digiScores: [DataNames.Ravemon],
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.RavemonBM,
                    chance: 10,
                },
            ],
            fusions: [DataNames.RavemonBM],
        },
    },
    Sleipmon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            platesRequired: [DataNames.Sleipmon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.Sleipmon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            digiScores: [DataNames.Sleipmon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.red,
            },
        },
    },
    BanchoLeomon: {
        species: [Species.BST],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Kumamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.BeelzebumonBM, DataNames.Chaosmon],
            evolutionTree: DataNames.BanchoLeomon,
        },
        dsle: {
            platesRequired: [DataNames.BanchoLeomon],
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.BanchoLeomon,
                    chance: 50,
                },
                {
                    item: DataNames.ChaosmonW2,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 60,
                    digiPlates: [DataNames.BanchoLeomon, DataNames.Darkdramon, DataNames.ChaosmonAlpha, DataNames.ChaosmonBeta],
                    warps: [DataNames.GaomonW, DataNames.ChaosmonW2],
                    evolvesTo: DataNames.Chaosmon,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.BanchoLeomon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.both,
            },
            fusions: [DataNames.Chaosmon],
        },
    },
    BlackWarGreymon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.coreField,
            },
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Botamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.SkullGreymon,
                    chance: 100,
                },
                {
                    item: DataNames.ApocalymonW2,
                    chance: 25,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.blue,
            },
        },
    },
    ImperialdramonDMB: {
        species: [Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Digitamamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Minomon,
        },
    },
    Megidramon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gigimon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.graboCentral,
            },
            drops: [
                {
                    item: DataNames.Dukemon,
                    chance: 40,
                },
                {
                    item: DataNames.DukemonCMBeta,
                    chance: 5,
                },
            ],
            evolutions: [
                {
                    level: 51,
                    evolvesTo: DataNames.ChaosDukemon,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.Megidramon],
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.ChaosDukemon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.ChaosDukemon, DataNames.ShineGreymonRM],
        },
    },
    ChaosDukemon: {
        species: [Species.DAR, Species.DRG],
        stage: Stage.stage6,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.ChaosDukemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chromeMine,
            },
            drops: [
                {
                    item: DataNames.DukemonCMAlpha,
                    chance: 5,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.ChaosDukemon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Kuzuhamon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.coreField,
            },
            evolutionTree: DataNames.Tanemon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Dorimon,
        },
    },
    BlackSaintGargomon: {
        species: [Species.BST],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.destroyedBelt,
            },
            evolutionTree: DataNames.Terriermon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kokomon,
        },
    },
    CherubimonAku: {
        species: [Species.DAR],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kokomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.graboCentral,
            },
            drops: [
                {
                    item: DataNames.Antylamon,
                    chance: 100,
                },
                {
                    item: DataNames.CherubimonZen,
                    chance: 25,
                },
            ],
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.red,
            },
            fusions: [DataNames.ShineGreymonRM],
        },
    },
    CherubimonZen: {
        species: [Species.HOL],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kokomon,
        },
        dsle: {
            platesRequired: [DataNames.CherubimonZen],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Kokomon,
        },
        dssxw: {
            digiScores: [DataNames.CherubimonZen],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.red,
            },
            fusions: [DataNames.Qinglongmon],
        },
    },
    Goddramon: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.highlightHaven,
                version: DataNames.sunburst,
            },
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            platesRequired: [DataNames.Goddramon],
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.Goddramon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 62,
                    digiPlates: [DataNames.Qinglongmon],
                    evolvesTo: DataNames.Qinglongmon,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.Goddramon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.both,
            },
            fusions: [DataNames.Qinglongmon, DataNames.MirageGaogamonBM],
        },
    },
    Dorugoramon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Dorimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Dorimon,
        },
        dsle: {
            platesRequired: [DataNames.Dorugoramon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.Dorugoramon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Dorugoramon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.red,
            },
        },
    },
    Darkdramon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.destroyedBelt,
            },
            evolutionTree: DataNames.Tsunomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.accessGlacier,
                version: DataNames.sunburst,
            },
            dna: [DataNames.Chaosmon, DataNames.ShineGreymonRM],
            evolutionTree: DataNames.Chicomon,
        },
        dsle: {
            platesRequired: [DataNames.Darkdramon],
            location: {
                area: MapsList.dsle.graboCentral,
            },
            drops: [
                {
                    item: DataNames.Darkdramon,
                    chance: 50,
                },
                {
                    item: DataNames.ChaosmonW1,
                    chance: 25,
                },
            ],
            evolutions: [
                {
                    level: 60,
                    digiPlates: [DataNames.BanchoLeomon, DataNames.Darkdramon, DataNames.ChaosmonAlpha, DataNames.ChaosmonBeta],
                    warps: [DataNames.BlackAgumonW2, DataNames.ChaosmonW1],
                    evolvesTo: DataNames.Chaosmon,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.Darkdramon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Darkdramon,
                    chance: 50,
                },
                {
                    digiScore: DataNames.Chaosmon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Chaosmon],
        },
    },
    Cannondramon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.sheerValley,
            },
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.Cannondramon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.red,
            },
        },
    },
    SaberLeomon: {
        species: [Species.BST],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.tropicalIsles,
            },
            evolutionTree: DataNames.Terriermon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.proxyIsland,
                version: DataNames.moonlight,
            },
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            platesRequired: [DataNames.SaberLeomon],
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.SaberLeomon,
                    chance: 50,
                },
                {
                    item: DataNames.MirageGaogamonBMBeta,
                    chance: 5,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.SaberLeomon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Baihumon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Baihumon],
        },
    },
    MetalEtemon: {
        species: [Species.BST],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.destroyedBelt,
            },
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.MetalEtemon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.blue,
            },
        },
    },
    Gryphomon: {
        species: [Species.BRD],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            evolutionTree: DataNames.Piyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.blue,
            },
        },
    },
    SkullMammon: {
        species: [Species.BST],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.SkullMammon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.blue,
            },
        },
    },
    Valkyrimon: {
        species: [Species.BRD],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Hawkmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.RavemonBM],
            evolutionTree: DataNames.Silphymon,
        },
        dsle: {
            platesRequired: [DataNames.Valkyrimon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.Valdurmon,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 53,
                    digiPlates: [DataNames.Valdurmon],
                    evolvesTo: DataNames.Valdurmon,
                },
            ],
            evolutionTree: DataNames.Silphymon,
        },
        dssxw: {
            digiScores: [DataNames.Valkyrimon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.both,
            },
            fusions: [DataNames.Valdurmon],
        },
    },
    Crossmon: {
        species: [Species.BRD],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.tropicalIsles,
            },
            evolutionTree: DataNames.Parrotmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Chicchimon,
        },
        dsle: {
            platesRequired: [DataNames.Crossmon],
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.Crossmon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.Crossmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Aegisdramon],
        },
    },
    Plesiomon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.underseaDrive,
            },
            evolutionTree: DataNames.Otamamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.graboMarine,
            },
            evolutions: [
                {
                    level: 60,
                    digiPlates: [DataNames.Aegisdramon],
                    obtained: [
                        {
                            digimon: DataNames.Aegisdramon,
                        },
                        {
                            digimon: DataNames.MegaSeadramon,
                        },
                    ],
                    evolvesTo: DataNames.Aegisdramon,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Aegisdramon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Aegisdramon],
        },
    },
    JumboGamemon: {
        species: [Species.AQU],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dsle: {
            platesRequired: [DataNames.JumboGamemon],
            location: {
                area: MapsList.dsle.riskFactory,
            },
            drops: [
                {
                    item: DataNames.JumboGamemon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 62,
                    digiPlates: [DataNames.XuanwumonAlpha, DataNames.XuanwumonBeta],
                    evolvesTo: DataNames.Xuanwumon,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.JumboGamemon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
            fusions: [DataNames.Xuanwumon],
        },
    },
    Pukumon: {
        species: [Species.AQU],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Syakomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.knuckleCoast,
                version: DataNames.red,
            },
        },
    },
    GranKuwagamon: {
        species: [Species.INS],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.destroyedBelt,
            },
            evolutionTree: DataNames.Tentomon,  // TODO: And Wormmon
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            platesRequired: [DataNames.GranKuwagamon],
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.GranKuwagamon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.GranKuwagamon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    TigerVespamon: {
        species: [Species.INS],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.TigerVespamon],
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.TigerVespamon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.TigerVespamon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.blue,
            },
        },
    },
    Lotusmon: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Budmon,
        },
        dsle: {
            platesRequired: [DataNames.Lotusmon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            digiScores: [DataNames.Lotusmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ArgomonMega: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chromeMine,
            },
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.red,
            },
        },
    },
    QueenChessmon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.blue,
            },
        },
    },
    KingChessmon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.blue,
            },
        },
    },
    HiAndromon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.coreField,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dsle: {
            platesRequired: [DataNames.HiAndromon],
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.HiAndromon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            digiScores: [DataNames.HiAndromon],
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.blue,
            },
        },
    },
    PrinceMamemon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.junkFactory,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            dna: [DataNames.MirageGaogamonBM],
            evolutionTree: DataNames.ToyAgumon,
        },
        dsle: {
            platesRequired: [DataNames.PrinceMamemon],
            location: {
                area: MapsList.dsle.chromeMine,
            },
            drops: [
                {
                    item: DataNames.PrinceMamemon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            digiScores: [DataNames.PrinceMamemon],
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.red,
            },
        },
    },
    Parasimon: {
        species: [Species.MAC, Species.INS],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.coreField,
            },
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gizamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.riskFactory,
            },
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.red,
            },
        },
    },
    Boltmon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,    // TODO: Moonlight only?
            },
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            digiScores: [DataNames.Boltmon],
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.blue,
            },
        },
    },
    Ebemon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Vademon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.blue,
            },
        },
    },
    Ophanimon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.RosemonBM],
            evolutionTree: DataNames.Puttomon,
        },
        dsle: {
            platesRequired: [DataNames.Ophanimon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Puttomon,
        },
        dssxw: {
            digiScores: [DataNames.Ophanimon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.DukemonCM],
        },
    },
    SlashAngemon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Kapurimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            dna: [DataNames.Duftmon],
            evolutionTree: DataNames.Tokomon,
        },
        dsle: {
            platesRequired: [DataNames.SlashAngemon],
            location: {
                area: MapsList.dsle.northCity,
            },
            drops: [
                {
                    item: DataNames.SlashAngemon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Shakkoumon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.blue,
            },
            fusions: [DataNames.RavemonBM],
        },
    },
    Jijimon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutionTree: DataNames.Bakumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Gummymon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.graboCave,
            },
            drops: [
                {
                    item: DataNames.Goddramon,
                    chance: 25,
                },
            ],
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Xuanwumon,
                    chance: 5,
                },
            ],
            fusions: [DataNames.Xuanwumon],
        },
    },
    Babamon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.ancientCanyon,
            },
            evolutionTree: DataNames.Bakumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            dna: [DataNames.RosemonBM],
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.graboCave,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.crystalCave,
                version: DataNames.red,
            },
            fusions: [DataNames.RosemonBM],
        },
    },
    Pharaohmon: {
        species: [Species.HOL, Species.DAR, Species.MAC],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.classDesert,
            },
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            digiScores: [DataNames.Pharaohmon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.both,
            },
        },
    },
    Anubimon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.thrillerRuins,
                version: DataNames.sunburst,
            },
            evolutionTree: DataNames.Anubimon,
        },
        dsle: {
            platesRequired: [DataNames.Anubimon],
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.Anubimon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            digiScores: [DataNames.Anubimon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ChronomonHM: {
        species: [Species.HOL, Species.BRD],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.ChronomonHM,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.ChronomonHM,
        },
        dsle: {
            platesRequired: [DataNames.ChronomonHMAlpha, DataNames.ChronomonHMBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            digiScores: [DataNames.ChronomonHM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Zhuqiaomon, DataNames.ShineGreymonBM],
        },
    },
    VenomVamdemon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.destroyedBelt,
            },
            evolutionTree: DataNames.PicoDevimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,    // TODO: Check if it's Moonlight-Only
            },
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.BelialVamdemonBeta,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 53,
                    digiPlates: [DataNames.BelialVamdemonAlpha, DataNames.BelialVamdemonBeta],
                    allied: [
                        {
                            digimon: DataNames.Arukenimon,
                        },
                        {
                            digimon: DataNames.Mummymon,
                        },
                    ],
                    evolvesTo: DataNames.BelialVamdemon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.VenomVamdemon],
            location: {
                area: MapsList.dssxw.spiderwebRuins,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.BelialVamdemon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.BelialVamdemon, DataNames.ChaosDukemon],
        },
    },
    Diaboromon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.coreField,
            },
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Armagemon, DataNames.ChaosDukemon],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            platesRequired: [DataNames.Diaboromon],
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            drops: [
                {
                    item: DataNames.Infermon,
                    chance: 100,
                },
                {
                    item: DataNames.Diaboromon,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 58,
                    digiPlates: [DataNames.ArmagemonAlpha, DataNames.ArmagemonBeta],
                    allied: [{
                        digimon: DataNames.Kuramon,
                    }],
                    evolvesTo: DataNames.Armagemon,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            digiScores: [DataNames.Diaboromon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Armagemon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Armagemon],
        },
    },
    Gulfmon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.ZeedMillenniumon,
                    chance: 5,
                },
            ],
            fusions: [DataNames.ZeedMillenniumon],
        },
    },
    Devitamamon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Syakomon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chromeMine,
            },
            drops: [
                {
                    item: DataNames.Digitamamon,
                    chance: 100,
                },
            ],
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            digiScores: [DataNames.Devitamamon],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.MoonMillenniumon,
                    chance: 5,
                },
            ],
            fusions: [DataNames.MoonMillenniumon],
        },
    },
    Zanbamon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            platesRequired: [DataNames.Zanbamon],
            location: {
                area: MapsList.dsle.northCity,
            },
            drops: [
                {
                    item: DataNames.Zanbamon,
                    chance: 10,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            digiScores: [DataNames.Zanbamon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Deathmon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.coreField,
            },
            evolutionTree: DataNames.Impmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutionTree: DataNames.ToyAgumonB,
        },
        dsle: {
            platesRequired: [DataNames.Deathmon],
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.Deathmon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.red,
            },
            fusions: [DataNames.BelialVamdemon],
        },
    },
    DeathmonB: {
        species: [Species.DAR],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.destroyedBelt,
            },
            evolutionTree: DataNames.Gotsumon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.chaosBrain,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kuramon,
        },
    },
    Lampmon: {
        species: [Species.HOL],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Syakomon,
        },
    },
    MetalSeadramon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.underseaDrive,
            },
            evolutionTree: DataNames.Betamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.macroSea,
                version: DataNames.both,
            },
            dna: [DataNames.Apocalymon],
            evolutionTree: DataNames.YukiAgumon,
        },
        dsle: {
            platesRequired: [DataNames.MetalSeadramon],
            location: {
                area: MapsList.dsle.graboMarine,
            },
            drops: [
                {
                    item: DataNames.WaruSeadramon,
                    chance: 75,
                },
                {
                    item: DataNames.MetalSeadramon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.MetalSeadramon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            drops: [
                {
                    digiScore: DataNames.Apocalymon,
                    chance: 10,
                },
            ],
            fusions: [DataNames.Apocalymon],
        },
    },
    GigaSeadramon: {
        species: [Species.AQU, Species.DRG],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.underseaDrive,
            },
            evolutionTree: DataNames.Betamon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.YukiAgumon,
        },
        dsle: {
            platesRequired: [DataNames.GigaSeadramon],
            location: {
                area: MapsList.dsle.graboMarine,
            },
            drops: [
                {
                    item: DataNames.MegaSeadramon,
                    chance: 75,
                },
                {
                    item: DataNames.GigaSeadramon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.GigaSeadramon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Pinocchimon: {
        species: [Species.MAC, Species.PLN],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.junkFactory,
            },
            evolutionTree: DataNames.ToyAgumonB,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Apocalymon],
            evolutionTree: DataNames.Kapurimon,
        },
        dsle: {
            platesRequired: [DataNames.Pinocchimon],
            location: {
                area: MapsList.dsle.riskFactory,
            },
            drops: [
                {
                    item: DataNames.Pinocchimon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            digiScores: [DataNames.Pinocchimon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Apocalymon],
        },
    },
    Mugendramon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.hardMountains,
            },
            evolutionTree: DataNames.Wormmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.processFactory,
                version: DataNames.moonlight,
            },
            dna: [DataNames.Apocalymon, DataNames.Millenniumon],
            evolutionTree: DataNames.Botamon,
        },
        dsle: {
            platesRequired: [DataNames.MugendramonAlpha, DataNames.MugendramonBeta],
            location: {
                area: MapsList.dsle.riskFactory,
            },
            drops: [
                {
                    item: DataNames.MugendramonAlpha,
                    chance: 50,
                },
                {
                    item: DataNames.MugendramonBeta,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 61,
                    digiPlates: [DataNames.Mugendramon, DataNames.Piemon, DataNames.ApocalymonAlpha, DataNames.ApocalymonBeta],
                    warps: [DataNames.BlackAgumonW1, DataNames.ApocalymonW2],
                    evolvesTo: DataNames.Apocalymon,
                },
            ],
            evolutionTree: DataNames.Botamon,
        },
        dssxw: {
            digiScores: [DataNames.MugendramonSpade, DataNames.MugendramonHeart],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.both,
            },
            fusions: [DataNames.Millenniumon, DataNames.Apocalymon, DataNames.Chaosdramon],
        },
    },
    Millenniumon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Millenniumon,
        },
        dsle: {
            platesRequired: [DataNames.MilleniumonAlpha, DataNames.MilleniumonBeta],
            location: {
                area: MapsList.dsle.riskFactory,
            },
            drops: [
                {
                    item: DataNames.MilleniumonAlpha,
                    chance: 50,
                },
                {
                    item: DataNames.MilleniumonBeta,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 58,
                    digiPlates: [DataNames.ZeedMillenniumon],
                    obtained: [{
                        digimon: DataNames.MoonMillenniumon,
                    }],
                    evolvesTo: DataNames.ZeedMillenniumon,
                },
                {
                    level: 51,
                    evolvesTo: DataNames.MoonMillenniumon,
                },
            ],
            evolutionTree: DataNames.Kimeramon,
        },
        dssxw: {
            digiScores: [DataNames.Millenniumon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.MoonMillenniumon, DataNames.ZeedMillenniumon],
        },
    },
    Piemon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.lavaRiver,
            },
            evolutionTree: DataNames.Goburimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.shadowAbyss,
                version: DataNames.moonlight,
            },
            dna: [DataNames.Apocalymon],
            evolutionTree: DataNames.Tsumemon,
        },
        dsle: {
            platesRequired: [DataNames.Piemon],
            location: {
                area: MapsList.dsle.graboCentral,
            },
            drops: [
                {
                    item: DataNames.Piemon,
                    chance: 50,
                },
                {
                    item: DataNames.PicoDevimonW3,
                    chance: 50,
                },
            ],
            evolutions: [
                {
                    level: 61,
                    digiPlates: [DataNames.Mugendramon, DataNames.Piemon, DataNames.ApocalymonAlpha, DataNames.ApocalymonBeta],
                    warps: [DataNames.PicoDevimonW3, DataNames.ApocalymonW1],
                    evolvesTo: DataNames.Apocalymon,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.PiemonSpade, DataNames.PiemonHeart],
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.both,
            },
            fusions: [DataNames.Apocalymon, DataNames.Beelzebumon2010Spade],
        },
    },
    Apollomon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Sunmon,
        },
        dsle: {
            platesRequired: [DataNames.Apollomon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Sunmon,
        },
        dssxw: {
            digiScores: [DataNames.Apollomon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Dianamon: {
        species: [Species.DAR, Species.BST],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Moonmon,
        },
        dsle: {
            platesRequired: [DataNames.Dianamon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Moonmon,
        },
        dssxw: {
            digiScores: [DataNames.Dianamon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Minervamon: {
        species: [Species.BST],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.paletteAmazon,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Minervamon,
        },
        dsle: {
            platesRequired: [DataNames.Minervamon],
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.Minervamon,
                    chance: 50,
                },
                {
                    item: DataNames.OmegamonW2,
                    chance: 25,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.Minervamon],
            location: {
                area: MapsList.dssxw.spinningAmazon,
                version: DataNames.red,
            },
        },
    },
    Neptunemon: {
        species: [Species.AQU],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Dagomon,
        },
        dsle: {
            platesRequired: [DataNames.Neptunemon],
            location: {
                area: MapsList.dsle.graboMarine,
            },
            drops: [
                {
                    item: DataNames.Neptunemon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.Neptunemon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Mercurymon: {
        species: [Species.BST],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.Mercurymon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.Mercurymon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.Mercurymon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Spinomon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.Spinomon],
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.Spinomon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.both,
            },
        },
    },
    Gaioumon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.Gaioumon],
            location: {
                area: MapsList.dsle.riskCave,
            },
            drops: [
                {
                    item: DataNames.MasterTyrannomon,
                    chance: 100,
                },
                {
                    item: DataNames.Gaioumon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.Gaioumon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    GranDracmon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.GranDracmon],
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Sangloupmon,
                    chance: 100,
                },
                {
                    item: DataNames.GranDracmon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            digiScores: [DataNames.GranDracmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.MoonMillenniumon],
        },
    },
    Beelzebumon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Kuramon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.BeelzebumonBM],
            evolutionTree: DataNames.Beelzebumon,
        },
        dsle: {
            platesRequired: [DataNames.Beelzebumon],
            location: {
                area: MapsList.dsle.anglerTunnel,
            },
            drops: [
                {
                    item: DataNames.BeelzebumonBMAlpha,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 57,
                    digiPlates: [DataNames.BeelzebumonBMAlpha, DataNames.BeelzebumonBMBeta],
                    obtained: [{
                        digimon: DataNames.Leomon,
                    }],
                    evolvesTo: DataNames.BeelzebumonBM,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            digiScores: [DataNames.Beelzebumon],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.red,
            },
            fusions: [DataNames.Beelzebumon2010Heart],
        },
    },
    Demon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        ds: {
            location: {
                area: MapsList.ds.lavaRiver,
            },
            evolutionTree: DataNames.Impmon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.LucemonFM,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chromeMine,
            },
            drops: [
                {
                    item: DataNames.LucemonFMBeta,
                    chance: 100,
                },
                {
                    item: DataNames.LucemonFMW2,
                    chance: 100,
                },
            ],
            evolutionTree: DataNames.LucemonFM,
        },
        dssxw: {
            digiScores: [DataNames.Demon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Lilithmon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.transfield,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dsle: {
            platesRequired: [DataNames.Lilithmon],
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Lilithmon,
                    chance: 50,
                },
                {
                    item: DataNames.ApocalymonW2,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.Lilithmon],
            location: {
                area: MapsList.dssxw.darknessTunnel,
                version: DataNames.red,
            },
        },
    },
    Barbamon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.Barbamon],
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.Barbamon,
                    chance: 50,
                },
                {
                    item: DataNames.LucemonFMW2,
                    chance: 100,
                },
            ],
            evolutionTree: DataNames.LucemonFM,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.lostSpace,
                version: DataNames.red,
            },
        },
    },
    Alphamon: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Solarmon,
        },
        dsle: {
            platesRequired: [DataNames.Alphamon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Dorimon,
        },
        dssxw: {
            digiScores: [DataNames.Alphamon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Dynasmon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.Dynasmon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.Dynasmon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.red,
            },
        },
    },
    LordKnightmon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.LordKnightmon],
            location: {
                area: MapsList.dsle.riskCave,
            },
            drops: [
                {
                    item: DataNames.LordKnightmon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            location: {
                area: MapsList.dssxw.flowerMeadow,
                version: DataNames.red,
            },
        },
    },
    Duftmon: {
        species: [Species.HOL, Species.BST],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Duftmon,
        },
        dsle: {
            platesRequired: [DataNames.Duftmon],
            location: {
                area: MapsList.dsle.chromeMine,
            },
            drops: [
                {
                    item: DataNames.Duftmon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.Duftmon],
            location: {
                area: MapsList.dssxw.digitalSpaceEast,
                version: DataNames.red,
            },
        },
    },
    UlforceVeedramon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.UlforceVeedramonAlpha, DataNames.UlforceVeedramonBeta],
            location: {
                area: MapsList.dsle.patchPrairie,
            },
            drops: [
                {
                    item: DataNames.UlforceVeedramonAlpha,
                    chance: 50,
                },
                {
                    item: DataNames.UlforceVeedramonBeta,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.UlforceVeedramon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Craniummon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.Craniummon],
            location: {
                area: MapsList.dsle.northCave, // Login Mountain - Magnet Mine version
            },
            drops: [
                {
                    item: DataNames.Craniummon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            digiScores: [DataNames.Craniummon],
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.red,
            },
        },
    },
    Examon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.Examon],
            location: {
                area: MapsList.dsle.loginMountain,
            },
            drops: [
                {
                    item: DataNames.Examon,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.Examon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    DaiPenmon: {
        species: [Species.AQU],
        stage: Stage.stage5,
        dssxw: {
            digiScores: [DataNames.DaiPenmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.Xuanwumon],
        },
    },
    AncientGreymon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientGreymon],
            location: {
                area: MapsList.dsle.taskCanyon,
            },
            drops: [
                {
                    item: DataNames.AncientGreymon,
                    chance: 50,
                },
                {
                    item: DataNames.SusanoomonAlpha,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 63,
                    digiPlates: [DataNames.AncientGreymon, DataNames.AncientGarurumon, DataNames.SusanoomonAlpha, DataNames.SusanoomonBeta],
                    warps: [DataNames.AgumonW1, DataNames.SusanoomonW1],
                    evolvesTo: DataNames.Susanoomon,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            digiScores: [DataNames.AncientGreymon],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.blue,
            },
            fusions: [DataNames.SusanoomonSpade],
        },
    },
    AncientGarurumon: {
        species: [Species.BST],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientGarurumon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.AncientGarurumon,
                    chance: 50,
                },
                {
                    item: DataNames.SusanoomonBeta,
                    chance: 10,
                },
            ],
            evolutions: [
                {
                    level: 63,
                    digiPlates: [DataNames.AncientGarurumon, DataNames.AncientGarurumon, DataNames.SusanoomonAlpha, DataNames.SusanoomonBeta],
                    warps: [DataNames.GabumonW1, DataNames.SusanoomonW2],
                    evolvesTo: DataNames.Susanoomon,
                },
                {
                    level: 61,
                    digiPlates: [DataNames.Baihumon],
                    evolvesTo: DataNames.Baihumon,
                },
            ],
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.AncientGarurumon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.blue,
            },
            fusions: [DataNames.SusanoomonSpade],
        },
    },
    AncientMegatheriumon: {
        species: [Species.BST],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientMegatheriumon],
            location: {
                area: MapsList.dsle.accessGlacier,
            },
            drops: [
                {
                    item: DataNames.AncientMegatheriumon,
                    chance: 50,
                },
                {
                    item: DataNames.SpiritOfIce,
                    chance: 75,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.AncientMegatheriumon],
            location: {
                area: MapsList.dssxw.skullIceberg,
                version: DataNames.red,
            },
            fusions: [DataNames.SusanoomonHeart],
        },
    },
    AncientIrismon: {
        species: [Species.BRD],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientIrismon],
            location: {
                area: MapsList.dsle.pixelDesert,
            },
            drops: [
                {
                    item: DataNames.AncientIrismon,
                    chance: 50,
                },
                {
                    item: DataNames.SpiritOfWind,
                    chance: 75,
                },
            ],
            evolutionTree: DataNames.Silphymon,
        },
        dssxw: {
            digiScores: [DataNames.AncientIrismon],
            location: {
                area: MapsList.dssxw.fortYard,
                version: DataNames.red,
            },
            drops: [
                {
                    digiScore: DataNames.Valdurmon,
                    chance: 5,
                },
            ],
            fusions: [DataNames.Valdurmon, DataNames.SusanoomonHeart],
        },
    },
    AncientBeatmon: {
        species: [Species.INS],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientBeatmonAlpha, DataNames.AncientBeatmonBeta],
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.AncientBeatmonAlpha,
                    chance: 50,
                },
                {
                    item: DataNames.AncientBeatmonBeta,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Minomon,
        },
        dssxw: {
            digiScores: [DataNames.AncientBeatmon],
            location: {
                area: MapsList.dssxw.endlessCoast,
                version: DataNames.blue,
            },
            fusions: [DataNames.SusanoomonSpade],
        },
    },
    AncientSphinxmon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientSphinxmon],
            location: {
                area: MapsList.dsle.thrillerRuins,
            },
            drops: [
                {
                    item: DataNames.AncientSphinxmon,
                    chance: 50,
                },
                {
                    item: DataNames.SpiritOfDarkness,
                    chance: 75,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            digiScores: [DataNames.AncientSphinxmon],
            location: {
                area: MapsList.dssxw.papyrusDesert,
                version: DataNames.blue,
            },
            fusions: [DataNames.SusanoomonSpade],
        },
    },
    AncientVolcamon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientVolcamon],
            location: {
                area: MapsList.dsle.shadowHell,
            },
            drops: [
                {
                    item: DataNames.AncientVolcamon,
                    chance: 50,
                },
                {
                    item: DataNames.SpiritOfEarth,
                    chance: 75,
                },
            ],
            evolutionTree: DataNames.Kapurimon,
        },
        dssxw: {
            digiScores: [DataNames.AncientVolcamonHeart, DataNames.AncientVolcamonSpade],
            location: {
                area: MapsList.dssxw.crystalVolcano,
                version: DataNames.both,
            },
            fusions: [DataNames.Chaosdramon, DataNames.SusanoomonHeart],
        },
    },
    AncientTroiamon: {
        species: [Species.PLN],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientTroiamonAlpha, DataNames.AncientTroiamonBeta],
            location: {
                area: MapsList.dsle.proxyIsland,
            },
            drops: [
                {
                    item: DataNames.AncientTroiamonAlpha,
                    chance: 50,
                },
                {
                    item: DataNames.AncientTroiamonBeta,
                    chance: 50,
                },
            ],
            evolutionTree: DataNames.Tanemon,
        },
        dssxw: {
            digiScores: [DataNames.AncientTroiamon],
            location: {
                area: MapsList.dssxw.stealthValley,
                version: DataNames.blue,
            },
            fusions: [DataNames.SusanoomonSpade],
        },
    },
    AncientMermaimon: {
        species: [Species.AQU],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientMermaimon],
            location: {
                area: MapsList.dsle.graboMarine,
            },
            drops: [
                {
                    item: DataNames.AncientMermaimon,
                    chance: 50,
                },
                {
                    item: DataNames.SpiritOfWater,
                    chance: 75,
                },
            ],
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.AncientMermaimon],
            location: {
                area: MapsList.dssxw.endlessSea,
                version: DataNames.red,
            },
            fusions: [DataNames.SusanoomonHeart],
        },
    },
    AncientWisemon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dsle: {
            platesRequired: [DataNames.AncientWisemon],
            location: {
                area: MapsList.dsle.wizardTemple,
            },
            drops: [
                {
                    item: DataNames.AncientWisemon,
                    chance: 50,
                },
                {
                    item: DataNames.SpiritOfSteel,
                    chance: 75,
                },
            ],
            evolutionTree: DataNames.Kuramon,
        },
        dssxw: {
            digiScores: [DataNames.AncientWisemon],
            location: {
                area: MapsList.dssxw.crystalMine,
                version: DataNames.red,
            },
            fusions: [DataNames.SusanoomonHeart, DataNames.Baihumon],
        },
    },
    DotShineGreymon: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Koromon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Koromon,
        },
    },
    DotMirageGaogamon: {
        species: [Species.BST],
        stage: Stage.stage5,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Wanyamon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Wanyamon,
        },
    },
    Tactimon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
        },
    },
    Blastmon: {
        species: [Species.MAC],
        stage: Stage.stage5,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
        },
    },
    Lilithmon2010: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssxw: {
            location: {
                area: MapsList.dssxw.digitalSpaceSouth,
                version: DataNames.both,
            },
        },
    },
    Beelzebumon2010: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssxw: {
            digiScores: [DataNames.Beelzebumon2010Heart, DataNames.Beelzebumon2010Spade],
            location: {
                area: MapsList.dssxw.digitalSpaceNorth,
                version: DataNames.both,
            },
            drops: [
                {
                    digiScore: DataNames.ShoutmonX4B,
                    chance: 10,
                },
            ],
            fusions: [DataNames.ShoutmonX4B],
        },
    },
    ShoutmonX4B: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dssxw: {
            digiScores: [DataNames.ShoutmonX4B],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ShoutmonX4S: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dssxw: {
            digiScores: [DataNames.ShoutmonX4S],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ShoutmonX5: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dssxw: {
            digiScores: [DataNames.ShoutmonX5],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.ShoutmonX5S],
        },
    },
    ShoutmonX3GM: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dssxw: {
            digiScores: [DataNames.ShoutmonX3GM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ShoutmonX3SD: {
        species: [Species.DRG],
        stage: Stage.stage5,
        dssxw: {
            digiScores: [DataNames.ShoutmonX3SD],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    GreyKnightsmon: {
        species: [Species.DAR],
        stage: Stage.stage5,
        dssxw: {
            digiScores: [DataNames.GreyKnightsmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    //#endregion

    //#region Ultimate 2
    Omegamon: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage6,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Koromon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.ImperialdramonPM],
            evolutionTree: DataNames.Omegamon,
        },
        dsle: {
            platesRequired: [DataNames.OmegamonAlpha, DataNames.OmegamonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Omegamon,
        },
        dssxw: {
            digiScores: [DataNames.Omegamon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.ImperialdramonPM],
        },
    },
    ImperialdramonFM: {
        species: [Species.DRG],
        stage: Stage.stage6,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.taskCanyon,
                version: DataNames.sunburst,
            },
            dna: [DataNames.ImperialdramonPM, DataNames.ShineGreymonBM],
            evolutionTree: DataNames.Paildramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.classDesert,
            },
            drops: [
                {
                    item: DataNames.ImperialdramonPMAlpha,
                    chance: 5,
                },
            ],
            evolutionTree: DataNames.Paildramon,
        },
        dssxw: {
            digiScores: [DataNames.ImperialdramonFM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.ImperialdramonPM],
        },
    },
    ImperialdramonPM: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage6,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Chicomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.ImperialdramonPM,
        },
        dsle: {
            platesRequired: [DataNames.ImperialdramonPMAlpha, DataNames.ImperialdramonPMBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Paildramon,
        },
        dssxw: {
            digiScores: [DataNames.ImperialdramonPM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    DukemonCM: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage6,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.DukemonCM,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.DukemonCM,
        },
        dsle: {
            platesRequired: [DataNames.DukemonCMAlpha, DataNames.DukemonCMBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Gigimon,
        },
        dssxw: {
            digiScores: [DataNames.DukemonCM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    BeelzebumonBM: {
        species: [Species.DAR],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.BeelzebumonBM,
        },
        dsle: {
            platesRequired: [DataNames.BeelzebumonBMAlpha, DataNames.BeelzebumonBMBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Kuramon,
        },
    },
    Susanoomon: {
        species: [Species.HOL],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.ChronomonHM],
            evolutionTree: DataNames.Susanoomon,
        },
        dsle: {
            platesRequired: [DataNames.SusanoomonAlpha, DataNames.SusanoomonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Susanoomon,
        },
        dssxw: {
            digiScores: [DataNames.SusanoomonHeart, DataNames.SusanoomonSpade],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ShineGreymonRM: {
        species: [Species.DAR, Species.DRG],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.ShineGreymonRM,
        },
        dsle: {
            location: {
                area: MapsList.dsle.riskCave,
            },
            drops: [
                {
                    item: DataNames.ShineGreymonBMAlpha,
                    chance: 5,
                },
                {
                    item: DataNames.ShineGreymonBMBeta,
                    chance: 5,
                },
            ],
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            digiScores: [DataNames.ShineGreymonRM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ShineGreymonBM: {
        species: [Species.DRG],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.ShineGreymonBM,
        },
        dsle: {
            platesRequired: [DataNames.ShineGreymonBMAlpha, DataNames.ShineGreymonBMBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Koromon,
        },
        dssxw: {
            digiScores: [DataNames.ShineGreymonBM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    MirageGaogamonBM: {
        species: [Species.BST],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.MirageGaogamonBM,
        },
        dsle: {
            platesRequired: [DataNames.MirageGaogamonBMAlpha, DataNames.MirageGaogamonBMBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Wanyamon,
        },
        dssxw: {
            digiScores: [DataNames.MirageGaogamonBM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    RosemonBM: {
        species: [Species.INS, Species.PLN],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.RosemonBM,
        },
        dsle: {
            platesRequired: [DataNames.RosemonBM],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Budmon,
        },
        dssxw: {
            digiScores: [DataNames.RosemonBM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    RavemonBM: {
        species: [Species.BRD],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.RavemonBM,
        },
        dsle: {
            platesRequired: [DataNames.RavemonBM],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Chicchimon,
        },
        dssxw: {
            digiScores: [DataNames.RavemonBM],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Apocalymon: {
        species: [Species.DAR],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Kuramon,
        },
        dsle: {
            platesRequired: [DataNames.ApocalymonAlpha, DataNames.ApocalymonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Apocalymon,
        },
        dssxw: {
            digiScores: [DataNames.Apocalymon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    BelialVamdemon: {
        species: [Species.DAR],
        stage: Stage.stage6,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.PicoDevimon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.BelialVamdemon,
        },
        dsle: {
            platesRequired: [DataNames.BelialVamdemonAlpha, DataNames.BelialVamdemonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Pagumon,
        },
        dssxw: {
            digiScores: [DataNames.BelialVamdemon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Armagemon: {
        species: [Species.DAR],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.magnetMine,
                version: DataNames.moonlight,
            },
            evolutionTree: DataNames.Armagemon,
        },
        dsle: {
            platesRequired: [DataNames.ArmagemonAlpha, DataNames.ArmagemonBeta],
            location: {
                area: MapsList.dsle.chromeMine,
            },
            drops: [
                {
                    item: DataNames.ArmagemonAlpha,
                    chance: 25,
                },
                {
                    item: DataNames.ArmagemonBeta,
                    chance: 25,
                },
            ],
            evolutionTree: DataNames.Tsumemon,
        },
        dssxw: {
            digiScores: [DataNames.Armagemon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Valdurmon: {
        species: [Species.BRD],
        stage: Stage.stage6,
        ds: {
            location: {
                area: MapsList.ds.none,
            },
            evolutionTree: DataNames.Tokomon,
        },
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.Chaosmon, DataNames.ChronomonHM, DataNames.RavemonBM],
            evolutionTree: DataNames.Valdurmon,
        },
        dsle: {
            platesRequired: [DataNames.Valdurmon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Silphymon,
        },
        dssxw: {
            digiScores: [DataNames.Valdurmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Aegisdramon: {
        species: [Species.DRG],
        stage: Stage.stage6,
        dsle: {
            platesRequired: [DataNames.Aegisdramon],
            location: {
                area: MapsList.dsle.northMarine,
            },
            drops: [
                {
                    item: DataNames.Aegisdramon,
                    chance: 25,
                },
            ],
            evolutionTree: DataNames.Chicomon,
        },
        dssxw: {
            digiScores: [DataNames.Aegisdramon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Chaosdramon: {
        species: [Species.MAC],
        stage: Stage.stage6,
        dssxw: {
            digiScores: [DataNames.Chaosdramon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Chaosmon: {
        species: [Species.HOL, Species.DRG],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.Chaosmon,
        },
        dsle: {
            platesRequired: [DataNames.ChaosmonAlpha, DataNames.ChaosmonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Chaosmon,
        },
        dssxw: {
            digiScores: [DataNames.Chaosmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Qinglongmon: {
        species: [Species.DRG],
        stage: Stage.stage6,
        dsle: {
            platesRequired: [DataNames.QinglongmonAlpha, DataNames.QinglongmonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.Qinglongmon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Xuanwumon: {
        species: [Species.AQU],
        stage: Stage.stage6,
        dsle: {
            platesRequired: [DataNames.XuanwumonAlpha, DataNames.XuanwumonBeta],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Poyomon,
        },
        dssxw: {
            digiScores: [DataNames.Xuanwumon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Baihumon: {
        species: [Species.BST],
        stage: Stage.stage6,
        dsle: {
            platesRequired: [DataNames.Baihumon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Tsunomon,
        },
        dssxw: {
            digiScores: [DataNames.Baihumon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    Zhuqiaomon: {
        species: [Species.BRD],
        stage: Stage.stage6,
        dsle: {
            platesRequired: [DataNames.Zhuqiaomon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Tokomon,
        },
        dssxw: {
            digiScores: [DataNames.Zhuqiaomon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    MoonMillenniumon: {
        species: [Species.DAR],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            dna: [DataNames.ZeedMillenniumon],
            evolutionTree: DataNames.Kuramon,
        },
        dsle: {
            location: {
                area: MapsList.dsle.chromeMine,
            },
            drops: [
                {
                    item: DataNames.ZeedMillenniumon,
                    chance: 5,
                },
                {
                    item: DataNames.KimeramonW2,
                    chance: 100,
                },
            ],
            evolutionTree: DataNames.Kimeramon,
        },
        dssxw: {
            digiScores: [DataNames.MoonMillenniumon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
            fusions: [DataNames.ZeedMillenniumon],
        },
    },
    ZeedMillenniumon: {
        species: [Species.DAR],
        stage: Stage.stage6,
        dssm: {
            location: {
                area: MapsList.dssm.none,
                version: DataNames.both,
            },
            evolutionTree: DataNames.ZeedMillenniumon,
        },
        dsle: {
            platesRequired: [DataNames.ZeedMillenniumon],
            location: {
                area: MapsList.dsle.none,
            },
            evolutionTree: DataNames.Kimeramon,
        },
        dssxw: {
            digiScores: [DataNames.ZeedMillenniumon],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    ShoutmonX5S: {
        species: [Species.DRG],
        stage: Stage.stage6,
        dssxw: {
            digiScores: [DataNames.ShoutmonX5S],
            location: {
                area: MapsList.dssxw.none,
                version: DataNames.both,
            },
        },
    },
    //#endregion
}

/*
RATES
Perfect dropping:
75% for own Plate/Score
25% for Ultimate main evo
10% for Ultimate non-main evo
1% for Ultimate 2

Ultimate dropping:
50% for own Plate/Score
10% for Ultimate 2 main evo
5% for Ultimate 2 non-main evo

Ultimate 2 dropping:
25% for own Plate/Score
5% for Ultimate 2 main evo
1% for Ultimate 2 non-main evo
*/

/* Drops will work as follows:
    a random number from 1 to 100 will be rolled every time to check for a drop,
    and if the number is lower than or equal to the Digimon chance, then the player gets that item.
    So, the chance of drop is a number from 1-100, which will correlate to the % of dropping the item
*/
