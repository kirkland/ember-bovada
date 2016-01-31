# Setup

## Install NVM

Copy and paste this:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
```

Or follow the manual instructions on the project page:

https://github.com/creationix/nvm

NVM (Node Version Manager) settings are stored in .nvmrc. However, unlike Ruby Version Manager, NVM
will not automatically switch to the correct Node version when switching in to the project
directory. When working on this project, unless your default Node version is the same as the one
used here, you will need to run `nvm install`, which will install (if necessary) and switch to the
correct version of Node.

Now run:

```
nvm install
```

Very that you now have Node 5.5.0 installed by running:

```
node -v
```

## Install Bower

Bower is a package manager for client-side dependencies (e.g. jQuery, Underscore.js).

```
npm install -g bower
```

## Install dependencies

* `npm install`
* `bower install`

## Install Ember CLI

* TODO: Is this really a necessary separate step?

## Install PhantomJS
* [PhantomJS](http://phantomjs.org/)

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* N/A, so far
