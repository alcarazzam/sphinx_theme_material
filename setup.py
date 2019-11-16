import setuptools

from sphinx_theme_material import __version__

with open('README.md', 'r') as fh:
    long_description = fh.read()

setuptools.setup(
    name="sphinx_theme_material",
    description="A material based sphinx theme",
    long_description=long_description,
    long_description_content_type="text/markdown",
    version=__version__,
    url="https://github.com/m-alzam/sphinx_theme_material",
    author="Manuel Alcaraz Zambrano",
    license="GPLv3+",
    keywords="sphinx theme",
    entry_points={
        'sphinx.html_themes': [
            'material = sphinx_theme_material',
        ]
    },
    package_data={"": ["*.conf", "*.html", "static/*.css", "static/*.js"]},
    packages=setuptools.find_packages(),
    classifiers=[
        "Development Status :: 4 - Beta",
        "Framework :: Sphinx",
        "Framework :: Sphinx :: Theme",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: GNU General Public License v3 or later (GPLv3+)",
        "Operating System :: OS Independent",
        "Topic :: Internet",
        "Topic :: Software Development :: Documentation"]
)
