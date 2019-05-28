using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HELPS.Migrations
{
    public partial class Workshops : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Workshops",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    StartTime = table.Column<string>(nullable: true),
                    Duration = table.Column<int>(nullable: false),
                    RoomId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    CutOff = table.Column<int>(nullable: false),
                    Maximum = table.Column<int>(nullable: false),
                    TargetGroup = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    AvailablePlaces = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Workshops", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Workshops");
        }
    }
}
