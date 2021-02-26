using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace API.Migrations
{
    public partial class Initials : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Character",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterName = table.Column<string>(type: "text", nullable: true),
                    Class = table.Column<string>(type: "text", nullable: true),
                    Race = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Character", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterApperance",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    Size = table.Column<string>(type: "text", nullable: true),
                    Eyes = table.Column<string>(type: "text", nullable: true),
                    Height = table.Column<string>(type: "text", nullable: true),
                    Hair = table.Column<string>(type: "text", nullable: true),
                    Skin = table.Column<string>(type: "text", nullable: true),
                    Age = table.Column<string>(type: "text", nullable: true),
                    Weight = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterApperance", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterDescriptionDetails",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    PersonalityTraits = table.Column<string>(type: "text", nullable: true),
                    Ideals = table.Column<string>(type: "text", nullable: true),
                    Bonds = table.Column<string>(type: "text", nullable: true),
                    Flaws = table.Column<string>(type: "text", nullable: true),
                    Allies = table.Column<string>(type: "text", nullable: true),
                    Backstory = table.Column<string>(type: "text", nullable: true),
                    Alignment = table.Column<string>(type: "text", nullable: true),
                    Faith = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterDescriptionDetails", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterEquipments",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    EquipmentRef = table.Column<int>(type: "integer", nullable: false),
                    Quantity = table.Column<int>(type: "integer", nullable: false),
                    Cost = table.Column<int>(type: "integer", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: true),
                    IsEquipped = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterEquipments", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterMainStats",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    Speed = table.Column<int>(type: "integer", nullable: false),
                    Armor = table.Column<int>(type: "integer", nullable: false),
                    Initiative = table.Column<int>(type: "integer", nullable: false),
                    Profiency = table.Column<int>(type: "integer", nullable: false),
                    Inspiration = table.Column<bool>(type: "boolean", nullable: false),
                    Health = table.Column<int>(type: "integer", nullable: false),
                    MaxHealth = table.Column<int>(type: "integer", nullable: false),
                    Experience = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterMainStats", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterMoney",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    Copper = table.Column<int>(type: "integer", nullable: false),
                    Silver = table.Column<int>(type: "integer", nullable: false),
                    Gold = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterMoney", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterSavingThrows",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    Strength = table.Column<int>(type: "integer", nullable: false),
                    Dexterity = table.Column<int>(type: "integer", nullable: false),
                    Constitution = table.Column<int>(type: "integer", nullable: false),
                    Intelligence = table.Column<int>(type: "integer", nullable: false),
                    Wisdom = table.Column<int>(type: "integer", nullable: false),
                    Charisma = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterSavingThrows", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterSecondaryStats",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    Strength = table.Column<int>(type: "integer", nullable: false),
                    Dexterity = table.Column<int>(type: "integer", nullable: false),
                    Constitution = table.Column<int>(type: "integer", nullable: false),
                    Intelligence = table.Column<int>(type: "integer", nullable: false),
                    Wisdom = table.Column<int>(type: "integer", nullable: false),
                    Charisma = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterSecondaryStats", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterSkills",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    Acrobatics = table.Column<int>(type: "integer", nullable: false),
                    AnimalHandling = table.Column<int>(type: "integer", nullable: false),
                    Arcana = table.Column<int>(type: "integer", nullable: false),
                    Athletics = table.Column<int>(type: "integer", nullable: false),
                    Deception = table.Column<int>(type: "integer", nullable: false),
                    History = table.Column<int>(type: "integer", nullable: false),
                    Insight = table.Column<int>(type: "integer", nullable: false),
                    Intimidation = table.Column<int>(type: "integer", nullable: false),
                    Investigation = table.Column<int>(type: "integer", nullable: false),
                    Medicine = table.Column<int>(type: "integer", nullable: false),
                    Nature = table.Column<int>(type: "integer", nullable: false),
                    Perception = table.Column<int>(type: "integer", nullable: false),
                    Performance = table.Column<int>(type: "integer", nullable: false),
                    Persuasion = table.Column<int>(type: "integer", nullable: false),
                    Religion = table.Column<int>(type: "integer", nullable: false),
                    SleightOfHand = table.Column<int>(type: "integer", nullable: false),
                    Stealth = table.Column<int>(type: "integer", nullable: false),
                    Survival = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterSkills", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "CharacterSpells",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterRef = table.Column<int>(type: "integer", nullable: false),
                    SpellRef = table.Column<int>(type: "integer", nullable: false),
                    Hit = table.Column<int>(type: "integer", nullable: false),
                    Damage = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterSpells", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "Equipment",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    EquipmentName = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Cost = table.Column<int>(type: "integer", nullable: false),
                    HasIcon = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Equipment", x => x.Ref);
                });

            migrationBuilder.CreateTable(
                name: "Spells",
                columns: table => new
                {
                    Ref = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SpellName = table.Column<string>(type: "text", nullable: true),
                    ActionTime = table.Column<int>(type: "integer", nullable: false),
                    Range = table.Column<int>(type: "integer", nullable: false),
                    Level = table.Column<int>(type: "integer", nullable: false),
                    CastType = table.Column<string>(type: "text", nullable: true),
                    Duration = table.Column<double>(type: "double precision", nullable: false),
                    Components = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    HitBase = table.Column<int>(type: "integer", nullable: false),
                    DamageBase = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Spells", x => x.Ref);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Character");

            migrationBuilder.DropTable(
                name: "CharacterApperance");

            migrationBuilder.DropTable(
                name: "CharacterDescriptionDetails");

            migrationBuilder.DropTable(
                name: "CharacterEquipments");

            migrationBuilder.DropTable(
                name: "CharacterMainStats");

            migrationBuilder.DropTable(
                name: "CharacterMoney");

            migrationBuilder.DropTable(
                name: "CharacterSavingThrows");

            migrationBuilder.DropTable(
                name: "CharacterSecondaryStats");

            migrationBuilder.DropTable(
                name: "CharacterSkills");

            migrationBuilder.DropTable(
                name: "CharacterSpells");

            migrationBuilder.DropTable(
                name: "Equipment");

            migrationBuilder.DropTable(
                name: "Spells");
        }
    }
}
