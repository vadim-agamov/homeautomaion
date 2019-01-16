module.exports = function(RED) 
{
    function UptimeNode(config) 
    {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', 
        	function(msg) 
        	{
        		var d = new Date();
        		var now = d.getTime();
				var context = this.context();

				var cur_ts = now;
				var prev_ts = context.get("prev_ts") || cur_ts;
				var uptime = context.get("uptime") || 0;
				var downtime = context.get("downtime") || 0;

				// this.log(cur_ts);

				var delta = cur_ts - prev_ts;
				if(msg.payload == 'reset')
				{
					downtime = 0;
					uptime = 0;
				}
				else if(msg.payload == false)
				{
					downtime += delta;
				}
				else
				{
					uptime += delta;
				}

		
				prev_ts = cur_ts;
				context.set("prev_ts", prev_ts);
				context.set("uptime", uptime);
				context.set("downtime", downtime);

				
				msg.uptime = uptime;
				msg.uptime_sec = uptime / 1000;
				msg.uptime_hr = uptime / (1000 * 60 * 60);
				msg.downtime = downtime;
				msg.downtime_sec = downtime / 1000;
				msg.downtime_hr = downtime / (1000 * 60 * 60);

				msg.payload = msg.uptime_hr;
				node.send(msg);
        	});
    }
    RED.nodes.registerType("uptime", UptimeNode);
}
