!#/bin/bash

# Move your node modules to your home folder
# If that folder already exists just move the contents of the node folder to $HOME/node_modules 
# and delete /usr/lib/node_modules.
sudo mv /usr/lib/node_modules $HOME


# Now create a symlink to your lib folder
sudo ln -s $HOME/node_modules /usr/lib/node_modules

# Finally change the ownership back to your user name
sudo chown -R duncan:staff $HOME/node_modules
