module.exports=[35112,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactDOM},33354,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},33540,a=>{"use strict";let b=(0,a.i(64831).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);a.s(["Search",0,b],33540)},80180,a=>{"use strict";let b=(0,a.i(64831).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);a.s(["Trash2",0,b],80180)},15830,a=>{"use strict";var b=a.i(69240);function c(a){return a.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}async function d(){let a=(0,b.createClient)(),{data:c,error:d}=await a.from("products").select(`
      *,
      category:categories(
        id,
        name
      )
    `).order("display_order",{ascending:!0});if(d)throw d;return c??[]}async function e(a){let d=(0,b.createClient)(),{error:e}=await d.from("products").insert({...a,slug:c(a.name)});if(e)throw e}async function f(a,d){let e=(0,b.createClient)(),f={...d};d.name&&(f.slug=c(d.name));let{error:g}=await e.from("products").update(f).eq("id",a);if(g)throw g}async function g(a){let c=(0,b.createClient)(),{error:d}=await c.from("products").delete().eq("id",a);if(d)throw d}a.s(["createProduct",0,e,"deleteProduct",0,g,"getProducts",0,d,"updateProduct",0,f])}];

//# sourceMappingURL=_1olomnl._.js.map