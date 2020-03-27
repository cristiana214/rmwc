(window["webpackJsonprmwc-main"]=window["webpackJsonprmwc-main"]||[]).push([[8],{1e3:function(e,t,n){"use strict";n.r(t);var a=n(13),i=n(21),c=n(0),r=n.n(c),l=n(1),s=n(181),m=n(992),o=n(58),u=n(18),L=n(28),d=n(43),I=n(61),k=n(55);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){return r.a.createElement(l.b,{title:"Lists",lead:"Lists are continuous, vertical indexes of text or images.",module:"@rmwc/list",styles:["@material/list/dist/mdc.list.css"],docsLink:"https://material.io/develop/web/components/lists/",examples:m},r.a.createElement(l.f,null,"Two Line"),r.a.createElement(l.e,null,"When using the `twoLine` prop, you have to wrap the contents of the `ListItem` in `ListItemText`."),r.a.createElement(l.c,null,r.a.createElement(o.a,{twoLine:!0},r.a.createElement(u.d,null,r.a.createElement(u.i,null,r.a.createElement(u.g,null,"Cookies"),r.a.createElement(u.h,null,"$4.99 a dozen"))),r.a.createElement(u.d,null,r.a.createElement(u.i,null,r.a.createElement(u.g,null,"Pizza"),r.a.createElement(u.h,null,"$1.99 a slice"))),r.a.createElement(u.d,null,r.a.createElement(u.i,null,r.a.createElement(u.g,null,"Icecream"),r.a.createElement(u.h,null,"$0.99 a scoop"))))),r.a.createElement(l.f,null,"Leading and Trailing Icons"),r.a.createElement(l.c,null,r.a.createElement(o.a,null,r.a.createElement(u.d,null,r.a.createElement(u.e,{icon:"favorite"}),"Leading"),r.a.createElement(u.d,null,"Trailing",r.a.createElement(u.f,{icon:"star"})),r.a.createElement(u.d,null,r.a.createElement(u.e,{icon:"wifi"}),"Leading and Trailing",r.a.createElement(u.f,{icon:"info"})),r.a.createElement(u.d,null,r.a.createElement(u.e,{icon:"wifi"}),"Leading with Trailing Text",r.a.createElement(u.f,null,"HELLO!")))),r.a.createElement(l.f,null,"Avatar List with Dividers"),r.a.createElement(l.c,null,r.a.createElement(o.a,{twoLine:!0,avatarList:!0},r.a.createElement(u.b,null,r.a.createElement(u.d,null,r.a.createElement(u.e,{icon:r.a.createElement(L.a,{src:"images/avatars/blackwidow.png",size:"xsmall",name:"Natalia Alianovna Romanova"})}),"Natalia Alianovna Romanova",r.a.createElement(u.f,{icon:"info"})),r.a.createElement(u.d,null,r.a.createElement(u.e,{icon:r.a.createElement(L.a,{src:"images/avatars/hulk.png",size:"small",name:"Bruce Banner"})}),"Bruce Banner",r.a.createElement(u.f,{icon:"info"}))),r.a.createElement(u.a,null),r.a.createElement(u.b,null,r.a.createElement(u.d,null,r.a.createElement(u.e,{icon:r.a.createElement(L.a,{src:"images/avatars/thor.png",size:"medium",name:"Thor Odinson"})}),"Thor Odinson",r.a.createElement(u.f,{icon:"info"}))))),r.a.createElement(l.f,null,"Selectable"),r.a.createElement(l.e,null,"Checkboxes and Radios can be included as part of `ListItemMeta`. It is recommended when using these that you are using controlled components, and that you put your interaction handler on the `ListItem` itself. Notice the `readOnly` prop is also set on the individual form elements."),r.a.createElement(l.c,{label:"Checkboxes"},(function(){var e=r.a.useState({Cookies:!1,Pizza:!1,Icecream:!1}),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(o.a,null,["Cookies","Pizza","Icecream"].map((function(e){return r.a.createElement(u.d,{key:e,onClick:function(){return c(f({},n,Object(a.a)({},e,!n[e])))}},e,r.a.createElement(u.f,null,r.a.createElement(d.a,{checked:n[e],readOnly:!0})))})))})),r.a.createElement(l.c,{label:"Switches"},(function(){var e=r.a.useState({Cookies:!1,Pizza:!1,Icecream:!1}),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(o.a,null,["Cookies","Pizza","Icecream"].map((function(e){return r.a.createElement(u.d,{key:e,onClick:function(){return c(f({},n,Object(a.a)({},e,!n[e])))}},e,r.a.createElement(u.f,null,r.a.createElement(I.a,{checked:n[e],readOnly:!0})))})))})),r.a.createElement(l.c,{label:"Radios"},(function(){var e=r.a.useState("Cookies"),t=Object(i.a)(e,2),n=t[0],a=t[1];return r.a.createElement(o.a,null,["Cookies","Pizza","Icecream"].map((function(e){return r.a.createElement(u.d,{key:e,onClick:function(){return a(e)}},e,r.a.createElement(u.f,null,r.a.createElement(k.a,{checked:n===e,readOnly:!0})))})))})),r.a.createElement(l.a,{src:s,components:[o.a,u.d,u.g,u.h,u.e,u.f,u.a,u.b,u.c,u.j]}))}},992:function(e){e.exports=JSON.parse('["<List twoLine>\\n  <ListItem>\\n    <ListItemText>\\n      <ListItemPrimaryText>Cookies</ListItemPrimaryText>\\n      <ListItemSecondaryText>$4.99 a dozen</ListItemSecondaryText>\\n    </ListItemText>\\n  </ListItem>\\n  <ListItem>\\n    <ListItemText>\\n      <ListItemPrimaryText>Pizza</ListItemPrimaryText>\\n      <ListItemSecondaryText>$1.99 a slice</ListItemSecondaryText>\\n    </ListItemText>\\n  </ListItem>\\n  <ListItem>\\n    <ListItemText>\\n      <ListItemPrimaryText>Icecream</ListItemPrimaryText>\\n      <ListItemSecondaryText>$0.99 a scoop</ListItemSecondaryText>\\n    </ListItemText>\\n  </ListItem>\\n</List>","<List>\\n  <ListItem>\\n    <ListItemGraphic icon=\\"favorite\\" />\\n    Leading\\n  </ListItem>\\n  <ListItem>\\n    Trailing\\n    <ListItemMeta icon=\\"star\\" />\\n  </ListItem>\\n  <ListItem>\\n    <ListItemGraphic icon=\\"wifi\\" />\\n    Leading and Trailing\\n    <ListItemMeta icon=\\"info\\" />\\n  </ListItem>\\n  <ListItem>\\n    <ListItemGraphic icon=\\"wifi\\" />\\n    Leading with Trailing Text\\n    <ListItemMeta>HELLO!</ListItemMeta>\\n  </ListItem>\\n</List>","<List twoLine avatarList>\\n  <ListGroup>\\n    <ListItem>\\n      <ListItemGraphic\\n        icon={\\n          <Avatar\\n            src=\\"images/avatars/blackwidow.png\\"\\n            size=\\"xsmall\\"\\n            name=\\"Natalia Alianovna Romanova\\"\\n          />\\n        }\\n      />\\n      Natalia Alianovna Romanova\\n      <ListItemMeta icon=\\"info\\" />\\n    </ListItem>\\n    <ListItem>\\n      <ListItemGraphic\\n        icon={\\n          <Avatar\\n            src=\\"images/avatars/hulk.png\\"\\n            size=\\"small\\"\\n            name=\\"Bruce Banner\\"\\n          />\\n        }\\n      />\\n      Bruce Banner\\n      <ListItemMeta icon=\\"info\\" />\\n    </ListItem>\\n  </ListGroup>\\n  <ListDivider />\\n  <ListGroup>\\n    <ListItem>\\n      <ListItemGraphic\\n        icon={\\n          <Avatar\\n            src=\\"images/avatars/thor.png\\"\\n            size=\\"medium\\"\\n            name=\\"Thor Odinson\\"\\n          />\\n        }\\n      />\\n      Thor Odinson\\n      <ListItemMeta icon=\\"info\\" />\\n    </ListItem>\\n  </ListGroup>\\n</List>","function Example() {\\n  const [checked, setChecked] = React.useState({\\n    Cookies: false,\\n    Pizza: false,\\n    Icecream: false\\n  });\\n\\n  return (\\n    <List>\\n      {[\'Cookies\', \'Pizza\', \'Icecream\'].map(key => (\\n        <ListItem\\n          key={key}\\n          onClick={() =>\\n            setChecked({ ...checked, [key]: !checked[key] })\\n          }\\n        >\\n          {key}\\n          <ListItemMeta>\\n            <Checkbox checked={checked[key]} readOnly />\\n          </ListItemMeta>\\n        </ListItem>\\n      ))}\\n    </List>\\n  );\\n}","function Example() {\\n  const [checked, setChecked] = React.useState({\\n    Cookies: false,\\n    Pizza: false,\\n    Icecream: false\\n  });\\n\\n  return (\\n    <List>\\n      {[\'Cookies\', \'Pizza\', \'Icecream\'].map(key => (\\n        <ListItem\\n          key={key}\\n          onClick={() =>\\n            setChecked({ ...checked, [key]: !checked[key] })\\n          }\\n        >\\n          {key}\\n          <ListItemMeta>\\n            <Switch checked={checked[key]} readOnly />\\n          </ListItemMeta>\\n        </ListItem>\\n      ))}\\n    </List>\\n  );\\n}","function Example() {\\n  const [checked, setChecked] = React.useState(\'Cookies\');\\n\\n  return (\\n    <List>\\n      {[\'Cookies\', \'Pizza\', \'Icecream\'].map(key => (\\n        <ListItem key={key} onClick={() => setChecked(key)}>\\n          {key}\\n          <ListItemMeta>\\n            <Radio checked={checked === key} readOnly />\\n          </ListItemMeta>\\n        </ListItem>\\n      ))}\\n    </List>\\n  );\\n}"]')}}]);
//# sourceMappingURL=8.bf4577f1.chunk.js.map