// =================================================================== 
// Project Name:           alex
// Date/Time Generated:    10/05/2000 22:49
// 
// =================================================================== 
// Server List:
// 
// ftp://bechtel.colorado.edu
// =================================================================== 

function Main() 
{
 var app = Application;

   app.DeploymentManager.OpenProject("D:\\webpages\\alex\\alex.apf");
   // =================================================================== 
   // Project Server Selections
   // =================================================================== 
   // Project Server ftp://bechtel.colorado.edu
   app.DeploymentManager.SetDeployState("ftp://bechtel.colorado.edu",true);
   // =================================================================== 
   // Set Deployment Flags...
   // =================================================================== 
   app.DeploymentManager.CreateFolder = true;
   app.DeploymentManager.UploadOnlyIfNewer = true;
   app.DeploymentManager.EncryptCFML = false;
   app.DeploymentManager.ForceLowerCase = false;
   app.DeploymentManager.UploadProject("D:\\webpages\\alex\\alex.apf");
   app.DeploymentManager.Closeproject();
 
}
