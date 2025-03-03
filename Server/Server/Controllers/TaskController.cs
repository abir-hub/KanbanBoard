using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {

        [HttpGet("Tasks")]
        public async Task<IActionResult> GetTasks(CancellationToken cancellationToken)
        {
            return Ok("The data");
        }
    }
}
