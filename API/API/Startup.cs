using API.Data;
using API.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<DNDDbContext>(opt => opt.UseNpgsql("UserID=DNDUser;Password=123456;Server=localhost;Port=5432;Database=DND;Integrated Security=true;Pooling=true;"));
            services.AddTransient<ICharacterService, CharacterService>();
            services.AddTransient<ICharacterApperanceService, CharacterApperanceService>();
            services.AddTransient<ICharacterDescriptionDetailsService, CharacterDescriptionDetailsService>();
            services.AddTransient<ICharacterEquipmentService, CharacterEquipmentService>();
            services.AddTransient<ICharacterMainStatsService, CharacterMainStatsService>();
            services.AddTransient<ICharacterMoneyService, CharacterMoneyService>();
            services.AddTransient<ICharacterSavingThrowsService, CharacterSavingThrowsService>();
            services.AddTransient<ICharacterSecondaryStatsService, CharacterSecondaryStatsService>();
            services.AddTransient<ICharacterSkillsService, CharacterSkillsService>();
            services.AddTransient<ICharacterSpellsService, CharacterSpellsService>();
            services.AddScoped<IIconService, IconService>();
            services.AddScoped<IEquipmentService, EquipmentService>();
            services.AddScoped<ISpellService, SpellService>();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.WithOrigins("http://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });

            services.AddSwaggerGen();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseCors("CorsPolicy");

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });


        }
    }
}
