from os import path

__version__ = "1.1.1"


def update_context(app, pagename, templatename, context, doctree):
    context["material_theme_version"] = __version__


def setup(app):
    app.connect("html-page-context", update_context)
    app.add_html_theme("material", path.abspath(path.dirname(__file__)))
