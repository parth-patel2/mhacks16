"""
Insta485 index (main) view.

URLs include:
/
"""
import flask
import roadtrip_ai


@roadtrip_ai.app.route('/')
def show_index():
    """Display / route."""
    context = {}
    return flask.render_template("index.html", **context)

