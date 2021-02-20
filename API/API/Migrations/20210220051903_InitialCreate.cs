using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace API.Migrations
{
    public partial class InitialCreate : Migration
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
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Character");

            migrationBuilder.DropTable(
                name: "CharacterApperance");
        }
    }
}
