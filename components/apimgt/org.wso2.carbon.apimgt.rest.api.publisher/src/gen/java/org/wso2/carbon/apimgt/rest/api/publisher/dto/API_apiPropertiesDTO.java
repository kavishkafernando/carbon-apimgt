package org.wso2.carbon.apimgt.rest.api.publisher.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.Objects;

/**
 * API_apiPropertiesDTO
 */
public class API_apiPropertiesDTO   {
  @SerializedName("key")
  private String key = null;

  @SerializedName("value")
  private String value = null;

  private String id = null;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public API_apiPropertiesDTO(String key, String value) {
    this.key = key;
    this.value = value;
  }

   /**
   * Get key
   * @return key
  **/
  @ApiModelProperty(example = "environment", value = "")
  public String getKey() {
    return key;
  }

  public void setKey(String key) {
    this.key = key;
  }

  public API_apiPropertiesDTO value(String value) {
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @ApiModelProperty(example = "preprod", value = "")
  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    API_apiPropertiesDTO apIApiProperties = (API_apiPropertiesDTO) o;
    return Objects.equals(this.key, apIApiProperties.key) &&
        Objects.equals(this.value, apIApiProperties.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(key, value);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class API_apiPropertiesDTO {\n");

    sb.append("    key: ").append(toIndentedString(key)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

