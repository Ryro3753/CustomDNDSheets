using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace API.Migrations
{
    public partial class Initial : Migration
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
                name: "CharacterStats",
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
                    table.PrimaryKey("PK_CharacterStats", x => x.Ref);
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
                name: "CharacterStats");
        }
    }
}
