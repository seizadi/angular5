# angular5
Test Application with Angular5

## Setup
### Updating NodeJS:

[Go to nodejs.org and download the latest version](https://nodejs.org/en/download/) - uninstall (all) installed versions on your machine first.

### Updating npm:
```bash
   sudo npm install -g npm
```

### Updating the CLI

```bash
  sudo npm uninstall -g angular-cli @angular/cli 

  npm cache clean 

  sudo npm install -g @angular/cli
```

### Troubles
#### Couldn't install angular CLI :(
```bash
$ sudo npm install -g @angular/cli
/usr/local/bin/ng -> /usr/local/lib/node_modules/@angular/cli/bin/ng

> fsevents@1.1.3 install /usr/local/lib/node_modules/@angular/cli/node_modules/fsevents
> node install

sh: node: command not found

> node-sass@4.7.2 install /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass
> node scripts/install.js

sh: node: command not found

> uglifyjs-webpack-plugin@0.4.6 postinstall /usr/local/lib/node_modules/@angular/cli/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
> node lib/post_install.js

```
To fix this I forced install:
```bash
sc-l-seizadi:~ seizadi$ sudo npm install -g @angular/cli --force
npm WARN using --force I sure hope you know what you are doing.
...
+ @angular/cli@1.6.3
added 996 packages in 18.517s
```
Then I installed the packages that did not install properly manually:
```bash
  %  cd /usr/local/lib/node_modules/@angular/cli/node_modules/fsevents/
  %  sudo node install
  %  cd /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass/
  %  sudo node scripts/install.js
  %  cd /usr/local/lib/node_modules/@angular/cli/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
  %  sudo node lib/post_install.js
  %  cd /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass
  %  sudo node scripts/build.js
```
I reran the install to make sure it was happy:
```bash
sc-l-seizadi:~ seizadi$ sudo npm install -g @angular/cli
Password:
/usr/local/bin/ng -> /usr/local/lib/node_modules/@angular/cli/bin/ng
+ @angular/cli@1.6.3
updated 1 package in 42.811s
```

