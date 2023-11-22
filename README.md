# **Version 2.0 (Latest)**

The Custom Modal Now Support Custom Alerts.
Instead of using native confirm alerts from JS now you can use beautifully animated custom confirm alerts

DEPENDENCIES
--
Bootstrap 5.0+

USAGE
--

```
showCustomConfirm(msg,result);
```

DOCUMENTATION
--

| Example                                               | Explanation                                                                             |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------|
| ```msg```                                             | Insert your message here                                                                |
| ```result```                                          | catch the result of the user confirmation (callback function)                           |


# **Version 1.0**

CUSTOM MODAL ALERTS FOR BOOTSTRAP 5
--
Originally created as a side project for BIT Final Project. The Custom Modal Alert can be attached to any webpage element to show modern model with beautiful animated GIFs

DEPENDENCIES
--
Bootstrap 5.0+

USAGE
--

```
showCustomModal(msg,variant);
```

DOCUMENTATION
--

| Example                                               | Explanation                                                                             |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------|
| ```msg```                                             | Insert your message here                                                                |
| ```variant```                                         | Either can be success, error, warning or info                                           |
| ```showCustomModal("Hello","info")```                 | This will display info variant of the modal with the text with **Hello**                |
| ```showCustomModal("This is an Error!","error")```    | This will display error variant of the modal with the text with **This is an Error**    |
| ```showCustomModal("This is a Warning!","warning")``` | This will display warning variant of the modal with the text with **This is a Warning** |
| ```showCustomModal("This is a Success!","success")``` | This will display success variant of the modal with the text with **This is a Success** |