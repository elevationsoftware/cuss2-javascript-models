# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.ApplicationActivation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationBrand** | **String** | The application can use this value to change its look, feel, or behaviour. | [optional] 
**executionMode** | **String** | Indicates the mode of execution.&lt;p&gt; *MAM:* Multi Appliaction Mode &lt;br&gt; *DSAM:* Dedicated Single Application Mode  | 
**accessibleMode** | **Boolean** | Indicates whether to operate in ACCESSIBLE mode or not. | 
**executionOptions** | **[String]** | Any additional options of execution in combination with the executionMode. | [optional] 
**languageID** | **String** | As per RFC3066.- Please refer also to: http://www.lingoes.net/en/translator/langcode.htm | 
**transferData** | **Blob** | Any data to be exchanged between callers and callees after a transfer call or self-activation. | [optional] 

<a name="ExecutionModeEnum"></a>
## Enum: ExecutionModeEnum

* `MAM` (value: `"MAM"`)
* `DSAM` (value: `"DSAM"`)

