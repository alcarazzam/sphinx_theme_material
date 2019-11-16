.. Sphinx Material theme documentation master file, created by
   sphinx-quickstart on Sun Jul 14 13:16:56 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Sphinx Material theme
=====================

+-----------------------------------------------------------------+---------------------------------------------------------------------+
| .. image:: https://img.shields.io/pypi/v/sphinx-theme-material  | .. image:: https://img.shields.io/pypi/status/sphinx-theme-material |
|    :alt: PyPI                                                   |    :alt: PyPI                                                       |
|    :align: left                                                 |    :align: left                                                     |
+-----------------------------------------------------------------+---------------------------------------------------------------------+

This is a material based sphinx theme. To use, first install the package::

    pip3 install -U sphinx-theme-material

Then, in your ``conf.py`` file, change the ``html_theme`` variable to::

    html_theme = 'material'

And re-build your doc. Enjoy!

Features
--------
- Dark theme
- Responsive layout. Mobile friendly.
- Google Analytics support with IP anonymize


Theme variables
---------------
- ``theme_primary``: The primary color for the theme. Default to ``#6200ee``
- ``theme_secondary``: The secondary color for the theme. Default to ``#018786``
- ``analytics_id``: The Google Analytics ID

Contribute
----------
This project in under development. If you have ideas or suggestions, please open
a issue or send a pull request. Contributions are welcome!


.. toctree::
   :maxdepth: 2
   :caption: Contents:

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
