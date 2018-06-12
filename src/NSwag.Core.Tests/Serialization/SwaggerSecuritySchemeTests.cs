using System.Collections.Generic;
using System.Threading.Tasks;
using NJsonSchema;
using Xunit;

namespace NSwag.Core.Tests.Serialization
{
    public class SwaggerSecuritySchemeTests
    {
        [Fact]
        public void When_security_schema_is_defined_as_Swagger_and_serialized_as_Swagger_then_it_is_correct()
        {
            //// Arrange
            var document = CreateSwaggerDocument();

            //// Act
            var json = document.ToJson(SchemaType.Swagger2);

            //// Assert
            Assert.Contains(@"""type"": ""basic""", json);
            Assert.Contains(@"""authorizationUrl"": ""AuthUrl""", json);
            Assert.DoesNotContain(@"""flows""", json);
        }

        [Fact]
        public void When_security_schema_is_defined_as_Swagger_and_serialized_as_OpenApi_then_it_is_correct()
        {
            //// Arrange
            var document = CreateSwaggerDocument();

            //// Act
            var json = document.ToJson(SchemaType.OpenApi3);

            //// Assert
            Assert.Contains(@"""type"": ""http""", json);
            Assert.Contains(@"""scheme"": ""basic""", json);
            Assert.Contains(@"""authorizationUrl"": ""AuthUrl""", json);
            Assert.Contains(@"""flows""", json);
            Assert.DoesNotContain(@"""flow""", json);
        }

        [Fact]
        public void When_security_schema_is_defined_as_OpenApi_and_serialized_as_Swagger_then_it_is_correct()
        {
            //// Arrange
            var document = CreateOpenApiDocument();

            //// Act
            var json = document.ToJson(SchemaType.Swagger2);

            //// Assert
            Assert.Contains(@"""type"": ""basic""", json);
            Assert.Contains(@"""authorizationUrl"": ""AuthUrl""", json);
            Assert.DoesNotContain(@"""flows""", json);
        }

        [Fact]
        public void When_security_schema_is_defined_as_OpenApi_and_serialized_as_OpenApi_then_it_is_correct()
        {
            //// Arrange
            var document = CreateOpenApiDocument();

            //// Act
            var json = document.ToJson(SchemaType.OpenApi3);

            //// Assert
            Assert.Contains(@"""type"": ""http""", json);
            Assert.Contains(@"""scheme"": ""basic""", json);
            Assert.Contains(@"""refreshUrl"": ""RefreshUrl""", json);
            Assert.Contains(@"""tokenUrl"": ""TokenUrl""", json);
            Assert.Contains(@"""authorizationUrl"": ""AuthUrl""", json);
            Assert.Contains(@"""flows""", json);
            Assert.DoesNotContain(@"""flow""", json);
        }

        private static SwaggerDocument CreateSwaggerDocument()
        {
            var document = new SwaggerDocument();
            document.SecurityDefinitions.Add("foo", new SwaggerSecurityScheme
            {
                Name = "Baz",
                Description = "Bar",
                Type = SwaggerSecuritySchemeType.Basic,
                Flow = SwaggerOAuth2Flow.Application,
                In = SwaggerSecurityApiKeyLocation.Header,
                AuthorizationUrl = "AuthUrl",
            });

            return document;
        }

        private static SwaggerDocument CreateOpenApiDocument()
        {
            var document = new SwaggerDocument();
            document.SecurityDefinitions.Add("foo", new SwaggerSecurityScheme
            {
                Name = "Baz",
                Description = "Bar",
                Type = SwaggerSecuritySchemeType.Http,
                Scheme = "basic",
                In = SwaggerSecurityApiKeyLocation.Cookie,
                Flows = new OpenApiOAuthFlows
                {
                    AuthorizationCode = new OpenApiOAuthFlow
                    {
                        RefreshUrl = "RefreshUrl",
                        TokenUrl = "TokenUrl",
                        AuthorizationUrl = "AuthUrl"
                    }
                }
            });

            return document;
        }
    }
}