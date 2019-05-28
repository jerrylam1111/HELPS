﻿// <auto-generated />
using HELPS.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HELPS.Migrations
{
    [DbContext(typeof(HelpsContext))]
    [Migration("20190528140351_Workshops")]
    partial class Workshops
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("HELPS.Models.Student", b =>
                {
                    b.Property<int>("StudentId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("StudentId");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("HELPS.Models.Workshop", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AvailablePlaces");

                    b.Property<int>("CutOff");

                    b.Property<string>("Description");

                    b.Property<int>("Duration");

                    b.Property<int>("Maximum");

                    b.Property<string>("RoomId");

                    b.Property<string>("StartTime");

                    b.Property<string>("TargetGroup");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Workshops");
                });
#pragma warning restore 612, 618
        }
    }
}