using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CharactersController : ControllerBase
    {
        private readonly DNDDbContext _context;

        public CharactersController(DNDDbContext context)
        {
            _context = context;
        }

        // GET: api/Characters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Characters>>> GetcharacterSet()
        {
            return await _context.Characters.ToListAsync();
        }

        // GET: api/Characters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Characters>> GetCharacters(int id)
        {
            var characters = await _context.Characters.FindAsync(id);

            if (characters == null)
            {
                return NotFound();
            }

            return characters;
        }

        // PUT: api/Characters/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCharacters(int id, Characters characters)
        {
            if (id != characters.Ref)
            {
                return BadRequest();
            }

            _context.Entry(characters).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CharactersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Characters
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Characters>> PostCharacters(Characters characters)
        {
            _context.Characters.Add(characters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCharacters", new { id = characters.Ref }, characters);
        }

        // DELETE: api/Characters/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Characters>> DeleteCharacters(int id)
        {
            var characters = await _context.Characters.FindAsync(id);
            if (characters == null)
            {
                return NotFound();
            }

            _context.Characters.Remove(characters);
            await _context.SaveChangesAsync();

            return characters;
        }

        private bool CharactersExists(int id)
        {
            return _context.Characters.Any(e => e.Ref == id);
        }
    }
}
