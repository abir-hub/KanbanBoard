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
            return Ok("{\r\n    tasks: {\r\n        1 : { id: 1, text: 'Take out the garbage', assigned: \"Abir\", tags: [\"Photography\", \"travel\", \"Winter\"]},\r\n        2 : { id: 2, text: 'Watch my favorite show', assigned: \"Abir\", tags: [\"Photography\", \"travel\", \"Winter\"]},\r\n        3 : { id: 3, text: 'Charge my phone', assigned: \"Abir\", tags: [\"Photography\", \"travel\", \"Winter\"]},\r\n        4 : { id: 4, text: 'Cook dinner', assigned: \"Abir\", tags: [\"Photography\", \"travel\", \"Winter\"]},\r\n        5 : { id: 5, text: 'Clean table', assigned: \"Abir\", tags: [\"Photography\", \"travel\", \"Winter\"]}\r\n    },\r\n    columns: {\r\n        'column-1': {\r\n            id: 'column-1',\r\n            title: 'To do',\r\n            taskIds: [1,2,3,4,5]\r\n        },\r\n        'column-2' : {\r\n            id: 'column-2',\r\n            title: 'On Progress',\r\n            taskIds: []\r\n        },\r\n        'column-3' : {\r\n            id: 'column-3',\r\n            title: 'Testing',\r\n            taskIds: []\r\n        },\r\n        'column-4' : {\r\n            id: 'column-4',\r\n            title: 'Done',\r\n            taskIds: []\r\n        }\r\n    },\r\n    // Facilitate reordering of the columns\r\n    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']\r\n}");
        }
    }
}