/*
  Copyright 2014 The Lovefield Project Authors. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var window;
if(!window){
    window=this;
}
(function(){'use strict';var $jscomp = {scope:{}}, COMPILED = !0, goog = goog || {};
goog.global = this;
goog.global.Promise = Promise;
goog.isDef = function $goog$isDef$($val$$) {
  return void 0 !== $val$$;
};
goog.exportPath_ = function $goog$exportPath_$($name$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$$ = $name$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || goog.global;
  $name$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$$[0]);
  for (var $part$$;$name$$.length && ($part$$ = $name$$.shift());) {
    !$name$$.length && goog.isDef($opt_object$$) ? $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$ : $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {};
  }
};
goog.define = function $goog$define$($name$$, $defaultValue$$) {
  var $value$$ = $defaultValue$$;
  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, $name$$) ? $value$$ = goog.global.CLOSURE_UNCOMPILED_DEFINES[$name$$] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, $name$$) && ($value$$ = goog.global.CLOSURE_DEFINES[$name$$]));
  goog.exportPath_($name$$, $value$$);
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.STRICT_MODE_COMPATIBLE = !1;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function $goog$provide$($name$$) {
  if (!COMPILED && goog.isProvided_($name$$)) {
    throw Error('Namespace "' + $name$$ + '" already declared.');
  }
  goog.constructNamespace_($name$$);
};
goog.constructNamespace_ = function $goog$constructNamespace_$($name$$, $opt_obj$$) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[$name$$];
    for (var $namespace$$ = $name$$;($namespace$$ = $namespace$$.substring(0, $namespace$$.lastIndexOf("."))) && !goog.getObjectByName($namespace$$);) {
      goog.implicitNamespaces_[$namespace$$] = !0;
    }
  }
  goog.exportPath_($name$$, $opt_obj$$);
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function $goog$module$($name$$) {
  if (!goog.isString($name$$) || !$name$$ || -1 == $name$$.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInModuleLoader_()) {
    throw Error("Module " + $name$$ + " has been loaded incorrectly.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = $name$$;
  if (!COMPILED) {
    if (goog.isProvided_($name$$)) {
      throw Error('Namespace "' + $name$$ + '" already declared.');
    }
    delete goog.implicitNamespaces_[$name$$];
  }
};
goog.module.get = function $goog$module$get$($name$$) {
  return goog.module.getInternal_($name$$);
};
goog.module.getInternal_ = function $goog$module$getInternal_$($name$$) {
  if (!COMPILED) {
    return goog.isProvided_($name$$) ? $name$$ in goog.loadedModules_ ? goog.loadedModules_[$name$$] : goog.getObjectByName($name$$) : null;
  }
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function $goog$isInModuleLoader_$() {
  return null != goog.moduleLoaderState_;
};
goog.module.declareLegacyNamespace = function $goog$module$declareLegacyNamespace$() {
  if (!COMPILED && !goog.isInModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.setTestOnly = function $goog$setTestOnly$($opt_message$$) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw $opt_message$$ = $opt_message$$ || "", Error("Importing test-only code into non-debug environment" + ($opt_message$$ ? ": " + $opt_message$$ : "."));
  }
};
goog.forwardDeclare = function $goog$forwardDeclare$($name$$) {
};
COMPILED || (goog.isProvided_ = function $goog$isProvided_$($name$$) {
  return $name$$ in goog.loadedModules_ || !goog.implicitNamespaces_[$name$$] && goog.isDefAndNotNull(goog.getObjectByName($name$$));
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function $goog$getObjectByName$($name$$, $opt_obj$$) {
  for (var $parts$$ = $name$$.split("."), $cur$$ = $opt_obj$$ || goog.global, $part$$;$part$$ = $parts$$.shift();) {
    if (goog.isDefAndNotNull($cur$$[$part$$])) {
      $cur$$ = $cur$$[$part$$];
    } else {
      return null;
    }
  }
  return $cur$$;
};
goog.globalize = function $goog$globalize$($obj$$, $opt_global$$) {
  var $global$$ = $opt_global$$ || goog.global, $x$$;
  for ($x$$ in $obj$$) {
    $global$$[$x$$] = $obj$$[$x$$];
  }
};
goog.addDependency = function $goog$addDependency$($path$$, $provides_require$$, $requires$$, $j_opt_isModule$$) {
  if (goog.DEPENDENCIES_ENABLED) {
    var $provide$$;
    $path$$ = $path$$.replace(/\\/g, "/");
    for (var $deps$$ = goog.dependencies_, $i$$ = 0;$provide$$ = $provides_require$$[$i$$];$i$$++) {
      $deps$$.nameToPath[$provide$$] = $path$$, $deps$$.pathIsModule[$path$$] = !!$j_opt_isModule$$;
    }
    for ($j_opt_isModule$$ = 0;$provides_require$$ = $requires$$[$j_opt_isModule$$];$j_opt_isModule$$++) {
      $path$$ in $deps$$.requires || ($deps$$.requires[$path$$] = {}), $deps$$.requires[$path$$][$provides_require$$] = !0;
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function $goog$logToConsole_$($msg$$) {
  goog.global.console && goog.global.console.error($msg$$);
};
goog.require = function $goog$require$($errorMessage_name$$) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_($errorMessage_name$$);
    if (goog.isProvided_($errorMessage_name$$)) {
      return goog.isInModuleLoader_() ? goog.module.getInternal_($errorMessage_name$$) : null;
    }
    if (goog.ENABLE_DEBUG_LOADER) {
      var $path$$ = goog.getPathFromDeps_($errorMessage_name$$);
      if ($path$$) {
        return goog.writeScripts_($path$$), null;
      }
    }
    $errorMessage_name$$ = "goog.require could not find: " + $errorMessage_name$$;
    goog.logToConsole_($errorMessage_name$$);
    throw Error($errorMessage_name$$);
  }
};
goog.basePath = "";
goog.nullFunction = function $goog$nullFunction$() {
};
goog.abstractMethod = function $goog$abstractMethod$() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function $goog$addSingletonGetter$($ctor$$) {
  $ctor$$.getInstance = function $$ctor$$$getInstance$() {
    if ($ctor$$.instance_) {
      return $ctor$$.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = $ctor$$);
    return $ctor$$.instance_ = new $ctor$$;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {pathIsModule:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}}, goog.inHtmlDocument_ = function $goog$inHtmlDocument_$() {
  var $doc$$ = goog.global.document;
  return null != $doc$$ && "write" in $doc$$;
}, goog.findBasePath_ = function $goog$findBasePath_$() {
  if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      for (var $scripts$$ = goog.global.document.getElementsByTagName("SCRIPT"), $i$$ = $scripts$$.length - 1;0 <= $i$$;--$i$$) {
        var $src$$ = $scripts$$[$i$$].src, $l_qmark$$ = $src$$.lastIndexOf("?"), $l_qmark$$ = -1 == $l_qmark$$ ? $src$$.length : $l_qmark$$;
        if ("base.js" == $src$$.substr($l_qmark$$ - 7, 7)) {
          goog.basePath = $src$$.substr(0, $l_qmark$$ - 7);
          break;
        }
      }
    }
  }
}, goog.importScript_ = function $goog$importScript_$($src$$, $opt_sourceText$$) {
  (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)($src$$, $opt_sourceText$$) && (goog.dependencies_.written[$src$$] = !0);
}, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.importModule_ = function $goog$importModule_$($src$$) {
  goog.importScript_("", 'goog.retrieveAndExecModule_("' + $src$$ + '");') && (goog.dependencies_.written[$src$$] = !0);
}, goog.queuedModules_ = [], goog.wrapModule_ = function $goog$wrapModule_$($srcUrl$$, $scriptText$$) {
  return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify($scriptText$$ + "\n//# sourceURL=" + $srcUrl$$ + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + $scriptText$$ + "\n;return exports});\n//# sourceURL=" + $srcUrl$$ + "\n";
}, goog.loadQueuedModules_ = function $goog$loadQueuedModules_$() {
  var $count$$ = goog.queuedModules_.length;
  if (0 < $count$$) {
    var $queue$$ = goog.queuedModules_;
    goog.queuedModules_ = [];
    for (var $i$$ = 0;$i$$ < $count$$;$i$$++) {
      goog.maybeProcessDeferredPath_($queue$$[$i$$]);
    }
  }
}, goog.maybeProcessDeferredDep_ = function $goog$maybeProcessDeferredDep_$($name$$64_path$$) {
  goog.isDeferredModule_($name$$64_path$$) && goog.allDepsAreAvailable_($name$$64_path$$) && ($name$$64_path$$ = goog.getPathFromDeps_($name$$64_path$$), goog.maybeProcessDeferredPath_(goog.basePath + $name$$64_path$$));
}, goog.isDeferredModule_ = function $goog$isDeferredModule_$($name$$65_path$$) {
  return ($name$$65_path$$ = goog.getPathFromDeps_($name$$65_path$$)) && goog.dependencies_.pathIsModule[$name$$65_path$$] ? goog.basePath + $name$$65_path$$ in goog.dependencies_.deferred : !1;
}, goog.allDepsAreAvailable_ = function $goog$allDepsAreAvailable_$($name$$66_path$$) {
  if (($name$$66_path$$ = goog.getPathFromDeps_($name$$66_path$$)) && $name$$66_path$$ in goog.dependencies_.requires) {
    for (var $requireName$$ in goog.dependencies_.requires[$name$$66_path$$]) {
      if (!goog.isProvided_($requireName$$) && !goog.isDeferredModule_($requireName$$)) {
        return !1;
      }
    }
  }
  return !0;
}, goog.maybeProcessDeferredPath_ = function $goog$maybeProcessDeferredPath_$($abspath$$) {
  if ($abspath$$ in goog.dependencies_.deferred) {
    var $src$$ = goog.dependencies_.deferred[$abspath$$];
    delete goog.dependencies_.deferred[$abspath$$];
    goog.globalEval($src$$);
  }
}, goog.loadModuleFromUrl = function $goog$loadModuleFromUrl$($url$$) {
  goog.retrieveAndExecModule_($url$$);
}, goog.loadModule = function $goog$loadModule$($moduleDef$$) {
  var $previousState$$ = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:void 0, declareLegacyNamespace:!1};
    var $exports$$;
    if (goog.isFunction($moduleDef$$)) {
      $exports$$ = $moduleDef$$.call(goog.global, {});
    } else {
      if (goog.isString($moduleDef$$)) {
        $exports$$ = goog.loadModuleFromSource_.call(goog.global, $moduleDef$$);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var $moduleName$$ = goog.moduleLoaderState_.moduleName;
    if (!goog.isString($moduleName$$) || !$moduleName$$) {
      throw Error('Invalid module name "' + $moduleName$$ + '"');
    }
    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_($moduleName$$, $exports$$) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal($exports$$);
    goog.loadedModules_[$moduleName$$] = $exports$$;
  } finally {
    goog.moduleLoaderState_ = $previousState$$;
  }
}, goog.loadModuleFromSource_ = function $goog$loadModuleFromSource_$($JSCompiler_OptimizeArgumentsArray_p0$$) {
  eval($JSCompiler_OptimizeArgumentsArray_p0$$);
  return {};
}, goog.writeScriptSrcNode_ = function $goog$writeScriptSrcNode_$($src$$) {
  goog.global.document.write('<script type="text/javascript" src="' + $src$$ + '">\x3c/script>');
}, goog.appendScriptSrcNode_ = function $goog$appendScriptSrcNode_$($src$$) {
  var $doc$$ = goog.global.document, $scriptEl$$ = $doc$$.createElement("script");
  $scriptEl$$.type = "text/javascript";
  $scriptEl$$.src = $src$$;
  $scriptEl$$.defer = !1;
  $scriptEl$$.async = !1;
  $doc$$.head.appendChild($scriptEl$$);
}, goog.writeScriptTag_ = function $goog$writeScriptTag_$($src$$, $opt_sourceText$$) {
  if (goog.inHtmlDocument_()) {
    var $doc$$ = goog.global.document;
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == $doc$$.readyState) {
      if (/\bdeps.js$/.test($src$$)) {
        return !1;
      }
      throw Error('Cannot write "' + $src$$ + '" after document load');
    }
    var $isOldIE_state$$ = goog.IS_OLD_IE_;
    void 0 === $opt_sourceText$$ ? $isOldIE_state$$ ? ($isOldIE_state$$ = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", $doc$$.write('<script type="text/javascript" src="' + $src$$ + '"' + $isOldIE_state$$ + ">\x3c/script>")) : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_($src$$) : goog.writeScriptSrcNode_($src$$) : $doc$$.write('<script type="text/javascript">' + $opt_sourceText$$ + "\x3c/script>");
    return !0;
  }
  return !1;
}, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function $goog$onScriptLoad_$($script$$, $scriptIndex$$) {
  "complete" == $script$$.readyState && goog.lastNonModuleScriptIndex_ == $scriptIndex$$ && goog.loadQueuedModules_();
  return !0;
}, goog.writeScripts_ = function $goog$writeScripts_$($i$$) {
  function $visitNode$$($path$$) {
    if (!($path$$ in $deps$$.written || $path$$ in $deps$$.visited)) {
      $deps$$.visited[$path$$] = !0;
      if ($path$$ in $deps$$.requires) {
        for (var $requireName$$ in $deps$$.requires[$path$$]) {
          if (!goog.isProvided_($requireName$$)) {
            if ($requireName$$ in $deps$$.nameToPath) {
              $visitNode$$($deps$$.nameToPath[$requireName$$]);
            } else {
              throw Error("Undefined nameToPath for " + $requireName$$);
            }
          }
        }
      }
      $path$$ in $seenScript$$ || ($seenScript$$[$path$$] = !0, $scripts$$.push($path$$));
    }
  }
  var $scripts$$ = [], $seenScript$$ = {}, $deps$$ = goog.dependencies_;
  $visitNode$$($i$$);
  for ($i$$ = 0;$i$$ < $scripts$$.length;$i$$++) {
    var $path$$0$$ = $scripts$$[$i$$];
    goog.dependencies_.written[$path$$0$$] = !0;
  }
  var $moduleState$$ = goog.moduleLoaderState_;
  goog.moduleLoaderState_ = null;
  for ($i$$ = 0;$i$$ < $scripts$$.length;$i$$++) {
    if ($path$$0$$ = $scripts$$[$i$$]) {
      $deps$$.pathIsModule[$path$$0$$] ? goog.importModule_(goog.basePath + $path$$0$$) : goog.importScript_(goog.basePath + $path$$0$$);
    } else {
      throw goog.moduleLoaderState_ = $moduleState$$, Error("Undefined script input");
    }
  }
  goog.moduleLoaderState_ = $moduleState$$;
}, goog.getPathFromDeps_ = function $goog$getPathFromDeps_$($rule$$) {
  return $rule$$ in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[$rule$$] : null;
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.normalizePath_ = function $goog$normalizePath_$($components_path$$) {
  $components_path$$ = $components_path$$.split("/");
  for (var $i$$ = 0;$i$$ < $components_path$$.length;) {
    "." == $components_path$$[$i$$] ? $components_path$$.splice($i$$, 1) : $i$$ && ".." == $components_path$$[$i$$] && $components_path$$[$i$$ - 1] && ".." != $components_path$$[$i$$ - 1] ? $components_path$$.splice(--$i$$, 2) : $i$$++;
  }
  return $components_path$$.join("/");
};
goog.loadFileSync_ = function $goog$loadFileSync_$($src$$) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC($src$$);
  }
  var $xhr$$ = new goog.global.XMLHttpRequest;
  $xhr$$.open("get", $src$$, !1);
  $xhr$$.send();
  return $xhr$$.responseText;
};
goog.retrieveAndExecModule_ = function $goog$retrieveAndExecModule_$($src$$) {
  if (!COMPILED) {
    var $originalPath$$ = $src$$;
    $src$$ = goog.normalizePath_($src$$);
    var $importScript$$ = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, $execModuleScript_scriptText$$ = goog.loadFileSync_($src$$);
    if (null != $execModuleScript_scriptText$$) {
      $execModuleScript_scriptText$$ = goog.wrapModule_($src$$, $execModuleScript_scriptText$$), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[$originalPath$$] = $execModuleScript_scriptText$$, goog.queuedModules_.push($originalPath$$)) : $importScript$$($src$$, $execModuleScript_scriptText$$);
    } else {
      throw Error("load of " + $src$$ + "failed");
    }
  }
};
goog.typeOf = function $goog$typeOf$($value$$) {
  var $s$$ = typeof $value$$;
  if ("object" == $s$$) {
    if ($value$$) {
      if ($value$$ instanceof Array) {
        return "array";
      }
      if ($value$$ instanceof Object) {
        return $s$$;
      }
      var $className$$ = Object.prototype.toString.call($value$$);
      if ("[object Window]" == $className$$) {
        return "object";
      }
      if ("[object Array]" == $className$$ || "number" == typeof $value$$.length && "undefined" != typeof $value$$.splice && "undefined" != typeof $value$$.propertyIsEnumerable && !$value$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$ || "undefined" != typeof $value$$.call && "undefined" != typeof $value$$.propertyIsEnumerable && !$value$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$$ && "undefined" == typeof $value$$.call) {
      return "object";
    }
  }
  return $s$$;
};
goog.isNull = function $goog$isNull$($val$$) {
  return null === $val$$;
};
goog.isDefAndNotNull = function $goog$isDefAndNotNull$($val$$) {
  return null != $val$$;
};
goog.isArray = function $goog$isArray$($val$$) {
  return "array" == goog.typeOf($val$$);
};
goog.isArrayLike = function $goog$isArrayLike$($val$$) {
  var $type$$ = goog.typeOf($val$$);
  return "array" == $type$$ || "object" == $type$$ && "number" == typeof $val$$.length;
};
goog.isDateLike = function $goog$isDateLike$($val$$) {
  return goog.isObject($val$$) && "function" == typeof $val$$.getFullYear;
};
goog.isString = function $goog$isString$($val$$) {
  return "string" == typeof $val$$;
};
goog.isBoolean = function $goog$isBoolean$($val$$) {
  return "boolean" == typeof $val$$;
};
goog.isNumber = function $goog$isNumber$($val$$) {
  return "number" == typeof $val$$;
};
goog.isFunction = function $goog$isFunction$($val$$) {
  return "function" == goog.typeOf($val$$);
};
goog.isObject = function $goog$isObject$($val$$) {
  var $type$$ = typeof $val$$;
  return "object" == $type$$ && null != $val$$ || "function" == $type$$;
};
goog.getUid = function $goog$getUid$($obj$$) {
  return $obj$$[goog.UID_PROPERTY_] || ($obj$$[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function $goog$hasUid$($obj$$) {
  return !!$obj$$[goog.UID_PROPERTY_];
};
goog.removeUid = function $goog$removeUid$($obj$$) {
  "removeAttribute" in $obj$$ && $obj$$.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete $obj$$[goog.UID_PROPERTY_];
  } catch ($ex$$) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function $goog$cloneObject$($obj$$) {
  var $clone_type$$ = goog.typeOf($obj$$);
  if ("object" == $clone_type$$ || "array" == $clone_type$$) {
    if ($obj$$.clone) {
      return $obj$$.clone();
    }
    var $clone_type$$ = "array" == $clone_type$$ ? [] : {}, $key$$;
    for ($key$$ in $obj$$) {
      $clone_type$$[$key$$] = goog.cloneObject($obj$$[$key$$]);
    }
    return $clone_type$$;
  }
  return $obj$$;
};
goog.bindNative_ = function $goog$bindNative_$($fn$$, $selfObj$$, $var_args$$) {
  return $fn$$.call.apply($fn$$.bind, arguments);
};
goog.bindJs_ = function $goog$bindJs_$($fn$$, $selfObj$$, $var_args$$) {
  if (!$fn$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$.apply($selfObj$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$$.apply($selfObj$$, arguments);
  };
};
goog.bind = function $goog$bind$($fn$$, $selfObj$$, $var_args$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function $goog$partial$($fn$$, $var_args$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$ = $args$$.slice();
    $newArgs$$.push.apply($newArgs$$, arguments);
    return $fn$$.apply(this, $newArgs$$);
  };
};
goog.mixin = function $goog$mixin$($target$$, $source$$) {
  for (var $x$$ in $source$$) {
    $target$$[$x$$] = $source$$[$x$$];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function $goog$globalEval$($script$$) {
  if (goog.global.execScript) {
    goog.global.execScript($script$$, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (null == goog.evalWorksForGlobals_) {
        if (goog.global.eval("var _evalTest_ = 1;"), "undefined" != typeof goog.global._evalTest_) {
          try {
            delete goog.global._evalTest_;
          } catch ($ignore$$) {
          }
          goog.evalWorksForGlobals_ = !0;
        } else {
          goog.evalWorksForGlobals_ = !1;
        }
      }
      if (goog.evalWorksForGlobals_) {
        goog.global.eval($script$$);
      } else {
        var $doc$$ = goog.global.document, $scriptElt$$ = $doc$$.createElement("SCRIPT");
        $scriptElt$$.type = "text/javascript";
        $scriptElt$$.defer = !1;
        $scriptElt$$.appendChild($doc$$.createTextNode($script$$));
        $doc$$.body.appendChild($scriptElt$$);
        $doc$$.body.removeChild($scriptElt$$);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function $goog$getCssName$($className$$, $opt_modifier$$) {
  var $getMapping$$ = function $$getMapping$$$($cssName$$) {
    return goog.cssNameMapping_[$cssName$$] || $cssName$$;
  }, $rename_renameByParts$$ = function $$rename_renameByParts$$$($cssName$$1_parts$$) {
    $cssName$$1_parts$$ = $cssName$$1_parts$$.split("-");
    for (var $mapped$$ = [], $i$$ = 0;$i$$ < $cssName$$1_parts$$.length;$i$$++) {
      $mapped$$.push($getMapping$$($cssName$$1_parts$$[$i$$]));
    }
    return $mapped$$.join("-");
  }, $rename_renameByParts$$ = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? $getMapping$$ : $rename_renameByParts$$ : function($a$$) {
    return $a$$;
  };
  return $opt_modifier$$ ? $className$$ + "-" + $rename_renameByParts$$($opt_modifier$$) : $rename_renameByParts$$($className$$);
};
goog.setCssNameMapping = function $goog$setCssNameMapping$($mapping$$, $opt_style$$) {
  goog.cssNameMapping_ = $mapping$$;
  goog.cssNameMappingStyle_ = $opt_style$$;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function $goog$getMsg$($str$$, $opt_values$$) {
  $opt_values$$ && ($str$$ = $str$$.replace(/\{\$([^}]+)}/g, function($match$$, $key$$) {
    return null != $opt_values$$ && $key$$ in $opt_values$$ ? $opt_values$$[$key$$] : $match$$;
  }));
  return $str$$;
};
goog.getMsgWithFallback = function $goog$getMsgWithFallback$($a$$, $b$$) {
  return $a$$;
};
goog.exportSymbol = function $goog$exportSymbol$($publicPath$$, $object$$, $opt_objectToExportTo$$) {
  goog.exportPath_($publicPath$$, $object$$, $opt_objectToExportTo$$);
};
goog.exportProperty = function $goog$exportProperty$($object$$, $publicName$$, $symbol$$) {
  $object$$[$publicName$$] = $symbol$$;
};
goog.inherits = function $goog$inherits$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.superClass_ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  $childCtor$$.base = function $$childCtor$$$base$($me$$, $methodName$$, $var_args$$) {
    for (var $args$$ = Array(arguments.length - 2), $i$$ = 2;$i$$ < arguments.length;$i$$++) {
      $args$$[$i$$ - 2] = arguments[$i$$];
    }
    return $parentCtor$$.prototype[$methodName$$].apply($me$$, $args$$);
  };
};
goog.base = function $goog$base$($me$$, $opt_methodName$$, $var_args$$) {
  var $caller$$ = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !$caller$$) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if ($caller$$.superClass_) {
    for (var $args$$ = Array(arguments.length - 1), $foundCaller_i$$ = 1;$foundCaller_i$$ < arguments.length;$foundCaller_i$$++) {
      $args$$[$foundCaller_i$$ - 1] = arguments[$foundCaller_i$$];
    }
    return $caller$$.superClass_.constructor.apply($me$$, $args$$);
  }
  $args$$ = Array(arguments.length - 2);
  for ($foundCaller_i$$ = 2;$foundCaller_i$$ < arguments.length;$foundCaller_i$$++) {
    $args$$[$foundCaller_i$$ - 2] = arguments[$foundCaller_i$$];
  }
  for (var $foundCaller_i$$ = !1, $ctor$$ = $me$$.constructor;$ctor$$;$ctor$$ = $ctor$$.superClass_ && $ctor$$.superClass_.constructor) {
    if ($ctor$$.prototype[$opt_methodName$$] === $caller$$) {
      $foundCaller_i$$ = !0;
    } else {
      if ($foundCaller_i$$) {
        return $ctor$$.prototype[$opt_methodName$$].apply($me$$, $args$$);
      }
    }
  }
  if ($me$$[$opt_methodName$$] === $caller$$) {
    return $me$$.constructor.prototype[$opt_methodName$$].apply($me$$, $args$$);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function $goog$scope$($fn$$) {
  $fn$$.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function $goog$defineClass$($superClass$$, $def$$) {
  var $cls_constructor$$ = $def$$.constructor, $statics$$ = $def$$.statics;
  $cls_constructor$$ && $cls_constructor$$ != Object.prototype.constructor || ($cls_constructor$$ = function $$cls_constructor$$$() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  $cls_constructor$$ = goog.defineClass.createSealingConstructor_($cls_constructor$$, $superClass$$);
  $superClass$$ && goog.inherits($cls_constructor$$, $superClass$$);
  delete $def$$.constructor;
  delete $def$$.statics;
  goog.defineClass.applyProperties_($cls_constructor$$.prototype, $def$$);
  null != $statics$$ && ($statics$$ instanceof Function ? $statics$$($cls_constructor$$) : goog.defineClass.applyProperties_($cls_constructor$$, $statics$$));
  return $cls_constructor$$;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function $goog$defineClass$createSealingConstructor_$($ctr$$, $superClass$$) {
  if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
    if ($superClass$$ && $superClass$$.prototype && $superClass$$.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) {
      return $ctr$$;
    }
    var $wrappedCtr$$ = function $$wrappedCtr$$$() {
      var $instance$$ = $ctr$$.apply(this, arguments) || this;
      $instance$$[goog.UID_PROPERTY_] = $instance$$[goog.UID_PROPERTY_];
      this.constructor === $wrappedCtr$$ && Object.seal($instance$$);
      return $instance$$;
    };
    return $wrappedCtr$$;
  }
  return $ctr$$;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function $goog$defineClass$applyProperties_$($target$$, $source$$) {
  for (var $key$$ in $source$$) {
    Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
  }
  for (var $i$$ = 0;$i$$ < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;$i$$++) {
    $key$$ = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[$i$$], Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
  }
};
goog.tagUnsealableClass = function $goog$tagUnsealableClass$($ctr$$) {
  !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && ($ctr$$.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
goog.debug = {};
goog.debug.Error = function $goog$debug$Error$($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
  this.reportErrorToServer = !0;
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.dom = {};
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.string = {};
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function $goog$string$startsWith$($str$$, $prefix$$) {
  return 0 == $str$$.lastIndexOf($prefix$$, 0);
};
goog.string.endsWith = function $goog$string$endsWith$($str$$, $suffix$$) {
  var $l$$ = $str$$.length - $suffix$$.length;
  return 0 <= $l$$ && $str$$.indexOf($suffix$$, $l$$) == $l$$;
};
goog.string.caseInsensitiveStartsWith = function $goog$string$caseInsensitiveStartsWith$($str$$, $prefix$$) {
  return 0 == goog.string.caseInsensitiveCompare($prefix$$, $str$$.substr(0, $prefix$$.length));
};
goog.string.caseInsensitiveEndsWith = function $goog$string$caseInsensitiveEndsWith$($str$$, $suffix$$) {
  return 0 == goog.string.caseInsensitiveCompare($suffix$$, $str$$.substr($str$$.length - $suffix$$.length, $suffix$$.length));
};
goog.string.caseInsensitiveEquals = function $goog$string$caseInsensitiveEquals$($str1$$, $str2$$) {
  return $str1$$.toLowerCase() == $str2$$.toLowerCase();
};
goog.string.subs = function $goog$string$subs$($str$$, $var_args$$) {
  for (var $splitParts$$ = $str$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1);$subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
};
goog.string.collapseWhitespace = function $goog$string$collapseWhitespace$($str$$) {
  return $str$$.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = function $goog$string$isEmptyOrWhitespace$($str$$) {
  return /^[\s\xa0]*$/.test($str$$);
};
goog.string.isEmptyString = function $goog$string$isEmptyString$($str$$) {
  return 0 == $str$$.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function $goog$string$isEmptyOrWhitespaceSafe$($str$$) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe($str$$));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function $goog$string$isBreakingWhitespace$($str$$) {
  return !/[^\t\n\r ]/.test($str$$);
};
goog.string.isAlpha = function $goog$string$isAlpha$($str$$) {
  return !/[^a-zA-Z]/.test($str$$);
};
goog.string.isNumeric = function $goog$string$isNumeric$($str$$) {
  return !/[^0-9]/.test($str$$);
};
goog.string.isAlphaNumeric = function $goog$string$isAlphaNumeric$($str$$) {
  return !/[^a-zA-Z0-9]/.test($str$$);
};
goog.string.isSpace = function $goog$string$isSpace$($ch$$) {
  return " " == $ch$$;
};
goog.string.isUnicodeChar = function $goog$string$isUnicodeChar$($ch$$) {
  return 1 == $ch$$.length && " " <= $ch$$ && "~" >= $ch$$ || "\u0080" <= $ch$$ && "\ufffd" >= $ch$$;
};
goog.string.stripNewlines = function $goog$string$stripNewlines$($str$$) {
  return $str$$.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function $goog$string$canonicalizeNewlines$($str$$) {
  return $str$$.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function $goog$string$normalizeWhitespace$($str$$) {
  return $str$$.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function $goog$string$normalizeSpaces$($str$$) {
  return $str$$.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function $goog$string$collapseBreakingSpaces$($str$$) {
  return $str$$.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function($str$$) {
  return $str$$.trim();
} : function($str$$) {
  return $str$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
goog.string.trimLeft = function $goog$string$trimLeft$($str$$) {
  return $str$$.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function $goog$string$trimRight$($str$$) {
  return $str$$.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = function $goog$string$caseInsensitiveCompare$($str1$$, $str2$$) {
  var $test1$$ = String($str1$$).toLowerCase(), $test2$$ = String($str2$$).toLowerCase();
  return $test1$$ < $test2$$ ? -1 : $test1$$ == $test2$$ ? 0 : 1;
};
goog.string.numberAwareCompare_ = function $goog$string$numberAwareCompare_$($num1_str1$$, $num2_str2$$, $a$$) {
  if ($num1_str1$$ == $num2_str2$$) {
    return 0;
  }
  if (!$num1_str1$$) {
    return -1;
  }
  if (!$num2_str2$$) {
    return 1;
  }
  for (var $tokens1$$ = $num1_str1$$.toLowerCase().match($a$$), $tokens2$$ = $num2_str2$$.toLowerCase().match($a$$), $count$$ = Math.min($tokens1$$.length, $tokens2$$.length), $i$$ = 0;$i$$ < $count$$;$i$$++) {
    $a$$ = $tokens1$$[$i$$];
    var $b$$ = $tokens2$$[$i$$];
    if ($a$$ != $b$$) {
      return $num1_str1$$ = parseInt($a$$, 10), !isNaN($num1_str1$$) && ($num2_str2$$ = parseInt($b$$, 10), !isNaN($num2_str2$$) && $num1_str1$$ - $num2_str2$$) ? $num1_str1$$ - $num2_str2$$ : $a$$ < $b$$ ? -1 : 1;
    }
  }
  return $tokens1$$.length != $tokens2$$.length ? $tokens1$$.length - $tokens2$$.length : $num1_str1$$ < $num2_str2$$ ? -1 : 1;
};
goog.string.intAwareCompare = function $goog$string$intAwareCompare$($str1$$, $str2$$) {
  return goog.string.numberAwareCompare_($str1$$, $str2$$, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function $goog$string$floatAwareCompare$($str1$$, $str2$$) {
  return goog.string.numberAwareCompare_($str1$$, $str2$$, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function $goog$string$urlEncode$($str$$) {
  return encodeURIComponent(String($str$$));
};
goog.string.urlDecode = function $goog$string$urlDecode$($str$$) {
  return decodeURIComponent($str$$.replace(/\+/g, " "));
};
goog.string.newLineToBr = function $goog$string$newLineToBr$($str$$, $opt_xml$$) {
  return $str$$.replace(/(\r\n|\r|\n)/g, $opt_xml$$ ? "<br />" : "<br>");
};
goog.string.htmlEscape = function $goog$string$htmlEscape$($str$$, $opt_isLikelyToContainHtmlChars$$) {
  if ($opt_isLikelyToContainHtmlChars$$) {
    $str$$ = $str$$.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && ($str$$ = $str$$.replace(goog.string.E_RE_, "&#101;"));
  } else {
    if (!goog.string.ALL_RE_.test($str$$)) {
      return $str$$;
    }
    -1 != $str$$.indexOf("&") && ($str$$ = $str$$.replace(goog.string.AMP_RE_, "&amp;"));
    -1 != $str$$.indexOf("<") && ($str$$ = $str$$.replace(goog.string.LT_RE_, "&lt;"));
    -1 != $str$$.indexOf(">") && ($str$$ = $str$$.replace(goog.string.GT_RE_, "&gt;"));
    -1 != $str$$.indexOf('"') && ($str$$ = $str$$.replace(goog.string.QUOT_RE_, "&quot;"));
    -1 != $str$$.indexOf("'") && ($str$$ = $str$$.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;"));
    -1 != $str$$.indexOf("\x00") && ($str$$ = $str$$.replace(goog.string.NULL_RE_, "&#0;"));
    goog.string.DETECT_DOUBLE_ESCAPING && -1 != $str$$.indexOf("e") && ($str$$ = $str$$.replace(goog.string.E_RE_, "&#101;"));
  }
  return $str$$;
};
goog.string.AMP_RE_ = /&/g;
goog.string.LT_RE_ = /</g;
goog.string.GT_RE_ = />/g;
goog.string.QUOT_RE_ = /"/g;
goog.string.SINGLE_QUOTE_RE_ = /'/g;
goog.string.NULL_RE_ = /\x00/g;
goog.string.E_RE_ = /e/g;
goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
goog.string.unescapeEntities = function $goog$string$unescapeEntities$($str$$) {
  return goog.string.contains($str$$, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_($str$$) : goog.string.unescapePureXmlEntities_($str$$) : $str$$;
};
goog.string.unescapeEntitiesWithDocument = function $goog$string$unescapeEntitiesWithDocument$($str$$, $document$$) {
  return goog.string.contains($str$$, "&") ? goog.string.unescapeEntitiesUsingDom_($str$$, $document$$) : $str$$;
};
goog.string.unescapeEntitiesUsingDom_ = function $goog$string$unescapeEntitiesUsingDom_$($str$$, $opt_document$$) {
  var $seen$$ = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, $div$$;
  $div$$ = $opt_document$$ ? $opt_document$$.createElement("div") : goog.global.document.createElement("div");
  return $str$$.replace(goog.string.HTML_ENTITY_PATTERN_, function($s$$, $entity$$) {
    var $value$$ = $seen$$[$s$$];
    if ($value$$) {
      return $value$$;
    }
    if ("#" == $entity$$.charAt(0)) {
      var $n$$ = Number("0" + $entity$$.substr(1));
      isNaN($n$$) || ($value$$ = String.fromCharCode($n$$));
    }
    $value$$ || ($div$$.innerHTML = $s$$ + " ", $value$$ = $div$$.firstChild.nodeValue.slice(0, -1));
    return $seen$$[$s$$] = $value$$;
  });
};
goog.string.unescapePureXmlEntities_ = function $goog$string$unescapePureXmlEntities_$($str$$) {
  return $str$$.replace(/&([^;]+);/g, function($s$$, $entity$$) {
    switch($entity$$) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == $entity$$.charAt(0)) {
          var $n$$ = Number("0" + $entity$$.substr(1));
          if (!isNaN($n$$)) {
            return String.fromCharCode($n$$);
          }
        }
        return $s$$;
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function $goog$string$whitespaceEscape$($str$$, $opt_xml$$) {
  return goog.string.newLineToBr($str$$.replace(/  /g, " &#160;"), $opt_xml$$);
};
goog.string.preserveSpaces = function $goog$string$preserveSpaces$($str$$) {
  return $str$$.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function $goog$string$stripQuotes$($str$$, $quoteChars$$) {
  for (var $length$$ = $quoteChars$$.length, $i$$ = 0;$i$$ < $length$$;$i$$++) {
    var $quoteChar$$ = 1 == $length$$ ? $quoteChars$$ : $quoteChars$$.charAt($i$$);
    if ($str$$.charAt(0) == $quoteChar$$ && $str$$.charAt($str$$.length - 1) == $quoteChar$$) {
      return $str$$.substring(1, $str$$.length - 1);
    }
  }
  return $str$$;
};
goog.string.truncate = function $goog$string$truncate$($str$$, $chars$$, $opt_protectEscapedCharacters$$) {
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.unescapeEntities($str$$));
  $str$$.length > $chars$$ && ($str$$ = $str$$.substring(0, $chars$$ - 3) + "...");
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.htmlEscape($str$$));
  return $str$$;
};
goog.string.truncateMiddle = function $goog$string$truncateMiddle$($str$$, $chars$$, $opt_protectEscapedCharacters$$, $half_opt_trailingChars$$) {
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.unescapeEntities($str$$));
  if ($half_opt_trailingChars$$ && $str$$.length > $chars$$) {
    $half_opt_trailingChars$$ > $chars$$ && ($half_opt_trailingChars$$ = $chars$$);
    var $endPoint_endPos$$ = $str$$.length - $half_opt_trailingChars$$;
    $str$$ = $str$$.substring(0, $chars$$ - $half_opt_trailingChars$$) + "..." + $str$$.substring($endPoint_endPos$$);
  } else {
    $str$$.length > $chars$$ && ($half_opt_trailingChars$$ = Math.floor($chars$$ / 2), $endPoint_endPos$$ = $str$$.length - $half_opt_trailingChars$$, $str$$ = $str$$.substring(0, $half_opt_trailingChars$$ + $chars$$ % 2) + "..." + $str$$.substring($endPoint_endPos$$));
  }
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.htmlEscape($str$$));
  return $str$$;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "<":"<"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function $goog$string$quote$($s$$) {
  $s$$ = String($s$$);
  for (var $sb$$ = ['"'], $i$$ = 0;$i$$ < $s$$.length;$i$$++) {
    var $ch$$ = $s$$.charAt($i$$), $cc$$ = $ch$$.charCodeAt(0);
    $sb$$[$i$$ + 1] = goog.string.specialEscapeChars_[$ch$$] || (31 < $cc$$ && 127 > $cc$$ ? $ch$$ : goog.string.escapeChar($ch$$));
  }
  $sb$$.push('"');
  return $sb$$.join("");
};
goog.string.escapeString = function $goog$string$escapeString$($str$$) {
  for (var $sb$$ = [], $i$$ = 0;$i$$ < $str$$.length;$i$$++) {
    $sb$$[$i$$] = goog.string.escapeChar($str$$.charAt($i$$));
  }
  return $sb$$.join("");
};
goog.string.escapeChar = function $goog$string$escapeChar$($c$$) {
  if ($c$$ in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[$c$$];
  }
  if ($c$$ in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[$c$$] = goog.string.specialEscapeChars_[$c$$];
  }
  var $rv$$ = $c$$, $cc$$ = $c$$.charCodeAt(0);
  if (31 < $cc$$ && 127 > $cc$$) {
    $rv$$ = $c$$;
  } else {
    if (256 > $cc$$) {
      if ($rv$$ = "\\x", 16 > $cc$$ || 256 < $cc$$) {
        $rv$$ += "0";
      }
    } else {
      $rv$$ = "\\u", 4096 > $cc$$ && ($rv$$ += "0");
    }
    $rv$$ += $cc$$.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[$c$$] = $rv$$;
};
goog.string.contains = function $goog$string$contains$($str$$, $subString$$) {
  return -1 != $str$$.indexOf($subString$$);
};
goog.string.caseInsensitiveContains = function $goog$string$caseInsensitiveContains$($str$$, $subString$$) {
  return goog.string.contains($str$$.toLowerCase(), $subString$$.toLowerCase());
};
goog.string.countOf = function $goog$string$countOf$($s$$, $ss$$) {
  return $s$$ && $ss$$ ? $s$$.split($ss$$).length - 1 : 0;
};
goog.string.removeAt = function $goog$string$removeAt$($s$$, $index$$, $stringLength$$) {
  var $resultStr$$ = $s$$;
  0 <= $index$$ && $index$$ < $s$$.length && 0 < $stringLength$$ && ($resultStr$$ = $s$$.substr(0, $index$$) + $s$$.substr($index$$ + $stringLength$$, $s$$.length - $index$$ - $stringLength$$));
  return $resultStr$$;
};
goog.string.remove = function $goog$string$remove$($s$$, $ss$$) {
  var $re$$ = new RegExp(goog.string.regExpEscape($ss$$), "");
  return $s$$.replace($re$$, "");
};
goog.string.removeAll = function $goog$string$removeAll$($s$$, $ss$$) {
  var $re$$ = new RegExp(goog.string.regExpEscape($ss$$), "g");
  return $s$$.replace($re$$, "");
};
goog.string.regExpEscape = function $goog$string$regExpEscape$($s$$) {
  return String($s$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat ? function($string$$, $length$$) {
  return $string$$.repeat($length$$);
} : function($string$$, $length$$) {
  return Array($length$$ + 1).join($string$$);
};
goog.string.padNumber = function $goog$string$padNumber$($num$$5_s$$, $length$$, $index$$47_opt_precision$$) {
  $num$$5_s$$ = goog.isDef($index$$47_opt_precision$$) ? $num$$5_s$$.toFixed($index$$47_opt_precision$$) : String($num$$5_s$$);
  $index$$47_opt_precision$$ = $num$$5_s$$.indexOf(".");
  -1 == $index$$47_opt_precision$$ && ($index$$47_opt_precision$$ = $num$$5_s$$.length);
  return goog.string.repeat("0", Math.max(0, $length$$ - $index$$47_opt_precision$$)) + $num$$5_s$$;
};
goog.string.makeSafe = function $goog$string$makeSafe$($obj$$) {
  return null == $obj$$ ? "" : String($obj$$);
};
goog.string.buildString = function $goog$string$buildString$($var_args$$) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function $goog$string$getRandomString$() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = function $goog$string$compareVersions$($version1$$, $version2$$) {
  for (var $order_v1CompNum$$ = 0, $v1Subs$$ = goog.string.trim(String($version1$$)).split("."), $v2Subs$$ = goog.string.trim(String($version2$$)).split("."), $subCount$$ = Math.max($v1Subs$$.length, $v2Subs$$.length), $subIdx$$ = 0;0 == $order_v1CompNum$$ && $subIdx$$ < $subCount$$;$subIdx$$++) {
    var $v1Sub$$ = $v1Subs$$[$subIdx$$] || "", $v2Sub$$ = $v2Subs$$[$subIdx$$] || "", $v1CompParser$$ = /(\d*)(\D*)/g, $v2CompParser$$ = /(\d*)(\D*)/g;
    do {
      var $v1Comp$$ = $v1CompParser$$.exec($v1Sub$$) || ["", "", ""], $v2Comp$$ = $v2CompParser$$.exec($v2Sub$$) || ["", "", ""];
      if (0 == $v1Comp$$[0].length && 0 == $v2Comp$$[0].length) {
        break;
      }
      var $order_v1CompNum$$ = 0 == $v1Comp$$[1].length ? 0 : parseInt($v1Comp$$[1], 10), $v2CompNum$$ = 0 == $v2Comp$$[1].length ? 0 : parseInt($v2Comp$$[1], 10), $order_v1CompNum$$ = goog.string.compareElements_($order_v1CompNum$$, $v2CompNum$$) || goog.string.compareElements_(0 == $v1Comp$$[2].length, 0 == $v2Comp$$[2].length) || goog.string.compareElements_($v1Comp$$[2], $v2Comp$$[2]);
    } while (0 == $order_v1CompNum$$);
  }
  return $order_v1CompNum$$;
};
goog.string.compareElements_ = function $goog$string$compareElements_$($left$$, $right$$) {
  return $left$$ < $right$$ ? -1 : $left$$ > $right$$ ? 1 : 0;
};
goog.string.hashCode = function $goog$string$hashCode$($str$$) {
  for (var $result$$ = 0, $i$$ = 0;$i$$ < $str$$.length;++$i$$) {
    $result$$ = 31 * $result$$ + $str$$.charCodeAt($i$$) >>> 0;
  }
  return $result$$;
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function $goog$string$createUniqueString$() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function $goog$string$toNumber$($str$$) {
  var $num$$ = Number($str$$);
  return 0 == $num$$ && goog.string.isEmptyOrWhitespace($str$$) ? NaN : $num$$;
};
goog.string.isLowerCamelCase = function $goog$string$isLowerCamelCase$($str$$) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test($str$$);
};
goog.string.isUpperCamelCase = function $goog$string$isUpperCamelCase$($str$$) {
  return /^([A-Z][a-z]*)+$/.test($str$$);
};
goog.string.toCamelCase = function $goog$string$toCamelCase$($str$$) {
  return String($str$$).replace(/\-([a-z])/g, function($all$$, $match$$) {
    return $match$$.toUpperCase();
  });
};
goog.string.toSelectorCase = function $goog$string$toSelectorCase$($str$$) {
  return String($str$$).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function $goog$string$toTitleCase$($str$$, $opt_delimiters$$) {
  var $delimiters$$ = goog.isString($opt_delimiters$$) ? goog.string.regExpEscape($opt_delimiters$$) : "\\s";
  return $str$$.replace(new RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase();
  });
};
goog.string.capitalize = function $goog$string$capitalize$($str$$) {
  return String($str$$.charAt(0)).toUpperCase() + String($str$$.substr(1)).toLowerCase();
};
goog.string.parseInt = function $goog$string$parseInt$($value$$) {
  isFinite($value$$) && ($value$$ = String($value$$));
  return goog.isString($value$$) ? /^\s*-?0x/i.test($value$$) ? parseInt($value$$, 16) : parseInt($value$$, 10) : NaN;
};
goog.string.splitLimit = function $goog$string$splitLimit$($parts$$3_str$$, $separator$$, $limit$$) {
  $parts$$3_str$$ = $parts$$3_str$$.split($separator$$);
  for (var $returnVal$$ = [];0 < $limit$$ && $parts$$3_str$$.length;) {
    $returnVal$$.push($parts$$3_str$$.shift()), $limit$$--;
  }
  $parts$$3_str$$.length && $returnVal$$.push($parts$$3_str$$.join($separator$$));
  return $returnVal$$;
};
goog.string.editDistance = function $goog$string$editDistance$($a$$, $b$$) {
  var $v0$$ = [], $v1$$ = [];
  if ($a$$ == $b$$) {
    return 0;
  }
  if (!$a$$.length || !$b$$.length) {
    return Math.max($a$$.length, $b$$.length);
  }
  for (var $i$$ = 0;$i$$ < $b$$.length + 1;$i$$++) {
    $v0$$[$i$$] = $i$$;
  }
  for ($i$$ = 0;$i$$ < $a$$.length;$i$$++) {
    $v1$$[0] = $i$$ + 1;
    for (var $j$$ = 0;$j$$ < $b$$.length;$j$$++) {
      $v1$$[$j$$ + 1] = Math.min($v1$$[$j$$] + 1, $v0$$[$j$$ + 1] + 1, $v0$$[$j$$] + ($a$$[$i$$] != $b$$[$j$$]));
    }
    for ($j$$ = 0;$j$$ < $v0$$.length;$j$$++) {
      $v0$$[$j$$] = $v1$$[$j$$];
    }
  }
  return $v1$$[$b$$.length];
};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function $goog$asserts$AssertionError$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  goog.debug.Error.call(this, goog.string.subs.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
  this.messagePattern = $messagePattern$$;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function $goog$asserts$DEFAULT_ERROR_HANDLER$($e$$) {
  throw $e$$;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_ = function $goog$asserts$doAssertFailure_$($defaultMessage_e$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$$ = "Assertion failed";
  if ($givenMessage$$) {
    var $message$$ = $message$$ + (": " + $givenMessage$$), $args$$ = $givenArgs$$
  } else {
    $defaultMessage_e$$ && ($message$$ += ": " + $defaultMessage_e$$, $args$$ = $defaultArgs$$);
  }
  $defaultMessage_e$$ = new goog.asserts.AssertionError("" + $message$$, $args$$ || []);
  goog.asserts.errorHandler_($defaultMessage_e$$);
};
goog.asserts.setErrorHandler = function $goog$asserts$setErrorHandler$($errorHandler$$) {
  goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = $errorHandler$$);
};
goog.asserts.assert = function $goog$asserts$assert$($condition$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !$condition$$ && goog.asserts.doAssertFailure_("", null, $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $condition$$;
};
goog.asserts.fail = function $goog$asserts$fail$($opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + ($opt_message$$ ? ": " + $opt_message$$ : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function $goog$asserts$assertNumber$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber($value$$) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertString = function $goog$asserts$assertString$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString($value$$) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertFunction = function $goog$asserts$assertFunction$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction($value$$) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertObject = function $goog$asserts$assertObject$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject($value$$) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertArray = function $goog$asserts$assertArray$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray($value$$) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertBoolean = function $goog$asserts$assertBoolean$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean($value$$) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertElement = function $goog$asserts$assertElement$($value$$, $opt_message$$, $var_args$$) {
  !goog.asserts.ENABLE_ASSERTS || goog.isObject($value$$) && $value$$.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertInstanceof = function $goog$asserts$assertInstanceof$($value$$, $type$$, $opt_message$$, $var_args$$) {
  !goog.asserts.ENABLE_ASSERTS || $value$$ instanceof $type$$ || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_($type$$), goog.asserts.getType_($value$$)], $opt_message$$, Array.prototype.slice.call(arguments, 3));
  return $value$$;
};
goog.asserts.assertObjectPrototypeIsIntact = function $goog$asserts$assertObjectPrototypeIsIntact$() {
  for (var $key$$ in Object.prototype) {
    goog.asserts.fail($key$$ + " should not be enumerable in Object.prototype.");
  }
};
goog.asserts.getType_ = function $goog$asserts$getType_$($value$$) {
  return $value$$ instanceof Function ? $value$$.displayName || $value$$.name || "unknown type name" : $value$$ instanceof Object ? $value$$.constructor.displayName || $value$$.constructor.name || Object.prototype.toString.call($value$$) : null === $value$$ ? "null" : typeof $value$$;
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
goog.array.ASSUME_NATIVE_FUNCTIONS = !1;
goog.array.peek = function $goog$array$peek$($array$$) {
  return $array$$[$array$$.length - 1];
};
goog.array.last = goog.array.peek;
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.indexOf) ? function($arr$$, $obj$$, $opt_fromIndex$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call($arr$$, $obj$$, $opt_fromIndex$$);
} : function($arr$$, $obj$$, $fromIndex_i$$18_opt_fromIndex$$) {
  $fromIndex_i$$18_opt_fromIndex$$ = null == $fromIndex_i$$18_opt_fromIndex$$ ? 0 : 0 > $fromIndex_i$$18_opt_fromIndex$$ ? Math.max(0, $arr$$.length + $fromIndex_i$$18_opt_fromIndex$$) : $fromIndex_i$$18_opt_fromIndex$$;
  if (goog.isString($arr$$)) {
    return goog.isString($obj$$) && 1 == $obj$$.length ? $arr$$.indexOf($obj$$, $fromIndex_i$$18_opt_fromIndex$$) : -1;
  }
  for (;$fromIndex_i$$18_opt_fromIndex$$ < $arr$$.length;$fromIndex_i$$18_opt_fromIndex$$++) {
    if ($fromIndex_i$$18_opt_fromIndex$$ in $arr$$ && $arr$$[$fromIndex_i$$18_opt_fromIndex$$] === $obj$$) {
      return $fromIndex_i$$18_opt_fromIndex$$;
    }
  }
  return -1;
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function($arr$$, $obj$$, $opt_fromIndex$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call($arr$$, $obj$$, null == $opt_fromIndex$$ ? $arr$$.length - 1 : $opt_fromIndex$$);
} : function($arr$$, $obj$$, $fromIndex$$2_i$$19_opt_fromIndex$$) {
  $fromIndex$$2_i$$19_opt_fromIndex$$ = null == $fromIndex$$2_i$$19_opt_fromIndex$$ ? $arr$$.length - 1 : $fromIndex$$2_i$$19_opt_fromIndex$$;
  0 > $fromIndex$$2_i$$19_opt_fromIndex$$ && ($fromIndex$$2_i$$19_opt_fromIndex$$ = Math.max(0, $arr$$.length + $fromIndex$$2_i$$19_opt_fromIndex$$));
  if (goog.isString($arr$$)) {
    return goog.isString($obj$$) && 1 == $obj$$.length ? $arr$$.lastIndexOf($obj$$, $fromIndex$$2_i$$19_opt_fromIndex$$) : -1;
  }
  for (;0 <= $fromIndex$$2_i$$19_opt_fromIndex$$;$fromIndex$$2_i$$19_opt_fromIndex$$--) {
    if ($fromIndex$$2_i$$19_opt_fromIndex$$ in $arr$$ && $arr$$[$fromIndex$$2_i$$19_opt_fromIndex$$] === $obj$$) {
      return $fromIndex$$2_i$$19_opt_fromIndex$$;
    }
  }
  return -1;
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.forEach) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  goog.array.ARRAY_PROTOTYPE_.forEach.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    $i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$);
  }
};
goog.array.forEachRight = function $goog$array$forEachRight$($arr$$, $f$$, $opt_obj$$) {
  for (var $i$$21_l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$21_l$$ = $i$$21_l$$ - 1;0 <= $i$$21_l$$;--$i$$21_l$$) {
    $i$$21_l$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$21_l$$], $i$$21_l$$, $arr$$);
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.filter) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.filter.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if ($i$$ in $arr2$$) {
      var $val$$ = $arr2$$[$i$$];
      $f$$.call($opt_obj$$, $val$$, $i$$, $arr$$) && ($res$$[$resLength$$++] = $val$$);
    }
  }
  return $res$$;
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.map) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.map.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $res$$ = Array($l$$), $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    $i$$ in $arr2$$ && ($res$$[$i$$] = $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$));
  }
  return $res$$;
};
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduce) ? function($arr$$, $f$$, $val$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  $opt_obj$$ && ($f$$ = goog.bind($f$$, $opt_obj$$));
  return goog.array.ARRAY_PROTOTYPE_.reduce.call($arr$$, $f$$, $val$$);
} : function($arr$$, $f$$, $val$$0$$, $opt_obj$$) {
  var $rval$$ = $val$$0$$;
  goog.array.forEach($arr$$, function($val$$, $index$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$, $index$$, $arr$$);
  });
  return $rval$$;
};
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduceRight) ? function($arr$$, $f$$, $val$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  $opt_obj$$ && ($f$$ = goog.bind($f$$, $opt_obj$$));
  return goog.array.ARRAY_PROTOTYPE_.reduceRight.call($arr$$, $f$$, $val$$);
} : function($arr$$, $f$$, $val$$0$$, $opt_obj$$) {
  var $rval$$ = $val$$0$$;
  goog.array.forEachRight($arr$$, function($val$$, $index$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$, $index$$, $arr$$);
  });
  return $rval$$;
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.some) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.some.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if ($i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return !0;
    }
  }
  return !1;
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.every) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.every.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if ($i$$ in $arr2$$ && !$f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return !1;
    }
  }
  return !0;
};
goog.array.count = function $goog$array$count$($arr$$0$$, $f$$, $opt_obj$$) {
  var $count$$ = 0;
  goog.array.forEach($arr$$0$$, function($element$$, $index$$, $arr$$) {
    $f$$.call($opt_obj$$, $element$$, $index$$, $arr$$) && ++$count$$;
  }, $opt_obj$$);
  return $count$$;
};
goog.array.find = function $goog$array$find$($arr$$, $f$$17_i$$, $opt_obj$$) {
  $f$$17_i$$ = goog.array.findIndex($arr$$, $f$$17_i$$, $opt_obj$$);
  return 0 > $f$$17_i$$ ? null : goog.isString($arr$$) ? $arr$$.charAt($f$$17_i$$) : $arr$$[$f$$17_i$$];
};
goog.array.findIndex = function $goog$array$findIndex$($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if ($i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return $i$$;
    }
  }
  return -1;
};
goog.array.findRight = function $goog$array$findRight$($arr$$, $f$$19_i$$, $opt_obj$$) {
  $f$$19_i$$ = goog.array.findIndexRight($arr$$, $f$$19_i$$, $opt_obj$$);
  return 0 > $f$$19_i$$ ? null : goog.isString($arr$$) ? $arr$$.charAt($f$$19_i$$) : $arr$$[$f$$19_i$$];
};
goog.array.findIndexRight = function $goog$array$findIndexRight$($arr$$, $f$$, $opt_obj$$) {
  for (var $i$$29_l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$29_l$$ = $i$$29_l$$ - 1;0 <= $i$$29_l$$;$i$$29_l$$--) {
    if ($i$$29_l$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$29_l$$], $i$$29_l$$, $arr$$)) {
      return $i$$29_l$$;
    }
  }
  return -1;
};
goog.array.contains = function $goog$array$contains$($arr$$, $obj$$) {
  return 0 <= goog.array.indexOf($arr$$, $obj$$);
};
goog.array.isEmpty = function $goog$array$isEmpty$($arr$$) {
  return 0 == $arr$$.length;
};
goog.array.clear = function $goog$array$clear$($arr$$) {
  if (!goog.isArray($arr$$)) {
    for (var $i$$ = $arr$$.length - 1;0 <= $i$$;$i$$--) {
      delete $arr$$[$i$$];
    }
  }
  $arr$$.length = 0;
};
goog.array.insert = function $goog$array$insert$($arr$$, $obj$$) {
  goog.array.contains($arr$$, $obj$$) || $arr$$.push($obj$$);
};
goog.array.insertAt = function $goog$array$insertAt$($arr$$, $obj$$, $opt_i$$) {
  goog.array.splice($arr$$, $opt_i$$, 0, $obj$$);
};
goog.array.insertArrayAt = function $goog$array$insertArrayAt$($arr$$, $elementsToAdd$$, $opt_i$$) {
  goog.partial(goog.array.splice, $arr$$, $opt_i$$, 0).apply(null, $elementsToAdd$$);
};
goog.array.insertBefore = function $goog$array$insertBefore$($arr$$, $obj$$, $opt_obj2$$) {
  var $i$$;
  2 == arguments.length || 0 > ($i$$ = goog.array.indexOf($arr$$, $opt_obj2$$)) ? $arr$$.push($obj$$) : goog.array.insertAt($arr$$, $obj$$, $i$$);
};
goog.array.remove = function $goog$array$remove$($arr$$, $obj$$) {
  var $i$$ = goog.array.indexOf($arr$$, $obj$$), $rv$$;
  ($rv$$ = 0 <= $i$$) && goog.array.removeAt($arr$$, $i$$);
  return $rv$$;
};
goog.array.removeAt = function $goog$array$removeAt$($arr$$, $i$$) {
  goog.asserts.assert(null != $arr$$.length);
  return 1 == goog.array.ARRAY_PROTOTYPE_.splice.call($arr$$, $i$$, 1).length;
};
goog.array.removeIf = function $goog$array$removeIf$($arr$$, $f$$21_i$$, $opt_obj$$) {
  $f$$21_i$$ = goog.array.findIndex($arr$$, $f$$21_i$$, $opt_obj$$);
  return 0 <= $f$$21_i$$ ? (goog.array.removeAt($arr$$, $f$$21_i$$), !0) : !1;
};
goog.array.removeAllIf = function $goog$array$removeAllIf$($arr$$, $f$$, $opt_obj$$) {
  var $removedCount$$ = 0;
  goog.array.forEachRight($arr$$, function($val$$, $index$$) {
    $f$$.call($opt_obj$$, $val$$, $index$$, $arr$$) && goog.array.removeAt($arr$$, $index$$) && $removedCount$$++;
  });
  return $removedCount$$;
};
goog.array.concat = function $goog$array$concat$($var_args$$) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments);
};
goog.array.join = function $goog$array$join$($var_args$$) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments);
};
goog.array.toArray = function $goog$array$toArray$($object$$) {
  var $length$$ = $object$$.length;
  if (0 < $length$$) {
    for (var $rv$$ = Array($length$$), $i$$ = 0;$i$$ < $length$$;$i$$++) {
      $rv$$[$i$$] = $object$$[$i$$];
    }
    return $rv$$;
  }
  return [];
};
goog.array.clone = goog.array.toArray;
goog.array.extend = function $goog$array$extend$($arr1$$, $var_args$$) {
  for (var $i$$ = 1;$i$$ < arguments.length;$i$$++) {
    var $arr2$$ = arguments[$i$$];
    if (goog.isArrayLike($arr2$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$$ = 0;$j$$ < $len2$$;$j$$++) {
        $arr1$$[$len1$$ + $j$$] = $arr2$$[$j$$];
      }
    } else {
      $arr1$$.push($arr2$$);
    }
  }
};
goog.array.splice = function $goog$array$splice$($arr$$, $index$$, $howMany$$, $var_args$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply($arr$$, goog.array.slice(arguments, 1));
};
goog.array.slice = function $goog$array$slice$($arr$$, $start$$, $opt_end$$) {
  goog.asserts.assert(null != $arr$$.length);
  return 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call($arr$$, $start$$) : goog.array.ARRAY_PROTOTYPE_.slice.call($arr$$, $start$$, $opt_end$$);
};
goog.array.removeDuplicates = function $goog$array$removeDuplicates$($arr$$, $opt_rv_returnArray$$, $hashFn_opt_hashFn$$) {
  $opt_rv_returnArray$$ = $opt_rv_returnArray$$ || $arr$$;
  var $defaultHashFn_seen$$ = function $$defaultHashFn_seen$$$($item$$) {
    return goog.isObject($item$$) ? "o" + goog.getUid($item$$) : (typeof $item$$).charAt(0) + $item$$;
  };
  $hashFn_opt_hashFn$$ = $hashFn_opt_hashFn$$ || $defaultHashFn_seen$$;
  for (var $defaultHashFn_seen$$ = {}, $cursorInsert$$ = 0, $cursorRead$$ = 0;$cursorRead$$ < $arr$$.length;) {
    var $current$$ = $arr$$[$cursorRead$$++], $key$$ = $hashFn_opt_hashFn$$($current$$);
    Object.prototype.hasOwnProperty.call($defaultHashFn_seen$$, $key$$) || ($defaultHashFn_seen$$[$key$$] = !0, $opt_rv_returnArray$$[$cursorInsert$$++] = $current$$);
  }
  $opt_rv_returnArray$$.length = $cursorInsert$$;
};
goog.array.binarySearch = function $goog$array$binarySearch$($arr$$, $target$$, $opt_compareFn$$) {
  return goog.array.binarySearch_($arr$$, $opt_compareFn$$ || goog.array.defaultCompare, !1, $target$$);
};
goog.array.binarySelect = function $goog$array$binarySelect$($arr$$, $evaluator$$, $opt_obj$$) {
  return goog.array.binarySearch_($arr$$, $evaluator$$, !0, void 0, $opt_obj$$);
};
goog.array.binarySearch_ = function $goog$array$binarySearch_$($arr$$, $compareFn$$, $isEvaluator$$, $opt_target$$, $opt_selfObj$$) {
  for (var $left$$ = 0, $right$$ = $arr$$.length, $found$$;$left$$ < $right$$;) {
    var $middle$$ = $left$$ + $right$$ >> 1, $compareResult$$;
    $compareResult$$ = $isEvaluator$$ ? $compareFn$$.call($opt_selfObj$$, $arr$$[$middle$$], $middle$$, $arr$$) : $compareFn$$($opt_target$$, $arr$$[$middle$$]);
    0 < $compareResult$$ ? $left$$ = $middle$$ + 1 : ($right$$ = $middle$$, $found$$ = !$compareResult$$);
  }
  return $found$$ ? $left$$ : ~$left$$;
};
goog.array.sort = function $goog$array$sort$($arr$$, $opt_compareFn$$) {
  $arr$$.sort($opt_compareFn$$ || goog.array.defaultCompare);
};
goog.array.stableSort = function $goog$array$stableSort$($arr$$, $opt_compareFn$$) {
  for (var $i$$ = 0;$i$$ < $arr$$.length;$i$$++) {
    $arr$$[$i$$] = {index:$i$$, value:$arr$$[$i$$]};
  }
  var $valueCompareFn$$ = $opt_compareFn$$ || goog.array.defaultCompare;
  goog.array.sort($arr$$, function stableCompareFn($obj1$$, $obj2$$) {
    return $valueCompareFn$$($obj1$$.value, $obj2$$.value) || $obj1$$.index - $obj2$$.index;
  });
  for ($i$$ = 0;$i$$ < $arr$$.length;$i$$++) {
    $arr$$[$i$$] = $arr$$[$i$$].value;
  }
};
goog.array.sortByKey = function $goog$array$sortByKey$($arr$$, $keyFn$$, $opt_compareFn$$) {
  var $keyCompareFn$$ = $opt_compareFn$$ || goog.array.defaultCompare;
  goog.array.sort($arr$$, function($a$$, $b$$) {
    return $keyCompareFn$$($keyFn$$($a$$), $keyFn$$($b$$));
  });
};
goog.array.sortObjectsByKey = function $goog$array$sortObjectsByKey$($arr$$, $key$$, $opt_compareFn$$) {
  goog.array.sortByKey($arr$$, function($obj$$) {
    return $obj$$[$key$$];
  }, $opt_compareFn$$);
};
goog.array.isSorted = function $goog$array$isSorted$($arr$$, $compare_opt_compareFn$$, $opt_strict$$) {
  $compare_opt_compareFn$$ = $compare_opt_compareFn$$ || goog.array.defaultCompare;
  for (var $i$$ = 1;$i$$ < $arr$$.length;$i$$++) {
    var $compareResult$$ = $compare_opt_compareFn$$($arr$$[$i$$ - 1], $arr$$[$i$$]);
    if (0 < $compareResult$$ || 0 == $compareResult$$ && $opt_strict$$) {
      return !1;
    }
  }
  return !0;
};
goog.array.equals = function $goog$array$equals$($arr1$$, $arr2$$, $equalsFn_opt_equalsFn$$) {
  if (!goog.isArrayLike($arr1$$) || !goog.isArrayLike($arr2$$) || $arr1$$.length != $arr2$$.length) {
    return !1;
  }
  var $l$$ = $arr1$$.length;
  $equalsFn_opt_equalsFn$$ = $equalsFn_opt_equalsFn$$ || goog.array.defaultCompareEquality;
  for (var $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if (!$equalsFn_opt_equalsFn$$($arr1$$[$i$$], $arr2$$[$i$$])) {
      return !1;
    }
  }
  return !0;
};
goog.array.compare3 = function $goog$array$compare3$($arr1$$, $arr2$$, $compare$$1_opt_compareFn$$) {
  $compare$$1_opt_compareFn$$ = $compare$$1_opt_compareFn$$ || goog.array.defaultCompare;
  for (var $l$$ = Math.min($arr1$$.length, $arr2$$.length), $i$$ = 0;$i$$ < $l$$;$i$$++) {
    var $result$$ = $compare$$1_opt_compareFn$$($arr1$$[$i$$], $arr2$$[$i$$]);
    if (0 != $result$$) {
      return $result$$;
    }
  }
  return goog.array.defaultCompare($arr1$$.length, $arr2$$.length);
};
goog.array.defaultCompare = function $goog$array$defaultCompare$($a$$, $b$$) {
  return $a$$ > $b$$ ? 1 : $a$$ < $b$$ ? -1 : 0;
};
goog.array.inverseDefaultCompare = function $goog$array$inverseDefaultCompare$($a$$, $b$$) {
  return -goog.array.defaultCompare($a$$, $b$$);
};
goog.array.defaultCompareEquality = function $goog$array$defaultCompareEquality$($a$$, $b$$) {
  return $a$$ === $b$$;
};
goog.array.binaryInsert = function $goog$array$binaryInsert$($array$$, $value$$, $index$$53_opt_compareFn$$) {
  $index$$53_opt_compareFn$$ = goog.array.binarySearch($array$$, $value$$, $index$$53_opt_compareFn$$);
  return 0 > $index$$53_opt_compareFn$$ ? (goog.array.insertAt($array$$, $value$$, -($index$$53_opt_compareFn$$ + 1)), !0) : !1;
};
goog.array.binaryRemove = function $goog$array$binaryRemove$($array$$, $index$$54_value$$, $opt_compareFn$$) {
  $index$$54_value$$ = goog.array.binarySearch($array$$, $index$$54_value$$, $opt_compareFn$$);
  return 0 <= $index$$54_value$$ ? goog.array.removeAt($array$$, $index$$54_value$$) : !1;
};
goog.array.bucket = function $goog$array$bucket$($array$$, $sorter$$, $opt_obj$$) {
  for (var $buckets$$ = {}, $i$$ = 0;$i$$ < $array$$.length;$i$$++) {
    var $value$$ = $array$$[$i$$], $key$$ = $sorter$$.call($opt_obj$$, $value$$, $i$$, $array$$);
    goog.isDef($key$$) && ($buckets$$[$key$$] || ($buckets$$[$key$$] = [])).push($value$$);
  }
  return $buckets$$;
};
goog.array.toObject = function $goog$array$toObject$($arr$$, $keyFunc$$, $opt_obj$$) {
  var $ret$$ = {};
  goog.array.forEach($arr$$, function($element$$, $index$$) {
    $ret$$[$keyFunc$$.call($opt_obj$$, $element$$, $index$$, $arr$$)] = $element$$;
  });
  return $ret$$;
};
goog.array.range = function $goog$array$range$($i$$, $opt_end$$, $opt_step_step$$) {
  var $array$$ = [], $start$$ = 0, $end$$ = $i$$;
  $opt_step_step$$ = $opt_step_step$$ || 1;
  void 0 !== $opt_end$$ && ($start$$ = $i$$, $end$$ = $opt_end$$);
  if (0 > $opt_step_step$$ * ($end$$ - $start$$)) {
    return [];
  }
  if (0 < $opt_step_step$$) {
    for ($i$$ = $start$$;$i$$ < $end$$;$i$$ += $opt_step_step$$) {
      $array$$.push($i$$);
    }
  } else {
    for ($i$$ = $start$$;$i$$ > $end$$;$i$$ += $opt_step_step$$) {
      $array$$.push($i$$);
    }
  }
  return $array$$;
};
goog.array.repeat = function $goog$array$repeat$($value$$, $n$$) {
  for (var $array$$ = [], $i$$ = 0;$i$$ < $n$$;$i$$++) {
    $array$$[$i$$] = $value$$;
  }
  return $array$$;
};
goog.array.flatten = function $goog$array$flatten$($var_args$$) {
  for (var $result$$ = [], $i$$ = 0;$i$$ < arguments.length;$i$$++) {
    var $element$$ = arguments[$i$$];
    if (goog.isArray($element$$)) {
      for (var $c$$ = 0;$c$$ < $element$$.length;$c$$ += 8192) {
        for (var $chunk$$ = goog.array.slice($element$$, $c$$, $c$$ + 8192), $chunk$$ = goog.array.flatten.apply(null, $chunk$$), $r$$ = 0;$r$$ < $chunk$$.length;$r$$++) {
          $result$$.push($chunk$$[$r$$]);
        }
      }
    } else {
      $result$$.push($element$$);
    }
  }
  return $result$$;
};
goog.array.rotate = function $goog$array$rotate$($array$$, $n$$) {
  goog.asserts.assert(null != $array$$.length);
  $array$$.length && ($n$$ %= $array$$.length, 0 < $n$$ ? goog.array.ARRAY_PROTOTYPE_.unshift.apply($array$$, $array$$.splice(-$n$$, $n$$)) : 0 > $n$$ && goog.array.ARRAY_PROTOTYPE_.push.apply($array$$, $array$$.splice(0, -$n$$)));
  return $array$$;
};
goog.array.moveItem = function $goog$array$moveItem$($arr$$, $fromIndex$$, $toIndex$$) {
  goog.asserts.assert(0 <= $fromIndex$$ && $fromIndex$$ < $arr$$.length);
  goog.asserts.assert(0 <= $toIndex$$ && $toIndex$$ < $arr$$.length);
  $fromIndex$$ = goog.array.ARRAY_PROTOTYPE_.splice.call($arr$$, $fromIndex$$, 1);
  goog.array.ARRAY_PROTOTYPE_.splice.call($arr$$, $toIndex$$, 0, $fromIndex$$[0]);
};
goog.array.zip = function $goog$array$zip$($var_args$$) {
  if (!arguments.length) {
    return [];
  }
  for (var $result$$ = [], $minLen$$ = arguments[0].length, $i$$ = 1;$i$$ < arguments.length;$i$$++) {
    arguments[$i$$].length < $minLen$$ && ($minLen$$ = arguments[$i$$].length);
  }
  for ($i$$ = 0;$i$$ < $minLen$$;$i$$++) {
    for (var $value$$ = [], $j$$ = 0;$j$$ < arguments.length;$j$$++) {
      $value$$.push(arguments[$j$$][$i$$]);
    }
    $result$$.push($value$$);
  }
  return $result$$;
};
goog.array.shuffle = function $goog$array$shuffle$($arr$$, $opt_randFn$$) {
  for (var $randFn$$ = $opt_randFn$$ || Math.random, $i$$ = $arr$$.length - 1;0 < $i$$;$i$$--) {
    var $j$$ = Math.floor($randFn$$() * ($i$$ + 1)), $tmp$$ = $arr$$[$i$$];
    $arr$$[$i$$] = $arr$$[$j$$];
    $arr$$[$j$$] = $tmp$$;
  }
};
goog.array.copyByIndex = function $goog$array$copyByIndex$($arr$$, $index_arr$$) {
  var $result$$ = [];
  goog.array.forEach($index_arr$$, function($index$$) {
    $result$$.push($arr$$[$index$$]);
  });
  return $result$$;
};
goog.debug.entryPointRegistry = {};
goog.debug.EntryPointMonitor = function $goog$debug$EntryPointMonitor$() {
};
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.monitors_ = [];
goog.debug.entryPointRegistry.monitorsMayExist_ = !1;
goog.debug.entryPointRegistry.register = function $goog$debug$entryPointRegistry$register$($callback$$) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = $callback$$;
  if (goog.debug.entryPointRegistry.monitorsMayExist_) {
    for (var $monitors$$ = goog.debug.entryPointRegistry.monitors_, $i$$ = 0;$i$$ < $monitors$$.length;$i$$++) {
      $callback$$(goog.bind($monitors$$[$i$$].wrap, $monitors$$[$i$$]));
    }
  }
};
goog.debug.entryPointRegistry.monitorAll = function $goog$debug$entryPointRegistry$monitorAll$($monitor$$) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = !0;
  for (var $transformer$$ = goog.bind($monitor$$.wrap, $monitor$$), $i$$ = 0;$i$$ < goog.debug.entryPointRegistry.refList_.length;$i$$++) {
    goog.debug.entryPointRegistry.refList_[$i$$]($transformer$$);
  }
  goog.debug.entryPointRegistry.monitors_.push($monitor$$);
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function $goog$debug$entryPointRegistry$unmonitorAllIfPossible$($monitor$$1_transformer$$) {
  var $monitors$$ = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert($monitor$$1_transformer$$ == $monitors$$[$monitors$$.length - 1], "Only the most recent monitor can be unwrapped.");
  $monitor$$1_transformer$$ = goog.bind($monitor$$1_transformer$$.unwrap, $monitor$$1_transformer$$);
  for (var $i$$ = 0;$i$$ < goog.debug.entryPointRegistry.refList_.length;$i$$++) {
    goog.debug.entryPointRegistry.refList_[$i$$]($monitor$$1_transformer$$);
  }
  $monitors$$.length--;
};
goog.dom.TagName = {A:"A", ABBR:"ABBR", ACRONYM:"ACRONYM", ADDRESS:"ADDRESS", APPLET:"APPLET", AREA:"AREA", ARTICLE:"ARTICLE", ASIDE:"ASIDE", AUDIO:"AUDIO", B:"B", BASE:"BASE", BASEFONT:"BASEFONT", BDI:"BDI", BDO:"BDO", BIG:"BIG", BLOCKQUOTE:"BLOCKQUOTE", BODY:"BODY", BR:"BR", BUTTON:"BUTTON", CANVAS:"CANVAS", CAPTION:"CAPTION", CENTER:"CENTER", CITE:"CITE", CODE:"CODE", COL:"COL", COLGROUP:"COLGROUP", COMMAND:"COMMAND", DATA:"DATA", DATALIST:"DATALIST", DD:"DD", DEL:"DEL", DETAILS:"DETAILS", DFN:"DFN", 
DIALOG:"DIALOG", DIR:"DIR", DIV:"DIV", DL:"DL", DT:"DT", EM:"EM", EMBED:"EMBED", FIELDSET:"FIELDSET", FIGCAPTION:"FIGCAPTION", FIGURE:"FIGURE", FONT:"FONT", FOOTER:"FOOTER", FORM:"FORM", FRAME:"FRAME", FRAMESET:"FRAMESET", H1:"H1", H2:"H2", H3:"H3", H4:"H4", H5:"H5", H6:"H6", HEAD:"HEAD", HEADER:"HEADER", HGROUP:"HGROUP", HR:"HR", HTML:"HTML", I:"I", IFRAME:"IFRAME", IMG:"IMG", INPUT:"INPUT", INS:"INS", ISINDEX:"ISINDEX", KBD:"KBD", KEYGEN:"KEYGEN", LABEL:"LABEL", LEGEND:"LEGEND", LI:"LI", LINK:"LINK", 
MAP:"MAP", MARK:"MARK", MATH:"MATH", MENU:"MENU", META:"META", METER:"METER", NAV:"NAV", NOFRAMES:"NOFRAMES", NOSCRIPT:"NOSCRIPT", OBJECT:"OBJECT", OL:"OL", OPTGROUP:"OPTGROUP", OPTION:"OPTION", OUTPUT:"OUTPUT", P:"P", PARAM:"PARAM", PRE:"PRE", PROGRESS:"PROGRESS", Q:"Q", RP:"RP", RT:"RT", RUBY:"RUBY", S:"S", SAMP:"SAMP", SCRIPT:"SCRIPT", SECTION:"SECTION", SELECT:"SELECT", SMALL:"SMALL", SOURCE:"SOURCE", SPAN:"SPAN", STRIKE:"STRIKE", STRONG:"STRONG", STYLE:"STYLE", SUB:"SUB", SUMMARY:"SUMMARY", 
SUP:"SUP", SVG:"SVG", TABLE:"TABLE", TBODY:"TBODY", TD:"TD", TEMPLATE:"TEMPLATE", TEXTAREA:"TEXTAREA", TFOOT:"TFOOT", TH:"TH", THEAD:"THEAD", TIME:"TIME", TITLE:"TITLE", TR:"TR", TRACK:"TRACK", TT:"TT", U:"U", UL:"UL", VAR:"VAR", VIDEO:"VIDEO", WBR:"WBR"};
goog.functions = {};
goog.functions.constant = function $goog$functions$constant$($retValue$$) {
  return function() {
    return $retValue$$;
  };
};
goog.functions.FALSE = goog.functions.constant(!1);
goog.functions.TRUE = goog.functions.constant(!0);
goog.functions.NULL = goog.functions.constant(null);
goog.functions.identity = function $goog$functions$identity$($opt_returnValue$$, $var_args$$) {
  return $opt_returnValue$$;
};
goog.functions.error = function $goog$functions$error$($message$$) {
  return function() {
    throw Error($message$$);
  };
};
goog.functions.fail = function $goog$functions$fail$($err$$) {
  return function() {
    throw $err$$;
  };
};
goog.functions.lock = function $goog$functions$lock$($f$$, $opt_numArgs$$) {
  $opt_numArgs$$ = $opt_numArgs$$ || 0;
  return function() {
    return $f$$.apply(this, Array.prototype.slice.call(arguments, 0, $opt_numArgs$$));
  };
};
goog.functions.nth = function $goog$functions$nth$($n$$) {
  return function() {
    return arguments[$n$$];
  };
};
goog.functions.withReturnValue = function $goog$functions$withReturnValue$($f$$, $retValue$$) {
  return goog.functions.sequence($f$$, goog.functions.constant($retValue$$));
};
goog.functions.equalTo = function $goog$functions$equalTo$($value$$, $opt_useLooseComparison$$) {
  return function($other$$) {
    return $opt_useLooseComparison$$ ? $value$$ == $other$$ : $value$$ === $other$$;
  };
};
goog.functions.compose = function $goog$functions$compose$($fn$$, $var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    var $result$$;
    $length$$ && ($result$$ = $functions$$[$length$$ - 1].apply(this, arguments));
    for (var $i$$ = $length$$ - 2;0 <= $i$$;$i$$--) {
      $result$$ = $functions$$[$i$$].call(this, $result$$);
    }
    return $result$$;
  };
};
goog.functions.sequence = function $goog$functions$sequence$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $result$$, $i$$ = 0;$i$$ < $length$$;$i$$++) {
      $result$$ = $functions$$[$i$$].apply(this, arguments);
    }
    return $result$$;
  };
};
goog.functions.and = function $goog$functions$and$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $i$$ = 0;$i$$ < $length$$;$i$$++) {
      if (!$functions$$[$i$$].apply(this, arguments)) {
        return !1;
      }
    }
    return !0;
  };
};
goog.functions.or = function $goog$functions$or$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $i$$ = 0;$i$$ < $length$$;$i$$++) {
      if ($functions$$[$i$$].apply(this, arguments)) {
        return !0;
      }
    }
    return !1;
  };
};
goog.functions.not = function $goog$functions$not$($f$$) {
  return function() {
    return !$f$$.apply(this, arguments);
  };
};
goog.functions.create = function $goog$functions$create$($constructor$$, $var_args$$) {
  var $obj$$ = function $$obj$$$() {
  };
  $obj$$.prototype = $constructor$$.prototype;
  $obj$$ = new $obj$$;
  $constructor$$.apply($obj$$, Array.prototype.slice.call(arguments, 1));
  return $obj$$;
};
goog.functions.CACHE_RETURN_VALUE = !0;
goog.functions.cacheReturnValue = function $goog$functions$cacheReturnValue$($fn$$) {
  var $called$$ = !1, $value$$;
  return function() {
    if (!goog.functions.CACHE_RETURN_VALUE) {
      return $fn$$();
    }
    $called$$ || ($value$$ = $fn$$(), $called$$ = !0);
    return $value$$;
  };
};
goog.functions.once = function $goog$functions$once$($f$$) {
  var $inner$$ = $f$$;
  return function() {
    if ($inner$$) {
      var $tmp$$ = $inner$$;
      $inner$$ = null;
      $tmp$$();
    }
  };
};
goog.functions.debounce = function $goog$functions$debounce$($f$$, $interval$$, $opt_scope$$) {
  $opt_scope$$ && ($f$$ = goog.bind($f$$, $opt_scope$$));
  var $timeout$$ = null;
  return function($var_args$$) {
    goog.global.clearTimeout($timeout$$);
    var $args$$ = arguments;
    $timeout$$ = goog.global.setTimeout(function() {
      $f$$.apply(null, $args$$);
    }, $interval$$);
  };
};
goog.functions.throttle = function $goog$functions$throttle$($f$$, $interval$$, $opt_scope$$) {
  $opt_scope$$ && ($f$$ = goog.bind($f$$, $opt_scope$$));
  var $timeout$$ = null, $shouldFire$$ = !1, $args$$ = [], $handleTimeout$$ = function $$handleTimeout$$$() {
    $timeout$$ = null;
    $shouldFire$$ && ($shouldFire$$ = !1, $fire$$());
  }, $fire$$ = function $$fire$$$() {
    $timeout$$ = goog.global.setTimeout($handleTimeout$$, $interval$$);
    $f$$.apply(null, $args$$);
  };
  return function($var_args$$) {
    $args$$ = arguments;
    $timeout$$ ? $shouldFire$$ = !0 : $fire$$();
  };
};
goog.labs = {};
goog.labs.userAgent = {};
goog.labs.userAgent.util = {};
goog.labs.userAgent.util.getNativeUserAgentString_ = function $goog$labs$userAgent$util$getNativeUserAgentString_$() {
  var $navigator$$ = goog.labs.userAgent.util.getNavigator_();
  return $navigator$$ && ($navigator$$ = $navigator$$.userAgent) ? $navigator$$ : "";
};
goog.labs.userAgent.util.getNavigator_ = function $goog$labs$userAgent$util$getNavigator_$() {
  return goog.global.navigator;
};
goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
goog.labs.userAgent.util.setUserAgent = function $goog$labs$userAgent$util$setUserAgent$($opt_userAgent$$) {
  goog.labs.userAgent.util.userAgent_ = $opt_userAgent$$ || goog.labs.userAgent.util.getNativeUserAgentString_();
};
goog.labs.userAgent.util.getUserAgent = function $goog$labs$userAgent$util$getUserAgent$() {
  return goog.labs.userAgent.util.userAgent_;
};
goog.labs.userAgent.util.matchUserAgent = function $goog$labs$userAgent$util$matchUserAgent$($str$$) {
  var $userAgent$$ = goog.labs.userAgent.util.getUserAgent();
  return goog.string.contains($userAgent$$, $str$$);
};
goog.labs.userAgent.util.matchUserAgentIgnoreCase = function $goog$labs$userAgent$util$matchUserAgentIgnoreCase$($str$$) {
  var $userAgent$$ = goog.labs.userAgent.util.getUserAgent();
  return goog.string.caseInsensitiveContains($userAgent$$, $str$$);
};
goog.labs.userAgent.util.extractVersionTuples = function $goog$labs$userAgent$util$extractVersionTuples$($userAgent$$) {
  for (var $versionRegExp$$ = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, $data$$ = [], $match$$;$match$$ = $versionRegExp$$.exec($userAgent$$);) {
    $data$$.push([$match$$[1], $match$$[2], $match$$[3] || void 0]);
  }
  return $data$$;
};
goog.object = {};
goog.object.forEach = function $goog$object$forEach$($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$);
  }
};
goog.object.filter = function $goog$object$filter$($obj$$, $f$$, $opt_obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$) && ($res$$[$key$$] = $obj$$[$key$$]);
  }
  return $res$$;
};
goog.object.map = function $goog$object$map$($obj$$, $f$$, $opt_obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$key$$] = $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$);
  }
  return $res$$;
};
goog.object.some = function $goog$object$some$($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    if ($f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return !0;
    }
  }
  return !1;
};
goog.object.every = function $goog$object$every$($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    if (!$f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return !1;
    }
  }
  return !0;
};
goog.object.getCount = function $goog$object$getCount$($obj$$) {
  var $rv$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $rv$$++;
  }
  return $rv$$;
};
goog.object.getAnyKey = function $goog$object$getAnyKey$($obj$$) {
  for (var $key$$ in $obj$$) {
    return $key$$;
  }
};
goog.object.getAnyValue = function $goog$object$getAnyValue$($obj$$) {
  for (var $key$$ in $obj$$) {
    return $obj$$[$key$$];
  }
};
goog.object.contains = function $goog$object$contains$($obj$$, $val$$) {
  return goog.object.containsValue($obj$$, $val$$);
};
goog.object.getValues = function $goog$object$getValues$($obj$$) {
  var $res$$ = [], $i$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$i$$++] = $obj$$[$key$$];
  }
  return $res$$;
};
goog.object.getKeys = function $goog$object$getKeys$($obj$$) {
  var $res$$ = [], $i$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$i$$++] = $key$$;
  }
  return $res$$;
};
goog.object.getValueByKeys = function $goog$object$getValueByKeys$($obj$$, $var_args$$) {
  for (var $i$$ = goog.isArrayLike($var_args$$), $keys$$ = $i$$ ? $var_args$$ : arguments, $i$$ = $i$$ ? 0 : 1;$i$$ < $keys$$.length && ($obj$$ = $obj$$[$keys$$[$i$$]], goog.isDef($obj$$));$i$$++) {
  }
  return $obj$$;
};
goog.object.containsKey = function $goog$object$containsKey$($obj$$, $key$$) {
  return null !== $obj$$ && $key$$ in $obj$$;
};
goog.object.containsValue = function $goog$object$containsValue$($obj$$, $val$$) {
  for (var $key$$ in $obj$$) {
    if ($obj$$[$key$$] == $val$$) {
      return !0;
    }
  }
  return !1;
};
goog.object.findKey = function $goog$object$findKey$($obj$$, $f$$, $opt_this$$) {
  for (var $key$$ in $obj$$) {
    if ($f$$.call($opt_this$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return $key$$;
    }
  }
};
goog.object.findValue = function $goog$object$findValue$($obj$$, $f$$35_key$$, $opt_this$$) {
  return ($f$$35_key$$ = goog.object.findKey($obj$$, $f$$35_key$$, $opt_this$$)) && $obj$$[$f$$35_key$$];
};
goog.object.isEmpty = function $goog$object$isEmpty$($obj$$) {
  for (var $key$$ in $obj$$) {
    return !1;
  }
  return !0;
};
goog.object.clear = function $goog$object$clear$($obj$$) {
  for (var $i$$ in $obj$$) {
    delete $obj$$[$i$$];
  }
};
goog.object.remove = function $goog$object$remove$($obj$$, $key$$) {
  var $rv$$;
  ($rv$$ = $key$$ in $obj$$) && delete $obj$$[$key$$];
  return $rv$$;
};
goog.object.add = function $goog$object$add$($obj$$, $key$$, $val$$) {
  if (null !== $obj$$ && $key$$ in $obj$$) {
    throw Error('The object already contains the key "' + $key$$ + '"');
  }
  goog.object.set($obj$$, $key$$, $val$$);
};
goog.object.get = function $goog$object$get$($obj$$, $key$$, $opt_val$$) {
  return null !== $obj$$ && $key$$ in $obj$$ ? $obj$$[$key$$] : $opt_val$$;
};
goog.object.set = function $goog$object$set$($obj$$, $key$$, $value$$) {
  $obj$$[$key$$] = $value$$;
};
goog.object.setIfUndefined = function $goog$object$setIfUndefined$($obj$$, $key$$, $value$$) {
  return $key$$ in $obj$$ ? $obj$$[$key$$] : $obj$$[$key$$] = $value$$;
};
goog.object.setWithReturnValueIfNotSet = function $goog$object$setWithReturnValueIfNotSet$($obj$$, $key$$, $f$$36_val$$) {
  if ($key$$ in $obj$$) {
    return $obj$$[$key$$];
  }
  $f$$36_val$$ = $f$$36_val$$();
  return $obj$$[$key$$] = $f$$36_val$$;
};
goog.object.equals = function $goog$object$equals$($a$$, $b$$) {
  for (var $k$$ in $a$$) {
    if (!($k$$ in $b$$) || $a$$[$k$$] !== $b$$[$k$$]) {
      return !1;
    }
  }
  for ($k$$ in $b$$) {
    if (!($k$$ in $a$$)) {
      return !1;
    }
  }
  return !0;
};
goog.object.clone = function $goog$object$clone$($obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$key$$] = $obj$$[$key$$];
  }
  return $res$$;
};
goog.object.unsafeClone = function $goog$object$unsafeClone$($obj$$) {
  var $clone$$1_type$$ = goog.typeOf($obj$$);
  if ("object" == $clone$$1_type$$ || "array" == $clone$$1_type$$) {
    if (goog.isFunction($obj$$.clone)) {
      return $obj$$.clone();
    }
    var $clone$$1_type$$ = "array" == $clone$$1_type$$ ? [] : {}, $key$$;
    for ($key$$ in $obj$$) {
      $clone$$1_type$$[$key$$] = goog.object.unsafeClone($obj$$[$key$$]);
    }
    return $clone$$1_type$$;
  }
  return $obj$$;
};
goog.object.transpose = function $goog$object$transpose$($obj$$) {
  var $transposed$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $transposed$$[$obj$$[$key$$]] = $key$$;
  }
  return $transposed$$;
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function $goog$object$extend$($target$$, $var_args$$) {
  for (var $key$$, $source$$, $i$$ = 1;$i$$ < arguments.length;$i$$++) {
    $source$$ = arguments[$i$$];
    for ($key$$ in $source$$) {
      $target$$[$key$$] = $source$$[$key$$];
    }
    for (var $j$$ = 0;$j$$ < goog.object.PROTOTYPE_FIELDS_.length;$j$$++) {
      $key$$ = goog.object.PROTOTYPE_FIELDS_[$j$$], Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
    }
  }
};
goog.object.create = function $goog$object$create$($var_args$$) {
  var $argLength$$ = arguments.length;
  if (1 == $argLength$$ && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if ($argLength$$ % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var $rv$$ = {}, $i$$ = 0;$i$$ < $argLength$$;$i$$ += 2) {
    $rv$$[arguments[$i$$]] = arguments[$i$$ + 1];
  }
  return $rv$$;
};
goog.object.createSet = function $goog$object$createSet$($var_args$$) {
  var $argLength$$ = arguments.length;
  if (1 == $argLength$$ && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  for (var $rv$$ = {}, $i$$ = 0;$i$$ < $argLength$$;$i$$++) {
    $rv$$[arguments[$i$$]] = !0;
  }
  return $rv$$;
};
goog.object.createImmutableView = function $goog$object$createImmutableView$($obj$$) {
  var $result$$ = $obj$$;
  Object.isFrozen && !Object.isFrozen($obj$$) && ($result$$ = Object.create($obj$$), Object.freeze($result$$));
  return $result$$;
};
goog.object.isImmutableView = function $goog$object$isImmutableView$($obj$$) {
  return !!Object.isFrozen && Object.isFrozen($obj$$);
};
goog.labs.userAgent.browser = {};
goog.labs.userAgent.browser.matchOpera_ = function $goog$labs$userAgent$browser$matchOpera_$() {
  return goog.labs.userAgent.util.matchUserAgent("Opera") || goog.labs.userAgent.util.matchUserAgent("OPR");
};
goog.labs.userAgent.browser.matchIE_ = function $goog$labs$userAgent$browser$matchIE_$() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.browser.matchEdge_ = function $goog$labs$userAgent$browser$matchEdge_$() {
  return goog.labs.userAgent.util.matchUserAgent("Edge");
};
goog.labs.userAgent.browser.matchFirefox_ = function $goog$labs$userAgent$browser$matchFirefox_$() {
  return goog.labs.userAgent.util.matchUserAgent("Firefox");
};
goog.labs.userAgent.browser.matchSafari_ = function $goog$labs$userAgent$browser$matchSafari_$() {
  return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdge_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
};
goog.labs.userAgent.browser.matchCoast_ = function $goog$labs$userAgent$browser$matchCoast_$() {
  return goog.labs.userAgent.util.matchUserAgent("Coast");
};
goog.labs.userAgent.browser.matchIosWebview_ = function $goog$labs$userAgent$browser$matchIosWebview_$() {
  return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
};
goog.labs.userAgent.browser.matchChrome_ = function $goog$labs$userAgent$browser$matchChrome_$() {
  return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchOpera_() && !goog.labs.userAgent.browser.matchEdge_();
};
goog.labs.userAgent.browser.matchAndroidBrowser_ = function $goog$labs$userAgent$browser$matchAndroidBrowser_$() {
  return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
};
goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdge_;
goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
goog.labs.userAgent.browser.isSilk = function $goog$labs$userAgent$browser$isSilk$() {
  return goog.labs.userAgent.util.matchUserAgent("Silk");
};
goog.labs.userAgent.browser.getVersion = function $goog$labs$userAgent$browser$getVersion$() {
  function $lookUpValueWithKeys$$($key$$52_keys$$) {
    $key$$52_keys$$ = goog.array.find($key$$52_keys$$, $versionMapHasKey$$);
    return $versionMap$$[$key$$52_keys$$] || "";
  }
  var $tuple_userAgentString_versionTuples$$ = goog.labs.userAgent.util.getUserAgent();
  if (goog.labs.userAgent.browser.isIE()) {
    return goog.labs.userAgent.browser.getIEVersion_($tuple_userAgentString_versionTuples$$);
  }
  var $tuple_userAgentString_versionTuples$$ = goog.labs.userAgent.util.extractVersionTuples($tuple_userAgentString_versionTuples$$), $versionMap$$ = {};
  goog.array.forEach($tuple_userAgentString_versionTuples$$, function($tuple$$) {
    $versionMap$$[$tuple$$[0]] = $tuple$$[1];
  });
  var $versionMapHasKey$$ = goog.partial(goog.object.containsKey, $versionMap$$);
  return goog.labs.userAgent.browser.isOpera() ? $lookUpValueWithKeys$$(["Version", "Opera", "OPR"]) : goog.labs.userAgent.browser.isEdge() ? $lookUpValueWithKeys$$(["Edge"]) : goog.labs.userAgent.browser.isChrome() ? $lookUpValueWithKeys$$(["Chrome", "CriOS"]) : ($tuple_userAgentString_versionTuples$$ = $tuple_userAgentString_versionTuples$$[2]) && $tuple_userAgentString_versionTuples$$[1] || "";
};
goog.labs.userAgent.browser.isVersionOrHigher = function $goog$labs$userAgent$browser$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), $version$$);
};
goog.labs.userAgent.browser.getIEVersion_ = function $goog$labs$userAgent$browser$getIEVersion_$($tridentVersion_userAgent$$) {
  var $rv$$7_version$$ = /rv: *([\d\.]*)/.exec($tridentVersion_userAgent$$);
  if ($rv$$7_version$$ && $rv$$7_version$$[1]) {
    return $rv$$7_version$$[1];
  }
  var $rv$$7_version$$ = "", $msie$$ = /MSIE +([\d\.]+)/.exec($tridentVersion_userAgent$$);
  if ($msie$$ && $msie$$[1]) {
    if ($tridentVersion_userAgent$$ = /Trident\/(\d.\d)/.exec($tridentVersion_userAgent$$), "7.0" == $msie$$[1]) {
      if ($tridentVersion_userAgent$$ && $tridentVersion_userAgent$$[1]) {
        switch($tridentVersion_userAgent$$[1]) {
          case "4.0":
            $rv$$7_version$$ = "8.0";
            break;
          case "5.0":
            $rv$$7_version$$ = "9.0";
            break;
          case "6.0":
            $rv$$7_version$$ = "10.0";
            break;
          case "7.0":
            $rv$$7_version$$ = "11.0";
        }
      } else {
        $rv$$7_version$$ = "7.0";
      }
    } else {
      $rv$$7_version$$ = $msie$$[1];
    }
  }
  return $rv$$7_version$$;
};
goog.labs.userAgent.engine = {};
goog.labs.userAgent.engine.isPresto = function $goog$labs$userAgent$engine$isPresto$() {
  return goog.labs.userAgent.util.matchUserAgent("Presto");
};
goog.labs.userAgent.engine.isTrident = function $goog$labs$userAgent$engine$isTrident$() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.engine.isEdge = function $goog$labs$userAgent$engine$isEdge$() {
  return goog.labs.userAgent.util.matchUserAgent("Edge");
};
goog.labs.userAgent.engine.isWebKit = function $goog$labs$userAgent$engine$isWebKit$() {
  return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
};
goog.labs.userAgent.engine.isGecko = function $goog$labs$userAgent$engine$isGecko$() {
  return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
};
goog.labs.userAgent.engine.getVersion = function $goog$labs$userAgent$engine$getVersion$() {
  var $browserTuple_tuples_userAgentString$$ = goog.labs.userAgent.util.getUserAgent();
  if ($browserTuple_tuples_userAgentString$$) {
    var $browserTuple_tuples_userAgentString$$ = goog.labs.userAgent.util.extractVersionTuples($browserTuple_tuples_userAgentString$$), $engineTuple$$ = goog.labs.userAgent.engine.getEngineTuple_($browserTuple_tuples_userAgentString$$);
    if ($engineTuple$$) {
      return "Gecko" == $engineTuple$$[0] ? goog.labs.userAgent.engine.getVersionForKey_($browserTuple_tuples_userAgentString$$, "Firefox") : $engineTuple$$[1];
    }
    var $browserTuple_tuples_userAgentString$$ = $browserTuple_tuples_userAgentString$$[0], $info_match$$;
    if ($browserTuple_tuples_userAgentString$$ && ($info_match$$ = $browserTuple_tuples_userAgentString$$[2]) && ($info_match$$ = /Trident\/([^\s;]+)/.exec($info_match$$))) {
      return $info_match$$[1];
    }
  }
  return "";
};
goog.labs.userAgent.engine.getEngineTuple_ = function $goog$labs$userAgent$engine$getEngineTuple_$($tuples$$) {
  if (!goog.labs.userAgent.engine.isEdge()) {
    return $tuples$$[1];
  }
  for (var $i$$ = 0;$i$$ < $tuples$$.length;$i$$++) {
    var $tuple$$ = $tuples$$[$i$$];
    if ("Edge" == $tuple$$[0]) {
      return $tuple$$;
    }
  }
};
goog.labs.userAgent.engine.isVersionOrHigher = function $goog$labs$userAgent$engine$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), $version$$);
};
goog.labs.userAgent.engine.getVersionForKey_ = function $goog$labs$userAgent$engine$getVersionForKey_$($tuples$$, $key$$) {
  var $pair$$ = goog.array.find($tuples$$, function($pair$$) {
    return $key$$ == $pair$$[0];
  });
  return $pair$$ && $pair$$[1] || "";
};
goog.async = {};
goog.async.throwException = function $goog$async$throwException$($exception$$) {
  goog.global.setTimeout(function() {
    throw $exception$$;
  }, 0);
};
goog.async.nextTick = function $goog$async$nextTick$($callback$$, $opt_context$$, $opt_useSetImmediate$$) {
  var $cb$$ = $callback$$;
  $opt_context$$ && ($cb$$ = goog.bind($callback$$, $opt_context$$));
  $cb$$ = goog.async.nextTick.wrapCallback_($cb$$);
  !goog.isFunction(goog.global.setImmediate) || !$opt_useSetImmediate$$ && goog.global.Window && goog.global.Window.prototype && goog.global.Window.prototype.setImmediate == goog.global.setImmediate ? (goog.async.nextTick.setImmediate_ || (goog.async.nextTick.setImmediate_ = goog.async.nextTick.getSetImmediateEmulator_()), goog.async.nextTick.setImmediate_($cb$$)) : goog.global.setImmediate($cb$$);
};
goog.async.nextTick.getSetImmediateEmulator_ = function $goog$async$nextTick$getSetImmediateEmulator_$() {
  var $Channel$$ = goog.global.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && !goog.labs.userAgent.engine.isPresto() && ($Channel$$ = function $$Channel$$$() {
    var $doc$$ = document.createElement(goog.dom.TagName.IFRAME);
    $doc$$.style.display = "none";
    $doc$$.src = "";
    document.documentElement.appendChild($doc$$);
    var $win$$ = $doc$$.contentWindow, $doc$$ = $win$$.document;
    $doc$$.open();
    $doc$$.write("");
    $doc$$.close();
    var $message$$ = "callImmediate" + Math.random(), $origin$$ = "file:" == $win$$.location.protocol ? "*" : $win$$.location.protocol + "//" + $win$$.location.host, $doc$$ = goog.bind(function($e$$) {
      if (("*" == $origin$$ || $e$$.origin == $origin$$) && $e$$.data == $message$$) {
        this.port1.onmessage();
      }
    }, this);
    $win$$.addEventListener("message", $doc$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function $this$port2$postMessage$() {
      $win$$.postMessage($message$$, $origin$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && !goog.labs.userAgent.browser.isIE()) {
    var $channel$$ = new $Channel$$, $head$$ = {}, $tail$$ = $head$$;
    $channel$$.port1.onmessage = function $$channel$$$port1$onmessage$() {
      if (goog.isDef($head$$.next)) {
        $head$$ = $head$$.next;
        var $cb$$ = $head$$.cb;
        $head$$.cb = null;
        $cb$$();
      }
    };
    return function($cb$$) {
      $tail$$.next = {cb:$cb$$};
      $tail$$ = $tail$$.next;
      $channel$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement(goog.dom.TagName.SCRIPT) ? function($cb$$) {
    var $script$$ = document.createElement(goog.dom.TagName.SCRIPT);
    $script$$.onreadystatechange = function $$script$$$onreadystatechange$() {
      $script$$.onreadystatechange = null;
      $script$$.parentNode.removeChild($script$$);
      $script$$ = null;
      $cb$$();
      $cb$$ = null;
    };
    document.documentElement.appendChild($script$$);
  } : function($cb$$) {
    goog.global.setTimeout($cb$$, 0);
  };
};
goog.async.nextTick.wrapCallback_ = goog.functions.identity;
goog.debug.entryPointRegistry.register(function($transformer$$) {
  goog.async.nextTick.wrapCallback_ = $transformer$$;
});
goog.async.FreeList = function $goog$async$FreeList$($create$$, $reset$$, $limit$$) {
  this.limit_ = $limit$$;
  this.create_ = $create$$;
  this.reset_ = $reset$$;
  this.occupants_ = 0;
  this.head_ = null;
};
goog.async.FreeList.prototype.get = function $goog$async$FreeList$$get$() {
  var $item$$;
  0 < this.occupants_ ? (this.occupants_--, $item$$ = this.head_, this.head_ = $item$$.next, $item$$.next = null) : $item$$ = this.create_();
  return $item$$;
};
goog.async.FreeList.prototype.put = function $goog$async$FreeList$$put$($item$$) {
  this.reset_($item$$);
  this.occupants_ < this.limit_ && (this.occupants_++, $item$$.next = this.head_, this.head_ = $item$$);
};
goog.async.FreeList.prototype.occupants = function $goog$async$FreeList$$occupants$() {
  return this.occupants_;
};
goog.async.WorkQueue = function $goog$async$WorkQueue$() {
  this.workTail_ = this.workHead_ = null;
};
goog.async.WorkQueue.DEFAULT_MAX_UNUSED = 100;
goog.async.WorkQueue.freelist_ = new goog.async.FreeList(function() {
  return new goog.async.WorkItem;
}, function($item$$) {
  $item$$.reset();
}, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);
goog.async.WorkQueue.prototype.add = function $goog$async$WorkQueue$$add$($fn$$, $scope$$) {
  var $item$$ = this.getUnusedItem_();
  $item$$.set($fn$$, $scope$$);
  this.workTail_ ? this.workTail_.next = $item$$ : (goog.asserts.assert(!this.workHead_), this.workHead_ = $item$$);
  this.workTail_ = $item$$;
};
goog.async.WorkQueue.prototype.remove = function $goog$async$WorkQueue$$remove$() {
  var $item$$ = null;
  this.workHead_ && ($item$$ = this.workHead_, this.workHead_ = this.workHead_.next, this.workHead_ || (this.workTail_ = null), $item$$.next = null);
  return $item$$;
};
goog.async.WorkQueue.prototype.returnUnused = function $goog$async$WorkQueue$$returnUnused$($item$$) {
  goog.async.WorkQueue.freelist_.put($item$$);
};
goog.async.WorkQueue.prototype.getUnusedItem_ = function $goog$async$WorkQueue$$getUnusedItem_$() {
  return goog.async.WorkQueue.freelist_.get();
};
goog.async.WorkItem = function $goog$async$WorkItem$() {
  this.next = this.scope = this.fn = null;
};
goog.async.WorkItem.prototype.set = function $goog$async$WorkItem$$set$($fn$$, $scope$$) {
  this.fn = $fn$$;
  this.scope = $scope$$;
  this.next = null;
};
goog.async.WorkItem.prototype.reset = function $goog$async$WorkItem$$reset$() {
  this.next = this.scope = this.fn = null;
};
goog.async.run = function $goog$async$run$($callback$$, $opt_context$$) {
  goog.async.run.schedule_ || goog.async.run.initializeRunner_();
  goog.async.run.workQueueScheduled_ || (goog.async.run.schedule_(), goog.async.run.workQueueScheduled_ = !0);
  goog.async.run.workQueue_.add($callback$$, $opt_context$$);
};
goog.async.run.initializeRunner_ = function $goog$async$run$initializeRunner_$() {
  if (goog.global.Promise && goog.global.Promise.resolve) {
    var $promise$$ = goog.global.Promise.resolve(void 0);
    goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
      $promise$$.then(goog.async.run.processWorkQueue);
    };
  } else {
    goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
      goog.async.nextTick(goog.async.run.processWorkQueue);
    };
  }
};
goog.async.run.forceNextTick = function $goog$async$run$forceNextTick$($opt_realSetTimeout$$) {
  goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
    goog.async.nextTick(goog.async.run.processWorkQueue);
    $opt_realSetTimeout$$ && $opt_realSetTimeout$$(goog.async.run.processWorkQueue);
  };
};
goog.async.run.workQueueScheduled_ = !1;
goog.async.run.workQueue_ = new goog.async.WorkQueue;
goog.DEBUG && (goog.async.run.resetQueue = function $goog$async$run$resetQueue$() {
  goog.async.run.workQueueScheduled_ = !1;
  goog.async.run.workQueue_ = new goog.async.WorkQueue;
});
goog.async.run.processWorkQueue = function $goog$async$run$processWorkQueue$() {
  for (var $item$$ = null;$item$$ = goog.async.run.workQueue_.remove();) {
    try {
      $item$$.fn.call($item$$.scope);
    } catch ($e$$) {
      goog.async.throwException($e$$);
    }
    goog.async.run.workQueue_.returnUnused($item$$);
  }
  goog.async.run.workQueueScheduled_ = !1;
};
goog.math = {};
goog.math.randomInt = function $goog$math$randomInt$($a$$) {
  return Math.floor(Math.random() * $a$$);
};
goog.math.uniformRandom = function $goog$math$uniformRandom$($a$$, $b$$) {
  return $a$$ + Math.random() * ($b$$ - $a$$);
};
goog.math.clamp = function $goog$math$clamp$($value$$, $min$$, $max$$) {
  return Math.min(Math.max($value$$, $min$$), $max$$);
};
goog.math.modulo = function $goog$math$modulo$($a$$, $b$$) {
  var $r$$ = $a$$ % $b$$;
  return 0 > $r$$ * $b$$ ? $r$$ + $b$$ : $r$$;
};
goog.math.lerp = function $goog$math$lerp$($a$$, $b$$, $x$$) {
  return $a$$ + $x$$ * ($b$$ - $a$$);
};
goog.math.nearlyEquals = function $goog$math$nearlyEquals$($a$$, $b$$, $opt_tolerance$$) {
  return Math.abs($a$$ - $b$$) <= ($opt_tolerance$$ || 1E-6);
};
goog.math.standardAngle = function $goog$math$standardAngle$($angle$$) {
  return goog.math.modulo($angle$$, 360);
};
goog.math.standardAngleInRadians = function $goog$math$standardAngleInRadians$($angle$$) {
  return goog.math.modulo($angle$$, 2 * Math.PI);
};
goog.math.toRadians = function $goog$math$toRadians$($angleDegrees$$) {
  return $angleDegrees$$ * Math.PI / 180;
};
goog.math.toDegrees = function $goog$math$toDegrees$($angleRadians$$) {
  return 180 * $angleRadians$$ / Math.PI;
};
goog.math.angleDx = function $goog$math$angleDx$($degrees$$, $radius$$) {
  return $radius$$ * Math.cos(goog.math.toRadians($degrees$$));
};
goog.math.angleDy = function $goog$math$angleDy$($degrees$$, $radius$$) {
  return $radius$$ * Math.sin(goog.math.toRadians($degrees$$));
};
goog.math.angle = function $goog$math$angle$($x1$$, $y1$$, $x2$$, $y2$$) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2($y2$$ - $y1$$, $x2$$ - $x1$$)));
};
goog.math.angleDifference = function $goog$math$angleDifference$($startAngle$$, $endAngle$$) {
  var $d$$ = goog.math.standardAngle($endAngle$$) - goog.math.standardAngle($startAngle$$);
  180 < $d$$ ? $d$$ -= 360 : -180 >= $d$$ && ($d$$ = 360 + $d$$);
  return $d$$;
};
goog.math.sign = Math.sign || function($x$$) {
  return 0 < $x$$ ? 1 : 0 > $x$$ ? -1 : $x$$;
};
goog.math.longestCommonSubsequence = function $goog$math$longestCommonSubsequence$($array1$$, $array2$$, $compare$$2_opt_compareFn$$, $collect_opt_collectorFn$$) {
  $compare$$2_opt_compareFn$$ = $compare$$2_opt_compareFn$$ || function($a$$, $b$$) {
    return $a$$ == $b$$;
  };
  $collect_opt_collectorFn$$ = $collect_opt_collectorFn$$ || function($i1$$, $i2$$) {
    return $array1$$[$i1$$];
  };
  for (var $length1$$ = $array1$$.length, $length2$$ = $array2$$.length, $arr$$ = [], $i$$ = 0;$i$$ < $length1$$ + 1;$i$$++) {
    $arr$$[$i$$] = [], $arr$$[$i$$][0] = 0;
  }
  for (var $j$$ = 0;$j$$ < $length2$$ + 1;$j$$++) {
    $arr$$[0][$j$$] = 0;
  }
  for ($i$$ = 1;$i$$ <= $length1$$;$i$$++) {
    for ($j$$ = 1;$j$$ <= $length2$$;$j$$++) {
      $compare$$2_opt_compareFn$$($array1$$[$i$$ - 1], $array2$$[$j$$ - 1]) ? $arr$$[$i$$][$j$$] = $arr$$[$i$$ - 1][$j$$ - 1] + 1 : $arr$$[$i$$][$j$$] = Math.max($arr$$[$i$$ - 1][$j$$], $arr$$[$i$$][$j$$ - 1]);
    }
  }
  for (var $result$$ = [], $i$$ = $length1$$, $j$$ = $length2$$;0 < $i$$ && 0 < $j$$;) {
    $compare$$2_opt_compareFn$$($array1$$[$i$$ - 1], $array2$$[$j$$ - 1]) ? ($result$$.unshift($collect_opt_collectorFn$$($i$$ - 1, $j$$ - 1)), $i$$--, $j$$--) : $arr$$[$i$$ - 1][$j$$] > $arr$$[$i$$][$j$$ - 1] ? $i$$-- : $j$$--;
  }
  return $result$$;
};
goog.math.sum = function $goog$math$sum$($var_args$$) {
  return goog.array.reduce(arguments, function($sum$$, $value$$) {
    return $sum$$ + $value$$;
  }, 0);
};
goog.math.average = function $goog$math$average$($var_args$$) {
  return goog.math.sum.apply(null, arguments) / arguments.length;
};
goog.math.sampleVariance = function $goog$math$sampleVariance$($var_args$$) {
  var $sampleSize$$ = arguments.length;
  if (2 > $sampleSize$$) {
    return 0;
  }
  var $mean$$ = goog.math.average.apply(null, arguments);
  return goog.math.sum.apply(null, goog.array.map(arguments, function($val$$) {
    return Math.pow($val$$ - $mean$$, 2);
  })) / ($sampleSize$$ - 1);
};
goog.math.standardDeviation = function $goog$math$standardDeviation$($var_args$$) {
  return Math.sqrt(goog.math.sampleVariance.apply(null, arguments));
};
goog.math.isInt = function $goog$math$isInt$($num$$) {
  return isFinite($num$$) && 0 == $num$$ % 1;
};
goog.math.isFiniteNumber = function $goog$math$isFiniteNumber$($num$$) {
  return isFinite($num$$) && !isNaN($num$$);
};
goog.math.isNegativeZero = function $goog$math$isNegativeZero$($num$$) {
  return 0 == $num$$ && 0 > 1 / $num$$;
};
goog.math.log10Floor = function $goog$math$log10Floor$($num$$) {
  if (0 < $num$$) {
    var $x$$ = Math.round(Math.log($num$$) * Math.LOG10E);
    return $x$$ - (parseFloat("1e" + $x$$) > $num$$ ? 1 : 0);
  }
  return 0 == $num$$ ? -Infinity : NaN;
};
goog.math.safeFloor = function $goog$math$safeFloor$($num$$, $opt_epsilon$$) {
  goog.asserts.assert(!goog.isDef($opt_epsilon$$) || 0 < $opt_epsilon$$);
  return Math.floor($num$$ + ($opt_epsilon$$ || 2E-15));
};
goog.math.safeCeil = function $goog$math$safeCeil$($num$$, $opt_epsilon$$) {
  goog.asserts.assert(!goog.isDef($opt_epsilon$$) || 0 < $opt_epsilon$$);
  return Math.ceil($num$$ - ($opt_epsilon$$ || 2E-15));
};
goog.iter = {};
goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : {message:"StopIteration", stack:""};
goog.iter.Iterator = function $goog$iter$Iterator$() {
};
goog.iter.Iterator.prototype.next = function $goog$iter$Iterator$$next$() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function $goog$iter$Iterator$$__iterator__$($opt_keys$$) {
  return this;
};
goog.iter.toIterator = function $goog$iter$toIterator$($iterable$$) {
  if ($iterable$$ instanceof goog.iter.Iterator) {
    return $iterable$$;
  }
  if ("function" == typeof $iterable$$.__iterator__) {
    return $iterable$$.__iterator__(!1);
  }
  if (goog.isArrayLike($iterable$$)) {
    var $i$$ = 0, $newIter$$ = new goog.iter.Iterator;
    $newIter$$.next = function $$newIter$$$next$() {
      for (;;) {
        if ($i$$ >= $iterable$$.length) {
          throw goog.iter.StopIteration;
        }
        if ($i$$ in $iterable$$) {
          return $iterable$$[$i$$++];
        }
        $i$$++;
      }
    };
    return $newIter$$;
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function $goog$iter$forEach$($iterable$$, $f$$, $opt_obj$$) {
  if (goog.isArrayLike($iterable$$)) {
    try {
      goog.array.forEach($iterable$$, $f$$, $opt_obj$$);
    } catch ($ex$$) {
      if ($ex$$ !== goog.iter.StopIteration) {
        throw $ex$$;
      }
    }
  } else {
    $iterable$$ = goog.iter.toIterator($iterable$$);
    try {
      for (;;) {
        $f$$.call($opt_obj$$, $iterable$$.next(), void 0, $iterable$$);
      }
    } catch ($ex$$) {
      if ($ex$$ !== goog.iter.StopIteration) {
        throw $ex$$;
      }
    }
  }
};
goog.iter.filter = function $goog$iter$filter$($iterable$$4_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$$4_newIter$$);
  $iterable$$4_newIter$$ = new goog.iter.Iterator;
  $iterable$$4_newIter$$.next = function $$iterable$$4_newIter$$$next$() {
    for (;;) {
      var $val$$ = $iterator$$.next();
      if ($f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
        return $val$$;
      }
    }
  };
  return $iterable$$4_newIter$$;
};
goog.iter.filterFalse = function $goog$iter$filterFalse$($iterable$$, $f$$, $opt_obj$$) {
  return goog.iter.filter($iterable$$, goog.functions.not($f$$), $opt_obj$$);
};
goog.iter.range = function $goog$iter$range$($startOrStop$$, $opt_stop$$, $opt_step$$) {
  var $start$$ = 0, $stop$$ = $startOrStop$$, $step$$ = $opt_step$$ || 1;
  1 < arguments.length && ($start$$ = $startOrStop$$, $stop$$ = $opt_stop$$);
  if (0 == $step$$) {
    throw Error("Range step argument must not be zero");
  }
  var $newIter$$ = new goog.iter.Iterator;
  $newIter$$.next = function $$newIter$$$next$() {
    if (0 < $step$$ && $start$$ >= $stop$$ || 0 > $step$$ && $start$$ <= $stop$$) {
      throw goog.iter.StopIteration;
    }
    var $rv$$ = $start$$;
    $start$$ += $step$$;
    return $rv$$;
  };
  return $newIter$$;
};
goog.iter.join = function $goog$iter$join$($iterable$$, $deliminator$$) {
  return goog.iter.toArray($iterable$$).join($deliminator$$);
};
goog.iter.map = function $goog$iter$map$($iterable$$7_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$$7_newIter$$);
  $iterable$$7_newIter$$ = new goog.iter.Iterator;
  $iterable$$7_newIter$$.next = function $$iterable$$7_newIter$$$next$() {
    var $val$$ = $iterator$$.next();
    return $f$$.call($opt_obj$$, $val$$, void 0, $iterator$$);
  };
  return $iterable$$7_newIter$$;
};
goog.iter.reduce = function $goog$iter$reduce$($iterable$$, $f$$, $val$$0$$, $opt_obj$$) {
  var $rval$$ = $val$$0$$;
  goog.iter.forEach($iterable$$, function($val$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$);
  });
  return $rval$$;
};
goog.iter.some = function $goog$iter$some$($iterable$$, $f$$, $opt_obj$$) {
  $iterable$$ = goog.iter.toIterator($iterable$$);
  try {
    for (;;) {
      if ($f$$.call($opt_obj$$, $iterable$$.next(), void 0, $iterable$$)) {
        return !0;
      }
    }
  } catch ($ex$$) {
    if ($ex$$ !== goog.iter.StopIteration) {
      throw $ex$$;
    }
  }
  return !1;
};
goog.iter.every = function $goog$iter$every$($iterable$$, $f$$, $opt_obj$$) {
  $iterable$$ = goog.iter.toIterator($iterable$$);
  try {
    for (;;) {
      if (!$f$$.call($opt_obj$$, $iterable$$.next(), void 0, $iterable$$)) {
        return !1;
      }
    }
  } catch ($ex$$) {
    if ($ex$$ !== goog.iter.StopIteration) {
      throw $ex$$;
    }
  }
  return !0;
};
goog.iter.chain = function $goog$iter$chain$($var_args$$) {
  return goog.iter.chainFromIterable(arguments);
};
goog.iter.chainFromIterable = function $goog$iter$chainFromIterable$($iter_iterable$$) {
  var $iterator$$ = goog.iter.toIterator($iter_iterable$$);
  $iter_iterable$$ = new goog.iter.Iterator;
  var $current$$ = null;
  $iter_iterable$$.next = function $$iter_iterable$$$next$() {
    for (;;) {
      if (null == $current$$) {
        var $it$$ = $iterator$$.next();
        $current$$ = goog.iter.toIterator($it$$);
      }
      try {
        return $current$$.next();
      } catch ($ex$$) {
        if ($ex$$ !== goog.iter.StopIteration) {
          throw $ex$$;
        }
        $current$$ = null;
      }
    }
  };
  return $iter_iterable$$;
};
goog.iter.dropWhile = function $goog$iter$dropWhile$($iterable$$12_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$$12_newIter$$);
  $iterable$$12_newIter$$ = new goog.iter.Iterator;
  var $dropping$$ = !0;
  $iterable$$12_newIter$$.next = function $$iterable$$12_newIter$$$next$() {
    for (;;) {
      var $val$$ = $iterator$$.next();
      if (!$dropping$$ || !$f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
        return $dropping$$ = !1, $val$$;
      }
    }
  };
  return $iterable$$12_newIter$$;
};
goog.iter.takeWhile = function $goog$iter$takeWhile$($iter$$1_iterable$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iter$$1_iterable$$);
  $iter$$1_iterable$$ = new goog.iter.Iterator;
  $iter$$1_iterable$$.next = function $$iter$$1_iterable$$$next$() {
    var $val$$ = $iterator$$.next();
    if ($f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
      return $val$$;
    }
    throw goog.iter.StopIteration;
  };
  return $iter$$1_iterable$$;
};
goog.iter.toArray = function $goog$iter$toArray$($iterable$$) {
  if (goog.isArrayLike($iterable$$)) {
    return goog.array.toArray($iterable$$);
  }
  $iterable$$ = goog.iter.toIterator($iterable$$);
  var $array$$ = [];
  goog.iter.forEach($iterable$$, function($val$$) {
    $array$$.push($val$$);
  });
  return $array$$;
};
goog.iter.equals = function $goog$iter$equals$($iterable1_pairs$$, $iterable2$$, $opt_equalsFn$$) {
  $iterable1_pairs$$ = goog.iter.zipLongest({}, $iterable1_pairs$$, $iterable2$$);
  var $equalsFn$$ = $opt_equalsFn$$ || goog.array.defaultCompareEquality;
  return goog.iter.every($iterable1_pairs$$, function($pair$$) {
    return $equalsFn$$($pair$$[0], $pair$$[1]);
  });
};
goog.iter.nextOrValue = function $goog$iter$nextOrValue$($iterable$$, $defaultValue$$) {
  try {
    return goog.iter.toIterator($iterable$$).next();
  } catch ($e$$) {
    if ($e$$ != goog.iter.StopIteration) {
      throw $e$$;
    }
    return $defaultValue$$;
  }
};
goog.iter.product = function $goog$iter$product$($var_args$$) {
  if (goog.array.some(arguments, function($arr$$) {
    return !$arr$$.length;
  }) || !arguments.length) {
    return new goog.iter.Iterator;
  }
  var $iter$$ = new goog.iter.Iterator, $arrays$$ = arguments, $indicies$$ = goog.array.repeat(0, $arrays$$.length);
  $iter$$.next = function $$iter$$$next$() {
    if ($indicies$$) {
      for (var $retVal$$ = goog.array.map($indicies$$, function($valueIndex$$, $arrayIndex$$) {
        return $arrays$$[$arrayIndex$$][$valueIndex$$];
      }), $i$$ = $indicies$$.length - 1;0 <= $i$$;$i$$--) {
        goog.asserts.assert($indicies$$);
        if ($indicies$$[$i$$] < $arrays$$[$i$$].length - 1) {
          $indicies$$[$i$$]++;
          break;
        }
        if (0 == $i$$) {
          $indicies$$ = null;
          break;
        }
        $indicies$$[$i$$] = 0;
      }
      return $retVal$$;
    }
    throw goog.iter.StopIteration;
  };
  return $iter$$;
};
goog.iter.cycle = function $goog$iter$cycle$($iter$$3_iterable$$) {
  var $baseIterator$$ = goog.iter.toIterator($iter$$3_iterable$$), $cache$$ = [], $cacheIndex$$ = 0;
  $iter$$3_iterable$$ = new goog.iter.Iterator;
  var $useCache$$ = !1;
  $iter$$3_iterable$$.next = function $$iter$$3_iterable$$$next$() {
    var $returnElement$$ = null;
    if (!$useCache$$) {
      try {
        return $returnElement$$ = $baseIterator$$.next(), $cache$$.push($returnElement$$), $returnElement$$;
      } catch ($e$$) {
        if ($e$$ != goog.iter.StopIteration || goog.array.isEmpty($cache$$)) {
          throw $e$$;
        }
        $useCache$$ = !0;
      }
    }
    $returnElement$$ = $cache$$[$cacheIndex$$];
    $cacheIndex$$ = ($cacheIndex$$ + 1) % $cache$$.length;
    return $returnElement$$;
  };
  return $iter$$3_iterable$$;
};
goog.iter.count = function $goog$iter$count$($opt_start$$, $opt_step$$) {
  var $counter$$ = $opt_start$$ || 0, $step$$ = goog.isDef($opt_step$$) ? $opt_step$$ : 1, $iter$$ = new goog.iter.Iterator;
  $iter$$.next = function $$iter$$$next$() {
    var $returnValue$$ = $counter$$;
    $counter$$ += $step$$;
    return $returnValue$$;
  };
  return $iter$$;
};
goog.iter.repeat = function $goog$iter$repeat$($value$$) {
  var $iter$$ = new goog.iter.Iterator;
  $iter$$.next = goog.functions.constant($value$$);
  return $iter$$;
};
goog.iter.accumulate = function $goog$iter$accumulate$($iter$$6_iterable$$) {
  var $iterator$$ = goog.iter.toIterator($iter$$6_iterable$$), $total$$ = 0;
  $iter$$6_iterable$$ = new goog.iter.Iterator;
  $iter$$6_iterable$$.next = function $$iter$$6_iterable$$$next$() {
    return $total$$ += $iterator$$.next();
  };
  return $iter$$6_iterable$$;
};
goog.iter.zip = function $goog$iter$zip$($var_args$$) {
  var $args$$ = arguments, $iter$$ = new goog.iter.Iterator;
  if (0 < $args$$.length) {
    var $iterators$$ = goog.array.map($args$$, goog.iter.toIterator);
    $iter$$.next = function $$iter$$$next$() {
      return goog.array.map($iterators$$, function($it$$) {
        return $it$$.next();
      });
    };
  }
  return $iter$$;
};
goog.iter.zipLongest = function $goog$iter$zipLongest$($fillValue$$, $var_args$$) {
  var $args$$ = goog.array.slice(arguments, 1), $iter$$ = new goog.iter.Iterator;
  if (0 < $args$$.length) {
    var $iterators$$ = goog.array.map($args$$, goog.iter.toIterator);
    $iter$$.next = function $$iter$$$next$() {
      var $iteratorsHaveValues$$ = !1, $arr$$ = goog.array.map($iterators$$, function($it$$) {
        var $returnValue$$;
        try {
          $returnValue$$ = $it$$.next(), $iteratorsHaveValues$$ = !0;
        } catch ($ex$$) {
          if ($ex$$ !== goog.iter.StopIteration) {
            throw $ex$$;
          }
          $returnValue$$ = $fillValue$$;
        }
        return $returnValue$$;
      });
      if (!$iteratorsHaveValues$$) {
        throw goog.iter.StopIteration;
      }
      return $arr$$;
    };
  }
  return $iter$$;
};
goog.iter.compress = function $goog$iter$compress$($iterable$$, $selectors$$) {
  var $selectorIterator$$ = goog.iter.toIterator($selectors$$);
  return goog.iter.filter($iterable$$, function() {
    return !!$selectorIterator$$.next();
  });
};
goog.iter.GroupByIterator_ = function $goog$iter$GroupByIterator_$($iterable$$, $opt_keyFunc$$) {
  this.iterator = goog.iter.toIterator($iterable$$);
  this.keyFunc = $opt_keyFunc$$ || goog.functions.identity;
};
goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator);
goog.iter.GroupByIterator_.prototype.next = function $goog$iter$GroupByIterator_$$next$() {
  for (;this.currentKey == this.targetKey;) {
    this.currentValue = this.iterator.next(), this.currentKey = this.keyFunc(this.currentValue);
  }
  this.targetKey = this.currentKey;
  return [this.currentKey, this.groupItems_(this.targetKey)];
};
goog.iter.GroupByIterator_.prototype.groupItems_ = function $goog$iter$GroupByIterator_$$groupItems_$($targetKey$$) {
  for (var $arr$$ = [];this.currentKey == $targetKey$$;) {
    $arr$$.push(this.currentValue);
    try {
      this.currentValue = this.iterator.next();
    } catch ($ex$$) {
      if ($ex$$ !== goog.iter.StopIteration) {
        throw $ex$$;
      }
      break;
    }
    this.currentKey = this.keyFunc(this.currentValue);
  }
  return $arr$$;
};
goog.iter.groupBy = function $goog$iter$groupBy$($iterable$$, $opt_keyFunc$$) {
  return new goog.iter.GroupByIterator_($iterable$$, $opt_keyFunc$$);
};
goog.iter.starMap = function $goog$iter$starMap$($iter$$9_iterable$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iter$$9_iterable$$);
  $iter$$9_iterable$$ = new goog.iter.Iterator;
  $iter$$9_iterable$$.next = function $$iter$$9_iterable$$$next$() {
    var $args$$ = goog.iter.toArray($iterator$$.next());
    return $f$$.apply($opt_obj$$, goog.array.concat($args$$, void 0, $iterator$$));
  };
  return $iter$$9_iterable$$;
};
goog.iter.tee = function $goog$iter$tee$($iterable$$, $opt_num$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$$), $num$$ = goog.isNumber($opt_num$$) ? $opt_num$$ : 2, $buffers$$ = goog.array.map(goog.array.range($num$$), function() {
    return [];
  }), $addNextIteratorValueToBuffers$$ = function $$addNextIteratorValueToBuffers$$$() {
    var $val$$ = $iterator$$.next();
    goog.array.forEach($buffers$$, function($buffer$$) {
      $buffer$$.push($val$$);
    });
  };
  return goog.array.map($buffers$$, function($buffer$$) {
    var $iter$$ = new goog.iter.Iterator;
    $iter$$.next = function $$iter$$$next$() {
      goog.array.isEmpty($buffer$$) && $addNextIteratorValueToBuffers$$();
      goog.asserts.assert(!goog.array.isEmpty($buffer$$));
      return $buffer$$.shift();
    };
    return $iter$$;
  });
};
goog.iter.enumerate = function $goog$iter$enumerate$($iterable$$, $opt_start$$) {
  return goog.iter.zip(goog.iter.count($opt_start$$), $iterable$$);
};
goog.iter.limit = function $goog$iter$limit$($iterable$$, $limitSize$$) {
  goog.asserts.assert(goog.math.isInt($limitSize$$) && 0 <= $limitSize$$);
  var $iterator$$ = goog.iter.toIterator($iterable$$), $iter$$ = new goog.iter.Iterator, $remaining$$ = $limitSize$$;
  $iter$$.next = function $$iter$$$next$() {
    if (0 < $remaining$$--) {
      return $iterator$$.next();
    }
    throw goog.iter.StopIteration;
  };
  return $iter$$;
};
goog.iter.consume = function $goog$iter$consume$($iterable$$, $count$$) {
  goog.asserts.assert(goog.math.isInt($count$$) && 0 <= $count$$);
  for (var $iterator$$ = goog.iter.toIterator($iterable$$);0 < $count$$--;) {
    goog.iter.nextOrValue($iterator$$, null);
  }
  return $iterator$$;
};
goog.iter.slice = function $goog$iter$slice$($iterable$$26_iterator$$, $start$$, $opt_end$$) {
  goog.asserts.assert(goog.math.isInt($start$$) && 0 <= $start$$);
  $iterable$$26_iterator$$ = goog.iter.consume($iterable$$26_iterator$$, $start$$);
  goog.isNumber($opt_end$$) && (goog.asserts.assert(goog.math.isInt($opt_end$$) && $opt_end$$ >= $start$$), $iterable$$26_iterator$$ = goog.iter.limit($iterable$$26_iterator$$, $opt_end$$ - $start$$));
  return $iterable$$26_iterator$$;
};
goog.iter.hasDuplicates_ = function $goog$iter$hasDuplicates_$($arr$$) {
  var $deduped$$ = [];
  goog.array.removeDuplicates($arr$$, $deduped$$);
  return $arr$$.length != $deduped$$.length;
};
goog.iter.permutations = function $goog$iter$permutations$($iterable$$, $opt_length$$) {
  var $elements_product_sets$$ = goog.iter.toArray($iterable$$), $length$$ = goog.isNumber($opt_length$$) ? $opt_length$$ : $elements_product_sets$$.length, $elements_product_sets$$ = goog.array.repeat($elements_product_sets$$, $length$$), $elements_product_sets$$ = goog.iter.product.apply(void 0, $elements_product_sets$$);
  return goog.iter.filter($elements_product_sets$$, function($arr$$) {
    return !goog.iter.hasDuplicates_($arr$$);
  });
};
goog.iter.combinations = function $goog$iter$combinations$($iterable$$, $length$$) {
  function $getIndexFromElements$$($index$$) {
    return $elements$$[$index$$];
  }
  var $elements$$ = goog.iter.toArray($iterable$$), $indexIterator_indexes_iter$$ = goog.iter.range($elements$$.length), $indexIterator_indexes_iter$$ = goog.iter.permutations($indexIterator_indexes_iter$$, $length$$), $sortedIndexIterator$$ = goog.iter.filter($indexIterator_indexes_iter$$, function($arr$$) {
    return goog.array.isSorted($arr$$);
  }), $indexIterator_indexes_iter$$ = new goog.iter.Iterator;
  $indexIterator_indexes_iter$$.next = function $$indexIterator_indexes_iter$$$next$() {
    return goog.array.map($sortedIndexIterator$$.next(), $getIndexFromElements$$);
  };
  return $indexIterator_indexes_iter$$;
};
goog.iter.combinationsWithReplacement = function $goog$iter$combinationsWithReplacement$($iterable$$, $length$$) {
  function $getIndexFromElements$$($index$$) {
    return $elements$$[$index$$];
  }
  var $elements$$ = goog.iter.toArray($iterable$$), $indexIterator$$1_indexes$$1_iter$$13_sets$$ = goog.array.range($elements$$.length), $indexIterator$$1_indexes$$1_iter$$13_sets$$ = goog.array.repeat($indexIterator$$1_indexes$$1_iter$$13_sets$$, $length$$), $indexIterator$$1_indexes$$1_iter$$13_sets$$ = goog.iter.product.apply(void 0, $indexIterator$$1_indexes$$1_iter$$13_sets$$), $sortedIndexIterator$$ = goog.iter.filter($indexIterator$$1_indexes$$1_iter$$13_sets$$, function($arr$$) {
    return goog.array.isSorted($arr$$);
  }), $indexIterator$$1_indexes$$1_iter$$13_sets$$ = new goog.iter.Iterator;
  $indexIterator$$1_indexes$$1_iter$$13_sets$$.next = function $$indexIterator$$1_indexes$$1_iter$$13_sets$$$next$() {
    return goog.array.map($sortedIndexIterator$$.next(), $getIndexFromElements$$);
  };
  return $indexIterator$$1_indexes$$1_iter$$13_sets$$;
};
goog.labs.userAgent.platform = {};
goog.labs.userAgent.platform.isAndroid = function $goog$labs$userAgent$platform$isAndroid$() {
  return goog.labs.userAgent.util.matchUserAgent("Android");
};
goog.labs.userAgent.platform.isIpod = function $goog$labs$userAgent$platform$isIpod$() {
  return goog.labs.userAgent.util.matchUserAgent("iPod");
};
goog.labs.userAgent.platform.isIphone = function $goog$labs$userAgent$platform$isIphone$() {
  return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIpad = function $goog$labs$userAgent$platform$isIpad$() {
  return goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIos = function $goog$labs$userAgent$platform$isIos$() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
};
goog.labs.userAgent.platform.isMacintosh = function $goog$labs$userAgent$platform$isMacintosh$() {
  return goog.labs.userAgent.util.matchUserAgent("Macintosh");
};
goog.labs.userAgent.platform.isLinux = function $goog$labs$userAgent$platform$isLinux$() {
  return goog.labs.userAgent.util.matchUserAgent("Linux");
};
goog.labs.userAgent.platform.isWindows = function $goog$labs$userAgent$platform$isWindows$() {
  return goog.labs.userAgent.util.matchUserAgent("Windows");
};
goog.labs.userAgent.platform.isChromeOS = function $goog$labs$userAgent$platform$isChromeOS$() {
  return goog.labs.userAgent.util.matchUserAgent("CrOS");
};
goog.labs.userAgent.platform.getVersion = function $goog$labs$userAgent$platform$getVersion$() {
  var $match$$4_userAgentString$$ = goog.labs.userAgent.util.getUserAgent(), $re$$2_version$$ = "";
  goog.labs.userAgent.platform.isWindows() ? ($re$$2_version$$ = /Windows (?:NT|Phone) ([0-9.]+)/, $re$$2_version$$ = ($match$$4_userAgentString$$ = $re$$2_version$$.exec($match$$4_userAgentString$$)) ? $match$$4_userAgentString$$[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? ($re$$2_version$$ = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, $re$$2_version$$ = ($match$$4_userAgentString$$ = $re$$2_version$$.exec($match$$4_userAgentString$$)) && $match$$4_userAgentString$$[1].replace(/_/g, ".")) : 
  goog.labs.userAgent.platform.isMacintosh() ? ($re$$2_version$$ = /Mac OS X ([0-9_.]+)/, $re$$2_version$$ = ($match$$4_userAgentString$$ = $re$$2_version$$.exec($match$$4_userAgentString$$)) ? $match$$4_userAgentString$$[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isAndroid() ? ($re$$2_version$$ = /Android\s+([^\);]+)(\)|;)/, $re$$2_version$$ = ($match$$4_userAgentString$$ = $re$$2_version$$.exec($match$$4_userAgentString$$)) && $match$$4_userAgentString$$[1]) : goog.labs.userAgent.platform.isChromeOS() && 
  ($re$$2_version$$ = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, $re$$2_version$$ = ($match$$4_userAgentString$$ = $re$$2_version$$.exec($match$$4_userAgentString$$)) && $match$$4_userAgentString$$[1]);
  return $re$$2_version$$ || "";
};
goog.labs.userAgent.platform.isVersionOrHigher = function $goog$labs$userAgent$platform$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), $version$$);
};
goog.Thenable = function $goog$Thenable$() {
};
goog.Thenable.prototype.then = function $goog$Thenable$$then$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
};
goog.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable";
goog.Thenable.addImplementation = function $goog$Thenable$addImplementation$($ctor$$) {
  goog.exportProperty($ctor$$.prototype, "then", $ctor$$.prototype.then);
  COMPILED ? $ctor$$.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = !0 : $ctor$$.prototype.$goog_Thenable = !0;
};
goog.Thenable.isImplementedBy = function $goog$Thenable$isImplementedBy$($object$$) {
  if (!$object$$) {
    return !1;
  }
  try {
    return COMPILED ? !!$object$$[goog.Thenable.IMPLEMENTED_BY_PROP] : !!$object$$.$goog_Thenable;
  } catch ($e$$) {
    return !1;
  }
};
goog.promise = {};
goog.promise.Resolver = function $goog$promise$Resolver$() {
};
goog.Promise = function $goog$Promise$($resolver$$, $opt_context$$) {
  this.state_ = goog.Promise.State_.PENDING;
  this.result_ = void 0;
  this.callbackEntriesTail_ = this.callbackEntries_ = this.parent_ = null;
  this.executing_ = !1;
  0 < goog.Promise.UNHANDLED_REJECTION_DELAY ? this.unhandledRejectionId_ = 0 : 0 == goog.Promise.UNHANDLED_REJECTION_DELAY && (this.hadUnhandledRejection_ = !1);
  goog.Promise.LONG_STACK_TRACES && (this.stack_ = [], this.addStackTrace_(Error("created")), this.currentStep_ = 0);
  if ($resolver$$ != goog.nullFunction) {
    try {
      var $self$$ = this;
      $resolver$$.call($opt_context$$, function($value$$) {
        $self$$.resolve_(goog.Promise.State_.FULFILLED, $value$$);
      }, function($reason$$) {
        if (goog.DEBUG && !($reason$$ instanceof goog.Promise.CancellationError)) {
          try {
            if ($reason$$ instanceof Error) {
              throw $reason$$;
            }
            throw Error("Promise rejected.");
          } catch ($e$$) {
          }
        }
        $self$$.resolve_(goog.Promise.State_.REJECTED, $reason$$);
      });
    } catch ($e$$) {
      this.resolve_(goog.Promise.State_.REJECTED, $e$$);
    }
  }
};
goog.Promise.LONG_STACK_TRACES = !1;
goog.Promise.UNHANDLED_REJECTION_DELAY = 0;
goog.Promise.State_ = {PENDING:0, BLOCKED:1, FULFILLED:2, REJECTED:3};
goog.Promise.CallbackEntry_ = function $goog$Promise$CallbackEntry_$() {
  this.next = this.context = this.onRejected = this.onFulfilled = this.child = null;
  this.always = !1;
};
goog.Promise.CallbackEntry_.prototype.reset = function $goog$Promise$CallbackEntry_$$reset$() {
  this.context = this.onRejected = this.onFulfilled = this.child = null;
  this.always = !1;
};
goog.Promise.DEFAULT_MAX_UNUSED = 100;
goog.Promise.freelist_ = new goog.async.FreeList(function() {
  return new goog.Promise.CallbackEntry_;
}, function($item$$) {
  $item$$.reset();
}, goog.Promise.DEFAULT_MAX_UNUSED);
goog.Promise.getCallbackEntry_ = function $goog$Promise$getCallbackEntry_$($onFulfilled$$, $onRejected$$, $context$$) {
  var $entry$$ = goog.Promise.freelist_.get();
  $entry$$.onFulfilled = $onFulfilled$$;
  $entry$$.onRejected = $onRejected$$;
  $entry$$.context = $context$$;
  return $entry$$;
};
goog.Promise.returnEntry_ = function $goog$Promise$returnEntry_$($entry$$) {
  goog.Promise.freelist_.put($entry$$);
};
goog.Promise.resolve = function $goog$Promise$resolve$($opt_value$$) {
  if ($opt_value$$ instanceof goog.Promise) {
    return $opt_value$$;
  }
  var $promise$$ = new goog.Promise(goog.nullFunction);
  $promise$$.resolve_(goog.Promise.State_.FULFILLED, $opt_value$$);
  return $promise$$;
};
goog.Promise.reject = function $goog$Promise$reject$($opt_reason$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    $reject$$($opt_reason$$);
  });
};
goog.Promise.resolveThen_ = function $goog$Promise$resolveThen_$($value$$, $onFulfilled$$, $onRejected$$) {
  goog.Promise.maybeThen_($value$$, $onFulfilled$$, $onRejected$$, null) || goog.async.run(goog.partial($onFulfilled$$, $value$$));
};
goog.Promise.race = function $goog$Promise$race$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    $promises$$.length || $resolve$$(void 0);
    for (var $i$$ = 0, $promise$$;$i$$ < $promises$$.length;$i$$++) {
      $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, $resolve$$, $reject$$);
    }
  });
};
goog.Promise.all = function $goog$Promise$all$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $toFulfill$$ = $promises$$.length, $values$$ = [];
    if ($toFulfill$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($index$$, $value$$) {
        $toFulfill$$--;
        $values$$[$index$$] = $value$$;
        0 == $toFulfill$$ && $resolve$$($values$$);
      }, $onReject$$ = function $$onReject$$$($reason$$) {
        $reject$$($reason$$);
      }, $i$$ = 0, $promise$$;$i$$ < $promises$$.length;$i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, goog.partial($onFulfill$$, $i$$), $onReject$$);
      }
    } else {
      $resolve$$($values$$);
    }
  });
};
goog.Promise.allSettled = function $goog$Promise$allSettled$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $toSettle$$ = $promises$$.length, $results$$ = [];
    if ($toSettle$$) {
      for (var $onSettled$$ = function $$onSettled$$$($index$$, $fulfilled$$, $result$$) {
        $toSettle$$--;
        $results$$[$index$$] = $fulfilled$$ ? {fulfilled:!0, value:$result$$} : {fulfilled:!1, reason:$result$$};
        0 == $toSettle$$ && $resolve$$($results$$);
      }, $i$$ = 0, $promise$$;$i$$ < $promises$$.length;$i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, goog.partial($onSettled$$, $i$$, !0), goog.partial($onSettled$$, $i$$, !1));
      }
    } else {
      $resolve$$($results$$);
    }
  });
};
goog.Promise.firstFulfilled = function $goog$Promise$firstFulfilled$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $toReject$$ = $promises$$.length, $reasons$$ = [];
    if ($toReject$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($value$$) {
        $resolve$$($value$$);
      }, $onReject$$ = function $$onReject$$$($index$$, $reason$$) {
        $toReject$$--;
        $reasons$$[$index$$] = $reason$$;
        0 == $toReject$$ && $reject$$($reasons$$);
      }, $i$$ = 0, $promise$$;$i$$ < $promises$$.length;$i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, $onFulfill$$, goog.partial($onReject$$, $i$$));
      }
    } else {
      $resolve$$(void 0);
    }
  });
};
goog.Promise.withResolver = function $goog$Promise$withResolver$() {
  var $resolve$$, $reject$$, $promise$$ = new goog.Promise(function($rs$$, $rj$$) {
    $resolve$$ = $rs$$;
    $reject$$ = $rj$$;
  });
  return new goog.Promise.Resolver_($promise$$, $resolve$$, $reject$$);
};
goog.Promise.prototype.then = function $goog$Promise$$then$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
  null != $opt_onFulfilled$$ && goog.asserts.assertFunction($opt_onFulfilled$$, "opt_onFulfilled should be a function.");
  null != $opt_onRejected$$ && goog.asserts.assertFunction($opt_onRejected$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
  return this.addChildPromise_(goog.isFunction($opt_onFulfilled$$) ? $opt_onFulfilled$$ : null, goog.isFunction($opt_onRejected$$) ? $opt_onRejected$$ : null, $opt_context$$);
};
goog.Thenable.addImplementation(goog.Promise);
goog.Promise.prototype.thenVoid = function $goog$Promise$$thenVoid$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
  null != $opt_onFulfilled$$ && goog.asserts.assertFunction($opt_onFulfilled$$, "opt_onFulfilled should be a function.");
  null != $opt_onRejected$$ && goog.asserts.assertFunction($opt_onRejected$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
  this.addCallbackEntry_(goog.Promise.getCallbackEntry_($opt_onFulfilled$$ || goog.nullFunction, $opt_onRejected$$ || null, $opt_context$$));
};
goog.Promise.prototype.thenAlways = function $goog$Promise$$thenAlways$($onSettled$$, $opt_context$$) {
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenAlways"));
  var $entry$$ = goog.Promise.getCallbackEntry_($onSettled$$, $onSettled$$, $opt_context$$);
  $entry$$.always = !0;
  this.addCallbackEntry_($entry$$);
  return this;
};
goog.Promise.prototype.thenCatch = function $goog$Promise$$thenCatch$($onRejected$$, $opt_context$$) {
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenCatch"));
  return this.addChildPromise_(null, $onRejected$$, $opt_context$$);
};
goog.Promise.prototype.cancel = function $goog$Promise$$cancel$($opt_message$$) {
  this.state_ == goog.Promise.State_.PENDING && goog.async.run(function() {
    var $err$$ = new goog.Promise.CancellationError($opt_message$$);
    this.cancelInternal_($err$$);
  }, this);
};
goog.Promise.prototype.cancelInternal_ = function $goog$Promise$$cancelInternal_$($err$$) {
  this.state_ == goog.Promise.State_.PENDING && (this.parent_ ? (this.parent_.cancelChild_(this, $err$$), this.parent_ = null) : this.resolve_(goog.Promise.State_.REJECTED, $err$$));
};
goog.Promise.prototype.cancelChild_ = function $goog$Promise$$cancelChild_$($childPromise$$, $err$$) {
  if (this.callbackEntries_) {
    for (var $childCount$$ = 0, $childEntry$$ = null, $beforeChildEntry$$ = null, $entry$$ = this.callbackEntries_;$entry$$ && ($entry$$.always || ($childCount$$++, $entry$$.child == $childPromise$$ && ($childEntry$$ = $entry$$), !($childEntry$$ && 1 < $childCount$$)));$entry$$ = $entry$$.next) {
      $childEntry$$ || ($beforeChildEntry$$ = $entry$$);
    }
    $childEntry$$ && (this.state_ == goog.Promise.State_.PENDING && 1 == $childCount$$ ? this.cancelInternal_($err$$) : ($beforeChildEntry$$ ? this.removeEntryAfter_($beforeChildEntry$$) : this.popEntry_(), this.executeCallback_($childEntry$$, goog.Promise.State_.REJECTED, $err$$)));
  }
};
goog.Promise.prototype.addCallbackEntry_ = function $goog$Promise$$addCallbackEntry_$($callbackEntry$$) {
  this.hasEntry_() || this.state_ != goog.Promise.State_.FULFILLED && this.state_ != goog.Promise.State_.REJECTED || this.scheduleCallbacks_();
  this.queueEntry_($callbackEntry$$);
};
goog.Promise.prototype.addChildPromise_ = function $goog$Promise$$addChildPromise_$($onFulfilled$$, $onRejected$$, $opt_context$$) {
  var $callbackEntry$$ = goog.Promise.getCallbackEntry_(null, null, null);
  $callbackEntry$$.child = new goog.Promise(function($resolve$$, $reject$$) {
    $callbackEntry$$.onFulfilled = $onFulfilled$$ ? function($value$$) {
      try {
        var $result$$ = $onFulfilled$$.call($opt_context$$, $value$$);
        $resolve$$($result$$);
      } catch ($err$$) {
        $reject$$($err$$);
      }
    } : $resolve$$;
    $callbackEntry$$.onRejected = $onRejected$$ ? function($reason$$) {
      try {
        var $result$$ = $onRejected$$.call($opt_context$$, $reason$$);
        !goog.isDef($result$$) && $reason$$ instanceof goog.Promise.CancellationError ? $reject$$($reason$$) : $resolve$$($result$$);
      } catch ($err$$) {
        $reject$$($err$$);
      }
    } : $reject$$;
  });
  $callbackEntry$$.child.parent_ = this;
  this.addCallbackEntry_($callbackEntry$$);
  return $callbackEntry$$.child;
};
goog.Promise.prototype.unblockAndFulfill_ = function $goog$Promise$$unblockAndFulfill_$($value$$) {
  goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
  this.state_ = goog.Promise.State_.PENDING;
  this.resolve_(goog.Promise.State_.FULFILLED, $value$$);
};
goog.Promise.prototype.unblockAndReject_ = function $goog$Promise$$unblockAndReject_$($reason$$) {
  goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
  this.state_ = goog.Promise.State_.PENDING;
  this.resolve_(goog.Promise.State_.REJECTED, $reason$$);
};
goog.Promise.prototype.resolve_ = function $goog$Promise$$resolve_$($state$$, $x$$) {
  this.state_ == goog.Promise.State_.PENDING &&
      (this == $x$$ && ($state$$ = goog.Promise.State_.REJECTED, 
        $x$$ = new TypeError("Promise cannot resolve to itself")), 
        this.state_ = goog.Promise.State_.BLOCKED, 
       goog.Promise.maybeThen_($x$$, this.unblockAndFulfill_, this.unblockAndReject_, this) || 
       (this.result_ = $x$$, this.state_ = $state$$, this.parent_ = null, this.scheduleCallbacks_(), $state$$ != goog.Promise.State_.REJECTED || $x$$ instanceof goog.Promise.CancellationError || goog.Promise.addUnhandledRejection_(this, 
  $x$$)));
};
goog.Promise.maybeThen_ = function $goog$Promise$maybeThen_$($value$$, $onFulfilled$$, $onRejected$$, $context$$) {
  if ($value$$ instanceof goog.Promise) {
    return $value$$.thenVoid($onFulfilled$$, $onRejected$$, $context$$), !0;
  }
  if (goog.Thenable.isImplementedBy($value$$)) {
    return $value$$.then($onFulfilled$$, $onRejected$$, $context$$), !0;
  }
  if (goog.isObject($value$$)) {
    try {
      var $then$$ = $value$$.then;
      if (goog.isFunction($then$$)) {
        return goog.Promise.tryThen_($value$$, $then$$, $onFulfilled$$, $onRejected$$, $context$$), !0;
      }
    } catch ($e$$) {
      return $onRejected$$.call($context$$, $e$$), !0;
    }
  }
  return !1;
};
goog.Promise.tryThen_ = function $goog$Promise$tryThen_$($thenable$$, $then$$, $onFulfilled$$, $onRejected$$, $context$$) {
  var $called$$ = !1, $resolve$$ = function $$resolve$$$($value$$) {
    $called$$ || ($called$$ = !0, $onFulfilled$$.call($context$$, $value$$));
  }, $reject$$ = function $$reject$$$($reason$$) {
    $called$$ || ($called$$ = !0, $onRejected$$.call($context$$, $reason$$));
  };
  try {
    $then$$.call($thenable$$, $resolve$$, $reject$$);
  } catch ($e$$) {
    $reject$$($e$$);
  }
};
goog.Promise.prototype.scheduleCallbacks_ = function $goog$Promise$$scheduleCallbacks_$() {
  this.executing_ || (this.executing_ = !0, goog.async.run(this.executeCallbacks_, this));
};
goog.Promise.prototype.hasEntry_ = function $goog$Promise$$hasEntry_$() {
  return !!this.callbackEntries_;
};
goog.Promise.prototype.queueEntry_ = function $goog$Promise$$queueEntry_$($entry$$) {
  goog.asserts.assert(null != $entry$$.onFulfilled);
  this.callbackEntriesTail_ ? this.callbackEntriesTail_.next = $entry$$ : this.callbackEntries_ = $entry$$;
  this.callbackEntriesTail_ = $entry$$;
};
goog.Promise.prototype.popEntry_ = function $goog$Promise$$popEntry_$() {
  var $entry$$ = null;
  this.callbackEntries_ && ($entry$$ = this.callbackEntries_, this.callbackEntries_ = $entry$$.next, $entry$$.next = null);
  this.callbackEntries_ || (this.callbackEntriesTail_ = null);
  null != $entry$$ && goog.asserts.assert(null != $entry$$.onFulfilled);
  return $entry$$;
};
goog.Promise.prototype.removeEntryAfter_ = function $goog$Promise$$removeEntryAfter_$($previous$$) {
  goog.asserts.assert(this.callbackEntries_);
  goog.asserts.assert(null != $previous$$);
  $previous$$.next == this.callbackEntriesTail_ && (this.callbackEntriesTail_ = $previous$$);
  $previous$$.next = $previous$$.next.next;
};
goog.Promise.prototype.executeCallbacks_ = function $goog$Promise$$executeCallbacks_$() {
  for (var $entry$$ = null;$entry$$ = this.popEntry_();) {
    goog.Promise.LONG_STACK_TRACES && this.currentStep_++, this.executeCallback_($entry$$, this.state_, this.result_);
  }
  this.executing_ = !1;
};
goog.Promise.prototype.executeCallback_ = function $goog$Promise$$executeCallback_$($callbackEntry$$, $state$$, $result$$) {
  $state$$ == goog.Promise.State_.REJECTED && $callbackEntry$$.onRejected && !$callbackEntry$$.always && this.removeUnhandledRejection_();
  if ($callbackEntry$$.child) {
    $callbackEntry$$.child.parent_ = null, goog.Promise.invokeCallback_($callbackEntry$$, $state$$, $result$$);
  } else {
    try {
      $callbackEntry$$.always ? $callbackEntry$$.onFulfilled.call($callbackEntry$$.context) : goog.Promise.invokeCallback_($callbackEntry$$, $state$$, $result$$);
    } catch ($err$$) {
      goog.Promise.handleRejection_.call(null, $err$$);
    }
  }
  goog.Promise.returnEntry_($callbackEntry$$);
};
goog.Promise.invokeCallback_ = function $goog$Promise$invokeCallback_$($callbackEntry$$, $state$$, $result$$) {
  $state$$ == goog.Promise.State_.FULFILLED ? $callbackEntry$$.onFulfilled.call($callbackEntry$$.context, $result$$) : $callbackEntry$$.onRejected && $callbackEntry$$.onRejected.call($callbackEntry$$.context, $result$$);
};
goog.Promise.prototype.addStackTrace_ = function $goog$Promise$$addStackTrace_$($err$$7_message$$) {
  if (goog.Promise.LONG_STACK_TRACES && goog.isString($err$$7_message$$.stack)) {
    var $trace$$ = $err$$7_message$$.stack.split("\n", 4)[3];
    $err$$7_message$$ = $err$$7_message$$.message;
    $err$$7_message$$ += Array(11 - $err$$7_message$$.length).join(" ");
    this.stack_.push($err$$7_message$$ + $trace$$);
  }
};
goog.Promise.prototype.appendLongStack_ = function $goog$Promise$$appendLongStack_$($err$$) {
  if (goog.Promise.LONG_STACK_TRACES && $err$$ && goog.isString($err$$.stack) && this.stack_.length) {
    for (var $longTrace$$ = ["Promise trace:"], $promise$$ = this;$promise$$;$promise$$ = $promise$$.parent_) {
      for (var $i$$ = this.currentStep_;0 <= $i$$;$i$$--) {
        $longTrace$$.push($promise$$.stack_[$i$$]);
      }
      $longTrace$$.push("Value: [" + ($promise$$.state_ == goog.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] <" + String($promise$$.result_) + ">");
    }
    $err$$.stack += "\n\n" + $longTrace$$.join("\n");
  }
};
goog.Promise.prototype.removeUnhandledRejection_ = function $goog$Promise$$removeUnhandledRejection_$() {
  if (0 < goog.Promise.UNHANDLED_REJECTION_DELAY) {
    for (var $p$$ = this;$p$$ && $p$$.unhandledRejectionId_;$p$$ = $p$$.parent_) {
      goog.global.clearTimeout($p$$.unhandledRejectionId_), $p$$.unhandledRejectionId_ = 0;
    }
  } else {
    if (0 == goog.Promise.UNHANDLED_REJECTION_DELAY) {
      for ($p$$ = this;$p$$ && $p$$.hadUnhandledRejection_;$p$$ = $p$$.parent_) {
        $p$$.hadUnhandledRejection_ = !1;
      }
    }
  }
};
goog.Promise.addUnhandledRejection_ = function $goog$Promise$addUnhandledRejection_$($promise$$, $reason$$) {
  0 < goog.Promise.UNHANDLED_REJECTION_DELAY ? $promise$$.unhandledRejectionId_ = goog.global.setTimeout(function() {
    $promise$$.appendLongStack_($reason$$);
    goog.Promise.handleRejection_.call(null, $reason$$);
  }, goog.Promise.UNHANDLED_REJECTION_DELAY) : 0 == goog.Promise.UNHANDLED_REJECTION_DELAY && ($promise$$.hadUnhandledRejection_ = !0, goog.async.run(function() {
    $promise$$.hadUnhandledRejection_ && ($promise$$.appendLongStack_($reason$$), goog.Promise.handleRejection_.call(null, $reason$$));
  }));
};
goog.Promise.handleRejection_ = goog.async.throwException;
goog.Promise.setUnhandledRejectionHandler = function $goog$Promise$setUnhandledRejectionHandler$($handler$$) {
  goog.Promise.handleRejection_ = $handler$$;
};
goog.Promise.CancellationError = function $goog$Promise$CancellationError$($opt_message$$) {
  goog.debug.Error.call(this, $opt_message$$);
};
goog.inherits(goog.Promise.CancellationError, goog.debug.Error);
goog.Promise.CancellationError.prototype.name = "cancel";
goog.Promise.Resolver_ = function $goog$Promise$Resolver_$($promise$$, $resolve$$, $reject$$) {
  this.promise = $promise$$;
  this.resolve = $resolve$$;
  this.reject = $reject$$;
};
goog.structs = {};
goog.structs.Map = function $goog$structs$Map$($opt_map$$, $var_args$$) {
  this.map_ = {};
  this.keys_ = [];
  this.version_ = this.count_ = 0;
  var $argLength$$ = arguments.length;
  if (1 < $argLength$$) {
    if ($argLength$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$$ = 0;$i$$ < $argLength$$;$i$$ += 2) {
      this.set(arguments[$i$$], arguments[$i$$ + 1]);
    }
  } else {
    $opt_map$$ && this.addAll($opt_map$$);
  }
};
goog.structs.Map.prototype.getCount = function $goog$structs$Map$$getCount$() {
  return this.count_;
};
goog.structs.Map.prototype.getValues = function $goog$structs$Map$$getValues$() {
  this.cleanupKeysArray_();
  for (var $rv$$ = [], $i$$ = 0;$i$$ < this.keys_.length;$i$$++) {
    $rv$$.push(this.map_[this.keys_[$i$$]]);
  }
  return $rv$$;
};
goog.structs.Map.prototype.getKeys = function $goog$structs$Map$$getKeys$() {
  this.cleanupKeysArray_();
  return this.keys_.concat();
};
goog.structs.Map.prototype.containsKey = function $goog$structs$Map$$containsKey$($key$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$);
};
goog.structs.Map.prototype.containsValue = function $goog$structs$Map$$containsValue$($val$$) {
  for (var $i$$ = 0;$i$$ < this.keys_.length;$i$$++) {
    var $key$$ = this.keys_[$i$$];
    if (goog.structs.Map.hasKey_(this.map_, $key$$) && this.map_[$key$$] == $val$$) {
      return !0;
    }
  }
  return !1;
};
goog.structs.Map.prototype.equals = function $goog$structs$Map$$equals$($otherMap$$, $opt_equalityFn$$) {
  if (this === $otherMap$$) {
    return !0;
  }
  if (this.count_ != $otherMap$$.getCount()) {
    return !1;
  }
  var $equalityFn$$ = $opt_equalityFn$$ || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for (var $key$$, $i$$ = 0;$key$$ = this.keys_[$i$$];$i$$++) {
    if (!$equalityFn$$(this.get($key$$), $otherMap$$.get($key$$))) {
      return !1;
    }
  }
  return !0;
};
goog.structs.Map.defaultEquals = function $goog$structs$Map$defaultEquals$($a$$, $b$$) {
  return $a$$ === $b$$;
};
goog.structs.Map.prototype.isEmpty = function $goog$structs$Map$$isEmpty$() {
  return 0 == this.count_;
};
goog.structs.Map.prototype.clear = function $goog$structs$Map$$clear$() {
  this.map_ = {};
  this.version_ = this.count_ = this.keys_.length = 0;
};
goog.structs.Map.prototype.remove = function $goog$structs$Map$$remove$($key$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$) ? (delete this.map_[$key$$], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1;
};
goog.structs.Map.prototype.cleanupKeysArray_ = function $goog$structs$Map$$cleanupKeysArray_$() {
  if (this.count_ != this.keys_.length) {
    for (var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < this.keys_.length;) {
      var $key$$ = this.keys_[$srcIndex$$];
      goog.structs.Map.hasKey_(this.map_, $key$$) && (this.keys_[$destIndex$$++] = $key$$);
      $srcIndex$$++;
    }
    this.keys_.length = $destIndex$$;
  }
  if (this.count_ != this.keys_.length) {
    for (var $seen$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < this.keys_.length;) {
      $key$$ = this.keys_[$srcIndex$$], goog.structs.Map.hasKey_($seen$$, $key$$) || (this.keys_[$destIndex$$++] = $key$$, $seen$$[$key$$] = 1), $srcIndex$$++;
    }
    this.keys_.length = $destIndex$$;
  }
};
goog.structs.Map.prototype.get = function $goog$structs$Map$$get$($key$$, $opt_val$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$) ? this.map_[$key$$] : $opt_val$$;
};
goog.structs.Map.prototype.set = function $goog$structs$Map$$set$($key$$, $value$$) {
  goog.structs.Map.hasKey_(this.map_, $key$$) || (this.count_++, this.keys_.push($key$$), this.version_++);
  this.map_[$key$$] = $value$$;
};
goog.structs.Map.prototype.addAll = function $goog$structs$Map$$addAll$($map_values$$) {
  var $keys$$;
  $map_values$$ instanceof goog.structs.Map ? ($keys$$ = $map_values$$.getKeys(), $map_values$$ = $map_values$$.getValues()) : ($keys$$ = goog.object.getKeys($map_values$$), $map_values$$ = goog.object.getValues($map_values$$));
  for (var $i$$ = 0;$i$$ < $keys$$.length;$i$$++) {
    this.set($keys$$[$i$$], $map_values$$[$i$$]);
  }
};
goog.structs.Map.prototype.forEach = function $goog$structs$Map$$forEach$($f$$, $opt_obj$$) {
  for (var $keys$$ = this.getKeys(), $i$$ = 0;$i$$ < $keys$$.length;$i$$++) {
    var $key$$ = $keys$$[$i$$], $value$$ = this.get($key$$);
    $f$$.call($opt_obj$$, $value$$, $key$$, this);
  }
};
goog.structs.Map.prototype.clone = function $goog$structs$Map$$clone$() {
  return new goog.structs.Map(this);
};
goog.structs.Map.prototype.transpose = function $goog$structs$Map$$transpose$() {
  for (var $transposed$$ = new goog.structs.Map, $i$$ = 0;$i$$ < this.keys_.length;$i$$++) {
    var $key$$ = this.keys_[$i$$];
    $transposed$$.set(this.map_[$key$$], $key$$);
  }
  return $transposed$$;
};
goog.structs.Map.prototype.toObject = function $goog$structs$Map$$toObject$() {
  this.cleanupKeysArray_();
  for (var $obj$$ = {}, $i$$ = 0;$i$$ < this.keys_.length;$i$$++) {
    var $key$$ = this.keys_[$i$$];
    $obj$$[$key$$] = this.map_[$key$$];
  }
  return $obj$$;
};
goog.structs.Map.prototype.getKeyIterator = function $goog$structs$Map$$getKeyIterator$() {
  return this.__iterator__(!0);
};
goog.structs.Map.prototype.getValueIterator = function $goog$structs$Map$$getValueIterator$() {
  return this.__iterator__(!1);
};
goog.structs.Map.prototype.__iterator__ = function $goog$structs$Map$$__iterator__$($opt_keys$$) {
  this.cleanupKeysArray_();
  var $i$$ = 0, $version$$ = this.version_, $selfObj$$ = this, $newIter$$ = new goog.iter.Iterator;
  $newIter$$.next = function $$newIter$$$next$() {
    if ($version$$ != $selfObj$$.version_) {
      throw Error("The map has changed since the iterator was created");
    }
    if ($i$$ >= $selfObj$$.keys_.length) {
      throw goog.iter.StopIteration;
    }
    var $key$$ = $selfObj$$.keys_[$i$$++];
    return $opt_keys$$ ? $key$$ : $selfObj$$.map_[$key$$];
  };
  return $newIter$$;
};
goog.structs.Map.hasKey_ = function $goog$structs$Map$hasKey_$($obj$$, $key$$) {
  return Object.prototype.hasOwnProperty.call($obj$$, $key$$);
};
goog.structs.getCount = function $goog$structs$getCount$($col$$) {
  return $col$$.getCount && "function" == typeof $col$$.getCount ? $col$$.getCount() : goog.isArrayLike($col$$) || goog.isString($col$$) ? $col$$.length : goog.object.getCount($col$$);
};
goog.structs.getValues = function $goog$structs$getValues$($col$$) {
  if ($col$$.getValues && "function" == typeof $col$$.getValues) {
    return $col$$.getValues();
  }
  if (goog.isString($col$$)) {
    return $col$$.split("");
  }
  if (goog.isArrayLike($col$$)) {
    for (var $rv$$ = [], $l$$ = $col$$.length, $i$$ = 0;$i$$ < $l$$;$i$$++) {
      $rv$$.push($col$$[$i$$]);
    }
    return $rv$$;
  }
  return goog.object.getValues($col$$);
};
goog.structs.getKeys = function $goog$structs$getKeys$($col$$2_l$$) {
  if ($col$$2_l$$.getKeys && "function" == typeof $col$$2_l$$.getKeys) {
    return $col$$2_l$$.getKeys();
  }
  if (!$col$$2_l$$.getValues || "function" != typeof $col$$2_l$$.getValues) {
    if (goog.isArrayLike($col$$2_l$$) || goog.isString($col$$2_l$$)) {
      var $rv$$ = [];
      $col$$2_l$$ = $col$$2_l$$.length;
      for (var $i$$ = 0;$i$$ < $col$$2_l$$;$i$$++) {
        $rv$$.push($i$$);
      }
      return $rv$$;
    }
    return goog.object.getKeys($col$$2_l$$);
  }
};
goog.structs.contains = function $goog$structs$contains$($col$$, $val$$) {
  return $col$$.contains && "function" == typeof $col$$.contains ? $col$$.contains($val$$) : $col$$.containsValue && "function" == typeof $col$$.containsValue ? $col$$.containsValue($val$$) : goog.isArrayLike($col$$) || goog.isString($col$$) ? goog.array.contains($col$$, $val$$) : goog.object.containsValue($col$$, $val$$);
};
goog.structs.isEmpty = function $goog$structs$isEmpty$($col$$) {
  return $col$$.isEmpty && "function" == typeof $col$$.isEmpty ? $col$$.isEmpty() : goog.isArrayLike($col$$) || goog.isString($col$$) ? goog.array.isEmpty($col$$) : goog.object.isEmpty($col$$);
};
goog.structs.clear = function $goog$structs$clear$($col$$) {
  $col$$.clear && "function" == typeof $col$$.clear ? $col$$.clear() : goog.isArrayLike($col$$) ? goog.array.clear($col$$) : goog.object.clear($col$$);
};
goog.structs.forEach = function $goog$structs$forEach$($col$$, $f$$, $opt_obj$$) {
  if ($col$$.forEach && "function" == typeof $col$$.forEach) {
    $col$$.forEach($f$$, $opt_obj$$);
  } else {
    if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
      goog.array.forEach($col$$, $f$$, $opt_obj$$);
    } else {
      for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0;$i$$ < $l$$;$i$$++) {
        $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$);
      }
    }
  }
};
goog.structs.filter = function $goog$structs$filter$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.filter) {
    return $col$$.filter($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
    return goog.array.filter($col$$, $f$$, $opt_obj$$);
  }
  var $rv$$, $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length;
  if ($keys$$) {
    $rv$$ = {};
    for (var $i$$ = 0;$i$$ < $l$$;$i$$++) {
      $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$[$i$$], $col$$) && ($rv$$[$keys$$[$i$$]] = $values$$[$i$$]);
    }
  } else {
    for ($rv$$ = [], $i$$ = 0;$i$$ < $l$$;$i$$++) {
      $f$$.call($opt_obj$$, $values$$[$i$$], void 0, $col$$) && $rv$$.push($values$$[$i$$]);
    }
  }
  return $rv$$;
};
goog.structs.map = function $goog$structs$map$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.map) {
    return $col$$.map($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
    return goog.array.map($col$$, $f$$, $opt_obj$$);
  }
  var $rv$$, $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length;
  if ($keys$$) {
    $rv$$ = {};
    for (var $i$$ = 0;$i$$ < $l$$;$i$$++) {
      $rv$$[$keys$$[$i$$]] = $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$[$i$$], $col$$);
    }
  } else {
    for ($rv$$ = [], $i$$ = 0;$i$$ < $l$$;$i$$++) {
      $rv$$[$i$$] = $f$$.call($opt_obj$$, $values$$[$i$$], void 0, $col$$);
    }
  }
  return $rv$$;
};
goog.structs.some = function $goog$structs$some$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.some) {
    return $col$$.some($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
    return goog.array.some($col$$, $f$$, $opt_obj$$);
  }
  for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if ($f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$)) {
      return !0;
    }
  }
  return !1;
};
goog.structs.every = function $goog$structs$every$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.every) {
    return $col$$.every($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
    return goog.array.every($col$$, $f$$, $opt_obj$$);
  }
  for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if (!$f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$)) {
      return !1;
    }
  }
  return !0;
};
goog.structs.Collection = function $goog$structs$Collection$() {
};
goog.structs.Set = function $goog$structs$Set$($opt_values$$) {
  this.map_ = new goog.structs.Map;
  $opt_values$$ && this.addAll($opt_values$$);
};
goog.structs.Set.getKey_ = function $goog$structs$Set$getKey_$($val$$) {
  var $type$$ = typeof $val$$;
  return "object" == $type$$ && $val$$ || "function" == $type$$ ? "o" + goog.getUid($val$$) : $type$$.substr(0, 1) + $val$$;
};
goog.structs.Set.prototype.getCount = function $goog$structs$Set$$getCount$() {
  return this.map_.getCount();
};
goog.structs.Set.prototype.add = function $goog$structs$Set$$add$($element$$) {
  this.map_.set(goog.structs.Set.getKey_($element$$), $element$$);
};
goog.structs.Set.prototype.addAll = function $goog$structs$Set$$addAll$($col$$11_values$$) {
  $col$$11_values$$ = goog.structs.getValues($col$$11_values$$);
  for (var $l$$ = $col$$11_values$$.length, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    this.add($col$$11_values$$[$i$$]);
  }
};
goog.structs.Set.prototype.removeAll = function $goog$structs$Set$$removeAll$($col$$12_values$$) {
  $col$$12_values$$ = goog.structs.getValues($col$$12_values$$);
  for (var $l$$ = $col$$12_values$$.length, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    this.remove($col$$12_values$$[$i$$]);
  }
};
goog.structs.Set.prototype.remove = function $goog$structs$Set$$remove$($element$$) {
  return this.map_.remove(goog.structs.Set.getKey_($element$$));
};
goog.structs.Set.prototype.clear = function $goog$structs$Set$$clear$() {
  this.map_.clear();
};
goog.structs.Set.prototype.isEmpty = function $goog$structs$Set$$isEmpty$() {
  return this.map_.isEmpty();
};
goog.structs.Set.prototype.contains = function $goog$structs$Set$$contains$($element$$) {
  return this.map_.containsKey(goog.structs.Set.getKey_($element$$));
};
goog.structs.Set.prototype.containsAll = function $goog$structs$Set$$containsAll$($col$$) {
  return goog.structs.every($col$$, this.contains, this);
};
goog.structs.Set.prototype.intersection = function $goog$structs$Set$$intersection$($col$$14_values$$) {
  var $result$$ = new goog.structs.Set;
  $col$$14_values$$ = goog.structs.getValues($col$$14_values$$);
  for (var $i$$ = 0;$i$$ < $col$$14_values$$.length;$i$$++) {
    var $value$$ = $col$$14_values$$[$i$$];
    this.contains($value$$) && $result$$.add($value$$);
  }
  return $result$$;
};
goog.structs.Set.prototype.difference = function $goog$structs$Set$$difference$($col$$) {
  var $result$$ = this.clone();
  $result$$.removeAll($col$$);
  return $result$$;
};
goog.structs.Set.prototype.getValues = function $goog$structs$Set$$getValues$() {
  return this.map_.getValues();
};
goog.structs.Set.prototype.clone = function $goog$structs$Set$$clone$() {
  return new goog.structs.Set(this);
};
goog.structs.Set.prototype.equals = function $goog$structs$Set$$equals$($col$$) {
  return this.getCount() == goog.structs.getCount($col$$) && this.isSubsetOf($col$$);
};
goog.structs.Set.prototype.isSubsetOf = function $goog$structs$Set$$isSubsetOf$($col$$) {
  var $colCount$$ = goog.structs.getCount($col$$);
  if (this.getCount() > $colCount$$) {
    return !1;
  }
  !($col$$ instanceof goog.structs.Set) && 5 < $colCount$$ && ($col$$ = new goog.structs.Set($col$$));
  return goog.structs.every(this, function($value$$) {
    return goog.structs.contains($col$$, $value$$);
  });
};
goog.structs.Set.prototype.__iterator__ = function $goog$structs$Set$$__iterator__$($opt_keys$$) {
  return this.map_.__iterator__(!1);
};
goog.userAgent = {};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_EDGE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.ASSUME_ANY_VERSION = !1;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function $goog$userAgent$getUserAgentString$() {
  return goog.labs.userAgent.util.getUserAgent();
};
goog.userAgent.getNavigator = function $goog$userAgent$getNavigator$() {
  return goog.global.navigator || null;
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
goog.userAgent.isMobile_ = function $goog$userAgent$isMobile_$() {
  return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function $goog$userAgent$determinePlatform_$() {
  var $navigator$$ = goog.userAgent.getNavigator();
  return $navigator$$ && $navigator$$.platform || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.ASSUME_ANDROID = !1;
goog.userAgent.ASSUME_IPHONE = !1;
goog.userAgent.ASSUME_IPAD = !1;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_ = function $goog$userAgent$isLegacyLinux_$() {
  return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
};
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function $goog$userAgent$isX11_$() {
  var $navigator$$ = goog.userAgent.getNavigator();
  return !!$navigator$$ && goog.string.contains($navigator$$.appVersion || "", "X11");
};
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.operaVersion_ = function $goog$userAgent$operaVersion_$() {
  var $version$$ = goog.global.opera.version;
  try {
    return $version$$();
  } catch ($e$$) {
    return $version$$;
  }
};
goog.userAgent.determineVersion_ = function $goog$userAgent$determineVersion_$() {
  if (goog.userAgent.OPERA && goog.global.opera) {
    return goog.userAgent.operaVersion_();
  }
  var $version$$ = "", $arr$$ = goog.userAgent.getVersionRegexResult_();
  $arr$$ && ($version$$ = $arr$$ ? $arr$$[1] : "");
  return goog.userAgent.IE && ($arr$$ = goog.userAgent.getDocumentMode_(), $arr$$ > parseFloat($version$$)) ? String($arr$$) : $version$$;
};
goog.userAgent.getVersionRegexResult_ = function $goog$userAgent$getVersionRegexResult_$() {
  var $userAgent$$ = goog.userAgent.getUserAgentString();
  if (goog.userAgent.GECKO) {
    return /rv\:([^\);]+)(\)|;)/.exec($userAgent$$);
  }
  if (goog.userAgent.EDGE) {
    return /Edge\/([\d\.]+)/.exec($userAgent$$);
  }
  if (goog.userAgent.IE) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$$);
  }
  if (goog.userAgent.WEBKIT) {
    return /WebKit\/(\S+)/.exec($userAgent$$);
  }
};
goog.userAgent.getDocumentMode_ = function $goog$userAgent$getDocumentMode_$() {
  var $doc$$ = goog.global.document;
  return $doc$$ ? $doc$$.documentMode : void 0;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function $goog$userAgent$compare$($v1$$, $v2$$) {
  return goog.string.compareVersions($v1$$, $v2$$);
};
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function $goog$userAgent$isVersionOrHigher$($version$$) {
  return goog.userAgent.ASSUME_ANY_VERSION || goog.userAgent.isVersionOrHigherCache_[$version$$] || (goog.userAgent.isVersionOrHigherCache_[$version$$] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, $version$$));
};
goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher = function $goog$userAgent$isDocumentModeOrHigher$($documentMode$$) {
  return goog.userAgent.DOCUMENT_MODE >= $documentMode$$;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = function() {
  var $doc$$ = goog.global.document, $mode$$ = goog.userAgent.getDocumentMode_();
  return $doc$$ && goog.userAgent.IE ? $mode$$ || ("CSS1Compat" == $doc$$.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5) : void 0;
}();
goog.userAgent.product = {};
goog.userAgent.product.ASSUME_FIREFOX = !1;
goog.userAgent.product.ASSUME_IPHONE = !1;
goog.userAgent.product.ASSUME_IPAD = !1;
goog.userAgent.product.ASSUME_ANDROID = !1;
goog.userAgent.product.ASSUME_CHROME = !1;
goog.userAgent.product.ASSUME_SAFARI = !1;
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.OPERA = goog.userAgent.OPERA;
goog.userAgent.product.IE = goog.userAgent.IE;
goog.userAgent.product.EDGE = goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
goog.userAgent.product.isIphoneOrIpod_ = function $goog$userAgent$product$isIphoneOrIpod_$() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
};
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_ = function $goog$userAgent$product$isSafariDesktop_$() {
  return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
};
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();

var lf = {type:{}, ConstraintAction:{}};
goog.exportSymbol("lf.ConstraintAction", lf.ConstraintAction);
lf.ConstraintAction.RESTRICT = 0;
goog.exportProperty(lf.ConstraintAction, "RESTRICT", lf.ConstraintAction.RESTRICT);
lf.ConstraintAction.CASCADE = 1;
goog.exportProperty(lf.ConstraintAction, "CASCADE", lf.ConstraintAction.CASCADE);
lf.ConstraintTiming = {};
goog.exportSymbol("lf.ConstraintTiming", lf.ConstraintTiming);
lf.ConstraintTiming.IMMEDIATE = 0;
goog.exportProperty(lf.ConstraintTiming, "IMMEDIATE", lf.ConstraintTiming.IMMEDIATE);
lf.ConstraintTiming.DEFERRABLE = 1;
goog.exportProperty(lf.ConstraintTiming, "DEFERRABLE", lf.ConstraintTiming.DEFERRABLE);
lf.Order = {};
goog.exportSymbol("lf.Order", lf.Order);
lf.Order.DESC = 0;
goog.exportProperty(lf.Order, "DESC", lf.Order.DESC);
lf.Order.ASC = 1;
goog.exportProperty(lf.Order, "ASC", lf.Order.ASC);
lf.Type = {};
goog.exportSymbol("lf.Type", lf.Type);
lf.Type.ARRAY_BUFFER = 0;
goog.exportProperty(lf.Type, "ARRAY_BUFFER", lf.Type.ARRAY_BUFFER);
lf.Type.BOOLEAN = 1;
goog.exportProperty(lf.Type, "BOOLEAN", lf.Type.BOOLEAN);
lf.Type.DATE_TIME = 2;
goog.exportProperty(lf.Type, "DATE_TIME", lf.Type.DATE_TIME);
lf.Type.INTEGER = 3;
goog.exportProperty(lf.Type, "INTEGER", lf.Type.INTEGER);
lf.Type.NUMBER = 4;
goog.exportProperty(lf.Type, "NUMBER", lf.Type.NUMBER);
lf.Type.STRING = 5;
goog.exportProperty(lf.Type, "STRING", lf.Type.STRING);
lf.Type.OBJECT = 6;
goog.exportProperty(lf.Type, "OBJECT", lf.Type.OBJECT);
lf.type.DEFAULT_VALUES = {0:null, 1:!1, 2:Object.freeze(new Date(0)), 3:0, 4:0, 5:"", 6:null};
goog.exportSymbol("lf.type.DEFAULT_VALUES", lf.type.DEFAULT_VALUES);
lf.schema = {};
lf.schema.Column = function $lf$schema$Column$() {
};
lf.schema.Database = function $lf$schema$Database$() {
};
lf.schema.DataStoreType = {};
goog.exportSymbol("lf.schema.DataStoreType", lf.schema.DataStoreType);
lf.schema.DataStoreType.INDEXED_DB = 0;
goog.exportProperty(lf.schema.DataStoreType, "INDEXED_DB", lf.schema.DataStoreType.INDEXED_DB);
lf.schema.DataStoreType.MEMORY = 1;
goog.exportProperty(lf.schema.DataStoreType, "MEMORY", lf.schema.DataStoreType.MEMORY);
lf.schema.DataStoreType.LOCAL_STORAGE = 2;
goog.exportProperty(lf.schema.DataStoreType, "LOCAL_STORAGE", lf.schema.DataStoreType.LOCAL_STORAGE);
lf.schema.DataStoreType.FIREBASE = 3;
goog.exportProperty(lf.schema.DataStoreType, "FIREBASE", lf.schema.DataStoreType.FIREBASE);
lf.schema.DataStoreType.WEB_SQL = 4;
goog.exportProperty(lf.schema.DataStoreType, "WEB_SQL", lf.schema.DataStoreType.WEB_SQL);
lf.schema.DataStoreType.OBSERVABLE_STORE = 5;
goog.exportProperty(lf.schema.DataStoreType, "OBSERVABLE_STORE", lf.schema.DataStoreType.OBSERVABLE_STORE);
lf.schema.Index = function $lf$schema$Index$($tableName$$, $name$$, $isUnique$$, $columns$$) {
  this.tableName = $tableName$$;
  this.name = $name$$;
  this.isUnique = $isUnique$$;
  this.columns = $columns$$;
};
lf.schema.Index.prototype.getNormalizedName = function $lf$schema$Index$$getNormalizedName$() {
  return this.tableName + "." + this.name;
};
lf.schema.Index.prototype.hasNullableColumn = function $lf$schema$Index$$hasNullableColumn$() {
  return this.columns.some(function($column$$) {
    return $column$$.schema.isNullable();
  });
};
lf.schema.Table = function $lf$schema$Table$($name$$, $cols$$, $indices$$, $persistentIndex$$) {
  this.name_ = $name$$;
  this.indices_ = $indices$$;
  this.columns_ = $cols$$;
  this.persistentIndex_ = $persistentIndex$$;
  this.alias_ = null;
};
goog.exportSymbol("lf.schema.Table", lf.schema.Table);
lf.schema.Table.prototype.getName = function $lf$schema$Table$$getName$() {
  return this.name_;
};
goog.exportProperty(lf.schema.Table.prototype, "getName", lf.schema.Table.prototype.getName);
lf.schema.Table.prototype.getAlias = function $lf$schema$Table$$getAlias$() {
  return this.alias_;
};
lf.schema.Table.prototype.getEffectiveName = function $lf$schema$Table$$getEffectiveName$() {
  return this.alias_ || this.name_;
};
lf.schema.Table.prototype.as = function $lf$schema$Table$$as$($name$$) {
  var $clone$$ = new this.constructor(this.name_);
  $clone$$.alias_ = $name$$;
  $clone$$.referencingForeignKeys_ = this.referencingForeignKeys_;
  return $clone$$;
};
goog.exportProperty(lf.schema.Table.prototype, "as", lf.schema.Table.prototype.as);
goog.exportProperty(lf.schema.Table.prototype, "createRow", lf.schema.Table.prototype.createRow);
goog.exportProperty(lf.schema.Table.prototype, "deserializeRow", lf.schema.Table.prototype.deserializeRow);
lf.schema.Table.prototype.getIndices = function $lf$schema$Table$$getIndices$() {
  return this.indices_;
};
goog.exportProperty(lf.schema.Table.prototype, "getIndices", lf.schema.Table.prototype.getIndices);
lf.schema.Table.prototype.getColumns = function $lf$schema$Table$$getColumns$() {
  return this.columns_;
};
goog.exportProperty(lf.schema.Table.prototype, "getColumns", lf.schema.Table.prototype.getColumns);
goog.exportProperty(lf.schema.Table.prototype, "getConstraint", lf.schema.Table.prototype.getConstraint);
lf.schema.Table.prototype.persistentIndex = function $lf$schema$Table$$persistentIndex$() {
  return this.persistentIndex_;
};
goog.exportProperty(lf.schema.Table.prototype, "persistentIndex", lf.schema.Table.prototype.persistentIndex);
lf.schema.Table.ROW_ID_INDEX_PATTERN = "#";
lf.schema.Table.prototype.getRowIdIndexName = function $lf$schema$Table$$getRowIdIndexName$() {
  return this.name_ + "." + lf.schema.Table.ROW_ID_INDEX_PATTERN;
};
lf.fn = {};
lf.fn.AggregatedColumn = function $lf$fn$AggregatedColumn$($col$$, $aggregatorType$$) {
  this.child = $col$$;
  this.aggregatorType = $aggregatorType$$;
  this.alias_ = null;
};
lf.fn.AggregatedColumn.prototype.getName = function $lf$fn$AggregatedColumn$$getName$() {
  return this.aggregatorType + "(" + this.child.getName() + ")";
};
lf.fn.AggregatedColumn.prototype.getNormalizedName = function $lf$fn$AggregatedColumn$$getNormalizedName$() {
  return this.aggregatorType + "(" + this.child.getNormalizedName() + ")";
};
lf.fn.AggregatedColumn.prototype.getTable = function $lf$fn$AggregatedColumn$$getTable$() {
  return this.child.getTable();
};
lf.fn.AggregatedColumn.prototype.toString = function $lf$fn$AggregatedColumn$$toString$() {
  return this.getNormalizedName();
};
lf.fn.AggregatedColumn.prototype.getType = function $lf$fn$AggregatedColumn$$getType$() {
  return this.child.getType();
};
lf.fn.AggregatedColumn.prototype.getAlias = function $lf$fn$AggregatedColumn$$getAlias$() {
  return this.alias_;
};
lf.fn.AggregatedColumn.prototype.getIndices = function $lf$fn$AggregatedColumn$$getIndices$() {
  return [];
};
lf.fn.AggregatedColumn.prototype.getIndex = function $lf$fn$AggregatedColumn$$getIndex$() {
  return null;
};
lf.fn.AggregatedColumn.prototype.isNullable = function $lf$fn$AggregatedColumn$$isNullable$() {
  return !1;
};
lf.fn.AggregatedColumn.prototype.as = function $lf$fn$AggregatedColumn$$as$($name$$) {
  this.alias_ = $name$$;
  return this;
};
goog.exportProperty(lf.fn.AggregatedColumn.prototype, "as", lf.fn.AggregatedColumn.prototype.as);
lf.fn.AggregatedColumn.prototype.getColumnChain = function $lf$fn$AggregatedColumn$$getColumnChain$() {
  for (var $columnChain$$ = [this], $currentColumn$$ = this;$currentColumn$$ instanceof lf.fn.AggregatedColumn;) {
    $columnChain$$.push($currentColumn$$.child), $currentColumn$$ = $currentColumn$$.child;
  }
  return $columnChain$$;
};
lf.fn.StarColumn = function $lf$fn$StarColumn$($opt_alias$$) {
  this.alias_ = $opt_alias$$ || null;
  this.table_ = new lf.schema.Table("#UnknownTable", [], [], !1);
};
lf.fn.StarColumn.prototype.getName = function $lf$fn$StarColumn$$getName$() {
  return "*";
};
lf.fn.StarColumn.prototype.getNormalizedName = function $lf$fn$StarColumn$$getNormalizedName$() {
  return this.getName();
};
lf.fn.StarColumn.prototype.toString = function $lf$fn$StarColumn$$toString$() {
  return this.getNormalizedName();
};
lf.fn.StarColumn.prototype.getTable = function $lf$fn$StarColumn$$getTable$() {
  return this.table_;
};
lf.fn.StarColumn.prototype.getType = function $lf$fn$StarColumn$$getType$() {
  return lf.Type.NUMBER;
};
lf.fn.StarColumn.prototype.getAlias = function $lf$fn$StarColumn$$getAlias$() {
  return this.alias_;
};
lf.fn.StarColumn.prototype.getIndices = function $lf$fn$StarColumn$$getIndices$() {
  return [];
};
lf.fn.StarColumn.prototype.getIndex = function $lf$fn$StarColumn$$getIndex$() {
  return null;
};
lf.fn.StarColumn.prototype.isNullable = function $lf$fn$StarColumn$$isNullable$() {
  return !1;
};
lf.Row = function $lf$Row$($id$$, $payload$$) {
  this.id_ = $id$$;
  this.payload_ = $payload$$ || this.defaultPayload();
};
lf.Row.nextId_ = 0;
lf.Row.DUMMY_ID = -1;
lf.Row.getNextId = function $lf$Row$getNextId$() {
  return lf.Row.nextId_++;
};
lf.Row.setNextId = function $lf$Row$setNextId$($nextId$$) {
  lf.Row.nextId_ = $nextId$$;
};
lf.Row.prototype.id = function $lf$Row$$id$() {
  return this.id_;
};
lf.Row.prototype.assignRowId = function $lf$Row$$assignRowId$($id$$) {
  this.id_ = $id$$;
};
lf.Row.prototype.payload = function $lf$Row$$payload$() {
  return this.payload_;
};
lf.Row.prototype.defaultPayload = function $lf$Row$$defaultPayload$() {
  return {};
};
lf.Row.prototype.toDbPayload = function $lf$Row$$toDbPayload$() {
  return this.payload_;
};
lf.Row.prototype.serialize = function $lf$Row$$serialize$() {
  return {id:this.id_, value:this.toDbPayload()};
};
lf.Row.prototype.keyOfIndex = function $lf$Row$$keyOfIndex$($indexName$$) {
  return "#" == $indexName$$.substr(-1) ? this.id_ : null;
};
lf.Row.deserialize = function $lf$Row$deserialize$($data$$) {
  return new lf.Row($data$$.id, $data$$.value);
};
lf.Row.create = function $lf$Row$create$($opt_payload$$) {
  return new lf.Row(lf.Row.getNextId(), $opt_payload$$ || {});
};
lf.Row.binToHex = function $lf$Row$binToHex$($buffer$$) {
  if (!goog.isDefAndNotNull($buffer$$)) {
    return null;
  }
  $buffer$$ = new Uint8Array($buffer$$);
  for (var $s$$ = "", $i$$ = 0;$i$$ < $buffer$$.length;++$i$$) {
    var $chr$$ = $buffer$$[$i$$].toString(16), $s$$ = $s$$ + (2 > $chr$$.length ? "0" + $chr$$ : $chr$$)
  }
  return $s$$;
};
lf.Row.hexToBin = function $lf$Row$hexToBin$($hex$$) {
  if (!goog.isDefAndNotNull($hex$$) || "" == $hex$$) {
    return null;
  }
  0 != $hex$$.length % 2 && ($hex$$ = "0" + $hex$$);
  for (var $buffer$$ = new ArrayBuffer($hex$$.length / 2), $uint8Array$$ = new Uint8Array($buffer$$), $i$$ = 0, $j$$ = 0;$i$$ < $hex$$.length;$i$$ += 2) {
    $uint8Array$$[$j$$++] = parseInt($hex$$.substr($i$$, 2), 16);
  }
  return $buffer$$;
};

lf.TransactionStats = function $lf$TransactionStats$($success$$, $insertedRows$$, $updatedRows$$, $deletedRows$$, $tablesChanged$$) {
  this.success_ = $success$$;
  this.insertedRowCount_ = $insertedRows$$;
  this.updatedRowCount_ = $updatedRows$$;
  this.deletedRowCount_ = $deletedRows$$;
  this.changedTableCount_ = $tablesChanged$$;
};
goog.exportSymbol("lf.TransactionStats", lf.TransactionStats);
lf.TransactionStats.prototype.success = function $lf$TransactionStats$$success$() {
  return this.success_;
};
goog.exportProperty(lf.TransactionStats.prototype, "success", lf.TransactionStats.prototype.success);
lf.TransactionStats.prototype.insertedRowCount = function $lf$TransactionStats$$insertedRowCount$() {
  return this.insertedRowCount_;
};
goog.exportProperty(lf.TransactionStats.prototype, "insertedRowCount", lf.TransactionStats.prototype.insertedRowCount);
lf.TransactionStats.prototype.updatedRowCount = function $lf$TransactionStats$$updatedRowCount$() {
  return this.updatedRowCount_;
};
goog.exportProperty(lf.TransactionStats.prototype, "updatedRowCount", lf.TransactionStats.prototype.updatedRowCount);
lf.TransactionStats.prototype.deletedRowCount = function $lf$TransactionStats$$deletedRowCount$() {
  return this.deletedRowCount_;
};
goog.exportProperty(lf.TransactionStats.prototype, "deletedRowCount", lf.TransactionStats.prototype.deletedRowCount);
lf.TransactionStats.prototype.changedTableCount = function $lf$TransactionStats$$changedTableCount$() {
  return this.changedTableCount_;
};
goog.exportProperty(lf.TransactionStats.prototype, "changedTableCount", lf.TransactionStats.prototype.changedTableCount);
lf.TransactionStats.getDefault = function $lf$TransactionStats$getDefault$() {
  return new lf.TransactionStats(!1, 0, 0, 0, 0);
};
lf.TransactionType = {};
goog.exportSymbol("lf.TransactionType", lf.TransactionType);
lf.TransactionType.READ_ONLY = 0;
goog.exportProperty(lf.TransactionType, "READ_ONLY", lf.TransactionType.READ_ONLY);
lf.TransactionType.READ_WRITE = 1;
goog.exportProperty(lf.TransactionType, "READ_WRITE", lf.TransactionType.READ_WRITE);
lf.Transaction = function $lf$Transaction$() {
};
lf.backstore = {};
lf.backstore.TableType = {DATA:0, INDEX:1};
lf.backstore.Tx = function $lf$backstore$Tx$() {
};
lf.Capability = function $lf$Capability$() {
  this.safariWebView_ = goog.userAgent.product.SAFARI || goog.userAgent.product.IPAD || goog.userAgent.product.IPHONE;
  this.indexedDb = !(this.safariWebView_ || goog.userAgent.product.IE && !goog.userAgent.isVersionOrHigher(10));
  this.localStorageEvent = !(goog.userAgent.product.IE && !goog.userAgent.isVersionOrHigher(11));
  this.webSql = goog.userAgent.product.CHROME || goog.userAgent.product.SAFARI;
  this.nativeMap = goog.isDef(window.Map) && goog.isDef(window.Map.prototype.values) && goog.isDef(window.Map.prototype.forEach) && !this.safariWebView_;
  this.nativeSet = goog.isDef(window.Set) && goog.isDef(window.Set.prototype.values) && goog.isDef(window.Set.prototype.forEach) && !this.safariWebView_;
};
lf.Capability.get = function $lf$Capability$get$() {
  goog.isDef(lf.Capability.instance_) || (lf.Capability.instance_ = new lf.Capability);
  return lf.Capability.instance_;
};
lf.Flags = {};
lf.Flags.MEMORY_ONLY = !1;
lf.Flags.NATIVE_ES6 = !1;
lf.structs = {};
lf.structs.map = {};
$jscomp.scope.detectUseNative = function $$jscomp$scope$detectUseNative$() {
  return lf.Flags.NATIVE_ES6 || lf.Capability.get().nativeMap;
};
lf.structs.MapPolyFill_ = function $lf$structs$MapPolyFill_$() {
  this.map_ = new goog.structs.Map;
  Object.defineProperty(this, "size", {get:function() {
    return this.map_.getCount();
  }});
};
lf.structs.MapPolyFill_.prototype.clear = function $lf$structs$MapPolyFill_$$clear$() {
  this.map_.clear();
};
goog.exportProperty(lf.structs.MapPolyFill_.prototype, "clear", lf.structs.MapPolyFill_.prototype.clear);
lf.structs.MapPolyFill_.prototype.delete = function $lf$structs$MapPolyFill_$$delete$($key$$) {
  return this.map_.remove($key$$);
};
goog.exportProperty(lf.structs.MapPolyFill_.prototype, "delete", lf.structs.MapPolyFill_.prototype.delete);
lf.structs.MapPolyFill_.prototype.forEach = function $lf$structs$MapPolyFill_$$forEach$($callback$$, $opt_thisArg$$) {
  return this.map_.forEach($callback$$, $opt_thisArg$$);
};
goog.exportProperty(lf.structs.MapPolyFill_.prototype, "forEach", lf.structs.MapPolyFill_.prototype.forEach);
lf.structs.MapPolyFill_.prototype.get = function $lf$structs$MapPolyFill_$$get$($key$$) {
  return this.map_.get($key$$);
};
goog.exportProperty(lf.structs.MapPolyFill_.prototype, "get", lf.structs.MapPolyFill_.prototype.get);
lf.structs.MapPolyFill_.prototype.has = function $lf$structs$MapPolyFill_$$has$($key$$) {
  return this.map_.containsKey($key$$);
};
goog.exportProperty(lf.structs.MapPolyFill_.prototype, "has", lf.structs.MapPolyFill_.prototype.has);
lf.structs.MapPolyFill_.prototype.set = function $lf$structs$MapPolyFill_$$set$($key$$, $value$$) {
  return this.map_.set($key$$, $value$$);
};
goog.exportProperty(lf.structs.MapPolyFill_.prototype, "set", lf.structs.MapPolyFill_.prototype.set);
$jscomp.scope.USE_NATIVE = (0,$jscomp.scope.detectUseNative)();
lf.structs.map.create = function $lf$structs$map$create$() {
  return $jscomp.scope.USE_NATIVE ? new window.Map : new lf.structs.MapPolyFill_;
};
lf.structs.map.keys = function $lf$structs$map$keys$($map$$) {
  if ($map$$ instanceof lf.structs.MapPolyFill_) {
    return $map$$.map_.getKeys();
  }
  var $i$$ = 0, $array$$ = Array($map$$.size);
  $map$$.forEach(function($v$$, $k$$) {
    $array$$[$i$$++] = $k$$;
  });
  return $array$$;
};
lf.structs.map.values = function $lf$structs$map$values$($map$$) {
  if ($map$$ instanceof lf.structs.MapPolyFill_) {
    return $map$$.map_.getValues();
  }
  var $i$$ = 0, $array$$ = Array($map$$.size);
  $map$$.forEach(function($v$$, $k$$) {
    $array$$[$i$$++] = $v$$;
  });
  return $array$$;
};
lf.backstore.BaseTx = function $lf$backstore$BaseTx$($txType$$, $opt_journal$$) {
  this.txType = $txType$$;
  this.journal_ = $opt_journal$$ || null;
  this.resolver = goog.Promise.withResolver();
  this.success_ = !1;
  this.stats_ = null;
};
lf.backstore.BaseTx.prototype.getJournal = function $lf$backstore$BaseTx$$getJournal$() {
  return this.journal_;
};
lf.backstore.BaseTx.prototype.commit = function $lf$backstore$BaseTx$$commit$() {
  return (this.txType == lf.TransactionType.READ_ONLY ? this.commitInternal() : this.commitReadWrite_()).then(function($results$$) {
    this.success_ = !0;
    return $results$$;
  }.bind(this));
};
lf.backstore.BaseTx.prototype.commitReadWrite_ = function $lf$backstore$BaseTx$$commitReadWrite_$() {
  try {
    this.journal_.checkDeferredConstraints();
  } catch ($e$$) {
    return goog.Promise.reject($e$$);
  }
  return this.mergeIntoBackstore_().then(function($results$$) {
    this.journal_.commit();
    return $results$$;
  }.bind(this));
};
lf.backstore.BaseTx.prototype.mergeIntoBackstore_ = function $lf$backstore$BaseTx$$mergeIntoBackstore_$() {
  this.mergeTableChanges_();
  this.mergeIndexChanges_();
  return this.commitInternal();
};
lf.backstore.BaseTx.prototype.mergeTableChanges_ = function $lf$backstore$BaseTx$$mergeTableChanges_$() {
  this.journal_.getDiff().forEach(function($tableDiff$$, $tableName$$) {
    var $table_tableSchema$$ = this.journal_.getScope().get($tableName$$), $table_tableSchema$$ = this.getTable($table_tableSchema$$.getName(), $table_tableSchema$$.deserializeRow.bind($table_tableSchema$$), lf.backstore.TableType.DATA), $toDeleteRowIds_toPut$$ = lf.structs.map.values($tableDiff$$.getDeleted()).map(function($row$$) {
      return $row$$.id();
    });
    0 < $toDeleteRowIds_toPut$$.length && $table_tableSchema$$.remove($toDeleteRowIds_toPut$$).thenCatch(this.handleError_, this);
    $toDeleteRowIds_toPut$$ = lf.structs.map.values($tableDiff$$.getModified()).map(function($modification$$) {
      return $modification$$[1];
    }).concat(lf.structs.map.values($tableDiff$$.getAdded()));
    $table_tableSchema$$.put($toDeleteRowIds_toPut$$).thenCatch(this.handleError_, this);
  }, this);
};
lf.backstore.BaseTx.prototype.mergeIndexChanges_ = function $lf$backstore$BaseTx$$mergeIndexChanges_$() {
  this.journal_.getIndexDiff().forEach(function($index$$) {
    var $indexTable$$ = this.getTable($index$$.getName(), lf.Row.deserialize, lf.backstore.TableType.INDEX);
    $indexTable$$.remove([]);
    $indexTable$$.put($index$$.serialize());
  }, this);
};
lf.backstore.BaseTx.prototype.handleError_ = function $lf$backstore$BaseTx$$handleError_$($e$$) {
  this.resolver.reject($e$$);
};
lf.backstore.BaseTx.prototype.stats = function $lf$backstore$BaseTx$$stats$() {
  if (goog.isNull(this.stats_)) {
    if (this.success_) {
      if (this.txType == lf.TransactionType.READ_ONLY) {
        this.stats_ = new lf.TransactionStats(!0, 0, 0, 0, 0);
      } else {
        var $insertedRows$$ = 0, $deletedRows$$ = 0, $updatedRows$$ = 0, $tablesChanged$$ = 0;
        this.journal_.getDiff().forEach(function($tableDiff$$, $tableName$$) {
          $tablesChanged$$++;
          $insertedRows$$ += $tableDiff$$.getAdded().size;
          $updatedRows$$ += $tableDiff$$.getModified().size;
          $deletedRows$$ += $tableDiff$$.getDeleted().size;
        });
        this.stats_ = new lf.TransactionStats(!0, $insertedRows$$, $updatedRows$$, $deletedRows$$, $tablesChanged$$);
      }
    } else {
      this.stats_ = lf.TransactionStats.getDefault();
    }
  }
  return this.stats_;
};
lf.Table = function $lf$Table$() {
};
lf.structs.set = {};
$jscomp.scope.detectUseNative$1 = function $$jscomp$scope$detectUseNative$1$() {
  return lf.Flags.NATIVE_ES6 || lf.Capability.get().nativeSet;
};
lf.structs.SetPolyFill_ = function $lf$structs$SetPolyFill_$($opt_values$$) {
  this.set_ = new goog.structs.Set($opt_values$$);
  Object.defineProperty(this, "size", {get:function() {
    return this.set_.getCount();
  }});
};
lf.structs.SetPolyFill_.prototype.add = function $lf$structs$SetPolyFill_$$add$($value$$) {
  this.set_.add($value$$);
};
goog.exportProperty(lf.structs.SetPolyFill_.prototype, "add", lf.structs.SetPolyFill_.prototype.add);
lf.structs.SetPolyFill_.prototype.clear = function $lf$structs$SetPolyFill_$$clear$() {
  this.set_.clear();
};
goog.exportProperty(lf.structs.SetPolyFill_.prototype, "clear", lf.structs.SetPolyFill_.prototype.clear);
lf.structs.SetPolyFill_.prototype.delete = function $lf$structs$SetPolyFill_$$delete$($value$$) {
  return this.set_.remove($value$$);
};
goog.exportProperty(lf.structs.SetPolyFill_.prototype, "delete", lf.structs.SetPolyFill_.prototype.delete);
lf.structs.SetPolyFill_.prototype.forEach = function $lf$structs$SetPolyFill_$$forEach$($fn$$, $opt_this$$) {
  this.set_.getValues().forEach($fn$$, $opt_this$$);
};
lf.structs.SetPolyFill_.prototype.has = function $lf$structs$SetPolyFill_$$has$($value$$) {
  return this.set_.contains($value$$);
};
goog.exportProperty(lf.structs.SetPolyFill_.prototype, "has", lf.structs.SetPolyFill_.prototype.has);
$jscomp.scope.USE_NATIVE$1 = (0,$jscomp.scope.detectUseNative$1)();
lf.structs.set.create = function $lf$structs$set$create$($opt_iterable$$) {
  return $jscomp.scope.USE_NATIVE$1 ? goog.isDef($opt_iterable$$) ? new window.Set($opt_iterable$$) : new window.Set : new lf.structs.SetPolyFill_($opt_iterable$$);
};
lf.structs.set.values = function $lf$structs$set$values$($set$$) {
  if ($set$$ instanceof lf.structs.SetPolyFill_) {
    return $set$$.set_.getValues();
  }
  var $i$$ = 0, $array$$ = Array($set$$.size);
  $set$$.forEach(function($v$$) {
    $array$$[$i$$++] = $v$$;
  });
  return $array$$;
};
lf.structs.set.diff = function $lf$structs$set$diff$($set1$$, $set2$$) {
  if ($set1$$ instanceof lf.structs.SetPolyFill_) {
    var $result$$ = new lf.structs.SetPolyFill_;
    $result$$.set_ = $set1$$.set_.difference($set2$$.set_);
  } else {
    $result$$ = lf.structs.set.create(), lf.structs.set.values($set1$$).forEach(function($v$$) {
      $set2$$.has($v$$) || $result$$.add($v$$);
    });
  }
  return $result$$;
};
lf.structs.set.isSubset = function $lf$structs$set$isSubset$($set1$$, $set2$$) {
  if ($set2$$.size > $set1$$.size) {
    return !1;
  }
  var $result$$ = !0;
  $set2$$.forEach(function($value$$) {
    $result$$ = $result$$ && $set1$$.has($value$$);
  });
  return $result$$;
};
lf.structs.set.equals = function $lf$structs$set$equals$($set1$$, $set2$$) {
  return $set1$$.size == $set2$$.size && lf.structs.set.isSubset($set1$$, $set2$$);
};
lf.backstore.Page = function $lf$backstore$Page$($id$$, $opt_payload$$) {
  this.id_ = $id$$;
  this.payload_ = $opt_payload$$ || {};
};
lf.backstore.Page.BUNDLE_EXPONENT = 9;
lf.backstore.Page.toPageIds = function $lf$backstore$Page$toPageIds$($rowIds$$) {
  var $pageIds$$ = lf.structs.set.create();
  $rowIds$$.forEach(function($id$$) {
    $pageIds$$.add(lf.backstore.Page.toPageId($id$$));
  });
  return lf.structs.set.values($pageIds$$);
};
lf.backstore.Page.toPageId = function $lf$backstore$Page$toPageId$($rowId$$) {
  return $rowId$$ >> lf.backstore.Page.BUNDLE_EXPONENT;
};
lf.backstore.Page.getPageRange = function $lf$backstore$Page$getPageRange$($pageId$$) {
  return [$pageId$$ << lf.backstore.Page.BUNDLE_EXPONENT, ($pageId$$ + 1 << lf.backstore.Page.BUNDLE_EXPONENT) - 1];
};
lf.backstore.Page.prototype.getId = function $lf$backstore$Page$$getId$() {
  return this.id_;
};
lf.backstore.Page.prototype.getPayload = function $lf$backstore$Page$$getPayload$() {
  return this.payload_;
};
lf.backstore.Page.prototype.setRows = function $lf$backstore$Page$$setRows$($rows$$) {
  $rows$$.forEach(function($row$$) {
    this.payload_[$row$$.id()] = $row$$.serialize();
  }, this);
};
lf.backstore.Page.prototype.removeRows = function $lf$backstore$Page$$removeRows$($ids$$) {
  $ids$$.forEach(function($id$$) {
    delete this.payload_[$id$$];
  }, this);
};
lf.backstore.Page.prototype.serialize = function $lf$backstore$Page$$serialize$() {
  return {id:this.id_, value:JSON.stringify(this.payload_)};
};
lf.backstore.Page.deserialize = function $lf$backstore$Page$deserialize$($data$$) {
  return new lf.backstore.Page($data$$.id, JSON.parse($data$$.value));
};
lf.service = {};
lf.service.ServiceId = function $lf$service$ServiceId$($serviceId$$) {
  this.serviceId_ = $serviceId$$;
};
lf.service.ServiceId.prototype.toString = function $lf$service$ServiceId$$toString$() {
  return this.serviceId_;
};
lf.service.BACK_STORE = new lf.service.ServiceId("backstore");
lf.service.CACHE = new lf.service.ServiceId("cache");
lf.service.INDEX_STORE = new lf.service.ServiceId("indexstore");
lf.service.QUERY_ENGINE = new lf.service.ServiceId("engine");
lf.service.RUNNER = new lf.service.ServiceId("runner");
lf.service.OBSERVER_REGISTRY = new lf.service.ServiceId("observerregistry");
lf.service.SCHEMA = new lf.service.ServiceId("schema");
lf.backstore.BundledObjectStore = function $lf$backstore$BundledObjectStore$($store$$, $deserializeFn$$, $retrievePageFn$$) {
  this.store_ = $store$$;
  this.deserializeFn_ = $deserializeFn$$;
  this.retrievePageFn_ = $retrievePageFn$$;
};
lf.backstore.BundledObjectStore.prototype.get = function $lf$backstore$BundledObjectStore$$get$($ids$$) {
  if (0 == $ids$$.length) {
    return this.getAll_();
  }
  var $deserializeFn$$ = this.deserializeFn_;
  return this.getPagesByRowIds_($ids$$).then(function($pages$$) {
    return $ids$$.map(function($id$$) {
      var $page$$ = $pages$$.get(lf.backstore.Page.toPageId($id$$));
      goog.asserts.assert($page$$, "Containing page is empty");
      return $deserializeFn$$($page$$.getPayload()[$id$$]);
    });
  });
};
lf.backstore.BundledObjectStore.prototype.getPagesByRowIds_ = function $lf$backstore$BundledObjectStore$$getPagesByRowIds_$($promises$$4_rowIds$$) {
  var $results$$ = lf.structs.map.create(), $resolver$$ = goog.Promise.withResolver();
  $promises$$4_rowIds$$ = lf.backstore.Page.toPageIds($promises$$4_rowIds$$).map(function($id$$, $index$$) {
    return new goog.Promise(function($resolve$$, $reject$$) {
      var $request$$;
      try {
        $request$$ = this.store_.get($id$$);
      } catch ($e$$) {
        $reject$$($e$$);
        return;
      }
      $request$$.onerror = $reject$$;
      $request$$.onsuccess = function $$request$$$onsuccess$($ev_page$$) {
        $ev_page$$ = lf.backstore.Page.deserialize($ev_page$$.target.result);
        $results$$.set($ev_page$$.getId(), $ev_page$$);
        $resolve$$();
      };
    }, this);
  }, this);
  goog.Promise.all($promises$$4_rowIds$$).then(function() {
    $resolver$$.resolve($results$$);
  });
  return $resolver$$.promise;
};
lf.backstore.BundledObjectStore.prototype.getAll_ = function $lf$backstore$BundledObjectStore$$getAll_$() {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $rows$$ = [], $request$$;
    try {
      $request$$ = this.store_.openCursor();
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $request$$.onerror = $reject$$;
    $request$$.onsuccess = function() {
      var $cursor$$ = $request$$.result;
      if ($cursor$$) {
        var $data$$ = lf.backstore.Page.deserialize($cursor$$.value).getPayload(), $key$$;
        for ($key$$ in $data$$) {
          $rows$$.push(this.deserializeFn_($data$$[$key$$]));
        }
        $cursor$$.continue();
      } else {
        $resolve$$($rows$$);
      }
    }.bind(this);
  }, this);
};
lf.backstore.BundledObjectStore.prototype.performWriteOp_ = function $lf$backstore$BundledObjectStore$$performWriteOp_$($reqFactory$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $request$$;
    try {
      $request$$ = $reqFactory$$();
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $request$$.onsuccess = $resolve$$;
    $request$$.onerror = $reject$$;
  }, this);
};
lf.backstore.BundledObjectStore.prototype.put = function $lf$backstore$BundledObjectStore$$put$($promises$$5_rows$$) {
  if (0 == $promises$$5_rows$$.length) {
    return goog.Promise.resolve();
  }
  var $pages$$ = lf.structs.map.create();
  $promises$$5_rows$$.forEach(function($row$$) {
    var $pageId$$ = lf.backstore.Page.toPageId($row$$.id()), $page$$ = $pages$$.get($pageId$$) || null;
    goog.isNull($page$$) && ($page$$ = this.retrievePageFn_(this.store_.name, $pageId$$));
    $page$$.setRows([$row$$]);
    $pages$$.set($pageId$$, $page$$);
  }, this);
  $promises$$5_rows$$ = lf.structs.map.values($pages$$).map(function($page$$) {
    return this.performWriteOp_(function() {
      return this.store_.put($page$$.serialize());
    }.bind(this));
  }, this);
  return goog.Promise.all($promises$$5_rows$$);
};
lf.backstore.BundledObjectStore.prototype.remove = function $lf$backstore$BundledObjectStore$$remove$($ids$$2_promises$$) {
  if (0 == $ids$$2_promises$$.length) {
    return this.performWriteOp_(function() {
      return this.store_.clear();
    }.bind(this));
  }
  var $pages$$ = lf.structs.map.create();
  $ids$$2_promises$$.forEach(function($id$$) {
    var $pageId$$ = lf.backstore.Page.toPageId($id$$), $page$$ = $pages$$.get($pageId$$) || null;
    goog.isNull($page$$) && ($page$$ = this.retrievePageFn_(this.store_.name, $pageId$$));
    $page$$.removeRows([$id$$]);
    $pages$$.set($pageId$$, $page$$);
  }, this);
  $ids$$2_promises$$ = lf.structs.map.values($pages$$).map(function($page$$) {
    return this.performWriteOp_(function() {
      return 0 == Object.keys($page$$.getPayload()).length ? this.store_.delete($page$$.getId()) : this.store_.put($page$$.serialize());
    }.bind(this));
  }, this);
  return goog.Promise.all($ids$$2_promises$$);
};
lf.backstore.BundledObjectStore.getDataTablePage_ = function $lf$backstore$BundledObjectStore$getDataTablePage_$($cache$$1_global$$, $rows$$3_tableName$$, $page$$7_pageId$$) {
  $cache$$1_global$$ = $cache$$1_global$$.getService(lf.service.CACHE);
  var $range$$ = lf.backstore.Page.getPageRange($page$$7_pageId$$);
  $rows$$3_tableName$$ = $cache$$1_global$$.getRange($rows$$3_tableName$$, $range$$[0], $range$$[1]);
  $page$$7_pageId$$ = new lf.backstore.Page($page$$7_pageId$$);
  $page$$7_pageId$$.setRows($rows$$3_tableName$$);
  return $page$$7_pageId$$;
};
lf.backstore.BundledObjectStore.getIndexTablePage_ = function $lf$backstore$BundledObjectStore$getIndexTablePage_$($tableName$$, $pageId$$) {
  return new lf.backstore.Page($pageId$$);
};
lf.backstore.BundledObjectStore.forTableType = function $lf$backstore$BundledObjectStore$forTableType$($global$$2_retrievePageFn$$, $store$$, $deserializeFn$$, $tableType$$) {
  $global$$2_retrievePageFn$$ = $tableType$$ == lf.backstore.TableType.DATA ? goog.partial(lf.backstore.BundledObjectStore.getDataTablePage_, $global$$2_retrievePageFn$$) : lf.backstore.BundledObjectStore.getIndexTablePage_;
  return new lf.backstore.BundledObjectStore($store$$, $deserializeFn$$, $global$$2_retrievePageFn$$);
};
lf.index = {};
lf.index.Favor = {RHS:-1, TIE:0, LHS:1};
lf.index.Comparator = function $lf$index$Comparator$() {
};
lf.index.Index = function $lf$index$Index$() {
};
lf.cache = {};
lf.cache.InMemoryUpdater = function $lf$cache$InMemoryUpdater$($global$$) {
  this.cache_ = $global$$.getService(lf.service.CACHE);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.schema_ = $global$$.getService(lf.service.SCHEMA);
};
lf.cache.InMemoryUpdater.prototype.update = function $lf$cache$InMemoryUpdater$$update$($tableDiffs$$) {
  $tableDiffs$$.forEach(function($tableDiff$$) {
    this.updateIndicesForDiff_($tableDiff$$);
    this.updateCacheForDiff_($tableDiff$$);
  }, this);
};
lf.cache.InMemoryUpdater.prototype.updateCacheForDiff_ = function $lf$cache$InMemoryUpdater$$updateCacheForDiff_$($diff$$) {
  var $tableName$$ = $diff$$.getName();
  $diff$$.getDeleted().forEach(function($row$$, $rowId$$) {
    this.cache_.remove($tableName$$, $rowId$$);
  }, this);
  $diff$$.getAdded().forEach(function($row$$, $rowId$$) {
    this.cache_.set($tableName$$, $row$$);
  }, this);
  $diff$$.getModified().forEach(function($modification$$, $rowId$$) {
    this.cache_.set($tableName$$, $modification$$[1]);
  }, this);
};
lf.cache.InMemoryUpdater.prototype.updateIndicesForDiff_ = function $lf$cache$InMemoryUpdater$$updateIndicesForDiff_$($diff$$) {
  var $table$$ = this.schema_.table($diff$$.getName());
  $diff$$.getAsModifications().forEach(function($modification$$) {
    this.updateTableIndicesForRow($table$$, $modification$$);
  }, this);
};
lf.cache.InMemoryUpdater.prototype.updateTableIndicesForRow = function $lf$cache$InMemoryUpdater$$updateTableIndicesForRow$($table$$, $modification$$) {
  var $indices$$ = this.indexStore_.getTableIndices($table$$.getName()), $updatedIndices$$ = 0;
  $indices$$.forEach(function($index$$0$$) {
    try {
      this.updateTableIndexForRow_($index$$0$$, $modification$$), $updatedIndices$$++;
    } catch ($e$$) {
      throw $indices$$.slice(0, $updatedIndices$$).forEach(function($index$$) {
        this.updateTableIndexForRow_($index$$, [$modification$$[1], $modification$$[0]]);
      }, this), $e$$;
    }
  }, this);
};
lf.cache.InMemoryUpdater.prototype.updateTableIndexForRow_ = function $lf$cache$InMemoryUpdater$$updateTableIndexForRow_$($index$$, $modification$$) {
  var $keyNow$$ = goog.isNull($modification$$[1]) ? void 0 : $modification$$[1].keyOfIndex($index$$.getName()), $keyThen$$ = goog.isNull($modification$$[0]) ? void 0 : $modification$$[0].keyOfIndex($index$$.getName());
  if (!goog.isDef($keyThen$$) && goog.isDef($keyNow$$)) {
    $index$$.add($keyNow$$, $modification$$[1].id());
  } else {
    if (goog.isDef($keyThen$$) && goog.isDef($keyNow$$)) {
      if (goog.isNull($keyNow$$) || goog.isNull($keyThen$$)) {
        if ($keyNow$$ == $keyThen$$) {
          return;
        }
      } else {
        if ($index$$.comparator().compare($keyThen$$, $keyNow$$) == lf.index.Favor.TIE) {
          return;
        }
      }
      $index$$.add($keyNow$$, $modification$$[1].id());
      $index$$.remove($keyThen$$, $modification$$[0].id());
    } else {
      goog.isDef($keyThen$$) && !goog.isDef($keyNow$$) && $index$$.remove($keyThen$$, $modification$$[0].id());
    }
  }
};
lf.Exception = function $lf$Exception$($code$$, $var_args$$) {
  this.code = $code$$;
  this.message = "http://sn.im/2a0j3wn?c=" + $code$$;
  if (1 < arguments.length) {
    for (var $i$$ = 1;$i$$ <= Math.min(4, arguments.length - 1);++$i$$) {
      this.message += "&p" + ($i$$ - 1) + "=" + encodeURIComponent(arguments[$i$$].toString().slice(0, 64));
    }
  }
};
goog.inherits(lf.Exception, Error);
lf.structs.MapSet = function $lf$structs$MapSet$() {
  this.map_ = lf.structs.map.create();
  this.size = 0;
};
lf.structs.MapSet.prototype.has = function $lf$structs$MapSet$$has$($key$$) {
  return this.map_.has($key$$);
};
lf.structs.MapSet.prototype.set = function $lf$structs$MapSet$$set$($key$$, $value$$) {
  var $valueSet$$ = this.map_.get($key$$) || null;
  goog.isNull($valueSet$$) && ($valueSet$$ = lf.structs.set.create(), this.map_.set($key$$, $valueSet$$));
  $valueSet$$.has($value$$) || ($valueSet$$.add($value$$), this.size++);
  return this;
};
lf.structs.MapSet.prototype.setMany = function $lf$structs$MapSet$$setMany$($key$$, $values$$) {
  var $valueSet$$ = this.map_.get($key$$) || null;
  goog.isNull($valueSet$$) && ($valueSet$$ = lf.structs.set.create(), this.map_.set($key$$, $valueSet$$));
  $values$$.forEach(function($value$$) {
    $valueSet$$.has($value$$) || ($valueSet$$.add($value$$), this.size++);
  }, this);
  return this;
};
lf.structs.MapSet.prototype.merge = function $lf$structs$MapSet$$merge$($mapSet$$) {
  $mapSet$$.keys().forEach(function($key$$) {
    var $values$$ = $mapSet$$.get($key$$);
    this.setMany($key$$, $values$$);
  }, this);
  return this;
};
lf.structs.MapSet.prototype.delete = function $lf$structs$MapSet$$delete$($key$$, $value$$) {
  var $valueSet$$ = this.map_.get($key$$) || null;
  if (goog.isNull($valueSet$$)) {
    return !1;
  }
  var $didRemove$$ = $valueSet$$.delete($value$$);
  $didRemove$$ && (--this.size, 0 == $valueSet$$.size && this.map_.delete($key$$));
  return $didRemove$$;
};
lf.structs.MapSet.prototype.get = function $lf$structs$MapSet$$get$($key$$78_valueSet$$) {
  $key$$78_valueSet$$ = this.map_.get($key$$78_valueSet$$) || null;
  return goog.isNull($key$$78_valueSet$$) ? null : lf.structs.set.values($key$$78_valueSet$$);
};
lf.structs.MapSet.prototype.clear = function $lf$structs$MapSet$$clear$() {
  this.map_.clear();
  this.size = 0;
};
lf.structs.MapSet.prototype.keys = function $lf$structs$MapSet$$keys$() {
  return lf.structs.map.keys(this.map_);
};
lf.structs.MapSet.prototype.values = function $lf$structs$MapSet$$values$() {
  var $results$$ = [];
  this.map_.forEach(function($valueSet$$, $key$$) {
    $results$$.push.apply($results$$, lf.structs.set.values($valueSet$$));
  });
  return $results$$;
};
lf.cache.ConstraintChecker = function $lf$cache$ConstraintChecker$($global$$) {
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.schema_ = $global$$.getService(lf.service.SCHEMA);
  this.cache_ = $global$$.getService(lf.service.CACHE);
  this.foreignKeysParentIndices_ = null;
};
lf.cache.ConstraintChecker.prototype.findExistingRowIdInPkIndex = function $lf$cache$ConstraintChecker$$findExistingRowIdInPkIndex$($table$$, $row$$) {
  var $pkIndexSchema$$ = $table$$.getConstraint().getPrimaryKey();
  return goog.isNull($pkIndexSchema$$) ? null : this.findExistingRowIdInIndex_($pkIndexSchema$$, $row$$);
};
lf.cache.ConstraintChecker.prototype.findExistingRowIdInIndex_ = function $lf$cache$ConstraintChecker$$findExistingRowIdInIndex_$($indexSchema$$, $row$$) {
  var $indexName$$2_rowIds$$ = $indexSchema$$.getNormalizedName(), $indexKey$$ = $row$$.keyOfIndex($indexName$$2_rowIds$$), $indexName$$2_rowIds$$ = this.indexStore_.get($indexName$$2_rowIds$$).get($indexKey$$);
  return 0 == $indexName$$2_rowIds$$.length ? null : $indexName$$2_rowIds$$[0];
};
lf.cache.ConstraintChecker.prototype.checkNotNullable = function $lf$cache$ConstraintChecker$$checkNotNullable$($table$$, $rows$$) {
  var $notNullable$$ = $table$$.getConstraint().getNotNullable();
  $rows$$.forEach(function($row$$) {
    $notNullable$$.forEach(function($column$$) {
      if (!goog.isDefAndNotNull($row$$.payload()[$column$$.getName()])) {
        throw new lf.Exception(202, $column$$.getNormalizedName());
      }
    }, this);
  }, this);
};
lf.cache.ConstraintChecker.prototype.checkReferredKeys_ = function $lf$cache$ConstraintChecker$$checkReferredKeys_$($table$$, $modifications$$, $constraintTiming$$) {
  $table$$.getConstraint().getForeignKeys().forEach(function($foreignKeySpec$$) {
    $foreignKeySpec$$.timing == $constraintTiming$$ && this.checkReferredKey_($foreignKeySpec$$, $modifications$$);
  }, this);
};
lf.cache.ConstraintChecker.prototype.checkReferredKey_ = function $lf$cache$ConstraintChecker$$checkReferredKey_$($foreignKeySpec$$, $modifications$$) {
  var $parentIndex$$ = this.getParentIndex_($foreignKeySpec$$);
  $modifications$$.forEach(function($modification$$) {
    if (lf.cache.ConstraintChecker.didColumnValueChange_($modification$$[0], $modification$$[1], $foreignKeySpec$$.name) && ($modification$$ = $modification$$[1].keyOfIndex($foreignKeySpec$$.name), !goog.isNull($modification$$) && !$parentIndex$$.containsKey($modification$$))) {
      throw new lf.Exception(203, $foreignKeySpec$$.name);
    }
  }, this);
};
lf.cache.ConstraintChecker.prototype.findParentIndex_ = function $lf$cache$ConstraintChecker$$findParentIndex_$($foreignKeySpec$$) {
  $foreignKeySpec$$ = this.schema_.table($foreignKeySpec$$.parentTable)[$foreignKeySpec$$.parentColumn].getIndex();
  return this.indexStore_.get($foreignKeySpec$$.getNormalizedName());
};
lf.cache.ConstraintChecker.prototype.getParentIndex_ = function $lf$cache$ConstraintChecker$$getParentIndex_$($foreignKeySpec$$) {
  goog.isNull(this.foreignKeysParentIndices_) && (this.foreignKeysParentIndices_ = lf.structs.map.create());
  var $parentIndex$$ = this.foreignKeysParentIndices_.get($foreignKeySpec$$.name) || null;
  goog.isNull($parentIndex$$) && ($parentIndex$$ = this.findParentIndex_($foreignKeySpec$$), this.foreignKeysParentIndices_.set($foreignKeySpec$$.name, $parentIndex$$));
  return $parentIndex$$;
};
lf.cache.ConstraintChecker.didColumnValueChange_ = function $lf$cache$ConstraintChecker$didColumnValueChange_$($rowBefore$$, $rowAfter$$, $indexName$$) {
  return (goog.isNull($rowBefore$$) ? !goog.isNull($rowAfter$$) : goog.isNull($rowAfter$$)) || $rowBefore$$.keyOfIndex($indexName$$) != $rowAfter$$.keyOfIndex($indexName$$);
};
lf.cache.ConstraintChecker.prototype.checkReferringKeys_ = function $lf$cache$ConstraintChecker$$checkReferringKeys_$($foreignKeySpecs$$1_table$$, $modifications$$, $constraintTiming$$, $opt_constraintAction$$) {
  $foreignKeySpecs$$1_table$$ = this.schema_.info().getReferencingForeignKeys($foreignKeySpecs$$1_table$$.getName(), $opt_constraintAction$$);
  goog.isNull($foreignKeySpecs$$1_table$$) || ($foreignKeySpecs$$1_table$$ = $foreignKeySpecs$$1_table$$.filter(function($foreignKeySpec$$) {
    return $foreignKeySpec$$.timing == $constraintTiming$$;
  }), 0 != $foreignKeySpecs$$1_table$$.length && this.loopThroughReferringRows_($foreignKeySpecs$$1_table$$, $modifications$$, function($foreignKeySpec$$, $childIndex$$, $parentKey$$) {
    if ($childIndex$$.containsKey($parentKey$$)) {
      throw new lf.Exception(203, $foreignKeySpec$$.name);
    }
  }));
};
lf.cache.ConstraintChecker.prototype.findReferringRowIds_ = function $lf$cache$ConstraintChecker$$findReferringRowIds_$($table$$, $modifications$$) {
  var $foreignKeySpecs$$ = this.schema_.info().getReferencingForeignKeys($table$$.getName(), lf.ConstraintAction.CASCADE);
  if (goog.isNull($foreignKeySpecs$$)) {
    return null;
  }
  var $referringRowIds$$ = new lf.structs.MapSet;
  this.loopThroughReferringRows_($foreignKeySpecs$$, $modifications$$, function($foreignKeySpec$$, $childIndex$$, $parentKey$$) {
    $childIndex$$ = $childIndex$$.get($parentKey$$);
    0 < $childIndex$$.length && $referringRowIds$$.setMany($foreignKeySpec$$.childTable, $childIndex$$);
  });
  return $referringRowIds$$;
};
lf.cache.ConstraintChecker.prototype.detectCascadeUpdates = function $lf$cache$ConstraintChecker$$detectCascadeUpdates$($table$$, $modifications$$, $foreignKeySpecs$$) {
  var $cascadedUpdates$$ = new lf.structs.MapSet;
  this.loopThroughReferringRows_($foreignKeySpecs$$, $modifications$$, function($foreignKeySpec$$, $childIndex$$, $parentKey$$, $modification$$) {
    $childIndex$$.get($parentKey$$).forEach(function($rowId$$) {
      $cascadedUpdates$$.set($rowId$$, {fkSpec:$foreignKeySpec$$, originalUpdatedRow:$modification$$[1]});
    });
  });
  return $cascadedUpdates$$;
};
lf.cache.ConstraintChecker.prototype.loopThroughReferringRows_ = function $lf$cache$ConstraintChecker$$loopThroughReferringRows_$($foreignKeySpecs$$, $modifications$$, $callbackFn$$) {
  $foreignKeySpecs$$.forEach(function($foreignKeySpec$$) {
    var $childIndex$$ = this.indexStore_.get($foreignKeySpec$$.name), $parentIndex$$ = this.getParentIndex_($foreignKeySpec$$);
    $modifications$$.forEach(function($modification$$) {
      if (lf.cache.ConstraintChecker.didColumnValueChange_($modification$$[0], $modification$$[1], $parentIndex$$.getName())) {
        var $parentKey$$ = $modification$$[0].keyOfIndex($parentIndex$$.getName());
        $callbackFn$$($foreignKeySpec$$, $childIndex$$, $parentKey$$, $modification$$);
      }
    }, this);
  }, this);
};
lf.cache.ConstraintChecker.prototype.checkForeignKeysForInsert = function $lf$cache$ConstraintChecker$$checkForeignKeysForInsert$($table$$, $modifications$$7_rows$$, $constraintTiming$$) {
  0 != $modifications$$7_rows$$.length && ($modifications$$7_rows$$ = $modifications$$7_rows$$.map(function($row$$) {
    return [null, $row$$];
  }), this.checkReferredKeys_($table$$, $modifications$$7_rows$$, $constraintTiming$$));
};
lf.cache.ConstraintChecker.prototype.checkForeignKeysForUpdate = function $lf$cache$ConstraintChecker$$checkForeignKeysForUpdate$($table$$, $modifications$$, $constraintTiming$$) {
  0 != $modifications$$.length && (this.checkReferredKeys_($table$$, $modifications$$, $constraintTiming$$), this.checkReferringKeys_($table$$, $modifications$$, $constraintTiming$$, lf.ConstraintAction.RESTRICT));
};
lf.cache.ConstraintChecker.prototype.checkForeignKeysForDelete = function $lf$cache$ConstraintChecker$$checkForeignKeysForDelete$($table$$, $modifications$$9_rows$$, $constraintTiming$$) {
  0 != $modifications$$9_rows$$.length && ($modifications$$9_rows$$ = $modifications$$9_rows$$.map(function($row$$) {
    return [$row$$, null];
  }), this.checkReferringKeys_($table$$, $modifications$$9_rows$$, $constraintTiming$$, lf.ConstraintAction.RESTRICT));
};
lf.cache.ConstraintChecker.prototype.detectCascadeDeletion = function $lf$cache$ConstraintChecker$$detectCascadeDeletion$($table$$, $rows$$) {
  var $result$$ = {tableOrder:[], rowIdsPerTable:new lf.structs.MapSet}, $lastRowIdsToDelete$$ = new lf.structs.MapSet;
  $lastRowIdsToDelete$$.setMany($table$$.getName(), $rows$$.map(function($row$$) {
    return $row$$.id();
  }));
  do {
    var $newRowIdsToDelete$$ = new lf.structs.MapSet;
    $lastRowIdsToDelete$$.keys().forEach(function($modifications$$10_tableName$$) {
      var $referringRowIds$$1_table$$ = this.schema_.table($modifications$$10_tableName$$);
      $modifications$$10_tableName$$ = $lastRowIdsToDelete$$.get($modifications$$10_tableName$$).map(function($rowId$$) {
        return [this.cache_.get($rowId$$), null];
      }, this);
      $referringRowIds$$1_table$$ = this.findReferringRowIds_($referringRowIds$$1_table$$, $modifications$$10_tableName$$);
      goog.isNull($referringRowIds$$1_table$$) || ($result$$.tableOrder.unshift.apply($result$$.tableOrder, $referringRowIds$$1_table$$.keys()), $newRowIdsToDelete$$.merge($referringRowIds$$1_table$$));
    }, this);
    $lastRowIdsToDelete$$ = $newRowIdsToDelete$$;
    $result$$.rowIdsPerTable.merge($lastRowIdsToDelete$$);
  } while (0 < $lastRowIdsToDelete$$.size);
  return $result$$;
};
lf.cache.TableDiff = function $lf$cache$TableDiff$($name$$) {
  this.added_ = lf.structs.map.create();
  this.modified_ = lf.structs.map.create();
  this.deleted_ = lf.structs.map.create();
  this.name_ = $name$$;
};
lf.cache.TableDiff.prototype.getName = function $lf$cache$TableDiff$$getName$() {
  return this.name_;
};
lf.cache.TableDiff.prototype.getAdded = function $lf$cache$TableDiff$$getAdded$() {
  return this.added_;
};
lf.cache.TableDiff.prototype.getModified = function $lf$cache$TableDiff$$getModified$() {
  return this.modified_;
};
lf.cache.TableDiff.prototype.getDeleted = function $lf$cache$TableDiff$$getDeleted$() {
  return this.deleted_;
};
lf.cache.TableDiff.prototype.add = function $lf$cache$TableDiff$$add$($row$$) {
  if (this.deleted_.has($row$$.id())) {
    var $modification$$ = [this.deleted_.get($row$$.id()), $row$$];
    this.modified_.set($row$$.id(), $modification$$);
    this.deleted_.delete($row$$.id());
  } else {
    this.added_.set($row$$.id(), $row$$);
  }
};
lf.cache.TableDiff.prototype.modify = function $lf$cache$TableDiff$$modify$($modification$$) {
  var $id$$ = $modification$$[0], $newValue$$ = $modification$$[1];
  goog.asserts.assert($id$$.id() == $newValue$$.id(), "Row ID mismatch between old/new values.");
  $id$$ = $id$$.id();
  this.added_.has($id$$) ? this.added_.set($id$$, $newValue$$) : (this.modified_.has($id$$) && ($modification$$ = [this.modified_.get($modification$$[0].id())[0], $newValue$$]), this.modified_.set($id$$, $modification$$));
};
lf.cache.TableDiff.prototype.delete = function $lf$cache$TableDiff$$delete$($row$$) {
  if (this.added_.has($row$$.id())) {
    this.added_.delete($row$$.id());
  } else {
    if (this.modified_.has($row$$.id())) {
      var $originalRow$$ = this.modified_.get($row$$.id())[0];
      this.modified_.delete($row$$.id());
      this.deleted_.set($row$$.id(), $originalRow$$);
    } else {
      this.deleted_.set($row$$.id(), $row$$);
    }
  }
};
lf.cache.TableDiff.prototype.merge = function $lf$cache$TableDiff$$merge$($other$$) {
  $other$$.added_.forEach(function($row$$, $rowId$$) {
    this.add($row$$);
  }, this);
  $other$$.modified_.forEach(function($modification$$, $rowId$$) {
    this.modify($modification$$);
  }, this);
  $other$$.deleted_.forEach(function($row$$, $rowId$$) {
    this.delete($row$$);
  }, this);
};
lf.cache.TableDiff.prototype.getAsModifications = function $lf$cache$TableDiff$$getAsModifications$() {
  var $modifications$$ = [];
  this.added_.forEach(function($row$$, $id$$) {
    $modifications$$.push([null, $row$$]);
  });
  this.modified_.forEach(function($modification$$, $id$$) {
    $modifications$$.push($modification$$);
  });
  this.deleted_.forEach(function($row$$, $id$$) {
    $modifications$$.push([$row$$, null]);
  });
  return $modifications$$;
};
lf.cache.TableDiff.prototype.toString = function $lf$cache$TableDiff$$toString$() {
  return "[" + lf.structs.map.keys(this.added_).toString() + "], [" + lf.structs.map.keys(this.modified_).toString() + "], [" + lf.structs.map.keys(this.deleted_).toString() + "]";
};
lf.cache.TableDiff.prototype.getReverse = function $lf$cache$TableDiff$$getReverse$() {
  var $reverseDiff$$ = new lf.cache.TableDiff(this.name_);
  this.added_.forEach(function($row$$, $id$$) {
    $reverseDiff$$.delete($row$$);
  });
  this.deleted_.forEach(function($row$$, $id$$) {
    $reverseDiff$$.add($row$$);
  });
  this.modified_.forEach(function($modification$$, $id$$) {
    $reverseDiff$$.modify([$modification$$[1], $modification$$[0]]);
  });
  return $reverseDiff$$;
};
lf.cache.TableDiff.prototype.isEmpty = function $lf$cache$TableDiff$$isEmpty$() {
  return 0 == this.added_.size && 0 == this.deleted_.size && 0 == this.modified_.size;
};
lf.cache.Journal = function $lf$cache$Journal$($global$$, $scope$$) {
  this.scope_ = lf.structs.map.create();
  $scope$$.forEach(function($tableSchema$$) {
    this.scope_.set($tableSchema$$.getName(), $tableSchema$$);
  }, this);
  this.schema_ = $global$$.getService(lf.service.SCHEMA);
  this.cache_ = $global$$.getService(lf.service.CACHE);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.constraintChecker_ = new lf.cache.ConstraintChecker($global$$);
  this.inMemoryUpdater_ = new lf.cache.InMemoryUpdater($global$$);
  this.pendingRollback_ = this.terminated_ = !1;
  this.tableDiffs_ = lf.structs.map.create();
};
lf.cache.Journal.prototype.getDiff = function $lf$cache$Journal$$getDiff$() {
  return this.tableDiffs_;
};
lf.cache.Journal.prototype.getIndexDiff = function $lf$cache$Journal$$getIndexDiff$() {
  var $indices$$ = [];
  lf.structs.map.keys(this.tableDiffs_).map(function($tableName$$) {
    return this.scope_.get($tableName$$);
  }, this).forEach(function($tableSchema$$) {
    $tableSchema$$.persistentIndex() && ($tableSchema$$.getIndices().forEach(function($indexSchema$$) {
      $indices$$.push(this.indexStore_.get($indexSchema$$.getNormalizedName()));
    }, this), $indices$$.push(this.indexStore_.get($tableSchema$$.getName() + ".#")));
  }, this);
  return $indices$$;
};
lf.cache.Journal.prototype.getScope = function $lf$cache$Journal$$getScope$() {
  return this.scope_;
};
lf.cache.Journal.prototype.insert = function $lf$cache$Journal$$insert$($table$$, $rows$$) {
  this.assertJournalWritable_();
  this.checkScope_($table$$);
  this.constraintChecker_.checkNotNullable($table$$, $rows$$);
  this.constraintChecker_.checkForeignKeysForInsert($table$$, $rows$$, lf.ConstraintTiming.IMMEDIATE);
  for (var $i$$ = 0;$i$$ < $rows$$.length;$i$$++) {
    this.modifyRow_($table$$, [null, $rows$$[$i$$]]);
  }
};
lf.cache.Journal.prototype.modifyRow_ = function $lf$cache$Journal$$modifyRow_$($table$$, $modification$$) {
  var $tableName$$ = $table$$.getName(), $diff$$ = this.tableDiffs_.get($tableName$$) || new lf.cache.TableDiff($tableName$$);
  this.tableDiffs_.set($tableName$$, $diff$$);
  try {
    this.inMemoryUpdater_.updateTableIndicesForRow($table$$, $modification$$);
  } catch ($e$$) {
    throw this.pendingRollback_ = !0, $e$$;
  }
  var $rowBefore$$ = $modification$$[0], $rowNow$$ = $modification$$[1];
  goog.isNull($rowBefore$$) && !goog.isNull($rowNow$$) ? (this.cache_.set($tableName$$, $rowNow$$), $diff$$.add($rowNow$$)) : goog.isNull($rowBefore$$) || goog.isNull($rowNow$$) ? !goog.isNull($rowBefore$$) && goog.isNull($rowNow$$) && (this.cache_.remove($tableName$$, $rowBefore$$.id()), $diff$$.delete($rowBefore$$)) : (this.cache_.set($tableName$$, $rowNow$$), $diff$$.modify($modification$$));
};
lf.cache.Journal.prototype.update = function $lf$cache$Journal$$update$($table$$, $rows$$) {
  this.assertJournalWritable_();
  this.checkScope_($table$$);
  this.constraintChecker_.checkNotNullable($table$$, $rows$$);
  var $modifications$$ = $rows$$.map(function($row$$) {
    return [this.cache_.get($row$$.id()), $row$$];
  }, this);
  this.updateByCascade_($table$$, $modifications$$);
  this.constraintChecker_.checkForeignKeysForUpdate($table$$, $modifications$$, lf.ConstraintTiming.IMMEDIATE);
  $modifications$$.forEach(function($modification$$) {
    this.modifyRow_($table$$, $modification$$);
  }, this);
};
lf.cache.Journal.prototype.insertOrReplace = function $lf$cache$Journal$$insertOrReplace$($table$$, $rows$$) {
  this.assertJournalWritable_();
  this.checkScope_($table$$);
  this.constraintChecker_.checkNotNullable($table$$, $rows$$);
  for (var $i$$ = 0;$i$$ < $rows$$.length;$i$$++) {
    var $rowNow$$ = $rows$$[$i$$], $rowBefore$$ = null, $existingRowId$$ = this.constraintChecker_.findExistingRowIdInPkIndex($table$$, $rowNow$$);
    goog.isDefAndNotNull($existingRowId$$) ? ($rowBefore$$ = this.cache_.get($existingRowId$$), $rowNow$$.assignRowId($existingRowId$$), this.constraintChecker_.checkForeignKeysForUpdate($table$$, [[$rowBefore$$, $rowNow$$]], lf.ConstraintTiming.IMMEDIATE)) : this.constraintChecker_.checkForeignKeysForInsert($table$$, [$rowNow$$], lf.ConstraintTiming.IMMEDIATE);
    this.modifyRow_($table$$, [$rowBefore$$, $rowNow$$]);
  }
};
lf.cache.Journal.prototype.remove = function $lf$cache$Journal$$remove$($table$$, $rows$$) {
  this.assertJournalWritable_();
  this.checkScope_($table$$);
  this.removeByCascade_($table$$, $rows$$);
  this.constraintChecker_.checkForeignKeysForDelete($table$$, $rows$$, lf.ConstraintTiming.IMMEDIATE);
  for (var $i$$ = 0;$i$$ < $rows$$.length;$i$$++) {
    this.modifyRow_($table$$, [$rows$$[$i$$], null]);
  }
};
lf.cache.Journal.prototype.updateByCascade_ = function $lf$cache$Journal$$updateByCascade_$($table$$0$$, $modifications$$) {
  var $foreignKeySpecs$$ = this.schema_.info().getReferencingForeignKeys($table$$0$$.getName(), lf.ConstraintAction.CASCADE);
  if (!goog.isNull($foreignKeySpecs$$)) {
    var $cascadedUpdates$$ = this.constraintChecker_.detectCascadeUpdates($table$$0$$, $modifications$$, $foreignKeySpecs$$);
    $cascadedUpdates$$.keys().forEach(function($rowId$$) {
      $cascadedUpdates$$.get($rowId$$).forEach(function($update$$) {
        var $table$$ = this.schema_.table($update$$.fkSpec.childTable), $rowBefore$$ = this.cache_.get($rowId$$), $rowAfter$$ = $table$$.deserializeRow($rowBefore$$.serialize());
        $rowAfter$$.payload()[$update$$.fkSpec.childColumn] = $update$$.originalUpdatedRow.payload()[$update$$.fkSpec.parentColumn];
        this.modifyRow_($table$$, [$rowBefore$$, $rowAfter$$]);
      }, this);
    }, this);
  }
};
lf.cache.Journal.prototype.removeByCascade_ = function $lf$cache$Journal$$removeByCascade_$($table$$0$$, $rows$$) {
  var $cascadeDeletion_foreignKeySpecs$$ = this.schema_.info().getReferencingForeignKeys($table$$0$$.getName(), lf.ConstraintAction.CASCADE);
  if (!goog.isNull($cascadeDeletion_foreignKeySpecs$$)) {
    var $cascadeDeletion_foreignKeySpecs$$ = this.constraintChecker_.detectCascadeDeletion($table$$0$$, $rows$$), $cascadeRowIds$$ = $cascadeDeletion_foreignKeySpecs$$.rowIdsPerTable;
    $cascadeDeletion_foreignKeySpecs$$.tableOrder.forEach(function($rows$$13_tableName$$) {
      var $table$$ = this.schema_.table($rows$$13_tableName$$);
      $rows$$13_tableName$$ = $cascadeRowIds$$.get($rows$$13_tableName$$).map(function($rowId$$) {
        return this.cache_.get($rowId$$);
      }, this);
      this.constraintChecker_.checkForeignKeysForDelete($table$$, $rows$$13_tableName$$, lf.ConstraintTiming.IMMEDIATE);
      $rows$$13_tableName$$.forEach(function($row$$) {
        this.modifyRow_($table$$, [$row$$, null]);
      }, this);
    }, this);
  }
};
lf.cache.Journal.prototype.checkDeferredConstraints = function $lf$cache$Journal$$checkDeferredConstraints$() {
  this.tableDiffs_.forEach(function($tableDiff$$, $tableName$$) {
    var $table$$ = this.scope_.get($tableDiff$$.getName());
    this.constraintChecker_.checkForeignKeysForInsert($table$$, lf.structs.map.values($tableDiff$$.getAdded()), lf.ConstraintTiming.DEFERRABLE);
    this.constraintChecker_.checkForeignKeysForDelete($table$$, lf.structs.map.values($tableDiff$$.getDeleted()), lf.ConstraintTiming.DEFERRABLE);
    this.constraintChecker_.checkForeignKeysForUpdate($table$$, lf.structs.map.values($tableDiff$$.getModified()), lf.ConstraintTiming.DEFERRABLE);
  }, this);
};
lf.cache.Journal.prototype.commit = function $lf$cache$Journal$$commit$() {
  this.assertJournalWritable_();
  this.terminated_ = !0;
};
lf.cache.Journal.prototype.assertJournalWritable_ = function $lf$cache$Journal$$assertJournalWritable_$() {
  goog.asserts.assert(!this.pendingRollback_, "Attemptted to use journal that needs to be rolled back.");
  goog.asserts.assert(!this.terminated_, "Attemptted to commit a terminated journal.");
};
lf.cache.Journal.prototype.rollback = function $lf$cache$Journal$$rollback$() {
  goog.asserts.assert(!this.terminated_, "Attempted to rollback a terminated journal.");
  var $reverseDiffs$$ = lf.structs.map.values(this.tableDiffs_).map(function($tableDiff$$) {
    return $tableDiff$$.getReverse();
  });
  this.inMemoryUpdater_.update($reverseDiffs$$);
  this.terminated_ = !0;
  this.pendingRollback_ = !1;
};
lf.cache.Journal.prototype.checkScope_ = function $lf$cache$Journal$$checkScope_$($tableSchema$$) {
  if (!this.scope_.has($tableSchema$$.getName())) {
    throw new lf.Exception(106, $tableSchema$$.getName());
  }
};
lf.proc = {};
lf.proc.PhysicalQueryPlan = function $lf$proc$PhysicalQueryPlan$($rootNode$$, $scope$$) {
  this.rootNode_ = $rootNode$$;
  this.scope_ = $scope$$;
};
lf.proc.PhysicalQueryPlan.prototype.getRoot = function $lf$proc$PhysicalQueryPlan$$getRoot$() {
  return this.rootNode_;
};
lf.proc.PhysicalQueryPlan.prototype.getScope = function $lf$proc$PhysicalQueryPlan$$getScope$() {
  return this.scope_;
};
lf.proc.PhysicalQueryPlan.getCombinedScope = function $lf$proc$PhysicalQueryPlan$getCombinedScope$($plans$$) {
  var $tableSet$$ = lf.structs.set.create();
  $plans$$.forEach(function($plan$$) {
    $plan$$.getScope().forEach($tableSet$$.add.bind($tableSet$$));
  });
  return $tableSet$$;
};
lf.proc.Task = function $lf$proc$Task$() {
};
lf.proc.TaskPriority = {EXPORT_TASK:0, IMPORT_TASK:0, OBSERVER_QUERY_TASK:0, EXTERNAL_CHANGE_TASK:1, USER_QUERY_TASK:2, TRANSACTION_TASK:2};
lf.bind = function $lf$bind$($index$$) {
  return new lf.Binder($index$$);
};
goog.exportSymbol("lf.bind", lf.bind);
lf.Binder = function $lf$Binder$($index$$) {
  this.index_ = $index$$;
};
goog.exportSymbol("lf.Binder", lf.Binder);
lf.Binder.prototype.getIndex = function $lf$Binder$$getIndex$() {
  return this.index_;
};
lf.eval = {};
lf.eval.Type = {BETWEEN:"between", EQ:"eq", GTE:"gte", GT:"gt", IN:"in", LTE:"lte", LT:"lt", MATCH:"match", NEQ:"neq"};
lf.eval.Registry = function $lf$eval$Registry$() {
  this.keyOfIndexConversionMap_ = lf.eval.buildKeyOfIndexConversionMap_();
  var $numberOrIntegerEvalMap$$ = lf.eval.buildNumberEvaluatorMap_();
  this.evalMaps_ = lf.structs.map.create();
  this.evalMaps_.set(lf.Type.BOOLEAN, lf.eval.buildBooleanEvaluatorMap_());
  this.evalMaps_.set(lf.Type.DATE_TIME, lf.eval.buildDateEvaluatorMap_());
  this.evalMaps_.set(lf.Type.NUMBER, $numberOrIntegerEvalMap$$);
  this.evalMaps_.set(lf.Type.INTEGER, $numberOrIntegerEvalMap$$);
  this.evalMaps_.set(lf.Type.STRING, lf.eval.buildStringEvaluatorMap_());
};
lf.eval.Registry.get = function $lf$eval$Registry$get$() {
  goog.isDefAndNotNull(lf.eval.Registry.instance_) || (lf.eval.Registry.instance_ = new lf.eval.Registry);
  return lf.eval.Registry.instance_;
};
lf.eval.Registry.prototype.getEvaluator = function $lf$eval$Registry$$getEvaluator$($columnType$$, $evaluatorType$$) {
  var $evaluationMap_evaluatorFn$$ = this.evalMaps_.get($columnType$$) || null;
  goog.asserts.assert(!goog.isNull($evaluationMap_evaluatorFn$$), "Could not find evaluation map for " + $columnType$$);
  $evaluationMap_evaluatorFn$$ = $evaluationMap_evaluatorFn$$.get($evaluatorType$$) || null;
  goog.asserts.assert(!goog.isNull($evaluationMap_evaluatorFn$$), "Could not find evaluator for " + $columnType$$ + ", " + $evaluatorType$$);
  return $evaluationMap_evaluatorFn$$;
};
lf.eval.Registry.prototype.getKeyOfIndexEvaluator = function $lf$eval$Registry$$getKeyOfIndexEvaluator$($columnType$$) {
  var $fn$$ = this.keyOfIndexConversionMap_.get($columnType$$) || null;
  goog.asserts.assert(!goog.isNull($fn$$), "Could not find keyOfIndex evaluation function for " + $columnType$$);
  return $fn$$;
};
lf.eval.buildKeyOfIndexConversionMap_ = function $lf$eval$buildKeyOfIndexConversionMap_$() {
  var $map$$ = lf.structs.map.create();
  $map$$.set(lf.Type.BOOLEAN, function($value$$) {
    return goog.isNull($value$$) ? null : $value$$ ? 1 : 0;
  });
  $map$$.set(lf.Type.DATE_TIME, function($value$$) {
    return goog.isNull($value$$) ? null : $value$$.getTime();
  });
  var $identityFn$$ = function $$identityFn$$$($value$$) {
    return $value$$;
  };
  $map$$.set(lf.Type.INTEGER, $identityFn$$);
  $map$$.set(lf.Type.NUMBER, $identityFn$$);
  $map$$.set(lf.Type.STRING, $identityFn$$);
  return $map$$;
};
lf.eval.buildBooleanEvaluatorMap_ = function $lf$eval$buildBooleanEvaluatorMap_$() {
  var $map$$ = lf.structs.map.create();
  $map$$.set(lf.eval.Type.EQ, function($a$$, $b$$) {
    return $a$$ == $b$$;
  });
  $map$$.set(lf.eval.Type.NEQ, function($a$$, $b$$) {
    return $a$$ != $b$$;
  });
  return $map$$;
};
lf.eval.buildCommonEvaluatorMap_ = function $lf$eval$buildCommonEvaluatorMap_$() {
  var $map$$ = lf.eval.buildBooleanEvaluatorMap_();
  $map$$.set(lf.eval.Type.BETWEEN, function($a$$, $range$$) {
    return goog.isNull($a$$) || goog.isNull($range$$[0]) || goog.isNull($range$$[1]) ? !1 : $a$$ >= $range$$[0] && $a$$ <= $range$$[1];
  });
  $map$$.set(lf.eval.Type.GTE, function($a$$, $b$$) {
    return goog.isNull($a$$) || goog.isNull($b$$) ? !1 : $a$$ >= $b$$;
  });
  $map$$.set(lf.eval.Type.GT, function($a$$, $b$$) {
    return goog.isNull($a$$) || goog.isNull($b$$) ? !1 : $a$$ > $b$$;
  });
  $map$$.set(lf.eval.Type.IN, function($rowValue$$, $values$$) {
    return -1 != $values$$.indexOf($rowValue$$);
  });
  $map$$.set(lf.eval.Type.LTE, function($a$$, $b$$) {
    return goog.isNull($a$$) || goog.isNull($b$$) ? !1 : $a$$ <= $b$$;
  });
  $map$$.set(lf.eval.Type.LT, function($a$$, $b$$) {
    return goog.isNull($a$$) || goog.isNull($b$$) ? !1 : $a$$ < $b$$;
  });
  return $map$$;
};
lf.eval.buildNumberEvaluatorMap_ = function $lf$eval$buildNumberEvaluatorMap_$() {
  return lf.eval.buildCommonEvaluatorMap_();
};
lf.eval.buildStringEvaluatorMap_ = function $lf$eval$buildStringEvaluatorMap_$() {
  var $map$$ = lf.eval.buildCommonEvaluatorMap_();
  $map$$.set(lf.eval.Type.MATCH, function($value$$, $regex$$) {
    return goog.isNull($value$$) || goog.isNull($regex$$) ? !1 : (new RegExp($regex$$)).test($value$$);
  });
  return $map$$;
};
lf.eval.buildDateEvaluatorMap_ = function $lf$eval$buildDateEvaluatorMap_$() {
  var $map$$ = lf.structs.map.create();
  $map$$.set(lf.eval.Type.BETWEEN, function($a$$, $range$$) {
    return goog.isNull($a$$) || goog.isNull($range$$[0]) || goog.isNull($range$$[1]) ? !1 : $a$$.getTime() >= $range$$[0].getTime() && $a$$.getTime() <= $range$$[1].getTime();
  });
  $map$$.set(lf.eval.Type.EQ, function($a$$, $b$$) {
    var $aTime$$ = goog.isNull($a$$) ? -1 : $a$$.getTime(), $bTime$$ = goog.isNull($b$$) ? -1 : $b$$.getTime();
    return $aTime$$ == $bTime$$;
  });
  $map$$.set(lf.eval.Type.GTE, function($a$$, $b$$) {
    return goog.isNull($a$$) || goog.isNull($b$$) ? !1 : $a$$.getTime() >= $b$$.getTime();
  });
  $map$$.set(lf.eval.Type.GT, function($a$$, $b$$) {
    return goog.isNull($a$$) || goog.isNull($b$$) ? !1 : $a$$.getTime() > $b$$.getTime();
  });
  $map$$.set(lf.eval.Type.IN, function($targetValue$$, $values$$) {
    return $values$$.some(function($value$$) {
      return $value$$.getTime() == $targetValue$$.getTime();
    });
  });
  $map$$.set(lf.eval.Type.LTE, function($a$$, $b$$) {
    return goog.isNull($a$$) || goog.isNull($b$$) ? !1 : $a$$.getTime() <= $b$$.getTime();
  });
  $map$$.set(lf.eval.Type.LT, function($a$$, $b$$) {
    return goog.isNull($a$$) || goog.isNull($b$$) ? !1 : $a$$.getTime() < $b$$.getTime();
  });
  $map$$.set(lf.eval.Type.NEQ, function($a$$, $b$$) {
    var $aTime$$ = goog.isNull($a$$) ? -1 : $a$$.getTime(), $bTime$$ = goog.isNull($b$$) ? -1 : $b$$.getTime();
    return $aTime$$ != $bTime$$;
  });
  return $map$$;
};
lf.index.SingleKeyRange = function $lf$index$SingleKeyRange$($from$$, $to$$, $excludeLower$$, $excludeUpper$$) {
  this.from = $from$$;
  this.to = $to$$;
  this.excludeLower = lf.index.SingleKeyRange.isUnbound(this.from) ? !1 : $excludeLower$$;
  this.excludeUpper = lf.index.SingleKeyRange.isUnbound(this.to) ? !1 : $excludeUpper$$;
};
lf.index.UnboundKey = function $lf$index$UnboundKey$() {
};
lf.index.SingleKeyRange.UNBOUND_VALUE = new lf.index.UnboundKey;
lf.index.SingleKeyRange.isUnbound = function $lf$index$SingleKeyRange$isUnbound$($value$$) {
  return $value$$ == lf.index.SingleKeyRange.UNBOUND_VALUE;
};
lf.index.SingleKeyRange.prototype.toString = function $lf$index$SingleKeyRange$$toString$() {
  return (this.excludeLower ? "(" : "[") + (lf.index.SingleKeyRange.isUnbound(this.from) ? "unbound" : this.from) + ", " + (lf.index.SingleKeyRange.isUnbound(this.to) ? "unbound" : this.to) + (this.excludeUpper ? ")" : "]");
};
lf.index.SingleKeyRange.prototype.complement = function $lf$index$SingleKeyRange$$complement$() {
  if (this.isAll()) {
    return [];
  }
  var $keyRangeLow$$ = null, $keyRangeHigh$$ = null;
  lf.index.SingleKeyRange.isUnbound(this.from) || ($keyRangeLow$$ = new lf.index.SingleKeyRange(lf.index.SingleKeyRange.UNBOUND_VALUE, this.from, !1, !this.excludeLower));
  lf.index.SingleKeyRange.isUnbound(this.to) || ($keyRangeHigh$$ = new lf.index.SingleKeyRange(this.to, lf.index.SingleKeyRange.UNBOUND_VALUE, !this.excludeUpper, !1));
  return [$keyRangeLow$$, $keyRangeHigh$$].filter(function($keyRange$$) {
    return !goog.isNull($keyRange$$);
  });
};
lf.index.SingleKeyRange.prototype.reverse = function $lf$index$SingleKeyRange$$reverse$() {
  return new lf.index.SingleKeyRange(this.to, this.from, this.excludeUpper, this.excludeLower);
};
lf.index.SingleKeyRange.prototype.overlaps = function $lf$index$SingleKeyRange$$overlaps$($range$$8_right$$) {
  var $favor$$ = lf.index.SingleKeyRange.compareKey_(this.from, $range$$8_right$$.from, !0, this.excludeLower, $range$$8_right$$.excludeLower);
  if ($favor$$ == lf.index.Favor.TIE) {
    return !0;
  }
  var $left$$ = $favor$$ == lf.index.Favor.RHS ? this : $range$$8_right$$;
  $range$$8_right$$ = $favor$$ == lf.index.Favor.LHS ? this : $range$$8_right$$;
  return lf.index.SingleKeyRange.isUnbound($left$$.to) || $left$$.to > $range$$8_right$$.from || $left$$.to == $range$$8_right$$.from && !$left$$.excludeUpper && !$range$$8_right$$.excludeLower;
};
lf.index.SingleKeyRange.upperBound = function $lf$index$SingleKeyRange$upperBound$($key$$, $opt_shouldExclude$$) {
  return new lf.index.SingleKeyRange(lf.index.SingleKeyRange.UNBOUND_VALUE, $key$$, !1, $opt_shouldExclude$$ || !1);
};
lf.index.SingleKeyRange.lowerBound = function $lf$index$SingleKeyRange$lowerBound$($key$$, $opt_shouldExclude$$) {
  return new lf.index.SingleKeyRange($key$$, lf.index.SingleKeyRange.UNBOUND_VALUE, $opt_shouldExclude$$ || !1, !1);
};
lf.index.SingleKeyRange.only = function $lf$index$SingleKeyRange$only$($key$$) {
  return new lf.index.SingleKeyRange($key$$, $key$$, !1, !1);
};
lf.index.SingleKeyRange.all = function $lf$index$SingleKeyRange$all$() {
  return new lf.index.SingleKeyRange(lf.index.SingleKeyRange.UNBOUND_VALUE, lf.index.SingleKeyRange.UNBOUND_VALUE, !1, !1);
};
lf.index.SingleKeyRange.prototype.isAll = function $lf$index$SingleKeyRange$$isAll$() {
  return lf.index.SingleKeyRange.isUnbound(this.from) && lf.index.SingleKeyRange.isUnbound(this.to);
};
lf.index.SingleKeyRange.prototype.isOnly = function $lf$index$SingleKeyRange$$isOnly$() {
  return this.from == this.to && !lf.index.SingleKeyRange.isUnbound(this.from) && !this.excludeLower && !this.excludeUpper;
};
lf.index.SingleKeyRange.prototype.contains = function $lf$index$SingleKeyRange$$contains$($key$$83_right$$) {
  var $left$$ = lf.index.SingleKeyRange.isUnbound(this.from) || $key$$83_right$$ > this.from || $key$$83_right$$ == this.from && !this.excludeLower;
  $key$$83_right$$ = lf.index.SingleKeyRange.isUnbound(this.to) || $key$$83_right$$ < this.to || $key$$83_right$$ == this.to && !this.excludeUpper;
  return $left$$ && $key$$83_right$$;
};
lf.index.SingleKeyRange.prototype.getBounded = function $lf$index$SingleKeyRange$$getBounded$($min$$, $max$$) {
  if (lf.index.SingleKeyRange.isUnbound(this.from) && !this.contains($min$$) || lf.index.SingleKeyRange.isUnbound(this.to) && !this.contains($max$$)) {
    return null;
  }
  var $range$$ = new lf.index.SingleKeyRange($min$$, $max$$, !1, !1);
  !lf.index.SingleKeyRange.isUnbound(this.from) && this.from >= $min$$ && ($range$$.from = this.from, $range$$.excludeLower = this.excludeLower);
  !lf.index.SingleKeyRange.isUnbound(this.to) && this.to <= $max$$ && ($range$$.to = this.to, $range$$.excludeUpper = this.excludeUpper);
  return $range$$.from > $range$$.to || $range$$.from == $range$$.to && ($range$$.excludeUpper || $range$$.excludeLower) ? null : $range$$;
};
lf.index.SingleKeyRange.prototype.equals = function $lf$index$SingleKeyRange$$equals$($range$$) {
  return this.from == $range$$.from && this.excludeLower == $range$$.excludeLower && this.to == $range$$.to && this.excludeUpper == $range$$.excludeUpper;
};
lf.index.SingleKeyRange.xor = function $lf$index$SingleKeyRange$xor$($a$$, $b$$) {
  return $a$$ ? !$b$$ : $b$$;
};
lf.index.SingleKeyRange.compareKey_ = function $lf$index$SingleKeyRange$compareKey_$($l$$, $r$$, $isLeftHandSide$$, $opt_excludeL_tieLogic$$, $opt_excludeR$$) {
  var $Favor$$ = lf.index.Favor, $excludeL$$ = $opt_excludeL_tieLogic$$ || !1, $excludeR$$ = $opt_excludeR$$ || !1, $flip$$ = function $$flip$$$($favor$$) {
    return $isLeftHandSide$$ ? $favor$$ : $favor$$ == $Favor$$.LHS ? $Favor$$.RHS : $Favor$$.LHS;
  };
  $opt_excludeL_tieLogic$$ = function $$opt_excludeL_tieLogic$$$() {
    return lf.index.SingleKeyRange.xor($excludeL$$, $excludeR$$) ? $excludeL$$ ? $flip$$($Favor$$.LHS) : $flip$$($Favor$$.RHS) : $Favor$$.TIE;
  };
  return lf.index.SingleKeyRange.isUnbound($l$$) ? lf.index.SingleKeyRange.isUnbound($r$$) ? $opt_excludeL_tieLogic$$() : $flip$$($Favor$$.RHS) : lf.index.SingleKeyRange.isUnbound($r$$) ? $flip$$($Favor$$.LHS) : $l$$ < $r$$ ? $Favor$$.RHS : $l$$ == $r$$ ? $opt_excludeL_tieLogic$$() : $Favor$$.LHS;
};
lf.index.SingleKeyRange.compare = function $lf$index$SingleKeyRange$compare$($lhs$$, $rhs$$) {
  var $result$$ = lf.index.SingleKeyRange.compareKey_($lhs$$.from, $rhs$$.from, !0, $lhs$$.excludeLower, $rhs$$.excludeLower);
  $result$$ == lf.index.Favor.TIE && ($result$$ = lf.index.SingleKeyRange.compareKey_($lhs$$.to, $rhs$$.to, !1, $lhs$$.excludeUpper, $rhs$$.excludeUpper));
  return $result$$;
};
lf.index.SingleKeyRange.getBoundingRange = function $lf$index$SingleKeyRange$getBoundingRange$($r1$$, $r2$$) {
  var $r$$ = lf.index.SingleKeyRange.all();
  if (!lf.index.SingleKeyRange.isUnbound($r1$$.from) && !lf.index.SingleKeyRange.isUnbound($r2$$.from)) {
    var $favor$$ = lf.index.SingleKeyRange.compareKey_($r1$$.from, $r2$$.from, !0);
    $favor$$ != lf.index.Favor.LHS ? ($r$$.from = $r1$$.from, $r$$.excludeLower = $favor$$ != lf.index.Favor.TIE ? $r1$$.excludeLower : $r1$$.excludeLower && $r2$$.excludeLower) : ($r$$.from = $r2$$.from, $r$$.excludeLower = $r2$$.excludeLower);
  }
  lf.index.SingleKeyRange.isUnbound($r1$$.to) || lf.index.SingleKeyRange.isUnbound($r2$$.to) || ($favor$$ = lf.index.SingleKeyRange.compareKey_($r1$$.to, $r2$$.to, !1), $favor$$ != lf.index.Favor.RHS ? ($r$$.to = $r1$$.to, $r$$.excludeUpper = $favor$$ != lf.index.Favor.TIE ? $r1$$.excludeUpper : $r1$$.excludeUpper && $r2$$.excludeUpper) : ($r$$.to = $r2$$.to, $r$$.excludeUpper = $r2$$.excludeUpper));
  return $r$$;
};
lf.index.SingleKeyRange.and = function $lf$index$SingleKeyRange$and$($r1$$, $r2$$) {
  if (!$r1$$.overlaps($r2$$)) {
    return null;
  }
  var $r$$ = lf.index.SingleKeyRange.all(), $favor$$3_left$$7_right$$ = lf.index.SingleKeyRange.compareKey_($r1$$.from, $r2$$.from, !0), $favor$$3_left$$7_right$$ = $favor$$3_left$$7_right$$ == lf.index.Favor.TIE ? $r1$$.excludeLower ? $r1$$ : $r2$$ : $favor$$3_left$$7_right$$ != lf.index.Favor.RHS ? $r1$$ : $r2$$;
  $r$$.from = $favor$$3_left$$7_right$$.from;
  $r$$.excludeLower = $favor$$3_left$$7_right$$.excludeLower;
  lf.index.SingleKeyRange.isUnbound($r1$$.to) || lf.index.SingleKeyRange.isUnbound($r2$$.to) ? $favor$$3_left$$7_right$$ = lf.index.SingleKeyRange.isUnbound($r1$$.to) ? $r2$$ : $r1$$ : ($favor$$3_left$$7_right$$ = lf.index.SingleKeyRange.compareKey_($r1$$.to, $r2$$.to, !1), $favor$$3_left$$7_right$$ = $favor$$3_left$$7_right$$ == lf.index.Favor.TIE ? $r1$$.excludeUpper ? $r1$$ : $r2$$ : $favor$$3_left$$7_right$$ == lf.index.Favor.RHS ? $r1$$ : $r2$$);
  $r$$.to = $favor$$3_left$$7_right$$.to;
  $r$$.excludeUpper = $favor$$3_left$$7_right$$.excludeUpper;
  return $r$$;
};
lf.index.SingleKeyRange.complement = function $lf$index$SingleKeyRange$complement$($keyRanges$$) {
  if (0 == $keyRanges$$.length) {
    return [];
  }
  $keyRanges$$.sort(lf.index.SingleKeyRange.compare);
  for (var $complementKeyRanges$$ = Array($keyRanges$$.length + 1), $i$$ = 0;$i$$ < $complementKeyRanges$$.length;$i$$++) {
    $complementKeyRanges$$[$i$$] = 0 == $i$$ ? lf.index.SingleKeyRange.upperBound($keyRanges$$[$i$$].from, !0) : $i$$ == $complementKeyRanges$$.length - 1 ? lf.index.SingleKeyRange.lowerBound($keyRanges$$[$i$$ - 1].to, !0) : new lf.index.SingleKeyRange($keyRanges$$[$i$$ - 1].to, $keyRanges$$[$i$$].from, !0, !0);
  }
  return $complementKeyRanges$$;
};
lf.index.SingleKeyRangeSet = function $lf$index$SingleKeyRangeSet$($opt_ranges$$) {
  this.ranges_ = [];
  goog.isDef($opt_ranges$$) && this.add($opt_ranges$$);
};
lf.index.SingleKeyRangeSet.prototype.toString = function $lf$index$SingleKeyRangeSet$$toString$() {
  return this.ranges_.map(function($r$$) {
    return $r$$.toString();
  }).join(",");
};
lf.index.SingleKeyRangeSet.prototype.containsKey = function $lf$index$SingleKeyRangeSet$$containsKey$($key$$) {
  return this.ranges_.some(function($r$$) {
    return $r$$.contains($key$$);
  });
};
lf.index.SingleKeyRangeSet.prototype.getValues = function $lf$index$SingleKeyRangeSet$$getValues$() {
  return this.ranges_;
};
lf.index.SingleKeyRangeSet.prototype.add = function $lf$index$SingleKeyRangeSet$$add$($keyRanges$$) {
  if (0 != $keyRanges$$.length) {
    if ($keyRanges$$ = this.ranges_.concat($keyRanges$$), 1 == $keyRanges$$.length) {
      this.ranges_ = $keyRanges$$;
    } else {
      $keyRanges$$.sort(lf.index.SingleKeyRange.compare);
      for (var $results$$ = [], $start$$ = $keyRanges$$[0], $i$$ = 1;$i$$ < $keyRanges$$.length;++$i$$) {
        $start$$.overlaps($keyRanges$$[$i$$]) ? $start$$ = lf.index.SingleKeyRange.getBoundingRange($start$$, $keyRanges$$[$i$$]) : ($results$$.push($start$$), $start$$ = $keyRanges$$[$i$$]);
      }
      $results$$.push($start$$);
      this.ranges_ = $results$$;
    }
  }
};
lf.index.SingleKeyRangeSet.prototype.equals = function $lf$index$SingleKeyRangeSet$$equals$($set$$) {
  return this.ranges_.length == $set$$.ranges_.length ? 0 == this.ranges_.length || this.ranges_.every(function($r$$, $index$$) {
    return $r$$.equals($set$$.ranges_[$index$$]);
  }) : !1;
};
lf.index.SingleKeyRangeSet.prototype.getBoundingRange = function $lf$index$SingleKeyRangeSet$$getBoundingRange$() {
  return 1 >= this.ranges_.length ? 0 == this.ranges_.length ? null : this.ranges_[0] : lf.index.SingleKeyRange.getBoundingRange(this.ranges_[0], this.ranges_[this.ranges_.length - 1]);
};
lf.index.SingleKeyRangeSet.intersect = function $lf$index$SingleKeyRangeSet$intersect$($s0$$, $s1$$) {
  var $results$$ = [];
  $s0$$.getValues().map(function($r0$$) {
    return $s1$$.getValues().map(function($r1$$) {
      return lf.index.SingleKeyRange.and($r0$$, $r1$$);
    });
  }).forEach(function($dimension$$) {
    $results$$ = $results$$.concat($dimension$$);
  });
  return new lf.index.SingleKeyRangeSet($results$$.filter(function($r$$) {
    return !goog.isNull($r$$);
  }));
};
lf.Predicate = function $lf$Predicate$() {
};
lf.PredicateProvider = function $lf$PredicateProvider$() {
};
lf.structs.TreeNode = function $lf$structs$TreeNode$() {
  this.children_ = this.parent_ = null;
};
lf.structs.TreeNode.EMPTY_ARRAY_ = [];
lf.structs.TreeNode.prototype.getParent = function $lf$structs$TreeNode$$getParent$() {
  return this.parent_;
};
lf.structs.TreeNode.prototype.setParent = function $lf$structs$TreeNode$$setParent$($parentNode$$) {
  this.parent_ = $parentNode$$;
};
lf.structs.TreeNode.prototype.getRoot = function $lf$structs$TreeNode$$getRoot$() {
  for (var $root$$ = this;!goog.isNull($root$$.getParent());) {
    $root$$ = $root$$.getParent();
  }
  return $root$$;
};
lf.structs.TreeNode.prototype.getDepth = function $lf$structs$TreeNode$$getDepth$() {
  for (var $depth$$ = 0, $node$$ = this;!goog.isNull($node$$.getParent());) {
    $depth$$++, $node$$ = $node$$.getParent();
  }
  return $depth$$;
};
lf.structs.TreeNode.prototype.isLeaf = function $lf$structs$TreeNode$$isLeaf$() {
  return goog.isNull(this.children_);
};
lf.structs.TreeNode.prototype.getChildren = function $lf$structs$TreeNode$$getChildren$() {
  return this.children_ || lf.structs.TreeNode.EMPTY_ARRAY_;
};
lf.structs.TreeNode.prototype.getChildAt = function $lf$structs$TreeNode$$getChildAt$($index$$) {
  return this.getChildren()[$index$$] || null;
};
lf.structs.TreeNode.prototype.getChildCount = function $lf$structs$TreeNode$$getChildCount$() {
  return this.getChildren().length;
};
lf.structs.TreeNode.prototype.addChildAt = function $lf$structs$TreeNode$$addChildAt$($child$$, $index$$) {
  goog.asserts.assert(goog.isNull($child$$.getParent()));
  $child$$.setParent(this);
  goog.isNull(this.children_) ? (goog.asserts.assert(0 == $index$$), this.children_ = [$child$$]) : (goog.asserts.assert(0 <= $index$$ && $index$$ <= this.children_.length), this.children_.splice($index$$, 0, $child$$));
};
lf.structs.TreeNode.prototype.addChild = function $lf$structs$TreeNode$$addChild$($child$$) {
  goog.asserts.assert(goog.isNull($child$$.getParent()));
  $child$$.setParent(this);
  goog.isNull(this.children_) ? this.children_ = [$child$$] : this.children_.push($child$$);
};
lf.structs.TreeNode.prototype.removeChildAt = function $lf$structs$TreeNode$$removeChildAt$($index$$) {
  var $child$$ = this.children_ && this.children_[$index$$];
  return $child$$ ? ($child$$.setParent(null), this.children_.splice($index$$, 1), 0 == this.children_.length && (this.children_ = null), $child$$) : null;
};
lf.structs.TreeNode.prototype.removeChild = function $lf$structs$TreeNode$$removeChild$($child$$) {
  return this.removeChildAt(this.getChildren().indexOf($child$$));
};
lf.structs.TreeNode.prototype.replaceChildAt = function $lf$structs$TreeNode$$replaceChildAt$($newChild$$, $index$$) {
  goog.asserts.assert(goog.isNull($newChild$$.getParent()), "New child must not have parent node");
  var $oldChild$$ = this.getChildAt($index$$);
  goog.asserts.assert($oldChild$$, "Invalid child index");
  $oldChild$$.setParent(null);
  $newChild$$.setParent(this);
  this.children_[$index$$] = $newChild$$;
  return $oldChild$$;
};
lf.structs.TreeNode.prototype.traverse = function $lf$structs$TreeNode$$traverse$($f$$, $opt_this$$) {
  !1 !== $f$$.call($opt_this$$, this) && this.getChildren().forEach(function($child$$) {
    $child$$.traverse($f$$, $opt_this$$);
  });
};
lf.pred = {};
lf.pred.PredicateNode = function $lf$pred$PredicateNode$() {
  lf.structs.TreeNode.call(this);
  this.id_ = lf.pred.PredicateNode.nextId_++;
};
goog.inherits(lf.pred.PredicateNode, lf.structs.TreeNode);
lf.pred.PredicateNode.nextId_ = 0;
lf.pred.PredicateNode.prototype.getId = function $lf$pred$PredicateNode$$getId$() {
  return this.id_;
};
lf.pred.PredicateNode.prototype.setId = function $lf$pred$PredicateNode$$setId$($id$$) {
  this.id_ = $id$$;
};
lf.proc.Relation = function $lf$proc$Relation$($entries$$, $tables$$) {
  this.entries = $entries$$;
  this.tables_ = lf.structs.set.create($tables$$);
  this.aggregationResults_ = null;
};
lf.proc.Relation.prototype.isCompatible = function $lf$proc$Relation$$isCompatible$($relation$$) {
  return lf.structs.set.equals(this.tables_, $relation$$.tables_);
};
lf.proc.Relation.assertCompatible_ = function $lf$proc$Relation$assertCompatible_$($lhs$$, $rhs$$) {
  goog.asserts.assert($lhs$$.isCompatible($rhs$$), "Intersection/union operations only apply to compatible relations.");
};
lf.proc.Relation.prototype.getTables = function $lf$proc$Relation$$getTables$() {
  return lf.structs.set.values(this.tables_);
};
lf.proc.Relation.prototype.isPrefixApplied = function $lf$proc$Relation$$isPrefixApplied$() {
  return 1 < this.tables_.size;
};
lf.proc.Relation.prototype.getPayloads = function $lf$proc$Relation$$getPayloads$() {
  return this.entries.map(function($entry$$) {
    return $entry$$.row.payload();
  });
};
lf.proc.Relation.prototype.getRowIds = function $lf$proc$Relation$$getRowIds$() {
  return this.entries.map(function($entry$$) {
    return $entry$$.row.id();
  });
};
lf.proc.Relation.prototype.setAggregationResult = function $lf$proc$Relation$$setAggregationResult$($column$$, $result$$) {
  goog.isNull(this.aggregationResults_) && (this.aggregationResults_ = lf.structs.map.create());
  this.aggregationResults_.set($column$$.getNormalizedName(), $result$$);
};
lf.proc.Relation.prototype.getAggregationResult = function $lf$proc$Relation$$getAggregationResult$($column$$) {
  goog.asserts.assert(!goog.isNull(this.aggregationResults_), "getAggregationResult called before any results have been calculated.");
  var $result$$ = this.aggregationResults_.get($column$$.getNormalizedName());
  goog.asserts.assert(goog.isDef($result$$), "Could not find result for " + $column$$.getNormalizedName());
  return $result$$;
};
lf.proc.Relation.prototype.hasAggregationResult = function $lf$proc$Relation$$hasAggregationResult$($column$$) {
  return !goog.isNull(this.aggregationResults_) && this.aggregationResults_.has($column$$.getNormalizedName());
};
lf.proc.Relation.emptyRelation_ = null;
lf.proc.Relation.createEmpty = function $lf$proc$Relation$createEmpty$() {
  goog.isNull(lf.proc.Relation.emptyRelation_) && (lf.proc.Relation.emptyRelation_ = new lf.proc.Relation([], []));
  return lf.proc.Relation.emptyRelation_;
};
lf.proc.Relation.intersect = function $lf$proc$Relation$intersect$($relations$$) {
  if (0 == $relations$$.length) {
    return lf.proc.Relation.createEmpty();
  }
  for (var $relationMaps_totalCount$$ = $relations$$.reduce(function($soFar$$, $relation$$) {
    lf.proc.Relation.assertCompatible_($relations$$[0], $relation$$);
    return $soFar$$ + $relation$$.entries.length;
  }, 0), $allEntries$$ = Array($relationMaps_totalCount$$), $entryCounter$$ = 0, $relationMaps_totalCount$$ = $relations$$.map(function($relation$$) {
    var $map$$ = lf.structs.map.create();
    $relation$$.entries.forEach(function($entry$$) {
      $allEntries$$[$entryCounter$$++] = $entry$$;
      $map$$.set($entry$$.id, $entry$$);
    });
    return $map$$;
  }), $intersection$$ = lf.structs.map.create(), $i$$ = 0;$i$$ < $allEntries$$.length;$i$$++) {
    $relationMaps_totalCount$$.every(function($relation$$) {
      return $relation$$.has($allEntries$$[$i$$].id);
    }) && $intersection$$.set($allEntries$$[$i$$].id, $allEntries$$[$i$$]);
  }
  return new lf.proc.Relation(lf.structs.map.values($intersection$$), lf.structs.set.values($relations$$[0].tables_));
};
lf.proc.Relation.union = function $lf$proc$Relation$union$($relations$$) {
  if (0 == $relations$$.length) {
    return lf.proc.Relation.createEmpty();
  }
  var $union$$ = lf.structs.map.create();
  $relations$$.forEach(function($relation$$) {
    lf.proc.Relation.assertCompatible_($relations$$[0], $relation$$);
    $relation$$.entries.forEach(function($entry$$) {
      $union$$.set($entry$$.id, $entry$$);
    });
  });
  return new lf.proc.Relation(lf.structs.map.values($union$$), lf.structs.set.values($relations$$[0].tables_));
};
lf.proc.Relation.fromRows = function $lf$proc$Relation$fromRows$($rows$$, $tables$$) {
  var $isPrefixApplied$$ = 1 < $tables$$.length, $entries$$ = $rows$$.map(function($row$$) {
    return new lf.proc.RelationEntry($row$$, $isPrefixApplied$$);
  });
  return new lf.proc.Relation($entries$$, $tables$$);
};
lf.proc.RelationEntry = function $lf$proc$RelationEntry$($row$$, $isPrefixApplied$$) {
  this.row = $row$$;
  this.id = lf.proc.RelationEntry.getNextId_();
  this.isPrefixApplied_ = $isPrefixApplied$$;
};
lf.proc.RelationEntry.id_ = 0;
lf.proc.RelationEntry.getNextId_ = function $lf$proc$RelationEntry$getNextId_$() {
  return lf.proc.RelationEntry.id_++;
};
lf.proc.RelationEntry.prototype.getField = function $lf$proc$RelationEntry$$getField$($column$$) {
  var $alias$$ = $column$$.getAlias();
  return !goog.isNull($alias$$) && this.row.payload().hasOwnProperty($alias$$) ? this.row.payload()[$alias$$] : this.isPrefixApplied_ ? this.row.payload()[$column$$.getTable().getEffectiveName()][$column$$.getName()] : this.row.payload()[$column$$.getName()];
};
lf.proc.RelationEntry.prototype.setField = function $lf$proc$RelationEntry$$setField$($column$$, $value$$) {
  var $alias$$1_tableName$$ = $column$$.getAlias();
  if (goog.isDefAndNotNull($alias$$1_tableName$$)) {
    this.row.payload()[$alias$$1_tableName$$] = $value$$;
  } else {
    if (this.isPrefixApplied_) {
      var $alias$$1_tableName$$ = $column$$.getTable().getEffectiveName(), $containerObj$$ = this.row.payload()[$alias$$1_tableName$$];
      goog.isDefAndNotNull($containerObj$$) || ($containerObj$$ = {}, this.row.payload()[$alias$$1_tableName$$] = $containerObj$$);
      $containerObj$$[$column$$.getName()] = $value$$;
    } else {
      this.row.payload()[$column$$.getName()] = $value$$;
    }
  }
};
lf.proc.RelationEntry.combineEntries = function $lf$proc$RelationEntry$combineEntries$($leftEntry_row$$, $leftEntryTables$$, $rightEntry$$, $rightEntryTables$$) {
  var $result$$ = {}, $mergeEntry$$ = function $$mergeEntry$$$($entry$$, $entryTables$$) {
    if ($entry$$.isPrefixApplied_) {
      var $payload$$ = $entry$$.row.payload(), $prefix$$;
      for ($prefix$$ in $payload$$) {
        $result$$[$prefix$$] = $payload$$[$prefix$$];
      }
    } else {
      goog.asserts.assert(!$result$$.hasOwnProperty($entryTables$$[0]), "Attempted to join table with itself, without using table alias, or same alias " + $entryTables$$[0] + "is reused for multiple tables."), $result$$[$entryTables$$[0]] = $entry$$.row.payload();
    }
  };
  $mergeEntry$$($leftEntry_row$$, $leftEntryTables$$);
  $mergeEntry$$($rightEntry$$, $rightEntryTables$$);
  $leftEntry_row$$ = new lf.Row(lf.Row.DUMMY_ID, $result$$);
  return new lf.proc.RelationEntry($leftEntry_row$$, !0);
};
lf.pred.ValuePredicate = function $lf$pred$ValuePredicate$($column$$, $value$$, $evaluatorType$$) {
  lf.pred.PredicateNode.call(this);
  this.column = $column$$;
  this.value = $value$$;
  this.evaluatorType = $evaluatorType$$;
  this.evaluatorFn_ = lf.eval.Registry.get().getEvaluator(this.column.getType(), this.evaluatorType);
  this.isComplement_ = !1;
  this.binder_ = $value$$;
};
goog.inherits(lf.pred.ValuePredicate, lf.pred.PredicateNode);
lf.pred.ValuePredicate.prototype.copy = function $lf$pred$ValuePredicate$$copy$() {
  var $clone$$ = new lf.pred.ValuePredicate(this.column, this.value, this.evaluatorType);
  $clone$$.setBinder(this.binder_);
  $clone$$.setComplement(this.isComplement_);
  $clone$$.setId(this.getId());
  return $clone$$;
};
lf.pred.ValuePredicate.prototype.getColumns = function $lf$pred$ValuePredicate$$getColumns$($opt_results$$) {
  return goog.isDefAndNotNull($opt_results$$) ? ($opt_results$$.push(this.column), $opt_results$$) : [this.column];
};
lf.pred.ValuePredicate.prototype.getTables = function $lf$pred$ValuePredicate$$getTables$($opt_results$$1_tables$$) {
  $opt_results$$1_tables$$ = goog.isDefAndNotNull($opt_results$$1_tables$$) ? $opt_results$$1_tables$$ : lf.structs.set.create();
  $opt_results$$1_tables$$.add(this.column.getTable());
  return $opt_results$$1_tables$$;
};
lf.pred.ValuePredicate.prototype.setComplement = function $lf$pred$ValuePredicate$$setComplement$($isComplement$$) {
  this.isComplement_ = $isComplement$$;
};
lf.pred.ValuePredicate.prototype.setBinder = function $lf$pred$ValuePredicate$$setBinder$($binder$$) {
  this.binder_ = $binder$$;
};
lf.pred.ValuePredicate.prototype.checkBinding_ = function $lf$pred$ValuePredicate$$checkBinding_$() {
  var $bound$$ = !1;
  this.value instanceof lf.Binder || ($bound$$ = goog.isArray(this.value) ? !this.value.some(function($val$$) {
    return $val$$ instanceof lf.Binder;
  }) : !0);
  if (!$bound$$) {
    throw new lf.Exception(501);
  }
};
lf.pred.ValuePredicate.prototype.eval = function $lf$pred$ValuePredicate$$eval$($relation$$) {
  this.checkBinding_();
  if (this.evaluatorType == lf.eval.Type.IN) {
    return this.evalAsIn_($relation$$);
  }
  var $entries$$ = $relation$$.entries.filter(function($entry$$) {
    return this.evaluatorFn_($entry$$.getField(this.column), this.value) != this.isComplement_;
  }, this);
  return new lf.proc.Relation($entries$$, $relation$$.getTables());
};
lf.pred.ValuePredicate.prototype.bind = function $lf$pred$ValuePredicate$$bind$($values$$) {
  var $checkIndexWithinRange$$ = function $$checkIndexWithinRange$$$($index$$) {
    if ($values$$.length <= $index$$) {
      throw new lf.Exception(510);
    }
  };
  if (this.binder_ instanceof lf.Binder) {
    var $index$$0$$ = this.binder_.getIndex();
    $checkIndexWithinRange$$($index$$0$$);
    this.value = $values$$[$index$$0$$];
  } else {
    goog.isArray(this.binder_) && (this.value = this.binder_.map(function($val$$) {
      return $val$$ instanceof lf.Binder ? ($checkIndexWithinRange$$($val$$.getIndex()), $values$$[$val$$.getIndex()]) : $val$$;
    }));
  }
};
lf.pred.ValuePredicate.prototype.evalAsIn_ = function $lf$pred$ValuePredicate$$evalAsIn_$($relation$$) {
  goog.asserts.assert(this.evaluatorType == lf.eval.Type.IN, "ValuePredicate#evalAsIn_() called for wrong predicate type.");
  var $valueSet$$ = lf.structs.set.create(this.value), $evaluatorFn$$ = function($rowValue$$) {
    return goog.isNull($rowValue$$) ? !1 : $valueSet$$.has($rowValue$$) != this.isComplement_;
  }.bind(this), $entries$$ = $relation$$.entries.filter(function($entry$$) {
    return $evaluatorFn$$($entry$$.getField(this.column));
  }, this);
  return new lf.proc.Relation($entries$$, $relation$$.getTables());
};
lf.pred.ValuePredicate.prototype.toString = function $lf$pred$ValuePredicate$$toString$() {
  return "value_pred(" + this.column.getNormalizedName() + " " + this.evaluatorType + (this.isComplement_ ? "(complement)" : "") + " " + this.value + ")";
};
lf.pred.ValuePredicate.prototype.isKeyRangeCompatible = function $lf$pred$ValuePredicate$$isKeyRangeCompatible$() {
  this.checkBinding_();
  return !goog.isNull(this.value) && (this.evaluatorType == lf.eval.Type.BETWEEN || this.evaluatorType == lf.eval.Type.IN || this.evaluatorType == lf.eval.Type.EQ || this.evaluatorType == lf.eval.Type.GT || this.evaluatorType == lf.eval.Type.GTE || this.evaluatorType == lf.eval.Type.LT || this.evaluatorType == lf.eval.Type.LTE);
};
lf.pred.ValuePredicate.prototype.toKeyRange = function $lf$pred$ValuePredicate$$toKeyRange$() {
  goog.asserts.assert(this.isKeyRangeCompatible(), "Could not convert predicate to key range.");
  var $keyRange$$1_keyRanges$$2_value$$ = null;
  if (this.evaluatorType == lf.eval.Type.BETWEEN) {
    $keyRange$$1_keyRanges$$2_value$$ = new lf.index.SingleKeyRange(this.getValueAsKey_(this.value[0]), this.getValueAsKey_(this.value[1]), !1, !1);
  } else {
    if (this.evaluatorType == lf.eval.Type.IN) {
      return $keyRange$$1_keyRanges$$2_value$$ = this.value.map(function($value$$) {
        return lf.index.SingleKeyRange.only($value$$);
      }), new lf.index.SingleKeyRangeSet(this.isComplement_ ? lf.index.SingleKeyRange.complement($keyRange$$1_keyRanges$$2_value$$) : $keyRange$$1_keyRanges$$2_value$$);
    }
    $keyRange$$1_keyRanges$$2_value$$ = this.getValueAsKey_(this.value);
    $keyRange$$1_keyRanges$$2_value$$ = this.evaluatorType == lf.eval.Type.EQ ? lf.index.SingleKeyRange.only($keyRange$$1_keyRanges$$2_value$$) : this.evaluatorType == lf.eval.Type.GTE ? lf.index.SingleKeyRange.lowerBound($keyRange$$1_keyRanges$$2_value$$) : this.evaluatorType == lf.eval.Type.GT ? lf.index.SingleKeyRange.lowerBound($keyRange$$1_keyRanges$$2_value$$, !0) : this.evaluatorType == lf.eval.Type.LTE ? lf.index.SingleKeyRange.upperBound($keyRange$$1_keyRanges$$2_value$$) : lf.index.SingleKeyRange.upperBound($keyRange$$1_keyRanges$$2_value$$, 
    !0);
  }
  return new lf.index.SingleKeyRangeSet(this.isComplement_ ? $keyRange$$1_keyRanges$$2_value$$.complement() : [$keyRange$$1_keyRanges$$2_value$$]);
};
lf.pred.ValuePredicate.prototype.getValueAsKey_ = function $lf$pred$ValuePredicate$$getValueAsKey_$($value$$) {
  return this.column.getType() == lf.Type.DATE_TIME ? $value$$.getTime() : $value$$;
};
lf.query = {};
lf.query.Context = function $lf$query$Context$($schema$$) {
  this.schema = $schema$$;
  this.clonedFrom = this.predicateMap_ = null;
};
lf.query.Context.prototype.getPredicate = function $lf$query$Context$$getPredicate$($id$$20_predicate$$) {
  goog.isNull(this.predicateMap_) && goog.isDefAndNotNull(this.where) && (this.predicateMap_ = lf.query.Context.buildPredicateMap_(this.where));
  $id$$20_predicate$$ = this.predicateMap_.get($id$$20_predicate$$) || null;
  goog.asserts.assert(!goog.isNull($id$$20_predicate$$));
  return $id$$20_predicate$$;
};
lf.query.Context.buildPredicateMap_ = function $lf$query$Context$buildPredicateMap_$($rootPredicate$$) {
  var $predicateMap$$ = lf.structs.map.create();
  $rootPredicate$$.traverse(function($node$$) {
    $predicateMap$$.set($node$$.getId(), $node$$);
  });
  return $predicateMap$$;
};
lf.query.Context.prototype.cloneBase = function $lf$query$Context$$cloneBase$($context$$) {
  $context$$.where && (this.where = $context$$.where.copy());
  this.clonedFrom = $context$$;
};
lf.query.Context.prototype.bind = function $lf$query$Context$$bind$($values$$) {
  goog.asserts.assert(!goog.isDefAndNotNull(this.clonedFrom));
  return this;
};
lf.query.Context.prototype.bindValuesInSearchCondition = function $lf$query$Context$$bindValuesInSearchCondition$($values$$) {
  var $searchCondition$$ = this.where;
  goog.isDefAndNotNull($searchCondition$$) && $searchCondition$$.traverse(function($node$$) {
    $node$$ instanceof lf.pred.ValuePredicate && $node$$.bind($values$$);
  });
};
lf.query.SelectContext = function $lf$query$SelectContext$($schema$$) {
  lf.query.Context.call(this, $schema$$);
};
goog.inherits(lf.query.SelectContext, lf.query.Context);
lf.query.SelectContext.orderByToString = function $lf$query$SelectContext$orderByToString$($orderBy$$) {
  var $out$$ = "";
  $orderBy$$.forEach(function($orderByEl$$, $index$$) {
    $out$$ += $orderByEl$$.column.getNormalizedName() + " ";
    $out$$ += $orderByEl$$.order == lf.Order.ASC ? "ASC" : "DESC";
    $index$$ < $orderBy$$.length - 1 && ($out$$ += ", ");
  });
  return $out$$;
};
lf.query.SelectContext.prototype.getScope = function $lf$query$SelectContext$$getScope$() {
  return lf.structs.set.create(this.from);
};
lf.query.SelectContext.prototype.clone = function $lf$query$SelectContext$$clone$() {
  var $context$$ = new lf.query.SelectContext(this.schema);
  $context$$.cloneBase(this);
  this.columns && ($context$$.columns = this.columns.slice());
  this.from && ($context$$.from = this.from.slice());
  $context$$.limit = this.limit;
  $context$$.skip = this.skip;
  this.orderBy && ($context$$.orderBy = this.orderBy.slice());
  this.groupBy && ($context$$.groupBy = this.groupBy.slice());
  this.limitBinder && ($context$$.limitBinder = this.limitBinder);
  this.skipBinder && ($context$$.skipBinder = this.skipBinder);
  $context$$.outerJoinPredicates = this.outerJoinPredicates;
  return $context$$;
};
lf.query.SelectContext.prototype.bind = function $lf$query$SelectContext$$bind$($values$$) {
  lf.query.SelectContext.superClass_.bind.call(this, $values$$);
  goog.isDefAndNotNull(this.limitBinder) && (this.limit = $values$$[this.limitBinder.getIndex()]);
  goog.isDefAndNotNull(this.skipBinder) && (this.skip = $values$$[this.skipBinder.getIndex()]);
  this.bindValuesInSearchCondition($values$$);
  return this;
};
lf.proc.QueryTask = function $lf$proc$QueryTask$($global$$, $items$$) {
  this.global = $global$$;
  this.backStore_ = $global$$.getService(lf.service.BACK_STORE);
  this.queries = $items$$.map(function($item$$) {
    return $item$$.context;
  });
  this.plans_ = $items$$.map(function($item$$) {
    return $item$$.plan;
  });
  this.combinedScope_ = lf.proc.PhysicalQueryPlan.getCombinedScope(this.plans_);
  this.txType_ = this.detectType_();
  this.resolver_ = goog.Promise.withResolver();
};
lf.proc.QueryTask.prototype.detectType_ = function $lf$proc$QueryTask$$detectType_$() {
  return this.queries.some(function($query$$) {
    return !($query$$ instanceof lf.query.SelectContext);
  }) ? lf.TransactionType.READ_WRITE : lf.TransactionType.READ_ONLY;
};
lf.proc.QueryTask.prototype.exec = function $lf$proc$QueryTask$$exec$() {
  var $journal$$ = this.txType_ == lf.TransactionType.READ_ONLY ? void 0 : new lf.cache.Journal(this.global, this.combinedScope_), $results$$ = [], $remainingPlans$$ = this.plans_.slice(), $queries$$ = this.queries, $sequentiallyExec$$ = function $$sequentiallyExec$$$() {
    var $plan$$ = $remainingPlans$$.shift();
    if ($plan$$) {
      var $queryContext$$ = $queries$$[$results$$.length];
      return $plan$$.getRoot().exec($journal$$, $queryContext$$).then(function($relations$$) {
        $results$$.push($relations$$[0]);
        return $sequentiallyExec$$();
      });
    }
    return goog.Promise.resolve();
  };
  return $sequentiallyExec$$().then(function() {
    this.tx_ = this.backStore_.createTx(this.txType_, lf.structs.set.values(this.combinedScope_), $journal$$);
    return this.tx_.commit();
  }.bind(this)).then(function() {
    this.onSuccess($results$$);
    return $results$$;
  }.bind(this), function($e$$) {
    goog.isDefAndNotNull($journal$$) && $journal$$.rollback();
    throw $e$$;
  });
};
lf.proc.QueryTask.prototype.getType = function $lf$proc$QueryTask$$getType$() {
  return this.txType_;
};
lf.proc.QueryTask.prototype.getScope = function $lf$proc$QueryTask$$getScope$() {
  return this.combinedScope_;
};
lf.proc.QueryTask.prototype.getResolver = function $lf$proc$QueryTask$$getResolver$() {
  return this.resolver_;
};
lf.proc.QueryTask.prototype.getId = function $lf$proc$QueryTask$$getId$() {
  return goog.getUid(this);
};
lf.proc.QueryTask.prototype.onSuccess = function $lf$proc$QueryTask$$onSuccess$($results$$) {
};
lf.proc.QueryTask.prototype.stats = function $lf$proc$QueryTask$$stats$() {
  var $results$$ = null;
  goog.isDefAndNotNull(this.tx_) && ($results$$ = this.tx_.stats());
  return goog.isNull($results$$) ? lf.TransactionStats.getDefault() : $results$$;
};
lf.proc.ObserverQueryTask = function $lf$proc$ObserverQueryTask$($global$$, $items$$) {
  lf.proc.QueryTask.call(this, $global$$, $items$$);
  this.observerRegistry_ = $global$$.getService(lf.service.OBSERVER_REGISTRY);
};
goog.inherits(lf.proc.ObserverQueryTask, lf.proc.QueryTask);
lf.proc.ObserverQueryTask.prototype.getPriority = function $lf$proc$ObserverQueryTask$$getPriority$() {
  return lf.proc.TaskPriority.OBSERVER_QUERY_TASK;
};
lf.proc.ObserverQueryTask.prototype.onSuccess = function $lf$proc$ObserverQueryTask$$onSuccess$($results$$) {
  this.queries.forEach(function($query$$, $index$$) {
    this.observerRegistry_.updateResultsForQuery($query$$, $results$$[$index$$]);
  }, this);
};
lf.proc.ExternalChangeTask = function $lf$proc$ExternalChangeTask$($global$$, $tableDiffs$$) {
  this.global_ = $global$$;
  this.observerRegistry_ = $global$$.getService(lf.service.OBSERVER_REGISTRY);
  this.runner_ = $global$$.getService(lf.service.RUNNER);
  this.inMemoryUpdater_ = new lf.cache.InMemoryUpdater($global$$);
  this.tableDiffs_ = $tableDiffs$$;
  var $schema$$ = $global$$.getService(lf.service.SCHEMA), $tableSchemas$$ = this.tableDiffs_.map(function($tableDiff$$) {
    return $schema$$.table($tableDiff$$.getName());
  });
  this.scope_ = lf.structs.set.create($tableSchemas$$);
  this.resolver_ = goog.Promise.withResolver();
};
lf.proc.ExternalChangeTask.prototype.exec = function $lf$proc$ExternalChangeTask$$exec$() {
  this.inMemoryUpdater_.update(this.tableDiffs_);
  this.scheduleObserverTask_();
  return goog.Promise.resolve();
};
lf.proc.ExternalChangeTask.prototype.getType = function $lf$proc$ExternalChangeTask$$getType$() {
  return lf.TransactionType.READ_WRITE;
};
lf.proc.ExternalChangeTask.prototype.getScope = function $lf$proc$ExternalChangeTask$$getScope$() {
  return this.scope_;
};
lf.proc.ExternalChangeTask.prototype.getResolver = function $lf$proc$ExternalChangeTask$$getResolver$() {
  return this.resolver_;
};
lf.proc.ExternalChangeTask.prototype.getId = function $lf$proc$ExternalChangeTask$$getId$() {
  return goog.getUid(this);
};
lf.proc.ExternalChangeTask.prototype.getPriority = function $lf$proc$ExternalChangeTask$$getPriority$() {
  return lf.proc.TaskPriority.EXTERNAL_CHANGE_TASK;
};
lf.proc.ExternalChangeTask.prototype.scheduleObserverTask_ = function $lf$proc$ExternalChangeTask$$scheduleObserverTask_$() {
  var $items$$ = this.observerRegistry_.getTaskItemsForTables(this.scope_);
  0 != $items$$.length && ($items$$ = new lf.proc.ObserverQueryTask(this.global_, $items$$), this.runner_.scheduleTask($items$$));
};
lf.backstore.ExternalChangeObserver = function $lf$backstore$ExternalChangeObserver$($global$$) {
  this.global_ = $global$$;
  this.backStore_ = $global$$.getService(lf.service.BACK_STORE);
  this.runner_ = $global$$.getService(lf.service.RUNNER);
};
lf.backstore.ExternalChangeObserver.prototype.startObserving = function $lf$backstore$ExternalChangeObserver$$startObserving$() {
  this.backStore_.subscribe(this.onChange_.bind(this));
};
lf.backstore.ExternalChangeObserver.prototype.stopObserving = function $lf$backstore$ExternalChangeObserver$$stopObserving$() {
  this.backStore_.unsubscribe();
};
lf.backstore.ExternalChangeObserver.prototype.onChange_ = function $lf$backstore$ExternalChangeObserver$$onChange_$($externalChangeTask_tableDiffs$$) {
  $externalChangeTask_tableDiffs$$ = new lf.proc.ExternalChangeTask(this.global_, $externalChangeTask_tableDiffs$$);
  this.runner_.scheduleTask($externalChangeTask_tableDiffs$$);
};
lf.BackStore = function $lf$BackStore$() {
};
lf.raw = {};
lf.raw.BackStore = function $lf$raw$BackStore$() {
};
lf.backstore.FirebaseRawBackStore = function $lf$backstore$FirebaseRawBackStore$($version$$, $dbRef$$) {
  this.version_ = $version$$;
  this.db_ = $dbRef$$;
  this.tableIds_ = lf.structs.map.create();
};
goog.exportSymbol("lf.backstore.FirebaseRawBackStore", lf.backstore.FirebaseRawBackStore);
lf.backstore.FirebaseRawBackStore.prototype.getRawDBInstance = function $lf$backstore$FirebaseRawBackStore$$getRawDBInstance$() {
  return this.db_;
};
lf.backstore.FirebaseRawBackStore.prototype.getRawTransaction = function $lf$backstore$FirebaseRawBackStore$$getRawTransaction$() {
  throw new lf.Exception(351);
};
lf.backstore.FirebaseRawBackStore.getValue = function $lf$backstore$FirebaseRawBackStore$getValue$($ref$$, $path$$) {
  var $resolver$$ = goog.Promise.withResolver(), $valRef$$ = $ref$$;
  $path$$.length && ($valRef$$ = $ref$$.child($path$$));
  $valRef$$.once("value", function($snapshot$$) {
    $resolver$$.resolve($snapshot$$.val());
  }, function($e$$) {
    $resolver$$.reject($e$$);
  });
  return $resolver$$.promise;
};
lf.backstore.FirebaseRawBackStore.setValue = function $lf$backstore$FirebaseRawBackStore$setValue$($ref$$, $value$$, $opt_overwrite_overwrite$$) {
  $opt_overwrite_overwrite$$ = $opt_overwrite_overwrite$$ || !1;
  var $resolver$$ = goog.Promise.withResolver(), $handler$$ = function $$handler$$$($e$$) {
    $e$$ ? $resolver$$.reject($e$$) : $resolver$$.resolve();
  };
  $opt_overwrite_overwrite$$ ? $ref$$.set($value$$, $handler$$) : $ref$$.update($value$$, $handler$$);
  return $resolver$$.promise;
};
lf.backstore.FirebaseRawBackStore.prototype.init = function $lf$backstore$FirebaseRawBackStore$$init$($schema$$) {
  return lf.backstore.FirebaseRawBackStore.getValue(this.db_, "@rev/R").then(function($revision$$) {
    this.revision_ = $revision$$;
    return lf.backstore.FirebaseRawBackStore.getValue(this.db_, "@table");
  }.bind(this)).then(function($tableIdMap$$) {
    var $maxTableId$$ = 0, $ref$$;
    for ($ref$$ in $tableIdMap$$) {
      this.tableIds_.set($ref$$, $tableIdMap$$[$ref$$]), $tableIdMap$$[$ref$$] > $maxTableId$$ && ($maxTableId$$ = $tableIdMap$$[$ref$$]);
    }
    $schema$$.tables().forEach(function($table$$) {
      this.tableIds_.has($table$$.getName()) || ($tableIdMap$$[$table$$.getName()] = ++$maxTableId$$);
    }, this);
    $ref$$ = this.db_.child("@table");
    return lf.backstore.FirebaseRawBackStore.setValue($ref$$, $tableIdMap$$);
  }.bind(this));
};
lf.backstore.FirebaseRawBackStore.prototype.transform_ = function $lf$backstore$FirebaseRawBackStore$$transform_$($tableName$$, $callback$$) {
  var $tableId$$ = this.tableIds_.get($tableName$$);
  return goog.isDefAndNotNull($tableId$$) ? function() {
    var $toUpdate$$ = {}, $resolver$$ = goog.Promise.withResolver();
    this.db_.orderByChild("T").equalTo($tableId$$).once("value", function($snapshot$$) {
      $snapshot$$.forEach(function($row$$) {
        var $newRow$$ = $callback$$($row$$.val());
        $toUpdate$$[parseInt($row$$.key(), 10)] = $newRow$$;
      });
      $resolver$$.resolve($toUpdate$$);
    });
    return $resolver$$.promise;
  }.call(this).then(function($toUpdate$$) {
    $toUpdate$$["@rev"] = {R:++this.revision_};
    return lf.backstore.FirebaseRawBackStore.setValue(this.db_, $toUpdate$$);
  }.bind(this)) : goog.Promise.resolve();
};
lf.backstore.FirebaseRawBackStore.prototype.dropTable = function $lf$backstore$FirebaseRawBackStore$$dropTable$($tableName$$) {
  return this.transform_($tableName$$, function($row$$) {
    return null;
  }).then(function() {
    this.tableIds_.delete($tableName$$);
    return lf.backstore.FirebaseRawBackStore.setValue(this.db_.child("@table/" + $tableName$$), null, !0);
  }.bind(this));
};
goog.exportProperty(lf.backstore.FirebaseRawBackStore.prototype, "dropTable", lf.backstore.FirebaseRawBackStore.prototype.dropTable);
lf.backstore.FirebaseRawBackStore.prototype.addTableColumn = function $lf$backstore$FirebaseRawBackStore$$addTableColumn$($tableName$$, $columnName$$, $defaultValue$$) {
  return this.transform_($tableName$$, function($row$$) {
    var $payload$$ = $row$$.P;
    $payload$$[$columnName$$] = $defaultValue$$;
    return {R:this.revision_ + 1, T:$row$$.T, P:$payload$$};
  }.bind(this));
};
goog.exportProperty(lf.backstore.FirebaseRawBackStore.prototype, "addTableColumn", lf.backstore.FirebaseRawBackStore.prototype.addTableColumn);
lf.backstore.FirebaseRawBackStore.prototype.dropTableColumn = function $lf$backstore$FirebaseRawBackStore$$dropTableColumn$($tableName$$, $columnName$$) {
  return this.transform_($tableName$$, function($row$$) {
    var $payload$$ = $row$$.P;
    delete $payload$$[$columnName$$];
    return {R:this.revision_ + 1, T:$row$$.T, P:$payload$$};
  }.bind(this));
};
goog.exportProperty(lf.backstore.FirebaseRawBackStore.prototype, "dropTableColumn", lf.backstore.FirebaseRawBackStore.prototype.dropTableColumn);
lf.backstore.FirebaseRawBackStore.prototype.renameTableColumn = function $lf$backstore$FirebaseRawBackStore$$renameTableColumn$($tableName$$, $oldColumnName$$, $newColumnName$$) {
  return this.transform_($tableName$$, function($row$$) {
    var $payload$$ = $row$$.P;
    $payload$$[$newColumnName$$] = $payload$$[$oldColumnName$$];
    delete $payload$$[$oldColumnName$$];
    return {R:this.revision_ + 1, T:$row$$.T, P:$payload$$};
  }.bind(this));
};
goog.exportProperty(lf.backstore.FirebaseRawBackStore.prototype, "renameTableColumn", lf.backstore.FirebaseRawBackStore.prototype.renameTableColumn);
lf.backstore.FirebaseRawBackStore.prototype.createRow = function $lf$backstore$FirebaseRawBackStore$$createRow$($payload$$) {
  throw new lf.Exception(351);
};
goog.exportProperty(lf.backstore.FirebaseRawBackStore.prototype, "createRow", lf.backstore.FirebaseRawBackStore.prototype.createRow);
lf.backstore.FirebaseRawBackStore.prototype.getVersion = function $lf$backstore$FirebaseRawBackStore$$getVersion$() {
  return this.version_;
};
goog.exportProperty(lf.backstore.FirebaseRawBackStore.prototype, "getVersion", lf.backstore.FirebaseRawBackStore.prototype.getVersion);
lf.backstore.FirebaseRawBackStore.prototype.dumpTable_ = function $lf$backstore$FirebaseRawBackStore$$dumpTable_$($tableId$$1_tableName$$) {
  var $resolver$$ = goog.Promise.withResolver();
  $tableId$$1_tableName$$ = this.tableIds_.get($tableId$$1_tableName$$);
  this.db_.orderByChild("T").equalTo($tableId$$1_tableName$$).once("value", function($snapshot$$) {
    var $values$$ = [];
    $snapshot$$.forEach(function($row$$) {
      $values$$.push($row$$.val().P);
    });
    $resolver$$.resolve($values$$);
  });
  return $resolver$$.promise;
};
lf.backstore.FirebaseRawBackStore.prototype.dump = function $lf$backstore$FirebaseRawBackStore$$dump$() {
  var $contents$$ = {}, $promises$$ = lf.structs.map.keys(this.tableIds_).map(function($tableName$$) {
    return this.dumpTable_($tableName$$).then(function($rows$$) {
      $contents$$[$tableName$$] = $rows$$;
    });
  }.bind(this));
  return goog.Promise.all($promises$$).then(function() {
    return $contents$$;
  });
};
goog.exportProperty(lf.backstore.FirebaseRawBackStore.prototype, "dump", lf.backstore.FirebaseRawBackStore.prototype.dump);
lf.backstore.FirebaseTx = function $lf$backstore$FirebaseTx$($db$$, $type$$, $opt_journal$$) {
  lf.backstore.BaseTx.call(this, $type$$, $opt_journal$$);
  this.db_ = $db$$;
};
goog.inherits(lf.backstore.FirebaseTx, lf.backstore.BaseTx);
lf.backstore.FirebaseTx.prototype.getTable = function $lf$backstore$FirebaseTx$$getTable$($name$$, $deserializeFn$$) {
  return this.db_.getTableInternal($name$$);
};
lf.backstore.FirebaseTx.prototype.commitInternal = function $lf$backstore$FirebaseTx$$commitInternal$() {
  if (this.txType == lf.TransactionType.READ_ONLY) {
    return this.resolver.resolve(), this.resolver.promise;
  }
  var $diffs$$ = this.getJournal().getDiff();
  if (0 == $diffs$$.size) {
    this.resolver.resolve();
  } else {
    var $rev$$ = this.db_.getRevision() + 1;
    this.db_.setRevision($rev$$);
    var $update$$ = {"@rev":{R:$rev$$}};
    $diffs$$.forEach(function($diff$$, $tableName$$) {
      var $tid$$ = this.db_.getTableId($tableName$$);
      $diff$$.getAdded().forEach(function($row$$, $rowId$$) {
        $update$$[$rowId$$] = {R:$rev$$, T:$tid$$, P:$row$$.payload()};
      });
      $diff$$.getModified().forEach(function($rowPair$$, $rowId$$) {
        $update$$[$rowId$$] = {R:$rev$$, T:$tid$$, P:$rowPair$$[1].payload()};
      });
      $diff$$.getDeleted().forEach(function($row$$, $rowId$$) {
        $update$$[$rowId$$] = null;
      });
    }, this);
    this.db_.getRef().update($update$$, function($e$$28_promises$$) {
      goog.isNull($e$$28_promises$$) ? this.resolver.resolve() : (this.db_.setRevision($rev$$ - 1), $e$$28_promises$$ = lf.structs.map.values($diffs$$).map(function($diff$$) {
        return this.db_.reloadTable($diff$$.getName());
      }, this), goog.Promise.all($e$$28_promises$$).then(this.resolver.reject.bind(this.resolver), this.resolver.reject.bind(this.resolver)));
    }.bind(this));
  }
  return this.resolver.promise;
};
lf.backstore.MemoryTable = function $lf$backstore$MemoryTable$() {
  this.data_ = lf.structs.map.create();
};
lf.backstore.MemoryTable.prototype.getSync = function $lf$backstore$MemoryTable$$getSync$($ids$$) {
  if (0 == $ids$$.length) {
    return lf.structs.map.values(this.data_);
  }
  var $results$$ = [];
  $ids$$.forEach(function($id$$21_row$$) {
    $id$$21_row$$ = this.data_.get($id$$21_row$$) || null;
    goog.isNull($id$$21_row$$) || $results$$.push($id$$21_row$$);
  }, this);
  return $results$$;
};
lf.backstore.MemoryTable.prototype.getData = function $lf$backstore$MemoryTable$$getData$() {
  return this.data_;
};
lf.backstore.MemoryTable.prototype.get = function $lf$backstore$MemoryTable$$get$($ids$$) {
  return goog.Promise.resolve(this.getSync($ids$$));
};
lf.backstore.MemoryTable.prototype.putSync = function $lf$backstore$MemoryTable$$putSync$($rows$$) {
  $rows$$.forEach(function($row$$) {
    this.data_.set($row$$.id(), $row$$);
  }, this);
};
lf.backstore.MemoryTable.prototype.put = function $lf$backstore$MemoryTable$$put$($rows$$) {
  this.putSync($rows$$);
  return goog.Promise.resolve();
};
lf.backstore.MemoryTable.prototype.removeSync = function $lf$backstore$MemoryTable$$removeSync$($ids$$) {
  0 == $ids$$.length || $ids$$.length == this.data_.size ? this.data_.clear() : $ids$$.forEach(function($id$$) {
    this.data_.delete($id$$);
  }, this);
};
lf.backstore.MemoryTable.prototype.remove = function $lf$backstore$MemoryTable$$remove$($ids$$) {
  this.removeSync($ids$$);
  return goog.Promise.resolve();
};
lf.backstore.MemoryTable.prototype.getMaxRowId = function $lf$backstore$MemoryTable$$getMaxRowId$() {
  return 0 == this.data_.size ? 0 : lf.structs.map.keys(this.data_).reduce(function($prev$$, $cur$$) {
    return $prev$$ > $cur$$ ? $prev$$ : $cur$$;
  }, 0);
};
lf.backstore.Firebase = function $lf$backstore$Firebase$($schema$$, $fb$$) {
  this.schema_ = $schema$$;
  this.app_ = $fb$$;
  this.removedRows_ = lf.structs.map.create();
  this.revision_ = -1;
  this.tables_ = lf.structs.map.create();
  this.tableIds_ = lf.structs.map.create();
  this.changeHandler_ = null;
};
lf.backstore.Firebase.prototype.getRevision = function $lf$backstore$Firebase$$getRevision$() {
  return this.revision_;
};
lf.backstore.Firebase.prototype.setRevision = function $lf$backstore$Firebase$$setRevision$($revision$$) {
  this.revision_ = $revision$$;
};
lf.backstore.Firebase.prototype.init = function $lf$backstore$Firebase$$init$($opt_onUpgrade$$) {
  this.db_ = this.app_.child(this.schema_.name());
  var $getValue$$ = lf.backstore.FirebaseRawBackStore.getValue, $onUpgrade$$ = $opt_onUpgrade$$ || function() {
    return goog.Promise.resolve();
  };
  return $getValue$$(this.db_, "@db/version").then(function($version$$) {
    return goog.isNull($version$$) ? lf.backstore.FirebaseRawBackStore.setValue(this.db_, this.createNewDb_(), !0).then(function() {
      var $rawDb$$ = new lf.backstore.FirebaseRawBackStore(0, this.db_);
      return $onUpgrade$$($rawDb$$);
    }.bind(this)).then(function() {
      return this.init();
    }.bind(this)) : $version$$ == this.schema_.version() ? $getValue$$(this.db_, "@rev/R").then(function($revision$$) {
      this.revision_ = $revision$$;
      return $getValue$$(this.db_, "@table");
    }.bind(this)).then(function($promises$$9_tableIdMap$$) {
      for (var $t$$ in $promises$$9_tableIdMap$$) {
        this.tableIds_.set($t$$, $promises$$9_tableIdMap$$[$t$$]);
      }
      $promises$$9_tableIdMap$$ = this.schema_.tables().map(function($table$$) {
        return this.reloadTable($table$$.getName());
      }, this);
      return goog.Promise.all($promises$$9_tableIdMap$$);
    }.bind(this)).then(function() {
      this.initRowId_();
      this.listen_();
      return goog.Promise.resolve();
    }.bind(this)) : this.onUpgrade_($version$$, $onUpgrade$$).then(function() {
      return this.init();
    }.bind(this));
  }.bind(this));
};
lf.backstore.Firebase.prototype.onUpgrade_ = function $lf$backstore$Firebase$$onUpgrade_$($oldVersion$$, $onUpgrade$$) {
  var $rawDb$$ = new lf.backstore.FirebaseRawBackStore($oldVersion$$, this.db_);
  return $rawDb$$.init(this.schema_).then(function() {
    return this.updateIndexTables_();
  }.bind(this)).then(function() {
    return $onUpgrade$$($rawDb$$);
  }).then(function() {
    var $ref$$ = this.db_.child("@db");
    return lf.backstore.FirebaseRawBackStore.setValue($ref$$, {version:this.schema_.version()}, !0);
  }.bind(this));
};
lf.backstore.Firebase.prototype.updateIndexTables_ = function $lf$backstore$Firebase$$updateIndexTables_$() {
  return goog.Promise.resolve();
};
lf.backstore.Firebase.prototype.listen_ = function $lf$backstore$Firebase$$listen_$() {
  this.db_.off();
  this.db_.on("child_removed", this.onRemoved_.bind(this));
  this.change_ && (this.change_.off(), this.removedRows_.clear());
  this.change_ = this.db_.orderByChild("R").startAt(this.revision_ + 1);
  this.change_.on("value", this.onChange_.bind(this));
};
lf.backstore.Firebase.prototype.initRowId_ = function $lf$backstore$Firebase$$initRowId_$() {
  var $maxRowId$$ = lf.structs.map.values(this.tables_).map(function($table$$) {
    return $table$$.getMaxRowId();
  }).reduce(function($maxSoFar$$, $cur$$) {
    return $maxSoFar$$ > $cur$$ ? $maxSoFar$$ : $cur$$;
  }, 0);
  lf.Row.setNextId($maxRowId$$ + 1);
};
lf.backstore.Firebase.prototype.onRemoved_ = function $lf$backstore$Firebase$$onRemoved_$($snapshot$$) {
  var $row$$ = $snapshot$$.val(), $set$$ = this.removedRows_.get($row$$.T) || null;
  goog.isNull($set$$) && ($set$$ = lf.structs.set.create(), this.removedRows_.set($row$$.T, $set$$));
  $set$$.add(parseInt($snapshot$$.key(), 10));
};
lf.backstore.Firebase.prototype.onChange_ = function $lf$backstore$Firebase$$onChange_$($diffs$$1_snapshot$$) {
  var $rev$$ = $diffs$$1_snapshot$$.child("@rev/R").val();
  goog.isDefAndNotNull($rev$$) && $rev$$ != this.revision_ && (this.revision_ = $rev$$, $diffs$$1_snapshot$$ = this.generateDiff_($diffs$$1_snapshot$$), $diffs$$1_snapshot$$.forEach(function($diff$$) {
    var $table$$ = this.tables_.get($diff$$.getName()), $toRemove$$ = lf.structs.map.keys($diff$$.getDeleted());
    0 < $toRemove$$.length && $table$$.removeSync($toRemove$$);
    var $rows$$ = lf.structs.map.values($diff$$.getAdded());
    $diff$$.getModified().forEach(function($rowPair$$) {
      $rows$$.push($rowPair$$[1]);
    });
    $table$$.putSync($rows$$);
  }, this), 0 < $diffs$$1_snapshot$$.length && this.notify($diffs$$1_snapshot$$), this.listen_());
};
lf.backstore.Firebase.prototype.generateDiff_ = function $lf$backstore$Firebase$$generateDiff_$($snapshot$$) {
  var $removedIds$$ = lf.structs.set.create(), $diffs$$ = lf.structs.map.create();
  this.tableIds_.forEach(function($tid$$, $tableName$$) {
    var $table$$ = this.tables_.get($tableName$$), $diff$$ = new lf.cache.TableDiff($tableName$$);
    if (this.removedRows_.has($tid$$)) {
      var $rowIds$$ = lf.structs.set.values(this.removedRows_.get($tid$$));
      $rowIds$$.forEach(function($rowId$$) {
        $removedIds$$.add($rowId$$);
      });
      $table$$.getSync($rowIds$$).forEach(function($row$$) {
        $diff$$.delete($row$$);
      });
    }
    $diffs$$.set($tid$$, $diff$$);
  }.bind(this));
  $snapshot$$.forEach(function($child$$6_diff$$) {
    if ("@rev" != $child$$6_diff$$.key()) {
      var $rowId$$ = parseInt($child$$6_diff$$.key(), 10);
      if (!$removedIds$$.has($rowId$$)) {
        var $nowRow_row$$ = $child$$6_diff$$.val();
        $child$$6_diff$$ = $diffs$$.get($nowRow_row$$.T);
        var $table$$ = this.tables_.get($child$$6_diff$$.getName()), $nowRow_row$$ = this.schema_.table($child$$6_diff$$.getName()).deserializeRow({id:$rowId$$, value:$nowRow_row$$.P});
        $table$$.getData().has($rowId$$) ? $child$$6_diff$$.modify([$table$$.getSync([$rowId$$])[0], $nowRow_row$$]) : $child$$6_diff$$.add($nowRow_row$$);
      }
    }
  }.bind(this));
  return lf.structs.map.values($diffs$$).filter(function($diff$$) {
    return !$diff$$.isEmpty();
  });
};
lf.backstore.Firebase.prototype.reloadTable = function $lf$backstore$Firebase$$reloadTable$($tableName$$) {
  var $resolver$$ = goog.Promise.withResolver(), $tid$$ = this.getTableId($tableName$$), $tableSchema$$ = this.schema_.table($tableName$$);
  this.db_.orderByChild("T").equalTo($tid$$).once("value", function($snapshot$$) {
    var $memTable$$ = new lf.backstore.MemoryTable, $rows$$ = [];
    $snapshot$$.forEach(function($rowSnapshot$$) {
      $rows$$.push($tableSchema$$.deserializeRow({id:parseInt($rowSnapshot$$.key(), 10), value:$rowSnapshot$$.val().P}));
    });
    $memTable$$.putSync($rows$$);
    this.tables_.set($tableName$$, $memTable$$);
    $resolver$$.resolve();
  }.bind(this));
  return $resolver$$.promise;
};
lf.backstore.Firebase.prototype.getTableId = function $lf$backstore$Firebase$$getTableId$($name$$) {
  return this.tableIds_.get($name$$);
};
lf.backstore.Firebase.prototype.createNewDb_ = function $lf$backstore$Firebase$$createNewDb_$() {
  var $val$$ = {};
  $val$$["@db"] = {version:this.schema_.version()};
  $val$$["@rev"] = {R:1};
  this.revision_ = 1;
  $val$$["@table"] = {};
  this.schema_.tables().forEach(function($table$$, $index$$) {
    var $tableName$$ = $table$$.getName();
    $val$$["@table"][$tableName$$] = $index$$;
    this.tables_.set($tableName$$, new lf.backstore.MemoryTable);
    this.tableIds_.set($tableName$$, $index$$);
  }, this);
  return $val$$;
};
lf.backstore.Firebase.prototype.createTx = function $lf$backstore$Firebase$$createTx$($type$$, $scope$$, $opt_journal$$) {
  return new lf.backstore.FirebaseTx(this, $type$$, $opt_journal$$);
};
lf.backstore.Firebase.prototype.getTableInternal = function $lf$backstore$Firebase$$getTableInternal$($tableName$$) {
  var $table$$ = this.tables_.get($tableName$$) || null;
  if (!goog.isNull($table$$)) {
    return $table$$;
  }
  throw new lf.Exception(101, $tableName$$);
};
lf.backstore.Firebase.prototype.getRef = function $lf$backstore$Firebase$$getRef$() {
  return this.db_;
};
lf.backstore.Firebase.prototype.close = function $lf$backstore$Firebase$$close$() {
};
lf.backstore.Firebase.prototype.subscribe = function $lf$backstore$Firebase$$subscribe$($handler$$) {
  this.changeHandler_ = $handler$$;
};
lf.backstore.Firebase.prototype.unsubscribe = function $lf$backstore$Firebase$$unsubscribe$() {
  this.changeHandler_ = null;
};
lf.backstore.Firebase.prototype.notify = function $lf$backstore$Firebase$$notify$($changes$$) {
  goog.isDefAndNotNull(this.changeHandler_) && this.changeHandler_($changes$$);
};
lf.backstore.IndexedDBRawBackStore = function $lf$backstore$IndexedDBRawBackStore$($version$$, $db$$, $tx$$, $bundledMode$$) {
  this.db_ = $db$$;
  this.tx_ = $tx$$;
  this.version_ = $version$$;
  this.bundleMode_ = $bundledMode$$;
};
goog.exportSymbol("lf.backstore.IndexedDBRawBackStore", lf.backstore.IndexedDBRawBackStore);
lf.backstore.IndexedDBRawBackStore.prototype.getRawDBInstance = function $lf$backstore$IndexedDBRawBackStore$$getRawDBInstance$() {
  return this.db_;
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "getRawDBInstance", lf.backstore.IndexedDBRawBackStore.prototype.getRawDBInstance);
lf.backstore.IndexedDBRawBackStore.prototype.getRawTransaction = function $lf$backstore$IndexedDBRawBackStore$$getRawTransaction$() {
  return this.tx_;
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "getRawTransaction", lf.backstore.IndexedDBRawBackStore.prototype.getRawTransaction);
lf.backstore.IndexedDBRawBackStore.prototype.dropTable = function $lf$backstore$IndexedDBRawBackStore$$dropTable$($tableName$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    try {
      this.db_.deleteObjectStore($tableName$$);
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $resolve$$();
  }, this);
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "dropTable", lf.backstore.IndexedDBRawBackStore.prototype.dropTable);
lf.backstore.IndexedDBRawBackStore.prototype.openCursorForWrite_ = function $lf$backstore$IndexedDBRawBackStore$$openCursorForWrite_$($tableName$$, $loopFunc$$, $endFunc$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $req$$;
    try {
      var $store$$ = this.tx_.objectStore($tableName$$);
      $req$$ = $store$$.openCursor();
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $req$$.onsuccess = function $$req$$$onsuccess$($cursor$$1_ev$$) {
      ($cursor$$1_ev$$ = $req$$.result) ? ($loopFunc$$($cursor$$1_ev$$), $cursor$$1_ev$$.continue()) : ($endFunc$$($store$$), $resolve$$());
    };
    $req$$.onerror = $reject$$;
  }, this);
};
lf.backstore.IndexedDBRawBackStore.convert = function $lf$backstore$IndexedDBRawBackStore$convert$($value$$) {
  var $ret$$ = null;
  return $ret$$ = $value$$ instanceof ArrayBuffer ? lf.Row.binToHex($value$$) : $value$$ instanceof Date ? $value$$.getTime() : $value$$;
};
lf.backstore.IndexedDBRawBackStore.prototype.transformRows_ = function $lf$backstore$IndexedDBRawBackStore$$transformRows_$($tableName$$, $rowFn$$) {
  var $loopFunc$$ = function $$loopFunc$$$($cursor$$) {
    var $row$$ = lf.Row.deserialize($cursor$$.value);
    $rowFn$$($row$$);
    $cursor$$.update($row$$.serialize());
  }, $loopFuncBundle$$ = function $$loopFuncBundle$$$($cursor$$) {
    var $page$$ = lf.backstore.Page.deserialize($cursor$$.value), $data$$ = $page$$.getPayload(), $rowId$$;
    for ($rowId$$ in $data$$) {
      var $row$$ = lf.Row.deserialize($data$$[$rowId$$]);
      $rowFn$$($row$$);
      $data$$[$rowId$$] = $row$$.serialize();
    }
    $cursor$$.update($page$$.serialize());
  };
  return this.openCursorForWrite_($tableName$$, this.bundleMode_ ? $loopFuncBundle$$ : $loopFunc$$, function() {
  });
};
lf.backstore.IndexedDBRawBackStore.prototype.addTableColumn = function $lf$backstore$IndexedDBRawBackStore$$addTableColumn$($tableName$$, $columnName$$, $defaultValue$$) {
  var $value$$ = lf.backstore.IndexedDBRawBackStore.convert($defaultValue$$);
  return this.transformRows_($tableName$$, function($row$$) {
    $row$$.payload()[$columnName$$] = $value$$;
  });
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "addTableColumn", lf.backstore.IndexedDBRawBackStore.prototype.addTableColumn);
lf.backstore.IndexedDBRawBackStore.prototype.dropTableColumn = function $lf$backstore$IndexedDBRawBackStore$$dropTableColumn$($tableName$$, $columnName$$) {
  return this.transformRows_($tableName$$, function($row$$) {
    delete $row$$.payload()[$columnName$$];
  });
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "dropTableColumn", lf.backstore.IndexedDBRawBackStore.prototype.dropTableColumn);
lf.backstore.IndexedDBRawBackStore.prototype.renameTableColumn = function $lf$backstore$IndexedDBRawBackStore$$renameTableColumn$($tableName$$, $oldColumnName$$, $newColumnName$$) {
  return this.transformRows_($tableName$$, function($row$$) {
    $row$$.payload()[$newColumnName$$] = $row$$.payload()[$oldColumnName$$];
    delete $row$$.payload()[$oldColumnName$$];
  });
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "renameTableColumn", lf.backstore.IndexedDBRawBackStore.prototype.renameTableColumn);
lf.backstore.IndexedDBRawBackStore.prototype.getTableRows_ = function $lf$backstore$IndexedDBRawBackStore$$getTableRows_$($tableName$$) {
  var $results$$ = [];
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $req$$;
    try {
      $req$$ = this.tx_.objectStore($tableName$$).openCursor();
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $req$$.onsuccess = function($cursor$$4_ev$$) {
      if ($cursor$$4_ev$$ = $req$$.result) {
        if (this.bundleMode_) {
          var $data$$ = lf.backstore.Page.deserialize($cursor$$4_ev$$.value).getPayload(), $rowId$$;
          for ($rowId$$ in $data$$) {
            $results$$.push($data$$[$rowId$$]);
          }
        } else {
          $results$$.push($cursor$$4_ev$$.value);
        }
        $cursor$$4_ev$$.continue();
      } else {
        $resolve$$($results$$);
      }
    }.bind(this);
    $req$$.onerror = $reject$$;
  }, this);
};
lf.backstore.IndexedDBRawBackStore.prototype.createRow = function $lf$backstore$IndexedDBRawBackStore$$createRow$($payload$$) {
  var $data$$ = {}, $key$$;
  for ($key$$ in $payload$$) {
    $data$$[$key$$] = lf.backstore.IndexedDBRawBackStore.convert($payload$$[$key$$]);
  }
  return lf.Row.create($data$$);
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "createRow", lf.backstore.IndexedDBRawBackStore.prototype.createRow);
lf.backstore.IndexedDBRawBackStore.prototype.getVersion = function $lf$backstore$IndexedDBRawBackStore$$getVersion$() {
  return this.version_;
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "getVersion", lf.backstore.IndexedDBRawBackStore.prototype.getVersion);
lf.backstore.IndexedDBRawBackStore.prototype.dump = function $lf$backstore$IndexedDBRawBackStore$$dump$() {
  for (var $tables$$ = this.db_.objectStoreNames, $promises$$ = [], $i$$ = 0;$i$$ < $tables$$.length;++$i$$) {
    var $tableName$$ = $tables$$.item($i$$);
    $promises$$.push(this.dumpTable_($tableName$$));
  }
  return goog.Promise.all($promises$$).then(function($tableDumps$$) {
    var $results$$ = {};
    $tableDumps$$.forEach(function($tableDump$$, $index$$) {
      $results$$[$tables$$.item($index$$)] = $tableDump$$;
    });
    return $results$$;
  });
};
goog.exportProperty(lf.backstore.IndexedDBRawBackStore.prototype, "dump", lf.backstore.IndexedDBRawBackStore.prototype.dump);
lf.backstore.IndexedDBRawBackStore.prototype.dumpTable_ = function $lf$backstore$IndexedDBRawBackStore$$dumpTable_$($tableName$$) {
  return this.getTableRows_($tableName$$).then(function($rawRows$$) {
    return $rawRows$$.map(function($rawRow$$) {
      return $rawRow$$.value;
    });
  });
};
lf.backstore.ObjectStore = function $lf$backstore$ObjectStore$($store$$, $deserializeFn$$) {
  this.store_ = $store$$;
  this.deserializeFn_ = $deserializeFn$$;
};
lf.backstore.ObjectStore.prototype.get = function $lf$backstore$ObjectStore$$get$($ids$$7_promises$$) {
  if (0 == $ids$$7_promises$$.length) {
    return goog.isDefAndNotNull(this.store_.getAll) ? this.getAllBulk_() : this.getAllWithCursor_();
  }
  $ids$$7_promises$$ = $ids$$7_promises$$.map(function($id$$, $index$$) {
    return new goog.Promise(function($resolve$$, $reject$$) {
      var $request$$;
      try {
        $request$$ = this.store_.get($id$$);
      } catch ($e$$) {
        $reject$$($e$$);
        return;
      }
      $request$$.onerror = $reject$$;
      $request$$.onsuccess = function($ev$$) {
        $resolve$$(this.deserializeFn_($ev$$.target.result));
      }.bind(this);
    }, this);
  }, this);
  return goog.Promise.all($ids$$7_promises$$);
};
lf.backstore.ObjectStore.prototype.getAllWithCursor_ = function $lf$backstore$ObjectStore$$getAllWithCursor_$() {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $rows$$ = [], $request$$;
    try {
      $request$$ = this.store_.openCursor();
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $request$$.onerror = $reject$$;
    $request$$.onsuccess = function() {
      var $cursor$$ = $request$$.result;
      $cursor$$ ? ($rows$$.push(this.deserializeFn_($cursor$$.value)), $cursor$$.continue()) : $resolve$$($rows$$);
    }.bind(this);
  }, this);
};
lf.backstore.ObjectStore.prototype.getAllBulk_ = function $lf$backstore$ObjectStore$$getAllBulk_$() {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $request$$;
    try {
      $request$$ = this.store_.getAll();
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $request$$.onerror = $reject$$;
    $request$$.onsuccess = function() {
      var $rows$$ = $request$$.result.map(function($rawRow$$) {
        return this.deserializeFn_($rawRow$$);
      }, this);
      $resolve$$($rows$$);
    }.bind(this);
  }, this);
};
lf.backstore.ObjectStore.prototype.performWriteOp_ = function $lf$backstore$ObjectStore$$performWriteOp_$($reqFactory$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $request$$;
    try {
      $request$$ = $reqFactory$$();
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $request$$.onsuccess = $resolve$$;
    $request$$.onerror = $reject$$;
  }, this);
};
lf.backstore.ObjectStore.prototype.put = function $lf$backstore$ObjectStore$$put$($promises$$12_rows$$) {
  if (0 == $promises$$12_rows$$.length) {
    return goog.Promise.resolve();
  }
  $promises$$12_rows$$ = $promises$$12_rows$$.map(function($row$$) {
    return this.performWriteOp_(function() {
      return this.store_.put($row$$.serialize());
    }.bind(this));
  }, this);
  return goog.Promise.all($promises$$12_rows$$);
};
lf.backstore.ObjectStore.prototype.remove = function $lf$backstore$ObjectStore$$remove$($ids$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $request$$ = this.store_.count();
    $request$$.onsuccess = function($ev$$4_promises$$) {
      if (0 == $ids$$.length || $ev$$4_promises$$.target.result == $ids$$.length) {
        return this.performWriteOp_(function() {
          return this.store_.clear();
        }.bind(this)).then($resolve$$, $reject$$);
      }
      $ev$$4_promises$$ = $ids$$.map(function($id$$) {
        return this.performWriteOp_(function() {
          return this.store_.delete($id$$);
        }.bind(this));
      }, this);
      goog.Promise.all($ev$$4_promises$$).then($resolve$$, $reject$$);
    }.bind(this);
    $request$$.onerror = $reject$$;
  }, this);
};
lf.backstore.IndexedDBTx = function $lf$backstore$IndexedDBTx$($global$$, $transaction$$, $txType$$, $bundleMode$$, $opt_journal$$) {
  lf.backstore.BaseTx.call(this, $txType$$, $opt_journal$$);
  this.global_ = $global$$;
  this.tx_ = $transaction$$;
  this.bundleMode_ = $bundleMode$$;
  this.tx_.oncomplete = this.resolver.resolve.bind(this.resolver);
  this.tx_.onabort = this.resolver.reject.bind(this.resolver);
};
goog.inherits(lf.backstore.IndexedDBTx, lf.backstore.BaseTx);
lf.backstore.IndexedDBTx.prototype.getTable = function $lf$backstore$IndexedDBTx$$getTable$($tableName$$, $deserializeFn$$, $opt_tableType_tableType$$) {
  return this.bundleMode_ ? ($opt_tableType_tableType$$ = goog.isDefAndNotNull($opt_tableType_tableType$$) ? $opt_tableType_tableType$$ : lf.backstore.TableType.DATA, lf.backstore.BundledObjectStore.forTableType(this.global_, this.tx_.objectStore($tableName$$), $deserializeFn$$, $opt_tableType_tableType$$)) : new lf.backstore.ObjectStore(this.tx_.objectStore($tableName$$), $deserializeFn$$);
};
lf.backstore.IndexedDBTx.prototype.abort = function $lf$backstore$IndexedDBTx$$abort$() {
  this.tx_.abort();
};
lf.backstore.IndexedDBTx.prototype.commitInternal = function $lf$backstore$IndexedDBTx$$commitInternal$() {
  return this.resolver.promise;
};
lf.backstore.IndexedDB = function $lf$backstore$IndexedDB$($global$$, $schema$$) {
  this.global_ = $global$$;
  this.schema_ = $schema$$;
  this.bundledMode_ = $schema$$.pragma().enableBundledMode || !1;
};
lf.backstore.IndexedDB.prototype.init = function $lf$backstore$IndexedDB$$init$($opt_onUpgrade$$) {
  var $indexedDB$$ = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  if (!goog.isDefAndNotNull($indexedDB$$)) {
    throw new lf.Exception(352);
  }
  var $onUpgrade$$ = $opt_onUpgrade$$ || function($rawDb$$) {
    return goog.Promise.resolve();
  };
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $request$$;
    try {
      $request$$ = $indexedDB$$.open(this.schema_.name(), this.schema_.version());
    } catch ($e$$) {
      $reject$$($e$$);
      return;
    }
    $request$$.onerror = function $$request$$$onerror$($e$$37_error$$) {
      $e$$37_error$$ = $e$$37_error$$.target.error;
      $reject$$(new lf.Exception(361, $e$$37_error$$.name, $e$$37_error$$.message));
    };
    $request$$.onupgradeneeded = function($ev$$) {
      this.onUpgradeNeeded_($onUpgrade$$, $ev$$).then(function() {
      }, $reject$$);
    }.bind(this);
    $request$$.onsuccess = function($ev$$) {
      this.db_ = $ev$$.target.result;
      this.scanRowId_().then(function($rowId$$) {
        lf.Row.setNextId($rowId$$ + 1);
        $resolve$$(this.db_);
      }.bind(this));
    }.bind(this);
  }, this);
};
lf.backstore.IndexedDB.prototype.onUpgradeNeeded_ = function $lf$backstore$IndexedDB$$onUpgradeNeeded_$($onUpgrade$$, $ev$$) {
  var $db$$ = $ev$$.target.result, $tx$$ = $ev$$.target.transaction, $rawDb$$ = new lf.backstore.IndexedDBRawBackStore($ev$$.oldVersion, $db$$, $tx$$, this.bundledMode_);
  this.removeIndexTables_($db$$, $tx$$);
  this.createTables_($db$$);
  return $onUpgrade$$($rawDb$$);
};
lf.backstore.IndexedDB.prototype.removeIndexTables_ = function $lf$backstore$IndexedDB$$removeIndexTables_$($db$$, $tx$$) {
  for (var $storeNames$$ = [], $i$$ = 0;$i$$ < $db$$.objectStoreNames.length;++$i$$) {
    var $name$$ = $db$$.objectStoreNames.item($i$$);
    -1 != $name$$.indexOf(".") && $storeNames$$.push($name$$);
  }
  $storeNames$$.forEach(function($store$$) {
    try {
      $db$$.deleteObjectStore($store$$);
    } catch ($e$$) {
    }
  });
};
lf.backstore.IndexedDB.prototype.createTables_ = function $lf$backstore$IndexedDB$$createTables_$($db$$) {
  this.schema_.tables().forEach(goog.partial(this.createObjectStoresForTable_, $db$$), this);
};
lf.backstore.IndexedDB.prototype.createObjectStoresForTable_ = function $lf$backstore$IndexedDB$$createObjectStoresForTable_$($db$$, $tableSchema$$) {
  $db$$.objectStoreNames.contains($tableSchema$$.getName()) || $db$$.createObjectStore($tableSchema$$.getName(), {keyPath:"id"});
  $tableSchema$$.persistentIndex() && ($tableSchema$$.getIndices().forEach(function($indexSchema$$) {
    this.createIndexTable_($db$$, $indexSchema$$.getNormalizedName());
  }, this), this.createIndexTable_($db$$, $tableSchema$$.getRowIdIndexName()));
};
lf.backstore.IndexedDB.prototype.createIndexTable_ = function $lf$backstore$IndexedDB$$createIndexTable_$($db$$, $indexName$$) {
  $db$$.objectStoreNames.contains($indexName$$) || $db$$.createObjectStore($indexName$$, {keyPath:"id"});
};
lf.backstore.IndexedDB.prototype.createTx = function $lf$backstore$IndexedDB$$createTx$($type$$, $nativeTx_scope$$, $opt_journal$$) {
  $nativeTx_scope$$ = this.db_.transaction(lf.backstore.IndexedDB.getIndexedDBScope_($nativeTx_scope$$), $type$$ == lf.TransactionType.READ_ONLY ? "readonly" : "readwrite");
  return new lf.backstore.IndexedDBTx(this.global_, $nativeTx_scope$$, $type$$, this.bundledMode_, $opt_journal$$);
};
lf.backstore.IndexedDB.getIndexedDBScope_ = function $lf$backstore$IndexedDB$getIndexedDBScope_$($scope$$) {
  var $indexedDBScope$$ = lf.structs.set.create();
  $scope$$.forEach(function($tableSchema$$) {
    $indexedDBScope$$.add($tableSchema$$.getName());
    $tableSchema$$.persistentIndex() && ($tableSchema$$.getIndices().forEach(function($indexSchema$$) {
      $indexedDBScope$$.add($indexSchema$$.getNormalizedName());
    }), $indexedDBScope$$.add($tableSchema$$.getRowIdIndexName()));
  });
  return lf.structs.set.values($indexedDBScope$$);
};
lf.backstore.IndexedDB.prototype.scanRowId_ = function $lf$backstore$IndexedDB$$scanRowId_$($opt_tx$$) {
  var $tableNames$$ = this.schema_.tables().map(function($table$$) {
    return $table$$.getName();
  }), $db$$ = this.db_, $maxRowId$$ = 0, $extractRowId$$ = function($cursor$$6_page$$) {
    return this.bundledMode_ ? ($cursor$$6_page$$ = lf.backstore.Page.deserialize($cursor$$6_page$$.value), Object.keys($cursor$$6_page$$.getPayload()).reduce(function($prev$$, $cur$$) {
      return Math.max($prev$$, $cur$$);
    }, 0)) : $cursor$$6_page$$.key;
  }.bind(this), $scanTableRowId$$ = function $$scanTableRowId$$$($tableName$$) {
    return new goog.Promise(function($resolve$$, $reject$$) {
      var $req$$;
      try {
        $req$$ = ($opt_tx$$ || $db$$.transaction([$tableName$$])).objectStore($tableName$$).openCursor(null, "prev");
      } catch ($e$$) {
        $reject$$($e$$);
        return;
      }
      $req$$.onsuccess = function $$req$$$onsuccess$($cursor$$7_ev$$) {
        ($cursor$$7_ev$$ = $cursor$$7_ev$$.target.result) && ($maxRowId$$ = Math.max($maxRowId$$, $extractRowId$$($cursor$$7_ev$$)));
        $resolve$$($maxRowId$$);
      };
      $req$$.onerror = function $$req$$$onerror$() {
        $resolve$$($maxRowId$$);
      };
    });
  }, $execSequentially$$ = function $$execSequentially$$$() {
    if (0 == $tableNames$$.length) {
      return goog.Promise.resolve();
    }
    var $tableName$$ = $tableNames$$.shift();
    return $scanTableRowId$$($tableName$$).then($execSequentially$$);
  };
  return new goog.Promise(function($resolve$$, $reject$$) {
    $execSequentially$$().then(function() {
      $resolve$$($maxRowId$$);
    });
  });
};
lf.backstore.IndexedDB.prototype.close = function $lf$backstore$IndexedDB$$close$() {
  this.db_.close();
};
lf.backstore.IndexedDB.prototype.getTableInternal = function $lf$backstore$IndexedDB$$getTableInternal$($tableName$$) {
  throw new lf.Exception(511);
};
lf.backstore.IndexedDB.prototype.subscribe = function $lf$backstore$IndexedDB$$subscribe$($handler$$) {
};
lf.backstore.IndexedDB.prototype.unsubscribe = function $lf$backstore$IndexedDB$$unsubscribe$() {
};
lf.backstore.IndexedDB.prototype.notify = function $lf$backstore$IndexedDB$$notify$($changes$$) {
};
lf.backstore.LocalStorageTable = function $lf$backstore$LocalStorageTable$($rawData_tableKey$$) {
  this.key_ = $rawData_tableKey$$;
  this.data_ = {};
  $rawData_tableKey$$ = window.localStorage.getItem($rawData_tableKey$$);
  goog.isDefAndNotNull($rawData_tableKey$$) && (this.data_ = JSON.parse($rawData_tableKey$$));
};
lf.backstore.LocalStorageTable.prototype.get = function $lf$backstore$LocalStorageTable$$get$($ids$$) {
  var $results$$;
  0 == $ids$$.length ? $results$$ = Object.keys(this.data_).map(function($key$$) {
    var $id$$ = parseInt($key$$, 10);
    return new lf.Row($id$$, this.data_[$key$$]);
  }, this) : ($results$$ = [], $ids$$.forEach(function($id$$) {
    this.data_.hasOwnProperty($id$$.toString()) && $results$$.push(new lf.Row($id$$, this.data_[$id$$.toString()]));
  }, this));
  return goog.Promise.resolve($results$$);
};
lf.backstore.LocalStorageTable.prototype.put = function $lf$backstore$LocalStorageTable$$put$($rows$$) {
  $rows$$.forEach(function($row$$) {
    this.data_[$row$$.id().toString()] = $row$$.payload();
  }, this);
  return goog.Promise.resolve();
};
lf.backstore.LocalStorageTable.prototype.remove = function $lf$backstore$LocalStorageTable$$remove$($ids$$) {
  0 == $ids$$.length || $ids$$.length == Object.keys(this.data_).length ? this.data_ = {} : $ids$$.forEach(function($id$$) {
    delete this.data_[$id$$];
  }, this);
  return goog.Promise.resolve();
};
lf.backstore.LocalStorageTable.prototype.commit = function $lf$backstore$LocalStorageTable$$commit$() {
  window.localStorage.setItem(this.key_, JSON.stringify(this.data_));
};
lf.backstore.LocalStorageTable.prototype.diff = function $lf$backstore$LocalStorageTable$$diff$($newData$$) {
  var $oldIds$$ = Object.keys(this.data_), $newIds$$ = Object.keys($newData$$), $diff$$ = new lf.cache.TableDiff(this.key_);
  $newIds$$.forEach(function($id$$) {
    var $rowId$$ = parseInt($id$$, 10);
    this.data_.hasOwnProperty($id$$) ? JSON.stringify(this.data_[$id$$]) != JSON.stringify($newData$$[$id$$]) && $diff$$.modify([new lf.Row($rowId$$, this.data_[$id$$]), new lf.Row($rowId$$, $newData$$[$id$$])]) : $diff$$.add(new lf.Row($rowId$$, $newData$$[$id$$]));
  }, this);
  $oldIds$$.filter(function($id$$) {
    return !$newData$$.hasOwnProperty($id$$);
  }, this).forEach(function($id$$) {
    $diff$$.delete(new lf.Row(parseInt($id$$, 10), this.data_[$id$$]));
  }, this);
  return $diff$$;
};
lf.backstore.LocalStorageTx = function $lf$backstore$LocalStorageTx$($store$$, $type$$, $opt_journal$$) {
  lf.backstore.BaseTx.call(this, $type$$, $opt_journal$$);
  this.store_ = $store$$;
  $type$$ == lf.TransactionType.READ_ONLY && this.resolver.resolve();
};
goog.inherits(lf.backstore.LocalStorageTx, lf.backstore.BaseTx);
lf.backstore.LocalStorageTx.prototype.getTable = function $lf$backstore$LocalStorageTx$$getTable$($tableName$$, $deserializeFn$$, $tableType$$) {
  return this.store_.getTableInternal($tableName$$);
};
lf.backstore.LocalStorageTx.prototype.abort = function $lf$backstore$LocalStorageTx$$abort$() {
  this.resolver.reject(void 0);
};
lf.backstore.LocalStorageTx.prototype.commitInternal = function $lf$backstore$LocalStorageTx$$commitInternal$() {
  this.store_.commit();
  this.resolver.resolve();
  return this.resolver.promise;
};
lf.backstore.LocalStorage = function $lf$backstore$LocalStorage$($schema$$) {
  this.schema_ = $schema$$;
  this.tables_ = lf.structs.map.create();
  this.listener_ = this.changeHandler_ = null;
};
lf.backstore.LocalStorage.prototype.initSync = function $lf$backstore$LocalStorage$$initSync$() {
  if (!window.localStorage) {
    throw new lf.Exception(359);
  }
  var $versionKey$$ = this.schema_.name() + ".version#", $version$$ = window.localStorage.getItem($versionKey$$);
  if (goog.isDefAndNotNull($version$$)) {
    if ($version$$ != this.schema_.version().toString()) {
      throw new lf.Exception(360);
    }
    this.loadTables_();
  } else {
    this.loadTables_(), window.localStorage.setItem($versionKey$$, this.schema_.version().toString()), this.commit();
  }
};
lf.backstore.LocalStorage.prototype.init = function $lf$backstore$LocalStorage$$init$($opt_onUpgrade$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    this.initSync();
    $resolve$$();
  }.bind(this));
};
lf.backstore.LocalStorage.prototype.loadTables_ = function $lf$backstore$LocalStorage$$loadTables_$() {
  var $prefix$$ = this.schema_.name() + ".";
  this.schema_.tables().forEach(function($table$$) {
    var $tableName$$ = $table$$.getName();
    this.tables_.set($tableName$$, new lf.backstore.LocalStorageTable($prefix$$ + $tableName$$));
    $table$$.persistentIndex() && $table$$.getIndices().forEach(function($index$$82_indexName$$) {
      $index$$82_indexName$$ = $index$$82_indexName$$.getNormalizedName();
      this.tables_.set($index$$82_indexName$$, new lf.backstore.LocalStorageTable($prefix$$ + $index$$82_indexName$$));
    }, this);
  }, this);
};
lf.backstore.LocalStorage.prototype.getTableInternal = function $lf$backstore$LocalStorage$$getTableInternal$($tableName$$) {
  if (!this.tables_.has($tableName$$)) {
    throw new lf.Exception(101, $tableName$$);
  }
  return this.tables_.get($tableName$$);
};
lf.backstore.LocalStorage.prototype.createTx = function $lf$backstore$LocalStorage$$createTx$($mode$$, $scope$$, $opt_journal$$) {
  return new lf.backstore.LocalStorageTx(this, $mode$$, $opt_journal$$);
};
lf.backstore.LocalStorage.prototype.close = function $lf$backstore$LocalStorage$$close$() {
};
lf.backstore.LocalStorage.prototype.subscribe = function $lf$backstore$LocalStorage$$subscribe$($handler$$) {
  this.changeHandler_ = $handler$$;
  goog.isDefAndNotNull(this.listener_) || (this.listener_ = this.onStorageEvent_.bind(this), window.addEventListener("storage", this.listener_, !1));
};
lf.backstore.LocalStorage.prototype.commit = function $lf$backstore$LocalStorage$$commit$() {
  this.tables_.forEach(function($table$$, $tableName$$) {
    $table$$.commit();
  });
};
lf.backstore.LocalStorage.prototype.unsubscribe = function $lf$backstore$LocalStorage$$unsubscribe$() {
  goog.isDefAndNotNull(this.listener_) && (window.removeEventListener("storage", this.listener_, !1), this.changeHandler_ = this.listener_ = null);
};
lf.backstore.LocalStorage.prototype.notify = function $lf$backstore$LocalStorage$$notify$($changes$$) {
  goog.isDefAndNotNull(this.changeHandler_) && this.changeHandler_($changes$$);
};
lf.backstore.LocalStorage.prototype.onStorageEvent_ = function $lf$backstore$LocalStorage$$onStorageEvent_$($raw_table$$35_tableName$$) {
  if ($raw_table$$35_tableName$$.storageArea == window.localStorage && 0 == $raw_table$$35_tableName$$.key.indexOf(this.schema_.name() + ".")) {
    var $newValue$$ = window.localStorage.getItem($raw_table$$35_tableName$$.key), $newData$$ = {};
    if (!goog.isNull($newValue$$)) {
      try {
        $newData$$ = JSON.parse($newValue$$);
      } catch ($e$$) {
        return;
      }
    }
    $raw_table$$35_tableName$$ = $raw_table$$35_tableName$$.key.slice(this.schema_.name().length + 1);
    ($raw_table$$35_tableName$$ = this.tables_.get($raw_table$$35_tableName$$)) && this.changeHandler_([$raw_table$$35_tableName$$.diff($newData$$)]);
  }
};
lf.backstore.MemoryTx = function $lf$backstore$MemoryTx$($store$$, $type$$, $opt_journal$$) {
  lf.backstore.BaseTx.call(this, $type$$, $opt_journal$$);
  this.store_ = $store$$;
  $type$$ == lf.TransactionType.READ_ONLY && this.resolver.resolve();
};
goog.inherits(lf.backstore.MemoryTx, lf.backstore.BaseTx);
lf.backstore.MemoryTx.prototype.getTable = function $lf$backstore$MemoryTx$$getTable$($tableName$$, $deserializeFn$$, $tableType$$) {
  return this.store_.getTableInternal($tableName$$);
};
lf.backstore.MemoryTx.prototype.abort = function $lf$backstore$MemoryTx$$abort$() {
  this.resolver.reject(void 0);
};
lf.backstore.MemoryTx.prototype.commitInternal = function $lf$backstore$MemoryTx$$commitInternal$() {
  this.resolver.resolve();
  return this.resolver.promise;
};
lf.backstore.Memory = function $lf$backstore$Memory$($schema$$) {
  this.schema_ = $schema$$;
  this.tables_ = lf.structs.map.create();
};
lf.backstore.Memory.prototype.init = function $lf$backstore$Memory$$init$($opt_onUpgrade$$) {
  this.schema_.tables().forEach(this.initTable_, this);
  return goog.Promise.resolve();
};
lf.backstore.Memory.prototype.getTableInternal = function $lf$backstore$Memory$$getTableInternal$($tableName$$) {
  var $table$$ = this.tables_.get($tableName$$) || null;
  if (goog.isNull($table$$)) {
    throw new lf.Exception(101, $tableName$$);
  }
  return $table$$;
};
lf.backstore.Memory.prototype.createTx = function $lf$backstore$Memory$$createTx$($type$$, $scope$$, $opt_journal$$) {
  return new lf.backstore.MemoryTx(this, $type$$, $opt_journal$$);
};
lf.backstore.Memory.prototype.createTable_ = function $lf$backstore$Memory$$createTable_$($tableName$$) {
  if (!this.tables_.has($tableName$$)) {
    var $backstoreTable$$ = new lf.backstore.MemoryTable;
    this.tables_.set($tableName$$, $backstoreTable$$);
    return $backstoreTable$$;
  }
  return null;
};
lf.backstore.Memory.prototype.initTable_ = function $lf$backstore$Memory$$initTable_$($tableSchema$$) {
  this.createTable_($tableSchema$$.getName());
  $tableSchema$$.persistentIndex() && ($tableSchema$$.getIndices().forEach(function($indexSchema$$) {
    this.createTable_($indexSchema$$.getNormalizedName());
  }, this), this.createTable_($tableSchema$$.getRowIdIndexName()));
};
lf.backstore.Memory.prototype.close = function $lf$backstore$Memory$$close$() {
};
lf.backstore.Memory.prototype.subscribe = function $lf$backstore$Memory$$subscribe$($handler$$) {
};
lf.backstore.Memory.prototype.unsubscribe = function $lf$backstore$Memory$$unsubscribe$() {
};
lf.backstore.Memory.prototype.notify = function $lf$backstore$Memory$$notify$($changes$$) {
};
lf.backstore.ObservableStore = function $lf$backstore$ObservableStore$($schema$$) {
  lf.backstore.Memory.call(this, $schema$$);
  this.observer_ = null;
};
goog.inherits(lf.backstore.ObservableStore, lf.backstore.Memory);
lf.backstore.ObservableStore.prototype.subscribe = function $lf$backstore$ObservableStore$$subscribe$($observer$$) {
  goog.isNull(this.observer_) && (this.observer_ = $observer$$);
};
lf.backstore.ObservableStore.prototype.unsubscribe = function $lf$backstore$ObservableStore$$unsubscribe$() {
  this.observer_ = null;
};
lf.backstore.ObservableStore.prototype.notify = function $lf$backstore$ObservableStore$$notify$($changes$$) {
  goog.isNull(this.observer_) || this.observer_($changes$$);
};
lf.backstore.WebSqlTable = function $lf$backstore$WebSqlTable$($tx$$, $name$$, $deserializeFn$$) {
  this.tx_ = $tx$$;
  this.name_ = '"' + $name$$ + '"';
  this.deserializeFn_ = $deserializeFn$$;
};
lf.backstore.WebSqlTable.prototype.get = function $lf$backstore$WebSqlTable$$get$($ids$$) {
  $ids$$ = 0 == $ids$$.length ? "" : "WHERE id IN (" + $ids$$.join(",") + ")";
  var $deserializeFn$$ = this.deserializeFn_;
  return this.tx_.queue("SELECT id, value FROM " + this.name_ + " " + $ids$$, [], function($results$$) {
    for (var $length$$ = $results$$.rows.length, $rows$$ = Array($length$$), $i$$ = 0;$i$$ < $length$$;++$i$$) {
      $rows$$[$i$$] = $deserializeFn$$({id:$results$$.rows.item($i$$).id, value:JSON.parse($results$$.rows.item($i$$).value)});
    }
    return $rows$$;
  });
};
lf.backstore.WebSqlTable.prototype.put = function $lf$backstore$WebSqlTable$$put$($rows$$) {
  if (0 == $rows$$.length) {
    return goog.Promise.resolve();
  }
  var $sql$$ = "INSERT OR REPLACE INTO " + this.name_ + "(id, value) VALUES (?, ?)";
  $rows$$.forEach(function($row$$) {
    this.tx_.queue($sql$$, [$row$$.id(), JSON.stringify($row$$.payload())]);
  }, this);
  return goog.Promise.resolve();
};
lf.backstore.WebSqlTable.prototype.remove = function $lf$backstore$WebSqlTable$$remove$($ids$$12_where$$) {
  $ids$$12_where$$ = 0 == $ids$$12_where$$.length ? "" : "WHERE id IN (" + $ids$$12_where$$.join(",") + ")";
  this.tx_.queue("DELETE FROM " + this.name_ + " " + $ids$$12_where$$, []);
  return goog.Promise.resolve();
};
lf.backstore.WebSqlTx = function $lf$backstore$WebSqlTx$($db$$, $txType$$, $opt_journal$$) {
  lf.backstore.BaseTx.call(this, $txType$$, $opt_journal$$);
  this.db_ = $db$$;
  this.tables_ = lf.structs.map.create();
  this.commands_ = [];
};
goog.inherits(lf.backstore.WebSqlTx, lf.backstore.BaseTx);
lf.backstore.WebSqlTx.INDEX_MARK = "__d__";
lf.backstore.WebSqlTx.escapeTableName = function $lf$backstore$WebSqlTx$escapeTableName$($tableName$$) {
  return $tableName$$.replace(".", lf.backstore.WebSqlTx.INDEX_MARK).replace("#", "__s__");
};
lf.backstore.WebSqlTx.prototype.getTable = function $lf$backstore$WebSqlTx$$getTable$($tableName$$, $deserializeFn$$) {
  var $table$$ = this.tables_.get($tableName$$) || null;
  goog.isNull($table$$) && ($table$$ = new lf.backstore.WebSqlTable(this, lf.backstore.WebSqlTx.escapeTableName($tableName$$), $deserializeFn$$), this.tables_.set($tableName$$, $table$$));
  return $table$$;
};
lf.backstore.WebSqlTx.prototype.queue = function $lf$backstore$WebSqlTx$$queue$($statement$$, $params$$, $opt_transform$$) {
  var $resolver$$ = goog.Promise.withResolver();
  this.commands_.push({statement:$statement$$, params:$params$$, transform:$opt_transform$$, resolver:$resolver$$});
  return $resolver$$.promise;
};
lf.backstore.WebSqlTx.prototype.commitInternal = function $lf$backstore$WebSqlTx$$commitInternal$() {
  var $lastCommand$$ = null, $onTxError$$ = this.resolver.reject.bind(this.resolver), $onExecError$$ = function($tx$$, $e$$) {
    this.resolver.reject($e$$);
  }.bind(this), $results$$ = [], $callback$$ = function($tx$$, $opt_results$$) {
    if (!goog.isNull($lastCommand$$)) {
      var $command_ret$$ = $opt_results$$;
      goog.isDefAndNotNull($lastCommand$$.transform) && goog.isDefAndNotNull($opt_results$$) && ($command_ret$$ = $lastCommand$$.transform($opt_results$$));
      $results$$.push($command_ret$$);
      $lastCommand$$.resolver.resolve($command_ret$$);
    }
    0 < this.commands_.length ? ($lastCommand$$ = $command_ret$$ = this.commands_.shift(), $tx$$.executeSql($command_ret$$.statement, $command_ret$$.params, $callback$$, $onExecError$$)) : this.resolver.resolve($results$$);
  }.bind(this);
  this.txType == lf.TransactionType.READ_ONLY ? this.db_.readTransaction($callback$$, $onTxError$$) : this.db_.transaction($callback$$, $onTxError$$);
  return this.resolver.promise;
};
lf.backstore.WebSqlTx.prototype.abort = function $lf$backstore$WebSqlTx$$abort$() {
  this.commands_ = [];
};
lf.backstore.WebSqlRawBackStore = function $lf$backstore$WebSqlRawBackStore$($global$$, $oldVersion$$, $db$$) {
  this.db_ = $db$$;
  this.global_ = $global$$;
  this.version_ = $oldVersion$$;
};
goog.exportSymbol("lf.backstore.WebSqlRawBackStore", lf.backstore.WebSqlRawBackStore);
lf.backstore.WebSqlRawBackStore.prototype.getRawDBInstance = function $lf$backstore$WebSqlRawBackStore$$getRawDBInstance$() {
  return this.db_;
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "getRawDBInstance", lf.backstore.WebSqlRawBackStore.prototype.getRawDBInstance);
lf.backstore.WebSqlRawBackStore.prototype.getRawTransaction = function $lf$backstore$WebSqlRawBackStore$$getRawTransaction$() {
  throw new lf.Exception(356);
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "getRawTransaction", lf.backstore.WebSqlRawBackStore.prototype.getRawTransaction);
lf.backstore.WebSqlRawBackStore.prototype.createTx_ = function $lf$backstore$WebSqlRawBackStore$$createTx_$() {
  return new lf.backstore.WebSqlTx(this.db_, lf.TransactionType.READ_WRITE, new lf.cache.Journal(this.global_, lf.structs.set.create()));
};
lf.backstore.WebSqlRawBackStore.prototype.dropTable = function $lf$backstore$WebSqlRawBackStore$$dropTable$($tableName$$) {
  var $tx$$ = this.createTx_();
  $tx$$.queue("DROP TABLE " + $tableName$$, []);
  return $tx$$.commit();
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "dropTable", lf.backstore.WebSqlRawBackStore.prototype.dropTable);
lf.backstore.WebSqlRawBackStore.prototype.dumpTable_ = function $lf$backstore$WebSqlRawBackStore$$dumpTable_$($tableName$$) {
  var $tx$$ = this.createTx_();
  $tx$$.queue("SELECT id, value FROM " + $tableName$$, []);
  return $tx$$.commit().then(function($results$$) {
    for (var $length$$ = $results$$[0].rows.length, $rows$$ = Array($length$$), $i$$ = 0;$i$$ < $length$$;++$i$$) {
      $rows$$[$i$$] = {id:$results$$[0].rows.item($i$$).id, value:JSON.parse($results$$[0].rows.item($i$$).value)};
    }
    return goog.Promise.resolve($rows$$);
  });
};
lf.backstore.WebSqlRawBackStore.prototype.transformColumn_ = function $lf$backstore$WebSqlRawBackStore$$transformColumn_$($tableName$$, $transformer$$) {
  var $tx$$ = this.createTx_(), $sql$$ = "UPDATE " + $tableName$$ + " SET value=? WHERE id=?";
  return this.dumpTable_($tableName$$).then(function($rows$$) {
    $rows$$.forEach(function($newRow$$1_row$$) {
      $newRow$$1_row$$ = $transformer$$($newRow$$1_row$$);
      $tx$$.queue($sql$$, [JSON.stringify($newRow$$1_row$$.value), $newRow$$1_row$$.id]);
    });
    return $tx$$.commit();
  });
};
lf.backstore.WebSqlRawBackStore.prototype.addTableColumn = function $lf$backstore$WebSqlRawBackStore$$addTableColumn$($tableName$$, $columnName$$, $defaultValue$$) {
  var $value$$ = lf.backstore.IndexedDBRawBackStore.convert($defaultValue$$);
  return this.transformColumn_($tableName$$, function($row$$) {
    $row$$.value[$columnName$$] = $value$$;
    return $row$$;
  });
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "addTableColumn", lf.backstore.WebSqlRawBackStore.prototype.addTableColumn);
lf.backstore.WebSqlRawBackStore.prototype.dropTableColumn = function $lf$backstore$WebSqlRawBackStore$$dropTableColumn$($tableName$$, $columnName$$) {
  return this.transformColumn_($tableName$$, function($row$$) {
    delete $row$$.value[$columnName$$];
    return $row$$;
  });
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "dropTableColumn", lf.backstore.WebSqlRawBackStore.prototype.dropTableColumn);
lf.backstore.WebSqlRawBackStore.prototype.renameTableColumn = function $lf$backstore$WebSqlRawBackStore$$renameTableColumn$($tableName$$, $oldColumnName$$, $newColumnName$$) {
  return this.transformColumn_($tableName$$, function($row$$) {
    $row$$.value[$newColumnName$$] = $row$$.value[$oldColumnName$$];
    delete $row$$.value[$oldColumnName$$];
    return $row$$;
  });
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "renameTableColumn", lf.backstore.WebSqlRawBackStore.prototype.renameTableColumn);
lf.backstore.WebSqlRawBackStore.prototype.createRow = function $lf$backstore$WebSqlRawBackStore$$createRow$($payload$$) {
  var $data$$ = {}, $key$$;
  for ($key$$ in $payload$$) {
    $data$$[$key$$] = lf.backstore.IndexedDBRawBackStore.convert($payload$$[$key$$]);
  }
  return lf.Row.create($data$$);
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "createRow", lf.backstore.WebSqlRawBackStore.prototype.createRow);
lf.backstore.WebSqlRawBackStore.prototype.getVersion = function $lf$backstore$WebSqlRawBackStore$$getVersion$() {
  return this.version_;
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "getVersion", lf.backstore.WebSqlRawBackStore.prototype.getVersion);
lf.backstore.WebSqlRawBackStore.queueListTables = function $lf$backstore$WebSqlRawBackStore$queueListTables$($tx$$) {
  $tx$$.queue('SELECT tbl_name FROM sqlite_master WHERE type="table"', [], function($results$$) {
    for (var $tableNames$$ = Array($results$$.rows.length), $i$$ = 0;$i$$ < $tableNames$$.length;++$i$$) {
      $tableNames$$[$i$$] = $results$$.rows.item($i$$).tbl_name;
    }
    return $tableNames$$;
  });
};
lf.backstore.WebSqlRawBackStore.prototype.dump = function $lf$backstore$WebSqlRawBackStore$$dump$() {
  var $resolver$$ = goog.Promise.withResolver(), $tx$$ = this.createTx_();
  lf.backstore.WebSqlRawBackStore.queueListTables($tx$$);
  var $ret$$ = {};
  $tx$$.commit().then(function($promises$$14_results$$) {
    $promises$$14_results$$ = $promises$$14_results$$[0].filter(function($name$$) {
      return "__lf_ver" != $name$$ && "__WebKitDatabaseInfoTable__" != $name$$;
    }).map(function($tableName$$) {
      return this.dumpTable_($tableName$$).then(function($rows$$) {
        $ret$$[$tableName$$] = $rows$$;
      });
    }, this);
    goog.Promise.all($promises$$14_results$$).then(function() {
      $resolver$$.resolve($ret$$);
    });
  }.bind(this));
  return $resolver$$.promise;
};
goog.exportProperty(lf.backstore.WebSqlRawBackStore.prototype, "dump", lf.backstore.WebSqlRawBackStore.prototype.dump);
lf.backstore.WebSql = function $lf$backstore$WebSql$($global$$, $schema$$, $opt_size$$) {
  this.global_ = $global$$;
  this.schema_ = $schema$$;
  this.size_ = $opt_size$$ || 1;
};
lf.backstore.WebSql.prototype.getEmptyJournal_ = function $lf$backstore$WebSql$$getEmptyJournal_$() {
  return new lf.cache.Journal(this.global_, lf.structs.set.create());
};
lf.backstore.WebSql.prototype.init = function $lf$backstore$WebSql$$init$($opt_onUpgrade$$) {
  if (!goog.isDefAndNotNull(window.openDatabase)) {
    throw new lf.Exception(353);
  }
  var $onUpgrade$$ = $opt_onUpgrade$$ || function($rawDb$$) {
    return goog.Promise.resolve();
  };
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $db$$ = window.openDatabase(this.schema_.name(), "", this.schema_.name(), this.size_);
    if (goog.isDefAndNotNull($db$$)) {
      this.db_ = $db$$, this.checkVersion_($onUpgrade$$).then($resolve$$, function($e$$) {
        if ($e$$ instanceof lf.Exception) {
          throw $e$$;
        }
        throw new lf.Exception(354, $e$$.message);
      });
    } else {
      throw new lf.Exception(354);
    }
  }, this);
};
lf.backstore.WebSql.prototype.checkVersion_ = function $lf$backstore$WebSql$$checkVersion_$($onUpgrade$$) {
  var $resolver$$ = goog.Promise.withResolver(), $tx$$ = new lf.backstore.WebSqlTx(this.db_, lf.TransactionType.READ_WRITE, this.getEmptyJournal_());
  $tx$$.queue("CREATE TABLE IF NOT EXISTS __lf_ver(id INTEGER PRIMARY KEY, v INTEGER)", []);
  $tx$$.queue("SELECT v FROM __lf_ver WHERE id = 0", []);
  $tx$$.commit().then(function($results$$) {
    var $version$$ = 0;
    $results$$[1].rows.length && ($version$$ = $results$$[1].rows.item(0).v);
    $version$$ < this.schema_.version() ? this.onUpgrade_($onUpgrade$$, $version$$).then($resolver$$.resolve.bind($resolver$$)) : $version$$ > this.schema_.version() ? $resolver$$.reject(new lf.Exception(108)) : $resolver$$.resolve();
  }.bind(this), $resolver$$.reject.bind($resolver$$));
  return $resolver$$.promise;
};
lf.backstore.WebSql.prototype.initialized = function $lf$backstore$WebSql$$initialized$() {
  return goog.isDefAndNotNull(this.db_);
};
lf.backstore.WebSql.prototype.createTx = function $lf$backstore$WebSql$$createTx$($type$$, $scope$$, $opt_journal$$) {
  if (goog.isDefAndNotNull(this.db_)) {
    return new lf.backstore.WebSqlTx(this.db_, $type$$, $opt_journal$$);
  }
  throw new lf.Exception(2);
};
lf.backstore.WebSql.prototype.close = function $lf$backstore$WebSql$$close$() {
};
lf.backstore.WebSql.prototype.getTableInternal = function $lf$backstore$WebSql$$getTableInternal$($tableName$$) {
  throw new lf.Exception(512);
};
lf.backstore.WebSql.prototype.notSupported_ = function $lf$backstore$WebSql$$notSupported_$() {
  throw new lf.Exception(355);
};
lf.backstore.WebSql.prototype.subscribe = function $lf$backstore$WebSql$$subscribe$($handler$$) {
  this.notSupported_();
};
lf.backstore.WebSql.prototype.unsubscribe = function $lf$backstore$WebSql$$unsubscribe$() {
  this.notSupported_();
};
lf.backstore.WebSql.prototype.notify = function $lf$backstore$WebSql$$notify$($changes$$) {
  this.notSupported_();
};
lf.backstore.WebSql.prototype.onUpgrade_ = function $lf$backstore$WebSql$$onUpgrade_$($onUpgrade$$, $oldVersion$$) {
  var $resolver$$ = goog.Promise.withResolver();
  this.preUpgrade_().then(function() {
    var $rawDb$$ = new lf.backstore.WebSqlRawBackStore(this.global_, $oldVersion$$, this.db_);
    $onUpgrade$$($rawDb$$).then(function() {
      return this.scanRowId_();
    }.bind(this)).then($resolver$$.resolve.bind($resolver$$));
  }.bind(this), $resolver$$.reject.bind($resolver$$));
  return $resolver$$.promise;
};
lf.backstore.WebSql.escape_ = function $lf$backstore$WebSql$escape_$($tableName$$) {
  return '"' + $tableName$$ + '"';
};
lf.backstore.WebSql.prototype.preUpgrade_ = function $lf$backstore$WebSql$$preUpgrade_$() {
  var $tables$$ = this.schema_.tables(), $tx$$ = new lf.backstore.WebSqlTx(this.db_, lf.TransactionType.READ_WRITE, this.getEmptyJournal_()), $tx2$$ = new lf.backstore.WebSqlTx(this.db_, lf.TransactionType.READ_WRITE, this.getEmptyJournal_());
  $tx$$.queue("INSERT OR REPLACE INTO __lf_ver VALUES (0, ?)", [this.schema_.version()]);
  lf.backstore.WebSqlRawBackStore.queueListTables($tx$$);
  return $tx$$.commit().then(function($results$$) {
    var $existingTables$$ = $results$$[1];
    $existingTables$$.filter(function($name$$) {
      return -1 != $name$$.indexOf(lf.backstore.WebSqlTx.INDEX_MARK);
    }).forEach(function($name$$) {
      $tx2$$.queue("DROP TABLE " + lf.backstore.WebSql.escape_($name$$), []);
    });
    var $newTables$$ = [], $persistentIndices$$ = [], $rowIdIndices$$ = [];
    $tables$$.map(function($rowIdTableName_table$$) {
      -1 == $existingTables$$.indexOf($rowIdTableName_table$$.getName()) && $newTables$$.push($rowIdTableName_table$$.getName());
      $rowIdTableName_table$$.persistentIndex && ($rowIdTableName_table$$.getIndices().forEach(function($idxTableName_index$$) {
        $idxTableName_index$$ = lf.backstore.WebSqlTx.escapeTableName($idxTableName_index$$.getNormalizedName());
        $newTables$$.push($idxTableName_index$$);
        $persistentIndices$$.push($idxTableName_index$$);
      }), $rowIdTableName_table$$ = lf.backstore.WebSqlTx.escapeTableName($rowIdTableName_table$$.getRowIdIndexName()), $newTables$$.push($rowIdTableName_table$$), $rowIdIndices$$.push($rowIdTableName_table$$));
    });
    $newTables$$.forEach(function($name$$) {
      $tx2$$.queue("CREATE TABLE " + lf.backstore.WebSql.escape_($name$$) + "(id INTEGER PRIMARY KEY, value TEXT)", []);
    });
    return $tx2$$.commit();
  });
};
lf.backstore.WebSql.prototype.scanRowId_ = function $lf$backstore$WebSql$$scanRowId_$() {
  var $maxRowId$$ = 0, $resolver$$ = goog.Promise.withResolver(), $selectIdFromTable$$ = function($tableName$$) {
    var $tx$$ = new lf.backstore.WebSqlTx(this.db_, lf.TransactionType.READ_ONLY);
    $tx$$.queue("SELECT MAX(id) FROM " + lf.backstore.WebSql.escape_($tableName$$), []);
    return $tx$$.commit().then(function($id$$31_results$$) {
      $id$$31_results$$ = $id$$31_results$$[0].rows.item(0)[0];
      $maxRowId$$ = Math.max($id$$31_results$$, $maxRowId$$);
    });
  }.bind(this), $promises$$ = this.schema_.tables().map(function($table$$) {
    return $selectIdFromTable$$($table$$.getName());
  });
  goog.Promise.all($promises$$).then(function() {
    $resolver$$.resolve($maxRowId$$);
  }, function($e$$) {
    $resolver$$.reject($e$$);
  });
  return $resolver$$.promise;
};
lf.DiffCalculator = function $lf$DiffCalculator$($query$$, $observableResults$$) {
  this.evalRegistry_ = lf.eval.Registry.get();
  this.query_ = $query$$;
  this.observableResults_ = $observableResults$$;
  this.columns_ = this.detectColumns_();
};
lf.DiffCalculator.prototype.detectColumns_ = function $lf$DiffCalculator$$detectColumns_$() {
  if (0 < this.query_.columns.length) {
    return this.query_.columns;
  }
  var $columns$$ = [];
  this.query_.from.forEach(function($table$$) {
    $table$$.getColumns().forEach(function($column$$) {
      $columns$$.push($column$$);
    });
  });
  return $columns$$;
};
lf.DiffCalculator.prototype.comparator_ = function $lf$DiffCalculator$$comparator_$($left$$, $right$$) {
  return this.columns_.every(function($column$$) {
    return this.evalRegistry_.getEvaluator($column$$.getType(), lf.eval.Type.EQ)($left$$.getField($column$$), $right$$.getField($column$$));
  }, this);
};
lf.DiffCalculator.prototype.applyDiff = function $lf$DiffCalculator$$applyDiff$($oldResults$$, $newResults$$) {
  for (var $oldEntries$$ = goog.isNull($oldResults$$) ? [] : $oldResults$$.entries, $longestCommonSubsequenceLeft_longestCommonSubsequenceRight$$ = goog.math.longestCommonSubsequence($oldEntries$$, $newResults$$.entries, this.comparator_.bind(this), function($indexLeft$$, $indexRight$$) {
    return $oldEntries$$[$indexLeft$$];
  }), $changeRecords$$ = [], $commonIndex$$ = 0, $i$$ = 0;$i$$ < $oldEntries$$.length;$i$$++) {
    var $changeRecord_entry$$ = $oldEntries$$[$i$$];
    $longestCommonSubsequenceLeft_longestCommonSubsequenceRight$$[$commonIndex$$] == $changeRecord_entry$$ ? $commonIndex$$++ : ($changeRecord_entry$$ = this.observableResults_.splice($commonIndex$$, 1), $changeRecord_entry$$ = lf.DiffCalculator.createChangeRecord_($i$$, $changeRecord_entry$$, 0, this.observableResults_), $changeRecords$$.push($changeRecord_entry$$));
  }
  $longestCommonSubsequenceLeft_longestCommonSubsequenceRight$$ = goog.math.longestCommonSubsequence($oldEntries$$, $newResults$$.entries, this.comparator_.bind(this), function($indexLeft$$, $indexRight$$) {
    return $newResults$$.entries[$indexRight$$];
  });
  for ($i$$ = $commonIndex$$ = 0;$i$$ < $newResults$$.entries.length;$i$$++) {
    $changeRecord_entry$$ = $newResults$$.entries[$i$$], $longestCommonSubsequenceLeft_longestCommonSubsequenceRight$$[$commonIndex$$] == $changeRecord_entry$$ ? $commonIndex$$++ : (this.observableResults_.splice($i$$, 0, $changeRecord_entry$$.row.payload()), $changeRecord_entry$$ = lf.DiffCalculator.createChangeRecord_($i$$, [], 1, this.observableResults_), $changeRecords$$.push($changeRecord_entry$$));
  }
  return $changeRecords$$;
};
lf.DiffCalculator.createChangeRecord_ = function $lf$DiffCalculator$createChangeRecord_$($index$$, $removed$$, $addedCount$$, $object$$) {
  return {addedCount:$addedCount$$, index:$index$$, object:$object$$, removed:$removed$$, type:"splice"};
};
lf.ObserverRegistry = function $lf$ObserverRegistry$() {
  this.entries_ = lf.structs.map.create();
};
lf.ObserverRegistry.prototype.getQueryId_ = function $lf$ObserverRegistry$$getQueryId_$($query$$) {
  return goog.getUid($query$$).toString();
};
lf.ObserverRegistry.prototype.addObserver = function $lf$ObserverRegistry$$addObserver$($rawBuilder$$, $callback$$) {
  var $queryId$$ = this.getQueryId_($rawBuilder$$.getObservableQuery()), $entry$$ = this.entries_.get($queryId$$) || null;
  goog.isNull($entry$$) && ($entry$$ = new lf.ObserverRegistry.Entry_($rawBuilder$$), this.entries_.set($queryId$$, $entry$$));
  $entry$$.addObserver($callback$$);
};
lf.ObserverRegistry.prototype.removeObserver = function $lf$ObserverRegistry$$removeObserver$($builder$$, $callback$$) {
  var $query$$6_queryId$$ = $builder$$.getObservableQuery(), $query$$6_queryId$$ = this.getQueryId_($query$$6_queryId$$), $entry$$ = this.entries_.get($query$$6_queryId$$) || null;
  goog.asserts.assert(goog.isDefAndNotNull($entry$$), "Attempted to unobserve a query that was not observed.");
  var $didRemove$$ = $entry$$.removeObserver($callback$$);
  goog.asserts.assert($didRemove$$, "removeObserver: Inconsistent state detected.");
  $entry$$.hasObservers() || this.entries_.delete($query$$6_queryId$$);
};
lf.ObserverRegistry.prototype.getTaskItemsForTables = function $lf$ObserverRegistry$$getTaskItemsForTables$($tables$$) {
  var $tableSet$$ = lf.structs.set.create();
  $tables$$.forEach(function($table$$) {
    $tableSet$$.add($table$$.getName());
  });
  var $items$$ = [];
  this.entries_.forEach(function($entry$$, $key$$) {
    var $item$$ = $entry$$.getTaskItem();
    $item$$.context.from.some(function($table$$) {
      return $tableSet$$.has($table$$.getName());
    }) && $items$$.push($item$$);
  });
  return $items$$;
};
lf.ObserverRegistry.prototype.updateResultsForQuery = function $lf$ObserverRegistry$$updateResultsForQuery$($query$$, $results$$) {
  var $entry$$18_queryId$$ = this.getQueryId_(goog.isDefAndNotNull($query$$.clonedFrom) ? $query$$.clonedFrom : $query$$), $entry$$18_queryId$$ = this.entries_.get($entry$$18_queryId$$) || null;
  return goog.isNull($entry$$18_queryId$$) ? !1 : ($entry$$18_queryId$$.updateResults($results$$), !0);
};
lf.ObserverRegistry.Entry_ = function $lf$ObserverRegistry$Entry_$($builder$$) {
  this.builder_ = $builder$$;
  this.observers_ = lf.structs.set.create();
  this.observable_ = [];
  this.lastResults_ = null;
  this.diffCalculator_ = new lf.DiffCalculator($builder$$.getObservableQuery(), this.observable_);
};
lf.ObserverRegistry.Entry_.prototype.addObserver = function $lf$ObserverRegistry$Entry_$$addObserver$($callback$$) {
  this.observers_.has($callback$$) ? goog.asserts.fail("Attempted to register observer twice.") : this.observers_.add($callback$$);
};
lf.ObserverRegistry.Entry_.prototype.removeObserver = function $lf$ObserverRegistry$Entry_$$removeObserver$($callback$$) {
  return this.observers_.delete($callback$$);
};
lf.ObserverRegistry.Entry_.prototype.getTaskItem = function $lf$ObserverRegistry$Entry_$$getTaskItem$() {
  return this.builder_.getObservableTaskItem();
};
lf.ObserverRegistry.Entry_.prototype.hasObservers = function $lf$ObserverRegistry$Entry_$$hasObservers$() {
  return 0 < this.observers_.size;
};
lf.ObserverRegistry.Entry_.prototype.updateResults = function $lf$ObserverRegistry$Entry_$$updateResults$($newResults$$) {
  var $changeRecords$$ = this.diffCalculator_.applyDiff(this.lastResults_, $newResults$$);
  this.lastResults_ = $newResults$$;
  0 < $changeRecords$$.length && this.observers_.forEach(function($observerFn$$) {
    $observerFn$$($changeRecords$$);
  });
};
lf.cache.Cache = function $lf$cache$Cache$() {
};
lf.cache.DefaultCache = function $lf$cache$DefaultCache$($dbSchema$$) {
  this.map_ = lf.structs.map.create();
  this.tableRows_ = lf.structs.map.create();
  $dbSchema$$.tables().forEach(function($table$$) {
    this.tableRows_.set($table$$.getName(), lf.structs.set.create());
  }, this);
};
lf.cache.DefaultCache.prototype.set = function $lf$cache$DefaultCache$$set$($tableName$$, $row$$) {
  this.map_.set($row$$.id(), $row$$);
  this.tableRows_.get($tableName$$).add($row$$.id());
};
lf.cache.DefaultCache.prototype.setMany = function $lf$cache$DefaultCache$$setMany$($tableName$$, $rows$$) {
  var $tableSet$$ = this.tableRows_.get($tableName$$);
  $rows$$.forEach(function($row$$) {
    this.map_.set($row$$.id(), $row$$);
    $tableSet$$.add($row$$.id());
  }, this);
};
lf.cache.DefaultCache.prototype.get = function $lf$cache$DefaultCache$$get$($id$$) {
  return this.map_.get($id$$) || null;
};
lf.cache.DefaultCache.prototype.getMany = function $lf$cache$DefaultCache$$getMany$($ids$$) {
  return $ids$$.map(function($id$$) {
    return this.get($id$$);
  }, this);
};
lf.cache.DefaultCache.prototype.getRange = function $lf$cache$DefaultCache$$getRange$($tableName$$59_tableSet$$, $fromId_i$$, $toId_value$$) {
  var $data$$ = [], $min$$ = Math.min($fromId_i$$, $toId_value$$), $max$$ = Math.max($fromId_i$$, $toId_value$$);
  $tableName$$59_tableSet$$ = this.tableRows_.get($tableName$$59_tableSet$$);
  if ($tableName$$59_tableSet$$.size < $max$$ - $min$$) {
    $tableName$$59_tableSet$$.forEach(function($key$$89_value$$) {
      $key$$89_value$$ >= $min$$ && $key$$89_value$$ <= $max$$ && ($key$$89_value$$ = this.map_.get($key$$89_value$$), goog.asserts.assert(goog.isDefAndNotNull($key$$89_value$$), "Inconsistent cache"), $data$$.push($key$$89_value$$));
    }, this);
  } else {
    for ($fromId_i$$ = $min$$;$fromId_i$$ <= $max$$;++$fromId_i$$) {
      $tableName$$59_tableSet$$.has($fromId_i$$) && ($toId_value$$ = this.map_.get($fromId_i$$), goog.asserts.assert(goog.isDefAndNotNull($toId_value$$), "Inconsistent cache"), $data$$.push($toId_value$$));
    }
  }
  return $data$$;
};
lf.cache.DefaultCache.prototype.remove = function $lf$cache$DefaultCache$$remove$($tableName$$, $id$$) {
  this.map_.delete($id$$);
  this.tableRows_.get($tableName$$).delete($id$$);
};
lf.cache.DefaultCache.prototype.removeMany = function $lf$cache$DefaultCache$$removeMany$($tableName$$, $ids$$) {
  var $tableSet$$ = this.tableRows_.get($tableName$$);
  $ids$$.forEach(function($id$$) {
    this.map_.delete($id$$);
    $tableSet$$.delete($id$$);
  }, this);
};
lf.cache.DefaultCache.prototype.getCount = function $lf$cache$DefaultCache$$getCount$($opt_tableName$$) {
  return goog.isDefAndNotNull($opt_tableName$$) ? this.tableRows_.get($opt_tableName$$).size : this.map_.size;
};
lf.cache.DefaultCache.prototype.clear = function $lf$cache$DefaultCache$$clear$() {
  this.map_.clear();
  this.tableRows_.clear();
};
lf.index.hashCode = function $lf$index$hashCode$($value$$) {
  for (var $hash$$ = 0, $i$$ = 0;$i$$ < $value$$.length;++$i$$) {
    $hash$$ = ($hash$$ << 5) - $hash$$ + $value$$.charCodeAt($i$$), $hash$$ &= $hash$$;
  }
  return $hash$$;
};
lf.index.hashArray = function $lf$index$hashArray$($values$$) {
  return $values$$.map(function($value$$) {
    return goog.isDefAndNotNull($value$$) ? lf.index.hashCode($value$$.toString()).toString(32) : "";
  }).join("_");
};
lf.index.slice = function $lf$index$slice$($array$$, $opt_reverseOrder$$, $limit$$2_opt_limit$$, $opt_skip_skip$$) {
  $array$$ = $opt_reverseOrder$$ ? $array$$.reverse() : $array$$;
  if (!goog.isDefAndNotNull($limit$$2_opt_limit$$) && !goog.isDefAndNotNull($opt_skip_skip$$)) {
    return $array$$;
  }
  $limit$$2_opt_limit$$ = Math.min(goog.isDef($limit$$2_opt_limit$$) ? $limit$$2_opt_limit$$ : $array$$.length, $array$$.length);
  if (0 == $limit$$2_opt_limit$$) {
    return [];
  }
  $opt_skip_skip$$ = Math.min($opt_skip_skip$$ || 0, $array$$.length);
  return $array$$.slice($opt_skip_skip$$, $opt_skip_skip$$ + $limit$$2_opt_limit$$);
};
lf.index.Stats = function $lf$index$Stats$() {
  this.totalRows = 0;
};
lf.index.Stats.prototype.add = function $lf$index$Stats$$add$($key$$, $rowCount$$) {
  this.totalRows += $rowCount$$;
};
lf.index.Stats.prototype.remove = function $lf$index$Stats$$remove$($key$$, $removedCount$$) {
  this.totalRows -= $removedCount$$;
};
lf.index.Stats.prototype.clear = function $lf$index$Stats$$clear$() {
  this.totalRows = 0;
};
lf.index.Stats.prototype.updateFromList = function $lf$index$Stats$$updateFromList$($statsList$$) {
  this.clear();
  $statsList$$.forEach(function($stats$$) {
    this.totalRows += $stats$$.totalRows;
  }, this);
};
lf.structs.array = {};
lf.structs.array.binarySearch_ = function $lf$structs$array$binarySearch_$($arr$$, $value$$, $comparator_opt_comparator$$) {
  var $left$$ = 0, $right$$ = $arr$$.length;
  for ($comparator_opt_comparator$$ = $comparator_opt_comparator$$ || lf.structs.array.defaultComparator_;$left$$ < $right$$;) {
    var $middle$$ = $left$$ + $right$$ >> 1;
    0 > $comparator_opt_comparator$$($arr$$[$middle$$], $value$$) ? $left$$ = $middle$$ + 1 : $right$$ = $middle$$;
  }
  return $left$$ == $right$$ && $arr$$[$left$$] == $value$$ ? $left$$ : ~$left$$;
};
lf.structs.array.defaultComparator_ = function $lf$structs$array$defaultComparator_$($lhs$$, $rhs$$) {
  return $lhs$$ - $rhs$$;
};
lf.structs.array.binaryInsert = function $lf$structs$array$binaryInsert$($arr$$, $value$$, $index$$85_opt_comparator$$) {
  $index$$85_opt_comparator$$ = lf.structs.array.binarySearch_($arr$$, $value$$, $index$$85_opt_comparator$$);
  return 0 > $index$$85_opt_comparator$$ ? ($arr$$.splice(-($index$$85_opt_comparator$$ + 1), 0, $value$$), !0) : !1;
};
lf.structs.array.binaryRemove = function $lf$structs$array$binaryRemove$($arr$$, $index$$86_value$$, $opt_comparator$$) {
  $index$$86_value$$ = lf.structs.array.binarySearch_($arr$$, $index$$86_value$$, $opt_comparator$$);
  if (0 > $index$$86_value$$) {
    return !1;
  }
  $arr$$.splice($index$$86_value$$, 1);
  return !0;
};
lf.index.BTree = function $lf$index$BTree$($name$$, $comparator$$, $uniqueKeyOnly$$, $opt_data$$) {
  this.name_ = $name$$;
  this.comparator_ = $comparator$$;
  this.uniqueKeyOnly_ = $uniqueKeyOnly$$;
  this.stats_ = new lf.index.Stats;
  $opt_data$$ ? this.root_ = lf.index.BTreeNode_.fromData(this, $opt_data$$) : this.clear();
};
lf.index.BTree.EMPTY = [];
lf.index.BTree.prototype.getName = function $lf$index$BTree$$getName$() {
  return this.name_;
};
lf.index.BTree.prototype.toString = function $lf$index$BTree$$toString$() {
  return this.root_.toString();
};
lf.index.BTree.prototype.add = function $lf$index$BTree$$add$($key$$, $value$$) {
  this.root_ = this.root_.insert($key$$, $value$$);
};
lf.index.BTree.prototype.set = function $lf$index$BTree$$set$($key$$, $value$$) {
  this.root_ = this.root_.insert($key$$, $value$$, !0);
};
lf.index.BTree.prototype.remove = function $lf$index$BTree$$remove$($key$$, $opt_rowId$$) {
  this.root_ = this.root_.remove($key$$, $opt_rowId$$);
};
lf.index.BTree.prototype.get = function $lf$index$BTree$$get$($key$$) {
  return this.root_.get($key$$);
};
lf.index.BTree.prototype.cost = function $lf$index$BTree$$cost$($opt_keyRange$$) {
  if (!goog.isDefAndNotNull($opt_keyRange$$)) {
    return this.stats().totalRows;
  }
  if ($opt_keyRange$$ instanceof lf.index.SingleKeyRange) {
    if ($opt_keyRange$$.isAll()) {
      return this.stats().totalRows;
    }
    if ($opt_keyRange$$.isOnly()) {
      return this.get($opt_keyRange$$.from).length;
    }
  }
  return this.getRange([$opt_keyRange$$]).length;
};
lf.index.BTree.prototype.stats = function $lf$index$BTree$$stats$() {
  return this.stats_;
};
lf.index.BTree.prototype.getAll_ = function $lf$index$BTree$$getAll_$($maxCount$$, $reverse$$, $limit$$3_results$$, $skip$$) {
  $limit$$3_results$$ = Array($maxCount$$);
  this.root_.fill({offset:$reverse$$ ? this.stats_.totalRows - $maxCount$$ - $skip$$ : $skip$$, count:$maxCount$$, startIndex:0}, $limit$$3_results$$);
  return $reverse$$ ? $limit$$3_results$$.reverse() : $limit$$3_results$$;
};
lf.index.BTree.prototype.getRange = function $lf$index$BTree$$getRange$($opt_keyRanges_sortedKeyRanges$$, $opt_reverseOrder$$1_reverse$$, $limit$$4_opt_limit$$, $opt_skip$$1_skip$$) {
  var $leftMostKey$$ = this.root_.getLeftMostNode().keys_[0];
  if (!goog.isDef($leftMostKey$$) || 0 == $limit$$4_opt_limit$$) {
    return lf.index.BTree.EMPTY;
  }
  $opt_reverseOrder$$1_reverse$$ = $opt_reverseOrder$$1_reverse$$ || !1;
  $limit$$4_opt_limit$$ = goog.isDefAndNotNull($limit$$4_opt_limit$$) ? Math.min($limit$$4_opt_limit$$, this.stats_.totalRows) : this.stats_.totalRows;
  $opt_skip$$1_skip$$ = $opt_skip$$1_skip$$ || 0;
  var $maxCount$$ = Math.min(Math.max(this.stats_.totalRows - $opt_skip$$1_skip$$, 0), $limit$$4_opt_limit$$);
  if (0 == $maxCount$$) {
    return lf.index.BTree.EMPTY;
  }
  if (!goog.isDef($opt_keyRanges_sortedKeyRanges$$) || 1 == $opt_keyRanges_sortedKeyRanges$$.length && $opt_keyRanges_sortedKeyRanges$$[0] instanceof lf.index.SingleKeyRange && $opt_keyRanges_sortedKeyRanges$$[0].isAll()) {
    return this.getAll_($maxCount$$, $opt_reverseOrder$$1_reverse$$, $limit$$4_opt_limit$$, $opt_skip$$1_skip$$);
  }
  $opt_keyRanges_sortedKeyRanges$$ = this.comparator_.sortKeyRanges($opt_keyRanges_sortedKeyRanges$$);
  var $results$$ = Array($opt_reverseOrder$$1_reverse$$ ? this.stats_.totalRows : $maxCount$$), $params$$ = {count:0, limit:$results$$.length, reverse:$opt_reverseOrder$$1_reverse$$, skip:$opt_skip$$1_skip$$}, $useFilter$$ = 1 < this.comparator().keyDimensions();
  $opt_keyRanges_sortedKeyRanges$$.forEach(function($range$$) {
    for (var $key$$96_keys$$10_start$$ = this.comparator_.rangeToKeys($range$$), $key$$96_keys$$10_start$$ = this.comparator_.isLeftOpen($range$$) ? $leftMostKey$$ : $key$$96_keys$$10_start$$[0], $key$$96_keys$$10_start$$ = this.root_.getContainingLeaf($key$$96_keys$$10_start$$), $strikeCount$$ = 0;goog.isDefAndNotNull($key$$96_keys$$10_start$$) && $params$$.count < $params$$.limit;) {
      $useFilter$$ ? $key$$96_keys$$10_start$$.getRangeWithFilter($range$$, $params$$, $results$$) : $key$$96_keys$$10_start$$.getRange($range$$, $params$$, $results$$), 0 != $params$$.skip || $key$$96_keys$$10_start$$.isFirstKeyInRange($range$$) ? $strikeCount$$ = 0 : $strikeCount$$++, $key$$96_keys$$10_start$$ = 2 == $strikeCount$$ ? null : $key$$96_keys$$10_start$$.next();
    }
  }, this);
  $results$$.length > $params$$.count && $results$$.splice($params$$.count, $results$$.length - $params$$.count);
  return $opt_reverseOrder$$1_reverse$$ ? lf.index.slice($results$$, $opt_reverseOrder$$1_reverse$$, $limit$$4_opt_limit$$, $opt_skip$$1_skip$$) : $results$$;
};
lf.index.BTree.prototype.clear = function $lf$index$BTree$$clear$() {
  this.root_ = lf.index.BTreeNode_.create(this);
  this.stats_.clear();
};
lf.index.BTree.prototype.containsKey = function $lf$index$BTree$$containsKey$($key$$) {
  return this.root_.containsKey($key$$);
};
lf.index.BTree.prototype.min = function $lf$index$BTree$$min$() {
  return this.minMax_(this.comparator_.min.bind(this.comparator_));
};
lf.index.BTree.prototype.max = function $lf$index$BTree$$max$() {
  return this.minMax_(this.comparator_.max.bind(this.comparator_));
};
lf.index.BTree.prototype.checkNullKey_ = function $lf$index$BTree$$checkNullKey_$($node$$, $index$$) {
  if (!this.comparator_.comparable($node$$.keys_[$index$$])) {
    if (1 < $node$$.keys_[$index$$].length) {
      if (goog.isNull($node$$.keys_[$index$$][0])) {
        return null;
      }
    } else {
      return null;
    }
  }
  return [$node$$.keys_[$index$$], this.uniqueKeyOnly_ ? [$node$$.values_[$index$$]] : $node$$.values_[$index$$]];
};
lf.index.BTree.prototype.findLeftMost_ = function $lf$index$BTree$$findLeftMost_$() {
  var $node$$ = this.root_.getLeftMostNode(), $index$$ = 0;
  do {
    if ($index$$ >= $node$$.keys_.length) {
      $node$$ = $node$$.next_, $index$$ = 0;
    } else {
      var $results$$ = this.checkNullKey_($node$$, $index$$);
      if (!goog.isNull($results$$)) {
        return $results$$;
      }
      $index$$++;
    }
  } while (!goog.isNull($node$$));
  return null;
};
lf.index.BTree.prototype.findRightMost_ = function $lf$index$BTree$$findRightMost_$() {
  var $node$$ = this.root_.getRightMostNode(), $index$$ = $node$$.keys_.length - 1;
  do {
    if (0 > $index$$) {
      $node$$ = $node$$.prev_, $index$$ = 0;
    } else {
      var $results$$ = this.checkNullKey_($node$$, $index$$);
      if (!goog.isNull($results$$)) {
        return $results$$;
      }
      $index$$--;
    }
  } while (!goog.isNull($node$$));
  return null;
};
lf.index.BTree.prototype.minMax_ = function $lf$index$BTree$$minMax_$($compareFn$$) {
  var $leftMost$$ = this.findLeftMost_(), $rightMost$$ = this.findRightMost_();
  return goog.isNull($leftMost$$) || goog.isNull($rightMost$$) ? null : $compareFn$$($leftMost$$[0], $rightMost$$[0]) == lf.index.Favor.LHS ? $leftMost$$ : $rightMost$$;
};
lf.index.BTree.prototype.isUniqueKey = function $lf$index$BTree$$isUniqueKey$() {
  return this.uniqueKeyOnly_;
};
lf.index.BTree.prototype.comparator = function $lf$index$BTree$$comparator$() {
  return this.comparator_;
};
lf.index.BTree.prototype.eq = function $lf$index$BTree$$eq$($lhs$$, $rhs$$) {
  return goog.isDefAndNotNull($lhs$$) ? this.comparator_.compare($lhs$$, $rhs$$) == lf.index.Favor.TIE : !1;
};
lf.index.BTree.prototype.serialize = function $lf$index$BTree$$serialize$() {
  var $start$$ = this.root_.getLeftMostNode();
  return lf.index.BTreeNode_.serialize($start$$);
};
lf.index.BTree.deserialize = function $lf$index$BTree$deserialize$($comparator$$, $name$$, $uniqueKeyOnly$$, $newRoot_rows$$) {
  $comparator$$ = new lf.index.BTree($name$$, $comparator$$, $uniqueKeyOnly$$);
  $newRoot_rows$$ = lf.index.BTreeNode_.deserialize($newRoot_rows$$, $comparator$$);
  $comparator$$.root_ = $newRoot_rows$$;
  return $comparator$$;
};
lf.index.BTreeNode_ = function $lf$index$BTreeNode_$($id$$, $tree$$) {
  this.id_ = $id$$;
  this.tree_ = $tree$$;
  this.height_ = 0;
  this.next_ = this.prev_ = this.parent_ = null;
  this.keys_ = [];
  this.values_ = [];
  this.children_ = [];
  this.getContainingLeaf = 1 == $tree$$.comparator().keyDimensions() ? this.getContainingLeaf_ : this.getContainingLeafMultiKey_;
};
lf.index.BTreeNode_.MAX_COUNT_ = 512;
lf.index.BTreeNode_.MAX_KEY_LEN_ = lf.index.BTreeNode_.MAX_COUNT_ - 1;
lf.index.BTreeNode_.MIN_KEY_LEN_ = lf.index.BTreeNode_.MAX_COUNT_ >> 1;
lf.index.BTreeNode_.create = function $lf$index$BTreeNode_$create$($tree$$) {
  return new lf.index.BTreeNode_(lf.Row.getNextId(), $tree$$);
};
lf.index.BTreeNode_.prototype.isLeaf_ = function $lf$index$BTreeNode_$$isLeaf_$() {
  return 0 == this.height_;
};
lf.index.BTreeNode_.prototype.isRoot_ = function $lf$index$BTreeNode_$$isRoot_$() {
  return goog.isNull(this.parent_);
};
lf.index.BTreeNode_.prototype.next = function $lf$index$BTreeNode_$$next$() {
  return this.next_;
};
lf.index.BTreeNode_.dumpLevel_ = function $lf$index$BTreeNode_$dumpLevel_$($next_node$$) {
  var $key$$ = $next_node$$.id_ + "[" + $next_node$$.keys_.join("|") + "]", $children$$ = $next_node$$.children_.map(function($n$$) {
    return $n$$.id_;
  }).join("|"), $values$$ = $next_node$$.values_.join("/"), $getNodeId$$ = function $$getNodeId$$$($node$$) {
    return goog.isDefAndNotNull($node$$) ? $node$$.id_.toString() : "_";
  }, $contents$$ = $getNodeId$$($next_node$$.prev_) + "{", $contents$$ = $next_node$$.isLeaf_() ? $contents$$ + $values$$ : $contents$$ + $children$$, $contents$$ = $contents$$ + "}" + $getNodeId$$($next_node$$.parent_);
  $next_node$$.next_ && ($next_node$$ = lf.index.BTreeNode_.dumpLevel_($next_node$$.next_), $key$$ = $key$$ + "  " + $next_node$$[0], $contents$$ = $contents$$ + "  " + $next_node$$[1]);
  return [$key$$, $contents$$];
};
lf.index.BTreeNode_.prototype.toString = function $lf$index$BTreeNode_$$toString$() {
  var $result$$ = "", $level$$ = lf.index.BTreeNode_.dumpLevel_(this), $result$$ = $result$$ + ($level$$[0] + "\n" + $level$$[1] + "\n");
  this.children_.length && ($result$$ += this.children_[0].toString());
  return $result$$;
};
lf.index.BTreeNode_.prototype.getLeftMostNode = function $lf$index$BTreeNode_$$getLeftMostNode$() {
  return this.isLeaf_() ? this : this.children_[0].getLeftMostNode();
};
lf.index.BTreeNode_.prototype.getRightMostNode = function $lf$index$BTreeNode_$$getRightMostNode$() {
  return this.isLeaf_() ? this : this.children_[this.children_.length - 1].getRightMostNode();
};
lf.index.BTreeNode_.associate_ = function $lf$index$BTreeNode_$associate_$($left$$, $right$$) {
  $right$$ && ($right$$.prev_ = $left$$);
  $left$$ && ($left$$.next_ = $right$$);
};
lf.index.BTreeNode_.calcNodeLen_ = function $lf$index$BTreeNode_$calcNodeLen_$($remaining$$) {
  var $maxLen$$ = lf.index.BTreeNode_.MAX_KEY_LEN_, $minLen$$ = lf.index.BTreeNode_.MIN_KEY_LEN_ + 1;
  return $remaining$$ >= $maxLen$$ + $minLen$$ ? $maxLen$$ : $remaining$$ >= $minLen$$ && $remaining$$ <= $maxLen$$ ? $remaining$$ : $minLen$$;
};
lf.index.BTreeNode_.createLeaves_ = function $lf$index$BTreeNode_$createLeaves_$($tree$$, $data$$) {
  for (var $remaining$$ = $data$$.length, $dataIndex$$ = 0, $curNode$$ = lf.index.BTreeNode_.create($tree$$), $node$$ = $curNode$$;0 < $remaining$$;) {
    var $newNode$$ = lf.index.BTreeNode_.calcNodeLen_($remaining$$), $target$$ = $data$$.slice($dataIndex$$, $dataIndex$$ + $newNode$$);
    $curNode$$.keys_ = $target$$.map(function($e$$) {
      return $e$$.key;
    });
    $curNode$$.values_ = $target$$.map(function($e$$) {
      return $e$$.value;
    });
    $dataIndex$$ += $newNode$$;
    $remaining$$ -= $newNode$$;
    0 < $remaining$$ && ($newNode$$ = lf.index.BTreeNode_.create($curNode$$.tree_), lf.index.BTreeNode_.associate_($curNode$$, $newNode$$), $curNode$$ = $newNode$$);
  }
  return $node$$;
};
lf.index.BTreeNode_.createParent_ = function $lf$index$BTreeNode_$createParent_$($nodes$$) {
  var $i$$109_node$$ = $nodes$$[0], $root$$ = lf.index.BTreeNode_.create($i$$109_node$$.tree_);
  $root$$.height_ = $i$$109_node$$.height_ + 1;
  $root$$.children_ = $nodes$$;
  for ($i$$109_node$$ = 0;$i$$109_node$$ < $nodes$$.length;++$i$$109_node$$) {
    $nodes$$[$i$$109_node$$].parent_ = $root$$, 0 < $i$$109_node$$ && $root$$.keys_.push($nodes$$[$i$$109_node$$].keys_[0]);
  }
  return $root$$;
};
lf.index.BTreeNode_.createInternals_ = function $lf$index$BTreeNode_$createInternals_$($node$$13_nodeLen$$) {
  var $curNode$$1_root$$ = $node$$13_nodeLen$$, $data$$ = [];
  do {
    $data$$.push($curNode$$1_root$$), $curNode$$1_root$$ = $curNode$$1_root$$.next_;
  } while ($curNode$$1_root$$);
  if ($data$$.length <= lf.index.BTreeNode_.MAX_KEY_LEN_ + 1) {
    $curNode$$1_root$$ = lf.index.BTreeNode_.createParent_($data$$);
  } else {
    var $remaining$$ = $data$$.length, $dataIndex$$ = 0, $curNode$$1_root$$ = lf.index.BTreeNode_.create($node$$13_nodeLen$$.tree_);
    for ($curNode$$1_root$$.height_ = $node$$13_nodeLen$$.height_ + 2;0 < $remaining$$;) {
      $node$$13_nodeLen$$ = lf.index.BTreeNode_.calcNodeLen_($remaining$$);
      var $target$$ = $data$$.slice($dataIndex$$, $dataIndex$$ + $node$$13_nodeLen$$), $newNode$$ = lf.index.BTreeNode_.createParent_($target$$);
      $newNode$$.parent_ = $curNode$$1_root$$;
      $curNode$$1_root$$.children_.length && ($curNode$$1_root$$.keys_.push($target$$[0].keys_[0]), lf.index.BTreeNode_.associate_($curNode$$1_root$$.children_[$curNode$$1_root$$.children_.length - 1], $newNode$$));
      $curNode$$1_root$$.children_.push($newNode$$);
      $dataIndex$$ += $node$$13_nodeLen$$;
      $remaining$$ -= $node$$13_nodeLen$$;
    }
  }
  return $curNode$$1_root$$;
};
lf.index.BTreeNode_.fromData = function $lf$index$BTreeNode_$fromData$($tree$$, $data$$) {
  var $max$$3_node$$ = lf.index.BTreeNode_.MAX_KEY_LEN_, $max$$3_node$$ = $max$$3_node$$ * $max$$3_node$$ * $max$$3_node$$;
  if ($data$$.length >= $max$$3_node$$) {
    throw new lf.Exception(6, $max$$3_node$$);
  }
  $max$$3_node$$ = lf.index.BTreeNode_.createLeaves_($tree$$, $data$$);
  return $max$$3_node$$ = lf.index.BTreeNode_.createInternals_($max$$3_node$$);
};
lf.index.BTreeNode_.prototype.get = function $lf$index$BTreeNode_$$get$($key$$) {
  var $pos$$ = this.searchKey_($key$$);
  if (this.isLeaf_()) {
    var $results$$ = lf.index.BTree.EMPTY;
    this.tree_.eq(this.keys_[$pos$$], $key$$) && ($results$$ = $results$$.concat(this.values_[$pos$$]));
    return $results$$;
  }
  $pos$$ = this.tree_.eq(this.keys_[$pos$$], $key$$) ? $pos$$ + 1 : $pos$$;
  return this.children_[$pos$$].get($key$$);
};
lf.index.BTreeNode_.prototype.containsKey = function $lf$index$BTreeNode_$$containsKey$($key$$) {
  var $pos$$ = this.searchKey_($key$$);
  return this.tree_.eq(this.keys_[$pos$$], $key$$) ? !0 : this.isLeaf_() ? !1 : this.children_[$pos$$].containsKey($key$$);
};
lf.index.BTreeNode_.prototype.remove = function $lf$index$BTreeNode_$$remove$($key$$, $opt_value$$) {
  this.delete_($key$$, -1, $opt_value$$);
  if (this.isRoot_()) {
    var $root$$ = this;
    1 == this.children_.length && ($root$$ = this.children_[0], $root$$.parent_ = null);
    return $root$$;
  }
  return this;
};
lf.index.BTreeNode_.leftMostKey_ = function $lf$index$BTreeNode_$leftMostKey_$($node$$) {
  return $node$$.isLeaf_() ? $node$$.keys_[0] : lf.index.BTreeNode_.leftMostKey_($node$$.children_[0]);
};
lf.index.BTreeNode_.prototype.fix_ = function $lf$index$BTreeNode_$$fix_$() {
  this.keys_ = [];
  for (var $i$$ = 1;$i$$ < this.children_.length;++$i$$) {
    this.keys_.push(lf.index.BTreeNode_.leftMostKey_(this.children_[$i$$]));
  }
};
lf.index.BTreeNode_.prototype.delete_ = function $lf$index$BTreeNode_$$delete_$($key$$, $parentPos$$, $opt_value$$) {
  var $pos$$ = this.searchKey_($key$$), $isLeaf$$ = this.isLeaf_();
  if (!$isLeaf$$) {
    var $index$$ = this.tree_.eq(this.keys_[$pos$$], $key$$) ? $pos$$ + 1 : $pos$$;
    if (this.children_[$index$$].delete_($key$$, $index$$, $opt_value$$)) {
      this.fix_();
    } else {
      return !1;
    }
  } else {
    if (!this.tree_.eq(this.keys_[$pos$$], $key$$)) {
      return !1;
    }
  }
  if (this.keys_.length > $pos$$ && this.tree_.eq(this.keys_[$pos$$], $key$$)) {
    if (goog.isDef($opt_value$$) && !this.tree_.isUniqueKey() && $isLeaf$$ && (lf.structs.array.binaryRemove(this.values_[$pos$$], $opt_value$$) && this.tree_.stats().remove($key$$, 1), this.values_[$pos$$].length)) {
      return !1;
    }
    this.keys_.splice($pos$$, 1);
    $isLeaf$$ && ($opt_value$$ = this.tree_.isUniqueKey() ? 1 : this.values_[$pos$$].length, this.values_.splice($pos$$, 1), this.tree_.stats().remove($key$$, $opt_value$$));
  }
  this.keys_.length < lf.index.BTreeNode_.MIN_KEY_LEN_ && !this.isRoot_() && (this.steal_() || this.merge_($parentPos$$));
  return !0;
};
lf.index.BTreeNode_.prototype.steal_ = function $lf$index$BTreeNode_$$steal_$() {
  var $from$$ = null, $child$$7_fromIndex$$, $fromChildIndex$$, $toIndex$$;
  if (this.next_ && this.next_.keys_.length > lf.index.BTreeNode_.MIN_KEY_LEN_) {
    $from$$ = this.next_, $fromChildIndex$$ = $child$$7_fromIndex$$ = 0, $toIndex$$ = this.keys_.length + 1;
  } else {
    if (this.prev_ && this.prev_.keys_.length > lf.index.BTreeNode_.MIN_KEY_LEN_) {
      $from$$ = this.prev_, $child$$7_fromIndex$$ = this.prev_.keys_.length - 1, $fromChildIndex$$ = this.isLeaf_() ? $child$$7_fromIndex$$ : $child$$7_fromIndex$$ + 1, $toIndex$$ = 0;
    } else {
      return !1;
    }
  }
  this.keys_.splice($toIndex$$, 0, $from$$.keys_[$child$$7_fromIndex$$]);
  $from$$.keys_.splice($child$$7_fromIndex$$, 1);
  $child$$7_fromIndex$$ = this.isLeaf_() ? this.values_ : this.children_;
  var $fromChild$$ = null;
  this.isLeaf_() ? $fromChild$$ = $from$$.values_ : ($fromChild$$ = $from$$.children_, $fromChild$$[$fromChildIndex$$].parent_ = this);
  $child$$7_fromIndex$$.splice($toIndex$$, 0, $fromChild$$[$fromChildIndex$$]);
  $fromChild$$.splice($fromChildIndex$$, 1);
  $from$$.isLeaf_() || ($from$$.fix_(), this.fix_());
  return !0;
};
lf.index.BTreeNode_.prototype.merge_ = function $lf$index$BTreeNode_$$merge_$($parentPos$$) {
  var $mergeTo$$, $args$$, $childOffset$$;
  this.next_ && this.next_.keys_.length < lf.index.BTreeNode_.MAX_KEY_LEN_ ? ($mergeTo$$ = this.next_, $childOffset$$ = $args$$ = 0) : this.prev_ && ($mergeTo$$ = this.prev_, $args$$ = $mergeTo$$.keys_.length, $childOffset$$ = $mergeTo$$.isLeaf_() ? $mergeTo$$.values_.length : $mergeTo$$.children_.length);
  $args$$ = [$args$$, 0].concat(this.keys_);
  Array.prototype.splice.apply($mergeTo$$.keys_, $args$$);
  $args$$ = null;
  this.isLeaf_() ? $args$$ = this.values_ : ($args$$ = this.children_, $args$$.forEach(function($node$$) {
    $node$$.parent_ = $mergeTo$$;
  }));
  $args$$ = [$childOffset$$, 0].concat($args$$);
  Array.prototype.splice.apply($mergeTo$$.isLeaf_() ? $mergeTo$$.values_ : $mergeTo$$.children_, $args$$);
  lf.index.BTreeNode_.associate_(this.prev_, this.next_);
  $mergeTo$$.isLeaf_() || $mergeTo$$.fix_();
  -1 != $parentPos$$ && (this.parent_.keys_.splice($parentPos$$, 1), this.parent_.children_.splice($parentPos$$, 1));
};
lf.index.BTreeNode_.prototype.insert = function $lf$index$BTreeNode_$$insert$($key$$103_node$$, $value$$, $opt_replace$$) {
  var $pos$$ = this.searchKey_($key$$103_node$$);
  if (this.isLeaf_()) {
    if (this.tree_.eq(this.keys_[$pos$$], $key$$103_node$$)) {
      if ($opt_replace$$) {
        this.tree_.stats().remove($key$$103_node$$, this.tree_.isUniqueKey() ? 1 : this.values_[$pos$$].length), this.values_[$pos$$] = this.tree_.isUniqueKey() ? $value$$ : [$value$$];
      } else {
        if (this.tree_.isUniqueKey()) {
          throw new lf.Exception(201);
        }
        if (!lf.structs.array.binaryInsert(this.values_[$pos$$], $value$$)) {
          throw new lf.Exception(109);
        }
      }
      this.tree_.stats().add($key$$103_node$$, 1);
      return this;
    }
    this.keys_.splice($pos$$, 0, $key$$103_node$$);
    this.values_.splice($pos$$, 0, this.tree_.isUniqueKey() ? $value$$ : [$value$$]);
    this.tree_.stats().add($key$$103_node$$, 1);
    return this.keys_.length == lf.index.BTreeNode_.MAX_COUNT_ ? this.splitLeaf_() : this;
  }
  $pos$$ = this.tree_.eq(this.keys_[$pos$$], $key$$103_node$$) ? $pos$$ + 1 : $pos$$;
  $key$$103_node$$ = this.children_[$pos$$].insert($key$$103_node$$, $value$$, $opt_replace$$);
  $key$$103_node$$.isLeaf_() || 1 != $key$$103_node$$.keys_.length || (this.keys_.splice($pos$$, 0, $key$$103_node$$.keys_[0]), $key$$103_node$$.children_[1].parent_ = this, $key$$103_node$$.children_[0].parent_ = this, this.children_.splice($pos$$, 1, $key$$103_node$$.children_[1]), this.children_.splice($pos$$, 0, $key$$103_node$$.children_[0]));
  return this.keys_.length == lf.index.BTreeNode_.MAX_COUNT_ ? this.splitInternal_() : this;
};
lf.index.BTreeNode_.prototype.splitLeaf_ = function $lf$index$BTreeNode_$$splitLeaf_$() {
  var $half$$ = lf.index.BTreeNode_.MIN_KEY_LEN_, $right$$ = lf.index.BTreeNode_.create(this.tree_), $root$$ = lf.index.BTreeNode_.create(this.tree_);
  $root$$.height_ = 1;
  $root$$.keys_ = [this.keys_[$half$$]];
  $root$$.children_ = [this, $right$$];
  $root$$.parent_ = this.parent_;
  this.parent_ = $root$$;
  $right$$.keys_ = this.keys_.splice($half$$);
  $right$$.values_ = this.values_.splice($half$$);
  $right$$.parent_ = $root$$;
  lf.index.BTreeNode_.associate_($right$$, this.next_);
  lf.index.BTreeNode_.associate_(this, $right$$);
  return $root$$;
};
lf.index.BTreeNode_.prototype.splitInternal_ = function $lf$index$BTreeNode_$$splitInternal_$() {
  var $half$$ = lf.index.BTreeNode_.MIN_KEY_LEN_, $root$$ = lf.index.BTreeNode_.create(this.tree_), $right$$ = lf.index.BTreeNode_.create(this.tree_);
  $root$$.parent_ = this.parent_;
  $root$$.height_ = this.height_ + 1;
  $root$$.keys_ = [this.keys_[$half$$]];
  $root$$.children_ = [this, $right$$];
  this.keys_.splice($half$$, 1);
  $right$$.parent_ = $root$$;
  $right$$.height_ = this.height_;
  $right$$.keys_ = this.keys_.splice($half$$);
  $right$$.children_ = this.children_.splice($half$$ + 1);
  $right$$.children_.forEach(function($node$$) {
    $node$$.parent_ = $right$$;
  });
  this.parent_ = $root$$;
  lf.index.BTreeNode_.associate_($right$$, this.next_);
  lf.index.BTreeNode_.associate_(this, $right$$);
  return $root$$;
};
lf.index.BTreeNode_.prototype.searchKey_ = function $lf$index$BTreeNode_$$searchKey_$($key$$) {
  for (var $left$$ = 0, $right$$ = this.keys_.length, $c$$ = this.tree_.comparator();$left$$ < $right$$;) {
    var $middle$$ = $left$$ + $right$$ >> 1;
    $c$$.compare(this.keys_[$middle$$], $key$$) == lf.index.Favor.RHS ? $left$$ = $middle$$ + 1 : $right$$ = $middle$$;
  }
  return $left$$;
};
lf.index.BTreeNode_.prototype.getContainingLeaf_ = function $lf$index$BTreeNode_$$getContainingLeaf_$($key$$) {
  if (!this.isLeaf_()) {
    var $pos$$ = this.searchKey_($key$$);
    this.tree_.eq(this.keys_[$pos$$], $key$$) && $pos$$++;
    return this.children_[$pos$$].getContainingLeaf_($key$$);
  }
  return this;
};
lf.index.BTreeNode_.prototype.getContainingLeafMultiKey_ = function $lf$index$BTreeNode_$$getContainingLeafMultiKey_$($key$$) {
  if (!this.isLeaf_()) {
    var $pos$$ = this.searchKey_($key$$);
    this.tree_.eq(this.keys_[$pos$$], $key$$) && ($key$$.some(function($dimension$$) {
      return $dimension$$ == lf.index.SingleKeyRange.UNBOUND_VALUE;
    }) || $pos$$++);
    return this.children_[$pos$$].getContainingLeafMultiKey_($key$$);
  }
  return this;
};
lf.index.BTreeNode_.prototype.getRange = function $lf$index$BTreeNode_$$getRange$($keyRange$$, $params$$, $results$$) {
  var $c$$ = this.tree_.comparator(), $left$$ = 0, $right$$ = this.keys_.length - 1, $compare$$ = function $$compare$$$($coverage$$) {
    return $coverage$$[0] ? $coverage$$[1] ? lf.index.Favor.TIE : lf.index.Favor.LHS : lf.index.Favor.RHS;
  }, $keys$$ = this.keys_, $favorLeft$$ = $compare$$($c$$.compareRange($keys$$[$left$$], $keyRange$$)), $favorRight$$ = $compare$$($c$$.compareRange($keys$$[$right$$], $keyRange$$));
  if ($favorLeft$$ != lf.index.Favor.LHS && ($favorLeft$$ != lf.index.Favor.RHS || $favorRight$$ != lf.index.Favor.RHS)) {
    var $getMidPoint$$ = function $$getMidPoint$$$($l$$, $r$$) {
      var $mid$$ = $l$$ + $r$$ >> 1;
      return $mid$$ == $l$$ ? $mid$$ + 1 : $mid$$;
    }, $findFirstKey$$ = function $$findFirstKey$$$($l$$, $r$$, $favorR$$) {
      if ($l$$ >= $r$$) {
        return $favorR$$ == lf.index.Favor.TIE ? $r$$ : -1;
      }
      var $favorL_mid$$ = $compare$$($c$$.compareRange($keys$$[$l$$], $keyRange$$));
      if ($favorL_mid$$ == lf.index.Favor.TIE) {
        return $l$$;
      }
      if ($favorL_mid$$ == lf.index.Favor.LHS) {
        return -1;
      }
      $favorL_mid$$ = $getMidPoint$$($l$$, $r$$);
      if ($favorL_mid$$ == $r$$) {
        return $favorR$$ == lf.index.Favor.TIE ? $r$$ : -1;
      }
      var $favorM$$ = $compare$$($c$$.compareRange($keys$$[$favorL_mid$$], $keyRange$$));
      return $favorM$$ == lf.index.Favor.TIE ? $findFirstKey$$($l$$, $favorL_mid$$, $favorM$$) : $favorM$$ == lf.index.Favor.RHS ? $findFirstKey$$($favorL_mid$$ + 1, $r$$, $favorR$$) : $findFirstKey$$($l$$ + 1, $favorL_mid$$, $favorM$$);
    }, $findLastKey$$ = function $$findLastKey$$$($l$$, $r$$) {
      if ($l$$ >= $r$$) {
        return $l$$;
      }
      var $favorR$$1_mid$$ = $compare$$($c$$.compareRange($keys$$[$r$$], $keyRange$$));
      if ($favorR$$1_mid$$ == lf.index.Favor.TIE) {
        return $r$$;
      }
      if ($favorR$$1_mid$$ == lf.index.Favor.RHS) {
        return $l$$;
      }
      $favorR$$1_mid$$ = $getMidPoint$$($l$$, $r$$);
      if ($favorR$$1_mid$$ == $r$$) {
        return $l$$;
      }
      var $favorM$$ = $compare$$($c$$.compareRange($keys$$[$favorR$$1_mid$$], $keyRange$$));
      return $favorM$$ == lf.index.Favor.TIE ? $findLastKey$$($favorR$$1_mid$$, $r$$) : $favorM$$ == lf.index.Favor.LHS ? $findLastKey$$($l$$, $favorR$$1_mid$$ - 1) : -1;
    };
    $favorLeft$$ != lf.index.Favor.TIE && ($left$$ = $findFirstKey$$($left$$ + 1, $right$$, $favorRight$$));
    -1 != $left$$ && ($right$$ = $findLastKey$$($left$$, $right$$), -1 != $right$$ && $right$$ >= $left$$ && this.appendResults_($params$$, $results$$, $left$$, $right$$ + 1));
  }
};
lf.index.BTreeNode_.prototype.appendResultsAt_ = function $lf$index$BTreeNode_$$appendResultsAt_$($params$$, $results$$, $i$$) {
  if (this.tree_.isUniqueKey()) {
    !$params$$.reverse && $params$$.skip ? $params$$.skip-- : $results$$[$params$$.count++] = this.values_[$i$$];
  } else {
    for (var $j$$ = 0;$j$$ < this.values_[$i$$].length && $params$$.count < $results$$.length;++$j$$) {
      !$params$$.reverse && $params$$.skip ? $params$$.skip-- : $results$$[$params$$.count++] = this.values_[$i$$][$j$$];
    }
  }
};
lf.index.BTreeNode_.prototype.appendResults_ = function $lf$index$BTreeNode_$$appendResults_$($params$$, $results$$, $from$$2_i$$, $to$$) {
  for (;$from$$2_i$$ < $to$$ && ($params$$.reverse || !($params$$.count >= $params$$.limit));++$from$$2_i$$) {
    this.appendResultsAt_($params$$, $results$$, $from$$2_i$$);
  }
};
lf.index.BTreeNode_.prototype.getRangeWithFilter = function $lf$index$BTreeNode_$$getRangeWithFilter$($keyRange$$, $params$$, $results$$) {
  for (var $c$$ = this.tree_.comparator(), $start$$ = -1, $i$$ = 0;$i$$ < this.keys_.length;++$i$$) {
    if ($c$$.isInRange(this.keys_[$i$$], $keyRange$$)) {
      $start$$ = $i$$;
      break;
    }
  }
  if (-1 != $start$$) {
    for ($i$$ = $start$$;$i$$ < this.keys_.length && $params$$.count < $params$$.limit;++$i$$) {
      $c$$.isInRange(this.keys_[$i$$], $keyRange$$) && this.appendResultsAt_($params$$, $results$$, $i$$);
    }
  }
};
lf.index.BTreeNode_.prototype.fill = function $lf$index$BTreeNode_$$fill$($params$$, $results$$) {
  if (this.isLeaf_()) {
    for (var $i$$ = 0;$i$$ < this.values_.length && 0 < $params$$.count;++$i$$) {
      if (0 < $params$$.offset) {
        if ($params$$.offset -= this.tree_.isUniqueKey() ? 1 : this.values_[$i$$].length, 0 > $params$$.offset) {
          for (var $j$$ = this.values_[$i$$].length + $params$$.offset;$j$$ < this.values_[$i$$].length && 0 < $params$$.count;++$j$$) {
            $results$$[$params$$.startIndex++] = this.values_[$i$$][$j$$], $params$$.count--;
          }
        }
      } else {
        if (this.tree_.isUniqueKey()) {
          $results$$[$params$$.startIndex++] = this.values_[$i$$], $params$$.count--;
        } else {
          for ($j$$ = 0;$j$$ < this.values_[$i$$].length && 0 < $params$$.count;++$j$$) {
            $results$$[$params$$.startIndex++] = this.values_[$i$$][$j$$], $params$$.count--;
          }
        }
      }
    }
  } else {
    for ($i$$ = 0;$i$$ < this.children_.length && 0 < $params$$.count;++$i$$) {
      this.children_[$i$$].fill($params$$, $results$$);
    }
  }
};
lf.index.BTreeNode_.serialize = function $lf$index$BTreeNode_$serialize$($node$$19_start$$) {
  for (var $rows$$ = [];$node$$19_start$$;) {
    $rows$$.push(new lf.Row($node$$19_start$$.id_, [$node$$19_start$$.keys_, $node$$19_start$$.values_])), $node$$19_start$$ = $node$$19_start$$.next_;
  }
  return $rows$$;
};
lf.index.BTreeNode_.deserialize = function $lf$index$BTreeNode_$deserialize$($rows$$, $tree$$) {
  for (var $stats$$ = $tree$$.stats(), $leaves$$ = $rows$$.map(function($row$$) {
    var $node$$ = new lf.index.BTreeNode_($row$$.id(), $tree$$);
    $node$$.keys_ = $row$$.payload()[0];
    $node$$.values_ = $row$$.payload()[1];
    $node$$.keys_.forEach(function($key$$, $index$$) {
      $stats$$.add($key$$, $tree$$.isUniqueKey() ? 1 : $node$$.values_[$index$$].length);
    });
    return $node$$;
  }), $i$$ = 0;$i$$ < $leaves$$.length - 1;++$i$$) {
    lf.index.BTreeNode_.associate_($leaves$$[$i$$], $leaves$$[$i$$ + 1]);
  }
  return 1 < $leaves$$.length ? lf.index.BTreeNode_.createInternals_($leaves$$[0]) : $leaves$$[0];
};
lf.index.BTreeNode_.prototype.isFirstKeyInRange = function $lf$index$BTreeNode_$$isFirstKeyInRange$($range$$) {
  return this.tree_.comparator().isFirstKeyInRange(this.keys_[0], $range$$);
};
lf.index.SimpleComparator = function $lf$index$SimpleComparator$($order$$) {
  this.compareFn = $order$$ == lf.Order.DESC ? lf.index.SimpleComparator.compareDescending : lf.index.SimpleComparator.compareAscending;
  this.normalizeKeyRange_ = $order$$ == lf.Order.DESC ? function($opt_keyRange$$) {
    return goog.isDefAndNotNull($opt_keyRange$$) ? $opt_keyRange$$.reverse() : null;
  } : function($opt_keyRange$$) {
    return $opt_keyRange$$ || null;
  };
  this.orderRange_ = $order$$ == lf.Order.DESC ? lf.index.SimpleComparator.orderRangeDescending : lf.index.SimpleComparator.orderRangeAscending;
};
lf.index.SimpleComparator.compareAscending = function $lf$index$SimpleComparator$compareAscending$($lhs$$, $rhs$$) {
  return $lhs$$ > $rhs$$ ? lf.index.Favor.LHS : $lhs$$ < $rhs$$ ? lf.index.Favor.RHS : lf.index.Favor.TIE;
};
lf.index.SimpleComparator.compareDescending = function $lf$index$SimpleComparator$compareDescending$($lhs$$, $rhs$$) {
  return lf.index.SimpleComparator.compareAscending($rhs$$, $lhs$$);
};
lf.index.SimpleComparator.orderRangeAscending = function $lf$index$SimpleComparator$orderRangeAscending$($lhs$$, $rhs$$) {
  return lf.index.SingleKeyRange.compare($lhs$$, $rhs$$);
};
lf.index.SimpleComparator.orderRangeDescending = function $lf$index$SimpleComparator$orderRangeDescending$($lhs$$, $rhs$$) {
  return lf.index.SingleKeyRange.compare($rhs$$, $lhs$$);
};
lf.index.SimpleComparator.prototype.compareRange = function $lf$index$SimpleComparator$$compareRange$($key$$, $naturalRange$$) {
  var $range$$ = this.normalizeKeyRange_($naturalRange$$), $results$$ = [lf.index.SingleKeyRange.isUnbound($range$$.from), lf.index.SingleKeyRange.isUnbound($range$$.to)];
  if (!$results$$[0]) {
    var $favor$$ = this.compareFn($key$$, $range$$.from);
    $results$$[0] = $range$$.excludeLower ? $favor$$ == lf.index.Favor.LHS : $favor$$ != lf.index.Favor.RHS;
  }
  $results$$[1] || ($favor$$ = this.compareFn($key$$, $range$$.to), $results$$[1] = $range$$.excludeUpper ? $favor$$ == lf.index.Favor.RHS : $favor$$ != lf.index.Favor.LHS);
  return $results$$;
};
lf.index.SimpleComparator.prototype.compare = function $lf$index$SimpleComparator$$compare$($lhs$$, $rhs$$) {
  return this.compareFn($lhs$$, $rhs$$);
};
lf.index.SimpleComparator.prototype.min = function $lf$index$SimpleComparator$$min$($lhs$$, $rhs$$) {
  return $lhs$$ < $rhs$$ ? lf.index.Favor.LHS : $lhs$$ == $rhs$$ ? lf.index.Favor.TIE : lf.index.Favor.RHS;
};
lf.index.SimpleComparator.prototype.max = function $lf$index$SimpleComparator$$max$($lhs$$, $rhs$$) {
  return $lhs$$ > $rhs$$ ? lf.index.Favor.LHS : $lhs$$ == $rhs$$ ? lf.index.Favor.TIE : lf.index.Favor.RHS;
};
lf.index.SimpleComparator.prototype.isInRange = function $lf$index$SimpleComparator$$isInRange$($key$$, $range$$) {
  var $results$$ = this.compareRange($key$$, $range$$);
  return $results$$[0] && $results$$[1];
};
lf.index.SimpleComparator.prototype.isFirstKeyInRange = function $lf$index$SimpleComparator$$isFirstKeyInRange$($key$$, $range$$) {
  return this.isInRange($key$$, $range$$);
};
lf.index.SimpleComparator.prototype.getAllRange = function $lf$index$SimpleComparator$$getAllRange$() {
  return lf.index.SingleKeyRange.all();
};
lf.index.SimpleComparator.prototype.orderKeyRange = function $lf$index$SimpleComparator$$orderKeyRange$($lhs$$, $rhs$$) {
  return this.orderRange_($lhs$$, $rhs$$);
};
lf.index.SimpleComparator.prototype.sortKeyRanges = function $lf$index$SimpleComparator$$sortKeyRanges$($keyRanges$$) {
  return $keyRanges$$.filter(function($range$$) {
    return !goog.isNull($range$$);
  }).sort(function($lhs$$, $rhs$$) {
    return this.orderRange_($lhs$$, $rhs$$);
  }.bind(this));
};
lf.index.SimpleComparator.prototype.isLeftOpen = function $lf$index$SimpleComparator$$isLeftOpen$($range$$) {
  return lf.index.SingleKeyRange.isUnbound(this.normalizeKeyRange_($range$$).from);
};
lf.index.SimpleComparator.prototype.rangeToKeys = function $lf$index$SimpleComparator$$rangeToKeys$($naturalRange$$1_range$$) {
  $naturalRange$$1_range$$ = this.normalizeKeyRange_($naturalRange$$1_range$$);
  return [$naturalRange$$1_range$$.from, $naturalRange$$1_range$$.to];
};
lf.index.SimpleComparator.prototype.comparable = function $lf$index$SimpleComparator$$comparable$($key$$) {
  return !goog.isNull($key$$);
};
lf.index.SimpleComparator.prototype.keyDimensions = function $lf$index$SimpleComparator$$keyDimensions$() {
  return 1;
};
lf.index.SimpleComparator.prototype.toString = function $lf$index$SimpleComparator$$toString$() {
  return this.compare == lf.index.SimpleComparator.compareDescending ? "SimpleComparator_DESC" : "SimpleComparator_ASC";
};
lf.index.SimpleComparatorWithNull = function $lf$index$SimpleComparatorWithNull$($order$$) {
  lf.index.SimpleComparator.call(this, $order$$);
  this.compareFn = $order$$ == lf.Order.DESC ? lf.index.SimpleComparatorWithNull.compareDescending : lf.index.SimpleComparatorWithNull.compareAscending;
};
goog.inherits(lf.index.SimpleComparatorWithNull, lf.index.SimpleComparator);
lf.index.SimpleComparatorWithNull.compareAscending = function $lf$index$SimpleComparatorWithNull$compareAscending$($lhs$$, $rhs$$) {
  return goog.isNull($lhs$$) ? goog.isNull($rhs$$) ? lf.index.Favor.TIE : lf.index.Favor.RHS : goog.isNull($rhs$$) ? lf.index.Favor.LHS : lf.index.SimpleComparator.compareAscending($lhs$$, $rhs$$);
};
lf.index.SimpleComparatorWithNull.compareDescending = function $lf$index$SimpleComparatorWithNull$compareDescending$($lhs$$, $rhs$$) {
  return lf.index.SimpleComparatorWithNull.compareAscending($rhs$$, $lhs$$);
};
lf.index.SimpleComparatorWithNull.prototype.isInRange = function $lf$index$SimpleComparatorWithNull$$isInRange$($key$$, $range$$) {
  return goog.isNull($key$$) ? $range$$.isAll() : lf.index.SimpleComparatorWithNull.superClass_.isInRange.call(this, $key$$, $range$$);
};
lf.index.SimpleComparatorWithNull.prototype.minMax_ = function $lf$index$SimpleComparatorWithNull$$minMax_$($lhs$$, $rhs$$) {
  return goog.isNull($lhs$$) ? goog.isNull($rhs$$) ? lf.index.Favor.TIE : lf.index.Favor.RHS : goog.isNull($rhs$$) ? lf.index.Favor.LHS : null;
};
lf.index.SimpleComparatorWithNull.prototype.min = function $lf$index$SimpleComparatorWithNull$$min$($lhs$$, $rhs$$) {
  var $results$$ = this.minMax_($lhs$$, $rhs$$);
  goog.isNull($results$$) && ($results$$ = lf.index.SimpleComparatorWithNull.superClass_.min.call(this, $lhs$$, $rhs$$));
  return $results$$;
};
lf.index.SimpleComparatorWithNull.prototype.max = function $lf$index$SimpleComparatorWithNull$$max$($lhs$$, $rhs$$) {
  var $results$$ = this.minMax_($lhs$$, $rhs$$);
  goog.isNull($results$$) && ($results$$ = lf.index.SimpleComparatorWithNull.superClass_.max.call(this, $lhs$$, $rhs$$));
  return $results$$;
};
lf.index.MultiKeyComparator = function $lf$index$MultiKeyComparator$($orders$$) {
  this.comparators = $orders$$.map(function($order$$) {
    return new lf.index.SimpleComparator($order$$);
  });
};
lf.index.MultiKeyComparator.createOrders = function $lf$index$MultiKeyComparator$createOrders$($numKeys$$, $order$$) {
  for (var $orders$$ = Array($numKeys$$), $i$$ = 0;$i$$ < $numKeys$$;++$i$$) {
    $orders$$[$i$$] = $order$$;
  }
  return $orders$$;
};
lf.index.MultiKeyComparator.prototype.forEach_ = function $lf$index$MultiKeyComparator$$forEach_$($lhs$$, $rhs$$, $fn$$) {
  for (var $favor$$ = lf.index.Favor.TIE, $i$$ = 0;$i$$ < this.comparators.length && $favor$$ == lf.index.Favor.TIE;++$i$$) {
    $favor$$ = $fn$$(this.comparators[$i$$], $lhs$$[$i$$], $rhs$$[$i$$]);
  }
  return $favor$$;
};
lf.index.MultiKeyComparator.prototype.compare = function $lf$index$MultiKeyComparator$$compare$($lhs$$, $rhs$$) {
  return this.forEach_($lhs$$, $rhs$$, function($c$$, $l$$, $r$$) {
    return $l$$ == lf.index.SingleKeyRange.UNBOUND_VALUE || $r$$ == lf.index.SingleKeyRange.UNBOUND_VALUE ? lf.index.Favor.TIE : $c$$.compare($l$$, $r$$);
  });
};
lf.index.MultiKeyComparator.prototype.min = function $lf$index$MultiKeyComparator$$min$($lhs$$, $rhs$$) {
  return this.forEach_($lhs$$, $rhs$$, function($c$$, $l$$, $r$$) {
    return $c$$.min($l$$, $r$$);
  });
};
lf.index.MultiKeyComparator.prototype.max = function $lf$index$MultiKeyComparator$$max$($lhs$$, $rhs$$) {
  return this.forEach_($lhs$$, $rhs$$, function($c$$, $l$$, $r$$) {
    return $c$$.max($l$$, $r$$);
  });
};
lf.index.MultiKeyComparator.prototype.compareRange = function $lf$index$MultiKeyComparator$$compareRange$($key$$, $range$$) {
  for (var $results$$ = [!0, !0], $i$$ = 0;$i$$ < this.comparators.length && ($results$$[0] || $results$$[1]);++$i$$) {
    var $dimensionResults$$ = this.comparators[$i$$].compareRange($key$$[$i$$], $range$$[$i$$]);
    $results$$[0] = $results$$[0] && $dimensionResults$$[0];
    $results$$[1] = $results$$[1] && $dimensionResults$$[1];
  }
  return $results$$;
};
lf.index.MultiKeyComparator.prototype.isInRange = function $lf$index$MultiKeyComparator$$isInRange$($key$$, $range$$) {
  for (var $isInRange$$ = !0, $i$$ = 0;$i$$ < this.comparators.length && $isInRange$$;++$i$$) {
    $isInRange$$ = this.comparators[$i$$].isInRange($key$$[$i$$], $range$$[$i$$]);
  }
  return $isInRange$$;
};
lf.index.MultiKeyComparator.prototype.isFirstKeyInRange = function $lf$index$MultiKeyComparator$$isFirstKeyInRange$($key$$, $range$$) {
  return this.comparators[0].isInRange($key$$[0], $range$$[0]);
};
lf.index.MultiKeyComparator.prototype.getAllRange = function $lf$index$MultiKeyComparator$$getAllRange$() {
  return this.comparators.map(function($c$$) {
    return $c$$.getAllRange();
  });
};
lf.index.MultiKeyComparator.prototype.sortKeyRanges = function $lf$index$MultiKeyComparator$$sortKeyRanges$($keyRanges$$) {
  var $finalKeyRanges_outputKeyRanges$$ = $keyRanges$$.filter(function($range$$) {
    return $range$$.every(goog.isDefAndNotNull);
  });
  $keyRanges$$ = Array(this.comparators.length);
  for (var $i$$0$$ = 0;$i$$0$$ < $keyRanges$$.length;$i$$0$$++) {
    $keyRanges$$[$i$$0$$] = $finalKeyRanges_outputKeyRanges$$.map(function($range$$) {
      return $range$$[$i$$0$$];
    });
  }
  $keyRanges$$.forEach(function($keys$$, $i$$) {
    $keys$$.sort(function($lhs$$, $rhs$$) {
      return this.comparators[$i$$].orderKeyRange($lhs$$, $rhs$$);
    }.bind(this));
  }, this);
  $finalKeyRanges_outputKeyRanges$$ = Array($finalKeyRanges_outputKeyRanges$$.length);
  for ($i$$0$$ = 0;$i$$0$$ < $finalKeyRanges_outputKeyRanges$$.length;$i$$0$$++) {
    $finalKeyRanges_outputKeyRanges$$[$i$$0$$] = $keyRanges$$.map(function($keys$$) {
      return $keys$$[$i$$0$$];
    });
  }
  return $finalKeyRanges_outputKeyRanges$$.sort(function($lhs$$, $rhs$$) {
    for (var $favor$$ = lf.index.Favor.TIE, $i$$ = 0;$i$$ < this.comparators.length && $favor$$ == lf.index.Favor.TIE;++$i$$) {
      $favor$$ = this.comparators[$i$$].orderKeyRange($lhs$$[$i$$], $rhs$$[$i$$]);
    }
    return $favor$$;
  }.bind(this));
};
lf.index.MultiKeyComparator.prototype.isLeftOpen = function $lf$index$MultiKeyComparator$$isLeftOpen$($range$$) {
  return this.comparators[0].isLeftOpen($range$$[0]);
};
lf.index.MultiKeyComparator.prototype.rangeToKeys = function $lf$index$MultiKeyComparator$$rangeToKeys$($endKey_keyRange$$) {
  var $startKey$$ = $endKey_keyRange$$.map(function($range$$, $i$$) {
    return this.comparators[$i$$].rangeToKeys($range$$)[0];
  }, this);
  $endKey_keyRange$$ = $endKey_keyRange$$.map(function($range$$, $i$$) {
    return this.comparators[$i$$].rangeToKeys($range$$)[1];
  }, this);
  return [$startKey$$, $endKey_keyRange$$];
};
lf.index.MultiKeyComparator.prototype.comparable = function $lf$index$MultiKeyComparator$$comparable$($key$$) {
  return $key$$.every(function($keyDimension$$, $i$$) {
    return this.comparators[$i$$].comparable($keyDimension$$);
  }, this);
};
lf.index.MultiKeyComparator.prototype.keyDimensions = function $lf$index$MultiKeyComparator$$keyDimensions$() {
  return this.comparators.length;
};
lf.index.MultiKeyComparatorWithNull = function $lf$index$MultiKeyComparatorWithNull$($orders$$) {
  lf.index.MultiKeyComparator.call(this, $orders$$);
  this.comparators = $orders$$.map(function($order$$) {
    return new lf.index.SimpleComparatorWithNull($order$$);
  });
};
goog.inherits(lf.index.MultiKeyComparatorWithNull, lf.index.MultiKeyComparator);
lf.index.ComparatorFactory = {};
lf.index.ComparatorFactory.create = function $lf$index$ComparatorFactory$create$($indexSchema$$) {
  if (1 == $indexSchema$$.columns.length) {
    return new lf.index.SimpleComparator($indexSchema$$.columns[0].order);
  }
  var $orders$$ = $indexSchema$$.columns.map(function($col$$) {
    return $col$$.order;
  });
  return $indexSchema$$.columns.some(function($col$$) {
    return $col$$.schema.isNullable();
  }) ? new lf.index.MultiKeyComparatorWithNull($orders$$) : new lf.index.MultiKeyComparator($orders$$);
};
lf.index.NullableIndex = function $lf$index$NullableIndex$($index$$) {
  this.index_ = $index$$;
  this.nulls_ = lf.structs.set.create();
  this.statsNull_ = new lf.index.Stats;
  this.stats_ = new lf.index.Stats;
};
lf.index.NullableIndex.prototype.getName = function $lf$index$NullableIndex$$getName$() {
  return this.index_.getName();
};
lf.index.NullableIndex.prototype.add = function $lf$index$NullableIndex$$add$($key$$, $value$$) {
  goog.isNull($key$$) ? (this.nulls_.add($value$$), this.statsNull_.add($key$$, 1)) : this.index_.add($key$$, $value$$);
};
lf.index.NullableIndex.prototype.set = function $lf$index$NullableIndex$$set$($key$$, $value$$) {
  goog.isNull($key$$) ? (this.nulls_.clear(), this.statsNull_.clear(), this.add($key$$, $value$$)) : this.index_.set($key$$, $value$$);
};
lf.index.NullableIndex.prototype.remove = function $lf$index$NullableIndex$$remove$($key$$, $opt_rowId$$) {
  goog.isNull($key$$) ? $opt_rowId$$ ? (this.nulls_.delete($opt_rowId$$), this.statsNull_.remove($key$$, 1)) : (this.nulls_.clear(), this.statsNull_.clear()) : this.index_.remove($key$$, $opt_rowId$$);
};
lf.index.NullableIndex.prototype.get = function $lf$index$NullableIndex$$get$($key$$) {
  return goog.isNull($key$$) ? lf.structs.set.values(this.nulls_) : this.index_.get($key$$);
};
lf.index.NullableIndex.prototype.cost = function $lf$index$NullableIndex$$cost$($opt_keyRange$$) {
  return this.index_.cost($opt_keyRange$$);
};
lf.index.NullableIndex.prototype.stats = function $lf$index$NullableIndex$$stats$() {
  this.stats_.updateFromList([this.index_.stats(), this.statsNull_]);
  return this.stats_;
};
lf.index.NullableIndex.prototype.getRange = function $lf$index$NullableIndex$$getRange$($opt_keyRanges$$, $opt_reverseOrder$$2_results$$, $opt_limit$$, $opt_skip$$) {
  $opt_reverseOrder$$2_results$$ = this.index_.getRange($opt_keyRanges$$, $opt_reverseOrder$$2_results$$, $opt_limit$$, $opt_skip$$);
  return goog.isDefAndNotNull($opt_keyRanges$$) ? $opt_reverseOrder$$2_results$$ : $opt_reverseOrder$$2_results$$.concat(lf.structs.set.values(this.nulls_));
};
lf.index.NullableIndex.prototype.clear = function $lf$index$NullableIndex$$clear$() {
  this.nulls_.clear();
  this.index_.clear();
};
lf.index.NullableIndex.prototype.containsKey = function $lf$index$NullableIndex$$containsKey$($key$$) {
  return goog.isNull($key$$) ? 0 != this.nulls_.size : this.index_.containsKey($key$$);
};
lf.index.NullableIndex.prototype.min = function $lf$index$NullableIndex$$min$() {
  return this.index_.min();
};
lf.index.NullableIndex.prototype.max = function $lf$index$NullableIndex$$max$() {
  return this.index_.max();
};
lf.index.NullableIndex.NULL_ROW_ID_ = -2;
lf.index.NullableIndex.prototype.serialize = function $lf$index$NullableIndex$$serialize$() {
  return [new lf.Row(lf.index.NullableIndex.NULL_ROW_ID_, lf.structs.set.values(this.nulls_))].concat(this.index_.serialize());
};
lf.index.NullableIndex.prototype.comparator = function $lf$index$NullableIndex$$comparator$() {
  return this.index_.comparator();
};
lf.index.NullableIndex.deserialize = function $lf$index$NullableIndex$deserialize$($deserializeFn$$, $rows$$) {
  for (var $index$$93_tree$$ = -1, $i$$ = 0;$i$$ < $rows$$.length;++$i$$) {
    if ($rows$$[$i$$].id() == lf.index.NullableIndex.NULL_ROW_ID_) {
      $index$$93_tree$$ = $i$$;
      break;
    }
  }
  if (-1 == $index$$93_tree$$) {
    throw new lf.Exception(102);
  }
  var $i$$ = $rows$$[$index$$93_tree$$].payload(), $newRows$$ = $rows$$.slice(0);
  $newRows$$.splice($index$$93_tree$$, 1);
  var $index$$93_tree$$ = $deserializeFn$$($newRows$$), $nullableIndex$$ = new lf.index.NullableIndex($index$$93_tree$$);
  $i$$.forEach(function($rowId$$) {
    $nullableIndex$$.nulls_.add($rowId$$);
  });
  return $nullableIndex$$;
};
lf.index.NullableIndex.prototype.isUniqueKey = function $lf$index$NullableIndex$$isUniqueKey$() {
  return this.index_.isUniqueKey();
};
lf.index.RowId = function $lf$index$RowId$($name$$) {
  this.name_ = $name$$;
  this.rows_ = lf.structs.set.create();
  this.comparator_ = new lf.index.SimpleComparator(lf.Order.ASC);
};
lf.index.RowId.ROW_ID = 0;
lf.index.RowId.prototype.getName = function $lf$index$RowId$$getName$() {
  return this.name_;
};
lf.index.RowId.prototype.add = function $lf$index$RowId$$add$($key$$, $value$$) {
  if ("number" != typeof $key$$) {
    throw new lf.Exception(103);
  }
  this.rows_.add($key$$);
};
lf.index.RowId.prototype.set = function $lf$index$RowId$$set$($key$$, $value$$) {
  this.add($key$$, $value$$);
};
lf.index.RowId.prototype.remove = function $lf$index$RowId$$remove$($key$$, $rowId$$) {
  this.rows_.delete($key$$);
};
lf.index.RowId.prototype.get = function $lf$index$RowId$$get$($key$$) {
  return this.containsKey($key$$) ? [$key$$] : [];
};
lf.index.RowId.prototype.min = function $lf$index$RowId$$min$() {
  return this.minMax_(this.comparator_.min.bind(this.comparator_));
};
lf.index.RowId.prototype.max = function $lf$index$RowId$$max$() {
  return this.minMax_(this.comparator_.max.bind(this.comparator_));
};
lf.index.RowId.prototype.minMax_ = function $lf$index$RowId$$minMax_$($compareFn$$) {
  if (0 == this.rows_.size) {
    return null;
  }
  var $key$$0$$ = lf.structs.set.values(this.rows_).reduce(function($keySoFar$$, $key$$) {
    return goog.isNull($keySoFar$$) || $compareFn$$($key$$, $keySoFar$$) == lf.index.Favor.LHS ? $key$$ : $keySoFar$$;
  }, null);
  return [$key$$0$$, [$key$$0$$]];
};
lf.index.RowId.prototype.cost = function $lf$index$RowId$$cost$($opt_keyRange$$) {
  return this.rows_.size;
};
lf.index.RowId.prototype.getRange = function $lf$index$RowId$$getRange$($opt_keyRanges$$2_values$$, $opt_reverseOrder$$, $opt_limit$$, $opt_skip$$) {
  var $keyRanges$$ = $opt_keyRanges$$2_values$$ || [lf.index.SingleKeyRange.all()];
  $opt_keyRanges$$2_values$$ = lf.structs.set.values(this.rows_).filter(function($value$$) {
    return $keyRanges$$.some(function($range$$) {
      return this.comparator_.isInRange($value$$, $range$$);
    }, this);
  }, this);
  return lf.index.slice($opt_keyRanges$$2_values$$, $opt_reverseOrder$$, $opt_limit$$, $opt_skip$$);
};
lf.index.RowId.prototype.clear = function $lf$index$RowId$$clear$() {
  this.rows_.clear();
};
lf.index.RowId.prototype.containsKey = function $lf$index$RowId$$containsKey$($key$$) {
  return this.rows_.has($key$$);
};
lf.index.RowId.prototype.serialize = function $lf$index$RowId$$serialize$() {
  return [new lf.Row(lf.index.RowId.ROW_ID, lf.structs.set.values(this.rows_))];
};
lf.index.RowId.prototype.comparator = function $lf$index$RowId$$comparator$() {
  return this.comparator_;
};
lf.index.RowId.deserialize = function $lf$index$RowId$deserialize$($name$$, $rows$$) {
  var $index$$ = new lf.index.RowId($name$$);
  $rows$$[0].payload().forEach(function($rowId$$) {
    $index$$.add($rowId$$, $rowId$$);
  });
  return $index$$;
};
lf.index.RowId.prototype.isUniqueKey = function $lf$index$RowId$$isUniqueKey$() {
  return !0;
};
lf.index.RowId.prototype.stats = function $lf$index$RowId$$stats$() {
  var $stats$$ = new lf.index.Stats;
  $stats$$.totalRows = this.rows_.size;
  return $stats$$;
};
lf.cache.Prefetcher = function $lf$cache$Prefetcher$($global$$) {
  this.backStore_ = $global$$.getService(lf.service.BACK_STORE);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.cache_ = $global$$.getService(lf.service.CACHE);
};
lf.cache.Prefetcher.prototype.init = function $lf$cache$Prefetcher$$init$($schema$$) {
  var $tables$$ = $schema$$.tables(), $execSequentially$$ = function() {
    if (0 == $tables$$.length) {
      return goog.Promise.resolve();
    }
    var $table$$ = $tables$$.shift();
    return ($table$$.persistentIndex() ? this.fetchTableWithPersistentIndices_($table$$) : this.fetchTable_($table$$)).then($execSequentially$$);
  }.bind(this);
  return $execSequentially$$();
};
lf.cache.Prefetcher.prototype.fetchTable_ = function $lf$cache$Prefetcher$$fetchTable_$($table$$) {
  var $tx$$ = this.backStore_.createTx(lf.TransactionType.READ_ONLY, [$table$$]), $promise$$ = $tx$$.getTable($table$$.getName(), $table$$.deserializeRow.bind($table$$), lf.backstore.TableType.DATA).get([]).then(function($results$$) {
    this.cache_.setMany($table$$.getName(), $results$$);
    this.reconstructNonPersistentIndices_($table$$, $results$$);
  }.bind(this));
  $tx$$.commit();
  return $promise$$;
};
lf.cache.Prefetcher.prototype.reconstructNonPersistentIndices_ = function $lf$cache$Prefetcher$$reconstructNonPersistentIndices_$($tableSchema$$, $tableRows$$) {
  var $indices$$ = this.indexStore_.getTableIndices($tableSchema$$.getName());
  $tableRows$$.forEach(function($row$$) {
    $indices$$.forEach(function($index$$) {
      var $key$$ = $row$$.keyOfIndex($index$$.getName());
      $index$$.add($key$$, $row$$.id());
    });
  });
};
lf.cache.Prefetcher.prototype.fetchTableWithPersistentIndices_ = function $lf$cache$Prefetcher$$fetchTableWithPersistentIndices_$($tableSchema$$) {
  var $tx$$ = this.backStore_.createTx(lf.TransactionType.READ_ONLY, [$tableSchema$$]), $whenTableContentsFetched$$ = $tx$$.getTable($tableSchema$$.getName(), $tableSchema$$.deserializeRow, lf.backstore.TableType.DATA).get([]).then(function($results$$) {
    this.cache_.setMany($tableSchema$$.getName(), $results$$);
  }.bind(this)), $whenIndicesReconstructed$$ = $tableSchema$$.getIndices().map(function($indexSchema$$) {
    return this.reconstructPersistentIndex_($indexSchema$$, $tx$$);
  }, this).concat(this.reconstructPersistentRowIdIndex_($tableSchema$$, $tx$$));
  $tx$$.commit();
  return goog.Promise.all($whenIndicesReconstructed$$.concat($whenTableContentsFetched$$));
};
lf.cache.Prefetcher.prototype.reconstructPersistentIndex_ = function $lf$cache$Prefetcher$$reconstructPersistentIndex_$($indexSchema$$, $tx$$) {
  var $indexTable$$ = $tx$$.getTable($indexSchema$$.getNormalizedName(), lf.Row.deserialize, lf.backstore.TableType.INDEX), $comparator$$ = lf.index.ComparatorFactory.create($indexSchema$$);
  return $indexTable$$.get([]).then(function($btreeIndex_nullableIndex$$) {
    if (0 < $btreeIndex_nullableIndex$$.length) {
      if ($indexSchema$$.hasNullableColumn()) {
        var $deserializeFn$$ = lf.index.BTree.deserialize.bind(void 0, $comparator$$, $indexSchema$$.getNormalizedName(), $indexSchema$$.isUnique);
        $btreeIndex_nullableIndex$$ = lf.index.NullableIndex.deserialize($deserializeFn$$, $btreeIndex_nullableIndex$$);
      } else {
        $btreeIndex_nullableIndex$$ = lf.index.BTree.deserialize($comparator$$, $indexSchema$$.getNormalizedName(), $indexSchema$$.isUnique, $btreeIndex_nullableIndex$$);
      }
      this.indexStore_.set($indexSchema$$.tableName, $btreeIndex_nullableIndex$$);
    }
  }.bind(this));
};
lf.cache.Prefetcher.prototype.reconstructPersistentRowIdIndex_ = function $lf$cache$Prefetcher$$reconstructPersistentRowIdIndex_$($tableSchema$$, $tx$$) {
  return $tx$$.getTable($tableSchema$$.getRowIdIndexName(), lf.Row.deserialize, lf.backstore.TableType.INDEX).get([]).then(function($rowIdIndex_serializedRows$$) {
    0 < $rowIdIndex_serializedRows$$.length && ($rowIdIndex_serializedRows$$ = lf.index.RowId.deserialize($tableSchema$$.getRowIdIndexName(), $rowIdIndex_serializedRows$$), this.indexStore_.set($tableSchema$$.getName(), $rowIdIndex_serializedRows$$));
  }.bind(this));
};
lf.Global = function $lf$Global$() {
  this.services_ = lf.structs.map.create();
};
lf.Global.get = function $lf$Global$get$() {
  lf.Global.instance_ || (lf.Global.instance_ = new lf.Global);
  return lf.Global.instance_;
};
lf.Global.prototype.clear = function $lf$Global$$clear$() {
  this.services_.clear();
};
goog.exportProperty(lf.Global.prototype, "clear", lf.Global.prototype.clear);
lf.Global.prototype.registerService = function $lf$Global$$registerService$($serviceId$$, $service$$) {
  this.services_.set($serviceId$$.toString(), $service$$);
  return $service$$;
};
goog.exportProperty(lf.Global.prototype, "registerService", lf.Global.prototype.registerService);
lf.Global.prototype.getService = function $lf$Global$$getService$($serviceId$$) {
  var $service$$ = this.services_.get($serviceId$$.toString()) || null;
  if (goog.isNull($service$$)) {
    throw new lf.Exception(7, $serviceId$$.toString());
  }
  return $service$$;
};
goog.exportProperty(lf.Global.prototype, "getService", lf.Global.prototype.getService);
lf.Global.prototype.isRegistered = function $lf$Global$$isRegistered$($serviceId$$) {
  return this.services_.has($serviceId$$.toString());
};
goog.exportProperty(lf.Global.prototype, "isRegistered", lf.Global.prototype.isRegistered);
lf.Global.prototype.listServices = function $lf$Global$$listServices$() {
  return lf.structs.map.keys(this.services_);
};
lf.debug = {};
lf.debug.inspect = function $lf$debug$inspect$($dbName$$, $tableName$$, $opt_limit$$, $opt_skip$$) {
  return goog.isDefAndNotNull($dbName$$) ? goog.isDefAndNotNull($tableName$$) ? lf.debug.inspectTable_($dbName$$, $tableName$$, $opt_limit$$, $opt_skip$$) : lf.debug.listTables_($dbName$$) : lf.debug.listDb_();
};
lf.debug.toString_ = function $lf$debug$toString_$($data$$) {
  var $value$$ = "";
  try {
    $value$$ = JSON.stringify($data$$);
  } catch ($e$$) {
  }
  return $value$$;
};
lf.debug.getGlobal_ = function $lf$debug$getGlobal_$($dbName$$) {
  var $global$$ = lf.Global.get();
  $dbName$$ = new lf.service.ServiceId("ns_" + $dbName$$);
  return $global$$.isRegistered($dbName$$) ? $global$$.getService($dbName$$) : null;
};
lf.debug.listDb_ = function $lf$debug$listDb_$() {
  var $dbList$$ = {};
  lf.Global.get().listServices().forEach(function($dbName$$2_service$$) {
    "ns_" == $dbName$$2_service$$.substring(0, 3) && ($dbName$$2_service$$ = $dbName$$2_service$$.substring(3), $dbList$$[$dbName$$2_service$$] = lf.debug.getGlobal_($dbName$$2_service$$).getService(lf.service.SCHEMA).version());
  });
  return lf.debug.toString_($dbList$$);
};
lf.debug.listTables_ = function $lf$debug$listTables_$($dbName$$3_global$$) {
  $dbName$$3_global$$ = lf.debug.getGlobal_($dbName$$3_global$$);
  var $tables$$ = {};
  if (goog.isDefAndNotNull($dbName$$3_global$$)) {
    var $indexStore$$ = $dbName$$3_global$$.getService(lf.service.INDEX_STORE);
    $dbName$$3_global$$.getService(lf.service.SCHEMA).tables().forEach(function($table$$) {
      $tables$$[$table$$.getName()] = $indexStore$$.get($table$$.getRowIdIndexName()).stats().totalRows;
    });
  }
  return lf.debug.toString_($tables$$);
};
lf.debug.inspectTable_ = function $lf$debug$inspectTable_$($contents$$2_dbName$$, $indexStore$$1_tableName$$, $opt_limit$$6_rowIds$$, $opt_skip$$) {
  var $cache$$2_global$$ = lf.debug.getGlobal_($contents$$2_dbName$$);
  $contents$$2_dbName$$ = [];
  if (goog.isDefAndNotNull($cache$$2_global$$)) {
    var $table$$ = null;
    try {
      $table$$ = $cache$$2_global$$.getService(lf.service.SCHEMA).table($indexStore$$1_tableName$$);
    } catch ($e$$) {
    }
    goog.isDefAndNotNull($table$$) && ($indexStore$$1_tableName$$ = $cache$$2_global$$.getService(lf.service.INDEX_STORE), $cache$$2_global$$ = $cache$$2_global$$.getService(lf.service.CACHE), $opt_limit$$6_rowIds$$ = $indexStore$$1_tableName$$.get($table$$.getRowIdIndexName()).getRange(void 0, !1, $opt_limit$$6_rowIds$$, $opt_skip$$), $opt_limit$$6_rowIds$$.length && ($contents$$2_dbName$$ = $cache$$2_global$$.getMany($opt_limit$$6_rowIds$$).map(function($row$$) {
      return $row$$.payload();
    })));
  }
  return lf.debug.toString_($contents$$2_dbName$$);
};
lf.index.IndexStore = function $lf$index$IndexStore$() {
};
lf.index.MemoryIndexStore = function $lf$index$MemoryIndexStore$() {
  this.store_ = lf.structs.map.create();
  this.tableIndices_ = lf.structs.map.create();
};
lf.index.MemoryIndexStore.prototype.init = function $lf$index$MemoryIndexStore$$init$($schema$$) {
  $schema$$.tables().forEach(function($table$$) {
    var $tableIndices$$ = [];
    this.tableIndices_.set($table$$.getName(), $tableIndices$$);
    var $rowIdIndexName$$ = $table$$.getRowIdIndexName(), $index$$96_rowIdIndex$$ = this.get($rowIdIndexName$$);
    goog.isNull($index$$96_rowIdIndex$$) && ($index$$96_rowIdIndex$$ = new lf.index.RowId($rowIdIndexName$$), $tableIndices$$.push($index$$96_rowIdIndex$$), this.store_.set($rowIdIndexName$$, $index$$96_rowIdIndex$$));
    $table$$.getIndices().forEach(function($indexSchema$$) {
      var $index$$ = lf.index.MemoryIndexStore.createIndex_($indexSchema$$);
      $tableIndices$$.push($index$$);
      this.store_.set($indexSchema$$.getNormalizedName(), $index$$);
    }, this);
  }, this);
  return goog.Promise.resolve();
};
lf.index.MemoryIndexStore.createIndex_ = function $lf$index$MemoryIndexStore$createIndex_$($indexSchema$$) {
  var $comparator$$4_index$$ = lf.index.ComparatorFactory.create($indexSchema$$), $comparator$$4_index$$ = new lf.index.BTree($indexSchema$$.getNormalizedName(), $comparator$$4_index$$, $indexSchema$$.isUnique);
  return $indexSchema$$.hasNullableColumn() && 1 == $indexSchema$$.columns.length ? new lf.index.NullableIndex($comparator$$4_index$$) : $comparator$$4_index$$;
};
lf.index.MemoryIndexStore.prototype.get = function $lf$index$MemoryIndexStore$$get$($name$$) {
  return this.store_.get($name$$) || null;
};
lf.index.MemoryIndexStore.prototype.set = function $lf$index$MemoryIndexStore$$set$($tableName$$, $index$$) {
  var $tableIndices$$ = this.tableIndices_.get($tableName$$) || null;
  goog.isNull($tableIndices$$) && ($tableIndices$$ = [], this.tableIndices_.set($tableName$$, $tableIndices$$));
  for (var $existsAt$$ = null, $i$$ = 0;$i$$ < $tableIndices$$.length;$i$$++) {
    if ($tableIndices$$[$i$$].getName() == $index$$.getName()) {
      $existsAt$$ = $i$$;
      break;
    }
  }
  !goog.isNull($existsAt$$) && 0 < $tableIndices$$.length ? $tableIndices$$.splice($existsAt$$, 1, $index$$) : $tableIndices$$.push($index$$);
  this.store_.set($index$$.getName(), $index$$);
};
lf.index.MemoryIndexStore.prototype.getTableIndices = function $lf$index$MemoryIndexStore$$getTableIndices$($tableName$$) {
  return this.tableIndices_.get($tableName$$) || [];
};
lf.pred.Operator = {AND:"and", OR:"or"};
lf.proc.RewritePass = function $lf$proc$RewritePass$() {
};
lf.proc.LogicalQueryPlan = function $lf$proc$LogicalQueryPlan$($rootNode$$, $scope$$) {
  this.rootNode_ = $rootNode$$;
  this.scope_ = $scope$$;
};
lf.proc.LogicalQueryPlan.prototype.getRoot = function $lf$proc$LogicalQueryPlan$$getRoot$() {
  return this.rootNode_;
};
lf.proc.LogicalQueryPlan.prototype.getScope = function $lf$proc$LogicalQueryPlan$$getScope$() {
  return this.scope_;
};
lf.proc.LogicalQueryPlanNode = function $lf$proc$LogicalQueryPlanNode$() {
  lf.structs.TreeNode.call(this);
};
goog.inherits(lf.proc.LogicalQueryPlanNode, lf.structs.TreeNode);
lf.proc.InsertNode = function $lf$proc$InsertNode$($table$$, $values$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.table = $table$$;
  this.values = $values$$;
};
goog.inherits(lf.proc.InsertNode, lf.proc.LogicalQueryPlanNode);
lf.proc.InsertOrReplaceNode = function $lf$proc$InsertOrReplaceNode$($table$$, $values$$) {
  lf.proc.InsertNode.call(this, $table$$, $values$$);
};
goog.inherits(lf.proc.InsertOrReplaceNode, lf.proc.InsertNode);
lf.proc.DeleteNode = function $lf$proc$DeleteNode$($table$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.table = $table$$;
};
goog.inherits(lf.proc.DeleteNode, lf.proc.LogicalQueryPlanNode);
lf.proc.DeleteNode.prototype.toString = function $lf$proc$DeleteNode$$toString$() {
  return "delete(" + this.table.getName() + ")";
};
lf.proc.UpdateNode = function $lf$proc$UpdateNode$($table$$, $updates$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.table = $table$$;
  this.updates = $updates$$;
};
goog.inherits(lf.proc.UpdateNode, lf.proc.LogicalQueryPlanNode);
lf.proc.UpdateNode.prototype.toString = function $lf$proc$UpdateNode$$toString$() {
  var $columns$$ = [];
  this.updates && ($columns$$ = this.updates.map(function($update$$) {
    return $update$$.column.getName();
  }, this));
  return "update(" + this.table.getName() + ", [" + $columns$$.join(",") + "])";
};
lf.proc.SelectNode = function $lf$proc$SelectNode$($predicate$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.predicate = $predicate$$;
};
goog.inherits(lf.proc.SelectNode, lf.proc.LogicalQueryPlanNode);
lf.proc.SelectNode.prototype.toString = function $lf$proc$SelectNode$$toString$() {
  return "select(" + this.predicate.toString() + ")";
};
lf.proc.TableAccessNode = function $lf$proc$TableAccessNode$($table$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.table = $table$$;
};
goog.inherits(lf.proc.TableAccessNode, lf.proc.LogicalQueryPlanNode);
lf.proc.TableAccessNode.prototype.toString = function $lf$proc$TableAccessNode$$toString$() {
  var $out$$ = "table_access(" + this.table.getName();
  goog.isNull(this.table.getAlias()) || ($out$$ += " as " + this.table.getAlias());
  return $out$$ + ")";
};
lf.proc.CrossProductNode = function $lf$proc$CrossProductNode$() {
  lf.proc.LogicalQueryPlanNode.call(this);
};
goog.inherits(lf.proc.CrossProductNode, lf.proc.LogicalQueryPlanNode);
lf.proc.CrossProductNode.prototype.toString = function $lf$proc$CrossProductNode$$toString$() {
  return "cross_product";
};
lf.proc.ProjectNode = function $lf$proc$ProjectNode$($columns$$, $groupByColumns$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.columns = $columns$$;
  this.groupByColumns = $groupByColumns$$;
};
goog.inherits(lf.proc.ProjectNode, lf.proc.LogicalQueryPlanNode);
lf.proc.ProjectNode.prototype.toString = function $lf$proc$ProjectNode$$toString$() {
  var $string$$ = "project(" + this.columns.toString();
  if (!goog.isNull(this.groupByColumns)) {
    var $groupBy$$ = this.groupByColumns.map(function($col$$) {
      return $col$$.getNormalizedName();
    }).join(", "), $string$$ = $string$$ + (", groupBy(" + $groupBy$$ + ")")
  }
  return $string$$ + ")";
};
lf.proc.OrderByNode = function $lf$proc$OrderByNode$($orderBy$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.orderBy = $orderBy$$;
};
goog.inherits(lf.proc.OrderByNode, lf.proc.LogicalQueryPlanNode);
lf.proc.OrderByNode.prototype.toString = function $lf$proc$OrderByNode$$toString$() {
  return "order_by(" + lf.query.SelectContext.orderByToString(this.orderBy) + ")";
};
lf.proc.AggregationNode = function $lf$proc$AggregationNode$($columns$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.columns = $columns$$;
};
goog.inherits(lf.proc.AggregationNode, lf.proc.LogicalQueryPlanNode);
lf.proc.AggregationNode.prototype.toString = function $lf$proc$AggregationNode$$toString$() {
  return "aggregation(" + this.columns.toString() + ")";
};
lf.proc.GroupByNode = function $lf$proc$GroupByNode$($columns$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.columns = $columns$$;
};
goog.inherits(lf.proc.GroupByNode, lf.proc.LogicalQueryPlanNode);
lf.proc.GroupByNode.prototype.toString = function $lf$proc$GroupByNode$$toString$() {
  return "group_by(" + this.columns.toString() + ")";
};
lf.proc.LimitNode = function $lf$proc$LimitNode$($limit$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.limit = $limit$$;
};
goog.inherits(lf.proc.LimitNode, lf.proc.LogicalQueryPlanNode);
lf.proc.LimitNode.prototype.toString = function $lf$proc$LimitNode$$toString$() {
  return "limit(" + this.limit + ")";
};
lf.proc.SkipNode = function $lf$proc$SkipNode$($skip$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.skip = $skip$$;
};
goog.inherits(lf.proc.SkipNode, lf.proc.LogicalQueryPlanNode);
lf.proc.SkipNode.prototype.toString = function $lf$proc$SkipNode$$toString$() {
  return "skip(" + this.skip + ")";
};
lf.proc.JoinNode = function $lf$proc$JoinNode$($predicate$$, $isOuterJoin$$) {
  lf.proc.LogicalQueryPlanNode.call(this);
  this.predicate = $predicate$$;
  this.isOuterJoin = $isOuterJoin$$;
};
goog.inherits(lf.proc.JoinNode, lf.proc.LogicalQueryPlanNode);
lf.proc.JoinNode.prototype.toString = function $lf$proc$JoinNode$$toString$() {
  return "join(type: " + (this.isOuterJoin ? "outer" : "inner") + ", " + this.predicate.toString() + ")";
};
lf.tree = {};
lf.tree.map = function $lf$tree$map$($original$$, $mapFn$$) {
  var $copyParentStack$$ = [], $nextParent$$ = null, $copyRoot$$ = null;
  $original$$.traverse(function($node$$) {
    var $newNode$$ = $mapFn$$($node$$);
    null == $node$$.getParent() ? $copyRoot$$ = $newNode$$ : $nextParent$$.addChild($newNode$$);
    var $cloneIndex$$inline_4_original$$ = $node$$.getParent(), $clone$$ = $nextParent$$;
    goog.isNull($cloneIndex$$inline_4_original$$) || $cloneIndex$$inline_4_original$$.getChildCount() != $clone$$.getChildCount() || ($cloneIndex$$inline_4_original$$ = $copyParentStack$$.indexOf($clone$$), -1 != $cloneIndex$$inline_4_original$$ && $copyParentStack$$.splice($cloneIndex$$inline_4_original$$, 1));
    1 < $node$$.getChildCount() && $copyParentStack$$.push($newNode$$);
    $nextParent$$ = $node$$.isLeaf() ? $copyParentStack$$[$copyParentStack$$.length - 1] : $newNode$$;
  });
  return $copyRoot$$;
};
lf.tree.getLeafNodes = function $lf$tree$getLeafNodes$($node$$0$$) {
  return lf.tree.find($node$$0$$, function($node$$) {
    return $node$$.isLeaf();
  });
};
lf.tree.removeNode = function $lf$tree$removeNode$($node$$) {
  var $parentNode$$ = $node$$.getParent(), $originalIndex$$ = 0;
  goog.isNull($parentNode$$) || ($originalIndex$$ = $parentNode$$.getChildren().indexOf($node$$), $parentNode$$.removeChild($node$$));
  var $children$$ = $node$$.getChildren().slice();
  $children$$.forEach(function($child$$, $index$$) {
    $node$$.removeChild($child$$);
    goog.isNull($parentNode$$) || $parentNode$$.addChildAt($child$$, $originalIndex$$ + $index$$);
  });
  return {parent:$parentNode$$, children:$children$$};
};
lf.tree.insertNodeAt = function $lf$tree$insertNodeAt$($existingNode$$, $newNode$$) {
  $existingNode$$.getChildren().slice().forEach(function($child$$) {
    $existingNode$$.removeChild($child$$);
    $newNode$$.addChild($child$$);
  });
  $existingNode$$.addChild($newNode$$);
};
lf.tree.swapNodeWithChild = function $lf$tree$swapNodeWithChild$($node$$) {
  goog.asserts.assert(1 == $node$$.getChildCount());
  var $child$$ = $node$$.getChildAt(0);
  goog.asserts.assert(1 == $child$$.getChildCount());
  lf.tree.removeNode($node$$);
  lf.tree.insertNodeAt($child$$, $node$$);
  return $child$$;
};
lf.tree.pushNodeBelowChild = function $lf$tree$pushNodeBelowChild$($node$$, $shouldPushDownFn$$, $cloneFn$$) {
  goog.asserts.assert(1 == $node$$.getChildCount());
  var $child$$ = $node$$.getChildAt(0);
  goog.asserts.assert(1 < $child$$.getChildCount());
  var $grandChildren$$ = $child$$.getChildren().slice();
  if (!$grandChildren$$.some(function($grandChild$$) {
    return $shouldPushDownFn$$($grandChild$$);
  })) {
    return $node$$;
  }
  lf.tree.removeNode($node$$);
  $grandChildren$$.forEach(function($grandChild$$, $index$$) {
    if ($shouldPushDownFn$$($grandChild$$)) {
      var $newNode$$ = $cloneFn$$($node$$);
      $child$$.removeChildAt($index$$);
      $newNode$$.addChild($grandChild$$);
      $child$$.addChildAt($newNode$$, $index$$);
    }
  });
  return $child$$;
};
lf.tree.replaceChainWithChain = function $lf$tree$replaceChainWithChain$($oldHead_oldHeadIndex$$, $oldTail$$, $newHead$$, $newTail$$) {
  var $parentNode$$ = $oldHead_oldHeadIndex$$.getParent();
  goog.isNull($parentNode$$) || ($oldHead_oldHeadIndex$$ = $parentNode$$.getChildren().indexOf($oldHead_oldHeadIndex$$), $parentNode$$.removeChildAt($oldHead_oldHeadIndex$$), $parentNode$$.addChildAt($newHead$$, $oldHead_oldHeadIndex$$));
  $oldTail$$.getChildren().slice().forEach(function($child$$) {
    $oldTail$$.removeChild($child$$);
    $newTail$$.addChild($child$$);
  });
  return $newHead$$;
};
lf.tree.replaceNodeWithChain = function $lf$tree$replaceNodeWithChain$($node$$, $head$$, $tail$$) {
  return lf.tree.replaceChainWithChain($node$$, $node$$, $head$$, $tail$$);
};
lf.tree.replaceChainWithNode = function $lf$tree$replaceChainWithNode$($head$$, $tail$$, $node$$) {
  return lf.tree.replaceChainWithChain($head$$, $tail$$, $node$$, $node$$);
};
lf.tree.find = function $lf$tree$find$($root$$, $filterFn$$, $opt_stopFn$$) {
  var $results$$ = [], $filterRec$$ = function $$filterRec$$$($node$$) {
    $filterFn$$($node$$) && $results$$.push($node$$);
    goog.isDefAndNotNull($opt_stopFn$$) && $opt_stopFn$$($node$$) || $node$$.getChildren().forEach($filterRec$$);
  };
  $filterRec$$($root$$);
  return $results$$;
};
lf.tree.toString = function $lf$tree$toString$($rootNode$$, $opt_stringFn$$) {
  var $stringFn$$ = $opt_stringFn$$ || function($node$$) {
    return $node$$.toString() + "\n";
  }, $out$$ = "";
  $rootNode$$.traverse(function($node$$) {
    for (var $i$$ = 0;$i$$ < $node$$.getDepth();$i$$++) {
      $out$$ += "-";
    }
    $out$$ += $stringFn$$($node$$);
  });
  return $out$$;
};
lf.proc.AndPredicatePass = function $lf$proc$AndPredicatePass$() {
  lf.proc.RewritePass.call(this);
};
goog.inherits(lf.proc.AndPredicatePass, lf.proc.RewritePass);
lf.proc.AndPredicatePass.prototype.rewrite = function $lf$proc$AndPredicatePass$$rewrite$($rootNode$$) {
  this.rootNode = $rootNode$$;
  this.traverse_(this.rootNode);
  return this.rootNode;
};
lf.proc.AndPredicatePass.prototype.traverse_ = function $lf$proc$AndPredicatePass$$traverse_$($rootNode$$) {
  if ($rootNode$$ instanceof lf.proc.SelectNode) {
    goog.asserts.assert(1 == $rootNode$$.getChildCount(), "SelectNode must have exactly one child.");
    var $newNodes_predicates$$ = this.breakAndPredicate_($rootNode$$.predicate), $newNodes_predicates$$ = this.createSelectNodeChain_($newNodes_predicates$$);
    lf.tree.replaceNodeWithChain($rootNode$$, $newNodes_predicates$$[0], $newNodes_predicates$$[1]);
    $rootNode$$ == this.rootNode && (this.rootNode = $newNodes_predicates$$[0]);
    $rootNode$$ = $newNodes_predicates$$[0];
  }
  $rootNode$$.getChildren().forEach(function($child$$) {
    this.traverse_($child$$);
  }, this);
};
lf.proc.AndPredicatePass.prototype.breakAndPredicate_ = function $lf$proc$AndPredicatePass$$breakAndPredicate_$($predicate$$) {
  if (0 == $predicate$$.getChildCount() || $predicate$$.operator != lf.pred.Operator.AND) {
    return [$predicate$$];
  }
  var $predicates$$ = $predicate$$.getChildren().slice().map(function($childPredicate$$) {
    $predicate$$.removeChild($childPredicate$$);
    return this.breakAndPredicate_($childPredicate$$);
  }, this);
  return goog.array.flatten($predicates$$);
};
lf.proc.AndPredicatePass.prototype.createSelectNodeChain_ = function $lf$proc$AndPredicatePass$$createSelectNodeChain_$($predicates$$) {
  var $parentNode$$ = null, $lastNode$$ = null;
  $predicates$$.map(function($predicate$$, $index$$) {
    var $node$$ = new lf.proc.SelectNode($predicate$$);
    0 == $index$$ ? $parentNode$$ = $node$$ : $lastNode$$.addChild($node$$);
    $lastNode$$ = $node$$;
  }, this);
  return [$parentNode$$, $lastNode$$];
};
lf.proc.CrossProductPass = function $lf$proc$CrossProductPass$() {
  lf.proc.RewritePass.call(this);
};
goog.inherits(lf.proc.CrossProductPass, lf.proc.RewritePass);
lf.proc.CrossProductPass.prototype.rewrite = function $lf$proc$CrossProductPass$$rewrite$($rootNode$$, $queryContext$$) {
  if (3 > $queryContext$$.from.length) {
    return $rootNode$$;
  }
  this.rootNode = $rootNode$$;
  this.traverse_(this.rootNode);
  return this.rootNode;
};
lf.proc.CrossProductPass.prototype.traverse_ = function $lf$proc$CrossProductPass$$traverse_$($rootNode$$) {
  if ($rootNode$$ instanceof lf.proc.CrossProductNode) {
    for (;2 < $rootNode$$.getChildCount();) {
      for (var $crossProduct$$ = new lf.proc.CrossProductNode, $i$$ = 0;2 > $i$$;$i$$++) {
        var $child$$0$$ = $rootNode$$.removeChildAt(0);
        $crossProduct$$.addChild($child$$0$$);
      }
      $rootNode$$.addChildAt($crossProduct$$, 0);
    }
  }
  $rootNode$$.getChildren().forEach(function($child$$) {
    this.traverse_($child$$);
  }, this);
};
lf.proc.LogicalPlanGenerator = function $lf$proc$LogicalPlanGenerator$() {
};
lf.proc.LogicalPlanGenerator.prototype.generate = function $lf$proc$LogicalPlanGenerator$$generate$() {
};
lf.proc.BaseLogicalPlanGenerator = function $lf$proc$BaseLogicalPlanGenerator$($query$$) {
  this.query = $query$$;
  this.rootNode_ = null;
};
lf.proc.BaseLogicalPlanGenerator.prototype.generate = function $lf$proc$BaseLogicalPlanGenerator$$generate$() {
  goog.isNull(this.rootNode_) && (this.rootNode_ = this.generateInternal());
  return this.rootNode_;
};
lf.proc.InsertLogicalPlanGenerator = function $lf$proc$InsertLogicalPlanGenerator$($query$$) {
  lf.proc.BaseLogicalPlanGenerator.call(this, $query$$);
};
goog.inherits(lf.proc.InsertLogicalPlanGenerator, lf.proc.BaseLogicalPlanGenerator);
lf.proc.InsertLogicalPlanGenerator.prototype.generateInternal = function $lf$proc$InsertLogicalPlanGenerator$$generateInternal$() {
  return this.query.allowReplace ? new lf.proc.InsertOrReplaceNode(this.query.into, this.query.values) : new lf.proc.InsertNode(this.query.into, this.query.values);
};
lf.proc.UpdateLogicalPlanGenerator = function $lf$proc$UpdateLogicalPlanGenerator$($query$$) {
  lf.proc.BaseLogicalPlanGenerator.call(this, $query$$);
};
goog.inherits(lf.proc.UpdateLogicalPlanGenerator, lf.proc.BaseLogicalPlanGenerator);
lf.proc.UpdateLogicalPlanGenerator.prototype.generateInternal = function $lf$proc$UpdateLogicalPlanGenerator$$generateInternal$() {
  var $updateNode$$ = new lf.proc.UpdateNode(this.query.table, this.query.set), $selectNode$$ = goog.isDefAndNotNull(this.query.where) ? new lf.proc.SelectNode(this.query.where.copy()) : null, $tableAccessNode$$ = new lf.proc.TableAccessNode(this.query.table);
  goog.isNull($selectNode$$) ? $updateNode$$.addChild($tableAccessNode$$) : ($selectNode$$.addChild($tableAccessNode$$), $updateNode$$.addChild($selectNode$$));
  return $updateNode$$;
};
lf.proc.LogicalPlanRewriter = function $lf$proc$LogicalPlanRewriter$($rootNode$$, $queryContext$$, $rewritePasses$$) {
  this.rootNode_ = $rootNode$$;
  this.queryContext_ = $queryContext$$;
  this.rewritePasses_ = $rewritePasses$$;
};
lf.proc.LogicalPlanRewriter.prototype.generate = function $lf$proc$LogicalPlanRewriter$$generate$() {
  this.rewritePasses_.forEach(function($rewritePass$$) {
    this.rootNode_ = $rewritePass$$.rewrite(this.rootNode_, this.queryContext_);
  }, this);
  return this.rootNode_;
};
lf.proc.DeleteLogicalPlanGenerator = function $lf$proc$DeleteLogicalPlanGenerator$($query$$, $rewritePasses$$) {
  lf.proc.BaseLogicalPlanGenerator.call(this, $query$$);
  this.rewritePasses_ = $rewritePasses$$;
};
goog.inherits(lf.proc.DeleteLogicalPlanGenerator, lf.proc.BaseLogicalPlanGenerator);
lf.proc.DeleteLogicalPlanGenerator.prototype.generateInternal = function $lf$proc$DeleteLogicalPlanGenerator$$generateInternal$() {
  var $deleteNode$$ = new lf.proc.DeleteNode(this.query.from), $selectNode$$ = goog.isDefAndNotNull(this.query.where) ? new lf.proc.SelectNode(this.query.where.copy()) : null, $tableAccessNode$$ = new lf.proc.TableAccessNode(this.query.from);
  goog.isNull($selectNode$$) ? $deleteNode$$.addChild($tableAccessNode$$) : ($selectNode$$.addChild($tableAccessNode$$), $deleteNode$$.addChild($selectNode$$));
  return (new lf.proc.LogicalPlanRewriter($deleteNode$$, this.query, this.rewritePasses_)).generate();
};
lf.pred.JoinPredicate = function $lf$pred$JoinPredicate$($leftColumn_registry$$, $rightColumn$$, $evaluatorType$$) {
  lf.pred.PredicateNode.call(this);
  this.leftColumn = $leftColumn_registry$$;
  this.rightColumn = $rightColumn$$;
  this.evaluatorType = $evaluatorType$$;
  this.nullPayload_ = null;
  $leftColumn_registry$$ = lf.eval.Registry.get();
  this.evaluatorFn_ = $leftColumn_registry$$.getEvaluator(this.leftColumn.getType(), this.evaluatorType);
  this.keyOfIndexFn_ = $leftColumn_registry$$.getKeyOfIndexEvaluator(this.leftColumn.getType());
};
goog.inherits(lf.pred.JoinPredicate, lf.pred.PredicateNode);
lf.pred.JoinPredicate.BLOCK_SIZE_EXPONENT_ = 8;
lf.pred.JoinPredicate.prototype.copy = function $lf$pred$JoinPredicate$$copy$() {
  var $clone$$ = new lf.pred.JoinPredicate(this.leftColumn, this.rightColumn, this.evaluatorType);
  $clone$$.setId(this.getId());
  return $clone$$;
};
lf.pred.JoinPredicate.prototype.getColumns = function $lf$pred$JoinPredicate$$getColumns$($opt_results$$) {
  return goog.isDefAndNotNull($opt_results$$) ? ($opt_results$$.push(this.leftColumn), $opt_results$$.push(this.rightColumn), $opt_results$$) : [this.leftColumn, this.rightColumn];
};
lf.pred.JoinPredicate.prototype.getTables = function $lf$pred$JoinPredicate$$getTables$($opt_results$$4_tables$$) {
  $opt_results$$4_tables$$ = goog.isDefAndNotNull($opt_results$$4_tables$$) ? $opt_results$$4_tables$$ : lf.structs.set.create();
  $opt_results$$4_tables$$.add(this.leftColumn.getTable());
  $opt_results$$4_tables$$.add(this.rightColumn.getTable());
  return $opt_results$$4_tables$$;
};
lf.pred.JoinPredicate.prototype.reverse = function $lf$pred$JoinPredicate$$reverse$() {
  var $evaluatorType$$ = this.evaluatorType;
  switch(this.evaluatorType) {
    case lf.eval.Type.GT:
      $evaluatorType$$ = lf.eval.Type.LT;
      break;
    case lf.eval.Type.LT:
      $evaluatorType$$ = lf.eval.Type.GT;
      break;
    case lf.eval.Type.GTE:
      $evaluatorType$$ = lf.eval.Type.LTE;
      break;
    case lf.eval.Type.LTE:
      $evaluatorType$$ = lf.eval.Type.GTE;
  }
  return new lf.pred.JoinPredicate(this.rightColumn, this.leftColumn, $evaluatorType$$);
};
lf.pred.JoinPredicate.prototype.reverseSelf_ = function $lf$pred$JoinPredicate$$reverseSelf_$() {
  var $evaluatorType$$4_temp$$ = this.leftColumn;
  this.leftColumn = this.rightColumn;
  this.rightColumn = $evaluatorType$$4_temp$$;
  $evaluatorType$$4_temp$$ = this.evaluatorType;
  switch(this.evaluatorType) {
    case lf.eval.Type.GT:
      $evaluatorType$$4_temp$$ = lf.eval.Type.LT;
      break;
    case lf.eval.Type.LT:
      $evaluatorType$$4_temp$$ = lf.eval.Type.GT;
      break;
    case lf.eval.Type.GTE:
      $evaluatorType$$4_temp$$ = lf.eval.Type.LTE;
      break;
    case lf.eval.Type.LTE:
      $evaluatorType$$4_temp$$ = lf.eval.Type.GTE;
      break;
    default:
      return;
  }
  this.evaluatorType = $evaluatorType$$4_temp$$;
  this.evaluatorFn_ = lf.eval.Registry.get().getEvaluator(this.leftColumn.getType(), this.evaluatorType);
};
lf.pred.JoinPredicate.prototype.eval = function $lf$pred$JoinPredicate$$eval$($relation$$) {
  var $entries$$ = $relation$$.entries.filter(function($entry$$) {
    var $leftValue$$ = $entry$$.getField(this.leftColumn);
    $entry$$ = $entry$$.getField(this.rightColumn);
    return this.evaluatorFn_($leftValue$$, $entry$$);
  }, this);
  return new lf.proc.Relation($entries$$, $relation$$.getTables());
};
lf.pred.JoinPredicate.prototype.toString = function $lf$pred$JoinPredicate$$toString$() {
  return "join_pred(" + this.leftColumn.getNormalizedName() + " " + this.evaluatorType + " " + this.rightColumn.getNormalizedName() + ")";
};
lf.pred.JoinPredicate.prototype.appliesToLeft_ = function $lf$pred$JoinPredicate$$appliesToLeft_$($relation$$) {
  return -1 != $relation$$.getTables().indexOf(this.leftColumn.getTable().getEffectiveName());
};
lf.pred.JoinPredicate.prototype.appliesToRight_ = function $lf$pred$JoinPredicate$$appliesToRight_$($relation$$) {
  return -1 != $relation$$.getTables().indexOf(this.rightColumn.getTable().getEffectiveName());
};
lf.pred.JoinPredicate.prototype.detectLeftRight_ = function $lf$pred$JoinPredicate$$detectLeftRight_$($relation1$$, $relation2$$) {
  var $left$$ = null, $right$$ = null;
  this.appliesToLeft_($relation1$$) ? (this.assertRelationsApply_($relation1$$, $relation2$$), $left$$ = $relation1$$, $right$$ = $relation2$$) : (this.assertRelationsApply_($relation2$$, $relation1$$), $left$$ = $relation2$$, $right$$ = $relation1$$);
  return $left$$.entries.length > $right$$.entries.length ? (this.reverseSelf_(), this.assertRelationsApply_($right$$, $left$$), [$right$$, $left$$]) : [$left$$, $right$$];
};
lf.pred.JoinPredicate.prototype.assertRelationsApply_ = function $lf$pred$JoinPredicate$$assertRelationsApply_$($leftRelation$$, $rightRelation$$) {
  goog.asserts.assert(this.appliesToLeft_($leftRelation$$), "Mismatch between join predicate left operand and right relation.");
  goog.asserts.assert(this.appliesToRight_($rightRelation$$), "Mismatch between join predicate right operand and right relation.");
};
lf.pred.JoinPredicate.prototype.createNullPayload_ = function $lf$pred$JoinPredicate$$createNullPayload_$($table$$) {
  var $payload$$ = {};
  $table$$.getColumns().forEach(function($column$$) {
    $payload$$[$column$$.getName()] = null;
  });
  return $payload$$;
};
lf.pred.JoinPredicate.prototype.createCombinedEntryForUnmatched_ = function $lf$pred$JoinPredicate$$createCombinedEntryForUnmatched_$($entry$$, $leftRelationTables$$) {
  goog.isNull(this.nullPayload_) && (this.nullPayload_ = this.createNullPayload_(this.rightColumn.getTable()));
  var $nullEntry$$ = new lf.proc.RelationEntry(new lf.Row(lf.Row.DUMMY_ID, this.nullPayload_), !1);
  return lf.proc.RelationEntry.combineEntries($entry$$, $leftRelationTables$$, $nullEntry$$, [this.rightColumn.getTable().getEffectiveName()]);
};
lf.pred.JoinPredicate.prototype.evalRelationsNestedLoopJoin = function $lf$pred$JoinPredicate$$evalRelationsNestedLoopJoin$($leftRelation$$, $rightRelation$$, $isOuterJoin$$) {
  var $combinedEntries_leftRightRelations$$ = [$leftRelation$$, $rightRelation$$];
  $isOuterJoin$$ || ($combinedEntries_leftRightRelations$$ = this.detectLeftRight_($leftRelation$$, $rightRelation$$));
  $leftRelation$$ = $combinedEntries_leftRightRelations$$[0];
  $rightRelation$$ = $combinedEntries_leftRightRelations$$[1];
  for (var $combinedEntries_leftRightRelations$$ = [], $leftRelationTables$$ = $leftRelation$$.getTables(), $rightRelationTables$$ = $rightRelation$$.getTables(), $leftEntriesLength$$ = $leftRelation$$.entries.length, $rightEntriesLength$$ = $rightRelation$$.entries.length, $blockNumBits$$ = lf.pred.JoinPredicate.BLOCK_SIZE_EXPONENT_, $blockCount$$ = $rightEntriesLength$$ + (1 << $blockNumBits$$) - 1 >> $blockNumBits$$, $currentBlock$$ = 0;$currentBlock$$ < $blockCount$$;) {
    for (var $i$$ = 0;$i$$ < $leftEntriesLength$$;$i$$++) {
      var $matchFound$$ = !1, $leftValue$$ = $leftRelation$$.entries[$i$$].getField(this.leftColumn);
      if (!goog.isNull($leftValue$$)) {
        for (var $rightLimit$$ = Math.min($currentBlock$$ + 1 << $blockNumBits$$, $rightEntriesLength$$), $j$$ = $currentBlock$$ << $blockNumBits$$;$j$$ < $rightLimit$$;$j$$++) {
          if (this.evaluatorFn_($leftValue$$, $rightRelation$$.entries[$j$$].getField(this.rightColumn))) {
            var $matchFound$$ = !0, $combinedEntry$$ = lf.proc.RelationEntry.combineEntries($leftRelation$$.entries[$i$$], $leftRelationTables$$, $rightRelation$$.entries[$j$$], $rightRelationTables$$);
            $combinedEntries_leftRightRelations$$.push($combinedEntry$$);
          }
        }
      }
      $isOuterJoin$$ && !$matchFound$$ && $combinedEntries_leftRightRelations$$.push(this.createCombinedEntryForUnmatched_($leftRelation$$.entries[$i$$], $leftRelationTables$$));
    }
    $currentBlock$$++;
  }
  $leftRelation$$ = $leftRelation$$.getTables().concat($rightRelation$$.getTables());
  return new lf.proc.Relation($combinedEntries_leftRightRelations$$, $leftRelation$$);
};
lf.pred.JoinPredicate.prototype.evalRelationsHashJoin = function $lf$pred$JoinPredicate$$evalRelationsHashJoin$($leftRelation$$2_srcTables$$, $rightRelation$$, $isOuterJoin$$) {
  var $leftRightRelations$$ = [$leftRelation$$2_srcTables$$, $rightRelation$$];
  $isOuterJoin$$ || ($leftRightRelations$$ = this.detectLeftRight_($leftRelation$$2_srcTables$$, $rightRelation$$));
  $leftRelation$$2_srcTables$$ = $leftRightRelations$$[0];
  $rightRelation$$ = $leftRightRelations$$[1];
  var $leftRightRelations$$ = $leftRelation$$2_srcTables$$, $maxRelation$$ = $rightRelation$$, $minColumn$$ = this.leftColumn, $maxColumn$$ = this.rightColumn;
  $isOuterJoin$$ && ($leftRightRelations$$ = $rightRelation$$, $maxRelation$$ = $leftRelation$$2_srcTables$$, $minColumn$$ = this.rightColumn, $maxColumn$$ = this.leftColumn);
  var $map$$ = new lf.structs.MapSet, $combinedEntries$$ = [];
  $leftRightRelations$$.entries.forEach(function($entry$$) {
    var $key$$ = String($entry$$.getField($minColumn$$));
    $map$$.set($key$$, $entry$$);
  });
  var $minRelationTableNames$$ = $leftRightRelations$$.getTables(), $maxRelationTableNames$$ = $maxRelation$$.getTables();
  $maxRelation$$.entries.forEach(function($entry$$) {
    var $value$$ = $entry$$.getField($maxColumn$$), $key$$ = String($value$$);
    !goog.isNull($value$$) && $map$$.has($key$$) ? $map$$.get($key$$).forEach(function($combinedEntry$$) {
      $combinedEntry$$ = lf.proc.RelationEntry.combineEntries($entry$$, $maxRelationTableNames$$, $combinedEntry$$, $minRelationTableNames$$);
      $combinedEntries$$.push($combinedEntry$$);
    }) : $isOuterJoin$$ && $combinedEntries$$.push(this.createCombinedEntryForUnmatched_($entry$$, $maxRelationTableNames$$));
  }.bind(this));
  $leftRelation$$2_srcTables$$ = $leftRelation$$2_srcTables$$.getTables().concat($rightRelation$$.getTables());
  return new lf.proc.Relation($combinedEntries$$, $leftRelation$$2_srcTables$$);
};
lf.pred.JoinPredicate.prototype.evalRelationsIndexNestedLoopJoin = function $lf$pred$JoinPredicate$$evalRelationsIndexNestedLoopJoin$($leftRelation$$3_srcTables$$, $rightRelation$$, $indexJoinInfo$$, $cache$$) {
  goog.asserts.assert(this.evaluatorType == lf.eval.Type.EQ, "For now, index nested loop join can only be leveraged for EQ.");
  var $indexedTable$$ = $indexJoinInfo$$.indexedColumn.getTable(), $outerRelation$$ = $leftRelation$$3_srcTables$$, $innerRelation$$ = $rightRelation$$;
  -1 != $leftRelation$$3_srcTables$$.getTables().indexOf($indexedTable$$.getEffectiveName()) && ($outerRelation$$ = $rightRelation$$, $innerRelation$$ = $leftRelation$$3_srcTables$$);
  var $combinedEntries$$ = [], $innerRelationTables$$ = $innerRelation$$.getTables(), $outerRelationTables$$ = $outerRelation$$.getTables(), $pushCombinedEntry$$ = function $$pushCombinedEntry$$$($outerEntry$$, $row$$) {
    var $combinedEntry$$3_innerEntry$$ = new lf.proc.RelationEntry($row$$, 1 < $innerRelationTables$$.length), $combinedEntry$$3_innerEntry$$ = lf.proc.RelationEntry.combineEntries($outerEntry$$, $outerRelationTables$$, $combinedEntry$$3_innerEntry$$, $innerRelationTables$$);
    $combinedEntries$$.push($combinedEntry$$3_innerEntry$$);
  };
  $outerRelation$$.entries.forEach(function($entry$$) {
    var $keyOfIndex_matchingRowIds$$ = this.keyOfIndexFn_($entry$$.getField($indexJoinInfo$$.nonIndexedColumn)), $keyOfIndex_matchingRowIds$$ = $indexJoinInfo$$.index.get($keyOfIndex_matchingRowIds$$);
    0 != $keyOfIndex_matchingRowIds$$.length && ($indexJoinInfo$$.index.isUniqueKey() ? $pushCombinedEntry$$($entry$$, $cache$$.get($keyOfIndex_matchingRowIds$$[0])) : $cache$$.getMany($keyOfIndex_matchingRowIds$$).forEach($pushCombinedEntry$$.bind(null, $entry$$)));
  }, this);
  $leftRelation$$3_srcTables$$ = $outerRelation$$.getTables().concat($innerRelation$$.getTables());
  return new lf.proc.Relation($combinedEntries$$, $leftRelation$$3_srcTables$$);
};
lf.proc.ImplicitJoinsPass = function $lf$proc$ImplicitJoinsPass$() {
  lf.proc.RewritePass.call(this);
};
goog.inherits(lf.proc.ImplicitJoinsPass, lf.proc.RewritePass);
lf.proc.ImplicitJoinsPass.prototype.rewrite = function $lf$proc$ImplicitJoinsPass$$rewrite$($rootNode$$, $queryContext$$) {
  if (2 > $queryContext$$.from.length) {
    return $rootNode$$;
  }
  this.rootNode = $rootNode$$;
  this.traverse_(this.rootNode, $queryContext$$);
  return this.rootNode;
};
lf.proc.ImplicitJoinsPass.prototype.traverse_ = function $lf$proc$ImplicitJoinsPass$$traverse_$($rootNode$$, $queryContext$$) {
  if ($rootNode$$ instanceof lf.proc.SelectNode && $rootNode$$.predicate instanceof lf.pred.JoinPredicate) {
    goog.asserts.assert(1 == $rootNode$$.getChildCount(), "SelectNode must have exactly one child.");
    var $isOuterJoin$$ = $rootNode$$.predicate.getId(), $child$$0$$ = $rootNode$$.getChildAt(0);
    $child$$0$$ instanceof lf.proc.CrossProductNode && ($isOuterJoin$$ = goog.isDefAndNotNull($queryContext$$.outerJoinPredicates) && $queryContext$$.outerJoinPredicates.has($isOuterJoin$$), $isOuterJoin$$ = new lf.proc.JoinNode($rootNode$$.predicate, $isOuterJoin$$), lf.tree.replaceChainWithNode($rootNode$$, $child$$0$$, $isOuterJoin$$), $rootNode$$ == this.rootNode && (this.rootNode = $isOuterJoin$$), $rootNode$$ = $isOuterJoin$$);
  }
  $rootNode$$.getChildren().forEach(function($child$$) {
    this.traverse_($child$$, $queryContext$$);
  }, this);
};
lf.proc.PushDownSelectionsPass = function $lf$proc$PushDownSelectionsPass$() {
  lf.proc.RewritePass.call(this);
  this.alreadyPushedDown_ = lf.structs.set.create();
};
goog.inherits(lf.proc.PushDownSelectionsPass, lf.proc.RewritePass);
lf.proc.PushDownSelectionsPass.prototype.clear_ = function $lf$proc$PushDownSelectionsPass$$clear_$() {
  this.alreadyPushedDown_.clear();
};
lf.proc.PushDownSelectionsPass.prototype.rewrite = function $lf$proc$PushDownSelectionsPass$$rewrite$($rootNode$$, $queryContext$$) {
  if (!goog.isDef($queryContext$$.where)) {
    return $rootNode$$;
  }
  this.clear_();
  this.rootNode = $rootNode$$;
  this.traverse_(this.rootNode);
  this.clear_();
  return this.rootNode;
};
lf.proc.PushDownSelectionsPass.prototype.traverse_ = function $lf$proc$PushDownSelectionsPass$$traverse_$($node$$) {
  if (this.isCandidateNode_($node$$)) {
    var $selectNodeTables$$ = $node$$.predicate.getTables(), $newRoot$$1_shouldPushDownFn$$ = function($child$$) {
      return this.doesReferToTables_($child$$, $selectNodeTables$$);
    }.bind(this), $newRoot$$1_shouldPushDownFn$$ = this.pushDownNodeRec_($node$$, $newRoot$$1_shouldPushDownFn$$);
    this.alreadyPushedDown_.add($node$$);
    $newRoot$$1_shouldPushDownFn$$ == $node$$ && ($newRoot$$1_shouldPushDownFn$$ = $node$$.getChildAt(0));
    goog.isNull($newRoot$$1_shouldPushDownFn$$) || (goog.isNull($newRoot$$1_shouldPushDownFn$$.getParent()) && (this.rootNode = $newRoot$$1_shouldPushDownFn$$), this.isCandidateNode_($newRoot$$1_shouldPushDownFn$$) && !this.alreadyPushedDown_.has($newRoot$$1_shouldPushDownFn$$) && this.traverse_($newRoot$$1_shouldPushDownFn$$));
  } else {
    $node$$.getChildren().forEach(function($child$$) {
      this.traverse_($child$$);
    }, this);
  }
};
lf.proc.PushDownSelectionsPass.prototype.pushDownNodeRec_ = function $lf$proc$PushDownSelectionsPass$$pushDownNodeRec_$($node$$, $shouldPushDownFn$$) {
  var $newRoot$$ = $node$$;
  if (this.shouldSwapWithChild_($node$$)) {
    $newRoot$$ = lf.tree.swapNodeWithChild($node$$), this.pushDownNodeRec_($node$$, $shouldPushDownFn$$);
  } else {
    if (this.shouldPushBelowChild_($node$$)) {
      var $newNodes$$ = [], $newRoot$$ = lf.tree.pushNodeBelowChild($node$$, $shouldPushDownFn$$, function($newNode$$6_node$$) {
        $newNode$$6_node$$ = new lf.proc.SelectNode($newNode$$6_node$$.predicate);
        $newNodes$$.push($newNode$$6_node$$);
        return $newNode$$6_node$$;
      });
      $newNodes$$.forEach(function($newNode$$) {
        this.pushDownNodeRec_($newNode$$, $shouldPushDownFn$$);
      }, this);
    }
  }
  return $newRoot$$;
};
lf.proc.PushDownSelectionsPass.prototype.doesReferToTables_ = function $lf$proc$PushDownSelectionsPass$$doesReferToTables_$($root$$, $tables$$) {
  var $referredTables$$ = lf.structs.set.create();
  lf.tree.getLeafNodes($root$$).forEach(function($tableAccessNode$$) {
    $referredTables$$.add($tableAccessNode$$.table);
  }, this);
  $root$$ instanceof lf.proc.TableAccessNode && $referredTables$$.add($root$$.table);
  return lf.structs.set.isSubset($referredTables$$, $tables$$);
};
lf.proc.PushDownSelectionsPass.prototype.isCandidateNode_ = function $lf$proc$PushDownSelectionsPass$$isCandidateNode_$($node$$) {
  return $node$$ instanceof lf.proc.SelectNode;
};
lf.proc.PushDownSelectionsPass.prototype.shouldPushBelowChild_ = function $lf$proc$PushDownSelectionsPass$$shouldPushBelowChild_$($child$$20_node$$) {
  $child$$20_node$$ = $child$$20_node$$.getChildAt(0);
  return $child$$20_node$$ instanceof lf.proc.CrossProductNode || $child$$20_node$$ instanceof lf.proc.JoinNode;
};
lf.proc.PushDownSelectionsPass.prototype.shouldSwapWithChild_ = function $lf$proc$PushDownSelectionsPass$$shouldSwapWithChild_$($node$$) {
  return $node$$.getChildAt(0) instanceof lf.proc.SelectNode;
};
lf.proc.SelectLogicalPlanGenerator = function $lf$proc$SelectLogicalPlanGenerator$($query$$, $rewritePasses$$) {
  lf.proc.BaseLogicalPlanGenerator.call(this, $query$$);
  this.rewritePasses_ = $rewritePasses$$;
  this.projectNode_ = this.limitNode_ = this.skipNode_ = this.orderByNode_ = this.aggregationNode_ = this.groupByNode_ = this.selectNode_ = this.crossProductNode_ = this.tableAccessNodes_ = null;
};
goog.inherits(lf.proc.SelectLogicalPlanGenerator, lf.proc.BaseLogicalPlanGenerator);
lf.proc.SelectLogicalPlanGenerator.prototype.generateInternal = function $lf$proc$SelectLogicalPlanGenerator$$generateInternal$() {
  this.generateNodes_();
  var $rootNode$$ = this.connectNodes_();
  return (new lf.proc.LogicalPlanRewriter($rootNode$$, this.query, this.rewritePasses_)).generate();
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateNodes_ = function $lf$proc$SelectLogicalPlanGenerator$$generateNodes_$() {
  this.generateTableAccessNodes_();
  this.generateCrossProductNode_();
  this.generateSelectNode_();
  this.generateOrderByNode_();
  this.generateSkipNode_();
  this.generateLimitNode_();
  this.generateGroupByNode_();
  this.generateAggregationNode_();
  this.generateProjectNode_();
};
lf.proc.SelectLogicalPlanGenerator.prototype.connectNodes_ = function $lf$proc$SelectLogicalPlanGenerator$$connectNodes_$() {
  for (var $parentOrder$$ = [this.limitNode_, this.skipNode_, this.projectNode_, this.orderByNode_, this.aggregationNode_, this.groupByNode_, this.selectNode_, this.crossProductNode_], $lastExistingParentIndex$$ = null, $rootNode$$ = null, $i$$ = 0;$i$$ < $parentOrder$$.length;$i$$++) {
    var $node$$ = $parentOrder$$[$i$$];
    goog.isNull($node$$) || (goog.isNull($rootNode$$) ? $rootNode$$ = $node$$ : $parentOrder$$[$lastExistingParentIndex$$].addChild($node$$), $lastExistingParentIndex$$ = $i$$);
  }
  this.tableAccessNodes_.forEach(function($tableAccessNode$$) {
    $parentOrder$$[$lastExistingParentIndex$$].addChild($tableAccessNode$$);
  });
  return $rootNode$$;
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateTableAccessNodes_ = function $lf$proc$SelectLogicalPlanGenerator$$generateTableAccessNodes_$() {
  this.tableAccessNodes_ = this.query.from.map(function($table$$) {
    return new lf.proc.TableAccessNode($table$$);
  }, this);
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateCrossProductNode_ = function $lf$proc$SelectLogicalPlanGenerator$$generateCrossProductNode_$() {
  2 <= this.query.from.length && (this.crossProductNode_ = new lf.proc.CrossProductNode);
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateSelectNode_ = function $lf$proc$SelectLogicalPlanGenerator$$generateSelectNode_$() {
  this.selectNode_ = goog.isDefAndNotNull(this.query.where) ? new lf.proc.SelectNode(this.query.where.copy()) : null;
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateOrderByNode_ = function $lf$proc$SelectLogicalPlanGenerator$$generateOrderByNode_$() {
  this.query.orderBy && (this.orderByNode_ = new lf.proc.OrderByNode(this.query.orderBy));
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateLimitNode_ = function $lf$proc$SelectLogicalPlanGenerator$$generateLimitNode_$() {
  goog.isDefAndNotNull(this.query.limit) && (this.limitNode_ = new lf.proc.LimitNode(this.query.limit));
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateSkipNode_ = function $lf$proc$SelectLogicalPlanGenerator$$generateSkipNode_$() {
  goog.isDefAndNotNull(this.query.skip) && 0 < this.query.skip && (this.skipNode_ = new lf.proc.SkipNode(this.query.skip));
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateGroupByNode_ = function $lf$proc$SelectLogicalPlanGenerator$$generateGroupByNode_$() {
  goog.isDefAndNotNull(this.query.groupBy) && (this.groupByNode_ = new lf.proc.GroupByNode(this.query.groupBy));
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateAggregationNode_ = function $lf$proc$SelectLogicalPlanGenerator$$generateAggregationNode_$() {
  var $aggregatedColumns$$ = this.query.columns.filter(function($column$$) {
    return $column$$ instanceof lf.fn.AggregatedColumn;
  });
  goog.isDefAndNotNull(this.query.orderBy) && this.query.orderBy.forEach(function($orderBy$$) {
    $orderBy$$.column instanceof lf.fn.AggregatedColumn && $aggregatedColumns$$.push($orderBy$$.column);
  });
  0 < $aggregatedColumns$$.length && (this.aggregationNode_ = new lf.proc.AggregationNode($aggregatedColumns$$));
};
lf.proc.SelectLogicalPlanGenerator.prototype.generateProjectNode_ = function $lf$proc$SelectLogicalPlanGenerator$$generateProjectNode_$() {
  this.projectNode_ = new lf.proc.ProjectNode(this.query.columns || [], this.query.groupBy || null);
};
lf.query.DeleteContext = function $lf$query$DeleteContext$($schema$$) {
  lf.query.Context.call(this, $schema$$);
};
goog.inherits(lf.query.DeleteContext, lf.query.Context);
lf.query.DeleteContext.prototype.getScope = function $lf$query$DeleteContext$$getScope$() {
  var $scope$$ = lf.structs.set.create();
  $scope$$.add(this.from);
  this.expandTableScope_(this.from.getName(), $scope$$);
  return $scope$$;
};
lf.query.DeleteContext.prototype.expandTableScope_ = function $lf$query$DeleteContext$$expandTableScope_$($tableName$$, $scopeSoFar$$) {
  var $cascadeChildTables$$ = this.schema.info().getChildTables($tableName$$, lf.ConstraintAction.CASCADE);
  this.schema.info().getChildTables($tableName$$).forEach($scopeSoFar$$.add.bind($scopeSoFar$$));
  $cascadeChildTables$$.forEach(function($childTable$$) {
    this.expandTableScope_($childTable$$.getName(), $scopeSoFar$$);
  }, this);
};
lf.query.DeleteContext.prototype.clone = function $lf$query$DeleteContext$$clone$() {
  var $context$$ = new lf.query.DeleteContext(this.schema);
  $context$$.cloneBase(this);
  $context$$.from = this.from;
  return $context$$;
};
lf.query.DeleteContext.prototype.bind = function $lf$query$DeleteContext$$bind$($values$$) {
  lf.query.DeleteContext.superClass_.bind.call(this, $values$$);
  this.bindValuesInSearchCondition($values$$);
  return this;
};
lf.query.InsertContext = function $lf$query$InsertContext$($schema$$) {
  lf.query.Context.call(this, $schema$$);
};
goog.inherits(lf.query.InsertContext, lf.query.Context);
lf.query.InsertContext.prototype.getScope = function $lf$query$InsertContext$$getScope$() {
  var $scope$$ = lf.structs.set.create();
  $scope$$.add(this.into);
  var $info$$ = this.schema.info();
  $info$$.getParentTables(this.into.getName()).forEach($scope$$.add.bind($scope$$));
  this.allowReplace && $info$$.getChildTables(this.into.getName()).forEach($scope$$.add.bind($scope$$));
  return $scope$$;
};
lf.query.InsertContext.prototype.clone = function $lf$query$InsertContext$$clone$() {
  var $context$$ = new lf.query.InsertContext(this.schema);
  $context$$.cloneBase(this);
  $context$$.into = this.into;
  this.values && ($context$$.values = this.values instanceof lf.Binder ? this.values : this.values.slice());
  $context$$.allowReplace = this.allowReplace;
  $context$$.binder = this.binder;
  return $context$$;
};
lf.query.InsertContext.prototype.bind = function $lf$query$InsertContext$$bind$($values$$) {
  lf.query.InsertContext.superClass_.bind.call(this, $values$$);
  this.binder && (this.values = this.binder instanceof lf.Binder ? $values$$[this.binder.getIndex()] : this.binder.map(function($val$$) {
    return $val$$ instanceof lf.Binder ? $values$$[$val$$.getIndex()] : $val$$;
  }));
  return this;
};
lf.query.UpdateContext = function $lf$query$UpdateContext$($schema$$) {
  lf.query.Context.call(this, $schema$$);
};
goog.inherits(lf.query.UpdateContext, lf.query.Context);
lf.query.UpdateContext.prototype.getScope = function $lf$query$UpdateContext$$getScope$() {
  var $scope$$ = lf.structs.set.create();
  $scope$$.add(this.table);
  var $columns$$ = this.set.map(function($col$$) {
    return $col$$.column.getNormalizedName();
  }), $info$$ = this.schema.info();
  $info$$.getParentTablesByColumns($columns$$).forEach($scope$$.add.bind($scope$$));
  $info$$.getChildTablesByColumns($columns$$).forEach($scope$$.add.bind($scope$$));
  return $scope$$;
};
lf.query.UpdateContext.prototype.clone = function $lf$query$UpdateContext$$clone$() {
  var $context$$ = new lf.query.UpdateContext(this.schema);
  $context$$.cloneBase(this);
  $context$$.table = this.table;
  $context$$.set = this.set ? this.set.slice() : this.set;
  return $context$$;
};
lf.query.UpdateContext.prototype.bind = function $lf$query$UpdateContext$$bind$($values$$) {
  lf.query.UpdateContext.superClass_.bind.call(this, $values$$);
  this.set.forEach(function($set$$) {
    -1 != $set$$.binding && ($set$$.value = $values$$[$set$$.binding]);
  });
  this.bindValuesInSearchCondition($values$$);
  return this;
};
lf.proc.LogicalPlanFactory = function $lf$proc$LogicalPlanFactory$() {
  this.selectOptimizationPasses_ = [new lf.proc.AndPredicatePass, new lf.proc.CrossProductPass, new lf.proc.PushDownSelectionsPass, new lf.proc.ImplicitJoinsPass];
  this.deleteOptimizationPasses_ = [new lf.proc.AndPredicatePass];
};
lf.proc.LogicalPlanFactory.prototype.create = function $lf$proc$LogicalPlanFactory$$create$($query$$) {
  var $generator_rootNode$$ = null;
  if ($query$$ instanceof lf.query.InsertContext) {
    $generator_rootNode$$ = new lf.proc.InsertLogicalPlanGenerator($query$$);
  } else {
    if ($query$$ instanceof lf.query.DeleteContext) {
      $generator_rootNode$$ = new lf.proc.DeleteLogicalPlanGenerator($query$$, this.deleteOptimizationPasses_);
    } else {
      if ($query$$ instanceof lf.query.SelectContext) {
        $generator_rootNode$$ = new lf.proc.SelectLogicalPlanGenerator($query$$, this.selectOptimizationPasses_);
      } else {
        if ($query$$ instanceof lf.query.UpdateContext) {
          $generator_rootNode$$ = new lf.proc.UpdateLogicalPlanGenerator($query$$);
        } else {
          throw new lf.Exception(513);
        }
      }
    }
  }
  $generator_rootNode$$ = $generator_rootNode$$.generate();
  return new lf.proc.LogicalQueryPlan($generator_rootNode$$, $query$$.getScope());
};
lf.fn.Type = {AVG:"AVG", COUNT:"COUNT", DISTINCT:"DISTINCT", GEOMEAN:"GEOMEAN", MAX:"MAX", MIN:"MIN", STDDEV:"STDDEV", SUM:"SUM", AS_ARRAY:"AS_ARRAY"};
lf.fn.avg = function $lf$fn$avg$($col$$) {
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.AVG);
};
goog.exportSymbol("lf.fn.avg", lf.fn.avg);
lf.fn.count = function $lf$fn$count$($col$$) {
  $col$$ = $col$$ || new lf.fn.StarColumn;
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.COUNT);
};
goog.exportSymbol("lf.fn.count", lf.fn.count);
lf.fn.distinct = function $lf$fn$distinct$($col$$) {
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.DISTINCT);
};
goog.exportSymbol("lf.fn.distinct", lf.fn.distinct);
lf.fn.max = function $lf$fn$max$($col$$) {
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.MAX);
};
goog.exportSymbol("lf.fn.max", lf.fn.max);
lf.fn.min = function $lf$fn$min$($col$$) {
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.MIN);
};
goog.exportSymbol("lf.fn.min", lf.fn.min);
lf.fn.stddev = function $lf$fn$stddev$($col$$) {
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.STDDEV);
};
goog.exportSymbol("lf.fn.stddev", lf.fn.stddev);
lf.fn.sum = function $lf$fn$sum$($col$$) {
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.SUM);
};
goog.exportSymbol("lf.fn.sum", lf.fn.sum);
lf.fn.geomean = function $lf$fn$geomean$($col$$) {
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.GEOMEAN);
};
goog.exportSymbol("lf.fn.geomean", lf.fn.geomean);
lf.fn.asArray = function $lf$fn$asArray$($col$$) {
  return new lf.fn.AggregatedColumn($col$$, lf.fn.Type.AS_ARRAY);
};
goog.exportSymbol("lf.fn.asArray", lf.fn.asArray);
lf.proc.PhysicalQueryPlanNode = function $lf$proc$PhysicalQueryPlanNode$($numRelations$$, $type$$) {
  lf.structs.TreeNode.call(this);
  this.execType_ = $type$$;
  this.numRelations_ = $numRelations$$;
};
goog.inherits(lf.proc.PhysicalQueryPlanNode, lf.structs.TreeNode);
lf.proc.PhysicalQueryPlanNode.ExecType = {NO_CHILD:-1, ALL:0, FIRST_CHILD:1};
lf.proc.PhysicalQueryPlanNode.ANY = -1;
lf.proc.PhysicalQueryPlanNode.prototype.exec = function $lf$proc$PhysicalQueryPlanNode$$exec$($opt_journal$$, $opt_context$$) {
  switch(this.execType_) {
    case lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD:
      return this.execFirstChild_($opt_journal$$, $opt_context$$);
    case lf.proc.PhysicalQueryPlanNode.ExecType.ALL:
      return this.execAllChildren_($opt_journal$$, $opt_context$$);
    default:
      return this.execNoChild_($opt_journal$$, $opt_context$$);
  }
};
lf.proc.PhysicalQueryPlanNode.prototype.toString = function $lf$proc$PhysicalQueryPlanNode$$toString$() {
  return "dummy_node";
};
lf.proc.PhysicalQueryPlanNode.prototype.toContextString = function $lf$proc$PhysicalQueryPlanNode$$toContextString$($context$$) {
  return this.toString();
};
lf.proc.PhysicalQueryPlanNode.prototype.assertInput_ = function $lf$proc$PhysicalQueryPlanNode$$assertInput_$($relations$$) {
  goog.asserts.assert(this.numRelations_ == lf.proc.PhysicalQueryPlanNode.ANY || $relations$$.length == this.numRelations_);
};
lf.proc.PhysicalQueryPlanNode.prototype.execNoChild_ = function $lf$proc$PhysicalQueryPlanNode$$execNoChild_$($opt_journal$$, $opt_context$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    $resolve$$(this.execInternal([], $opt_journal$$, $opt_context$$));
  }.bind(this));
};
lf.proc.PhysicalQueryPlanNode.prototype.execFirstChild_ = function $lf$proc$PhysicalQueryPlanNode$$execFirstChild_$($opt_journal$$, $opt_context$$) {
  return this.getChildAt(0).exec($opt_journal$$, $opt_context$$).then(function($results$$) {
    this.assertInput_($results$$);
    return this.execInternal($results$$, $opt_journal$$, $opt_context$$);
  }.bind(this));
};
lf.proc.PhysicalQueryPlanNode.prototype.execAllChildren_ = function $lf$proc$PhysicalQueryPlanNode$$execAllChildren_$($opt_journal$$, $opt_context$$) {
  var $promises$$ = this.getChildren().map(function($child$$) {
    return $child$$.exec($opt_journal$$, $opt_context$$);
  });
  return goog.Promise.all($promises$$).then(function($results$$) {
    var $relations$$ = [];
    $results$$.forEach(function($result$$) {
      for (var $i$$ = 0;$i$$ < $result$$.length;++$i$$) {
        $relations$$.push($result$$[$i$$]);
      }
    });
    this.assertInput_($relations$$);
    return this.execInternal($relations$$, $opt_journal$$, $opt_context$$);
  }.bind(this));
};
lf.proc.AggregationStep = function $lf$proc$AggregationStep$($aggregatedColumns$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, lf.proc.PhysicalQueryPlanNode.ANY, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
  this.aggregatedColumns = $aggregatedColumns$$;
};
goog.inherits(lf.proc.AggregationStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.AggregationStep.prototype.toString = function $lf$proc$AggregationStep$$toString$() {
  return "aggregation(" + this.aggregatedColumns.map(function($column$$) {
    return $column$$.getNormalizedName();
  }).toString() + ")";
};
lf.proc.AggregationStep.prototype.execInternal = function $lf$proc$AggregationStep$$execInternal$($relations$$) {
  $relations$$.forEach(function($relation$$) {
    (new lf.proc.AggregationStep.Calculator_($relation$$, this.aggregatedColumns)).calculate();
  }, this);
  return $relations$$;
};
lf.proc.AggregationStep.Calculator_ = function $lf$proc$AggregationStep$Calculator_$($relation$$, $columns$$) {
  this.relation_ = $relation$$;
  this.columns_ = $columns$$;
};
lf.proc.AggregationStep.Calculator_.prototype.calculate = function $lf$proc$AggregationStep$Calculator_$$calculate$() {
  this.columns_.forEach(function($column$$) {
    $column$$ = $column$$.getColumnChain().reverse();
    for (var $i$$ = 1;$i$$ < $column$$.length;$i$$++) {
      var $currentColumn$$ = $column$$[$i$$], $leafColumn_result$$ = $currentColumn$$.getColumnChain().slice(-1)[0], $inputRelation$$ = this.getInputRelationFor_($currentColumn$$);
      if ($inputRelation$$.hasAggregationResult($currentColumn$$)) {
        break;
      }
      $leafColumn_result$$ = lf.proc.AggregationStep.Calculator_.evalAggregation_($currentColumn$$.aggregatorType, $inputRelation$$, $leafColumn_result$$);
      this.relation_.setAggregationResult($currentColumn$$, $leafColumn_result$$);
    }
  }, this);
};
lf.proc.AggregationStep.Calculator_.prototype.getInputRelationFor_ = function $lf$proc$AggregationStep$Calculator_$$getInputRelationFor_$($column$$) {
  return $column$$.child instanceof lf.fn.AggregatedColumn ? this.relation_.getAggregationResult($column$$.child) : this.relation_;
};
lf.proc.AggregationStep.Calculator_.evalAggregation_ = function $lf$proc$AggregationStep$Calculator_$evalAggregation_$($aggregatorType$$1_count$$, $relation$$, $column$$) {
  var $result$$ = null, $Calculator$$ = lf.proc.AggregationStep.Calculator_;
  switch($aggregatorType$$1_count$$) {
    case lf.fn.Type.MIN:
      $result$$ = $Calculator$$.reduce_($relation$$, $column$$, function($soFar$$, $value$$) {
        return $value$$ < $soFar$$ ? $value$$ : $soFar$$;
      });
      break;
    case lf.fn.Type.MAX:
      $result$$ = $Calculator$$.reduce_($relation$$, $column$$, function($soFar$$, $value$$) {
        return $value$$ > $soFar$$ ? $value$$ : $soFar$$;
      });
      break;
    case lf.fn.Type.DISTINCT:
      $result$$ = $Calculator$$.distinct_($relation$$, $column$$);
      break;
    case lf.fn.Type.COUNT:
      $result$$ = $Calculator$$.count_($relation$$, $column$$);
      break;
    case lf.fn.Type.SUM:
      $result$$ = $Calculator$$.sum_($relation$$, $column$$);
      break;
    case lf.fn.Type.AVG:
      $aggregatorType$$1_count$$ = $Calculator$$.count_($relation$$, $column$$);
      0 < $aggregatorType$$1_count$$ && ($result$$ = $Calculator$$.sum_($relation$$, $column$$) / $aggregatorType$$1_count$$);
      break;
    case lf.fn.Type.GEOMEAN:
      $result$$ = $Calculator$$.geomean_($relation$$, $column$$);
      break;
    case lf.fn.Type.AS_ARRAY:
      $result$$ = $Calculator$$.asArray_($relation$$, $column$$);
      break;
    default:
      $result$$ = $Calculator$$.stddev_($relation$$, $column$$);
  }
  return $result$$;
};
lf.proc.AggregationStep.Calculator_.reduce_ = function $lf$proc$AggregationStep$Calculator_$reduce_$($relation$$, $column$$, $reduceFn$$) {
  return $relation$$.entries.reduce(function($soFar$$, $entry$$) {
    var $value$$ = $entry$$.getField($column$$);
    return goog.isNull($value$$) ? $soFar$$ : goog.isNull($soFar$$) ? $value$$ : $reduceFn$$($soFar$$, $value$$);
  }, null);
};
lf.proc.AggregationStep.Calculator_.count_ = function $lf$proc$AggregationStep$Calculator_$count_$($relation$$, $column$$) {
  return $column$$ instanceof lf.fn.StarColumn ? $relation$$.entries.length : $relation$$.entries.reduce(function($soFar$$, $entry$$) {
    return $soFar$$ + (goog.isNull($entry$$.getField($column$$)) ? 0 : 1);
  }, 0);
};
lf.proc.AggregationStep.Calculator_.sum_ = function $lf$proc$AggregationStep$Calculator_$sum_$($relation$$, $column$$) {
  return lf.proc.AggregationStep.Calculator_.reduce_($relation$$, $column$$, function($soFar$$, $value$$) {
    return $value$$ + $soFar$$;
  });
};
lf.proc.AggregationStep.Calculator_.asArray_ = function $lf$proc$AggregationStep$Calculator_$asArray_$($relation$$, $column$$) {
  return function unique($arr$$) {
    for (var $n$$ = {}, $r$$ = [], $i$$ = 0;$i$$ < $arr$$.length;$i$$++) {
      $n$$[$arr$$[$i$$]] || ($n$$[$arr$$[$i$$]] = !0, $r$$.push($arr$$[$i$$]));
    }
    return $r$$;
  }($relation$$.entries.map(function($entry$$) {
    return $entry$$.getField($column$$);
  }));
};
lf.proc.AggregationStep.Calculator_.stddev_ = function $lf$proc$AggregationStep$Calculator_$stddev_$($relation$$, $column$$) {
  var $values$$ = [];
  $relation$$.entries.forEach(function($entry$$27_value$$) {
    $entry$$27_value$$ = $entry$$27_value$$.getField($column$$);
    goog.isNull($entry$$27_value$$) || $values$$.push($entry$$27_value$$);
  });
  return 0 == $values$$.length ? null : goog.math.standardDeviation.apply(null, $values$$);
};
lf.proc.AggregationStep.Calculator_.geomean_ = function $lf$proc$AggregationStep$Calculator_$geomean_$($relation$$, $column$$) {
  var $nonZeroEntriesCount$$ = 0, $reduced$$ = $relation$$.entries.reduce(function($soFar$$, $entry$$) {
    var $value$$ = $entry$$.getField($column$$);
    if (0 == $value$$ || goog.isNull($value$$)) {
      return $soFar$$;
    }
    $nonZeroEntriesCount$$++;
    return $soFar$$ + Math.log($value$$);
  }, 0);
  return 0 == $nonZeroEntriesCount$$ ? null : Math.pow(Math.E, $reduced$$ / $nonZeroEntriesCount$$);
};
lf.proc.AggregationStep.Calculator_.distinct_ = function $lf$proc$AggregationStep$Calculator_$distinct_$($relation$$, $column$$) {
  var $distinctMap$$ = lf.structs.map.create();
  $relation$$.entries.forEach(function($entry$$) {
    var $value$$ = $entry$$.getField($column$$);
    $distinctMap$$.set($value$$, $entry$$);
  });
  return new lf.proc.Relation(lf.structs.map.values($distinctMap$$), $relation$$.getTables());
};
lf.proc.CrossProductStep = function $lf$proc$CrossProductStep$() {
  lf.proc.PhysicalQueryPlanNode.call(this, 2, lf.proc.PhysicalQueryPlanNode.ExecType.ALL);
};
goog.inherits(lf.proc.CrossProductStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.CrossProductStep.prototype.toString = function $lf$proc$CrossProductStep$$toString$() {
  return "cross_product";
};
lf.proc.CrossProductStep.prototype.execInternal = function $lf$proc$CrossProductStep$$execInternal$($relations$$) {
  return lf.proc.CrossProductStep.crossProduct_($relations$$[0], $relations$$[1]);
};
lf.proc.CrossProductStep.crossProduct_ = function $lf$proc$CrossProductStep$crossProduct_$($leftRelation$$, $rightRelation$$) {
  for (var $combinedEntries$$ = [], $leftRelationTableNames_srcTables$$ = $leftRelation$$.getTables(), $rightRelationTableNames$$ = $rightRelation$$.getTables(), $i$$ = 0;$i$$ < $leftRelation$$.entries.length;$i$$++) {
    for (var $j$$ = 0;$j$$ < $rightRelation$$.entries.length;$j$$++) {
      var $combinedEntry$$ = lf.proc.RelationEntry.combineEntries($leftRelation$$.entries[$i$$], $leftRelationTableNames_srcTables$$, $rightRelation$$.entries[$j$$], $rightRelationTableNames$$);
      $combinedEntries$$.push($combinedEntry$$);
    }
  }
  $leftRelationTableNames_srcTables$$ = $leftRelation$$.getTables().concat($rightRelation$$.getTables());
  return [new lf.proc.Relation($combinedEntries$$, $leftRelationTableNames_srcTables$$)];
};
lf.proc.DeleteStep = function $lf$proc$DeleteStep$($table$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 1, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
  this.table_ = $table$$;
};
goog.inherits(lf.proc.DeleteStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.DeleteStep.prototype.toString = function $lf$proc$DeleteStep$$toString$() {
  return "delete(" + this.table_.getName() + ")";
};
lf.proc.DeleteStep.prototype.execInternal = function $lf$proc$DeleteStep$$execInternal$($relations$$, $journal$$) {
  var $rows$$ = $relations$$[0].entries.map(function($entry$$) {
    return $entry$$.row;
  });
  $journal$$.remove(this.table_, $rows$$);
  return [lf.proc.Relation.createEmpty()];
};
lf.proc.GetRowCountStep = function $lf$proc$GetRowCountStep$($global$$, $table$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 0, lf.proc.PhysicalQueryPlanNode.ExecType.NO_CHILD);
  this.table = $table$$;
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
};
goog.inherits(lf.proc.GetRowCountStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.GetRowCountStep.prototype.toString = function $lf$proc$GetRowCountStep$$toString$() {
  return "get_row_count(" + this.table.getName() + ")";
};
lf.proc.GetRowCountStep.prototype.execInternal = function $lf$proc$GetRowCountStep$$execInternal$($relations$$8_rowIdIndex$$) {
  $relations$$8_rowIdIndex$$ = this.indexStore_.get(this.table.getRowIdIndexName());
  var $relation$$ = new lf.proc.Relation([], [this.table.getName()]);
  $relation$$.setAggregationResult(lf.fn.count(), $relations$$8_rowIdIndex$$.stats().totalRows);
  return [$relation$$];
};
lf.proc.TableAccessFullStep = function $lf$proc$TableAccessFullStep$($global$$, $table$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 0, lf.proc.PhysicalQueryPlanNode.ExecType.NO_CHILD);
  this.cache_ = $global$$.getService(lf.service.CACHE);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.table = $table$$;
};
goog.inherits(lf.proc.TableAccessFullStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.TableAccessFullStep.prototype.toString = function $lf$proc$TableAccessFullStep$$toString$() {
  var $out$$ = "table_access(" + this.table.getName();
  goog.isNull(this.table.getAlias()) || ($out$$ += " as " + this.table.getAlias());
  return $out$$ + ")";
};
lf.proc.TableAccessFullStep.prototype.execInternal = function $lf$proc$TableAccessFullStep$$execInternal$($relations$$9_rowIds$$) {
  $relations$$9_rowIds$$ = this.indexStore_.get(this.table.getRowIdIndexName()).getRange();
  return [lf.proc.Relation.fromRows(this.cache_.getMany($relations$$9_rowIds$$), [this.table.getEffectiveName()])];
};
lf.proc.GetRowCountPass = function $lf$proc$GetRowCountPass$($global$$) {
  lf.proc.RewritePass.call(this);
  this.global_ = $global$$;
};
goog.inherits(lf.proc.GetRowCountPass, lf.proc.RewritePass);
lf.proc.GetRowCountPass.prototype.rewrite = function $lf$proc$GetRowCountPass$$rewrite$($rootNode$$, $queryContext$$) {
  this.rootNode = $rootNode$$;
  if (!this.canOptimize_($queryContext$$)) {
    return $rootNode$$;
  }
  var $tableAccessFullStep$$ = lf.tree.find($rootNode$$, function($node$$) {
    return $node$$ instanceof lf.proc.TableAccessFullStep;
  })[0], $getRowCountStep$$ = new lf.proc.GetRowCountStep(this.global_, $tableAccessFullStep$$.table);
  lf.tree.replaceNodeWithChain($tableAccessFullStep$$, $getRowCountStep$$, $getRowCountStep$$);
  return this.rootNode;
};
lf.proc.GetRowCountPass.prototype.canOptimize_ = function $lf$proc$GetRowCountPass$$canOptimize_$($column$$23_queryContext$$) {
  return 1 != $column$$23_queryContext$$.columns.length || 1 != $column$$23_queryContext$$.from.length || goog.isDefAndNotNull($column$$23_queryContext$$.where) || goog.isDefAndNotNull($column$$23_queryContext$$.limit) || goog.isDefAndNotNull($column$$23_queryContext$$.skip) || goog.isDefAndNotNull($column$$23_queryContext$$.groupBy) ? !1 : ($column$$23_queryContext$$ = $column$$23_queryContext$$.columns[0], $column$$23_queryContext$$ instanceof lf.fn.AggregatedColumn && $column$$23_queryContext$$.aggregatorType == 
  lf.fn.Type.COUNT && $column$$23_queryContext$$.child instanceof lf.fn.StarColumn);
};
lf.proc.GroupByStep = function $lf$proc$GroupByStep$($groupByColumns$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 1, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
  this.groupByColumns_ = $groupByColumns$$;
};
goog.inherits(lf.proc.GroupByStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.GroupByStep.prototype.toString = function $lf$proc$GroupByStep$$toString$() {
  return "groupBy(" + this.groupByColumns_.map(function($column$$) {
    return $column$$.getNormalizedName();
  }).toString() + ")";
};
lf.proc.GroupByStep.prototype.execInternal = function $lf$proc$GroupByStep$$execInternal$($relations$$) {
  return this.calculateGroupedRelations_($relations$$[0]);
};
lf.proc.GroupByStep.prototype.calculateGroupedRelations_ = function $lf$proc$GroupByStep$$calculateGroupedRelations_$($relation$$) {
  var $groupMap$$ = new lf.structs.MapSet, $getKey$$ = function($entry$$) {
    return this.groupByColumns_.map(function($column$$) {
      return $entry$$.getField($column$$);
    }, this).join(",");
  }.bind(this);
  $relation$$.entries.forEach(function($entry$$) {
    $groupMap$$.set($getKey$$($entry$$), $entry$$);
  }, this);
  return $groupMap$$.keys().map(function($key$$) {
    return new lf.proc.Relation($groupMap$$.get($key$$), $relation$$.getTables());
  }, this);
};
lf.proc.JoinStep = function $lf$proc$JoinStep$($global$$, $predicate$$, $isOuterJoin$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 2, lf.proc.PhysicalQueryPlanNode.ExecType.ALL);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.cache_ = $global$$.getService(lf.service.CACHE);
  this.predicate = $predicate$$;
  this.isOuterJoin = $isOuterJoin$$;
  this.algorithm_ = this.predicate.evaluatorType == lf.eval.Type.EQ ? lf.proc.JoinStep.Algorithm_.HASH : lf.proc.JoinStep.Algorithm_.NESTED_LOOP;
  this.indexJoinInfo_ = null;
};
goog.inherits(lf.proc.JoinStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.JoinStep.Algorithm_ = {HASH:0, INDEX_NESTED_LOOP:1, NESTED_LOOP:2};
lf.proc.JoinStep.AlgorithmToString_ = ["hash", "index_nested_loop", "nested_loop"];
lf.proc.JoinStep.prototype.toString = function $lf$proc$JoinStep$$toString$() {
  return "join(type: " + (this.isOuterJoin ? "outer" : "inner") + ", impl: " + lf.proc.JoinStep.AlgorithmToString_[this.algorithm_] + ", " + this.predicate.toString() + ")";
};
lf.proc.JoinStep.prototype.execInternal = function $lf$proc$JoinStep$$execInternal$($relations$$) {
  switch(this.algorithm_) {
    case lf.proc.JoinStep.Algorithm_.HASH:
      return [this.predicate.evalRelationsHashJoin($relations$$[0], $relations$$[1], this.isOuterJoin)];
    case lf.proc.JoinStep.Algorithm_.INDEX_NESTED_LOOP:
      return [this.predicate.evalRelationsIndexNestedLoopJoin($relations$$[0], $relations$$[1], this.indexJoinInfo_, this.cache_)];
    default:
      return [this.predicate.evalRelationsNestedLoopJoin($relations$$[0], $relations$$[1], this.isOuterJoin)];
  }
};
lf.proc.JoinStep.prototype.markAsIndexJoin = function $lf$proc$JoinStep$$markAsIndexJoin$($column$$) {
  this.algorithm_ = lf.proc.JoinStep.Algorithm_.INDEX_NESTED_LOOP;
  var $index$$ = this.indexStore_.get($column$$.getIndex().getNormalizedName());
  this.indexJoinInfo_ = {indexedColumn:$column$$, nonIndexedColumn:$column$$ == this.predicate.leftColumn ? this.predicate.rightColumn : this.predicate.leftColumn, index:$index$$};
};
lf.proc.NoOpStep = function $lf$proc$NoOpStep$($relations$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, lf.proc.PhysicalQueryPlanNode.ANY, lf.proc.PhysicalQueryPlanNode.ExecType.NO_CHILD);
  this.relations_ = $relations$$;
};
goog.inherits(lf.proc.NoOpStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.NoOpStep.prototype.toString = function $lf$proc$NoOpStep$$toString$() {
  return "no_op_step(" + this.relations_[0].getTables().join(",") + ")";
};
lf.proc.NoOpStep.prototype.execInternal = function $lf$proc$NoOpStep$$execInternal$($relations$$) {
  return this.relations_;
};
lf.proc.IndexJoinPass = function $lf$proc$IndexJoinPass$() {
  lf.proc.RewritePass.call(this);
};
goog.inherits(lf.proc.IndexJoinPass, lf.proc.RewritePass);
lf.proc.IndexJoinPass.prototype.rewrite = function $lf$proc$IndexJoinPass$$rewrite$($rootNode$$, $queryContext$$) {
  this.rootNode = $rootNode$$;
  if (!this.canOptimize_($queryContext$$)) {
    return $rootNode$$;
  }
  lf.tree.find($rootNode$$, function($node$$) {
    return $node$$ instanceof lf.proc.JoinStep;
  }).forEach(this.processJoinStep_, this);
  return this.rootNode;
};
lf.proc.IndexJoinPass.prototype.canOptimize_ = function $lf$proc$IndexJoinPass$$canOptimize_$($queryContext$$) {
  return 1 < $queryContext$$.from.length;
};
lf.proc.IndexJoinPass.prototype.processJoinStep_ = function $lf$proc$IndexJoinPass$$processJoinStep_$($joinStep$$) {
  if ($joinStep$$.predicate.evaluatorType == lf.eval.Type.EQ && !$joinStep$$.isOuterJoin) {
    var $chosenColumn_getCandidate_rightCandidate$$ = function $$chosenColumn_getCandidate_rightCandidate$$$($candidateColumn_executionStep$$) {
      if (!($candidateColumn_executionStep$$ instanceof lf.proc.TableAccessFullStep)) {
        return null;
      }
      $candidateColumn_executionStep$$ = $candidateColumn_executionStep$$.table.getEffectiveName() == $joinStep$$.predicate.rightColumn.getTable().getEffectiveName() ? $joinStep$$.predicate.rightColumn : $joinStep$$.predicate.leftColumn;
      return goog.isNull($candidateColumn_executionStep$$.getIndex()) ? null : $candidateColumn_executionStep$$;
    }, $leftCandidate$$ = $chosenColumn_getCandidate_rightCandidate$$($joinStep$$.getChildAt(0)), $chosenColumn_getCandidate_rightCandidate$$ = $chosenColumn_getCandidate_rightCandidate$$($joinStep$$.getChildAt(1));
    if (!goog.isNull($leftCandidate$$) || !goog.isNull($chosenColumn_getCandidate_rightCandidate$$)) {
      $chosenColumn_getCandidate_rightCandidate$$ = goog.isNull($chosenColumn_getCandidate_rightCandidate$$) ? $leftCandidate$$ : $chosenColumn_getCandidate_rightCandidate$$;
      $joinStep$$.markAsIndexJoin($chosenColumn_getCandidate_rightCandidate$$);
      var $dummyRelation$$ = new lf.proc.Relation([], [$chosenColumn_getCandidate_rightCandidate$$.getTable().getEffectiveName()]);
      $joinStep$$.replaceChildAt(new lf.proc.NoOpStep([$dummyRelation$$]), $chosenColumn_getCandidate_rightCandidate$$ == $leftCandidate$$ ? 0 : 1);
    }
  }
};
lf.pred.CombinedPredicate = function $lf$pred$CombinedPredicate$($operator$$) {
  lf.pred.PredicateNode.call(this);
  this.operator = $operator$$;
  this.isComplement_ = !1;
};
goog.inherits(lf.pred.CombinedPredicate, lf.pred.PredicateNode);
lf.pred.CombinedPredicate.prototype.copy = function $lf$pred$CombinedPredicate$$copy$() {
  return lf.tree.map(this, function($node$$) {
    if ($node$$ instanceof lf.pred.CombinedPredicate) {
      var $tempCopy$$ = new lf.pred.CombinedPredicate($node$$.operator);
      $tempCopy$$.isComplement_ = $node$$.isComplement_;
      $tempCopy$$.setId($node$$.getId());
      return $tempCopy$$;
    }
    return $node$$.copy();
  });
};
lf.pred.CombinedPredicate.prototype.getColumns = function $lf$pred$CombinedPredicate$$getColumns$($columnSet_opt_results$$) {
  var $columns$$ = $columnSet_opt_results$$ || [];
  this.traverse(function($child$$) {
    $child$$ != this && $child$$.getColumns($columns$$);
  }.bind(this));
  $columnSet_opt_results$$ = lf.structs.set.create($columns$$);
  return lf.structs.set.values($columnSet_opt_results$$);
};
lf.pred.CombinedPredicate.prototype.getTables = function $lf$pred$CombinedPredicate$$getTables$($opt_results$$) {
  var $tables$$ = goog.isDefAndNotNull($opt_results$$) ? $opt_results$$ : lf.structs.set.create();
  this.traverse(function($child$$) {
    $child$$ != this && $child$$.getTables($tables$$);
  }.bind(this));
  return $tables$$;
};
lf.pred.CombinedPredicate.prototype.setComplement = function $lf$pred$CombinedPredicate$$setComplement$($isComplement$$) {
  this.isComplement_ != $isComplement$$ && (this.isComplement_ = $isComplement$$, this.operator = this.operator == lf.pred.Operator.AND ? lf.pred.Operator.OR : lf.pred.Operator.AND, this.getChildren().forEach(function($condition$$) {
    return $condition$$.setComplement($isComplement$$);
  }));
};
lf.pred.CombinedPredicate.prototype.eval = function $lf$pred$CombinedPredicate$$eval$($relation$$) {
  var $results$$ = this.getChildren().map(function($condition$$) {
    return $condition$$.eval($relation$$);
  });
  return this.combineResults_($results$$);
};
lf.pred.CombinedPredicate.prototype.combineResults_ = function $lf$pred$CombinedPredicate$$combineResults_$($results$$) {
  return this.operator == lf.pred.Operator.AND ? lf.proc.Relation.intersect($results$$) : lf.proc.Relation.union($results$$);
};
lf.pred.CombinedPredicate.prototype.toString = function $lf$pred$CombinedPredicate$$toString$() {
  return "combined_pred_" + this.operator.toString();
};
lf.pred.CombinedPredicate.prototype.toKeyRange = function $lf$pred$CombinedPredicate$$toKeyRange$() {
  goog.asserts.assert(this.isKeyRangeCompatible(), "Could not convert combined predicate to key range.");
  if (this.operator == lf.pred.Operator.OR) {
    var $keyRangeSet$$ = new lf.index.SingleKeyRangeSet;
    this.getChildren().forEach(function($child$$) {
      $child$$ = $child$$.toKeyRange().getValues();
      $keyRangeSet$$.add($child$$);
    });
    return $keyRangeSet$$;
  }
  goog.asserts.fail("toKeyRange() called for an AND predicate.");
  return new lf.index.SingleKeyRangeSet;
};
lf.pred.CombinedPredicate.prototype.isKeyRangeCompatible = function $lf$pred$CombinedPredicate$$isKeyRangeCompatible$() {
  return this.operator == lf.pred.Operator.OR ? this.isKeyRangeCompatibleOr_() : !1;
};
lf.pred.CombinedPredicate.prototype.isKeyRangeCompatibleOr_ = function $lf$pred$CombinedPredicate$$isKeyRangeCompatibleOr_$() {
  var $predicateColumn$$ = null;
  return this.getChildren().every(function($child$$) {
    if (!($child$$ instanceof lf.pred.ValuePredicate && $child$$.isKeyRangeCompatible())) {
      return !1;
    }
    goog.isNull($predicateColumn$$) && ($predicateColumn$$ = $child$$.column);
    return $predicateColumn$$.getNormalizedName() == $child$$.column.getNormalizedName();
  });
};
$jscomp.scope.calculateCartesianProduct = function $$jscomp$scope$calculateCartesianProduct$($it$$) {
  goog.asserts.assert(1 < $it$$.length, "Should only be called for cross-column indices.");
  $it$$ = $it$$.map(function($keyRangeSet$$) {
    return $keyRangeSet$$.getValues();
  });
  $it$$ = goog.iter.product.apply(null, $it$$);
  var $combinations$$ = [];
  goog.iter.forEach($it$$, function($value$$) {
    $combinations$$.push($value$$);
  });
  return $combinations$$;
};
lf.proc.IndexKeyRangeCalculator = function $lf$proc$IndexKeyRangeCalculator$() {
};
lf.proc.NotBoundKeyRangeCalculator = function $lf$proc$NotBoundKeyRangeCalculator$($indexSchema$$) {
  this.indexSchema_ = $indexSchema$$;
};
lf.proc.NotBoundKeyRangeCalculator.prototype.getKeyRangeCombinations = function $lf$proc$NotBoundKeyRangeCalculator$$getKeyRangeCombinations$($queryContext$$) {
  return 1 == this.indexSchema_.columns.length ? [lf.index.SingleKeyRange.all()] : [this.indexSchema_.columns.map(function($column$$) {
    return lf.index.SingleKeyRange.all();
  })];
};
lf.proc.BoundKeyRangeCalculator = function $lf$proc$BoundKeyRangeCalculator$($indexSchema$$, $predicateMap$$) {
  this.indexSchema_ = $indexSchema$$;
  this.predicateMap_ = $predicateMap$$;
  this.combinations_ = this.lastQueryContext_ = null;
};
lf.proc.BoundKeyRangeCalculator.prototype.calculateKeyRangeMap_ = function $lf$proc$BoundKeyRangeCalculator$$calculateKeyRangeMap_$($queryContext$$) {
  var $keyRangeMap$$ = lf.structs.map.create();
  this.predicateMap_.keys().forEach(function($columnName$$) {
    var $predicates$$ = this.predicateMap_.get($columnName$$).map(function($predicateId$$) {
      return $queryContext$$.getPredicate($predicateId$$);
    }, this), $keyRangeSetSoFar$$ = new lf.index.SingleKeyRangeSet([lf.index.SingleKeyRange.all()]);
    $predicates$$.forEach(function($predicate$$) {
      $keyRangeSetSoFar$$ = lf.index.SingleKeyRangeSet.intersect($keyRangeSetSoFar$$, $predicate$$.toKeyRange());
    });
    $keyRangeMap$$.set($columnName$$, $keyRangeSetSoFar$$);
  }, this);
  return $keyRangeMap$$;
};
lf.proc.BoundKeyRangeCalculator.prototype.fillMissingKeyRanges_ = function $lf$proc$BoundKeyRangeCalculator$$fillMissingKeyRanges_$($keyRangeMap$$) {
  for (var $i$$ = this.indexSchema_.columns.length - 1;0 <= $i$$;$i$$--) {
    var $column$$ = this.indexSchema_.columns[$i$$], $keyRangeSet$$ = $keyRangeMap$$.get($column$$.schema.getName()) || null;
    if (!goog.isNull($keyRangeSet$$)) {
      break;
    }
    $keyRangeMap$$.set($column$$.schema.getName(), new lf.index.SingleKeyRangeSet([lf.index.SingleKeyRange.all()]));
  }
};
lf.proc.BoundKeyRangeCalculator.prototype.getKeyRangeCombinations = function $lf$proc$BoundKeyRangeCalculator$$getKeyRangeCombinations$($queryContext$$) {
  if (this.lastQueryContext_ == $queryContext$$) {
    return this.combinations_;
  }
  var $keyRangeMap$$ = this.calculateKeyRangeMap_($queryContext$$);
  this.fillMissingKeyRanges_($keyRangeMap$$);
  this.combinations_ = 1 == this.indexSchema_.columns.length ? lf.structs.map.values($keyRangeMap$$)[0].getValues() : (0,$jscomp.scope.calculateCartesianProduct)(this.getSortedKeyRangeSets_($keyRangeMap$$));
  this.lastQueryContext_ = $queryContext$$;
  return this.combinations_;
};
lf.proc.BoundKeyRangeCalculator.prototype.getSortedKeyRangeSets_ = function $lf$proc$BoundKeyRangeCalculator$$getSortedKeyRangeSets_$($keyRangeMap$$) {
  var $sortHelper$$ = lf.structs.map.create(), $priority$$ = 0;
  this.indexSchema_.columns.forEach(function($column$$) {
    $sortHelper$$.set($column$$.schema.getName(), $priority$$);
    $priority$$++;
  });
  return lf.structs.map.keys($keyRangeMap$$).sort(function($a$$, $b$$) {
    return $sortHelper$$.get($a$$) - $sortHelper$$.get($b$$);
  }).map(function($columnName$$) {
    return $keyRangeMap$$.get($columnName$$);
  });
};
lf.proc.IndexCostEstimator = function $lf$proc$IndexCostEstimator$($global$$, $tableSchema$$) {
  this.tableSchema_ = $tableSchema$$;
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
};
$jscomp.scope.INDEX_QUERY_THRESHOLD_PERCENT = .02;
lf.proc.IndexCostEstimator.prototype.getIndexQueryThreshold_ = function $lf$proc$IndexCostEstimator$$getIndexQueryThreshold_$() {
  var $rowIdIndex$$ = this.indexStore_.get(this.tableSchema_.getRowIdIndexName());
  return Math.floor($rowIdIndex$$.stats().totalRows * $jscomp.scope.INDEX_QUERY_THRESHOLD_PERCENT);
};
lf.proc.IndexCostEstimator.prototype.chooseIndexFor = function $lf$proc$IndexCostEstimator$$chooseIndexFor$($queryContext$$, $predicates$$) {
  var $candidatePredicates_indexRangeCandidates$$ = $predicates$$.filter(this.isCandidate_, this);
  if (0 == $candidatePredicates_indexRangeCandidates$$.length) {
    return null;
  }
  $candidatePredicates_indexRangeCandidates$$ = this.generateIndexRangeCandidates_($candidatePredicates_indexRangeCandidates$$);
  if (0 == $candidatePredicates_indexRangeCandidates$$.length) {
    return null;
  }
  if (1 == $candidatePredicates_indexRangeCandidates$$.length) {
    return $candidatePredicates_indexRangeCandidates$$[0];
  }
  var $minCost$$ = Number.MAX_VALUE;
  return $candidatePredicates_indexRangeCandidates$$.reduce(function($prev$$, $curr$$) {
    var $cost$$ = $curr$$.calculateCost($queryContext$$);
    return $cost$$ < $minCost$$ ? ($minCost$$ = $cost$$, $curr$$) : $prev$$;
  }, null);
};
lf.proc.IndexCostEstimator.prototype.generateIndexRangeCandidates_ = function $lf$proc$IndexCostEstimator$$generateIndexRangeCandidates_$($predicates$$) {
  return this.tableSchema_.getIndices().map(function($indexRangeCandidate_indexSchema$$) {
    $indexRangeCandidate_indexSchema$$ = new lf.proc.IndexRangeCandidate(this.indexStore_, $indexRangeCandidate_indexSchema$$);
    $indexRangeCandidate_indexSchema$$.consumePredicates_($predicates$$);
    return $indexRangeCandidate_indexSchema$$;
  }, this).filter(function($indexRangeCandidate$$) {
    return $indexRangeCandidate$$.isUsable();
  });
};
lf.proc.IndexCostEstimator.prototype.isCandidate_ = function $lf$proc$IndexCostEstimator$$isCandidate_$($predicate$$) {
  return $predicate$$ instanceof lf.pred.ValuePredicate ? this.isCandidateValuePredicate_($predicate$$) : $predicate$$ instanceof lf.pred.CombinedPredicate ? this.isCandidateCombinedPredicate_($predicate$$) : !1;
};
lf.proc.IndexCostEstimator.prototype.isCandidateCombinedPredicate_ = function $lf$proc$IndexCostEstimator$$isCandidateCombinedPredicate_$($predicate$$) {
  return $predicate$$.isKeyRangeCompatible() && $predicate$$.getChildAt(0).column.getTable() == this.tableSchema_ ? $predicate$$.getChildCount() <= this.getIndexQueryThreshold_() : !1;
};
lf.proc.IndexCostEstimator.prototype.isCandidateValuePredicate_ = function $lf$proc$IndexCostEstimator$$isCandidateValuePredicate_$($predicate$$) {
  return !$predicate$$.isKeyRangeCompatible() || $predicate$$.column.getTable() != this.tableSchema_ || $predicate$$.evaluatorType == lf.eval.Type.IN && $predicate$$.value.length > this.getIndexQueryThreshold_() ? !1 : !0;
};
lf.proc.IndexRangeCandidate = function $lf$proc$IndexRangeCandidate$($indexStore$$, $indexSchema$$) {
  this.indexStore_ = $indexStore$$;
  this.indexSchema = $indexSchema$$;
  this.indexedColumnNames_ = lf.structs.set.create(this.indexSchema.columns.map(function($col$$) {
    return $col$$.schema.getName();
  }));
  this.keyRangeCalculator_ = this.predicateMap_ = null;
};
lf.proc.IndexRangeCandidate.prototype.getPredicateIds = function $lf$proc$IndexRangeCandidate$$getPredicateIds$() {
  return goog.isNull(this.predicateMap_) ? [] : this.predicateMap_.values();
};
lf.proc.IndexRangeCandidate.prototype.getKeyRangeCalculator = function $lf$proc$IndexRangeCandidate$$getKeyRangeCalculator$() {
  goog.asserts.assert(this.predicateMap_);
  goog.isNull(this.keyRangeCalculator_) && (this.keyRangeCalculator_ = new lf.proc.BoundKeyRangeCalculator(this.indexSchema, this.predicateMap_));
  return this.keyRangeCalculator_;
};
lf.proc.IndexRangeCandidate.prototype.consumePredicates_ = function $lf$proc$IndexRangeCandidate$$consumePredicates_$($predicates$$) {
  $predicates$$.forEach(function($predicate$$) {
    var $columnName$$ = $predicate$$.getColumns()[0].getName();
    this.indexedColumnNames_.has($columnName$$) && (goog.isNull(this.predicateMap_) && (this.predicateMap_ = new lf.structs.MapSet), this.predicateMap_.set($columnName$$, $predicate$$.getId()));
  }, this);
};
lf.proc.IndexRangeCandidate.prototype.isUsable = function $lf$proc$IndexRangeCandidate$$isUsable$() {
  if (goog.isNull(this.predicateMap_)) {
    return !1;
  }
  for (var $unboundColumnFound$$ = !1, $isUsable$$ = !0, $i$$ = 0;$i$$ < this.indexSchema.columns.length;$i$$++) {
    var $isBound$$ = this.predicateMap_.has(this.indexSchema.columns[$i$$].schema.getName());
    if ($unboundColumnFound$$ && $isBound$$) {
      $isUsable$$ = !1;
      break;
    }
    $isBound$$ || ($unboundColumnFound$$ = !0);
  }
  return $isUsable$$;
};
lf.proc.IndexRangeCandidate.prototype.calculateCost = function $lf$proc$IndexRangeCandidate$$calculateCost$($combinations$$1_queryContext$$) {
  $combinations$$1_queryContext$$ = this.getKeyRangeCalculator().getKeyRangeCombinations($combinations$$1_queryContext$$);
  var $indexData$$ = this.indexStore_.get(this.indexSchema.getNormalizedName());
  return $combinations$$1_queryContext$$.reduce(function($costSoFar$$, $combination$$) {
    return $costSoFar$$ + $indexData$$.cost($combination$$);
  }, 0);
};
lf.proc.IndexRangeScanStep = function $lf$proc$IndexRangeScanStep$($global$$, $index$$, $keyRangeCalculator$$, $reverseOrder$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 0, lf.proc.PhysicalQueryPlanNode.ExecType.NO_CHILD);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.index = $index$$;
  this.keyRangeCalculator = $keyRangeCalculator$$;
  this.reverseOrder = $reverseOrder$$;
  this.useSkip = this.useLimit = !1;
};
goog.inherits(lf.proc.IndexRangeScanStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.IndexRangeScanStep.prototype.toString = function $lf$proc$IndexRangeScanStep$$toString$() {
  return "index_range_scan(" + this.index.getNormalizedName() + ", ?, " + (this.reverseOrder ? "reverse" : "natural") + (this.useLimit ? ", limit:?" : "") + (this.useSkip ? ", skip:?" : "") + ")";
};
lf.proc.IndexRangeScanStep.prototype.toContextString = function $lf$proc$IndexRangeScanStep$$toContextString$($context$$) {
  var $string$$ = this.toString(), $keyRanges$$ = this.keyRangeCalculator.getKeyRangeCombinations($context$$), $string$$ = $string$$.replace("?", $keyRanges$$.toString());
  this.useLimit && ($string$$ = $string$$.replace("?", $context$$.limit.toString()));
  this.useSkip && ($string$$ = $string$$.replace("?", $context$$.skip.toString()));
  return $string$$;
};
lf.proc.IndexRangeScanStep.prototype.execInternal = function $lf$proc$IndexRangeScanStep$$execInternal$($keyRanges$$7_relations$$, $index$$105_opt_journal$$, $opt_context$$19_rows$$) {
  $keyRanges$$7_relations$$ = this.keyRangeCalculator.getKeyRangeCombinations($opt_context$$19_rows$$);
  $index$$105_opt_journal$$ = this.indexStore_.get(this.index.getNormalizedName());
  $opt_context$$19_rows$$ = (1 == $keyRanges$$7_relations$$.length && $keyRanges$$7_relations$$[0] instanceof lf.index.SingleKeyRange && $keyRanges$$7_relations$$[0].isOnly() ? lf.index.slice($index$$105_opt_journal$$.get($keyRanges$$7_relations$$[0].from), !1, this.useLimit ? $opt_context$$19_rows$$.limit : void 0, this.useSkip ? $opt_context$$19_rows$$.skip : void 0) : $index$$105_opt_journal$$.getRange($keyRanges$$7_relations$$, this.reverseOrder, this.useLimit ? $opt_context$$19_rows$$.limit : 
  void 0, this.useSkip ? $opt_context$$19_rows$$.skip : void 0)).map(function($rowId$$) {
    return new lf.Row($rowId$$, {});
  }, this);
  return [lf.proc.Relation.fromRows($opt_context$$19_rows$$, [this.index.tableName])];
};
lf.proc.MultiIndexRangeScanStep = function $lf$proc$MultiIndexRangeScanStep$() {
  lf.proc.PhysicalQueryPlanNode.call(this, lf.proc.PhysicalQueryPlanNode.ANY, lf.proc.PhysicalQueryPlanNode.ExecType.ALL);
};
goog.inherits(lf.proc.MultiIndexRangeScanStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.MultiIndexRangeScanStep.prototype.toString = function $lf$proc$MultiIndexRangeScanStep$$toString$() {
  return "multi_index_range_scan()";
};
lf.proc.MultiIndexRangeScanStep.prototype.execInternal = function $lf$proc$MultiIndexRangeScanStep$$execInternal$($relations$$) {
  var $entriesUnion$$ = lf.structs.map.create();
  $relations$$.forEach(function($relation$$) {
    $relation$$.entries.forEach(function($entry$$) {
      $entriesUnion$$.set($entry$$.row.id(), $entry$$);
    });
  });
  var $entries$$ = lf.structs.map.values($entriesUnion$$);
  return [new lf.proc.Relation($entries$$, $relations$$[0].getTables())];
};
lf.proc.SelectStep = function $lf$proc$SelectStep$($predicateId$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 1, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
  this.predicateId = $predicateId$$;
};
goog.inherits(lf.proc.SelectStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.SelectStep.prototype.toString = function $lf$proc$SelectStep$$toString$() {
  return "select(?)";
};
lf.proc.SelectStep.prototype.toContextString = function $lf$proc$SelectStep$$toContextString$($context$$11_predicate$$) {
  $context$$11_predicate$$ = $context$$11_predicate$$.getPredicate(this.predicateId);
  return this.toString().replace("?", $context$$11_predicate$$.toString());
};
lf.proc.SelectStep.prototype.execInternal = function $lf$proc$SelectStep$$execInternal$($relations$$, $opt_journal$$, $opt_context$$) {
  return [$opt_context$$.getPredicate(this.predicateId).eval($relations$$[0])];
};
lf.proc.TableAccessByRowIdStep = function $lf$proc$TableAccessByRowIdStep$($global$$, $table$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 1, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
  this.cache_ = $global$$.getService(lf.service.CACHE);
  this.table_ = $table$$;
};
goog.inherits(lf.proc.TableAccessByRowIdStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.TableAccessByRowIdStep.prototype.toString = function $lf$proc$TableAccessByRowIdStep$$toString$() {
  return "table_access_by_row_id(" + this.table_.getName() + ")";
};
lf.proc.TableAccessByRowIdStep.prototype.execInternal = function $lf$proc$TableAccessByRowIdStep$$execInternal$($relations$$) {
  return [lf.proc.Relation.fromRows(this.cache_.getMany($relations$$[0].getRowIds()), [this.table_.getEffectiveName()])];
};
lf.proc.IndexRangeScanPass = function $lf$proc$IndexRangeScanPass$($global$$) {
  lf.proc.RewritePass.call(this);
  this.global_ = $global$$;
};
goog.inherits(lf.proc.IndexRangeScanPass, lf.proc.RewritePass);
lf.proc.IndexRangeScanPass.prototype.rewrite = function $lf$proc$IndexRangeScanPass$$rewrite$($rootNode$$, $queryContext$$) {
  this.rootNode = $rootNode$$;
  lf.tree.find($rootNode$$, function($node$$) {
    return $node$$ instanceof lf.proc.TableAccessFullStep;
  }).forEach(function($tableAccessFullStep$$) {
    var $selectStepsCandidates$$ = this.findSelectSteps_($tableAccessFullStep$$);
    if (0 != $selectStepsCandidates$$.length) {
      var $indexRangeCandidate$$ = (new lf.proc.IndexCostEstimator(this.global_, $tableAccessFullStep$$.table)).chooseIndexFor($queryContext$$, $selectStepsCandidates$$.map(function($c$$) {
        return $queryContext$$.getPredicate($c$$.predicateId);
      }));
      if (!goog.isNull($indexRangeCandidate$$)) {
        var $predicateToSelectStepMap$$ = lf.structs.map.create();
        $selectStepsCandidates$$.forEach(function($selectStep$$) {
          $predicateToSelectStepMap$$.set($selectStep$$.predicateId, $selectStep$$);
        }, this);
        this.rootNode = this.replaceWithIndexRangeScanStep_($indexRangeCandidate$$, $predicateToSelectStepMap$$, $tableAccessFullStep$$, $queryContext$$);
      }
    }
  }, this);
  return this.rootNode;
};
lf.proc.IndexRangeScanPass.prototype.findSelectSteps_ = function $lf$proc$IndexRangeScanPass$$findSelectSteps_$($node$$) {
  var $selectSteps$$ = [];
  for ($node$$ = $node$$.getParent();$node$$;) {
    $node$$ instanceof lf.proc.SelectStep && $selectSteps$$.push($node$$), $node$$ = $node$$.getParent();
  }
  return $selectSteps$$;
};
lf.proc.IndexRangeScanPass.prototype.replaceWithIndexRangeScanStep_ = function $lf$proc$IndexRangeScanPass$$replaceWithIndexRangeScanStep_$($indexRangeCandidate$$, $predicateToSelectStepMap$$, $tableAccessFullStep$$, $queryContext$$) {
  $indexRangeCandidate$$.getPredicateIds().map(function($predicateId$$) {
    return $predicateToSelectStepMap$$.get($predicateId$$);
  }).forEach(lf.tree.removeNode);
  $indexRangeCandidate$$ = new lf.proc.IndexRangeScanStep(this.global_, $indexRangeCandidate$$.indexSchema, $indexRangeCandidate$$.getKeyRangeCalculator(), !1);
  $queryContext$$ = new lf.proc.TableAccessByRowIdStep(this.global_, $tableAccessFullStep$$.table);
  $queryContext$$.addChild($indexRangeCandidate$$);
  lf.tree.replaceNodeWithChain($tableAccessFullStep$$, $queryContext$$, $indexRangeCandidate$$);
  return $indexRangeCandidate$$.getRoot();
};
lf.proc.InsertStep = function $lf$proc$InsertStep$($global$$, $table$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 0, lf.proc.PhysicalQueryPlanNode.ExecType.NO_CHILD);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.table_ = $table$$;
};
goog.inherits(lf.proc.InsertStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.InsertStep.prototype.toString = function $lf$proc$InsertStep$$toString$() {
  return "insert(" + this.table_.getName() + ")";
};
lf.proc.InsertStep.prototype.execInternal = function $lf$proc$InsertStep$$execInternal$($relations$$, $journal$$, $context$$) {
  lf.proc.InsertStep.assignAutoIncrementPks_(this.table_, $context$$.values, this.indexStore_);
  $journal$$.insert(this.table_, $context$$.values);
  return [lf.proc.Relation.fromRows($context$$.values, [this.table_.getName()])];
};
lf.proc.InsertStep.assignAutoIncrementPks_ = function $lf$proc$InsertStep$assignAutoIncrementPks_$($pkIndexSchema$$1_table$$, $values$$, $indexStore$$3_max$$) {
  $pkIndexSchema$$1_table$$ = $pkIndexSchema$$1_table$$.getConstraint().getPrimaryKey();
  if (goog.isNull($pkIndexSchema$$1_table$$) ? 0 : $pkIndexSchema$$1_table$$.columns[0].autoIncrement) {
    var $pkColumnName$$ = $pkIndexSchema$$1_table$$.columns[0].schema.getName();
    $indexStore$$3_max$$ = $indexStore$$3_max$$.get($pkIndexSchema$$1_table$$.getNormalizedName()).max();
    var $maxKey$$ = goog.isNull($indexStore$$3_max$$) ? 0 : $indexStore$$3_max$$[0];
    $values$$.forEach(function($row$$) {
      0 != $row$$.payload()[$pkColumnName$$] && goog.isDefAndNotNull($row$$.payload()[$pkColumnName$$]) || ($maxKey$$++, $row$$.payload()[$pkColumnName$$] = $maxKey$$);
    });
  }
};
lf.proc.InsertOrReplaceStep = function $lf$proc$InsertOrReplaceStep$($global$$, $table$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 0, lf.proc.PhysicalQueryPlanNode.ExecType.NO_CHILD);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
  this.table_ = $table$$;
};
goog.inherits(lf.proc.InsertOrReplaceStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.InsertOrReplaceStep.prototype.toString = function $lf$proc$InsertOrReplaceStep$$toString$() {
  return "insert_replace(" + this.table_.getName() + ")";
};
lf.proc.InsertOrReplaceStep.prototype.execInternal = function $lf$proc$InsertOrReplaceStep$$execInternal$($relations$$, $journal$$, $context$$) {
  lf.proc.InsertStep.assignAutoIncrementPks_(this.table_, $context$$.values, this.indexStore_);
  $journal$$.insertOrReplace(this.table_, $context$$.values);
  return [lf.proc.Relation.fromRows($context$$.values, [this.table_.getName()])];
};
lf.proc.LimitStep = function $lf$proc$LimitStep$() {
  lf.proc.PhysicalQueryPlanNode.call(this, 1, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
};
goog.inherits(lf.proc.LimitStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.LimitStep.prototype.toString = function $lf$proc$LimitStep$$toString$() {
  return "limit(?)";
};
lf.proc.LimitStep.prototype.toContextString = function $lf$proc$LimitStep$$toContextString$($context$$) {
  return this.toString().replace("?", $context$$.limit.toString());
};
lf.proc.LimitStep.prototype.execInternal = function $lf$proc$LimitStep$$execInternal$($relations$$, $opt_journal$$, $opt_context$$) {
  $relations$$[0].entries.splice($opt_context$$.limit);
  return $relations$$;
};
lf.proc.OrderByStep = function $lf$proc$OrderByStep$($orderBy$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, lf.proc.PhysicalQueryPlanNode.ANY, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
  this.orderBy = $orderBy$$;
};
goog.inherits(lf.proc.OrderByStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.OrderByStep.prototype.toString = function $lf$proc$OrderByStep$$toString$() {
  return "order_by(" + lf.query.SelectContext.orderByToString(this.orderBy) + ")";
};
lf.proc.OrderByStep.prototype.execInternal = function $lf$proc$OrderByStep$$execInternal$($relations$$) {
  if (1 == $relations$$.length) {
    var $distinctColumn$$ = this.findDistinctColumn_($relations$$[0]);
    (goog.isNull($distinctColumn$$) ? $relations$$[0] : $relations$$[0].getAggregationResult($distinctColumn$$)).entries.sort(this.entryComparatorFn_.bind(this));
  } else {
    $relations$$.sort(this.relationComparatorFn_.bind(this));
  }
  return $relations$$;
};
lf.proc.OrderByStep.prototype.findDistinctColumn_ = function $lf$proc$OrderByStep$$findDistinctColumn_$($relation$$) {
  for (var $distinctColumn$$ = null, $i$$ = 0;$i$$ < this.orderBy.length;$i$$++) {
    var $tempDistinctColumn$$ = lf.fn.distinct(this.orderBy[$i$$].column);
    if ($relation$$.hasAggregationResult($tempDistinctColumn$$)) {
      $distinctColumn$$ = $tempDistinctColumn$$;
      break;
    }
  }
  return $distinctColumn$$;
};
lf.proc.OrderByStep.prototype.comparator_ = function $lf$proc$OrderByStep$$comparator_$($getLeftPayload$$, $getRightPayload$$) {
  var $order$$ = null, $leftPayload_result$$ = null, $column$$ = null, $comparisonIndex$$ = -1;
  do {
    $comparisonIndex$$++, $column$$ = this.orderBy[$comparisonIndex$$].column, $order$$ = this.orderBy[$comparisonIndex$$].order, $leftPayload_result$$ = $getLeftPayload$$($column$$), $column$$ = $getRightPayload$$($column$$);
  } while ($leftPayload_result$$ == $column$$ && $comparisonIndex$$ + 1 < this.orderBy.length);
  $leftPayload_result$$ = $leftPayload_result$$ < $column$$ ? -1 : $leftPayload_result$$ > $column$$ ? 1 : 0;
  return $leftPayload_result$$ = $order$$ == lf.Order.ASC ? $leftPayload_result$$ : -$leftPayload_result$$;
};
lf.proc.OrderByStep.prototype.relationComparatorFn_ = function $lf$proc$OrderByStep$$relationComparatorFn_$($lhs$$, $rhs$$) {
  return this.comparator_(function($column$$) {
    return $column$$ instanceof lf.fn.AggregatedColumn ? $lhs$$.getAggregationResult($column$$) : $lhs$$.entries[$lhs$$.entries.length - 1].getField($column$$);
  }, function($column$$) {
    return $column$$ instanceof lf.fn.AggregatedColumn ? $rhs$$.getAggregationResult($column$$) : $rhs$$.entries[$rhs$$.entries.length - 1].getField($column$$);
  });
};
lf.proc.OrderByStep.prototype.entryComparatorFn_ = function $lf$proc$OrderByStep$$entryComparatorFn_$($lhs$$, $rhs$$) {
  return this.comparator_(function($column$$) {
    return $lhs$$.getField($column$$);
  }, function($column$$) {
    return $rhs$$.getField($column$$);
  });
};
lf.proc.RelationTransformer = function $lf$proc$RelationTransformer$($relation$$, $columns$$) {
  this.relation_ = $relation$$;
  this.columns_ = $columns$$;
};
lf.proc.RelationTransformer.prototype.getTransformed = function $lf$proc$RelationTransformer$$getTransformed$() {
  return this.columns_.some(function($column$$) {
    return $column$$ instanceof lf.fn.AggregatedColumn;
  }, this) ? this.handleAggregatedColumns_() : this.handleNonAggregatedColumns_();
};
lf.proc.RelationTransformer.prototype.handleAggregatedColumns_ = function $lf$proc$RelationTransformer$$handleAggregatedColumns_$() {
  if (1 == this.columns_.length && this.columns_[0].aggregatorType == lf.fn.Type.DISTINCT) {
    var $newEntries$$ = this.relation_.getAggregationResult(this.columns_[0]).entries.map(function($entry$$) {
      var $newEntry$$ = new lf.proc.RelationEntry(new lf.Row(lf.Row.DUMMY_ID, {}), this.relation_.isPrefixApplied());
      $newEntry$$.setField(this.columns_[0], $entry$$.getField(this.columns_[0].child));
      return $newEntry$$;
    }, this);
    return new lf.proc.Relation($newEntries$$, []);
  }
  var $entry$$0$$ = new lf.proc.RelationEntry(new lf.Row(lf.Row.DUMMY_ID, {}), this.relation_.isPrefixApplied());
  this.columns_.forEach(function($column$$) {
    var $value$$ = $column$$ instanceof lf.fn.AggregatedColumn ? this.relation_.getAggregationResult($column$$) : this.relation_.entries[0].getField($column$$);
    $entry$$0$$.setField($column$$, $value$$);
  }, this);
  return new lf.proc.Relation([$entry$$0$$], this.relation_.getTables());
};
lf.proc.RelationTransformer.prototype.handleNonAggregatedColumns_ = function $lf$proc$RelationTransformer$$handleNonAggregatedColumns_$() {
  var $transformedEntries$$ = Array(this.relation_.entries.length), $isPrefixApplied$$ = this.relation_.isPrefixApplied();
  this.relation_.entries.forEach(function($entry$$, $index$$) {
    $transformedEntries$$[$index$$] = new lf.proc.RelationEntry(new lf.Row($entry$$.row.id(), {}), $isPrefixApplied$$);
    this.columns_.forEach(function($column$$) {
      $transformedEntries$$[$index$$].setField($column$$, $entry$$.getField($column$$));
    }, this);
  }, this);
  return new lf.proc.Relation($transformedEntries$$, this.relation_.getTables());
};
lf.proc.RelationTransformer.transformMany = function $lf$proc$RelationTransformer$transformMany$($relations$$, $columns$$) {
  var $entries$$ = $relations$$.map(function($relation$$) {
    return (new lf.proc.RelationTransformer($relation$$, $columns$$)).getTransformed().entries[0];
  });
  return new lf.proc.Relation($entries$$, $relations$$[0].getTables());
};
lf.proc.ProjectStep = function $lf$proc$ProjectStep$($columns$$, $groupByColumns$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, lf.proc.PhysicalQueryPlanNode.ANY, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
  this.columns = $columns$$;
  this.groupByColumns = $groupByColumns$$;
};
goog.inherits(lf.proc.ProjectStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.ProjectStep.prototype.toString = function $lf$proc$ProjectStep$$toString$() {
  var $string$$ = "project(" + this.columns.toString();
  if (!goog.isNull(this.groupByColumns)) {
    var $groupBy$$ = this.groupByColumns.map(function($col$$) {
      return $col$$.getNormalizedName();
    }).join(", "), $string$$ = $string$$ + (", groupBy(" + $groupBy$$ + ")")
  }
  return $string$$ + ")";
};
lf.proc.ProjectStep.prototype.execInternal = function $lf$proc$ProjectStep$$execInternal$($relations$$) {
  return 0 == $relations$$.length ? [lf.proc.Relation.createEmpty()] : 1 == $relations$$.length ? [this.execNonGroupByProjection_($relations$$[0])] : [this.execGroupByProjection_($relations$$)];
};
lf.proc.ProjectStep.prototype.hasAggregators = function $lf$proc$ProjectStep$$hasAggregators$() {
  return this.columns.some(function($column$$) {
    return $column$$ instanceof lf.fn.AggregatedColumn;
  }) || !goog.isNull(this.groupByColumns);
};
lf.proc.ProjectStep.prototype.execGroupByProjection_ = function $lf$proc$ProjectStep$$execGroupByProjection_$($relations$$) {
  return lf.proc.RelationTransformer.transformMany($relations$$, this.columns);
};
lf.proc.ProjectStep.prototype.execNonGroupByProjection_ = function $lf$proc$ProjectStep$$execNonGroupByProjection_$($relation$$) {
  return 0 == this.columns.length ? $relation$$ : (new lf.proc.RelationTransformer($relation$$, this.columns)).getTransformed();
};
lf.proc.SkipStep = function $lf$proc$SkipStep$() {
  lf.proc.PhysicalQueryPlanNode.call(this, 1, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
};
goog.inherits(lf.proc.SkipStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.SkipStep.prototype.toString = function $lf$proc$SkipStep$$toString$() {
  return "skip(?)";
};
lf.proc.SkipStep.prototype.toContextString = function $lf$proc$SkipStep$$toContextString$($context$$) {
  return this.toString().replace("?", $context$$.skip.toString());
};
lf.proc.SkipStep.prototype.execInternal = function $lf$proc$SkipStep$$execInternal$($relations$$, $opt_journal$$, $opt_context$$) {
  return [new lf.proc.Relation($relations$$[0].entries.slice($opt_context$$.skip), $relations$$[0].getTables())];
};
lf.proc.LimitSkipByIndexPass = function $lf$proc$LimitSkipByIndexPass$() {
  lf.proc.RewritePass.call(this);
};
goog.inherits(lf.proc.LimitSkipByIndexPass, lf.proc.RewritePass);
lf.proc.LimitSkipByIndexPass.prototype.rewrite = function $lf$proc$LimitSkipByIndexPass$$rewrite$($rootNode$$, $queryContext$$) {
  if (!goog.isDef($queryContext$$.limit) && !goog.isDef($queryContext$$.skip)) {
    return $rootNode$$;
  }
  var $indexRangeScanStep$$ = this.findIndexRangeScanStep_($rootNode$$);
  if (goog.isNull($indexRangeScanStep$$)) {
    return $rootNode$$;
  }
  lf.tree.find($rootNode$$, function($node$$) {
    return $node$$ instanceof lf.proc.LimitStep || $node$$ instanceof lf.proc.SkipStep;
  }).forEach(function($node$$) {
    this.mergeToIndexRangeScanStep_($node$$, $indexRangeScanStep$$);
  }, this);
  return $indexRangeScanStep$$.getRoot();
};
lf.proc.LimitSkipByIndexPass.prototype.mergeToIndexRangeScanStep_ = function $lf$proc$LimitSkipByIndexPass$$mergeToIndexRangeScanStep_$($node$$, $indexRangeScanStep$$) {
  $node$$ instanceof lf.proc.LimitStep ? $indexRangeScanStep$$.useLimit = !0 : $indexRangeScanStep$$.useSkip = !0;
  return lf.tree.removeNode($node$$).parent;
};
lf.proc.LimitSkipByIndexPass.prototype.findIndexRangeScanStep_ = function $lf$proc$LimitSkipByIndexPass$$findIndexRangeScanStep_$($indexRangeScanSteps_rootNode$$) {
  $indexRangeScanSteps_rootNode$$ = lf.tree.find($indexRangeScanSteps_rootNode$$, function($node$$) {
    return $node$$ instanceof lf.proc.IndexRangeScanStep;
  }, function($node$$) {
    return $node$$ instanceof lf.proc.ProjectStep && $node$$.hasAggregators() || $node$$ instanceof lf.proc.OrderByStep || 1 != $node$$.getChildCount() || $node$$ instanceof lf.proc.SelectStep;
  });
  return 0 < $indexRangeScanSteps_rootNode$$.length ? $indexRangeScanSteps_rootNode$$[0] : null;
};
lf.proc.MultiColumnOrPass = function $lf$proc$MultiColumnOrPass$($global$$) {
  lf.proc.RewritePass.call(this);
  this.global_ = $global$$;
};
goog.inherits(lf.proc.MultiColumnOrPass, lf.proc.RewritePass);
lf.proc.MultiColumnOrPass.prototype.rewrite = function $lf$proc$MultiColumnOrPass$$rewrite$($rootNode$$, $queryContext$$) {
  this.rootNode = $rootNode$$;
  var $orSelectSteps$$ = this.findOrPredicates_($queryContext$$);
  if (0 == $orSelectSteps$$.length) {
    return this.rootNode;
  }
  var $indexRangeCandidates$$ = null, $orSelectStep$$ = null, $i$$ = 0;
  do {
    $orSelectStep$$ = $orSelectSteps$$[$i$$++], $indexRangeCandidates$$ = this.findIndexRangeCandidates_($orSelectStep$$, $queryContext$$);
  } while (goog.isNull($indexRangeCandidates$$) && $i$$ < $orSelectSteps$$.length);
  return goog.isNull($indexRangeCandidates$$) ? this.rootNode : this.rootNode = this.replaceWithIndexRangeScan_($orSelectStep$$, $indexRangeCandidates$$);
};
lf.proc.MultiColumnOrPass.prototype.findOrPredicates_ = function $lf$proc$MultiColumnOrPass$$findOrPredicates_$($queryContext$$) {
  return lf.tree.find(this.rootNode, function($node$$50_predicate$$) {
    if (!($node$$50_predicate$$ instanceof lf.proc.SelectStep)) {
      return !1;
    }
    $node$$50_predicate$$ = $queryContext$$.getPredicate($node$$50_predicate$$.predicateId);
    return $node$$50_predicate$$ instanceof lf.pred.CombinedPredicate && $node$$50_predicate$$.operator == lf.pred.Operator.OR;
  });
};
lf.proc.MultiColumnOrPass.prototype.findIndexRangeCandidates_ = function $lf$proc$MultiColumnOrPass$$findIndexRangeCandidates_$($selectStep$$, $queryContext$$) {
  var $predicate$$ = $queryContext$$.getPredicate($selectStep$$.predicateId), $tableSchema$$13_tables$$ = $predicate$$.getTables();
  if (1 != $tableSchema$$13_tables$$.size) {
    return null;
  }
  var $tableSchema$$13_tables$$ = lf.structs.set.values($tableSchema$$13_tables$$)[0], $indexCostEstimator$$ = new lf.proc.IndexCostEstimator(this.global_, $tableSchema$$13_tables$$), $indexRangeCandidates$$ = null;
  return $predicate$$.getChildren().every(function($childPredicate$$1_indexRangeCandidate$$) {
    $childPredicate$$1_indexRangeCandidate$$ = $indexCostEstimator$$.chooseIndexFor($queryContext$$, [$childPredicate$$1_indexRangeCandidate$$]);
    goog.isNull($childPredicate$$1_indexRangeCandidate$$) || (goog.isNull($indexRangeCandidates$$) ? $indexRangeCandidates$$ = [$childPredicate$$1_indexRangeCandidate$$] : $indexRangeCandidates$$.push($childPredicate$$1_indexRangeCandidate$$));
    return !goog.isNull($childPredicate$$1_indexRangeCandidate$$);
  }) ? $indexRangeCandidates$$ : null;
};
lf.proc.MultiColumnOrPass.prototype.replaceWithIndexRangeScan_ = function $lf$proc$MultiColumnOrPass$$replaceWithIndexRangeScan_$($selectStep$$, $indexRangeCandidates$$) {
  var $tableAccessFullStep$$ = lf.tree.find(this.rootNode, function($node$$) {
    return $node$$ instanceof lf.proc.TableAccessFullStep && $node$$.table.getName() == $indexRangeCandidates$$[0].indexSchema.tableName;
  })[0], $tableAccessByRowIdStep$$ = new lf.proc.TableAccessByRowIdStep(this.global_, $tableAccessFullStep$$.table), $multiIndexRangeScanStep$$ = new lf.proc.MultiIndexRangeScanStep;
  $tableAccessByRowIdStep$$.addChild($multiIndexRangeScanStep$$);
  $indexRangeCandidates$$.forEach(function($candidate$$1_indexRangeScanStep$$) {
    $candidate$$1_indexRangeScanStep$$ = new lf.proc.IndexRangeScanStep(this.global_, $candidate$$1_indexRangeScanStep$$.indexSchema, $candidate$$1_indexRangeScanStep$$.getKeyRangeCalculator(), !1);
    $multiIndexRangeScanStep$$.addChild($candidate$$1_indexRangeScanStep$$);
  }, this);
  lf.tree.removeNode($selectStep$$);
  lf.tree.replaceNodeWithChain($tableAccessFullStep$$, $tableAccessByRowIdStep$$, $multiIndexRangeScanStep$$);
  return $multiIndexRangeScanStep$$.getRoot();
};
lf.proc.OrderByIndexPass = function $lf$proc$OrderByIndexPass$($global$$) {
  lf.proc.RewritePass.call(this);
  this.global_ = $global$$;
};
goog.inherits(lf.proc.OrderByIndexPass, lf.proc.RewritePass);
lf.proc.OrderByIndexPass.prototype.rewrite = function $lf$proc$OrderByIndexPass$$rewrite$($rootNode$$, $queryContext$$) {
  var $orderByStep$$ = lf.proc.OrderByIndexPass.findOrderByStep_($rootNode$$, $queryContext$$);
  if (goog.isNull($orderByStep$$)) {
    return $rootNode$$;
  }
  var $newSubtreeRoot$$ = this.applyTableAccessFullOptimization_($orderByStep$$);
  $newSubtreeRoot$$ == $orderByStep$$ && ($newSubtreeRoot$$ = this.applyIndexRangeScanStepOptimization_($orderByStep$$));
  return $newSubtreeRoot$$.getRoot();
};
lf.proc.OrderByIndexPass.prototype.applyTableAccessFullOptimization_ = function $lf$proc$OrderByIndexPass$$applyTableAccessFullOptimization_$($orderByStep$$) {
  var $indexRangeScanStep$$4_rootNode$$ = $orderByStep$$, $tableAccessFullStep$$ = lf.proc.OrderByIndexPass.findTableAccessFullStep_($orderByStep$$.getChildAt(0));
  if (!goog.isNull($tableAccessFullStep$$)) {
    var $indexRangeCandidate$$5_tableAccessByRowIdStep$$ = lf.proc.OrderByIndexPass.findIndexCandidateForOrderBy_($tableAccessFullStep$$.table, $orderByStep$$.orderBy);
    if (goog.isNull($indexRangeCandidate$$5_tableAccessByRowIdStep$$)) {
      return $indexRangeScanStep$$4_rootNode$$;
    }
    $indexRangeScanStep$$4_rootNode$$ = new lf.proc.IndexRangeScanStep(this.global_, $indexRangeCandidate$$5_tableAccessByRowIdStep$$.indexSchema, new lf.proc.NotBoundKeyRangeCalculator($indexRangeCandidate$$5_tableAccessByRowIdStep$$.indexSchema), $indexRangeCandidate$$5_tableAccessByRowIdStep$$.isReverse);
    $indexRangeCandidate$$5_tableAccessByRowIdStep$$ = new lf.proc.TableAccessByRowIdStep(this.global_, $tableAccessFullStep$$.table);
    $indexRangeCandidate$$5_tableAccessByRowIdStep$$.addChild($indexRangeScanStep$$4_rootNode$$);
    lf.tree.removeNode($orderByStep$$);
    $indexRangeScanStep$$4_rootNode$$ = lf.tree.replaceNodeWithChain($tableAccessFullStep$$, $indexRangeCandidate$$5_tableAccessByRowIdStep$$, $indexRangeScanStep$$4_rootNode$$);
  }
  return $indexRangeScanStep$$4_rootNode$$;
};
lf.proc.OrderByIndexPass.prototype.applyIndexRangeScanStepOptimization_ = function $lf$proc$OrderByIndexPass$$applyIndexRangeScanStepOptimization_$($orderByStep$$) {
  var $rootNode$$ = $orderByStep$$, $indexRangeScanStep$$ = lf.proc.OrderByIndexPass.findIndexRangeScanStep_($orderByStep$$.getChildAt(0));
  if (!goog.isNull($indexRangeScanStep$$)) {
    var $indexRangeCandidate$$ = lf.proc.OrderByIndexPass.getIndexCandidateForIndexSchema_($indexRangeScanStep$$.index, $orderByStep$$.orderBy);
    if (goog.isNull($indexRangeCandidate$$)) {
      return $rootNode$$;
    }
    $indexRangeScanStep$$.reverseOrder = $indexRangeCandidate$$.isReverse;
    $rootNode$$ = lf.tree.removeNode($orderByStep$$).parent;
  }
  return $rootNode$$;
};
lf.proc.OrderByIndexPass.findIndexRangeScanStep_ = function $lf$proc$OrderByIndexPass$findIndexRangeScanStep_$($indexRangeScanSteps$$1_rootNode$$) {
  $indexRangeScanSteps$$1_rootNode$$ = lf.tree.find($indexRangeScanSteps$$1_rootNode$$, function($node$$) {
    return $node$$ instanceof lf.proc.IndexRangeScanStep;
  }, function($node$$) {
    return 1 != $node$$.getChildCount();
  });
  return 0 < $indexRangeScanSteps$$1_rootNode$$.length ? $indexRangeScanSteps$$1_rootNode$$[0] : null;
};
lf.proc.OrderByIndexPass.findTableAccessFullStep_ = function $lf$proc$OrderByIndexPass$findTableAccessFullStep_$($rootNode$$24_tableAccessFullSteps$$) {
  $rootNode$$24_tableAccessFullSteps$$ = lf.tree.find($rootNode$$24_tableAccessFullSteps$$, function($node$$) {
    return $node$$ instanceof lf.proc.TableAccessFullStep;
  }, function($node$$) {
    return 1 != $node$$.getChildCount();
  });
  return 0 < $rootNode$$24_tableAccessFullSteps$$.length ? $rootNode$$24_tableAccessFullSteps$$[0] : null;
};
lf.proc.OrderByIndexPass.findOrderByStep_ = function $lf$proc$OrderByIndexPass$findOrderByStep_$($rootNode$$, $queryContext$$) {
  return goog.isDef($queryContext$$.orderBy) ? lf.tree.find($rootNode$$, function($node$$) {
    return $node$$ instanceof lf.proc.OrderByStep;
  })[0] : null;
};
lf.proc.OrderByIndexPass.findIndexCandidateForOrderBy_ = function $lf$proc$OrderByIndexPass$findIndexCandidateForOrderBy_$($tableSchema$$, $orderBy$$) {
  for (var $indexCandidate$$ = null, $indexSchemas$$ = $tableSchema$$.getIndices(), $i$$ = 0;$i$$ < $indexSchemas$$.length && goog.isNull($indexCandidate$$);$i$$++) {
    $indexCandidate$$ = lf.proc.OrderByIndexPass.getIndexCandidateForIndexSchema_($indexSchemas$$[$i$$], $orderBy$$);
  }
  return $indexCandidate$$;
};
lf.proc.OrderByIndexPass.getIndexCandidateForIndexSchema_ = function $lf$proc$OrderByIndexPass$getIndexCandidateForIndexSchema_$($indexSchema$$, $orderBy$$) {
  if ($indexSchema$$.columns.length != $orderBy$$.length || !$orderBy$$.every(function($singleOrderBy$$, $j$$) {
    var $indexedColumn$$ = $indexSchema$$.columns[$j$$];
    return $singleOrderBy$$.column.getName() == $indexedColumn$$.schema.getName();
  })) {
    return null;
  }
  var $isNaturalOrReverse$$ = lf.proc.OrderByIndexPass.checkOrder_($orderBy$$, $indexSchema$$);
  return $isNaturalOrReverse$$[0] || $isNaturalOrReverse$$[1] ? {indexSchema:$indexSchema$$, isReverse:$isNaturalOrReverse$$[1]} : null;
};
lf.proc.OrderByIndexPass.checkOrder_ = function $lf$proc$OrderByIndexPass$checkOrder_$($orderBy$$, $indexSchema$$) {
  var $ordersLeftBitmask_xorBitmask$$ = $orderBy$$.reduce(function($soFar$$, $columnOrderBy$$) {
    return $soFar$$ << 1 | ($columnOrderBy$$.order == lf.Order.DESC ? 0 : 1);
  }, 0), $ordersRightBitmask$$ = $indexSchema$$.columns.reduce(function($soFar$$, $indexedColumn$$) {
    return $soFar$$ << 1 | ($indexedColumn$$.order == lf.Order.DESC ? 0 : 1);
  }, 0), $ordersLeftBitmask_xorBitmask$$ = $ordersLeftBitmask_xorBitmask$$ ^ $ordersRightBitmask$$;
  return [0 == $ordersLeftBitmask_xorBitmask$$, $ordersLeftBitmask_xorBitmask$$ == Math.pow(2, Math.max($orderBy$$.length, $indexSchema$$.columns.length)) - 1];
};
lf.proc.PhysicalPlanRewriter = function $lf$proc$PhysicalPlanRewriter$($rootNode$$, $queryContext$$, $rewritePasses$$) {
  this.rootNode_ = $rootNode$$;
  this.queryContext_ = $queryContext$$;
  this.rewritePasses_ = $rewritePasses$$;
};
lf.proc.PhysicalPlanRewriter.prototype.generate = function $lf$proc$PhysicalPlanRewriter$$generate$() {
  this.rewritePasses_.forEach(function($rewritePass$$) {
    this.rootNode_ = $rewritePass$$.rewrite(this.rootNode_, this.queryContext_);
  }, this);
  return this.rootNode_;
};
lf.proc.UpdateStep = function $lf$proc$UpdateStep$($table$$, $updates$$) {
  lf.proc.PhysicalQueryPlanNode.call(this, 1, lf.proc.PhysicalQueryPlanNode.ExecType.FIRST_CHILD);
  this.table_ = $table$$;
  this.updates_ = $updates$$;
};
goog.inherits(lf.proc.UpdateStep, lf.proc.PhysicalQueryPlanNode);
lf.proc.UpdateStep.prototype.toString = function $lf$proc$UpdateStep$$toString$() {
  return "update(" + this.table_.getName() + ")";
};
lf.proc.UpdateStep.prototype.execInternal = function $lf$proc$UpdateStep$$execInternal$($relations$$, $journal$$) {
  var $rows$$ = $relations$$[0].entries.map(function($entry$$) {
    var $clone$$ = this.table_.deserializeRow($entry$$.row.serialize());
    this.updates_.forEach(function($update$$) {
      $clone$$.payload()[$update$$.column.getName()] = $update$$.value;
    }, this);
    return $clone$$;
  }, this);
  $journal$$.update(this.table_, $rows$$);
  return [lf.proc.Relation.createEmpty()];
};
lf.proc.PhysicalPlanFactory = function $lf$proc$PhysicalPlanFactory$($global$$) {
  this.global_ = $global$$;
  this.selectOptimizationPasses_ = [new lf.proc.IndexJoinPass, new lf.proc.IndexRangeScanPass(this.global_), new lf.proc.MultiColumnOrPass(this.global_), new lf.proc.OrderByIndexPass(this.global_), new lf.proc.LimitSkipByIndexPass, new lf.proc.GetRowCountPass(this.global_)];
  this.deleteOptimizationPasses_ = [new lf.proc.IndexRangeScanPass(this.global_)];
};
lf.proc.PhysicalPlanFactory.prototype.create = function $lf$proc$PhysicalPlanFactory$$create$($logicalQueryPlan$$, $queryContext$$) {
  var $logicalQueryPlanRoot$$ = $logicalQueryPlan$$.getRoot();
  if ($logicalQueryPlanRoot$$ instanceof lf.proc.InsertOrReplaceNode || $logicalQueryPlanRoot$$ instanceof lf.proc.InsertNode) {
    return this.createPlan_($logicalQueryPlan$$, $queryContext$$);
  }
  if ($logicalQueryPlanRoot$$ instanceof lf.proc.ProjectNode || $logicalQueryPlanRoot$$ instanceof lf.proc.LimitNode || $logicalQueryPlanRoot$$ instanceof lf.proc.SkipNode) {
    return this.createPlan_($logicalQueryPlan$$, $queryContext$$, this.selectOptimizationPasses_);
  }
  if ($logicalQueryPlanRoot$$ instanceof lf.proc.DeleteNode || $logicalQueryPlanRoot$$ instanceof lf.proc.UpdateNode) {
    return this.createPlan_($logicalQueryPlan$$, $queryContext$$, this.deleteOptimizationPasses_);
  }
  throw new lf.Exception(8);
};
lf.proc.PhysicalPlanFactory.prototype.createPlan_ = function $lf$proc$PhysicalPlanFactory$$createPlan_$($logicalPlan$$, $queryContext$$, $opt_rewritePasses$$) {
  var $rootStep$$ = lf.tree.map($logicalPlan$$.getRoot(), this.mapFn_.bind(this));
  goog.isDefAndNotNull($opt_rewritePasses$$) && ($rootStep$$ = (new lf.proc.PhysicalPlanRewriter($rootStep$$, $queryContext$$, $opt_rewritePasses$$)).generate());
  return new lf.proc.PhysicalQueryPlan($rootStep$$, $logicalPlan$$.getScope());
};
lf.proc.PhysicalPlanFactory.prototype.mapFn_ = function $lf$proc$PhysicalPlanFactory$$mapFn_$($node$$) {
  if ($node$$ instanceof lf.proc.ProjectNode) {
    return new lf.proc.ProjectStep($node$$.columns, $node$$.groupByColumns);
  }
  if ($node$$ instanceof lf.proc.GroupByNode) {
    return new lf.proc.GroupByStep($node$$.columns);
  }
  if ($node$$ instanceof lf.proc.AggregationNode) {
    return new lf.proc.AggregationStep($node$$.columns);
  }
  if ($node$$ instanceof lf.proc.OrderByNode) {
    return new lf.proc.OrderByStep($node$$.orderBy);
  }
  if ($node$$ instanceof lf.proc.SkipNode) {
    return new lf.proc.SkipStep;
  }
  if ($node$$ instanceof lf.proc.LimitNode) {
    return new lf.proc.LimitStep;
  }
  if ($node$$ instanceof lf.proc.SelectNode) {
    return new lf.proc.SelectStep($node$$.predicate.getId());
  }
  if ($node$$ instanceof lf.proc.CrossProductNode) {
    return new lf.proc.CrossProductStep;
  }
  if ($node$$ instanceof lf.proc.JoinNode) {
    return new lf.proc.JoinStep(this.global_, $node$$.predicate, $node$$.isOuterJoin);
  }
  if ($node$$ instanceof lf.proc.TableAccessNode) {
    return new lf.proc.TableAccessFullStep(this.global_, $node$$.table);
  }
  if ($node$$ instanceof lf.proc.DeleteNode) {
    return new lf.proc.DeleteStep($node$$.table);
  }
  if ($node$$ instanceof lf.proc.UpdateNode) {
    return new lf.proc.UpdateStep($node$$.table, $node$$.updates);
  }
  if ($node$$ instanceof lf.proc.InsertOrReplaceNode) {
    return new lf.proc.InsertOrReplaceStep(this.global_, $node$$.table);
  }
  if ($node$$ instanceof lf.proc.InsertNode) {
    return new lf.proc.InsertStep(this.global_, $node$$.table);
  }
  throw new lf.Exception(514);
};
lf.proc.QueryEngine = function $lf$proc$QueryEngine$() {
};
lf.proc.DefaultQueryEngine = function $lf$proc$DefaultQueryEngine$($global$$) {
  this.logicalPlanFactory_ = new lf.proc.LogicalPlanFactory;
  this.physicalPlanFactory_ = new lf.proc.PhysicalPlanFactory($global$$);
};
lf.proc.DefaultQueryEngine.prototype.getPlan = function $lf$proc$DefaultQueryEngine$$getPlan$($query$$) {
  var $logicalQueryPlan$$ = this.logicalPlanFactory_.create($query$$);
  return this.physicalPlanFactory_.create($logicalQueryPlan$$, $query$$);
};
lf.proc.LockManager = function $lf$proc$LockManager$() {
  this.lockTable_ = lf.structs.map.create();
};
lf.proc.LockType = {EXCLUSIVE:0, RESERVED_READ_ONLY:1, RESERVED_READ_WRITE:2, SHARED:3};
lf.proc.LockManager.prototype.getEntry_ = function $lf$proc$LockManager$$getEntry_$($dataItem$$) {
  var $lockTableEntry$$ = this.lockTable_.get($dataItem$$.getName()) || null;
  goog.isNull($lockTableEntry$$) && ($lockTableEntry$$ = new lf.proc.LockTableEntry_, this.lockTable_.set($dataItem$$.getName(), $lockTableEntry$$));
  return $lockTableEntry$$;
};
lf.proc.LockManager.prototype.grantLock_ = function $lf$proc$LockManager$$grantLock_$($taskId$$, $dataItems$$, $lockType$$) {
  $dataItems$$.forEach(function($dataItem$$) {
    this.getEntry_($dataItem$$).grantLock($taskId$$, $lockType$$);
  }, this);
};
lf.proc.LockManager.prototype.canAcquireLock_ = function $lf$proc$LockManager$$canAcquireLock_$($taskId$$, $dataItems$$, $lockType$$) {
  var $canAcquireLock$$ = !0;
  $dataItems$$.forEach(function($dataItem$$) {
    $canAcquireLock$$ && ($canAcquireLock$$ = this.getEntry_($dataItem$$).canAcquireLock($taskId$$, $lockType$$));
  }, this);
  return $canAcquireLock$$;
};
lf.proc.LockManager.prototype.requestLock = function $lf$proc$LockManager$$requestLock$($taskId$$, $dataItems$$, $lockType$$) {
  var $canAcquireLock$$ = this.canAcquireLock_($taskId$$, $dataItems$$, $lockType$$);
  $canAcquireLock$$ && this.grantLock_($taskId$$, $dataItems$$, $lockType$$);
  return $canAcquireLock$$;
};
lf.proc.LockManager.prototype.releaseLock = function $lf$proc$LockManager$$releaseLock$($taskId$$, $dataItems$$) {
  $dataItems$$.forEach(function($dataItem$$) {
    this.getEntry_($dataItem$$).releaseLock($taskId$$);
  }, this);
};
lf.proc.LockManager.prototype.clearReservedLocks = function $lf$proc$LockManager$$clearReservedLocks$($dataItems$$) {
  $dataItems$$.forEach(function($dataItem$$) {
    this.getEntry_($dataItem$$).reservedReadWriteLock = null;
  }, this);
};
lf.proc.LockTableEntry_ = function $lf$proc$LockTableEntry_$() {
  this.sharedLocks = this.reservedReadOnlyLocks = this.reservedReadWriteLock = this.exclusiveLock = null;
};
lf.proc.LockTableEntry_.prototype.releaseLock = function $lf$proc$LockTableEntry_$$releaseLock$($taskId$$) {
  this.exclusiveLock == $taskId$$ && (this.exclusiveLock = null);
  this.reservedReadWriteLock == $taskId$$ && (this.reservedReadWriteLock = null);
  goog.isNull(this.reservedReadOnlyLocks) || this.reservedReadOnlyLocks.delete($taskId$$);
  goog.isNull(this.sharedLocks) || this.sharedLocks.delete($taskId$$);
};
lf.proc.LockTableEntry_.prototype.canAcquireLock = function $lf$proc$LockTableEntry_$$canAcquireLock$($taskId$$, $lockType$$) {
  var $noReservedReadOnlyLocksExist$$ = goog.isNull(this.reservedReadOnlyLocks) || 0 == this.reservedReadOnlyLocks.size;
  return $lockType$$ == lf.proc.LockType.EXCLUSIVE ? (goog.isNull(this.sharedLocks) || 0 == this.sharedLocks.size) && $noReservedReadOnlyLocksExist$$ && goog.isNull(this.exclusiveLock) && !goog.isNull(this.reservedReadWriteLock) && this.reservedReadWriteLock == $taskId$$ : $lockType$$ == lf.proc.LockType.SHARED ? goog.isNull(this.exclusiveLock) && goog.isNull(this.reservedReadWriteLock) && !goog.isNull(this.reservedReadOnlyLocks) && this.reservedReadOnlyLocks.has($taskId$$) : $lockType$$ == lf.proc.LockType.RESERVED_READ_ONLY ? 
  goog.isNull(this.reservedReadWriteLock) : $noReservedReadOnlyLocksExist$$ && (goog.isNull(this.reservedReadWriteLock) || this.reservedReadWriteLock == $taskId$$);
};
lf.proc.LockTableEntry_.prototype.grantLock = function $lf$proc$LockTableEntry_$$grantLock$($taskId$$, $lockType$$) {
  $lockType$$ == lf.proc.LockType.EXCLUSIVE ? (this.reservedReadWriteLock = null, this.exclusiveLock = $taskId$$) : $lockType$$ == lf.proc.LockType.SHARED ? (goog.isNull(this.sharedLocks) && (this.sharedLocks = lf.structs.set.create()), this.sharedLocks.add($taskId$$), goog.isNull(this.reservedReadOnlyLocks) && (this.reservedReadOnlyLocks = lf.structs.set.create()), this.reservedReadOnlyLocks.delete($taskId$$)) : $lockType$$ == lf.proc.LockType.RESERVED_READ_ONLY ? (goog.isNull(this.reservedReadOnlyLocks) && 
  (this.reservedReadOnlyLocks = lf.structs.set.create()), this.reservedReadOnlyLocks.add($taskId$$)) : $lockType$$ == lf.proc.LockType.RESERVED_READ_WRITE && (this.reservedReadWriteLock = $taskId$$);
};
lf.proc.Runner = function $lf$proc$Runner$() {
  this.queue_ = new lf.proc.Runner.TaskQueue_;
  this.lockManager_ = new lf.proc.LockManager;
};
lf.proc.Runner.prototype.scheduleTask = function $lf$proc$Runner$$scheduleTask$($task$$) {
  ($task$$.getPriority() < lf.proc.TaskPriority.USER_QUERY_TASK || $task$$.getPriority() < lf.proc.TaskPriority.TRANSACTION_TASK) && this.lockManager_.clearReservedLocks($task$$.getScope());
  this.queue_.insert($task$$);
  this.consumePending_();
  return $task$$.getResolver().promise;
};
lf.proc.Runner.prototype.consumePending_ = function $lf$proc$Runner$$consumePending_$() {
  for (var $queue$$ = this.queue_.getValues(), $i$$ = 0;$i$$ < $queue$$.length;$i$$++) {
    var $task$$ = $queue$$[$i$$], $acquiredLock$$ = !1;
    if ($acquiredLock$$ = $task$$.getType() == lf.TransactionType.READ_ONLY ? this.requestTwoPhaseLock_($task$$, lf.proc.LockType.RESERVED_READ_ONLY, lf.proc.LockType.SHARED) : this.requestTwoPhaseLock_($task$$, lf.proc.LockType.RESERVED_READ_WRITE, lf.proc.LockType.EXCLUSIVE)) {
      this.queue_.remove($task$$), this.execTask_($task$$);
    }
  }
};
lf.proc.Runner.prototype.requestTwoPhaseLock_ = function $lf$proc$Runner$$requestTwoPhaseLock_$($task$$, $lockType1$$, $lockType2$$) {
  var $acquiredLock$$ = !1;
  this.lockManager_.requestLock($task$$.getId(), $task$$.getScope(), $lockType1$$) && ($acquiredLock$$ = this.lockManager_.requestLock($task$$.getId(), $task$$.getScope(), $lockType2$$));
  return $acquiredLock$$;
};
lf.proc.Runner.prototype.execTask_ = function $lf$proc$Runner$$execTask_$($task$$) {
  $task$$.exec().then(this.onTaskSuccess_.bind(this, $task$$), this.onTaskError_.bind(this, $task$$));
};
lf.proc.Runner.prototype.onTaskSuccess_ = function $lf$proc$Runner$$onTaskSuccess_$($task$$, $results$$) {
  this.lockManager_.releaseLock($task$$.getId(), $task$$.getScope());
  $task$$.getResolver().resolve($results$$);
  this.consumePending_();
};
lf.proc.Runner.prototype.onTaskError_ = function $lf$proc$Runner$$onTaskError_$($task$$, $error$$) {
  this.lockManager_.releaseLock($task$$.getId(), $task$$.getScope());
  $task$$.getResolver().reject($error$$);
  this.consumePending_();
};
lf.proc.Runner.TaskQueue_ = function $lf$proc$Runner$TaskQueue_$() {
  this.queue_ = [];
};
lf.proc.Runner.TaskQueue_.prototype.insert = function $lf$proc$Runner$TaskQueue_$$insert$($task$$) {
  lf.structs.array.binaryInsert(this.queue_, $task$$, function($t1$$, $t2$$) {
    var $priorityDiff$$ = $t1$$.getPriority() - $t2$$.getPriority();
    return 0 == $priorityDiff$$ ? $t1$$.getId() - $t2$$.getId() : $priorityDiff$$;
  });
};
lf.proc.Runner.TaskQueue_.prototype.getValues = function $lf$proc$Runner$TaskQueue_$$getValues$() {
  return this.queue_.slice();
};
lf.proc.Runner.TaskQueue_.prototype.remove = function $lf$proc$Runner$TaskQueue_$$remove$($task$$) {
  return goog.array.remove(this.queue_, $task$$);
};
lf.base = {};
lf.base.init = function $lf$base$init$($global$$, $opt_options$$) {
  var $schema$$ = $global$$.getService(lf.service.SCHEMA), $options$$ = $opt_options$$ || {}, $backStore_cache$$ = new lf.cache.DefaultCache($schema$$);
  $global$$.registerService(lf.service.CACHE, $backStore_cache$$);
  var $backStore_cache$$ = null, $observeExternalChanges$$ = !1;
  if (lf.Flags.MEMORY_ONLY) {
    $backStore_cache$$ = new lf.backstore.Memory($schema$$);
  } else {
    switch(goog.isDefAndNotNull($options$$.storeType) ? $backStore_cache$$ = $options$$.storeType : ($backStore_cache$$ = lf.Capability.get(), $backStore_cache$$ = $backStore_cache$$.indexedDb ? lf.schema.DataStoreType.INDEXED_DB : $backStore_cache$$.webSql ? lf.schema.DataStoreType.WEB_SQL : lf.schema.DataStoreType.MEMORY), $backStore_cache$$) {
      case lf.schema.DataStoreType.INDEXED_DB:
        $backStore_cache$$ = new lf.backstore.IndexedDB($global$$, $schema$$);
        break;
      case lf.schema.DataStoreType.MEMORY:
        $backStore_cache$$ = new lf.backstore.Memory($schema$$);
        break;
      case lf.schema.DataStoreType.OBSERVABLE_STORE:
        $backStore_cache$$ = new lf.backstore.ObservableStore($schema$$);
        break;
      case lf.schema.DataStoreType.WEB_SQL:
        $backStore_cache$$ = new lf.backstore.WebSql($global$$, $schema$$, $options$$.webSqlDbSize);
        break;
      case lf.schema.DataStoreType.FIREBASE:
        $backStore_cache$$ = new lf.backstore.Firebase($schema$$, $options$$.firebase);
        $observeExternalChanges$$ = !0;
        break;
      default:
        throw new lf.Exception(300);;
    }
  }
  $global$$.registerService(lf.service.BACK_STORE, $backStore_cache$$);
  var $indexStore$$ = new lf.index.MemoryIndexStore;
  $global$$.registerService(lf.service.INDEX_STORE, $indexStore$$);
  return $backStore_cache$$.init($options$$.onUpgrade).then(function() {
    var $observerRegistry_queryEngine_runner$$ = new lf.proc.DefaultQueryEngine($global$$);
    $global$$.registerService(lf.service.QUERY_ENGINE, $observerRegistry_queryEngine_runner$$);
    $observerRegistry_queryEngine_runner$$ = new lf.proc.Runner;
    $global$$.registerService(lf.service.RUNNER, $observerRegistry_queryEngine_runner$$);
    $observerRegistry_queryEngine_runner$$ = new lf.ObserverRegistry;
    $global$$.registerService(lf.service.OBSERVER_REGISTRY, $observerRegistry_queryEngine_runner$$);
    return $indexStore$$.init($schema$$);
  }).then(function() {
    $observeExternalChanges$$ && (new lf.backstore.ExternalChangeObserver($global$$)).startObserving();
    $options$$.enableInspector && lf.base.enableInspector_($global$$);
    return (new lf.cache.Prefetcher($global$$)).init($schema$$);
  });
};
lf.base.enableInspector_ = function $lf$base$enableInspector_$($global$$) {
  window.top["#lfInspect"] = lf.debug.inspect;
};
lf.base.closeDatabase = function $lf$base$closeDatabase$($global$$) {
  try {
    $global$$.getService(lf.service.BACK_STORE).close();
  } catch ($e$$) {
  }
};
lf.op = {};
lf.op.and = function $lf$op$and$($var_args$$) {
  var $args$$ = Array.prototype.slice.call(arguments);
  return lf.op.createPredicate_(lf.pred.Operator.AND, $args$$);
};
goog.exportSymbol("lf.op.and", lf.op.and);
lf.op.or = function $lf$op$or$($var_args$$) {
  var $args$$ = Array.prototype.slice.call(arguments);
  return lf.op.createPredicate_(lf.pred.Operator.OR, $args$$);
};
goog.exportSymbol("lf.op.or", lf.op.or);
lf.op.createPredicate_ = function $lf$op$createPredicate_$($operator$$, $predicates$$) {
  var $condition$$ = new lf.pred.CombinedPredicate($operator$$);
  $predicates$$.forEach(function($predicate$$) {
    $condition$$.addChild($predicate$$);
  });
  return $condition$$;
};
lf.op.not = function $lf$op$not$($operand$$) {
  $operand$$.setComplement(!0);
  return $operand$$;
};
goog.exportSymbol("lf.op.not", lf.op.not);
lf.pred.createPredicate = function $lf$pred$createPredicate$($leftOperand$$, $rightOperand$$, $evaluatorType$$) {
  return goog.isNull($rightOperand$$) ? new lf.pred.ValuePredicate($leftOperand$$, $rightOperand$$, $evaluatorType$$) : goog.isDef($rightOperand$$.getNormalizedName) ? new lf.pred.JoinPredicate($leftOperand$$, $rightOperand$$, $evaluatorType$$) : new lf.pred.ValuePredicate($leftOperand$$, $rightOperand$$, $evaluatorType$$);
};
lf.Database = function $lf$Database$() {
};
lf.proc.ExportTask = function $lf$proc$ExportTask$($global$$) {
  this.global_ = $global$$;
  this.schema_ = $global$$.getService(lf.service.SCHEMA);
  this.scope_ = lf.structs.set.create(this.schema_.tables());
  this.resolver_ = goog.Promise.withResolver();
};
lf.proc.ExportTask.prototype.execSync = function $lf$proc$ExportTask$$execSync$() {
  var $indexStore$$ = this.global_.getService(lf.service.INDEX_STORE), $cache$$ = this.global_.getService(lf.service.CACHE), $tables$$ = {};
  this.schema_.tables().forEach(function($table$$) {
    var $payloads_rowIds$$ = $indexStore$$.get($table$$.getRowIdIndexName()).getRange(), $payloads_rowIds$$ = $cache$$.getMany($payloads_rowIds$$).map(function($row$$) {
      return $row$$.payload();
    });
    $tables$$[$table$$.getName()] = $payloads_rowIds$$;
  });
  return {name:this.schema_.name(), version:this.schema_.version(), tables:$tables$$};
};
lf.proc.ExportTask.prototype.exec = function $lf$proc$ExportTask$$exec$() {
  var $entry$$38_results$$ = this.execSync(), $entry$$38_results$$ = new lf.proc.RelationEntry(new lf.Row(lf.Row.DUMMY_ID, $entry$$38_results$$), !0);
  return goog.Promise.resolve([new lf.proc.Relation([$entry$$38_results$$], [])]);
};
lf.proc.ExportTask.prototype.getType = function $lf$proc$ExportTask$$getType$() {
  return lf.TransactionType.READ_ONLY;
};
lf.proc.ExportTask.prototype.getScope = function $lf$proc$ExportTask$$getScope$() {
  return this.scope_;
};
lf.proc.ExportTask.prototype.getResolver = function $lf$proc$ExportTask$$getResolver$() {
  return this.resolver_;
};
lf.proc.ExportTask.prototype.getId = function $lf$proc$ExportTask$$getId$() {
  return goog.getUid(this);
};
lf.proc.ExportTask.prototype.getPriority = function $lf$proc$ExportTask$$getPriority$() {
  return lf.proc.TaskPriority.EXPORT_TASK;
};
lf.proc.ImportTask = function $lf$proc$ImportTask$($global$$, $data$$) {
  this.global_ = $global$$;
  this.schema_ = $global$$.getService(lf.service.SCHEMA);
  this.scope_ = lf.structs.set.create(this.schema_.tables());
  this.resolver_ = goog.Promise.withResolver();
  this.data_ = $data$$;
  this.backStore_ = $global$$.getService(lf.service.BACK_STORE);
  this.cache_ = $global$$.getService(lf.service.CACHE);
  this.indexStore_ = $global$$.getService(lf.service.INDEX_STORE);
};
lf.proc.ImportTask.prototype.exec = function $lf$proc$ImportTask$$exec$() {
  if (!(this.backStore_ instanceof lf.backstore.IndexedDB || this.backStore_ instanceof lf.backstore.Memory || this.backStore_ instanceof lf.backstore.WebSql)) {
    throw new lf.Exception(300);
  }
  if (!this.isEmptyDB_()) {
    throw new lf.Exception(110);
  }
  if (this.schema_.name() != this.data_.name || this.schema_.version() != this.data_.version) {
    throw new lf.Exception(111);
  }
  if (!goog.isDefAndNotNull(this.data_.tables)) {
    throw new lf.Exception(112);
  }
  return this.import_();
};
lf.proc.ImportTask.prototype.getType = function $lf$proc$ImportTask$$getType$() {
  return lf.TransactionType.READ_WRITE;
};
lf.proc.ImportTask.prototype.getScope = function $lf$proc$ImportTask$$getScope$() {
  return this.scope_;
};
lf.proc.ImportTask.prototype.getResolver = function $lf$proc$ImportTask$$getResolver$() {
  return this.resolver_;
};
lf.proc.ImportTask.prototype.getId = function $lf$proc$ImportTask$$getId$() {
  return goog.getUid(this);
};
lf.proc.ImportTask.prototype.getPriority = function $lf$proc$ImportTask$$getPriority$() {
  return lf.proc.TaskPriority.IMPORT_TASK;
};
lf.proc.ImportTask.prototype.isEmptyDB_ = function $lf$proc$ImportTask$$isEmptyDB_$() {
  for (var $tables$$ = this.schema_.tables(), $i$$ = 0;$i$$ < $tables$$.length;++$i$$) {
    if (0 < this.indexStore_.get($tables$$[$i$$].getRowIdIndexName()).stats().totalRows) {
      return !1;
    }
  }
  return !0;
};
lf.proc.ImportTask.prototype.import_ = function $lf$proc$ImportTask$$import_$() {
  var $journal$$5_tx$$ = new lf.cache.Journal(this.global_, this.scope_), $journal$$5_tx$$ = this.backStore_.createTx(this.getType(), lf.structs.set.values(this.scope_), $journal$$5_tx$$), $tableName$$;
  for ($tableName$$ in this.data_.tables) {
    var $tableSchema$$ = this.schema_.table($tableName$$), $rows$$ = this.data_.tables[$tableName$$].map(function($value$$) {
      return $tableSchema$$.createRow($value$$);
    }), $table$$ = $journal$$5_tx$$.getTable($tableName$$, $tableSchema$$.deserializeRow, lf.backstore.TableType.DATA);
    this.cache_.setMany($tableName$$, $rows$$);
    var $indices$$ = this.indexStore_.getTableIndices($tableName$$);
    $rows$$.forEach(function($row$$) {
      $indices$$.forEach(function($index$$) {
        var $key$$ = $row$$.keyOfIndex($index$$.getName());
        $index$$.add($key$$, $row$$.id());
      });
    });
    $table$$.put($rows$$);
  }
  return $journal$$5_tx$$.commit();
};
lf.proc.TransactionTask = function $lf$proc$TransactionTask$($global$$, $scope$$) {
  this.global_ = $global$$;
  this.backStore_ = $global$$.getService(lf.service.BACK_STORE);
  this.runner_ = $global$$.getService(lf.service.RUNNER);
  this.observerRegistry_ = $global$$.getService(lf.service.OBSERVER_REGISTRY);
  this.scope_ = lf.structs.set.create($scope$$);
  this.journal_ = new lf.cache.Journal(this.global_, this.scope_);
  this.resolver_ = goog.Promise.withResolver();
  this.execResolver_ = goog.Promise.withResolver();
  this.acquireScopeResolver_ = goog.Promise.withResolver();
};
lf.proc.TransactionTask.prototype.exec = function $lf$proc$TransactionTask$$exec$() {
  this.acquireScopeResolver_.resolve();
  return this.execResolver_.promise;
};
lf.proc.TransactionTask.prototype.getType = function $lf$proc$TransactionTask$$getType$() {
  return lf.TransactionType.READ_WRITE;
};
lf.proc.TransactionTask.prototype.getScope = function $lf$proc$TransactionTask$$getScope$() {
  return this.scope_;
};
lf.proc.TransactionTask.prototype.getResolver = function $lf$proc$TransactionTask$$getResolver$() {
  return this.resolver_;
};
lf.proc.TransactionTask.prototype.getId = function $lf$proc$TransactionTask$$getId$() {
  return goog.getUid(this);
};
lf.proc.TransactionTask.prototype.getPriority = function $lf$proc$TransactionTask$$getPriority$() {
  return lf.proc.TaskPriority.TRANSACTION_TASK;
};
lf.proc.TransactionTask.prototype.acquireScope = function $lf$proc$TransactionTask$$acquireScope$() {
  this.runner_.scheduleTask(this);
  return this.acquireScopeResolver_.promise;
};
lf.proc.TransactionTask.prototype.attachQuery = function $lf$proc$TransactionTask$$attachQuery$($queryBuilder_taskItem$$) {
  $queryBuilder_taskItem$$ = $queryBuilder_taskItem$$.getTaskItem();
  return $queryBuilder_taskItem$$.plan.getRoot().exec(this.journal_, $queryBuilder_taskItem$$.context).then(function($relations$$) {
    return $relations$$[0].getPayloads();
  }, function($e$$) {
    this.journal_.rollback();
    var $error$$ = new goog.Promise.CancellationError($e$$.name);
    this.execResolver_.reject($error$$);
    throw $e$$;
  }.bind(this));
};
lf.proc.TransactionTask.prototype.commit = function $lf$proc$TransactionTask$$commit$() {
  this.tx_ = this.backStore_.createTx(this.getType(), lf.structs.set.values(this.scope_), this.journal_);
  this.tx_.commit().then(function() {
    this.scheduleObserverTask_();
    this.execResolver_.resolve();
  }.bind(this), function($e$$) {
    this.journal_.rollback();
    this.execResolver_.reject($e$$);
  }.bind(this));
  return this.resolver_.promise;
};
lf.proc.TransactionTask.prototype.rollback = function $lf$proc$TransactionTask$$rollback$() {
  this.journal_.rollback();
  this.execResolver_.resolve();
  return this.resolver_.promise;
};
lf.proc.TransactionTask.prototype.scheduleObserverTask_ = function $lf$proc$TransactionTask$$scheduleObserverTask_$() {
  var $items$$4_observerTask$$ = this.observerRegistry_.getTaskItemsForTables(this.scope_);
  0 != $items$$4_observerTask$$.length && ($items$$4_observerTask$$ = new lf.proc.ObserverQueryTask(this.global_, $items$$4_observerTask$$), this.runner_.scheduleTask($items$$4_observerTask$$));
};
lf.proc.TransactionTask.prototype.stats = function $lf$proc$TransactionTask$$stats$() {
  var $results$$ = null;
  goog.isDefAndNotNull(this.tx_) && ($results$$ = this.tx_.stats());
  return goog.isNull($results$$) ? lf.TransactionStats.getDefault() : $results$$;
};
lf.proc.UserQueryTask = function $lf$proc$UserQueryTask$($global$$, $items$$) {
  lf.proc.QueryTask.call(this, $global$$, $items$$);
  this.runner_ = $global$$.getService(lf.service.RUNNER);
  this.observerRegistry_ = $global$$.getService(lf.service.OBSERVER_REGISTRY);
};
goog.inherits(lf.proc.UserQueryTask, lf.proc.QueryTask);
lf.proc.UserQueryTask.prototype.getPriority = function $lf$proc$UserQueryTask$$getPriority$() {
  return lf.proc.TaskPriority.USER_QUERY_TASK;
};
lf.proc.UserQueryTask.prototype.onSuccess = function $lf$proc$UserQueryTask$$onSuccess$($results$$) {
  this.getType() == lf.TransactionType.READ_ONLY ? this.notifyObserversDirectly_($results$$) : this.scheduleObserverTask_();
};
lf.proc.UserQueryTask.prototype.notifyObserversDirectly_ = function $lf$proc$UserQueryTask$$notifyObserversDirectly_$($results$$) {
  this.queries.forEach(function($query$$, $index$$) {
    $query$$ instanceof lf.query.SelectContext && this.observerRegistry_.updateResultsForQuery($query$$, $results$$[$index$$]);
  }, this);
};
lf.proc.UserQueryTask.prototype.scheduleObserverTask_ = function $lf$proc$UserQueryTask$$scheduleObserverTask_$() {
  var $items$$6_observerTask$$ = this.observerRegistry_.getTaskItemsForTables(this.getScope());
  0 != $items$$6_observerTask$$.length && ($items$$6_observerTask$$ = new lf.proc.ObserverQueryTask(this.global, $items$$6_observerTask$$), this.runner_.scheduleTask($items$$6_observerTask$$));
};
lf.proc.Transaction = function $lf$proc$Transaction$($global$$) {
  this.global_ = $global$$;
  this.runner_ = $global$$.getService(lf.service.RUNNER);
  this.task_ = null;
  this.state_ = lf.proc.TransactionState_.CREATED;
  0 == lf.proc.StateTransitions_.size && this.initStateTransitions_();
};
goog.exportSymbol("lf.proc.Transaction", lf.proc.Transaction);
lf.proc.TransactionState_ = {CREATED:0, ACQUIRING_SCOPE:1, ACQUIRED_SCOPE:2, EXECUTING_QUERY:3, EXECUTING_AND_COMMITTING:4, COMMITTING:5, ROLLING_BACK:6, FINALIZED:7};
lf.proc.StateTransitions_ = lf.structs.map.create();
lf.proc.Transaction.prototype.initStateTransitions_ = function $lf$proc$Transaction$$initStateTransitions_$() {
  lf.proc.StateTransitions_.set(lf.proc.TransactionState_.CREATED, lf.structs.set.create([lf.proc.TransactionState_.ACQUIRING_SCOPE, lf.proc.TransactionState_.EXECUTING_AND_COMMITTING]));
  lf.proc.StateTransitions_.set(lf.proc.TransactionState_.ACQUIRING_SCOPE, lf.structs.set.create([lf.proc.TransactionState_.ACQUIRED_SCOPE]));
  lf.proc.StateTransitions_.set(lf.proc.TransactionState_.ACQUIRED_SCOPE, lf.structs.set.create([lf.proc.TransactionState_.EXECUTING_QUERY, lf.proc.TransactionState_.COMMITTING, lf.proc.TransactionState_.ROLLING_BACK]));
  lf.proc.StateTransitions_.set(lf.proc.TransactionState_.EXECUTING_QUERY, lf.structs.set.create([lf.proc.TransactionState_.ACQUIRED_SCOPE, lf.proc.TransactionState_.FINALIZED]));
  lf.proc.StateTransitions_.set(lf.proc.TransactionState_.EXECUTING_AND_COMMITTING, lf.structs.set.create([lf.proc.TransactionState_.FINALIZED]));
  lf.proc.StateTransitions_.set(lf.proc.TransactionState_.COMMITTING, lf.structs.set.create([lf.proc.TransactionState_.FINALIZED]));
  lf.proc.StateTransitions_.set(lf.proc.TransactionState_.ROLLING_BACK, lf.structs.set.create([lf.proc.TransactionState_.FINALIZED]));
};
lf.proc.Transaction.prototype.stateTransition_ = function $lf$proc$Transaction$$stateTransition_$($newState$$) {
  var $nextStates$$ = lf.proc.StateTransitions_.get(this.state_) || null;
  if (goog.isNull($nextStates$$) || !$nextStates$$.has($newState$$)) {
    throw new lf.Exception(107, this.state_, $newState$$);
  }
  this.state_ = $newState$$;
};
lf.proc.Transaction.prototype.exec = function $lf$proc$Transaction$$exec$($queryBuilders$$) {
  this.stateTransition_(lf.proc.TransactionState_.EXECUTING_AND_COMMITTING);
  var $taskItems$$ = [];
  try {
    $queryBuilders$$.forEach(function($queryBuilder$$) {
      $queryBuilder$$.assertExecPreconditions();
      $taskItems$$.push($queryBuilder$$.getTaskItem());
    }, this);
  } catch ($e$$) {
    return this.stateTransition_(lf.proc.TransactionState_.FINALIZED), goog.Promise.reject($e$$);
  }
  this.task_ = new lf.proc.UserQueryTask(this.global_, $taskItems$$);
  return this.runner_.scheduleTask(this.task_).then(function($results$$) {
    this.stateTransition_(lf.proc.TransactionState_.FINALIZED);
    return $results$$.map(function($relation$$) {
      return $relation$$.getPayloads();
    });
  }.bind(this), function($e$$) {
    this.stateTransition_(lf.proc.TransactionState_.FINALIZED);
    throw $e$$;
  }.bind(this));
};
goog.exportProperty(lf.proc.Transaction.prototype, "exec", lf.proc.Transaction.prototype.exec);
lf.proc.Transaction.prototype.begin = function $lf$proc$Transaction$$begin$($scope$$) {
  this.stateTransition_(lf.proc.TransactionState_.ACQUIRING_SCOPE);
  this.task_ = new lf.proc.TransactionTask(this.global_, $scope$$);
  return this.task_.acquireScope().then(function() {
    this.stateTransition_(lf.proc.TransactionState_.ACQUIRED_SCOPE);
  }.bind(this));
};
goog.exportProperty(lf.proc.Transaction.prototype, "begin", lf.proc.Transaction.prototype.begin);
lf.proc.Transaction.prototype.attach = function $lf$proc$Transaction$$attach$($query$$) {
  this.stateTransition_(lf.proc.TransactionState_.EXECUTING_QUERY);
  return this.task_.attachQuery($query$$).then(function($result$$) {
    this.stateTransition_(lf.proc.TransactionState_.ACQUIRED_SCOPE);
    return $result$$;
  }.bind(this), function($e$$) {
    this.stateTransition_(lf.proc.TransactionState_.FINALIZED);
    throw $e$$;
  }.bind(this));
};
goog.exportProperty(lf.proc.Transaction.prototype, "attach", lf.proc.Transaction.prototype.attach);
lf.proc.Transaction.prototype.commit = function $lf$proc$Transaction$$commit$() {
  this.stateTransition_(lf.proc.TransactionState_.COMMITTING);
  return this.task_.commit().then(function() {
    this.stateTransition_(lf.proc.TransactionState_.FINALIZED);
  }.bind(this));
};
goog.exportProperty(lf.proc.Transaction.prototype, "commit", lf.proc.Transaction.prototype.commit);
lf.proc.Transaction.prototype.rollback = function $lf$proc$Transaction$$rollback$() {
  this.stateTransition_(lf.proc.TransactionState_.ROLLING_BACK);
  return this.task_.rollback().then(function() {
    this.stateTransition_(lf.proc.TransactionState_.FINALIZED);
  }.bind(this));
};
goog.exportProperty(lf.proc.Transaction.prototype, "rollback", lf.proc.Transaction.prototype.rollback);
lf.proc.Transaction.prototype.stats = function $lf$proc$Transaction$$stats$() {
  if (this.state_ != lf.proc.TransactionState_.FINALIZED) {
    throw new lf.Exception(105);
  }
  return this.task_.stats();
};
goog.exportProperty(lf.proc.Transaction.prototype, "stats", lf.proc.Transaction.prototype.stats);
lf.query.Builder = function $lf$query$Builder$() {
};
lf.query.Select = function $lf$query$Select$() {
};
lf.query.Insert = function $lf$query$Insert$() {
};
lf.query.Update = function $lf$query$Update$() {
};
lf.query.Delete = function $lf$query$Delete$() {
};
lf.query.escapeSqlValue_ = function $lf$query$escapeSqlValue_$($type$$, $value$$) {
  if (!goog.isDefAndNotNull($value$$)) {
    return "NULL";
  }
  switch($type$$) {
    case lf.Type.BOOLEAN:
      return $value$$ ? 1 : 0;
    case lf.Type.INTEGER:
    ;
    case lf.Type.NUMBER:
      return $value$$;
    case lf.Type.ARRAY_BUFFER:
      return "'" + lf.Row.binToHex($value$$) + "'";
    default:
      return "'" + $value$$.toString() + "'";
  }
};
lf.query.insertToSql_ = function $lf$query$insertToSql_$($query$$, $stripValueInfo$$) {
  var $prefix$$ = $query$$.allowReplace ? "INSERT OR REPLACE" : "INSERT", $columns$$ = $query$$.into.getColumns(), $prefix$$ = $prefix$$ + (" INTO " + $query$$.into.getName() + "("), $prefix$$ = $prefix$$ + $columns$$.map(function($col$$) {
    return $col$$.getName();
  }).join(", "), $prefix$$ = $prefix$$ + ") VALUES (";
  return $query$$.values.map(function($row$$) {
    var $values$$ = $columns$$.map(function($col$$) {
      var $rawVal$$ = $row$$.payload()[$col$$.getName()];
      return $stripValueInfo$$ ? goog.isDefAndNotNull($rawVal$$) ? "#" : "NULL" : lf.query.escapeSqlValue_($col$$.getType(), $rawVal$$);
    });
    return $prefix$$ + $values$$.join(", ") + ");";
  }).join("\n");
};
lf.query.evaluatorToSql_ = function $lf$query$evaluatorToSql_$($op$$) {
  switch($op$$) {
    case lf.eval.Type.BETWEEN:
      return "BETWEEN";
    case lf.eval.Type.EQ:
      return "=";
    case lf.eval.Type.GTE:
      return ">=";
    case lf.eval.Type.GT:
      return ">";
    case lf.eval.Type.IN:
      return "IN";
    case lf.eval.Type.LTE:
      return "<=";
    case lf.eval.Type.LT:
      return "<";
    case lf.eval.Type.MATCH:
      return "LIKE";
    case lf.eval.Type.NEQ:
      return "<>";
    default:
      return "UNKNOWN";
  }
};
lf.query.valueToSql_ = function $lf$query$valueToSql_$($value$$, $op$$, $type$$, $stripValueInfo$$) {
  return $value$$ instanceof lf.Binder ? "?" + $value$$.getIndex().toString() : $stripValueInfo$$ ? goog.isDefAndNotNull($value$$) ? "#" : "NULL" : $op$$ == lf.eval.Type.MATCH ? "'" + $value$$.toString() + "'" : $op$$ == lf.eval.Type.IN ? "(" + $value$$.map(function($e$$) {
    return lf.query.escapeSqlValue_($type$$, $e$$);
  }).join(", ") + ")" : $op$$ == lf.eval.Type.BETWEEN ? lf.query.escapeSqlValue_($type$$, $value$$[0]) + " AND " + lf.query.escapeSqlValue_($type$$, $value$$[1]) : lf.query.escapeSqlValue_($type$$, $value$$).toString();
};
lf.query.valuePredicateToSql_ = function $lf$query$valuePredicateToSql_$($pred$$, $stripValueInfo$$) {
  var $column$$ = $pred$$.column.getNormalizedName(), $op$$ = lf.query.evaluatorToSql_($pred$$.evaluatorType), $value$$ = lf.query.valueToSql_($pred$$.value, $pred$$.evaluatorType, $pred$$.column.getType(), $stripValueInfo$$);
  return "=" == $op$$ && "NULL" == $value$$ ? [$column$$, "IS NULL"].join(" ") : "<>" == $op$$ && "NULL" == $value$$ ? [$column$$, "IS NOT NULL"].join(" ") : [$column$$, $op$$, $value$$].join(" ");
};
lf.query.combinedPredicateToSql_ = function $lf$query$combinedPredicateToSql_$($pred$$, $stripValueInfo$$) {
  return $pred$$.getChildren().map(function($childNode$$) {
    return "(" + lf.query.parseSearchCondition_($childNode$$, $stripValueInfo$$) + ")";
  }).join($pred$$.operator == lf.pred.Operator.AND ? " AND " : " OR ");
};
lf.query.joinPredicateToSql_ = function $lf$query$joinPredicateToSql_$($pred$$) {
  return [$pred$$.leftColumn.getNormalizedName(), lf.query.evaluatorToSql_($pred$$.evaluatorType), $pred$$.rightColumn.getNormalizedName()].join(" ");
};
lf.query.parseSearchCondition_ = function $lf$query$parseSearchCondition_$($pred$$, $stripValueInfo$$) {
  if ($pred$$ instanceof lf.pred.ValuePredicate) {
    return lf.query.valuePredicateToSql_($pred$$, $stripValueInfo$$);
  }
  if ($pred$$ instanceof lf.pred.CombinedPredicate) {
    return lf.query.combinedPredicateToSql_($pred$$, $stripValueInfo$$);
  }
  if ($pred$$ instanceof lf.pred.JoinPredicate) {
    return lf.query.joinPredicateToSql_($pred$$);
  }
  throw new lf.Exception(357, typeof $pred$$);
};
lf.query.predicateToSql_ = function $lf$query$predicateToSql_$($pred$$, $stripValueInfo$$) {
  var $whereClause$$ = lf.query.parseSearchCondition_($pred$$, $stripValueInfo$$);
  return $whereClause$$ ? " WHERE " + $whereClause$$ : "";
};
lf.query.deleteToSql_ = function $lf$query$deleteToSql_$($query$$, $stripValueInfo$$) {
  var $sql$$ = "DELETE FROM " + $query$$.from.getName();
  $query$$.where && ($sql$$ += lf.query.predicateToSql_($query$$.where, $stripValueInfo$$));
  return $sql$$ + ";";
};
lf.query.updateToSql_ = function $lf$query$updateToSql_$($query$$, $stripValueInfo$$) {
  var $sql$$ = "UPDATE " + $query$$.table.getName() + " SET ", $sql$$ = $sql$$ + $query$$.set.map(function($set$$) {
    var $setter$$ = $set$$.column.getNormalizedName() + " = ";
    return -1 != $set$$.binding ? $setter$$ + "?" + $set$$.binding.toString() : $setter$$ + lf.query.escapeSqlValue_($set$$.column.getType(), $set$$.value).toString();
  }).join(", ");
  $query$$.where && ($sql$$ += lf.query.predicateToSql_($query$$.where, $stripValueInfo$$));
  return $sql$$ + ";";
};
lf.query.selectToSql_ = function $lf$query$selectToSql_$($query$$, $stripValueInfo$$) {
  var $colList_sql$$ = "*";
  $query$$.columns.length && ($colList_sql$$ = $query$$.columns.map(function($col$$) {
    return $col$$.getAlias() ? $col$$.getNormalizedName() + " AS " + $col$$.getAlias() : $col$$.getNormalizedName();
  }).join(", "));
  $colList_sql$$ = "SELECT " + $colList_sql$$ + " FROM ";
  goog.isDefAndNotNull($query$$.outerJoinPredicates) && 0 != $query$$.outerJoinPredicates.size ? $colList_sql$$ += lf.query.getFromListForOuterJoin_($query$$, $stripValueInfo$$) : ($colList_sql$$ += lf.query.getFromListForInnerJoin_($query$$, $stripValueInfo$$), $query$$.where && ($colList_sql$$ += lf.query.predicateToSql_($query$$.where, $stripValueInfo$$)));
  if ($query$$.orderBy) {
    var $groupBy$$2_orderBy$$ = $query$$.orderBy.map(function($order$$) {
      return $order$$.column.getNormalizedName() + ($order$$.order == lf.Order.DESC ? " DESC" : " ASC");
    }).join(", "), $colList_sql$$ = $colList_sql$$ + (" ORDER BY " + $groupBy$$2_orderBy$$)
  }
  $query$$.groupBy && ($groupBy$$2_orderBy$$ = $query$$.groupBy.map(function($col$$) {
    return $col$$.getNormalizedName();
  }).join(", "), $colList_sql$$ += " GROUP BY " + $groupBy$$2_orderBy$$);
  $query$$.limit && ($colList_sql$$ += " LIMIT " + $query$$.limit.toString());
  $query$$.skip && ($colList_sql$$ += " SKIP " + $query$$.skip.toString());
  return $colList_sql$$ + ";";
};
lf.query.getTableNameToSql_ = function $lf$query$getTableNameToSql_$($table$$) {
  return $table$$.getEffectiveName() != $table$$.getName() ? $table$$.getName() + " AS " + $table$$.getEffectiveName() : $table$$.getName();
};
lf.query.getFromListForOuterJoin_ = function $lf$query$getFromListForOuterJoin_$($query$$, $stripValueInfo$$) {
  for (var $leftChild_retrievedNodes$$ = lf.tree.find($query$$.where, function($node$$) {
    return $node$$ instanceof lf.pred.JoinPredicate;
  }), $predicateString$$ = $leftChild_retrievedNodes$$.map(lf.query.joinPredicateToSql_), $fromList$$ = lf.query.getTableNameToSql_($query$$.from[0]), $i$$ = 1;$i$$ < $query$$.from.length;$i$$++) {
    var $fromName$$ = lf.query.getTableNameToSql_($query$$.from[$i$$]), $fromList$$ = $query$$.outerJoinPredicates.has($leftChild_retrievedNodes$$[$predicateString$$.length - $i$$].getId()) ? $fromList$$ + (" LEFT OUTER JOIN " + $fromName$$) : $fromList$$ + (" INNER JOIN " + $fromName$$), $fromList$$ = $fromList$$ + (" ON (" + $predicateString$$[$predicateString$$.length - $i$$] + ")")
  }
  $leftChild_retrievedNodes$$ = $query$$.where.getChildAt(0);
  $leftChild_retrievedNodes$$ instanceof lf.pred.JoinPredicate || ($fromList$$ += " WHERE " + lf.query.parseSearchCondition_($leftChild_retrievedNodes$$, $stripValueInfo$$));
  return $fromList$$;
};
lf.query.getFromListForInnerJoin_ = function $lf$query$getFromListForInnerJoin_$($query$$, $stripValueInfo$$) {
  return $query$$.from.map(lf.query.getTableNameToSql_).join(", ");
};
lf.query.toSql = function $lf$query$toSql$($builder$$, $opt_stripValueInfo$$) {
  var $stripValueInfo$$ = $opt_stripValueInfo$$ || !1, $query$$ = $builder$$.getQuery();
  if ($query$$ instanceof lf.query.InsertContext) {
    return lf.query.insertToSql_($query$$, $stripValueInfo$$);
  }
  if ($query$$ instanceof lf.query.DeleteContext) {
    return lf.query.deleteToSql_($query$$, $stripValueInfo$$);
  }
  if ($query$$ instanceof lf.query.UpdateContext) {
    return lf.query.updateToSql_($query$$, $stripValueInfo$$);
  }
  if ($query$$ instanceof lf.query.SelectContext) {
    return lf.query.selectToSql_($query$$, $stripValueInfo$$);
  }
  throw new lf.Exception(358, typeof $query$$);
};
lf.query.BaseBuilder = function $lf$query$BaseBuilder$($global$$, $context$$) {
  this.global = $global$$;
  this.queryEngine_ = $global$$.getService(lf.service.QUERY_ENGINE);
  this.runner_ = $global$$.getService(lf.service.RUNNER);
  this.query = $context$$;
};
goog.exportSymbol("lf.query.BaseBuilder", lf.query.BaseBuilder);
lf.query.BaseBuilder.prototype.exec = function $lf$query$BaseBuilder$$exec$() {
  try {
    this.assertExecPreconditions();
  } catch ($e$$) {
    return goog.Promise.reject($e$$);
  }
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $queryTask$$ = new lf.proc.UserQueryTask(this.global, [this.getTaskItem()]);
    this.runner_.scheduleTask($queryTask$$).then(function($results$$) {
      $resolve$$($results$$[0].getPayloads());
    }, $reject$$);
  }, this);
};
goog.exportProperty(lf.query.BaseBuilder.prototype, "exec", lf.query.BaseBuilder.prototype.exec);
lf.query.BaseBuilder.prototype.explain = function $lf$query$BaseBuilder$$explain$() {
  var $stringFn$$ = function($node$$) {
    return $node$$.toContextString(this.query) + "\n";
  }.bind(this);
  return lf.tree.toString(this.getPlan_().getRoot(), $stringFn$$);
};
goog.exportProperty(lf.query.BaseBuilder.prototype, "explain", lf.query.BaseBuilder.prototype.explain);
lf.query.BaseBuilder.prototype.bind = function $lf$query$BaseBuilder$$bind$($values$$) {
  this.query.bind($values$$);
  return this;
};
goog.exportProperty(lf.query.BaseBuilder.prototype, "bind", lf.query.BaseBuilder.prototype.bind);
lf.query.BaseBuilder.prototype.toSql = function $lf$query$BaseBuilder$$toSql$($opt_stripValueInfo$$) {
  return lf.query.toSql(this, $opt_stripValueInfo$$);
};
goog.exportProperty(lf.query.BaseBuilder.prototype, "toSql", lf.query.BaseBuilder.prototype.toSql);
lf.query.BaseBuilder.prototype.assertExecPreconditions = function $lf$query$BaseBuilder$$assertExecPreconditions$() {
};
lf.query.BaseBuilder.prototype.getQuery = function $lf$query$BaseBuilder$$getQuery$() {
  return this.query.clone();
};
lf.query.BaseBuilder.prototype.getObservableQuery = function $lf$query$BaseBuilder$$getObservableQuery$() {
  return this.query;
};
lf.query.BaseBuilder.prototype.getPlan_ = function $lf$query$BaseBuilder$$getPlan_$() {
  goog.isDefAndNotNull(this.plan_) || (this.plan_ = this.queryEngine_.getPlan(this.query));
  return this.plan_;
};
lf.query.BaseBuilder.prototype.getTaskItem = function $lf$query$BaseBuilder$$getTaskItem$() {
  return {context:this.getQuery(), plan:this.getPlan_()};
};
lf.query.BaseBuilder.prototype.getObservableTaskItem = function $lf$query$BaseBuilder$$getObservableTaskItem$() {
  return {context:this.getObservableQuery(), plan:this.getPlan_()};
};
lf.query.DeleteBuilder = function $lf$query$DeleteBuilder$($global$$) {
  lf.query.BaseBuilder.call(this, $global$$, new lf.query.DeleteContext($global$$.getService(lf.service.SCHEMA)));
};
goog.inherits(lf.query.DeleteBuilder, lf.query.BaseBuilder);
goog.exportSymbol("lf.query.DeleteBuilder", lf.query.DeleteBuilder);
lf.query.DeleteBuilder.prototype.from = function $lf$query$DeleteBuilder$$from$($table$$) {
  this.assertFromPreconditions_();
  this.query.from = $table$$;
  return this;
};
goog.exportProperty(lf.query.DeleteBuilder.prototype, "from", lf.query.DeleteBuilder.prototype.from);
lf.query.DeleteBuilder.prototype.where = function $lf$query$DeleteBuilder$$where$($predicate$$) {
  this.assertWherePreconditions_();
  this.query.where = $predicate$$;
  return this;
};
goog.exportProperty(lf.query.DeleteBuilder.prototype, "where", lf.query.DeleteBuilder.prototype.where);
lf.query.DeleteBuilder.prototype.assertFromPreconditions_ = function $lf$query$DeleteBuilder$$assertFromPreconditions_$() {
  if (goog.isDefAndNotNull(this.query.from)) {
    throw new lf.Exception(515);
  }
};
lf.query.DeleteBuilder.prototype.assertWherePreconditions_ = function $lf$query$DeleteBuilder$$assertWherePreconditions_$() {
  if (!goog.isDefAndNotNull(this.query.from)) {
    throw new lf.Exception(548);
  }
  if (goog.isDefAndNotNull(this.query.where)) {
    throw new lf.Exception(516);
  }
};
lf.query.DeleteBuilder.prototype.assertExecPreconditions = function $lf$query$DeleteBuilder$$assertExecPreconditions$() {
  lf.query.DeleteBuilder.superClass_.assertExecPreconditions.call(this);
  if (!goog.isDefAndNotNull(this.query.from)) {
    throw new lf.Exception(517);
  }
};
lf.query.InsertBuilder = function $lf$query$InsertBuilder$($global$$, $opt_allowReplace$$) {
  lf.query.BaseBuilder.call(this, $global$$, new lf.query.InsertContext($global$$.getService(lf.service.SCHEMA)));
  this.query.allowReplace = $opt_allowReplace$$ || !1;
};
goog.inherits(lf.query.InsertBuilder, lf.query.BaseBuilder);
goog.exportSymbol("lf.query.InsertBuilder", lf.query.InsertBuilder);
lf.query.InsertBuilder.prototype.assertExecPreconditions = function $lf$query$InsertBuilder$$assertExecPreconditions$() {
  lf.query.InsertBuilder.superClass_.assertExecPreconditions.call(this);
  var $context$$ = this.query;
  if (!goog.isDefAndNotNull($context$$.into) || !goog.isDefAndNotNull($context$$.values)) {
    throw new lf.Exception(518);
  }
  if ($context$$.allowReplace && goog.isNull($context$$.into.getConstraint().getPrimaryKey())) {
    throw new lf.Exception(519);
  }
};
lf.query.InsertBuilder.prototype.into = function $lf$query$InsertBuilder$$into$($table$$) {
  this.assertIntoPreconditions_();
  this.query.into = $table$$;
  return this;
};
goog.exportProperty(lf.query.InsertBuilder.prototype, "into", lf.query.InsertBuilder.prototype.into);
lf.query.InsertBuilder.prototype.values = function $lf$query$InsertBuilder$$values$($rows$$) {
  this.assertValuesPreconditions_();
  $rows$$ instanceof lf.Binder || $rows$$.some(function($r$$) {
    return $r$$ instanceof lf.Binder;
  }) ? this.query.binder = $rows$$ : this.query.values = $rows$$;
  return this;
};
goog.exportProperty(lf.query.InsertBuilder.prototype, "values", lf.query.InsertBuilder.prototype.values);
lf.query.InsertBuilder.prototype.assertIntoPreconditions_ = function $lf$query$InsertBuilder$$assertIntoPreconditions_$() {
  if (goog.isDefAndNotNull(this.query.into)) {
    throw new lf.Exception(520);
  }
};
lf.query.InsertBuilder.prototype.assertValuesPreconditions_ = function $lf$query$InsertBuilder$$assertValuesPreconditions_$() {
  if (goog.isDefAndNotNull(this.query.values)) {
    throw new lf.Exception(521);
  }
};
lf.query.SelectBuilder = function $lf$query$SelectBuilder$($global$$, $columns$$) {
  lf.query.BaseBuilder.call(this, $global$$, new lf.query.SelectContext($global$$.getService(lf.service.SCHEMA)));
  this.fromAlreadyCalled_ = this.whereAlreadyCalled_ = !1;
  this.query.columns = $columns$$;
  this.checkDistinctColumn_();
  this.checkAggregations_();
};
goog.inherits(lf.query.SelectBuilder, lf.query.BaseBuilder);
goog.exportSymbol("lf.query.SelectBuilder", lf.query.SelectBuilder);
lf.query.SelectBuilder.prototype.assertExecPreconditions = function $lf$query$SelectBuilder$$assertExecPreconditions$() {
  lf.query.SelectBuilder.superClass_.assertExecPreconditions.call(this);
  var $context$$ = this.query;
  if (!goog.isDefAndNotNull($context$$.from)) {
    throw new lf.Exception(522);
  }
  if (goog.isDef($context$$.limitBinder) && !goog.isDef($context$$.limit) || goog.isDef($context$$.skipBinder) && !goog.isDef($context$$.skip)) {
    throw new lf.Exception(523);
  }
  this.checkProjectionList_();
};
lf.query.SelectBuilder.prototype.checkDistinctColumn_ = function $lf$query$SelectBuilder$$checkDistinctColumn_$() {
  var $distinctColumns$$ = this.query.columns.filter(function($column$$) {
    return $column$$ instanceof lf.fn.AggregatedColumn && $column$$.aggregatorType == lf.fn.Type.DISTINCT;
  }, this);
  if (0 != $distinctColumns$$.length && (1 != $distinctColumns$$.length || 1 != this.query.columns.length)) {
    throw new lf.Exception(524);
  }
};
lf.query.SelectBuilder.prototype.checkProjectionList_ = function $lf$query$SelectBuilder$$checkProjectionList_$() {
  goog.isDefAndNotNull(this.query.groupBy) ? this.checkGroupByColumns_() : this.checkProjectionListNotMixed_();
};
lf.query.SelectBuilder.prototype.checkGroupByColumns_ = function $lf$query$SelectBuilder$$checkGroupByColumns_$() {
  var $nonAggregatedColumns$$ = this.query.columns.filter(function($column$$) {
    return !($column$$ instanceof lf.fn.AggregatedColumn);
  }).map(function($column$$) {
    return $column$$.getNormalizedName();
  }), $isInvalid$$ = !1;
  if (0 == this.query.groupBy.length || 0 == this.query.columns.length) {
    $isInvalid$$ = !0;
  } else {
    var $groupByColumns$$ = this.query.groupBy.map(function($column$$) {
      return $column$$.getNormalizedName();
    });
    ($isInvalid$$ = $nonAggregatedColumns$$.every(function($column$$) {
      return -1 == $groupByColumns$$.indexOf($column$$);
    })) || ($isInvalid$$ = this.query.groupBy.some(function($column$$46_type$$) {
      $column$$46_type$$ = $column$$46_type$$.getType();
      return $column$$46_type$$ == lf.Type.OBJECT || $column$$46_type$$ == lf.Type.ARRAY_BUFFER;
    }));
  }
  if ($isInvalid$$) {
    throw new lf.Exception(525);
  }
};
lf.query.SelectBuilder.prototype.checkProjectionListNotMixed_ = function $lf$query$SelectBuilder$$checkProjectionListNotMixed_$() {
  var $aggregatedColumnsExist$$ = this.query.columns.some(function($column$$) {
    return $column$$ instanceof lf.fn.AggregatedColumn;
  }, this), $nonAggregatedColumnsExist$$ = this.query.columns.some(function($column$$) {
    return !($column$$ instanceof lf.fn.AggregatedColumn);
  }, this) || 0 == this.query.columns.length;
  if ($aggregatedColumnsExist$$ && $nonAggregatedColumnsExist$$) {
    throw new lf.Exception(526);
  }
};
lf.query.SelectBuilder.prototype.checkAggregations_ = function $lf$query$SelectBuilder$$checkAggregations_$() {
  this.query.columns.forEach(function($column$$) {
    if ($column$$ instanceof lf.fn.AggregatedColumn && !lf.query.SelectBuilder.isAggregationValid_($column$$.aggregatorType, $column$$.getType())) {
      throw new lf.Exception(527, $column$$.getNormalizedName());
    }
  }, this);
};
lf.query.SelectBuilder.prototype.checkFrom_ = function $lf$query$SelectBuilder$$checkFrom_$($code$$) {
  if (!goog.isDefAndNotNull(this.query.from)) {
    throw new lf.Exception($code$$);
  }
};
lf.query.SelectBuilder.prototype.from = function $lf$query$SelectBuilder$$from$($var_args$$) {
  if (this.fromAlreadyCalled_) {
    throw new lf.Exception(515);
  }
  this.fromAlreadyCalled_ = !0;
  goog.isDefAndNotNull(this.query.from) || (this.query.from = []);
  this.query.from.push.apply(this.query.from, Array.prototype.slice.call(arguments));
  return this;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "from", lf.query.SelectBuilder.prototype.from);
lf.query.SelectBuilder.prototype.where = function $lf$query$SelectBuilder$$where$($predicate$$) {
  this.checkFrom_(548);
  if (this.whereAlreadyCalled_) {
    throw new lf.Exception(516);
  }
  this.whereAlreadyCalled_ = !0;
  this.augmentWhereClause_($predicate$$);
  return this;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "where", lf.query.SelectBuilder.prototype.where);
lf.query.SelectBuilder.prototype.augmentWhereClause_ = function $lf$query$SelectBuilder$$augmentWhereClause_$($newPredicate$$1_predicate$$) {
  goog.isDefAndNotNull(this.query.where) && ($newPredicate$$1_predicate$$ = lf.op.and($newPredicate$$1_predicate$$, this.query.where));
  this.query.where = $newPredicate$$1_predicate$$;
};
lf.query.SelectBuilder.prototype.innerJoin = function $lf$query$SelectBuilder$$innerJoin$($table$$, $predicate$$) {
  this.checkFrom_(542);
  if (this.whereAlreadyCalled_) {
    throw new lf.Exception(547);
  }
  this.query.from.push($table$$);
  this.augmentWhereClause_($predicate$$);
  return this;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "innerJoin", lf.query.SelectBuilder.prototype.innerJoin);
lf.query.SelectBuilder.prototype.leftOuterJoin = function $lf$query$SelectBuilder$$leftOuterJoin$($table$$, $predicate$$) {
  this.checkFrom_(542);
  if (!($predicate$$ instanceof lf.pred.JoinPredicate)) {
    throw new lf.Exception(541);
  }
  if (this.whereAlreadyCalled_) {
    throw new lf.Exception(547);
  }
  this.query.from.push($table$$);
  goog.isDefAndNotNull(this.query.outerJoinPredicates) || (this.query.outerJoinPredicates = lf.structs.set.create());
  var $normalizedPredicate$$ = $predicate$$;
  $table$$.getEffectiveName() != $predicate$$.rightColumn.getTable().getEffectiveName() && ($normalizedPredicate$$ = $predicate$$.reverse());
  this.query.outerJoinPredicates.add($normalizedPredicate$$.getId());
  this.augmentWhereClause_($normalizedPredicate$$);
  return this;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "leftOuterJoin", lf.query.SelectBuilder.prototype.leftOuterJoin);
lf.query.SelectBuilder.prototype.limit = function $lf$query$SelectBuilder$$limit$($numberOfRows$$) {
  if (goog.isDefAndNotNull(this.query.limit || this.query.limitBinder)) {
    throw new lf.Exception(528);
  }
  if ($numberOfRows$$ instanceof lf.Binder) {
    this.query.limitBinder = $numberOfRows$$;
  } else {
    if (0 > $numberOfRows$$) {
      throw new lf.Exception(531);
    }
    this.query.limit = $numberOfRows$$;
  }
  return this;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "limit", lf.query.SelectBuilder.prototype.limit);
lf.query.SelectBuilder.prototype.skip = function $lf$query$SelectBuilder$$skip$($numberOfRows$$) {
  if (goog.isDefAndNotNull(this.query.skip || this.query.skipBinder)) {
    throw new lf.Exception(529);
  }
  if ($numberOfRows$$ instanceof lf.Binder) {
    this.query.skipBinder = $numberOfRows$$;
  } else {
    if (0 > $numberOfRows$$) {
      throw new lf.Exception(531);
    }
    this.query.skip = $numberOfRows$$;
  }
  return this;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "skip", lf.query.SelectBuilder.prototype.skip);
lf.query.SelectBuilder.prototype.orderBy = function $lf$query$SelectBuilder$$orderBy$($column$$, $opt_order$$) {
  this.checkFrom_(549);
  goog.isDefAndNotNull(this.query.orderBy) || (this.query.orderBy = []);
  this.query.orderBy.push({column:$column$$, order:goog.isDefAndNotNull($opt_order$$) ? $opt_order$$ : lf.Order.ASC});
  return this;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "orderBy", lf.query.SelectBuilder.prototype.orderBy);
lf.query.SelectBuilder.prototype.groupBy = function $lf$query$SelectBuilder$$groupBy$($var_args$$) {
  this.checkFrom_(549);
  if (goog.isDefAndNotNull(this.query.groupBy)) {
    throw new lf.Exception(530);
  }
  goog.isDefAndNotNull(this.query.groupBy) || (this.query.groupBy = []);
  this.query.groupBy.push.apply(this.query.groupBy, Array.prototype.slice.call(arguments));
  return this;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "groupBy", lf.query.SelectBuilder.prototype.groupBy);
lf.query.SelectBuilder.isAggregationValid_ = function $lf$query$SelectBuilder$isAggregationValid_$($aggregatorType$$, $columnType$$) {
  switch($aggregatorType$$) {
    case lf.fn.Type.COUNT:
    ;
    case lf.fn.Type.DISTINCT:
    ;
    case lf.fn.Type.AS_ARRAY:
      return !0;
    case lf.fn.Type.AVG:
    ;
    case lf.fn.Type.GEOMEAN:
    ;
    case lf.fn.Type.STDDEV:
    ;
    case lf.fn.Type.SUM:
      return $columnType$$ == lf.Type.NUMBER || $columnType$$ == lf.Type.INTEGER;
    case lf.fn.Type.MAX:
    ;
    case lf.fn.Type.MIN:
      return $columnType$$ == lf.Type.NUMBER || $columnType$$ == lf.Type.INTEGER || $columnType$$ == lf.Type.STRING || $columnType$$ == lf.Type.DATE_TIME;
  }
  return !1;
};
lf.query.SelectBuilder.prototype.clone = function $lf$query$SelectBuilder$$clone$() {
  var $builder$$ = new lf.query.SelectBuilder(this.global, this.query.columns);
  $builder$$.query = this.query.clone();
  $builder$$.query.clonedFrom = null;
  return $builder$$;
};
goog.exportProperty(lf.query.SelectBuilder.prototype, "clone", lf.query.SelectBuilder.prototype.clone);
lf.query.UpdateBuilder = function $lf$query$UpdateBuilder$($global$$, $table$$) {
  lf.query.BaseBuilder.call(this, $global$$, new lf.query.UpdateContext($global$$.getService(lf.service.SCHEMA)));
  this.query.table = $table$$;
};
goog.inherits(lf.query.UpdateBuilder, lf.query.BaseBuilder);
goog.exportSymbol("lf.query.UpdateBuilder", lf.query.UpdateBuilder);
lf.query.UpdateBuilder.prototype.set = function $lf$query$UpdateBuilder$$set$($column$$, $value$$) {
  var $set$$ = {binding:$value$$ instanceof lf.Binder ? $value$$.getIndex() : -1, column:$column$$, value:$value$$};
  goog.isDefAndNotNull(this.query.set) ? this.query.set.push($set$$) : this.query.set = [$set$$];
  return this;
};
goog.exportProperty(lf.query.UpdateBuilder.prototype, "set", lf.query.UpdateBuilder.prototype.set);
lf.query.UpdateBuilder.prototype.where = function $lf$query$UpdateBuilder$$where$($predicate$$) {
  this.assertWherePreconditions_();
  this.query.where = $predicate$$;
  return this;
};
goog.exportProperty(lf.query.UpdateBuilder.prototype, "where", lf.query.UpdateBuilder.prototype.where);
lf.query.UpdateBuilder.prototype.assertWherePreconditions_ = function $lf$query$UpdateBuilder$$assertWherePreconditions_$() {
  if (goog.isDefAndNotNull(this.query.where)) {
    throw new lf.Exception(516);
  }
};
lf.query.UpdateBuilder.prototype.assertExecPreconditions = function $lf$query$UpdateBuilder$$assertExecPreconditions$() {
  lf.query.UpdateBuilder.superClass_.assertExecPreconditions.call(this);
  if (!goog.isDefAndNotNull(this.query.set)) {
    throw new lf.Exception(532);
  }
  if (this.query.set.some(function($set$$) {
    return $set$$.value instanceof lf.Binder;
  })) {
    throw new lf.Exception(501);
  }
};
lf.proc.Database = function $lf$proc$Database$($global$$) {
  this.global_ = $global$$;
  this.schema_ = $global$$.getService(lf.service.SCHEMA);
  this.isActive_ = !1;
};
goog.exportSymbol("lf.proc.Database", lf.proc.Database);
lf.proc.Database.prototype.init = function $lf$proc$Database$$init$($opt_options$$) {
  this.global_.registerService(lf.service.SCHEMA, this.schema_);
  return lf.base.init(this.global_, $opt_options$$).then(function() {
    this.isActive_ = !0;
    this.runner_ = this.global_.getService(lf.service.RUNNER);
    return this;
  }.bind(this));
};
goog.exportProperty(lf.proc.Database.prototype, "init", lf.proc.Database.prototype.init);
lf.proc.Database.prototype.getSchema = function $lf$proc$Database$$getSchema$() {
  return this.schema_;
};
goog.exportProperty(lf.proc.Database.prototype, "getSchema", lf.proc.Database.prototype.getSchema);
lf.proc.Database.prototype.checkActive_ = function $lf$proc$Database$$checkActive_$() {
  if (!this.isActive_) {
    throw new lf.Exception(2);
  }
};
lf.proc.Database.prototype.select = function $lf$proc$Database$$select$($var_args$$) {
  this.checkActive_();
  var $columns$$ = 1 != arguments.length || goog.isDefAndNotNull(arguments[0]) ? Array.prototype.slice.call(arguments) : [];
  return new lf.query.SelectBuilder(this.global_, $columns$$);
};
goog.exportProperty(lf.proc.Database.prototype, "select", lf.proc.Database.prototype.select);
lf.proc.Database.prototype.insert = function $lf$proc$Database$$insert$() {
  this.checkActive_();
  return new lf.query.InsertBuilder(this.global_);
};
goog.exportProperty(lf.proc.Database.prototype, "insert", lf.proc.Database.prototype.insert);
lf.proc.Database.prototype.insertOrReplace = function $lf$proc$Database$$insertOrReplace$() {
  this.checkActive_();
  return new lf.query.InsertBuilder(this.global_, !0);
};
goog.exportProperty(lf.proc.Database.prototype, "insertOrReplace", lf.proc.Database.prototype.insertOrReplace);
lf.proc.Database.prototype.update = function $lf$proc$Database$$update$($table$$) {
  this.checkActive_();
  return new lf.query.UpdateBuilder(this.global_, $table$$);
};
goog.exportProperty(lf.proc.Database.prototype, "update", lf.proc.Database.prototype.update);
lf.proc.Database.prototype.delete = function $lf$proc$Database$$delete$() {
  this.checkActive_();
  return new lf.query.DeleteBuilder(this.global_);
};
goog.exportProperty(lf.proc.Database.prototype, "delete", lf.proc.Database.prototype.delete);
lf.proc.Database.prototype.observe = function $lf$proc$Database$$observe$($query$$, $callback$$) {
  this.checkActive_();
  this.global_.getService(lf.service.OBSERVER_REGISTRY).addObserver($query$$, $callback$$);
};
goog.exportProperty(lf.proc.Database.prototype, "observe", lf.proc.Database.prototype.observe);
lf.proc.Database.prototype.unobserve = function $lf$proc$Database$$unobserve$($query$$, $callback$$) {
  this.checkActive_();
  this.global_.getService(lf.service.OBSERVER_REGISTRY).removeObserver($query$$, $callback$$);
};
goog.exportProperty(lf.proc.Database.prototype, "unobserve", lf.proc.Database.prototype.unobserve);
lf.proc.Database.prototype.createTransaction = function $lf$proc$Database$$createTransaction$($opt_type$$) {
  this.checkActive_();
  return new lf.proc.Transaction(this.global_);
};
goog.exportProperty(lf.proc.Database.prototype, "createTransaction", lf.proc.Database.prototype.createTransaction);
lf.proc.Database.prototype.close = function $lf$proc$Database$$close$() {
  lf.base.closeDatabase(this.global_);
  this.global_.clear();
  this.isActive_ = !1;
};
goog.exportProperty(lf.proc.Database.prototype, "close", lf.proc.Database.prototype.close);
lf.proc.Database.prototype.export = function $lf$proc$Database$$export$() {
  this.checkActive_();
  var $task$$ = new lf.proc.ExportTask(this.global_);
  return this.runner_.scheduleTask($task$$).then(function($results$$) {
    return $results$$[0].getPayloads()[0];
  });
};
goog.exportProperty(lf.proc.Database.prototype, "export", lf.proc.Database.prototype.export);
lf.proc.Database.prototype.import = function $lf$proc$Database$$import$($data$$45_task$$) {
  this.checkActive_();
  $data$$45_task$$ = new lf.proc.ImportTask(this.global_, $data$$45_task$$);
  return this.runner_.scheduleTask($data$$45_task$$).then(function() {
    return null;
  });
};
goog.exportProperty(lf.proc.Database.prototype, "import", lf.proc.Database.prototype.import);
lf.proc.Database.prototype.isOpen = function $lf$proc$Database$$isOpen$() {
  return this.isActive_;
};
goog.Promise.prototype.catch = goog.Promise.prototype.thenCatch;
goog.exportProperty(goog.Promise.prototype, "catch", goog.Promise.prototype.catch);
lf.schema.BaseColumn = function $lf$schema$BaseColumn$($table$$, $name$$, $isUnique$$, $isNullable$$, $type$$, $opt_alias$$) {
  this.table_ = $table$$;
  this.name_ = $name$$;
  this.isUnique_ = $isUnique$$;
  this.isNullable_ = $isNullable$$;
  this.type_ = $type$$;
  this.alias_ = $opt_alias$$ || null;
};
goog.exportSymbol("lf.schema.BaseColumn", lf.schema.BaseColumn);
lf.schema.BaseColumn.prototype.getName = function $lf$schema$BaseColumn$$getName$() {
  return this.name_;
};
lf.schema.BaseColumn.prototype.getNormalizedName = function $lf$schema$BaseColumn$$getNormalizedName$() {
  return this.table_.getEffectiveName() + "." + this.name_;
};
lf.schema.BaseColumn.prototype.toString = function $lf$schema$BaseColumn$$toString$() {
  return this.getNormalizedName();
};
lf.schema.BaseColumn.prototype.getTable = function $lf$schema$BaseColumn$$getTable$() {
  return this.table_;
};
lf.schema.BaseColumn.prototype.getType = function $lf$schema$BaseColumn$$getType$() {
  return this.type_;
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "getType", lf.schema.BaseColumn.prototype.getType);
lf.schema.BaseColumn.prototype.getAlias = function $lf$schema$BaseColumn$$getAlias$() {
  return this.alias_;
};
lf.schema.BaseColumn.prototype.getIndices = function $lf$schema$BaseColumn$$getIndices$() {
  goog.isDefAndNotNull(this.indices_) || (this.indices_ = [], this.getTable().getIndices().forEach(function($index$$) {
    -1 != $index$$.columns.map(function($col$$) {
      return $col$$.schema.getName();
    }).indexOf(this.name_) && this.indices_.push($index$$);
  }, this));
  return this.indices_;
};
lf.schema.BaseColumn.prototype.getIndex = function $lf$schema$BaseColumn$$getIndex$() {
  if (!goog.isDef(this.index_)) {
    var $indices$$ = this.getIndices().filter(function($indexSchema$$) {
      return 1 != $indexSchema$$.columns.length ? !1 : $indexSchema$$.columns[0].schema.getName() == this.getName();
    }, this);
    this.index_ = 0 < $indices$$.length ? $indices$$[0] : null;
  }
  return this.index_;
};
lf.schema.BaseColumn.prototype.isNullable = function $lf$schema$BaseColumn$$isNullable$() {
  return this.isNullable_;
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "isNullable", lf.schema.BaseColumn.prototype.isNullable);
lf.schema.BaseColumn.prototype.isUnique = function $lf$schema$BaseColumn$$isUnique$() {
  return this.isUnique_;
};
lf.schema.BaseColumn.prototype.eq = function $lf$schema$BaseColumn$$eq$($operand$$) {
  return lf.pred.createPredicate(this, $operand$$, lf.eval.Type.EQ);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "eq", lf.schema.BaseColumn.prototype.eq);
lf.schema.BaseColumn.prototype.neq = function $lf$schema$BaseColumn$$neq$($operand$$) {
  return lf.pred.createPredicate(this, $operand$$, lf.eval.Type.NEQ);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "neq", lf.schema.BaseColumn.prototype.neq);
lf.schema.BaseColumn.prototype.lt = function $lf$schema$BaseColumn$$lt$($operand$$) {
  return lf.pred.createPredicate(this, $operand$$, lf.eval.Type.LT);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "lt", lf.schema.BaseColumn.prototype.lt);
lf.schema.BaseColumn.prototype.lte = function $lf$schema$BaseColumn$$lte$($operand$$) {
  return lf.pred.createPredicate(this, $operand$$, lf.eval.Type.LTE);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "lte", lf.schema.BaseColumn.prototype.lte);
lf.schema.BaseColumn.prototype.gt = function $lf$schema$BaseColumn$$gt$($operand$$) {
  return lf.pred.createPredicate(this, $operand$$, lf.eval.Type.GT);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "gt", lf.schema.BaseColumn.prototype.gt);
lf.schema.BaseColumn.prototype.gte = function $lf$schema$BaseColumn$$gte$($operand$$) {
  return lf.pred.createPredicate(this, $operand$$, lf.eval.Type.GTE);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "gte", lf.schema.BaseColumn.prototype.gte);
lf.schema.BaseColumn.prototype.match = function $lf$schema$BaseColumn$$match$($regex$$) {
  return lf.pred.createPredicate(this, $regex$$, lf.eval.Type.MATCH);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "match", lf.schema.BaseColumn.prototype.match);
lf.schema.BaseColumn.prototype.between = function $lf$schema$BaseColumn$$between$($from$$, $to$$) {
  return lf.pred.createPredicate(this, [$from$$, $to$$], lf.eval.Type.BETWEEN);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "between", lf.schema.BaseColumn.prototype.between);
lf.schema.BaseColumn.prototype.in = function $lf$schema$BaseColumn$$in$($values$$) {
  return lf.pred.createPredicate(this, $values$$, lf.eval.Type.IN);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "in", lf.schema.BaseColumn.prototype.in);
lf.schema.BaseColumn.prototype.isNull = function $lf$schema$BaseColumn$$isNull$() {
  return this.eq(null);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "isNull", lf.schema.BaseColumn.prototype.isNull);
lf.schema.BaseColumn.prototype.isNotNull = function $lf$schema$BaseColumn$$isNotNull$() {
  return this.neq(null);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "isNotNull", lf.schema.BaseColumn.prototype.isNotNull);
lf.schema.BaseColumn.prototype.as = function $lf$schema$BaseColumn$$as$($name$$) {
  return new lf.schema.BaseColumn(this.table_, this.name_, this.isUnique_, this.isNullable_, this.type_, $name$$);
};
goog.exportProperty(lf.schema.BaseColumn.prototype, "as", lf.schema.BaseColumn.prototype.as);
lf.schema.Info = function $lf$schema$Info$($dbSchema$$) {
  this.schema_ = $dbSchema$$;
  this.cascadeReferringFk_ = new lf.structs.MapSet;
  this.restrictReferringFk_ = new lf.structs.MapSet;
  this.parents_ = new lf.structs.MapSet;
  this.colParent_ = lf.structs.map.create();
  this.children_ = new lf.structs.MapSet;
  this.cascadeChildren_ = new lf.structs.MapSet;
  this.restrictChildren_ = new lf.structs.MapSet;
  this.colChild_ = new lf.structs.MapSet;
  this.init_();
};
lf.schema.Info.prototype.init_ = function $lf$schema$Info$$init_$() {
  this.schema_.tables().forEach(function($table$$) {
    var $tableName$$ = $table$$.getName();
    $table$$.getConstraint().getForeignKeys().forEach(function($fkSpec$$) {
      this.parents_.set($tableName$$, this.schema_.table($fkSpec$$.parentTable));
      this.children_.set($fkSpec$$.parentTable, $table$$);
      $fkSpec$$.action == lf.ConstraintAction.RESTRICT ? (this.restrictReferringFk_.set($fkSpec$$.parentTable, $fkSpec$$), this.restrictChildren_.set($fkSpec$$.parentTable, $table$$)) : (this.cascadeReferringFk_.set($fkSpec$$.parentTable, $fkSpec$$), this.cascadeChildren_.set($fkSpec$$.parentTable, $table$$));
      this.colParent_.set($table$$.getName() + "." + $fkSpec$$.childColumn, $fkSpec$$.parentTable);
      this.colChild_.set($fkSpec$$.parentTable + "." + $fkSpec$$.parentColumn, $table$$.getName());
    }, this);
  }, this);
};
lf.schema.Info.prototype.getReferencingForeignKeys = function $lf$schema$Info$$getReferencingForeignKeys$($tableName$$, $opt_constraintAction$$) {
  if (goog.isDefAndNotNull($opt_constraintAction$$)) {
    return $opt_constraintAction$$ == lf.ConstraintAction.CASCADE ? this.cascadeReferringFk_.get($tableName$$) : this.restrictReferringFk_.get($tableName$$);
  }
  var $cascadeConstraints$$ = this.cascadeReferringFk_.get($tableName$$), $restrictConstraints$$ = this.restrictReferringFk_.get($tableName$$);
  return goog.isNull($cascadeConstraints$$) && goog.isNull($restrictConstraints$$) ? null : ($cascadeConstraints$$ || []).concat($restrictConstraints$$ || []);
};
lf.schema.Info.prototype.expandScope_ = function $lf$schema$Info$$expandScope_$($tableName$$, $map$$) {
  var $values$$ = $map$$.get($tableName$$);
  return goog.isNull($values$$) ? [] : $values$$;
};
lf.schema.Info.prototype.getParentTables = function $lf$schema$Info$$getParentTables$($tableName$$) {
  return this.expandScope_($tableName$$, this.parents_);
};
lf.schema.Info.prototype.getParentTablesByColumns = function $lf$schema$Info$$getParentTablesByColumns$($colNames$$) {
  var $tableNames$$ = lf.structs.set.create();
  $colNames$$.forEach(function($col$$39_table$$) {
    ($col$$39_table$$ = this.colParent_.get($col$$39_table$$)) && $tableNames$$.add($col$$39_table$$);
  }, this);
  return lf.structs.set.values($tableNames$$).map(function($tableName$$) {
    return this.schema_.table($tableName$$);
  }, this);
};
lf.schema.Info.prototype.getChildTables = function $lf$schema$Info$$getChildTables$($tableName$$, $opt_constraintAction$$) {
  return goog.isDefAndNotNull($opt_constraintAction$$) ? $opt_constraintAction$$ == lf.ConstraintAction.RESTRICT ? this.expandScope_($tableName$$, this.restrictChildren_) : this.expandScope_($tableName$$, this.cascadeChildren_) : this.expandScope_($tableName$$, this.children_);
};
lf.schema.Info.prototype.getChildTablesByColumns = function $lf$schema$Info$$getChildTablesByColumns$($colNames$$) {
  var $tableNames$$ = lf.structs.set.create();
  $colNames$$.forEach(function($children$$4_col$$) {
    ($children$$4_col$$ = this.colChild_.get($children$$4_col$$)) && $children$$4_col$$.forEach(function($child$$) {
      $tableNames$$.add($child$$);
    });
  }, this);
  return lf.structs.set.values($tableNames$$).map(function($tableName$$) {
    return this.schema_.table($tableName$$);
  }, this);
};
lf.schema.Constraint = function $lf$schema$Constraint$($primaryKey$$, $notNullable$$, $foreignKeys$$) {
  this.primaryKey_ = $primaryKey$$;
  this.notNullable_ = $notNullable$$;
  this.foreignKeys_ = $foreignKeys$$;
};
goog.exportSymbol("lf.schema.Constraint", lf.schema.Constraint);
lf.schema.Constraint.prototype.getPrimaryKey = function $lf$schema$Constraint$$getPrimaryKey$() {
  return this.primaryKey_;
};
goog.exportProperty(lf.schema.Constraint.prototype, "getPrimaryKey", lf.schema.Constraint.prototype.getPrimaryKey);
lf.schema.Constraint.prototype.getNotNullable = function $lf$schema$Constraint$$getNotNullable$() {
  return this.notNullable_;
};
lf.schema.Constraint.prototype.getForeignKeys = function $lf$schema$Constraint$$getForeignKeys$() {
  return this.foreignKeys_;
};
goog.exportProperty(lf.schema.Constraint.prototype, "getForeignKeys", lf.schema.Constraint.prototype.getForeignKeys);
lf.schema.ForeignKeySpec = function $lf$schema$ForeignKeySpec$($rawSpec$$, $childTable$$, $name$$) {
  var $array$$ = $rawSpec$$.ref.split(".");
  if (2 != $array$$.length) {
    throw new lf.Exception(540, $name$$);
  }
  this.childTable = $childTable$$;
  this.childColumn = $rawSpec$$.local;
  this.parentTable = $array$$[0];
  this.parentColumn = $array$$[1];
  this.name = $childTable$$ + "." + $name$$;
  this.action = $rawSpec$$.action;
  this.timing = $rawSpec$$.timing;
};
lf.schema.TableBuilder = function $lf$schema$TableBuilder$($tableName$$) {
  this.checkNamingRules_($tableName$$);
  this.evalRegistry_ = lf.eval.Registry.get();
  this.name_ = $tableName$$;
  this.columns_ = lf.structs.map.create();
  this.uniqueColumns_ = lf.structs.set.create();
  this.uniqueIndices_ = lf.structs.set.create();
  this.nullable_ = lf.structs.set.create();
  this.pkName_ = null;
  this.indices_ = lf.structs.map.create();
  this.persistentIndex_ = !1;
  this.fkSpecs_ = [];
};
goog.exportSymbol("lf.schema.TableBuilder", lf.schema.TableBuilder);
lf.schema.TableBuilder.IndexedColumn_ = function $lf$schema$TableBuilder$IndexedColumn_$($raw$$) {
  this.name = $raw$$.name;
  this.order = $raw$$.order;
  this.autoIncrement = $raw$$.autoIncrement;
};
lf.schema.TableBuilder.NULLABLE_TYPES_BY_DEFAULT = lf.structs.set.create([lf.Type.ARRAY_BUFFER, lf.Type.OBJECT]);
lf.schema.TableBuilder.toPascal_ = function $lf$schema$TableBuilder$toPascal_$($name$$) {
  return $name$$[0].toUpperCase() + $name$$.substring(1);
};
lf.schema.TableBuilder.prototype.checkNamingRules_ = function $lf$schema$TableBuilder$$checkNamingRules_$($name$$) {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test($name$$)) {
    throw new lf.Exception(502, $name$$);
  }
};
lf.schema.TableBuilder.prototype.checkNameConflicts_ = function $lf$schema$TableBuilder$$checkNameConflicts_$($name$$) {
  if ($name$$ == this.name_) {
    throw new lf.Exception(546, $name$$);
  }
  if (this.columns_.has($name$$) || this.indices_.has($name$$) || this.uniqueIndices_.has($name$$)) {
    throw new lf.Exception(503, this.name_ + "." + $name$$);
  }
};
lf.schema.TableBuilder.prototype.checkPrimaryKey_ = function $lf$schema$TableBuilder$$checkPrimaryKey_$($columns$$) {
  var $hasAutoIncrement$$ = !1;
  $columns$$.forEach(function($column$$) {
    var $columnType$$ = this.columns_.get($column$$.name);
    $hasAutoIncrement$$ = $hasAutoIncrement$$ || $column$$.autoIncrement;
    if ($column$$.autoIncrement && $columnType$$ != lf.Type.INTEGER) {
      throw new lf.Exception(504);
    }
  }, this);
  if ($hasAutoIncrement$$ && 1 < $columns$$.length) {
    throw new lf.Exception(505);
  }
};
lf.schema.TableBuilder.prototype.checkPrimaryKeyNotForeignKey_ = function $lf$schema$TableBuilder$$checkPrimaryKeyNotForeignKey_$() {
  if (!goog.isNull(this.pkName_)) {
    var $pkColumns$$ = this.indices_.get(this.pkName_).map(function($indexedColumn$$) {
      return $indexedColumn$$.name;
    }), $fkSpecIndex$$ = 0;
    if (this.fkSpecs_.some(function($fkSpec$$, $i$$) {
      $fkSpecIndex$$ = $i$$;
      return -1 != $pkColumns$$.indexOf($fkSpec$$.childColumn);
    }, this)) {
      throw new lf.Exception(543, this.fkSpecs_[$fkSpecIndex$$].name);
    }
  }
};
lf.schema.TableBuilder.prototype.checkPrimaryKeyDuplicateIndex_ = function $lf$schema$TableBuilder$$checkPrimaryKeyDuplicateIndex_$() {
  if (!goog.isNull(this.pkName_)) {
    var $extractName$$ = function $$extractName$$$($indexedColumn$$) {
      return $indexedColumn$$.name;
    }, $pkColumnsJson$$ = JSON.stringify(this.indices_.get(this.pkName_).map($extractName$$));
    this.indices_.forEach(function($indexedColumns$$, $indexName$$) {
      if ($indexName$$ != this.pkName_) {
        var $indexedColumnNames$$ = $indexedColumns$$.map($extractName$$);
        if (JSON.stringify($indexedColumnNames$$) == $pkColumnsJson$$) {
          throw new lf.Exception(544, this.name_ + "." + $indexName$$);
        }
      }
    }, this);
  }
};
lf.schema.TableBuilder.prototype.checkPrimaryKeyNotNullable_ = function $lf$schema$TableBuilder$$checkPrimaryKeyNotNullable_$() {
  goog.isNull(this.pkName_) || this.indices_.get(this.pkName_).forEach(function($indexedColumn$$) {
    if (this.nullable_.has($indexedColumn$$.name)) {
      throw new lf.Exception(545, this.name_ + "." + $indexedColumn$$.name);
    }
  }, this);
};
lf.schema.TableBuilder.prototype.addColumn = function $lf$schema$TableBuilder$$addColumn$($name$$, $type$$) {
  this.checkNamingRules_($name$$);
  this.checkNameConflicts_($name$$);
  this.columns_.set($name$$, $type$$);
  lf.schema.TableBuilder.NULLABLE_TYPES_BY_DEFAULT.has($type$$) && this.addNullable([$name$$]);
  return this;
};
goog.exportProperty(lf.schema.TableBuilder.prototype, "addColumn", lf.schema.TableBuilder.prototype.addColumn);
lf.schema.TableBuilder.prototype.addPrimaryKey = function $lf$schema$TableBuilder$$addPrimaryKey$($columns$$, $opt_autoInc$$) {
  this.pkName_ = "pk" + lf.schema.TableBuilder.toPascal_(this.name_);
  this.checkNamingRules_(this.pkName_);
  this.checkNameConflicts_(this.pkName_);
  var $cols$$ = this.normalizeColumns_($columns$$, !0, void 0, $opt_autoInc$$);
  this.checkPrimaryKey_($cols$$);
  1 == $cols$$.length && this.uniqueColumns_.add($cols$$[0].name);
  this.uniqueIndices_.add(this.pkName_);
  this.indices_.set(this.pkName_, $cols$$);
  return this;
};
goog.exportProperty(lf.schema.TableBuilder.prototype, "addPrimaryKey", lf.schema.TableBuilder.prototype.addPrimaryKey);
lf.schema.TableBuilder.prototype.addForeignKey = function $lf$schema$TableBuilder$$addForeignKey$($name$$, $rawSpec$$) {
  this.checkNamingRules_($name$$);
  this.checkNameConflicts_($name$$);
  var $spec$$ = new lf.schema.ForeignKeySpec($rawSpec$$, this.name_, $name$$);
  goog.isDef($spec$$.action) || ($spec$$.action = lf.ConstraintAction.RESTRICT);
  goog.isDef($spec$$.timing) || ($spec$$.timing = lf.ConstraintTiming.IMMEDIATE);
  if ($spec$$.action == lf.ConstraintAction.CASCADE && $spec$$.timing == lf.ConstraintTiming.DEFERRABLE) {
    throw new lf.Exception(506);
  }
  if (!this.columns_.has($spec$$.childColumn)) {
    throw new lf.Exception(540, $name$$);
  }
  this.fkSpecs_.push($spec$$);
  this.addIndex($name$$, [$spec$$.childColumn], this.uniqueColumns_.has($spec$$.childColumn));
  return this;
};
goog.exportProperty(lf.schema.TableBuilder.prototype, "addForeignKey", lf.schema.TableBuilder.prototype.addForeignKey);
lf.schema.TableBuilder.prototype.addUnique = function $lf$schema$TableBuilder$$addUnique$($name$$, $columns$$) {
  this.checkNamingRules_($name$$);
  this.checkNameConflicts_($name$$);
  var $cols$$ = this.normalizeColumns_($columns$$, !0);
  1 == $cols$$.length && (this.uniqueColumns_.add($cols$$[0].name), this.markFkIndexForColumnUnique_($cols$$[0].name));
  this.indices_.set($name$$, $cols$$);
  this.uniqueIndices_.add($name$$);
  return this;
};
goog.exportProperty(lf.schema.TableBuilder.prototype, "addUnique", lf.schema.TableBuilder.prototype.addUnique);
lf.schema.TableBuilder.prototype.markFkIndexForColumnUnique_ = function $lf$schema$TableBuilder$$markFkIndexForColumnUnique_$($column$$) {
  this.fkSpecs_.forEach(function($fkSpec$$2_indexName$$) {
    $fkSpec$$2_indexName$$.childColumn == $column$$ && ($fkSpec$$2_indexName$$ = $fkSpec$$2_indexName$$.name.split(".")[1], this.uniqueIndices_.add($fkSpec$$2_indexName$$));
  }, this);
};
lf.schema.TableBuilder.prototype.addNullable = function $lf$schema$TableBuilder$$addNullable$($columns$$) {
  this.normalizeColumns_($columns$$, !1).forEach(function($col$$) {
    this.nullable_.add($col$$.name);
  }, this);
  return this;
};
goog.exportProperty(lf.schema.TableBuilder.prototype, "addNullable", lf.schema.TableBuilder.prototype.addNullable);
lf.schema.TableBuilder.prototype.addIndex = function $lf$schema$TableBuilder$$addIndex$($name$$, $cols$$4_columns$$, $opt_unique$$, $opt_order$$) {
  this.checkNamingRules_($name$$);
  this.checkNameConflicts_($name$$);
  $cols$$4_columns$$ = this.normalizeColumns_($cols$$4_columns$$, !0, $opt_order$$);
  $opt_unique$$ && this.uniqueIndices_.add($name$$);
  this.indices_.set($name$$, $cols$$4_columns$$);
  return this;
};
goog.exportProperty(lf.schema.TableBuilder.prototype, "addIndex", lf.schema.TableBuilder.prototype.addIndex);
lf.schema.TableBuilder.prototype.persistentIndex = function $lf$schema$TableBuilder$$persistentIndex$($value$$) {
  this.persistentIndex_ = $value$$;
};
goog.exportProperty(lf.schema.TableBuilder.prototype, "persistentIndex", lf.schema.TableBuilder.prototype.persistentIndex);
lf.schema.TableBuilder.prototype.getSchema = function $lf$schema$TableBuilder$$getSchema$() {
  this.checkPrimaryKeyNotForeignKey_();
  this.checkPrimaryKeyDuplicateIndex_();
  this.checkPrimaryKeyNotNullable_();
  return new (this.generateTableClass_());
};
goog.exportProperty(lf.schema.TableBuilder.prototype, "getSchema", lf.schema.TableBuilder.prototype.getSchema);
lf.schema.TableBuilder.prototype.getFkSpecs = function $lf$schema$TableBuilder$$getFkSpecs$() {
  return this.fkSpecs_;
};
lf.schema.TableBuilder.prototype.normalizeColumns_ = function $lf$schema$TableBuilder$$normalizeColumns_$($columns$$, $checkIndexable$$, $opt_order$$, $opt_autoInc$$) {
  var $normalized$$ = $columns$$, $normalized$$ = "string" == typeof $columns$$[0] ? $columns$$.map(function($col$$) {
    return new lf.schema.TableBuilder.IndexedColumn_({name:$col$$, order:goog.isDefAndNotNull($opt_order$$) ? $opt_order$$ : lf.Order.ASC, autoIncrement:$opt_autoInc$$ || !1});
  }) : $columns$$.map(function($col$$) {
    return new lf.schema.TableBuilder.IndexedColumn_($col$$);
  });
  $normalized$$.forEach(function($col$$) {
    if (!this.columns_.has($col$$.name)) {
      throw new lf.Exception(508, this.name_, $col$$.name);
    }
    if ($checkIndexable$$) {
      var $type$$ = this.columns_.get($col$$.name);
      if ($type$$ == lf.Type.ARRAY_BUFFER || $type$$ == lf.Type.OBJECT) {
        throw new lf.Exception(509, this.name_, $col$$.name);
      }
    }
  }, this);
  return $normalized$$;
};
lf.schema.TableBuilder.prototype.generateTableClass_ = function $lf$schema$TableBuilder$$generateTableClass_$() {
  var $that$$ = this, $tableClass$$ = function $$tableClass$$$() {
    var $columns$$ = lf.structs.map.keys($that$$.columns_).map(function($colName$$) {
      this[$colName$$] = new lf.schema.BaseColumn(this, $colName$$, $that$$.uniqueColumns_.has($colName$$), $that$$.nullable_.has($colName$$), $that$$.columns_.get($colName$$));
      return this[$colName$$];
    }, this), $generateIndexedColumns$$ = function $$generateIndexedColumns$$$($indexName$$) {
      return $that$$.indices_.get($indexName$$).map(function($indexedColumn$$) {
        return {schema:this[$indexedColumn$$.name], order:$indexedColumn$$.order, autoIncrement:$indexedColumn$$.autoIncrement};
      }, this);
    }, $indices$$ = lf.structs.map.keys($that$$.indices_).map(function($indexName$$) {
      return new lf.schema.Index($that$$.name_, $indexName$$, $that$$.uniqueIndices_.has($indexName$$), $generateIndexedColumns$$.call(this, $indexName$$));
    }, this);
    lf.schema.Table.call(this, $that$$.name_, $columns$$, $indices$$, $that$$.persistentIndex_);
    var $pk$$ = goog.isNull($that$$.pkName_) ? null : new lf.schema.Index($that$$.name_, $that$$.pkName_, !0, $generateIndexedColumns$$.call(this, $that$$.pkName_)), $notNullable$$ = $columns$$.filter(function($col$$) {
      return !$that$$.nullable_.has($col$$.getName());
    });
    this.constraint_ = new lf.schema.Constraint($pk$$, $notNullable$$, $that$$.getFkSpecs());
    this.rowClass_ = $that$$.generateRowClass_($columns$$, $indices$$);
  };
  goog.inherits($tableClass$$, lf.schema.Table);
  $tableClass$$.prototype.createRow = function $$tableClass$$$$createRow$($opt_value$$) {
    return new this.rowClass_(lf.Row.getNextId(), $opt_value$$);
  };
  goog.exportProperty($tableClass$$.prototype, "createRow", $tableClass$$.prototype.createRow);
  $tableClass$$.prototype.deserializeRow = function $$tableClass$$$$deserializeRow$($dbRecord$$) {
    var $obj$$ = {};
    this.getColumns().forEach(function($col$$46_type$$) {
      var $key$$ = $col$$46_type$$.getName();
      $col$$46_type$$ = $col$$46_type$$.getType();
      var $value$$ = $dbRecord$$.value[$key$$];
      $obj$$[$key$$] = $col$$46_type$$ == lf.Type.ARRAY_BUFFER ? lf.Row.hexToBin($value$$) : $col$$46_type$$ == lf.Type.DATE_TIME ? goog.isDefAndNotNull($value$$) ? new Date($value$$) : null : $value$$;
    }, this);
    return new this.rowClass_($dbRecord$$.id, $obj$$);
  };
  goog.exportProperty($tableClass$$.prototype, "deserializeRow", $tableClass$$.prototype.deserializeRow);
  $tableClass$$.prototype.getConstraint = function $$tableClass$$$$getConstraint$() {
    return this.constraint_;
  };
  goog.exportProperty($tableClass$$.prototype, "getConstraint", $tableClass$$.prototype.getConstraint);
  return $tableClass$$;
};
lf.schema.TableBuilder.prototype.generateRowClass_ = function $lf$schema$TableBuilder$$generateRowClass_$($columns$$0$$, $indices$$) {
  var $rowClass$$ = function $$rowClass$$$($rowId$$, $opt_payload$$) {
    this.columns_ = $columns$$0$$;
    this.indices_ = $indices$$;
    lf.Row.call(this, $rowId$$, $opt_payload$$);
  };
  goog.inherits($rowClass$$, lf.Row);
  $rowClass$$.prototype.defaultPayload = function $$rowClass$$$$defaultPayload$() {
    var $obj$$ = {};
    this.columns_.forEach(function($col$$) {
      $obj$$[$col$$.getName()] = $col$$.isNullable() ? null : lf.type.DEFAULT_VALUES[$col$$.getType()];
    });
    return $obj$$;
  };
  $rowClass$$.prototype.toDbPayload = function $$rowClass$$$$toDbPayload$() {
    var $obj$$ = {};
    this.columns_.forEach(function($col$$48_type$$) {
      var $key$$ = $col$$48_type$$.getName();
      $col$$48_type$$ = $col$$48_type$$.getType();
      var $value$$ = this.payload()[$key$$];
      $obj$$[$key$$] = $col$$48_type$$ == lf.Type.ARRAY_BUFFER ? goog.isDefAndNotNull($value$$) ? lf.Row.binToHex($value$$) : null : $col$$48_type$$ == lf.Type.DATE_TIME ? goog.isDefAndNotNull($value$$) ? $value$$.getTime() : null : $col$$48_type$$ == lf.Type.OBJECT ? goog.isDefAndNotNull($value$$) ? $value$$ : null : $value$$;
    }, this);
    return $obj$$;
  };
  var $getSingleKeyFn$$ = function($column$$) {
    var $colType$$ = this.columns_.get($column$$.getName()), $keyOfIndexFn$$ = this.evalRegistry_.getKeyOfIndexEvaluator($colType$$);
    return function($payload$$) {
      return $keyOfIndexFn$$($payload$$[$column$$.getName()]);
    };
  }.bind(this), $getMultiKeyFn$$ = function($columns$$) {
    var $getSingleKeyFunctions$$ = $columns$$.map(function($indexedColumn$$) {
      return $getSingleKeyFn$$($indexedColumn$$.schema);
    });
    return function($payload$$) {
      return $getSingleKeyFunctions$$.map(function($fn$$) {
        return $fn$$($payload$$);
      });
    };
  }.bind(this), $functionMap$$ = {};
  $indices$$.forEach(function($JSCompiler_inline_result$$0_index$$) {
    var $key$$ = $JSCompiler_inline_result$$0_index$$.getNormalizedName();
    $JSCompiler_inline_result$$0_index$$ = 1 == $JSCompiler_inline_result$$0_index$$.columns.length ? $getSingleKeyFn$$($JSCompiler_inline_result$$0_index$$.columns[0].schema) : $getMultiKeyFn$$($JSCompiler_inline_result$$0_index$$.columns);
    $functionMap$$[$key$$] = $JSCompiler_inline_result$$0_index$$;
  });
  $rowClass$$.prototype.keyOfIndex = function $$rowClass$$$$keyOfIndex$($indexName$$) {
    return -1 != $indexName$$.indexOf("#") ? this.id() : $functionMap$$.hasOwnProperty($indexName$$) ? $functionMap$$[$indexName$$](this.payload()) : null;
  };
  return $rowClass$$;
};
lf.schema.Builder = function $lf$schema$Builder$($dbName$$, $dbVersion$$) {
  this.schema_ = new lf.schema.DatabaseSchema($dbName$$, $dbVersion$$);
  this.tableBuilders_ = lf.structs.map.create();
  this.finalized_ = !1;
  this.db_ = null;
};
goog.exportSymbol("lf.schema.Builder", lf.schema.Builder);
lf.schema.Builder.prototype.checkForeignKeyValidity_ = function $lf$schema$Builder$$checkForeignKeyValidity_$($builder$$) {
  $builder$$.getFkSpecs().forEach(function($specs$$) {
    var $parentSchema_parentTableName$$ = $specs$$.parentTable;
    if (!this.tableBuilders_.has($parentSchema_parentTableName$$)) {
      throw new lf.Exception(536, $specs$$.name);
    }
    var $parentSchema_parentTableName$$ = this.tableBuilders_.get($parentSchema_parentTableName$$).getSchema(), $parentColName$$ = $specs$$.parentColumn;
    if (!$parentSchema_parentTableName$$.hasOwnProperty($parentColName$$)) {
      throw new lf.Exception(537, $specs$$.name);
    }
    if ($builder$$.getSchema()[$specs$$.childColumn].getType() != $parentSchema_parentTableName$$[$parentColName$$].getType()) {
      throw new lf.Exception(538, $specs$$.name);
    }
    if (!$parentSchema_parentTableName$$[$parentColName$$].isUnique()) {
      throw new lf.Exception(539, $specs$$.name);
    }
  }, this);
};
lf.schema.Builder.prototype.checkForeignKeyChain_ = function $lf$schema$Builder$$checkForeignKeyChain_$($builder$$) {
  $builder$$.getFkSpecs().forEach(function($specs$$) {
    this.tableBuilders_.get($specs$$.parentTable).getFkSpecs().forEach(function($parentSpecs$$) {
      if ($parentSpecs$$.childColumn == $specs$$.parentColumn) {
        throw new lf.Exception(534, $specs$$.name);
      }
    }, this);
  }, this);
};
lf.schema.Builder.prototype.finalize_ = function $lf$schema$Builder$$finalize_$() {
  this.finalized_ || (this.tableBuilders_.forEach(function($builder$$, $name$$) {
    this.checkForeignKeyValidity_($builder$$);
    this.schema_.setTable($builder$$.getSchema());
  }, this), lf.structs.map.values(this.tableBuilders_).forEach(this.checkForeignKeyChain_, this), this.checkFkCycle_(), this.tableBuilders_.clear(), this.finalized_ = !0);
};
lf.schema.Builder.prototype.checkCycleUtil_ = function $lf$schema$Builder$$checkCycleUtil_$($graphNode$$, $nodeMap$$) {
  $graphNode$$.visited || ($graphNode$$.visited = !0, $graphNode$$.onStack = !0, $graphNode$$.edges.forEach(function($childNode$$) {
    $childNode$$ = $nodeMap$$.get($childNode$$);
    if (!$childNode$$.visited) {
      this.checkCycleUtil_($childNode$$, $nodeMap$$);
    } else {
      if ($childNode$$.onStack && $graphNode$$ != $childNode$$) {
        throw new lf.Exception(533);
      }
    }
  }, this));
  $graphNode$$.onStack = !1;
};
lf.schema.Builder.prototype.checkFkCycle_ = function $lf$schema$Builder$$checkFkCycle_$() {
  var $nodeMap$$ = lf.structs.map.create();
  this.schema_.tables_.forEach(function($table$$, $tableName$$) {
    $nodeMap$$.set($tableName$$, new lf.schema.GraphNode_($tableName$$));
  }, this);
  this.tableBuilders_.forEach(function($builder$$, $tableName$$) {
    $builder$$.getFkSpecs().forEach(function($spec$$) {
      $nodeMap$$.get($spec$$.parentTable).edges.add($tableName$$);
    });
  });
  lf.structs.map.values($nodeMap$$).forEach(function($graphNode$$) {
    this.checkCycleUtil_($graphNode$$, $nodeMap$$);
  }, this);
};
lf.schema.GraphNode_ = function $lf$schema$GraphNode_$($tableName$$) {
  this.onStack = this.visited = !1;
  this.edges = lf.structs.set.create();
  this.tableName = $tableName$$;
};
lf.schema.Builder.prototype.getSchema = function $lf$schema$Builder$$getSchema$() {
  this.finalized_ || this.finalize_();
  return this.schema_;
};
goog.exportProperty(lf.schema.Builder.prototype, "getSchema", lf.schema.Builder.prototype.getSchema);
lf.schema.Builder.prototype.getGlobal = function $lf$schema$Builder$$getGlobal$() {
  var $namespacedGlobalId$$ = new lf.service.ServiceId("ns_" + this.schema_.name()), $global$$ = lf.Global.get(), $namespacedGlobal$$ = null;
  $global$$.isRegistered($namespacedGlobalId$$) ? $namespacedGlobal$$ = $global$$.getService($namespacedGlobalId$$) : ($namespacedGlobal$$ = new lf.Global, $global$$.registerService($namespacedGlobalId$$, $namespacedGlobal$$));
  return $namespacedGlobal$$;
};
goog.exportProperty(lf.schema.Builder.prototype, "getGlobal", lf.schema.Builder.prototype.getGlobal);
lf.schema.Builder.prototype.connect = function $lf$schema$Builder$$connect$($opt_options$$) {
  if (!goog.isNull(this.db_) && this.db_.isOpen()) {
    throw new lf.Exception(113);
  }
  if (goog.isNull(this.db_)) {
    var $global$$ = this.getGlobal();
    $global$$.isRegistered(lf.service.SCHEMA) || $global$$.registerService(lf.service.SCHEMA, this.getSchema());
    this.db_ = new lf.proc.Database($global$$);
  }
  return this.db_.init($opt_options$$);
};
goog.exportProperty(lf.schema.Builder.prototype, "connect", lf.schema.Builder.prototype.connect);
lf.schema.Builder.prototype.createTable = function $lf$schema$Builder$$createTable$($tableName$$) {
  if (this.tableBuilders_.has($tableName$$)) {
    throw new lf.Exception(503, $tableName$$);
  }
  if (this.finalized_) {
    throw new lf.Exception(535);
  }
  this.tableBuilders_.set($tableName$$, new lf.schema.TableBuilder($tableName$$));
  return this.tableBuilders_.get($tableName$$);
};
goog.exportProperty(lf.schema.Builder.prototype, "createTable", lf.schema.Builder.prototype.createTable);
lf.schema.Builder.prototype.setPragma = function $lf$schema$Builder$$setPragma$($pragma$$) {
  if (this.finalized_) {
    throw new lf.Exception(535);
  }
  this.schema_.setPragma($pragma$$);
  return this;
};
goog.exportProperty(lf.schema.Builder.prototype, "setPragma", lf.schema.Builder.prototype.setPragma);
lf.schema.DatabaseSchema = function $lf$schema$DatabaseSchema$($name$$, $version$$) {
  this.name_ = $name$$;
  this.version_ = $version$$;
  this.tables_ = lf.structs.map.create();
  this.pragma_ = {enableBundledMode:!1};
};
goog.exportSymbol("lf.schema.DatabaseSchema", lf.schema.DatabaseSchema);
lf.schema.DatabaseSchema.prototype.name = function $lf$schema$DatabaseSchema$$name$() {
  return this.name_;
};
goog.exportProperty(lf.schema.DatabaseSchema.prototype, "name", lf.schema.DatabaseSchema.prototype.name);
lf.schema.DatabaseSchema.prototype.version = function $lf$schema$DatabaseSchema$$version$() {
  return this.version_;
};
goog.exportProperty(lf.schema.DatabaseSchema.prototype, "version", lf.schema.DatabaseSchema.prototype.version);
lf.schema.DatabaseSchema.prototype.tables = function $lf$schema$DatabaseSchema$$tables$() {
  return lf.structs.map.values(this.tables_);
};
goog.exportProperty(lf.schema.DatabaseSchema.prototype, "tables", lf.schema.DatabaseSchema.prototype.tables);
lf.schema.DatabaseSchema.prototype.table = function $lf$schema$DatabaseSchema$$table$($tableName$$) {
  if (!this.tables_.has($tableName$$)) {
    throw new lf.Exception(101, $tableName$$);
  }
  return this.tables_.get($tableName$$);
};
goog.exportProperty(lf.schema.DatabaseSchema.prototype, "table", lf.schema.DatabaseSchema.prototype.table);
lf.schema.DatabaseSchema.prototype.info = function $lf$schema$DatabaseSchema$$info$() {
  this.info_ || (this.info_ = new lf.schema.Info(this));
  return this.info_;
};
lf.schema.DatabaseSchema.prototype.setTable = function $lf$schema$DatabaseSchema$$setTable$($table$$) {
  this.tables_.set($table$$.getName(), $table$$);
};
lf.schema.DatabaseSchema.prototype.pragma = function $lf$schema$DatabaseSchema$$pragma$() {
  return this.pragma_;
};
goog.exportProperty(lf.schema.DatabaseSchema.prototype, "pragma", lf.schema.DatabaseSchema.prototype.pragma);
lf.schema.DatabaseSchema.prototype.setPragma = function $lf$schema$DatabaseSchema$$setPragma$($pragma$$) {
  this.pragma_ = $pragma$$;
};
lf.schema.create = function $lf$schema$create$($dbName$$, $dbVersion$$) {
  return new lf.schema.Builder($dbName$$, $dbVersion$$);
};
goog.exportSymbol("lf.schema.create", lf.schema.create);
try{if(module){module.exports=lf;}}catch(e){}}.bind(window))()
