
//Change this interval to your choice
INTERVAL = 0;


function start()
{
    url = location.href;
//    alert("URl : "+location.href);
    
    if(url.includes("meet.google.com/eynnhra4sa"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/d46icrrsr7"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/anr2o2pry2"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/eyyxdfbjh4"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/deifsgowqx"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/duo4pnjbgh"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/hahu7a2zvx"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/fa64zdcrvv"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/di6brud5u4"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/br5h3vhrxj"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/eynnhra4sa"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/d46icrrsr7"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/anr2o2pry2"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/eyyxdfbjh4"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/deifsgowqx"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/duo4pnjbgh"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/hahu7a2zvx"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/fa64zdcrvv"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/di6brud5u4"))
        {
            meet();
        }
    else if(url.includes("meet.google.com/lookup/br5h3vhrxj"))
        {
            meet();
        }
    
}

function meet()
{
  setTimeout(function(){
      try
      {
        items = document.getElementsByTagName("div");
        for(i=0;i<items.length;i++)
        {
          if(items[i].hasAttribute("aria-label"))
          {
            if(items[i].getAttribute("aria-label").includes("camera"))
            {
              if(items[i].getAttribute("data-is-muted").includes("true")){
                document.getElementsByTagName("body")[0].click()
                // console.log(items[i].innerHTML);
                items[i].click()
              }
            }
          }
        }

      }

      catch(err)
      {
        console.log(err)
      }

      meet();
      
       
    },INTERVAL*1000)
}

start()
