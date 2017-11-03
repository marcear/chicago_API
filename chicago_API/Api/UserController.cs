using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using chicago_API.Models;
using Newtonsoft.Json;
using System.Web.Http.Description;

namespace chicago_API.Api
{
    public class UserController : ApiController
    {
        public UserController() {

        }

        [HttpPost]
        public IHttpActionResult GetUser([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //Aca iria la validacion del usuario admin en la base
            var us = new User { Name = user.Name, Password = user.Password };
            return Ok("desde backend " + us.Name);
        }
    }
}
