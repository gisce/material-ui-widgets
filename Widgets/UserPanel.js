'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
  };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
  }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('../Menu');
var _menu2 = _interopRequireDefault(_menu);

var _menuItem = require('../MenuItem');
var _menuItem2 = _interopRequireDefault(_menuItem);

var _divider = require('../Divider');
var _divider2 = _interopRequireDefault(_divider);

var _subheader = require('../Subheader');
var _subheader2 = _interopRequireDefault(_subheader);

var _popOver = require('../Popover/Popover');
var _popOver2 = _interopRequireDefault(_popOver);

var _flatButton = require('../FlatButton');
var _flatButton2 = _interopRequireDefault(_flatButton);

var _listItem = require('../List/ListItem');
var _listItem2 = _interopRequireDefault(_listItem);

var _avatar = require('../Avatar');
var _avatar2 = _interopRequireDefault(_avatar);

var _iconButton = require('../IconButton');
var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function getStyles(props, context) {
    var primary = props.primary;
    var secondary = props.secondary;
    var badge = context.muiTheme.badge;


    var badgeBackgroundColor = void 0;
    var badgeTextColor = void 0;

    if (primary) {
        badgeBackgroundColor = badge.primaryColor;
        badgeTextColor = badge.primaryTextColor;
    } else if (secondary) {
        badgeBackgroundColor = badge.secondaryColor;
        badgeTextColor = badge.secondaryTextColor;
    } else {
        badgeBackgroundColor = badge.color;
        badgeTextColor = badge.textColor;
    }

    var radius = 8;
    var radius2x = Math.floor(2 * radius);

    return {
        root: {
            position: 'relative',
            display: 'inline-block',
            padding: radius2x + 'px ' + radius2x + 'px ' + radius + 'px ' + radius + 'px'
        },
        badge: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
            fontWeight: badge.fontWeight,
            fontSize: radius,
            width: radius2x,
            height: radius2x,
            borderRadius: '50%',
            backgroundColor: badgeBackgroundColor,
            color: badgeTextColor
        },
        notification: {
            color: 'red',
            fontSize: 20,
        }
    };
}

var UserPanel = function (_React$Component) {
    _inherits(UserPanel, _React$Component);

    function UserPanel() {
        _classCallCheck(this, UserPanel);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UserPanel).apply(this, arguments));
    }

    _createClass(UserPanel, [
        {
            key: 'componentWillMount',
            value: function componentWillMount() {
                var randomKey = Math.floor(Math.random() * 100);

                this.setState({
                    open: this.props.open,
                    count: this.props.notificationsList.length,
                    notifications: this.props.notificationsList,
                    badgeColor: this.props.badgeColor,
                    textColor: this.props.textColor,
                    key: randomKey
                });
            }
        },


        {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var style = _props.style;
                var children = _props.children;

                var notificationsList = this.state.notifications;

                ////////////////////////////////////////////////////////////////
                // Prepare floating div element with all entries to notify
                ////////////////////////////////////////////////////////////////



                var name = "Xavi Torelló";

                //name[0]

                var avatar = _react2.default.createElement(
                    _avatar2.default,
                    {
                        src: "http://xaviertorello.cat/img/projects/me.png",
                        style: {
                            marginLeft: 20,
                        },
                    }

                );

                var listItem =  _react2.default.createElement(
                    _flatButton2.default,
                    {
                        icon: avatar,
                        label: name
                    }
                );

                return avatar;



                return listItem;

                var textType = _props.tooltip.toLowerCase();

                //A title with the count and the element type
                var menu_entries = [];
                menu_entries.push(
                    _react2.default.createElement(
                        _subheader2.default,
                        {
                          key: this.state.key + "header"
                        },
                        "Té " + this.state.count + " " + textType
                    )
                );

                //A separator between title and entries
                menu_entries.push(
                    _react2.default.createElement(
                        _divider.default,
                        { key: this.state.key + "separator"}
                    )
                );

                //The elements to notify using the subject key
                this.state.notifications.forEach(function (notification, index) {
                    var entry = _react2.default.createElement(
                        _menuItem2.default,
                        { key: _props.tooltip + index },
                        notification.subject
                    );
                    menu_entries.push(entry);
                });

                //Composing the menu
                var menu = _react2.default.createElement(
                    _menu2.default,
                    {},
                    menu_entries
                );

                //When touching the badge -> show the floating div
                var handleTouchTap = function (event) {
                    this.setState({
                        open: true,
                        anchorEl: event.currentTarget,
                        anchorOrigin: {horizontal: 'left', vertical: 'bottom'},
                        targetOrigin: {horizontal: 'left', vertical: 'top'},
                    });
                }.bind(this);

                //When out -> close the div
                var handleNotifClose = function () {
                    this.setState({
                        open: false,
                    })
                }.bind(this);

                //The floating div
                var popover = _react2.default.createElement(
                    _popOver2.default,
                    {
                        open: this.state.open,
                        onRequestClose: handleNotifClose,
                        anchorEl: this.state.anchorEl,
                        anchorOrigin: this.state.anchorOrigin,
                        targetOrigin: this.state.targetOrigin,
                    },
                    menu
                );

                //The icon inside the badge
                var icon = _react2.default.createElement(
                    _iconButton2.default,
                    {
                        tooltip: _props.tooltip,
                        onTouchTap: handleTouchTap
                    },
                    _props.icon
                );

                //The badge
                var badge = _react2.default.createElement(
                    _badge2.default,
                    {
                        badgeContent: this.state.count,
                        primary: true,
                        badgeStyle: {
                            backgroundColor: this.state.badgeColor,
                            color: this.state.textColor,
                        },
                        style: {padding: 0},
                    },
                    icon
                );

                //Returning the UserPanel widget!
                return _react2.default.createElement(
                    'span',
                    {},
                    badge,
                    popover
                );


                var badgeStyle = _props.badgeStyle;

                var other = _objectWithoutProperties(_props, ['style', 'children', 'badgeContent', 'badgeStyle']);

                var prepareStyles = this.context.muiTheme.prepareStyles;

                var styles = getStyles(this.props, this.context);

                return _react2.default.createElement(
                    'div',
                    _extends({}, other, {style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style))}),
                    children,
                    _react2.default.createElement(
                        'span',
                        {style: prepareStyles((0, _simpleAssign2.default)({}, styles.notification, badgeStyle))},
                        menu
                  )
                );
            }
      }]);

    return UserPanel;
}(_react2.default.Component);

UserPanel.propTypes = {
    /**
     * This is the content rendered within the badge.
     */

    notificationsList: _react2.default.PropTypes.array.isRequired,

    tooltip: _react2.default.PropTypes.string,

    textColor: _react2.default.PropTypes.node,

    badgeColor: _react2.default.PropTypes.node,

    icon: _react2.default.PropTypes.object.isRequired,

    /**
     * Override the inline-styles of the badge element.
     */

    /**
     * The badge will be added relativelty to this node.
     */
    children: _react2.default.PropTypes.node,

    /**
     * The css class name of the root element.
     */
    className: _react2.default.PropTypes.string,

    /**
     * If true, the badge will use the primary badge colors.
     */
    primary: _react2.default.PropTypes.bool,

    /**
     * If true, the badge will use the secondary badge colors.
     */
    secondary: _react2.default.PropTypes.bool,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object
};

UserPanel.defaultProps = {
    open: false,
    badgeColor: 'blue',
    textColor: 'white',
};

UserPanel.contextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};

exports.default = UserPanel;
