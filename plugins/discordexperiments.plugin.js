//META{"name":"DiscordExperiments"}*//
 
function DiscordExperiments() {
    return;
}
 
DiscordExperiments.prototype.pluginName = "DiscordExperiments";
 
DiscordExperiments.prototype.load = function() {};
 
DiscordExperiments.prototype.unload = function() {};
 
DiscordExperiments.prototype.start = function() {
	webpackJsonp([6],{d:(m,e,r)=>{for(k in r.c)(m=r.c[k].exports)&&m.isDeveloper&&(m.isDeveloper=_=>true)}},["d"]);
	webpackJsonp([],{d:(a,b,d)=>{let f={};for(i=0;0!==f.isDeveloper;i++)f=d(i)||{};let o=Object;o.setPrototypeOf(f,o.assign({},o.getPrototypeOf(f),{isDeveloper:1}))}},["d"]);
};
 
DiscordExperiments.prototype.onSwitch = function() {};
 
DiscordExperiments.prototype.stop = function() {};
 
DiscordExperiments.prototype.getName = function() {
    return "DiscordExperiments";
};
 
DiscordExperiments.prototype.getDescription = function() {
    return "Enables the experiments tab on the Discord client. May require closing and reopening user settings to take effect. Open settings panel for more information."
};
 
DiscordExperiments.prototype.getVersion = function() {
    return "1";
};
 
DiscordExperiments.prototype.getAuthor = function() {
    return "Pointy";
};
 
DiscordExperiments.prototype.getSettingsPanel = function() {
    return `Currently tested working on Discord Canary 0.0.157 Build 2121.
            Can't guarentee functionality.
            Disable the plugin and restart the client to remove.`;
};