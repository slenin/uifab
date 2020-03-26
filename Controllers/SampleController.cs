namespace uifab.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    [Produces("application/json")]
    [ApiController]
    [Route("sample")]
    public class SampleController : ControllerBase
    {
        [HttpGet("{error}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> Get(int error)
        {
            await Task.Delay(500);
            if (error == 404)
            {
                return this.NotFound();
            }

            return this.Ok(new[] {
                new { Name = "Lenin", Age = 35, Status = "Married" },
                new { Name = "Thangam", Age = 35, Status = "Married" },
                new { Name = "Kana", Age = 4, Status = "Single" },
                new { Name = "Thiran", Age = 0, Status = "Single" },
            });
        }
    }
}
