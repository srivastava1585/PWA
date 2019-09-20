using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PWADemo.Startup))]
namespace PWADemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
