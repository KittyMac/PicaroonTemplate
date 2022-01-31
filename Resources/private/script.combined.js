#define PAMPHLET_PREPROCESSOR

#include <./lib/defines.js>

#include <./lib/ui/ui.all.html>

#include <./lib/ui/ui.all.js>
#include <./lib/ui/ui.alert.js>
#include <./lib/ui/ui.button.js>

#include <./lib/laba.js>
#include <./lib/utility.js>
#include <./lib/navigation.js>
#include <./lib/timer.js>

var emToPxValue = 1.0;
function computeEmToPx(){
    var div = document.getElementById("emToPx");
    if (div != undefined) {
        div.style.height = '1em';
        emToPxValue = div.offsetHeight;
    }
}

let example0 = {"store":{"book":[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","display-price":8.95,"bargain":true},{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","display-price":12.99,"bargain":false},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","display-price":8.99,"bargain":true},{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the Rings","isbn":"0-395-19395-8","display-price":22.99,"bargain":false}],"bicycle":{"color":"red","display-price":19.95,"foo:bar":"fooBar","dot.notation":"new","dash-notation":"dashes"}}};
let example1 = {"web-app":{"servlet":[{"servlet-name":"cofaxCDS","servlet-class":"org.cofax.cds.CDSServlet","init-param":{"configGlossary:installationAt":"Philadelphia, PA","configGlossary:adminEmail":"ksm@pobox.com","configGlossary:poweredBy":"Cofax","configGlossary:poweredByIcon":"/images/cofax.gif","configGlossary:staticPath":"/content/static","templateProcessorClass":"org.cofax.WysiwygTemplate","templateLoaderClass":"org.cofax.FilesTemplateLoader","templatePath":"templates","templateOverridePath":"","defaultListTemplate":"listTemplate.htm","defaultFileTemplate":"articleTemplate.htm","useJSP":false,"jspListTemplate":"listTemplate.jsp","jspFileTemplate":"articleTemplate.jsp","timeout":200,"cachePackageTagsTrack":200,"cachePackageTagsStore":200,"cachePackageTagsRefresh":60,"cacheTemplatesTrack":100,"cacheTemplatesStore":50,"cacheTemplatesRefresh":15,"cachePagesTrack":200,"cachePagesStore":100,"cachePagesRefresh":10,"cachePagesDirtyRead":10,"searchEngineListTemplate":"forSearchEnginesList.htm","searchEngineFileTemplate":"forSearchEngines.htm","searchEngineRobotsDb":"WEB-INF/robots.db","useDataStore":true,"dataStoreClass":"org.cofax.SqlDataStore","redirectionClass":"org.cofax.SqlRedirection","dataStoreName":"cofax","dataStoreDriver":"com.microsoft.jdbc.sqlserver.SQLServerDriver","dataStoreUrl":"jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon","dataStoreUser":"sa","dataStorePassword":"dataStoreTestQuery","dataStoreTestQuery":"SET NOCOUNT ON;select test='test';","dataStoreLogFile":"/usr/local/tomcat/logs/datastore.log","dataStoreInitConns":10,"dataStoreMaxConns":100,"dataStoreConnUsageLimit":100,"dataStoreLogLevel":"debug","maxUrlLength":500}},{"servlet-name":"cofaxEmail","servlet-class":"org.cofax.cds.EmailServlet","init-param":{"mailHost":"mail1","mailHostOverride":"mail2","timeout":300}},{"servlet-name":"cofaxAdmin","servlet-class":"org.cofax.cds.AdminServlet"},{"servlet-name":"fileServlet","servlet-class":"org.cofax.cds.FileServlet"},{"servlet-name":"cofaxTools","servlet-class":"org.cofax.cms.CofaxToolsServlet","init-param":{"templatePath":"toolstemplates/","log":1,"logLocation":"/usr/local/tomcat/logs/CofaxTools.log","logMaxSize":"","dataLog":1,"dataLogLocation":"/usr/local/tomcat/logs/dataLog.log","dataLogMaxSize":"","removePageCache":"/content/admin/remove?cache=pages&id=","removeTemplateCache":"/content/admin/remove?cache=templates&id=","fileTransferFolder":"/usr/local/tomcat/webapps/content/fileTransferFolder","lookInContext":1,"adminGroupID":4,"betaServer":true,"timeout":600}}],"servlet-mapping":{"cofaxCDS":"/","cofaxEmail":"/cofaxutil/aemail/*","cofaxAdmin":"/admin/*","fileServlet":"/static/*","cofaxTools":"/tools/*"},"taglib":{"taglib-uri":"cofax.tld","taglib-location":"/WEB-INF/tlds/cofax.tld"}}};
let example2 = [{"repo":{"id":28688495,"name":"petroav/6.828","url":"https://api.github.com/repos/petroav/6.828"},"actor":{"id":665991,"login":"petroav","avatar_url":"https://avatars.githubusercontent.com/u/665991?","url":"https://api.github.com/users/petroav","gravatar_id":""},"public":true,"id":"2489651045","created_at":"2015-01-01T15:00:00Z","payload":{"master_branch":"master","pusher_type":"user","description":"Solution to homework and assignments from MIT's 6.828 (Operating Systems Engineering). Done in my spare time.","ref_type":"branch","ref":"master"},"type":"CreateEvent"},{"repo":{"id":28671719,"name":"rspt/rspt-theme","url":"https://api.github.com/repos/rspt/rspt-theme"},"actor":{"id":3854017,"login":"rspt","avatar_url":"https://avatars.githubusercontent.com/u/3854017?","url":"https://api.github.com/users/rspt","gravatar_id":""},"public":true,"id":"2489651051","created_at":"2015-01-01T15:00:01Z","payload":{"before":"437c03652caa0bc4a7554b18d5c0a394c2f3d326","ref":"refs/heads/master","push_id":536863970,"size":1,"distinct_size":1,"head":"6b089eb4a43f728f0a594388092f480f2ecacfcd","commits":[{"author":{"email":"5c682c2d1ec4073e277f9ba9f4bdf07e5794dabe@rspt.ch","name":"rspt"},"message":"Fix main header height on mobile","url":"https://api.github.com/repos/rspt/rspt-theme/commits/6b089eb4a43f728f0a594388092f480f2ecacfcd","distinct":true,"sha":"6b089eb4a43f728f0a594388092f480f2ecacfcd"}]},"type":"PushEvent"},{"repo":{"id":28270952,"name":"izuzero/xe-module-ajaxboard","url":"https://api.github.com/repos/izuzero/xe-module-ajaxboard"},"actor":{"id":6339799,"login":"izuzero","avatar_url":"https://avatars.githubusercontent.com/u/6339799?","url":"https://api.github.com/users/izuzero","gravatar_id":""},"public":true,"id":"2489651053","created_at":"2015-01-01T15:00:01Z","payload":{"before":"590433109f221a96cf19ea7a7d9a43ca333e3b3e","ref":"refs/heads/develop","push_id":536863972,"size":1,"distinct_size":1,"head":"ec819b9df4fe612bb35bf562f96810bf991f9975","commits":[{"author":{"email":"df05f55543db3c62cf64f7438018ec37f3605d3c@gmail.com","name":"Eunsoo Lee"},"message":"#20 게시글 및 댓글 삭제 시 새로고침이 되는 문제 해결\n\n원래 의도는 새로고침이 되지 않고 확인창만으로 해결되어야 함.\n기본 게시판 대응 플러그인에서 발생한 이슈.","url":"https://api.github.com/repos/izuzero/xe-module-ajaxboard/commits/ec819b9df4fe612bb35bf562f96810bf991f9975","distinct":true,"sha":"ec819b9df4fe612bb35bf562f96810bf991f9975"}]},"type":"PushEvent"},{"repo":{"id":2871998,"name":"visionmedia/debug","url":"https://api.github.com/repos/visionmedia/debug"},"actor":{"id":6894991,"login":"SametSisartenep","avatar_url":"https://avatars.githubusercontent.com/u/6894991?","url":"https://api.github.com/users/SametSisartenep","gravatar_id":""},"public":true,"id":"2489651057","created_at":"2015-01-01T15:00:03Z","org":{"id":9285252,"login":"visionmedia","avatar_url":"https://avatars.githubusercontent.com/u/9285252?","url":"https://api.github.com/orgs/visionmedia","gravatar_id":""},"payload":{"action":"started"},"type":"WatchEvent"},{"repo":{"id":28593843,"name":"winterbe/streamjs","url":"https://api.github.com/repos/winterbe/streamjs"},"actor":{"id":485033,"login":"winterbe","avatar_url":"https://avatars.githubusercontent.com/u/485033?","url":"https://api.github.com/users/winterbe","gravatar_id":""},"public":true,"id":"2489651062","created_at":"2015-01-01T15:00:03Z","payload":{"before":"0fef99f604154ccfe1d2fcd0aadeffb5c58e43ff","ref":"refs/heads/master","push_id":536863975,"size":1,"distinct_size":1,"head":"15b303203be31bd295bc831075da8f74b99b3981","commits":[{"author":{"email":"52a47bffd52d9cea1ee1362f2bd0c5f87fac9262@googlemail.com","name":"Benjamin Winterberg"},"message":"Add comparator support for min, max operations","url":"https://api.github.com/repos/winterbe/streamjs/commits/15b303203be31bd295bc831075da8f74b99b3981","distinct":true,"sha":"15b303203be31bd295bc831075da8f74b99b3981"}]},"type":"PushEvent"}];

let examples = [example0, example1, example2, {}];

let paths0 = [
    "$.store.book[*].author",
    "$..['author','title']",
    "$..author\n$..title",
    "$.store.*",
    "$.store..display-price",
    "$..book[2]",
    "$..book[-2]",
    "$..book[0,1]",
    "$..book[:2]",
    "$..book[1:2]",
    "$..book[-2:]",
    "$..book[2:]",
    "$..book[?(@.isbn)]",
    "$.store.book[?(@.display-price < 10)]",
    "$..book[?(@.bargain == true)]",
    "$..book[?(@.author =~ /.*REES/i)]",
    "$..*",
    "$..book.length()"
]
let paths1 = [
    "$..['servlet-name']",
    "$..[?(@.servlet-class contains 'cms')]",
    "$..servlet[*]..timeout"
]
let paths2 = [
    "$..repo",
    "$..[?(@.payload.commits)]",
    "$..repo[?(@.name =~ /-/)]"
]

let examplePaths = [paths0, paths1, paths2, []];